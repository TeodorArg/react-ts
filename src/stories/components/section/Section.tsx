import React from 'react';
import styled from '@emotion/styled';
import Image from '../../ui/image/Image';

interface SectionProps {
  sectionFullScreen?: boolean;
  sectionCustomClass?: string;
  sectionImg?: string;
  sectionImgRetina?: string;
  children?: React.ReactNode,
}


const breakpoints = [1280, 1920];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export default function Section(
  {
    sectionFullScreen = false,
    sectionCustomClass = '',
    sectionImg = '',
    sectionImgRetina = '',
    children
  }: SectionProps ) {

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
  
  return (
    <SectionBlock className={sectionCustomClass? sectionCustomClass : ''}>
      { sectionFullScreen && (
          <Image imageAsBg={true} imageSrc={sectionImg} imageSrcRetina={sectionImgRetina} imageAlt="Favorite House"/>
        )
      }
      {children}
    </SectionBlock>
  );
};
