import styled from '@emotion/styled';
import "../../../styles/core/_colors.scss";
import  { Icon } from "../../ui/icon/Icon";

interface SocialIconProps {
  iconName?: string;
  socialLink?: string;
  yellowColor?: boolean;
}


export const SocialIcon = ({
  iconName = "youtube",
  socialLink = '',
  yellowColor = false,
}: SocialIconProps) => {

  console.log(typeof iconName);
  const Link = styled.a(
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      border: '1px solid',
      transition: 'all .25s linear'
    },
    yellowColor ? {
      borderColor: 'var(--yellow-hover)',
      '.icon' : {
        '--icon-color': 'var(--yellow-hover)',
        '--icon-sub-color': 'var(--white)',
        '--icon-third-color': 'var(--white)'
      },
      '&:hover': {
        borderColor: 'var(--main-color)',
        '.icon' : {
          '--icon-color': 'var(--main-color)',
        }
      }
    } : {
      borderColor: 'var(--white)',
      '.icon' : {
        '--icon-color': 'var(--white)',
        '--icon-sub-color': 'var(--main-color)',
        '--icon-third-color': 'var(--main-color)'
      },
      '&:hover': {
        borderColor: 'var(--yellow-hover)',
        '.icon' : {
          '--icon-color': 'var(--yellow-hover)',
        }
      }
    },
  )

  const IconStyle = {width: '24px'};

  return (
    <Link className='social__link' href={socialLink}>
      {yellowColor ?
        <Icon iconName={iconName} iconStyle={IconStyle}/>
      :
        <Icon iconName={iconName} iconStyle={IconStyle}/>
      }
    </Link>
  );
};

export default SocialIcon;