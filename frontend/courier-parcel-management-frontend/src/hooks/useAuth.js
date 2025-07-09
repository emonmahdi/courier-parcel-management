import { useSelector, useDispatch } from "react-redux";
import { login, register, logout } from "../redux/features/auth/authSlice";

export const useAuth = () => {
  const { user, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return {
    user,
    loading,
    error,
    login: (data) => dispatch(login(data)),
    register: (data) => dispatch(register(data)),
    logout: () => dispatch(logout()),
  };
};
