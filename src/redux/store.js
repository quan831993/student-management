import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducers } from "./reducers/index";
import { rootSaga } from "../saga";
import createSagaMiddleware from "@redux-saga/core";
// Tao Saga
let sagaMiddleware = createSagaMiddleware();
export const rootStore = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);