import React,{useState}  from 'react';
import Header from './Components/Header/Header'
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignUp/Login';
import NavH from './Components/MainPage/NavH';
import {Route,Routes} from 'react-router-dom';
import Panel from './Components/Panel/Panel'
import Context from './Components/Context/Context'
import DataContextLS from './Components/Context/DataContextLS'
import Success from './Components/SignUp/Success'
const App = () => {
  const [userDetail,setUserDetail] =useState()
  const [btn, setBtn] = useState(false);
  const value = { btn, setBtn};
  return (
   <>
   <Context value={value}>
     <DataContextLS>
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
      <Route path="/success" element={<><Header /><Success/></>} ></Route>
    </Routes>
    </DataContextLS>
    </Context>
    </>
  );
};

export default App;