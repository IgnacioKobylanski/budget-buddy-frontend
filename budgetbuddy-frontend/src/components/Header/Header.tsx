import "./Header.css"
import Navbar from "../Navbar/Navbar.tsx"

const Header = () => {
    return(

        <header>
      <h1>Budget Buddy</h1>
      <nav>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#users">Users</a></li>
          <li><a href="#categories">Categories</a></li>
        </ul>
      </nav>
    </header>
        /* <header className="header-main">
           
        </header> */
    );
};

export default Header;