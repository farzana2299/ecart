
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import SingleView from './pages/SingleView';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/view/:id' element={<SingleView></SingleView>}></Route>
        <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
