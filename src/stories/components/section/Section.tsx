import React from 'react';
import styled from '@emotion/styled';

interface SectionProps {
  sectionFullScreen?: boolean;
  sectionCustomClass?: string;
  sectionImageSrc?: string;
  sectionImageSrc2?: string;
  sectionImageAlt?: string;
  children?: React.ReactNode,
}


const breakpoints = [1280, 1920];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Section = ({
  sectionFullScreen = false,
  sectionCustomClass = '',
  sectionImageSrc = '',
  sectionImageSrc2 = '',
  sectionImageAlt ='',
  ...props
}: SectionProps) => {

  const SectionBlock = styled.section(
    sectionFullScreen ? {
      maxWidth: '100%',
      height: '640px',
      [mq[0]]: {
        height:'900px',
      },
      [mq[1]]: {
        height:'1080px',
      }
    } : {
      maxWidth: '1920px',
    },
    {
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }
  );

  const IMG = styled.img({
    objectFit: 'cover',
    width: 'inherit',
    height: 'inherit'
  });

  const Picture = styled.picture(
    {
      height: 'inherit',
      width: 'inherit',
      display: 'block'
    }
  );

  const imageSet = `${sectionImageSrc} 1x, ${sectionImageSrc2} 2x`;
  const imageSrc = `${sectionImageSrc}`;

  return (
   
    <SectionBlock className={sectionCustomClass} {...props}>
      {sectionImageSrc  === '' ?
        (
          <Picture className='section__image'>
             <source 
              srcSet="
                ../../../assets/images/sections/home/home-main.webp 1x, 
                ../../../assets/images/sections/home/home-main@2x.webp 2x"
              type="image/webp" />
            <IMG src={"../../../assets/images/sections/home/home-main.webp"} alt={sectionImageAlt} />
          </Picture>
        )
        :
        ( 
          <Picture className='section__image'>
            <source srcSet={imageSet} type="image/webp" />
            <IMG src={imageSrc} alt={sectionImageAlt} />
          </Picture>
        )
      }
      
      
    </SectionBlock>
  );
};

export default Section;