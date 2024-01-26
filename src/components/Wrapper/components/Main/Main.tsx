import SectionHeader from "../../../sections/section-header/SectionHeader";
import SectionSwiper from "../../../sections/section-swiper/SectionSwiper";

export default function Main() {
  return (
    <main>
      <SectionHeader/>
      <SectionSwiper 
        swiperSectionTitlePtOne = "Популярные"
        swiperSectionTitlePtTwo = "проекты"
        swiperSectionDesc="Мы работаем с соблюдением всех российских норм и стандартов 
        строительства и используем уникальные технологии, 
        позволяющие нашим домам служить нескольким поколениям."
      />
    </main>
  );
};
