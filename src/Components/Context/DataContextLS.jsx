import React,{createContext,useState} from 'react';

export const dataContext = createContext()

const DataContextLS = (props) => {
        const [userData,setUserData] = useState()
        const emails = JSON.parse(localStorage.getItem('emails'));
        const userDetails = JSON.parse(localStorage.getItem('user'));
        // console.log(emails);
        // console.log(userDetails);
        // emails.map((email) => {
        //         userDetails.map((user) => {
        //                 if(email === user.email){
        //                         console.log(user);
        //                 }
        //         })
        //         // console.log(email);
        //         // if(email === )
        //         // const data =localStorage.getItem(email)
        //         // setUserData(data)
        // })
     
        return (
                <dataContext.Provider value={{emails,userDetails}}>
                        {props.children}
                       
                </dataContext.Provider>
        );
};

export default DataContextLS;