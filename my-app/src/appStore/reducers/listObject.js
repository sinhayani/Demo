import { SET_LIST_OBJECT } from '../storeConstant';

const initialState = {
    list : []
}

const ListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LIST_OBJECT:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}

export default ListReducer;