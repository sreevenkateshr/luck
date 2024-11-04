
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';


const App = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <Link to="/" className="mr-4 text-blue-600">Home</Link>
                    <Link to="/login" className="mr-4 text-blue-600">Login</Link>
                    <Link to="/signup" className="text-blue-600">Signup</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
};

export default App;

