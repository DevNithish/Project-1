import "./ExploreServices.css";
import WebApplication from "./WebApplication";
import { MobileApplication } from "./MobileApplication";
import { SearchEngine } from "./SearchEngine";
import { DevOps } from "./Devops";
import { CustomEnterprise } from "./CustomEnterprise";

const ExploreServices = () => {
  return (
    <div className="explore-container">
      <WebApplication />
      <MobileApplication />
      <SearchEngine />
      <DevOps />
      <CustomEnterprise />
      <footer className="footer">
        © Copyright 2024 Velandev. All rights reserved
      </footer>
    </div>
  );
};

export default ExploreServices;
