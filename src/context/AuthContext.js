// import React, {createContext, useEffect, useState, useCallback} from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// const AuthProvider = ({children}) => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [userToken, setUserToken] = useState(null);
//     const [userInfo, setUserInfo] = useState(null);
//     const [userBalance, setUserBalance] = useState(null);
//     const [errorMessage, setErrorMessage] = useState(null);
    
//     const login = async (email, password) => {
//         const authUser = {email, password}
//         setIsLoading(true)zq
        
//         try {
//           const {data} = await axios.post('https://hordecall.net/new/public/api/login', authUser)
//           if(data.status === "200"){
//             setErrorMessage(null);
//                 AsyncStorage.removeItem('errorMessage');
//                 let userInfo = data;
//                 setUserInfo(userInfo);
//                 setUserToken(userInfo.user.api_token);
//                 AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//                 AsyncStorage.setItem('userToken', userInfo.user.api_token);
                
//                 console.log(userInfo.user.api_token)
//                 let token = userInfo.user.api_token
//                 let asyncToken = AsyncStorage.getItem('userToken');
//                 console.log("asynShit" + asyncToken);
//                 console.log("synShit" + token);
                
//                 try {
//                   const {data} = await axios.get('https://hordecall.net/new/public/api/walletbal', { headers: {apiToken: token } })
//                   console.log( `dataData - ${JSON.stringify(data)}`);
//                 if(data.status === "200"){
                    
//                   setErrorMessage(null);
//                   AsyncStorage.removeItem('errorMessage');
//                   setUserBalance(data.data);
//                   AsyncStorage.setItem('userBalance', data.data);
//                   setIsLoading(false)
//                 }else if(data.status === "302"){
//                   logout();
//                   setIsLoading(false)
//                 }else{
//                   let errorMessage = data.message;
                  
//                   console.log(errorMessage)
//                   setErrorMessage(errorMessage);
//                   AsyncStorage.setItem('errorMessage', JSON.stringify(errorMessage));
//                   setIsLoading(false)
//                 }
//                 } catch (error) {
//                   console.log('login error', error)
//                 }
//           }
//         } catch (error) {
//           console.log('login error', error)
//         }
//         setIsLoading(false)
    
//       }
      
//     useEffect(() => {
//         // isLoggedIn();
//     }, []);
      
//     return (
//         <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo, errorMessage}}>
//           {children}
//         </AuthContext.Provider>
//     );
// };
    
//     export {AuthContext, AuthProvider};