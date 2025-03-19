import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const useMenuItems = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return {
    goToHospital: () => navigate("/hospital"),
    handleLogout: () => logout(),
  };
};

export default useMenuItems;
