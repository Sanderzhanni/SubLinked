import cytoscape from 'cytoscape';

interface AutomoveOptions {
  nodesMatching: cytoscape.CollectionReturnValue;
  reposition: string;
  dragWith: cytoscape.CollectionReturnValue;
}

export default interface Automove extends cytoscape.Core {
  automove: (options: string | AutomoveOptions) => void;
}
