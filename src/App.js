import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Navbar from './components/Navbar'


import HomePage from './pages/Homepage.js';
import BookingPage from './pages/Bookingpage';

const App = () => {
  return (
    <Router>
       <Navbar/>
      <div className="container">
          <Routes>
             <Route path='/' element={<HomePage/>}></Route>
             <Route path='/Booking' element={<BookingPage/>}></Route>
             
          </Routes>
      </div>
    </Router>
  );
}

export default App;
