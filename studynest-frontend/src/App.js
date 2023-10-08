import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import RegisterStudent from "./pages/RegisterStudent";
import Login from "./pages/LoginRouter";
import LoginComponent from "./components/LoginComponent";
import StudentHomeComponent from './components/StudentHomeComponent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login/RegisterStudent' element={<RegisterStudent/>}/>
        <Route path="/StudentHome" element={<StudentHomeComponent/>}/>
      
      </Routes>
    
    </>
  );
}

export default App;
