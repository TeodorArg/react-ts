import React from 'react';
import { useWindowWidth } from '@react-hook/window-size/throttled';
import Image from '../../ui/image/Image';

import './_section.scss';

interface SectionProps {
  sectionFullScreen?: boolean;
  sectionSwiper?: boolean;
  sectionAction?: boolean;
  sectionDefault?: boolean;
  sectionCustomClass?: string;
  sectionImg?: string;
  sectionImgRetina?: string;
  children?: React.ReactNode,
}

export default function Section(
  {
    sectionFullScreen = false,
    sectionSwiper = false,
    sectionAction = false,
    sectionDefault = false,
    sectionCustomClass = '',
    sectionImg = '',
    sectionImgRetina = '',
    children
  }: SectionProps ) {

  
  const onlyWidth = useWindowWidth();

  let styleFullScreen = {};
  let sectionMarginLeft = '';

  if (sectionSwiper) {
    if (onlyWidth > 1720) {
      sectionMarginLeft = `${(onlyWidth - 1720) / 2}px`;
      styleFullScreen = { marginLeft: sectionMarginLeft, maxWidth: `calc(100% - ${sectionMarginLeft})`}
    } else if (onlyWidth > 2500) {
      sectionMarginLeft = `${(onlyWidth - 1840) / 2}px`;
      styleFullScreen = { marginLeft: sectionMarginLeft, maxWidth: `calc(100% - ${sectionMarginLeft})`}
    } else {
      sectionMarginLeft = '0px';
      styleFullScreen = { marginLeft: sectionMarginLeft, maxWidth: '1720px'}
    } 

  
    if (onlyWidth > 2500) {
      
      styleFullScreen = { marginLeft: sectionMarginLeft, maxWidth: `calc(100% - ${sectionMarginLeft})`}
    }
  }
  

  const sectionClass = sectionCustomClass ? 'section ' + sectionCustomClass : 'section';

  return (
    <>
      { sectionSwiper && (
          <section className={sectionClass} style={styleFullScreen}>
            {children}
          </section>
        ) 
      }
      { sectionFullScreen && (
          <section className={sectionClass}>
            <Image imageAsBg={true} imageSrc={sectionImg} imageSrcRetina={sectionImgRetina} imageAlt="Favorite House"/>
            {children}
          </section>
        )
      }
      { sectionAction && (
          <section className={sectionClass}>
            {children}
          </section>
        )
      }
      {
        sectionDefault && (
          <section className={sectionClass}>
            {children}
          </section>
        )
      }
    </>
  );
};
