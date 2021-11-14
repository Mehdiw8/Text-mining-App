import React from 'react';
import MainHeader from './Components/MainHeader'
import MainSignUp from './Components/MainSignUp.js';
import {Route,Routes,Redirect} from 'react-router-dom'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainHeader />} />
      <Route path='/SignUp' element={<MainSignUp />} />
    </Routes>
  );
};

export default App;