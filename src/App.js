import './App.css';
import Header from './Components/Header.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Components/Footer';
import P2w from './Pages/P2w';
import W2p from './Pages/W2p';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<P2w/>}></Route>
      <Route exact path='/word2pdf' element={<W2p/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
