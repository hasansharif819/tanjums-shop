import './App.css';
import Header from './page/Shared/Header/Header';
import Footer from './page/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home/Home';
import Shop from './page/Home/Shop/Shop';
import Services from './page/Home/Services/Services';
import Login from './page/Login/Login/Login';
import NotFound from './page/Home/NotFound/NotFound';
import Sharee from './page/Home/Shop/Sharee/Sharee';
import SingleSharee from './page/Home/Shop/SingleSharee/SingleSharee';
import Lehenga from './page/Home/Shop/Lehenga/Lehenga';
import SingleLehenga from './page/Home/Shop/SingleLehenga/SingleLehenga';
import About from './page/Home/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/sharee' element={<Sharee></Sharee>}></Route>
        <Route path='/singlesharee' element={<SingleSharee></SingleSharee>}></Route>
        <Route path='/lehenga' element={<Lehenga></Lehenga>}></Route>
        <Route path='/singleLehenga' element={<SingleLehenga></SingleLehenga>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/accessory' element={<Shop></Shop>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
