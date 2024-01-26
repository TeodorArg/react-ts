import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Button from "../button/Button";
import HouseCard from "../cards/house/HouseCard";

import "./_swiper.scss";

interface SwiperProps{
  swiperBtnCatalog?: boolean,
  swiperSliders: itemSliders,
  sliderType?: "houses" | "reviews" | "masonry" | "single",
  children?: React.ReactNode,
}

interface sliderItem {
  id?: number;
  title?: string;
  image?: string;
  desc?: string;
  price?: string;
  area?: string;
  full?: string;
  size?: string;
  floors?: string;
}

interface itemSliders extends Array<sliderItem> {}


export default function SwiperSlider({
    swiperBtnCatalog=true,
    swiperSliders = [],
    sliderType = "houses",
  }: SwiperProps) {

  const sliderItems = swiperSliders.map(slider =>
    <SwiperSlide  key={slider.id}>
      <HouseCard 
        key={slider.id}
        houseTitle={slider.title}
        houseImage={slider.image}
        houseDesc={slider.desc}
        housePrice={slider.price}
        houseArea={slider.area}
        houseFullArea={slider.full}
        houseSize={slider.size}
        houseFloors={slider.floors}
      />
    </SwiperSlide>
   

  );

  return (
    <>
      {/* Swiper */}
      <Swiper 
        modules={[Navigation]} 
        slidesPerView={'auto'}
        spaceBetween={10}
        slidesOffsetAfter={20}
        breakpoints={{
          1280: {
            spaceBetween: 20,
            slidesOffsetAfter: 24,
            navigation: {
              enabled: true,
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            },
          },
          1920: {
            spaceBetween: 40,
            slidesOffsetAfter: 40,
            navigation: {
              enabled: true,
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            },
          }
        }}
      >
        {sliderItems}
      </Swiper>
          
      {/* Controls */}
      <div className="swiper__controls">
        <div className="swiper__controls--navigation">
          {/* Navigation buttons*/}
          <Button
            btnRounded
            btnStyle="yellow"
            iconName="arrow-slider"
            showIcon
            btnCustomClass="swiper-prev"
          />
          <Button
            btnRounded
            btnStyle="yellow"
            iconName="arrow-slider"
            showIcon
            btnCustomClass="swiper-next"
          />
        </div>

        { /* Button */
          swiperBtnCatalog && (
            <div className="swiper__controls--button">
            <Button btnLabel="В каталог" btnStyle="" />
          </div>
          )
        }
      

      </div>
    </>
  );
};

