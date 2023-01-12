
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import DaTa from './components/Data/data';
import { Error404 } from './Error404/Error404';

function App() {
  return (
    
    <div className='App'>
 
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Error404/>}/>
      <Route path='/data' element={<DaTa></DaTa>}/>
      </Routes>
      
    </div>
    

  );
}

export default App;
