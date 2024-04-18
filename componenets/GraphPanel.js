// components/GraphPanel.js
import React from 'react';
import ReactFlow from 'react-flow-renderer';

const GraphPanel = ({ nodes }) => {
  return (
    <div className="graph-panel">
      <ReactFlow elements={nodes.map(node => ({
        id: node.id,
        type: 'default',
        data: { label: node.title },
        position: { x: node.x, y: node.y },
      }))} />
    </div>
  );
};

export default GraphPanel;
