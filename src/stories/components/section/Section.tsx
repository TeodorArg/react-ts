import React from 'react';
import styled from '@emotion/styled';
import { useWindowWidth } from "@react-hook/window-size/throttled";
import Image from '../../ui/image/Image';

interface SectionProps {
  sectionFullScreen?: boolean;
  sectionSwiper?: boolean;
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
    sectionSwiper = false,
    sectionCustomClass = '',
    sectionImg = '',
    sectionImgRetina = '',
    children,
    ...props
  }: SectionProps ) {

  const SwiperResize = {sectionSwiper};
  const onlyWidth = useWindowWidth();
  let sectionMarginLeft = "";

  console.log(onlyWidth);

  if(SwiperResize && onlyWidth > 1920) {
    sectionMarginLeft = `${(onlyWidth - 1920) / 2}px`;
  } else {
    sectionMarginLeft = "auto";
  }

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
      margin: '0 auto'
    },
    {
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    },
    sectionSwiper ? { 
      marginLeft: sectionMarginLeft,
      maxWidth: `calc(100% - ${sectionMarginLeft})`
    } : {}
  );
  
  return (
    <SectionBlock className={sectionCustomClass? sectionCustomClass : ''} >
      { sectionFullScreen && (
          <Image imageAsBg={true} imageSrc={sectionImg} imageSrcRetina={sectionImgRetina} imageAlt="Favorite House"/>
        )
      }
      {children}
    </SectionBlock>
  );
};
