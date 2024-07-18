import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useApiFun from "./useApiFun";

function useAuthentication() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // Destructure all the functions related to API
  const { addNewUser, loginUser } = useApiFun();

  // TODO: 1] User REGISTERATION
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

  // TODO: 2]  User LOGIN
  const userLogin = useMutation({
    mutationKey: ["loggedDetails"],
    mutationFn: loginUser,
    onSuccess: async (data) => {
      try {
        // 1] store the token to the localStorage
        localStorage.setItem("token", data.token);
        queryClient.invalidateQueries("loggedDetails");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return { addUser, userLogin };
}

export default useAuthentication;
