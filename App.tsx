import { useState } from "react";
import HomePage from "./components/home/HomePage";
import GenerateSermon from "./components/Sermon/Generate/GenerateSermon";
import OptimizeSermon from "./components/Sermon/Optimize/OptimzateSermon";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage setActiveTab={setActiveTab} />;
      case "generate":
        return <GenerateSermon />;
      case "optimize":
        return <OptimizeSermon />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };
  return <main>{renderContent()}</main>;
};

export default App;
