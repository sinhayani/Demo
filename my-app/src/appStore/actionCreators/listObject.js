import { SET_LIST_OBJECT } from '../storeConstant';

export const setListObject = (value) => {
    return {
        type : SET_LIST_OBJECT,
        payload: value
    }
}