import Section from "../../../stories/components/section/Section";
import Button from "../../../stories/ui/button/Button";
import HeaderBadges from "./components/header-badges/HeaderBadges";

import Img from "./../../../assets/images/sections/home/home-main.webp";
import ImgRetina from "./../../../assets/images/sections/home/home-main.webp";

import "./_section-header.scss";

export default function SectionHeader() {
  return (
    <Section sectionFullScreen={true} sectionImg={Img} sectionImgRetina={ImgRetina}>
        <div className="main__content w-full">

          <div className="main__left">

            <div className="main__title txt--bold">
              Строительство коттеджей и загородных домов «под ключ»
            </div>

            <div className="main__text">
              Мы все возьмем на себя, Вам останется только завести мебель и отметить новоселье!
            </div>

            <div className="main__btn sm:w-[355px] mb-[70px]">
              <Button btnLabel="Рассчитать стоимость дома" />
            </div>

          </div>

          <div className="main__right">
            <HeaderBadges/>
          </div>

        </div>
    </Section>
  );
};
