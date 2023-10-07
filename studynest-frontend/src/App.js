import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import StudentHomeComponent from './components/StudentHomeComponent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/StudentHome' element={<StudentHomeComponent/>}/>
        
        
      
      </Routes>
    
    </>
  );
}

export default App;
