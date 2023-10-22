import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Enrollment from './pages/Students/Enrollment';
import RegisterStudent from "./pages/Students/RegisterStudent";
import { UnenrollTeacher } from './pages/Admin/UnenrollTeacher';
import StudentHome from './pages/Students/StudentHome';
import StudentSubject from './pages/Students/StudentSubject';
import StudentAccount from './pages/Students/StudentAccount';
import StudentSettings from './pages/Students/StudentSettings';
import AdminSettings from './pages/Admin/AdminSettings';
import AdminAccount from './pages/Admin/AdminAccount';
import TeacherHome from './pages/Teacher/TeacherHome';
import TeacherSessions from './pages/Teacher/TeacherSessions';
import TeacherAccount from './pages/Teacher/TeacherAccount';
import TeacherSettings from './pages/Teacher/TeacherSettings';
import EnrollTeacher from './pages/Admin/EnrollTeacher';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Student/Enrollment' element={<Enrollment/>}/>
        
        
        <Route path='/login/RegisterStudent' element={<RegisterStudent/>}/>
        <Route path="/Student/Home" element={<StudentHome/>}/>
        <Route path="/Student/Subjects" element={<StudentSubject/>} />
        <Route path='/Student/Account' element={<StudentAccount/>}/>
        <Route path="/Student/Settings" element={<StudentSettings/>} />


        <Route path='/Admin/UnEnroll' element={<UnenrollTeacher />} />
        <Route path="/Admin/Settings" element={<AdminSettings/>} />
        <Route path="/Admin/Account" element={<AdminAccount/>} />
        <Route path='/Admin/Enroll' element={<EnrollTeacher />} />


        <Route path="/Teacher/Home" element={<TeacherHome/>}/>
        <Route path="/Teacher/Sessions" element={<TeacherSessions/>}/>
        <Route path="/Teacher/Account" element={<TeacherAccount/>} />
        <Route path="/Teacher/Settings" element={<TeacherSettings/>} />

      </Routes>

    </>
  );
}

export default App;
