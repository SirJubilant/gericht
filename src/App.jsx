import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Topbar from "./components/Topbar/Topbar";
import Home from "./Routes/Home";
import Pages from "./Routes/Pages/Pages";
import Blog from "./Routes/Blog/Blog";
import Login from "./Routes/Login/Login";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>

      <Topbar />

      <Routes>
          <Route index element={<Home />}/>
          <Route path='pages' element={<Pages />}/>
          <Route path='blog' element={<Blog />}/>
          <Route path='login' element={<Login />}/>
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
