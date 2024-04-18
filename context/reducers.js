import { CREATE_NODE, DELETE_NODE, EDIT_NODE_TITLE } from './action';

const initialState = {
    nodes: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NODE:
            return {
                ...state,
                nodes: [...state.nodes, { id: Date.now(), title: '', x: 0, y:0}],
            };
        case DELETE_NODE:
            return {
                ...state,
                nodes: state.nodes.filter(node => node.id !== action.payload),
            };
        case EDIT_NODE_TITLE:
            return {
                ...state,
                nodes: state.nodes.map(node =>
                    node.id === action.payload.nodeId ? { ...node, title: action.payload. newTitle } : node
                ),
            };
        default:
            return state;
    }
};

export default rootReducer;