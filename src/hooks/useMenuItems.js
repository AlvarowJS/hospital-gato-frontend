import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const useMenuItems = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return {
    goToHospital: () => navigate("/hospital"),
    // goToHospitalForm: () => navigate("/hospital-form"),
    goToHospitalForm: (mode = "register") => navigate(`/hospital-form?mode=${mode}`),
    handleLogout: () => logout(),
  };
};

export default useMenuItems;
