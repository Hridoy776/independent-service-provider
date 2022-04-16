import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}/>
        <Route path='/blog' element={<Blog></Blog>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
    </div>
  );
}

export default App;
