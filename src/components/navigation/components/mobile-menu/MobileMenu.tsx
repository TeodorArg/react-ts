import Geo from '../../../../stories/ui/geo/Geo';
import TextWithIcon from '../../../../stories/ui/text-with-icon/TextWithIcon';
import MainMenu from '../main-menu/MainMenu';
import SocialList from '../social-list/SocialList';
import './_mobile-menu.scss';

interface MobileMenuProps {
  openMenu?: boolean;
};

export default function MobileMenu(
  {
    openMenu = false
  }: MobileMenuProps ) {

  const showMenuClass = openMenu ? 'opened' : null;

  return (
    <div className={['mobile__menu', showMenuClass].join(' ')}>
      <MainMenu mobileView={true}/>
      <Geo onlyCityShow={true} geoInMobile={true}/>
      <TextWithIcon
          iconName="phone"
          isItPhone
          phoneNumber="+79817770076"
          textInblock="+7 (981) 777-00-76"
          viewInMobile={true}
        />
      <SocialList showInMobile={true}/>
    </div>
  );
};