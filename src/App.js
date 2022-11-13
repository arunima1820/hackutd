import logo from './logo.svg';
import './App.css';
import LabelBottomNavigation from './components/bottomNav';
import Login from './components/login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { BottomNavigation } from '@mui/material';
import TrackSpending from './pages/trackSpending';
import SurveyPage from './pages/survey';
import { useState } from 'react';
import Piggy from './pages/piggy';
import SpendingCategory from './pages/spendingCategory';

function App() {
  const [userData, setUserData] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about" element={<SurveyPage data={userData} setData={setUserData} />} />
          <Route path="/piggy" element={<Piggy  data={userData} setData={setUserData} />} />

          <Route path="/login" element={<Login data={userData} setData={setUserData}  />} />
          <Route path="/trackSpending" element={<SpendingCategory  data={userData} setData={setUserData} />} />
          <Route path="/" element={<Login  data={userData} setData={setUserData} />} />
        </Routes>
    </Router>
    <BottomNavigation />
    </div>
  );
}

export default App;
