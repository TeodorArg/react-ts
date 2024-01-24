import styled from '@emotion/styled';
import Copyright from '../../../components/navigation/components/copyright/copyright';
import logo from '../../../assets/logo/logo.svg';

interface LogoProps{
  logoSrc?: string;
  logoInFooter?: boolean;
  showCopyright?: boolean;
}

const breakpoints = [768, 1440];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export default function Logo(
  {
    logoSrc = logo,
    logoInFooter = false,
    showCopyright = false,
  }: LogoProps ) {

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

  const DIV= styled.div(
    {
      display: 'grid',
      gap: '27px',
      justifyItems: 'center',
      textAlign: 'center',
      [mq[1]]: {
        gap: '59px',
      }
    }
  );

  return (
    <DIV>
      <IMG src={logoSrc} alt="Favorite House"/>
      { logoInFooter && showCopyright && (
          <Copyright />
        )
      }
    </DIV>
   
  );
};