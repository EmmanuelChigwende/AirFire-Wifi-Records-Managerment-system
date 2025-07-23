import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { useState } from 'react';

const App = () => {
  const [isLogged, setLogged] = useState(false);

  return (
    <div className='w-[100vw] h-[100vh] overflow-x-hidden'>
        <Routes>
          <Route
            path="*"
            element={
              isLogged ? <Home /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/login"
            element={<Login setLogged={setLogged} />}
          />
        </Routes>
    </div>
  );
};

export default App;