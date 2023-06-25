import { useEffect } from "react";

//cookeis
import { useCookies } from "react-cookie";

//react router dom
import { useNavigate } from "react-router-dom";

export default function Root() {
  //cookies
  const [cookies] = useCookies(["token"]);

  //navigation
  const navigate = useNavigate();

  useEffect(() => {
    //check if user has token
    if (cookies.token) {
      //user has token navigate => dashboard
      navigate("/dashboard");
    } else {
      //there is no any toke navigate => authentication
      navigate("/auth?status=login");
    }
  }, []);

  return <></>;
}
