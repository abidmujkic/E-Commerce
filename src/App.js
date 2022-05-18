import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from "./Login";

 
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/login" exact element={<Login />} /> 
          <Route path='/' element={<Home />} />
          <Route path='/checkout' exact element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;