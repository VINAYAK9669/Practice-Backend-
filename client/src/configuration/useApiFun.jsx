import axios from "axios";

import { loginUserURL, regsiterUserURL } from "../data/useApiUrl";

function useApiFun() {
  // TODO: User Register Function
  const addNewUser = async (newUser) => {
    try {
      const response = await axios.post(regsiterUserURL, newUser);
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  };
  // TODO: User LOGIN Function
  const loginUser = async (userData) => {
    try {
      const response = await axios.post(loginUserURL, userData);
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { addNewUser, loginUser };
}

export default useApiFun;
