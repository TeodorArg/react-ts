import { useState } from "react";
import { useWindowSize } from "@react-hook/window-size/throttled";

import Logo from "../../stories/ui/logo/Logo";
import Geo from "../../stories/ui/geo/Geo";
import Button from "../../stories/ui/button/Button";

import TextWithIcon from "../../stories/ui/text-with-icon/TextWithIcon";
import SocialList from "./components/social-list/SocialList";
import MainMenu from "./components/main-menu/MainMenu";
import MenuItem from "./components/main-menu/MenuItem";
import MobileMenu from "./components/mobile-menu/MobileMenu";
import Copyright from "./components/copyright/copyright";

import logo from "./../../assets/logo/logo.svg";
import "./_navigation.scss";

interface NavigationProps {
  showInFooter?: boolean;
};


export default function Navigation(
  {
    showInFooter = false,
  }: NavigationProps ) {

  const [width] = useWindowSize({ fps: 60 });
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  }

  const mobileview = width < 768;

  const mobileClass = openMobileMenu ? 'dark' : '';
  const footerClass = showInFooter ? 'footer' : '';
  // const geoInHeader = !(mobileview && showInFooter)


  return (
    <>
      <div className={["navigation", mobileClass, footerClass].join(' ')}>

        <div className="navigation__logo">
          <Logo logoSrc={logo} logoInFooter={showInFooter} showCopyright={!mobileview}/>
        </div>

        <div className="navigation__geo">
          {!showInFooter && (
            <Geo onlyCityShow={true} />
          )}
          {showInFooter && (
            <Geo cityAsString="Москва" />
          )}
          
          
        </div>

        <div className="navigation__phone">
          {(!openMobileMenu && !showInFooter) && (
            <TextWithIcon
              iconName="phone"
              isItPhone
              phoneNumber="+79817770076"
              textInblock="+7 (981) 777-00-76"
            />
          )}
          {(showInFooter) && (
            <TextWithIcon
              iconName="phone"
              isItPhone
              phoneNumber="+79817770076"
              textInblock="+7 (981) 777-00-76"
              viewInMobile={mobileview}
            />
          )}
        </div>

        <SocialList/>

        <div className="navigation__menu">
          <MainMenu showInFooter={ showInFooter }/>
        </div>

        <div className="navigation__contacts">
          <MenuItem itemName="Контакты" singlLink={true}/>
        </div>

        { mobileview && !showInFooter && (
            <Button
              btnCustomClass="navigation__burger"
              btnStyle="action"
              iconName={openMobileMenu ? 'close' : 'burger'}
              showIcon={true}
              onClick={toggleMobileMenu}
            />
          )
        }
        {showInFooter && mobileview && (
        <Copyright />
      )}
      </div>

      {!showInFooter && mobileview && (
        <MobileMenu openMenu={openMobileMenu}/>
      )}

     
      
    </>
  );
};
