import React from "react";
import "./Main.css";
import MyBudget from "../../pages/MyBudget";

const Main: React.FC = () => {
  return (
    <main className="main-content">
      <MyBudget />
    </main>
  );
};

export default Main;
