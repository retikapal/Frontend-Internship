// components/NodePopup.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNode, editNodeTitle } from '../redux/actions';

const NodePopup = () => {
  const dispatch = useDispatch();
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const nodes = useSelector(state => state.nodes);
  const selectedNode = selectedNodeId ? nodes.find(node => node.id === selectedNodeId) : null;
  const [newTitle, setNewTitle] = useState(selectedNode ? selectedNode.title : '');

  const handleDeleteNode = () => {
    if (selectedNodeId) {
      dispatch(deleteNode(selectedNodeId));
      setSelectedNodeId(null);
    }
  };

  const handleSaveTitle = () => {
    if (selectedNodeId) {
      dispatch(editNodeTitle(selectedNodeId, newTitle));
      setSelectedNodeId(null);
    }
  };

  return (
    <div className="node-popup">
      {selectedNode && (
        <div>
          <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <button onClick={handleSaveTitle}>Save</button>
          <button onClick={handleDeleteNode}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default NodePopup;
