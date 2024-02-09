import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import UserType from './components/Register';
import LoginForm from './components/Login';
import CreateJobPostForm from './components/JobPost';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginContext } from './components/LoginContext';
import {ProtectedRoutes} from './components/ProtectedRoutes';
import Navigation from './components/Navigation';
import './App.css';


function App() {
  return (
    <div 
    //style={{
      //backgroundImage: `url(${backgroundImage})`
      //background: 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)'}}
    className="app">
      <NavBar/>
      
       {/* <section id='landing'>
        <LandingPage />
      </section> */}

      {/* <main>
        <UserType />
        <CreateJobPostForm/>
        <LoginForm />
      </main>  */}

      {/* <Router>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<UserType />} />
          <Route path="/new-job" element={<CreateJobPostForm  />} />
          <Route path="/find-job" element={<CreateJobPostForm  />} />
        </Routes>
      </Router>  */}

      {/* <LoginContext>
        <Router>
          <Routes>
            
            <Route path="/login" element={<LoginForm/>} />
            
            <Route element={<ProtectedRoutes />}>
            <Route path="/register" element={<UserType />} />
            <Route path="/dashboard/*" element={<CreateJobPostForm />} />
            </Route>
          </Routes>
        </Router>
      </LoginContext>  */}
      
    </div>
  );
}

export default App;
