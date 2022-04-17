
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appoinment from './components/Appoinment/Appoinment';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequirAuth from './components/RequirAuth/RequirAuth';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/appoinment' element={
          <RequirAuth>
            <Appoinment />
          </RequirAuth>}>
        </Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
