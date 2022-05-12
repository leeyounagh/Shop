
import './App.css';
import {Routes,Route, Router, BrowserRouter} from'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage'
import auth from './hoc/auth';
import NavBar from './components/NavBar/NavBar';

function App() {
 
  return (
    <div className="App">
   
      <div>
        

      <NavBar></NavBar>
       
       <Routes>
   
         <Route exact path ="/" element={auth(LandingPage,null)}/>
         
         
          <Route exact path='/register/' element={auth(RegisterPage,false)}>

          </Route>
         <Route exact path='/login/' element={auth(LoginPage,false)}></Route>

          
         
        </Routes>
      
    
     
        
      </div>
   
   
    </div>
  );
}


export default App;
