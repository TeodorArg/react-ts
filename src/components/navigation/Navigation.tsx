import { Logo } from "../../stories/ui/logo/Logo";
import { Geo } from "../../stories/ui/geo/Geo";
import SocialIcon from "../../stories/components/social-icon/SocialIcon";
import TextWithIcon from "../../stories/ui/text-with-icon/TextWithIcon";
import { Button } from "../../stories/ui/button/Button";
import MainMenu from "./components/main-menu/MainMenu";
import MenuItem from "./components/main-menu/MenuItem";

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

      <div className="navigation__phone">
        <TextWithIcon
          iconName="phone"
          isItPhone
          phoneNumber="+79817770076"
          textInblock="+7 (981) 777-00-76"
        />
      </div>

      <div className="navigation__social">
        <SocialIcon
          iconName="youtube"
          socialLink=""
        />
        <SocialIcon
          iconName="vk"
          socialLink=""
        />
        <SocialIcon
          iconName="telegram"
          socialLink=""
        />
        <SocialIcon
          iconName="inst"
          socialLink=""
        />
      </div>

      <div className="navigation__menu">
       <MainMenu/>
      </div>

      <div className="navigation__contacts">
        <MenuItem itemName="Контакты" singlLink={true}/>
      </div>

      <Button
        btnCustomClass="navigation__burger"
        btnStyle="action"
        iconName="burger"
        showIcon
      />

    </div>
  );
};

export default Navigation;