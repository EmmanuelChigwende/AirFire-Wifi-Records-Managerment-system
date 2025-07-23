import React from 'react';
import SideBar from '../Components/SideBar';
import Records from '../Components/Records';
import NewRecord from '../Components/NewRecord'
import { Route,Routes } from 'react-router-dom';
import PasswordManager from '../Components/PasswordManager';
import NewPassword from '../Components/NewPassword';
const Home = () => {
  return (
      <div className="w-full h-screen overflow-hidden flex  bg-[#F5F6FA]">
    
      <div className="w-[30%] fixed left-0 top-0 h-full bg-gray-900 z-10">
          <SideBar/>
      </div>

      <div className="ml-[30%] w-[70%] h-full overflow-y-auto p-6">
        <Routes>
          <Route path='/' element={<Records/>}/>
          <Route path='/new' element={<NewRecord/>}/>
          <Route path='/password' element={<PasswordManager/>}/>
          <Route path='/newPassword' element={<NewPassword/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;