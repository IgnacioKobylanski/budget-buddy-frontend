import "./Footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} BudgetBuddy. All rights reserved.</p>
     <FaInstagram />
     <FaTiktok />
    </footer>
  );
};

export default Footer;