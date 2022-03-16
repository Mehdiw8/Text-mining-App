import React,{useState,useEffect,createContext} from 'react';

export const contextL = createContext()

const Context = (props) => {
                const {btn,setBtn} = props.value
                const Url =window.location.href
                const [treu,setTreu] = useState(false)
                const [treu1,setTreu1] = useState(false)
                const [treu2,setTreu2] = useState(false)
                const [treu3,setTreu3] = useState(false)
                const [treu4,setTreu4] = useState(false)
                const [treu5,setTreu5] = useState(false)
               
                useEffect(()=>{
                   
                                if (Url.endsWith('panel')) {
                                        setTreu(true)
                                        setTreu2(false)
                                        setTreu3(false)
                                        setTreu4(false)
                                        setTreu5(false)
                                        setTreu1(false)
                                }
                                else if(Url.endsWith('TextAnalysis')){
                                        setTreu1(true)
                                        setTreu2(false)
                                        setTreu3(false)
                                        setTreu4(false)
                                        setTreu5(false)
                                        setTreu(false)
                                }
                                else if(Url.endsWith('SpellCheck')){
                                        setTreu2(true)
                                        setTreu3(false)
                                        setTreu4(false)
                                        setTreu5(false)
                                        setTreu1(false)
                                        setTreu(false)
                                }
                                else if(Url.endsWith('Typos')){
                                        setTreu3(true)
                                        setTreu2(false)
                                        setTreu4(false)
                                        setTreu5(false)
                                        setTreu1(false)
                                        setTreu(false)
                                }
                                else if(Url.endsWith('Summary')){
                                        setTreu4(true)
                                        setTreu2(false)
                                        setTreu3(false)
                                        setTreu5(false)
                                        setTreu1(false)
                                        setTreu(false)
                                }
                                else if(Url.endsWith('Profile')){
                                        setTreu5(true)
                                        setTreu2(false)
                                        setTreu3(false)
                                        setTreu4(false)
                                        setTreu1(false)
                                        setTreu(false)
                                }
                        
                // eslint-disable-next-line react-hooks/exhaustive-deps
                },[btn])
     



        return (
                <contextL.Provider value={{treu,treu1,treu2,treu3,treu4,treu5,btn,setBtn}}>
                        {props.children}
                </contextL.Provider>
        );
};

export default Context;