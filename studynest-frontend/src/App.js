import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SubjectComponent from './pages/SubjectComponent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Student/Subjects' element={<SubjectComponent/>}/>

        
      
      </Routes>
    
    </>
  );
}

export default App;
