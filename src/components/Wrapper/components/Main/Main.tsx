import SectionHeader from "../../../sections/section-header/SectionHeader";
import SectionSwiper from "../../../sections/section-swiper/SectionSwiper";
import SectionDefault from "../../../sections/section-default/SectionDefault";

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
      <SectionDefault>
        <div className="section__left-side mdLg:block mdLg:col-span-4">
          <div className="section__image hidden mdLg:block overflow-hidden object-cover rounded-lg w-full xl:max-w-[445px] max-w-[645px] max-h-[422px]">
           
          </div>
        </div>
        <div className="section__right-side mdLg:col-span-8">
      
        </div>
      </SectionDefault>
    </main>
  );
};
