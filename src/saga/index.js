import { takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "../redux/constants/actionTypes";
import * as studentSagas from "./studentSaga";
export const rootSaga = function* () {
  yield all([
    takeLatest(actionTypes.GET_STUDENT, studentSagas.STUDENT_SAGA_GET),
    takeLatest(actionTypes.CREATE_STUDENT, studentSagas.STUDENT_SAGA_POST),
    takeLatest(actionTypes.DELETE_STUDENT, studentSagas.STUDENT_SAGA_DELETE),
  ]);
};
