import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Photo from './components/Photo';
import Posts from './components/Posts';
import Maps from './components/Maps';
import Form from './components/Form';

// import Info from './components/Info';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="photos" element={<Photo />} />
        <Route path="posts" element={<Posts />} />
        <Route path="maps" element={<Maps />} />
        <Route path="form" element={<Form />} />
        {/* <Route path="info" element={<Info />} /> */}
      </Routes>
    </div>
  );
}

export default App;
