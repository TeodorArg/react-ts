import { useState } from "react";
import { useWindowSize } from "@react-hook/window-size/throttled";

import { Logo } from "../../stories/ui/logo/Logo";
import { Geo } from "../../stories/ui/geo/Geo";
import { Button } from "../../stories/ui/button/Button";

import TextWithIcon from "../../stories/ui/text-with-icon/TextWithIcon";
import SocialList from "./components/social-list/SocialList";
import MainMenu from "./components/main-menu/MainMenu";
import MenuItem from "./components/main-menu/MenuItem";
import MobileMenu from "./components/mobile-menu/MobileMenu";

import logo from "./../../assets/logo/logo.svg";
import "./_navigation.scss";



interface NavigationProps {
  showInFooter?: boolean;
};



const Navigation = ({
  showInFooter = false,
}: NavigationProps) => {

  const [width] = useWindowSize({ fps: 60 });

  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);


  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  }

  const mobileview = width < 768;

  return (
    <>
    <div className={["navigation", openMobileMenu ? 'dark' : null].join(" ")}>

      <div className="navigation__logo">
        <Logo logoSrc={logo}/>
      </div>

      <div className="navigation__geo">
        { !mobileview && (
            <Geo showOnlyCity={true}/>
          ) 
        }
      </div>

      <div className="navigation__phone">
        {!openMobileMenu && (
          <TextWithIcon
            iconName="phone"
            isItPhone
            phoneNumber="+79817770076"
            textInblock="+7 (981) 777-00-76"
          />
        )}
        
      </div>

      <SocialList/>

      <div className="navigation__menu">
      <MainMenu/>
      </div>

      <div className="navigation__contacts">
        <MenuItem itemName="Контакты" singlLink={true}/>
      </div>

      { mobileview && (
          <Button
            btnCustomClass="navigation__burger"
            btnStyle="action"
            iconName={openMobileMenu ? 'close' : 'burger'}
            showIcon={true}
            onClick={toggleMobileMenu}
          />
        )
      }

      </div>
      {!showInFooter && mobileview && (
        <MobileMenu openMenu={openMobileMenu}/>
      )}
    </>
    
  );
};

export default Navigation;