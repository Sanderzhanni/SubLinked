import React, { useEffect, useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import { green, red } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import cytoscape from 'cytoscape';
import Node from '../interfaces/Node';
import SavedColor from '../interfaces/SavedColor';

const useStyles = makeStyles(() => createStyles({
  white: {
    color: '#fff',
  },
}));

interface NodeCardProps {
  cy: cytoscape.Core | undefined;
  addEdge: (cy: cytoscape.Core, source: string, target: string) => void;
  removeNodeOrEdge: (cy: cytoscape.Core, id: string) => void;
  colorNode: (cy: cytoscape.Core, nodeId: string, color: string, type: string) => void;
  colorEdge: (cy: cytoscape.Core, sourceId: string, targetId: string, color: string) => void;
}

const NodeInformation = (props: NodeCardProps): React.ReactElement => {
  const {
    removeNodeOrEdge, addEdge, cy, colorNode, colorEdge,
  } = props;
  const classes = useStyles();
  const [path, setPath] = useState<cytoscape.CollectionReturnValue>(
    [] as unknown as cytoscape.CollectionReturnValue,
  );
  const [savedColors, setSavedColors] = useState<SavedColor[]>([]);
  const [colorPathCheckbox, setColorPathCheckbox] = useState(false);
  const [sandBox, setSandBox] = useState<boolean>(false);
  const [hideLowDegreeNodes, setHideLowDegreeNodes] = useState<boolean>(false);
  const [common, setCommon] = useState({
    connected: false,
    distance: 0,
  });
  const [sourceNode, setSourceNode] = useState({
    id: '',
    type: '',
    degree: 0,
  });
  const [targetNode, setTargetNode] = useState({
    id: '',
    type: '',
    degree: 0,
  });

  // Convert a cytoscape node to our Node
  const setNode = (node: cytoscape.NodeSingular): Node => ({
    id: node.id(),
    type: node.data().type,
    degree: node.degree(false),
  });

  // Breath first search with aStart algorithm
  const BFSaStar = (): void => {
    if (sourceNode.id && targetNode.id) {
      let distance = 0;
      const searchaStar = cy?.elements().aStar({ root: `#${sourceNode.id}`, goal: `#${targetNode.id}` });
      const aStartPath = searchaStar?.path;
      if (!aStartPath) return; // If nodes are not connected
      for (let i = 0; i < aStartPath.length; i += 2) {
        distance += 1;
      }
      setCommon({
        connected: distance > 0,
        distance: distance - 1,
      });
      setPath(aStartPath);
    }
  };

  // Revert color changes
  const resetColors = (): void => {
    if (!cy) return;
    savedColors.forEach((item) => {
      if (item.source === item.target) {
        colorNode(cy, item.source, item.color, '');
      }
      colorEdge(cy, item.source, item.target, item.color);
    });
  };

  // Color the path from the aStart path
  const colorPath = (): void => {
    if (!cy) return;
    if (path.length > 1) {
      resetColors();
      let previous = '';
      const colors: SavedColor[] = [];
      for (let i = 0; i < path.length; i += 2) {
        colors.push({
          source: path[i].id(),
          target: path[i].id(),
          color: cy?.getElementById(path[i].id()).style('background-color'),
        });
        colorNode(cy, path[i].id(), 'green', '');
        if (previous) {
          colorEdge(cy, previous, path[i].id(), 'green');
          colors.push({
            source: previous,
            target: path[i].id(),
            color: 'gray',
          });
        }
        previous = path[i].id();
      }
      setSavedColors(colors);
    }
  };

  // Hide nodes that have less than 2 edges
  const hideNodes = (): void => {
    cy?.$('node').forEach((node: cytoscape.NodeSingular) => {
      if (node.degree(false) < 2) {
        if (hideLowDegreeNodes) {
          node.style({
            display: 'none',
          });
        } else {
          node.style({
            display: 'element',
          });
        }
      }
    });
  };

  // Right click menu
  const ctxMenu = (): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cy.cxtmenu({
      selector: 'edge',
      commands: [
        {
          content: 'Delete',
          select(e: cytoscape.NodeSingular): void {
            if (!cy) return;
            removeNodeOrEdge(cy, e.id());
          },
        },
      ],
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cy.cxtmenu({
      selector: 'node',
      commands: [
        {
          content: 'Select Source',
          select(e: cytoscape.NodeSingular): void {
            const node = setNode(e);
            setSourceNode(node);
          },
        },
        {
          content: 'Delete',
          select(e: cytoscape.NodeSingular): void {
            if (!cy) return;
            removeNodeOrEdge(cy, e.id());
          },
        },
        {
          content: 'Select Target',
          select(e: cytoscape.NodeSingular): void {
            const node = setNode(e);
            setTargetNode(node);
          },
        },
      ],
    });
  };

  // If cytoscape has been loaded init the ctx menu
  useEffect(() => {
    ctxMenu();
  }, [cy]);

  // If a new node is selected find the shortest path betweent them
  useEffect(() => {
    BFSaStar();
  }, [sourceNode, targetNode]);

  // Handle color change if low degree  nodes are hidden
  useEffect(() => {
    if (colorPathCheckbox) {
      colorPath();
    } else {
      resetColors();
    }
    if (common.distance === -1) {
      resetColors();
    }
  }, [colorPathCheckbox, path]);

  // Hide low degree nodes if user checks the box
  useEffect(() => {
    hideNodes();
  }, [hideLowDegreeNodes]);

  return (
    <>
      <div className="nodeInfo">
        <div className={classNames('sandbox__checkbox')}>
          <FormControlLabel
            control={(
              <Checkbox
                className={classes.white}
                checked={sandBox}
                onChange={(): void => setSandBox(!sandBox)}
                name="Multiple Nodes"
              />
            )}
            label="Info"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={hideLowDegreeNodes}
                onChange={(): void => setHideLowDegreeNodes(!hideLowDegreeNodes)}
                name="Multiple Nodes"
                className={classes.white}
              />
            )}
            label="Hide low degree nodes"
          />
        </div>

        <div className={classNames('details', { hidden: !sandBox })}>
          <>
            <Card className="Node-Card-Common" color="primary">
              <CardHeader
                subheader="Information"
                action={(
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={colorPathCheckbox}
                        onChange={(): void => setColorPathCheckbox(!colorPathCheckbox)}
                        name="Multiple Nodes"
                        color="secondary"
                      />
                    )}
                    label="Color Path"
                  />
                )}
              />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      Source:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      {sourceNode.id}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      Target:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      {targetNode.id}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      Connected:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      {common.connected ? <DoneIcon style={{ color: green[500] }} />
                        : <ClearIcon style={{ color: red[500] }} />}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      Distance:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      {common.distance !== -1 ? common.distance : <AllInclusiveIcon />}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" flexWrap="nowrap" justifyContent="space-between">
                      <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        onClick={(): void => {
                          if (!cy) return;
                          addEdge(cy, sourceNode.id, targetNode.id);
                          BFSaStar();
                        }}
                      >
                        Connect
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Divider className="phoneOnly" />
          </>
        </div>
      </div>
    </>
  );
};

export default NodeInformation;
