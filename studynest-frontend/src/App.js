import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Students/Home";
import Enrollment from './pages/Students/Enrollment';
import RegisterStudent from "./pages/Students/RegisterStudent";
import { UnenrollTeacher } from './pages/Admin/UnenrollTeacher';
import StudentHome from './pages/Students/StudentHome';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/StudentEnrollment' element={<Enrollment/>}/>
        <Route path='/Admin/UnenrollTeacher' element={<UnenrollTeacher />} />
        
        <Route path='/login/RegisterStudent' element={<RegisterStudent/>}/>
        <Route path="/StudentHome" element={<StudentHome/>}/>
      
      </Routes>

    </>
  );
}

export default App;
