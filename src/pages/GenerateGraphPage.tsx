import React, { useEffect, useRef, useState } from 'react';
import cytoscape from 'cytoscape';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import coseBilkent from 'cytoscape-cose-bilkent';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cxtmenu from 'cytoscape-cxtmenu';
import { Box } from '@material-ui/core';
import { toast, ToastContainer } from 'react-toastify';
import NodeInformation from '../components/NodeInformation';
import 'react-toastify/dist/ReactToastify.css';
import Posts from '../interfaces/Posts';
import {
  initCytoscape,
  addEdge,
  removeNodeOrEdge,
  colorNode,
  colorEdge,
  appendData,
} from '../utils/cytoScapeFunctions';
import { ping, calcResTime } from '../utils/bandwidth';

cytoscape.use(coseBilkent);
cytoscape.use(cxtmenu);

const GenerateGraphPage = (): React.ReactElement => {
  const [cy, setCy] = useState<cytoscape.Core>();
  const [cyData, setCyData] = useState<Posts>([] as unknown as Posts);
  const firstLoad = useRef(true);
  const [loading, setLoading] = useState(false);
  const [subredditName, setSubredditName] = useState('');
  const [postCount, setPostCount] = useState(15);
  const [resTime, setResTime] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  // Display the loading bar
  useEffect(() => {
    if (!loading) return;
    let counter = 0;
    let progressPrecentage = 0;
    const responseTime = calcResTime(resTime, postCount);
    const timer = setInterval(() => {
      counter += 1;
      progressPrecentage = (counter * 100) / responseTime;
      setProgress(progressPrecentage);
      if (progressPrecentage >= 100) {
        setProgress(100);
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [loading]);

  // API request for getting data by subreddit name
  const fetchData = (): void => {
    // If no name has been entered
    if (!subredditName) {
      toast.warning('Please enter a subreddit name');
      return;
    }
    // If no name has been entered
    if (loading) {
      toast.warning('Please wait for the previous request to finish');
      return;
    }
    // Empty the input
    setSubredditName('');
    setLoading(true);
    fetch(`/api/v1/data/${subredditName}/${postCount}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((doc) => {
        if (!doc) {
          toast.warning('Can not find this Subreddit!');
          setLoading(false);
          return;
        }
        setCyData((oldArray: Posts) => [...oldArray, doc] as unknown as Posts);
        localStorage.setItem(doc[0], JSON.stringify(doc));
        setLoading(false);
        setProgress(0);
      })
      .catch((err) => {
        toast.error('Server Error!');
        setLoading(false);
        setProgress(0);
      });
  };

  // Load all data that exists in local storage
  const loadFromStorage = (): void => {
    const postsStorage = Object.entries(localStorage);
    postsStorage.forEach((posts) => {
      setCyData((oldArray: Posts) => [...oldArray, JSON.parse(posts[1])] as unknown as Posts);
    });
  };

  // Delete grapgh and all associated data
  const deleteGraph = (): void => {
    localStorage.clear();
    cy?.elements().remove();
    setCyData([] as unknown as Posts);
  };

  // If data has been received render the graph
  useEffect(() => {
    cy && appendData(cy, cyData);
  }, [cyData]);

  // Init cytoscape and load the data from localstorage
  useEffect(() => {
    if (firstLoad.current) {
      setCy(initCytoscape());
      firstLoad.current = false;
      loadFromStorage();
      ping().then((res: number) => setResTime(res));
    }
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      {loading
      && (
        <>
          <div className="loading-spinner">
            <CircularProgress color="secondary" size={50} />
          </div>
          <LinearProgress color="secondary" className="progress-bar" variant="determinate" value={progress} />
        </>
      )}
      <div className="generate__page">
        <div className="scrape-controls__div">
          <div className="posts-slider">
            <Box mx={2}>
              <Typography id="slider" variant="body2">
                User Count
              </Typography>
              <Slider
                defaultValue={15}
                step={5}
                min={5}
                max={100}
                valueLabelDisplay="on"
                marks
                aria-labelledby="discrete-slider-small-steps"
                onChangeCommitted={(e, value): void => setPostCount(value as number)}
                color="secondary"
              />
            </Box>
          </div>
          <div className="line-high">
            <Box mx={2}>
              <TextField
                value={subredditName}
                label="Subreddit Name"
                aria-labelledby="subredditName"
                onChange={(e): void => setSubredditName(e.target.value)}
                onKeyPress={(e): void => {
                  if (e.key === 'Enter') fetchData();
                }}
              />
            </Box>
          </div>
          <div className="line-high gen__button">
            <Box mx={2}>
              <Button variant="contained" color="primary" onClick={fetchData}>
                Generate Subreddit
              </Button>
            </Box>
          </div>
          <div className="line-high gen__button">
            <Box mx={2}>
              <Button variant="contained" color="secondary" onClick={deleteGraph}>
                Clear All
              </Button>
            </Box>
          </div>
        </div>
        <div id="canvas-wrap">
          <div id="cy" className="cytoscape-calc__div" />
          {!firstLoad.current && (
          <NodeInformation
            cy={cy}
            removeNodeOrEdge={removeNodeOrEdge}
            addEdge={addEdge}
            colorNode={colorNode}
            colorEdge={colorEdge}
          />
          )}
        </div>
      </div>
    </>
  );
};

export default GenerateGraphPage;
