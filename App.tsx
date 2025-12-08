import { useState } from "react";
import HomePage from "./components/home/HomePage";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage setActiveTab={setActiveTab} />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };
  return <main>{renderContent()}</main>;
};

export default App;
