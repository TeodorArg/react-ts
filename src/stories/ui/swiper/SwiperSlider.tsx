import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Button from "../button/Button";
import HouseCard from "../cards/house/HouseCard";
import ReviewCard from "../cards/review/ReviewCard";

import "./_swiper.scss";

interface SwiperProps{
  swiperBtnCatalog?: boolean,
  swiperSliders: itemsSliders,
  sliderType?: 'houses' | 'reviews' | 'masonry' | 'single',
  children?: React.ReactNode,
}

interface sliderItem {
  title?: string;
  image?: string;
  desc?: string;
  price?: string;
  area?: string;
  full?: string;
  size?: string;
  floors?: string;
  date?: string;
}

interface itemsSliders extends Array<sliderItem> {}


export default function SwiperSlider({
    swiperBtnCatalog=true,
    swiperSliders = [],
    sliderType,
  }: SwiperProps) {

  const sliderHouse = swiperSliders.map((slider, index)=>
    <SwiperSlide  key={index}>
      <HouseCard 
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

  const sliderReview = swiperSliders.map((slider, index) =>
    <SwiperSlide  key={index}>
      <ReviewCard 
        name={slider.title}
        image={slider.image}
        desc={slider.desc}
        date={slider.date}
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
        {sliderType === "houses" && (sliderHouse)}
        {sliderType === "reviews" && (sliderReview)}
        
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

        { /* Button */
          sliderType === "reviews" && (
            <div className="swiper__controls--buttons">
              <Button
                btnLabel="Сообщение"
                btnSize="small"
                btnStyle="black"
                onClick={() => {}}
              />
              <span>/</span>
              <Button
                btnLabel="Видео"
                btnStyle=""
                btnSize="small"
                btnThinkBorder
                onClick={() => {}}
              />
            </div>
          )
        }
      

      </div>
    </>
  );
};

