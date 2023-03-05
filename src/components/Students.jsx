import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  act_delete_student,
  act_get_student,
  act_search_student,
} from "../redux/actions";
import * as actionTypes from "../redux/constants/actionTypes";
import "../css/students.css";

export default function Students() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listStudent = useSelector((state) => state.students);
  useEffect(() => {
    dispatch(act_get_student(actionTypes.GET_STUDENT));
  }, [dispatch]);
  let elementListStudent = listStudent.map((e) => (
    <tr key={e.id}>
      <td>{e.id}</td>
      <td>{e.studentName}</td>
      <td>{e.age}</td>
      <td>{e.status}</td>
      <td>
        <button>Edit</button>
      </td>
      <td>
        <button className="delete"
          id={e.id}
          onClick={deleteStudent}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  function deleteStudent(e) {
    dispatch(act_delete_student(e.target.id));
  }
  function searchStudent(e) {
    if (e.target.value === "" || e.key === "Backspace")
      dispatch(act_get_student(actionTypes.GET_STUDENT));
    else dispatch(act_search_student(e.target.value));
  }
  return (
    <div className="student-box">
      <h1>Students</h1>
      <label htmlFor="search">Search :</label>
      <input type="search" name="search" onKeyDown={searchStudent} />
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Status</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>{elementListStudent}</tbody>
      </table>
      <button className="createStudent" onClick={() => navigate("/studentForm")}>
        Create New Students
      </button>
    </div>
  );
}
