import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import UserType from './components/Register';
import LoginForm from './components/Login';
import CreateJobPostForm from './components/JobPost';
import './App.css';


function App() {
  return (
    <div 
    style={{
      //backgroundImage: `url(${backgroundImage})`
      background: 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)'}}
    className="app">
      <NavBar />
      
      <section id='landing'>
        <LandingPage />
      </section>

      <main>
        <UserType />
        <CreateJobPostForm/>
        <LoginForm />
      </main>
      
 
      
    </div>
  );
}

export default App;
