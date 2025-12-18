import './App.css';
import {  Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth.jsx';
function App() {
  return (
    <>
    
    <Router>
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/auth' element={<Auth/>}/>
       </Routes>
    </Router>
    </>
  );
}

export default App;
