import React, { useEffect, useRef, useState } from 'react';
import cytoscape from 'cytoscape';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import coseBilkent from 'cytoscape-cose-bilkent';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import automove from 'cytoscape-automove';
import NodeInformation from '../components/NodeInformation';
import { generateAllData as getData } from '../utils/projectData';
import Post from '../interfaces/Post';
import Posts from '../interfaces/Posts';
import {
  addEdge,
  removeNodeOrEdge,
  colorNode,
  colorEdge,
  appendData,
  initCytoscape,
} from '../utils/cytoScapeFunctions';

cytoscape.use(coseBilkent);
cytoscape.use(automove);

const ProjectGraph = (): React.ReactElement => {
  const [cy, setCy] = useState<cytoscape.Core>();
  const [cyData, setCyData] = useState<[string, Post[]]>([] as unknown as Posts);
  const firstLoad = useRef(true);

  // Get data from pregenerated graph data
  const loadProjectData = async (): Promise<void> => {
    const data = await getData();
    data.forEach((post: Posts) => {
      setCyData((oldArray: Posts) => [...oldArray, post] as unknown as Posts);
    });
  };

  // If data is loaded render the graph
  useEffect(() => {
    cy && appendData(cy, cyData, false);
  }, [cyData]);

  // Init cytoscape and load data
  useEffect(() => {
    if (firstLoad.current) {
      setCy(initCytoscape);
      firstLoad.current = false;
      loadProjectData();
    }
  }, []);

  return (
    <>
      <div id="canvas-wrap">
        <div id="cy" className="cytoscape__div" />
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
    </>
  );
};

export default ProjectGraph;
