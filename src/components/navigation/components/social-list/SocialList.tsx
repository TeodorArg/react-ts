import SocialIcon from '../../../../stories/components/social-icon/SocialIcon';
import "./_social-list.scss";

interface SocialListProps {
  showInMobile?: boolean;
  showInFooter?: boolean;
}

const socials = [
  { name: 'youtube', url: '/'},
  { name: 'vk', url: '/'},
  { name: 'telegram', url: '/'},
  { name: 'inst', url: '/'}
];

export default function SocialList(
  {
    showInMobile = false, 
    showInFooter = false
  }: SocialListProps ) {

    let listOfSocial = socials.map((item, index ) => 
      <SocialIcon iconName={item.name} socialLink={item.url} yellowColor={showInMobile} key={index}/>
    );

  return (
    <div className={["navigation__social", showInMobile ? 'mobile' : null, showInFooter ? 'footer': null].join(' ')}>
      {listOfSocial}
    </div>
  );
};
