import { useEffect } from "react";

import {
  observeAuth
} from "./authService";


import {
  doc,
  getDoc
} from "firebase/firestore";


import { db } from "../services/firebase";


import {
  useAuthStore
} from "../store/authStore";



export default function AuthProvider({children}){


const setAuth =
useAuthStore(
 state=>state.setAuth
);


const clearAuth =
useAuthStore(
 state=>state.clearAuth
);



useEffect(()=>{


const unsubscribe =
observeAuth(async(user)=>{


if(user){


const snap =
await getDoc(
 doc(db,"users",user.uid)
);


setAuth(
 user,
 snap.exists()
 ? snap.data()
 : null
);


}else{


clearAuth();


}


});


return ()=>unsubscribe();


},[]);



return children;


}
