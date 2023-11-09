import axios from "axios";

const instance = axios.create({
      baseURL: 'https://dev-connect-bd-server.vercel.app/api/v1',
      withCredentials: true,
});

const useAxios = () => {
      return instance;
};

export default useAxios;