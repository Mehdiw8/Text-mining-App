import React,{useState}  from 'react';
import Header from './Components/Header/Header'
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignUp/Login';
import NavH from './Components/MainBody/NavH';
import {Route,Routes} from 'react-router-dom';
import Panel from './Components/Panel/Panel'
import Context from './Components/Context/Context'
const App = () => {
  const [btn, setBtn] = useState(false);
  const value = { btn, setBtn};
  return (
   <>
   <Context value={value}>
    <Routes>
      <Route  path='/SignUp' element={<><Header /><SignUp /></> } />
      <Route path="/Login" element={<><Header /><Login /></>} />
      <Route path="*" element={<><Header /><NavH/></>} ></Route>
      <Route path="/Panel" element={<Panel />}></Route>
      <Route path="/TextAnalysis" element={<Panel />}></Route>
      <Route path="/SpellCheck" element={<Panel />}></Route>
      <Route path="/Typos" element={<Panel />}></Route>
      <Route path="/Summary" element={<Panel />}></Route>
      <Route path="/Profile" element={<Panel />}></Route>
    </Routes>
    </Context>
    </>
  );
};

export default App;