import SectionHeader from "../../../sections/section-header/SectionHeader";
import SectionSwiper from "../../../sections/section-swiper/SectionSwiper";
import SectionAction from "../../../sections/section-action/SectionAction";

import sectionImgAction from "../../../../assets/images/sections/action_1/section_1.webp";
import sectionImgActionRetina from "../../../../assets/images/sections/action_1/section_1@2x.webp";

import sectionImgAction2 from "../../../../assets/images/sections/action_2/section_2.webp";
import sectionImgActionRetina2 from "../../../../assets/images/sections/action_2/section_2@2x.webp";

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

      <SectionAction
        sectionTitlePt1="ПОДБОР"
        sectionTitlePt2="ПРОЕКТА"
        imgSrc={sectionImgAction2}
        imgSrcRetina={sectionImgActionRetina2}
        consultationForm={false} />  


       <SectionSwiper 
        swiperSectionTitlePtOne = "Отзывы"
        isHousesSwiper={false}
      />
    </main>
  );
};
