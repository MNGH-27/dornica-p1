import React, { useEffect, useState } from "react";

//react router dom
import { useNavigate } from "react-router-dom";

//cookies
import { useCookies } from "react-cookie";

export default function WithUser(WrappedComponent) {
  return function WithUserLogin(props) {
    //navigation
    const navigate = useNavigate();
    //cookies
    const [cookies, setCookies, removeCookies] = useCookies(["token"]);
    //state
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      //check if we have token
      if (!cookies.token) {
        //there is no token , redirect to authentication page
        navigate("/auth");
      } else {
        //there is token => request for user
        httpGetSingleUser();
      }
    }, []);

    async function httpGetSingleUser() {
      //   setIsLoading(true);

      try {
        // const response = await GetSingleUser
        /**
         * TODO : check response status ::=>
         * 200 => save users data in redux and send it as props to wrappedComponent
         * 401 => token is wrong , remove token , redirect to login page
         */
      } catch (error) {
        console.log("error in get single user : ", error);
      }

      //   setIsLoading(false);
    }

    return isLoading ? (
      <span>is loading . . . </span>
    ) : (
      <WrappedComponent {...props} />
    );
  };
}
