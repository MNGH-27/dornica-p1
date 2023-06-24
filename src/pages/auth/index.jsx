import { useEffect } from "react";

//react router dom
import { useSearchParams } from "react-router-dom";

//component
import Login from "../../components/pages/auth/login";
import Signup from "../../components/pages/auth/signup";

export default function Auth() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(
    () => {
      const searchParamsValue = searchParams.get("status");

      //check if we have searchParams
      if (searchParamsValue === undefined) {
        setSearchParams({
          status: "login",
        });
      }
      //check if we have enable status for search params
      else if (
        searchParamsValue !== "login" ||
        searchParamsValue !== "signup"
      ) {
        setSearchParams({
          status: "login",
        });
      }
    },
    //check it in component intial
    []
  );

  return (
    <div className="p-5">
      {searchParams.get("status") === "login" ? <Login /> : <Signup />}
    </div>
  );
}
