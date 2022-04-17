
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CheckOut from './Pages/CheckOut/CheckOut'
import AboutMe from './Pages/AboutMe/AboutMe';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/LoginPage/Login/Login';
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Packages from './Pages/Packages/Packages';

import ServiceDetails from './Pages/Home/Services/ServiceDetails/ServiceDetails';
import RequireAuth from './Pages/LoginPage/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/service/:serviceId'element={<ServiceDetails></ServiceDetails>}/>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }/>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}/>
        <Route path='/packages' element={<Packages></Packages>}/>
        <Route path='/blog' element={<Blog></Blog>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
