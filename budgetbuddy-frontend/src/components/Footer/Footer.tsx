import "./Footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} BudgetBuddy. All rights reserved.</p>
     <FaInstagram />
     <FaYoutube />
     <FaTiktok />
     {/* revisar si agregar o no mas estilos */}
    </footer>
  );
};

export default Footer;