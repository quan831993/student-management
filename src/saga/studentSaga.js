// dungf call de goi sang axios
import { call, put } from "redux-saga/effects";
// call(functionName,arguments)
import * as studentServices from "../api/studentService";
import { act_get_student, act_success } from "../redux/actions";
import { STUDENT_SUCCESS, GET_STUDENT } from "../redux/constants/actionTypes";
//Khi lam viec voi saga phai lam viec voi cac function generator



export const STUDENT_SAGA_GET = function* () {
  try {
    let listStudent = yield call(studentServices.STUDENT_GET);
    // CHuyeenr listSTudent sang student reducer
    // -->put(action)
    yield put(act_success(STUDENT_SUCCESS, listStudent));
  } catch (error) {
    console.log("ERROR -->", error);
  }
};
export const STUDENT_SAGA_POST = function* (action) {
  try {
    yield call(studentServices.STUDENT_POST, action.payload);
  } catch (error) {
    console.log("ERROR->", error);
  }
};

export const STUDENT_SAGA_DELETE = function* (action) {
  try {
    yield call(studentServices.STUDENT_DELETE, action.payload);
    yield put(act_get_student(GET_STUDENT));
  } catch (error) {
    console.log("ERROR->", error);
  }
};
