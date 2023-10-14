import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SubjectComponent from './pages/SubjectComponent';
import RegisterStudent from "./pages/RegisterStudent";
import Login from "./pages/LoginRouter";
import LoginComponent from "./components/LoginComponent";
import StudentHome from './pages/StudentHome';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/StudentSubManagement' element={<SubjectComponent/>}/>

        
        <Route path='/login/RegisterStudent' element={<RegisterStudent/>}/>
        <Route path="/StudentHome" element={<StudentHome/>}/>
      
      </Routes>
    
    </>
  );
}

export default App;
