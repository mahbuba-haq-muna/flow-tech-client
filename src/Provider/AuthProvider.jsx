import { createUserWithEmailAndPassword,
    getAuth,
     onAuthStateChanged,
      signInWithEmailAndPassword,
       signOut,
       GoogleAuthProvider,
       signInWithPopup,
       updateProfile
    } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config"
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
export const AuthContext = createContext(null);

const auth = getAuth(app)


const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

const AuthProvider = ({children}) => {
   const[user, setUser]= useState(null);
   const [loading, setLoading] = useState(true)
//    const axiosPublic = useAxiosPublic()

   const createUser = (email, password) =>{
       setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
   }

const googleProvider = new GoogleAuthProvider();

   const googleSignIn = ()=>{
       return signInWithPopup(auth, googleProvider)
   }

   const signIn = (email, password) =>{
       setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = ()=>{
       setLoading(true)
       return signOut(auth)
   }

   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser=>{
           console.log('user on Uth change', currentUser)
           setUser(currentUser);
        //    if (currentUser) {
        //     // get token and store client
        //     const userInfo = { email: currentUser.email };
        //     axiosPublic.post('/jwt', userInfo)
        //         .then(res => {
        //             if (res.data.token) {
        //                 localStorage.setItem('access-token', res.data.token);
        //             }
        //         })
        // }
        // else {
        //     // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
        //     localStorage.removeItem('access-token');
        // }
           setLoading(false)
       });
       return ()=>{
           unsubscribe();
       }
   },[])

const AuthInfo ={
   user,
   loading,
   createUser,
   logOut,
   signIn,
   googleSignIn,
   updateUserProfile
}
   
   return (
       <AuthContext.Provider value={AuthInfo}>
           {children}
       </AuthContext.Provider>
   );
};

export default AuthProvider;