import SectionHeader from "../../../sections/section-header/SectionHeader";
import SectionSwiper from "../../../sections/section-swiper/SectionSwiper";
import SectionAction from "../../../sections/section-action/SectionAction";

import sectionImgAction from "../../../../assets/images/sections/action_1/section_1.webp";
import sectionImgActionRetina from "../../../../assets/images/sections/action_1/section_1@2x.webp";

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
      <SectionAction
          sectionTitlePt1="НЕ НАШЛИ ПОДХОДЯЩИЙ"
          sectionTitlePt2="ПРОЕКТ?"
          imgSrc={sectionImgAction}
          imgSrcRetina={sectionImgActionRetina}
          consultationForm={true} />
    </main>
  );
};
