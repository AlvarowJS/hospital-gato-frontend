import { TfiMenuAlt } from "react-icons/tfi";
import { FaPlus, FaPowerOff } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import useMenuItems from "../hooks/useMenuItems";

const menuItems = () => {
  const { goToHospital, handleLogout } = useMenuItems();


  return [
    {
      id: 1,
      icon: <TfiMenuAlt size={40} className="text-black-200 p-2 rounded" />,
      title: "Hospitals",
      description: "Read Operation",
      action: goToHospital,
    },
    {
      id: 2,
      icon: <FaPlus size={40} className="text-black-200 p-2 rounded" />,
      title: "New Hospital",
      description: "Create Operation",
    },
    {
      id: 3,
      icon: <MdEdit size={40} className="text-black-200 p-2 rounded" />,
      title: "Update Hospital",
      description: "Update Operation",
    },
    {
      id: 4,
      icon: <MdDelete size={40} className="text-black-200 p-2 rounded" />,
      title: "Delete Hospital",
      description: "Delete Operation",
    },
    {
      id: 5,
      icon: <FaPowerOff size={40} className="text-black-200 p-2 rounded" />,
      title: "End session",
      description: "Log Out",
      action: handleLogout,
    },
  ];
};

export default menuItems;
