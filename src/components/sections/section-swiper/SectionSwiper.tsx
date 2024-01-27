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
  {
    image: "1",
    title: "Дмитрий Молчанов",
    desc: "Коттедж, который мы построили, не только выглядит прекрасно снаружи, но и обустроен с учётом всех наших потребностей внутри. Мы рады, что выбрали эту компанию для строительства нашего дома. ",
    date: "21.11.2023"
  },
  {
    image: "2",
    title: "Мария Гамидова",
    desc: "Спасибо за качественное исполнение и профессиональный подход к строительству нашего коттеджа. Мы с удовольствием рекомендуем вас всем своим друзьям и знакомым.",
    date: "21.11.2023"
  },
  {
    image: "3",
    title: "Анатолий Толмачев",
    desc: "Коттедж, который мы построили, стал настоящим уютным уголком для нашей семьи. Мы очень довольны тем, как все выполнено качественно и профессионально.",
    date: "21.11.2023"
  },
  {
    image: "1",
    title: "Дмитрий Молчанов 2",
    desc: "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?",
    date: "21.11.2023"
  },
  {
    image: "2",
    title: "Мария Гамидова 2",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "21.11.2023"
  },
];

export default function SectionSwiper({
    swiperSectionTitlePtOne = "firstPtTitle",
    swiperSectionTitlePtTwo = "",
    swiperSectionDesc = "",
    isHousesSwiper = true,
  }: SectionSwiperProps ) {

  const swiperType = isHousesSwiper ? "houses" : "reviews";

  return (
    <Section sectionSwiper={true} sectionCustomClass="section--swiper">

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

        {isHousesSwiper ? (
            <SwiperSlider swiperBtnCatalog={true} swiperSliders={isHousesSwiper ? housesArray : reviewsArray} sliderType={swiperType}/>
          ) : (
            <SwiperSlider swiperBtnCatalog={false} swiperSliders={isHousesSwiper ? housesArray : reviewsArray} sliderType={swiperType}/>
          )
        }
      
      </div>
    </Section>
  );
};