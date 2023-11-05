import { useContext } from "react";
import { AuthContent } from "../Provider/AuthProvider";

const useAuth = () => {

      const all = useContext(AuthContent);
      return all;
};

export default useAuth;