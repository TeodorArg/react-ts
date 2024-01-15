import styled from '@emotion/styled';

interface LogoProps{
  logoSrc?: string;
  logoInFooter?: boolean;
}

const breakpoints = [768, 1440];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const Logo = ({
  logoSrc = '../../../assets/logo/logo.svg',
  logoInFooter = false,
  ...props
}: LogoProps) => {

  const IMG = styled.img(
    logoInFooter ? {
      width: '242px',
      height:'41px',
      [mq[0]]: {
        width: '260px',
        height:'45px',
      },
      [mq[1]]: {
        width: '319px',
        height:'55px',
      }
    } : {
      width: '160px',
      height:'27px',
      [mq[0]]: {
        width: '233px',
        height:'40px',
      },
      [mq[1]]: {
        width: '319px',
        height:'55px',
      }

    }
  );

  // TODO: <div class="footer__logo flex flex-col items-start"></div> if Logo in Footer

  return (
    <IMG {...props} src={logoSrc}  alt="Favorite House" />
  );
};