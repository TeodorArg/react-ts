import Section from "../../../stories/components/section/Section";
import Img from "./../../../assets/images/sections/home/home-main.webp";
import ImgRetina from "./../../../assets/images/sections/home/home-main.webp";



export const SectionHeader = () => {
  return (
    <Section sectionFullScreen={true} sectionImg={Img} sectionImgRetina={ImgRetina}>
      HAS IMAGE
    </Section>
  );
};

export default SectionHeader;