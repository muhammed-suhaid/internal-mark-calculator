import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDetails from './components/AddDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
