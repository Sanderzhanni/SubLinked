const layoutOptions = {
  name: 'cose-bilkent',
  // Called on `layoutready`
  ready(): void {
  },
  // Called on `layoutstop`
  stop(): void {
  },
  // 'draft', 'default' or 'proof"
  // - 'draft' fast cooling rate
  // - 'default' moderate cooling rate
  // - "proof" slow cooling rate
  quality: 'draft',
  // Whether to include labels in node dimensions. Useful for avoiding label overlap
  nodeDimensionsIncludeLabels: true,
  // number of ticks per frame; higher is faster but more jerky
  refresh: 30,
  // Whether to fit the network view after when done
  fit: true,
  // Padding on fit
  padding: 10,
  // Whether to enable incremental mode
  randomize: true,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: 1000,
  // Ideal (intra-graph) edge length
  idealEdgeLength: 100,
  // Divisor to compute edge forces
  edgeElasticity: 0.1,
  // Nesting factor (multiplier) to compute ideal edge length for inter-graph edges
  nestingFactor: 0.1,
  // Gravity force (constant)
  gravity: 0.25,
  // Maximum number of iterations to perform
  numIter: 5000,
  // Whether to tile disconnected nodes
  tile: false,
  // Type of layout animation. The option set is {'during', 'end', false}
  animate: 'during',
  // Duration for animate:end
  animationDuration: 10,
  // Amount of vertical space to put between degree zero nodes
  // during tiling (can also be a function)
  tilingPaddingVertical: 10,
  // Amount of horizontal space to put between degree zero
  // nodes during tiling (can also be a function)
  tilingPaddingHorizontal: 10,
  // Gravity range (constant) for compounds
  gravityRangeCompound: 1.5,
  // Gravity force (constant) for compounds
  gravityCompound: 1.0,
  // Gravity range (constant)
  gravityRange: 3.8,
  // Initial cooling factor for incremental layout
  initialEnergyOnIncremental: 0.5,
};

export const layoutOptionsMini = {
  name: 'cose-bilkent',
  // Called on `layoutready`
  ready(): void {
  },
  // Called on `layoutstop`
  stop(): void {
  },
  // 'draft', 'default' or 'proof"
  // - 'draft' fast cooling rate
  // - 'default' moderate cooling rate
  // - "proof" slow cooling rate
  quality: 'draft',
  // Whether to include labels in node dimensions. Useful for avoiding label overlap
  nodeDimensionsIncludeLabels: true,
  // number of ticks per frame; higher is faster but more jerky
  refresh: 30,
  // Whether to fit the network view after when done
  fit: true,
  // Padding on fit
  padding: 10,
  // Whether to enable incremental mode
  randomize: true,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: 1000,
  // Ideal (intra-graph) edge length
  idealEdgeLength: 20,
  // Divisor to compute edge forces
  edgeElasticity: 0.1,
  // Nesting factor (multiplier) to compute ideal edge length for inter-graph edges
  nestingFactor: 0.1,
  // Gravity force (constant)
  gravity: 0.25,
  // Maximum number of iterations to perform
  numIter: 5000,
  // Whether to tile disconnected nodes
  tile: false,
  // Type of layout animation. The option set is {'during', 'end', false}
  animate: 'during',
  // Duration for animate:end
  animationDuration: 10,
  // Amount of vertical space to put between degree zero nodes
  // during tiling (can also be a function)
  tilingPaddingVertical: 10,
  // Amount of horizontal space to put between degree zero
  // nodes during tiling (can also be a function)
  tilingPaddingHorizontal: 10,
  // Gravity range (constant) for compounds
  gravityRangeCompound: 1.5,
  // Gravity force (constant) for compounds
  gravityCompound: 1.0,
  // Gravity range (constant)
  gravityRange: 3.8,
  // Initial cooling factor for incremental layout
  initialEnergyOnIncremental: 0.5,
};

export default layoutOptions;
