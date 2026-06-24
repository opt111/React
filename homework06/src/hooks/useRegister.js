import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authApi } from "../api/authApi";
import { useAuthStore } from "../store/authStore";

export function useRegister() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (user) => {
      setAuth(user);
      navigate("/dashboard/map", { replace: true });
    },
  });
}
