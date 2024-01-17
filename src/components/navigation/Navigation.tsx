import { Logo } from "../../stories/ui/logo/Logo";
import { Geo } from "../../stories/ui/geo/Geo";

import logo from "./../../assets/logo/logo.svg";

import "./_navigation.scss";



const Navigation = () => {
  return (
    <div className="navigation">
   
      <div className="navigation__logo">
        <Logo logoSrc={logo}/>
      </div>

      <div className="navigation__geo">
        <Geo showOnlyCity={true}/>
      </div>

    </div>
  );
};

export default Navigation;