import { Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import CreateStudents from "./components/CreateStudents";
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Students />} />
        <Route path='/studentForm' element={<CreateStudents />} />
      </Routes>
    </div>
  );
}

export default App;
