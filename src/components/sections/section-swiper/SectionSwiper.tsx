
import Section from "../../../stories/components/section/Section";
import Title from "../../../stories/ui/title/Title";
import SwiperSlider from "../../../stories/ui/swiper/SwiperSlider";

import "../section-swiper/_section-swiper.scss";

interface SectionSwiperProps {
  swiperSectionTitlePtOne?: string,
  swiperSectionTitlePtTwo?: string,
  swiperSectionDesc?: string,
  isHousesSwiper?: boolean,

}

// Houses:
const housesArray = [
  {
    id: 1,
    image: "1",
    title: "Проект 1",
    desc: "Каркасный дом 10,0х11 м",
    price: "5 890 000  ₽",
    area: "120 м2",
    full: "190 м2",
    size: "10,0х11 м",
    floors: "Два"
  },
  {
    id: 2,
    image: "2",
    title: "Проект 2",
    desc: "Каркасный дом 10,0х11 м",
    price: "3 890 000  ₽",
    area: "90 м2",
    full: "110 м2",
    size: "10,0х11 м",
    floors: "Один"
  },
  {
    id: 3,
    image: "3",
    title: "Проект 3",
    desc: "Каркасный дом 10,0х11 м",
    price: "3 890 000  ₽",
    area: "90 м2",
    full: "110 м2",
    size: "10,0х11 м",
    floors: "Один"
  },
  {
    id: 4,
    image: "4",
    title: "Проект 4",
    desc: "Каркасный дом 10,0х11 м",
    price: "3 685 000  ₽",
    area: "120 м2",
    full: "190 м2",
    size: "10,0х11 м",
    floors: "Три"
  },
  {
    id: 5,
    image: "5",
    title: "Проект 5",
    desc: "Каркасный дом 13,2х11 м",
    price: "6 685 000  ₽",
    area: "128 м2",
    full: "196 м2",
    size: "10,0х11 м",
    floors: "Два"
  },
]

// Reviews:
const reviewsArray = [
  {}
];

export default function SectionSwiper({
    swiperSectionTitlePtOne = "firstPtTitle",
    swiperSectionTitlePtTwo = "",
    swiperSectionDesc = "swiperSectionDesc",
    isHousesSwiper = true,
  }: SectionSwiperProps ) {

  const swiperType = isHousesSwiper ? "houses" : "reviews";

  return (
    <Section sectionCustomClass="section__swiper">

      <div className="section__left-side">

        <Title titleType="section" 
          firstPtTitle={swiperSectionTitlePtOne} 
          secondPtTitle={swiperSectionTitlePtTwo}
        />

        <p className="txt--medium">
          {swiperSectionDesc}
        </p>

      </div>

      <div className="section__right-side section__right-side--swiper">

        {isHousesSwiper && (
          <SwiperSlider swiperBtnCatalog={true} swiperSliders={isHousesSwiper ? housesArray : reviewsArray} sliderType={swiperType}/>
        )}
      
      </div>
    </Section>
  );
};