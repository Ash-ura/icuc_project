import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Dashboard  from './components/Dashboard'
import Navbar from './components/Navbar';
import Members from './components/Members';
import Contributions from './components/Contributions';
import NotFound from './components/NotFound';

function App () {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route  path='/'  element={<Dashboard />} />
          <Route  path='login' exact element={<Login />} />
        <Route  path='members' element={<Members />} />
        <Route  path='contributions' element={<Contributions />} />
      <Route  path='*' element={<NotFound />} />
      </Routes>
   </Router>
  )
}

export default App;
