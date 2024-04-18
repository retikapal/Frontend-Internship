// components/NodeButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { createNode } from '../redux/actions';

const NodeButton = ({ onCreateNode }) => {
  return (
    <button className="node-button" onClick={onCreateNode}>
      <FaPlus /> Create Node
    </button>
  );
};

export default NodeButton;
