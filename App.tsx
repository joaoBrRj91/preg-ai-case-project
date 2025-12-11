import { useState } from "react";
import HomePage from "./components/home/HomePage";
import GenerateSermon from "./components/Sermon/GenerateSermon";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage setActiveTab={setActiveTab} />;
      case "generate":
        return <GenerateSermon />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };
  return <main>{renderContent()}</main>;
};

export default App;
