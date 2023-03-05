import * as actionTypes from "./constants/actionTypes";
export const act_create_student = (newStudents) => {
    return {
        type: actionTypes.CREATE_STUDENT,
        payload: newStudents,
    };
};
export const act_get_student = () => {
    return {
        type: actionTypes.GET_STUDENT,
    };
};

export const act_search_student = (searchData) => {
    console.log(searchData);
    return {
        type: actionTypes.SEARCH_STUDENT,
        payload: searchData
    };
};
export const act_delete_student = (id) => {
    console.log(id);
    return {
        type: actionTypes.DELETE_STUDENT,
        payload: id
    };
};

// action xu ly cac truong hop muon chuyen data tu saga sang reducer
export const act_success = (actionType, data) => {
    return {
        type: actionType,
        payload: data,
    };
};

