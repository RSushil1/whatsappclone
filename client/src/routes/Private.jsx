import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { UseAuth } from "../context/Auth";
import Spinner from "../components/microComponets/Spinner";

const PrivateRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth] = UseAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("https://echochatserver.vercel.app/api/auth/user-auth", {
          headers: {
            Authorization: auth?.token,
          },
        });
        setOk(res.data.ok);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setOk(false);
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
};

export default PrivateRoute;