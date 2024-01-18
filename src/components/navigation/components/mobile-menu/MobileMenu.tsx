import { Geo } from "../../../../stories/ui/geo/Geo";
import TextWithIcon from "../../../../stories/ui/text-with-icon/TextWithIcon";
import MainMenu from "../main-menu/MainMenu";
import SocialList from "../social-list/SocialList";
import "./_mobile-menu.scss";

const MobileMenu = () => {
  return (
    <div className="mobile__menu">
      <MainMenu/>
      <Geo showOnlyCity={true}/>
      <TextWithIcon
          iconName="phone"
          isItPhone
          phoneNumber="+79817770076"
          textInblock="+7 (981) 777-00-76"
        />
      <SocialList showInMobile={true}/>
    </div>
  );
};

export default MobileMenu;