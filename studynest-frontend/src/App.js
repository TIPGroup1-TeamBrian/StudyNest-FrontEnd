import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import StudentHomeComponent from './components/StudentHomeComponent';
import RegisterStudent from './pages/RegisterStudent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/StudentHome' element={<StudentHomeComponent/>}/>
        <Route path='/login/RegisterStudent' element={<RegisterStudent/>}/>

        
        
      
      </Routes>
    
    </>
  );
}

export default App;
