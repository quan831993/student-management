import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { act_create_student } from "../redux/actions";
import "../css/createStudent.css";

export default function CreateStudents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("");
  const handleCreateStudent = (e) => {
    e.preventDefault();
    dispatch(act_create_student({ studentId, studentName, age, status }));
    navigate("/");
  };
  function cancel() {
    navigate("/");
  }
  return (
    <form onSubmit={handleCreateStudent} className="create-form">
      <h1>CreateStudents</h1>
      <label htmlFor="studentId">Student ID</label>
      <input
        type="number"
        name="studentId"
        id="studentId"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <br />
      <label htmlFor="studentName">Student Name</label>
      <input
        type="text"
        name="studentName"
        id="studentName"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <br />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        name="age"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <label htmlFor="status">Sex</label>
      <input
        type="text"
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <br />
      <div className="btn">
        <button>Create</button>
        <div className="button" onClick={cancel}>
          Cancel
        </div>
      </div>
    </form>
  );
}
