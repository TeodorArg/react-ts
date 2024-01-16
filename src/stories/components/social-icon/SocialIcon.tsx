import styled from '@emotion/styled';
import "../../../styles/core/_colors.scss";
import  { Icon } from "../../ui/icon/Icon";

interface SocialIconProps {
  iconName?: 'youtube' | 'vk' | 'telegram' | 'inst';
  socialLink?: string;
  yellowColor?: boolean;
}


export const SocialIcon = ({
  iconName = "youtube",
  socialLink = '',
  yellowColor = false,
  ...props
}: SocialIconProps) => {

  const Link = styled('a')`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid ${yellowColor ? 'var(--yellow-hover)' : 'var(--white)'};
    width: 40px;
    height: 40px;
  `

  const IconStyle = {width: '24px'};

  return (
    <Link className='social__link' {...props} href={socialLink}>
      {yellowColor ?
        <Icon iconName={iconName} iconColor="var(--yellow-hover)" iconSubColor="var(--white)" iconThirdColor="var(--white)" iconStyle={IconStyle}/>
      :
        <Icon iconName={iconName} iconColor="var(--white)" iconSubColor="var(--main-color)" iconThirdColor="var(--main-color)" iconStyle={IconStyle}/>
      }
      
    </Link>
  );
};

export default SocialIcon;