import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import RoomList from './components/RoomList';
import Profile from './components/Profile';
import HomePage from './components/HomePage'
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div>
        <BrowserRouter>
            <Navbar/>
            <div>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/rooms" element={<RoomList />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            </div>    
        </BrowserRouter>
            </div>
    );
};

export default App;