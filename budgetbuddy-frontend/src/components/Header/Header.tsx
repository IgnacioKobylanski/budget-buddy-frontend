import "./Header.css"
import logo from "../../assets/budgetbuddy-logo-2.png"

const Header = () => {
    return(

        <header>
      <img src={logo} alt="Budget Buddy" className="header-logo" />
      <h1>Budget Buddy</h1>
      <nav>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#users">Users</a></li>
          <li><a href="#categories">History</a></li>
        </ul>
      </nav>
    </header>
    );
};

export default Header;