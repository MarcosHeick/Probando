
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import DaTa from './components/Data/data';


function App() {
  return (
    
    <div className='App'>
 
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<div>NOOOOO</div>}/>
      <Route path='/data' element={<DaTa></DaTa>}/>
      </Routes>
      
    </div>
    

  );
}

export default App;
