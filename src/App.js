import React from 'react';
import MainHeader from './Components/MainHeader'
import SignUp from './Components/SignUp'
import {Route,Routes,Redirect} from 'react-router-dom'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainHeader />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Routes>
  );
};

export default App;