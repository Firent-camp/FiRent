import React, { useState,useEffect, createContext } from "react";
import axios from "axios";
import ADRESS_API from "../API";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const userGetter = (data) => {
        setUser(data);
      };
  const [userDetail, setUserDetail] = useState({
    userName: '',
    lastName: '',
    address: '',
    email: '',

  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://${ADRESS_API}:5000/users/firebase/${user}`
        );
        if (response.status === 200) {
          const userData = response.data;
          setUserDetail(userData);

        } else {
          console.error("Failed to fetch user data. Status:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUserData();
  }, [user]);

console.log(userDetail,"from context");
  return (
    <AuthContext.Provider value={[userDetail,user,setUser, setUserDetail]}>
      {children}
    </AuthContext.Provider>
  );
};

// const TrakkerContext = createContext();

// const TrakkerProvider = ({ children }) => {
//   const [trakker, setTrakker] = useState(false);

//   return (
//     <TrakkerContext.Provider value={[trakker, setTrakker]}>
//       {children}
//     </TrakkerContext.Provider>
//   );
// };
// const organizationContext = createContext();


export { AuthContext, AuthProvider };
