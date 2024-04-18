export const CREAT_NODE = 'CREAT_NODE';
export const DELETE_NODE = 'DELETE_NODE';
export const EDIT_NODE_TITLE = 'EDIT_NODE_TITLE';

export const createNode = () =>({
    type: CREATE_NODE,
});

export const deleteNode = (nodeId) => ({
    type: DELETE_NODE,
});

export const editNodeTitle = (nodeId, newTitle) => ({
    type: EDIT_NODE_TITLE,
    payload: { nodeId, newTitle},
});
