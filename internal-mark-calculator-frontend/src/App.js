import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDetails from './components/AddDetails';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewAll />} />
          <Route path="/add-data" element={<AddDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
