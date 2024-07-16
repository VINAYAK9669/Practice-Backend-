import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // TODO: Function to REGISTER THE NEW USER
  const addNewUser = async (newUser) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/register",
        newUser
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  };
  // TODO: Function to LOGIN THE USER and STORE THE TOKEN TO THE LOCAL STORAGE
  const loginUser = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        userData
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  };
  // TODO: Mutation function to REGISTER THE NEW USER
  const addUser = useMutation({
    mutationKey: ["newUserDetails"],
    mutationFn: addNewUser,
    onSuccess: async (data) => {
      try {
        await loginUser({ email: data.email, password: data.password });
        // Invalidate and refetch
        queryClient.invalidateQueries("newUserDetails");
        navigate("/login");
      } catch (error) {
        console.error("Initialization Error:", error);
      }
    },
    onError: (error) => {
      console.error("Login Error:", error);
    },
  });
  return { addUser };
}

export default Authentication;
