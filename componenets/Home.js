// components/Home.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNode } from '../redux/actions';
import GraphPanel from './GraphPanel';
import NodeButton from './NodeButton';
import NodePopup from './NodePopup';

const Home = () => {
  const dispatch = useDispatch();
  const nodes = useSelector(state => state.nodes);

  const handleCreateNode = () => {
    dispatch(createNode());
  };

  return (
    <div className="home">
      <NodeButton onCreateNode={handleCreateNode} />
      <GraphPanel nodes={nodes} />
      <NodePopup />
    </div>
  );
};

export default Home;
