import React ,{useContext,useEffect,useState} from 'react';
import Dashbord from './Dashbord'
import Profile from './Profile'
import SpellC from './SpellC'
import Summary from './Summary'
import TextAnalysis from './TextAnalysis'
import Typos from './Typos'
import {contextL} from '../Context/Context'
const PanelContent = ({userLSd}) => {
        const linkW = useContext(contextL)
        const urlW=window.location.href
        const [mainPage,setMainPage]=useState(false)
        const {treu,treu1,treu2,treu3,treu4,treu5} =linkW
        useEffect(()=>{
                if(urlW.endsWith('/panel')){
                        setMainPage(true)
                }else{
                        setMainPage(false)
                }
        },[urlW])
        return (
                <>    
                        {(treu || mainPage) && <Dashbord userLSd={userLSd} /> }
                        
                        {/* test */}
                        {treu1 && <TextAnalysis/> }
                        {treu2 && <SpellC/> }
                        {treu3 && <Typos/> }
                        {treu4 && <Summary/> }
                        {treu5 && <Profile userLSd={userLSd} /> }
                </>
        );
};

export default PanelContent;