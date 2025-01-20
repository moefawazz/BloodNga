import { CiMoneyBill } from "react-icons/ci";
import { FiCreditCard, FiPackage, FiUsers } from "react-icons/fi";

export const cardsData = [
  {
    icon: <FiPackage />,
    title: "items",
    description: "itemsDescription",
    path: "/items",
  },
  {
    icon: <FiUsers />,
    title: "users",
    description: "usersDescription",
    path: "/users",
  },
  {
    icon: <FiCreditCard />,
    title: "payments",
    description: "paymentsDescription",
    path: "/payments",
  },
  {
    icon: <CiMoneyBill />,
    title: "profits",
    description: "profitsDescription",
    path: "/profits",
  },
];
