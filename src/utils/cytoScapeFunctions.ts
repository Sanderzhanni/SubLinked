import cytoscape from 'cytoscape';
import stc from 'string-to-color';
import Post from '../interfaces/Post';
import Posts from '../interfaces/Posts';
import Automove from '../interfaces/Automove';

// Initial cytoscape options
export const initCytoscape = (): cytoscape.Core => cytoscape({
  container: document.getElementById('cy'),
  style: [
    {
      selector: 'node',
      style: {
        'border-width': '2px',
        'border-style': 'solid',
        'border-color': 'rgba(0,0,0,.1)',
      },
    },
  ],
});

// Add a new node
export const addNode = (cy: cytoscape.Core, id: string, type: string): void => {
  cy.add([
    { group: 'nodes', data: { id, type } },
  ]);
};

// Change node size logarithmically
const sizeNodes = (cy: cytoscape.Core): void => {
  cy.$('node').forEach((node: cytoscape.NodeSingular) => {
    if (node.data().type !== 'subreddit' && node.degree(false)) {
      node.style({
        width: 20 + Math.log(node.degree(false)) * 15,
        height: 20 + Math.log(node.degree(false)) * 15,
      });
    } else if (node.degree(false)) {
      node.style({
        width: Math.log(node.degree(false)) * 8,
        height: Math.log(node.degree(false)) * 8,
      });
    }
  });
};

// Add an adge between 2 nodes
export const addEdge = (cy: cytoscape.Core, source: string, target: string): void => {
  if (!source || !target) return;
  if (cy.getElementById(target).length === 0) return;
  cy.add([
    { group: 'edges', data: { id: `${source}__${target}`, source, target } },
  ]);
  sizeNodes(cy);
};

// Remoce node or edge by ID
export const removeNodeOrEdge = (cy: cytoscape.Core, id: string): void => {
  if (!id) return;
  const node = cy?.$(`#${id}`);
  if (!node || !node.data()) return;
  const neighbours = node.neighborhood();
  cy.remove(node);
  if (node.data().type === 'subreddit') {
    cy.remove(neighbours);
    localStorage.removeItem(id);
    cy.layout({ name: 'cose-bilkent' }).run();
  }
  sizeNodes(cy);
};

// Apply color to a node
export const colorNode = (cy: cytoscape.Core, nodeId: string, color: string): void => {
  cy.getElementById(nodeId).style({
    'background-color': color,
    'border-opacity': '0.6',
  });
};

// Apply color to an edge
export const colorEdge = (
  cy: cytoscape.Core,
  sourceId: string,
  targetId: string,
  color: string,
): void => {
  cy.getElementById(`${sourceId}__${targetId}`).style({
    width: 3,
    'line-color': color,
  });
  cy.getElementById(`${targetId}__${sourceId}`).style({
    width: 3,
    'line-color': color,
  });
};

// Subreddit type node style
export const styleSubredditNode = (cy: cytoscape.Core, nodeId: string): void => {
  cy.getElementById(nodeId).style({
    'border-width': '2px',
    'border-style': 'solid',
    'border-color': '#888888',
    'border-opacity': '1',
  });
};

// Apply text to a node
const setLabel = (cy: cytoscape.Core, nodeId: string, label: string): void => {
  cy.getElementById(nodeId).style({
    label,
    color: '#f1efef',
    'text-outline-color': 'black',
    'text-outline-width': '1rem',
    'text-outline-opacity': '0.5',
    'font-size': '16rem',
    'text-halign': 'center',
    'text-valign': 'center',
  });
};

// Apply a shape to a node
export const changeNodeShape = (cy: cytoscape.Core, nodeId: string, shape: string): void => {
  cy.getElementById(nodeId).style('shape', shape);
  setLabel(cy, nodeId, nodeId);
};

// Make all same type of nodes move together while dragging
const applyAutomove = (cy: Automove, subreddit: string, nodes: string): void => {
  cy.automove({
    nodesMatching: cy.$(nodes),
    reposition: 'drag',
    dragWith: cy.$(`#${subreddit}`),
  });
};

// Connect same type of nodes
export const configureAutomove = (cy: cytoscape.Core): void => {
  cy.$('node[type = "subreddit"]').forEach((subreddit: cytoscape.NodeSingular) => {
    const nodes: string[] = [];
    subreddit.neighborhood('node').forEach((node: cytoscape.NodeSingular) => {
      const newNode: cytoscape.NodeSingular = node;
      // Dont apply automove twice to the same node
      !node.data().automove && nodes.push(`#${newNode.id()}`);
      newNode.data().automove = true;
    });
    // Dont apply automove to an empty array
    if (nodes.length === 0) return;
    applyAutomove(cy as Automove, subreddit.id(), nodes.join(', '));
  });
};

// Connect 2 nodes that appear under the same post as comments
const connectByComments = (cy: cytoscape.Core, comments: Post[]): void => {
  comments.forEach((commentForest: Post) => {
    commentForest.comments.forEach((comment: string) => {
      if (commentForest.author === comment) return;
      addEdge(cy, commentForest.author, comment);
    });
  });
};

export const appendData = (
  cy: cytoscape.Core,
  posts: Posts,
  affiliated = true,
): void => {
  const globalNodes: string[] = [];
  let postComments: Post[] = [];
  posts.forEach((post) => {
    const postSubredditName = post[0] as string;
    if (affiliated) {
      addNode(cy, postSubredditName, 'subreddit');
      colorNode(cy, postSubredditName, 'white');
      changeNodeShape(cy, postSubredditName, 'ellipse');
      styleSubredditNode(cy, postSubredditName);
    }
    for (let i = 1; i < post.length; i += 1) {
      const currentPost = post[i] as Post;
      const nodeId = currentPost.author;
      const commentForest = { author: nodeId, comments: currentPost.comments };
      postComments = [...postComments, commentForest];
      if (!globalNodes.includes(nodeId)) {
        addNode(cy, nodeId, 'author');
        affiliated && colorNode(cy, nodeId, stc(postSubredditName));
      }
      affiliated && addEdge(cy, postSubredditName, nodeId);
      globalNodes.push(nodeId);
    }
  });
  connectByComments(cy, postComments);
  cy.layout({ name: 'cose-bilkent' }).run();
  configureAutomove(cy);
};
