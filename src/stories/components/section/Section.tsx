import React from 'react';
import { useWindowWidth } from "@react-hook/window-size/throttled";
import Image from '../../ui/image/Image';

import "./_section.scss";

interface SectionProps {
  sectionFullScreen?: boolean;
  sectionSwiper?: boolean;
  sectionCustomClass?: string;
  sectionImg?: string;
  sectionImgRetina?: string;
  children?: React.ReactNode,
}

export default function Section(
  {
    sectionFullScreen = false,
    sectionSwiper = false,
    sectionCustomClass = '',
    sectionImg = '',
    sectionImgRetina = '',
    children
  }: SectionProps ) {

  
  const onlyWidth = useWindowWidth();

  let styleFullScreen = {};
  let sectionMarginLeft = "";

  if (sectionSwiper && onlyWidth > 1920) {
    sectionMarginLeft = `${(onlyWidth - 1920) / 2}px`;
    styleFullScreen = { marginLeft: sectionMarginLeft, maxWidth: `calc(100% - ${sectionMarginLeft})`}
  }

  
  return (
    <>
      { sectionSwiper && (
          <section className="section section--swiper" style={styleFullScreen}>
            {children}
          </section>
        ) 
      }
      { sectionFullScreen && (
          <section className="section section--full">
            <Image imageAsBg={true} imageSrc={sectionImg} imageSrcRetina={sectionImgRetina} imageAlt="Favorite House"/>
            {children}
          </section>
        )
      }
      { !sectionSwiper && !sectionFullScreen && (
          <section className={["section", sectionCustomClass ? sectionCustomClass : ''].join(' ')}>
            {children}
          </section>
        )
      }
    </>
  );
};
