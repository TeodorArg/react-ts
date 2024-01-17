import Section from "../../../stories/components/section/Section";
import sectionImage from "./../../../assets/images/sections/home/home-main.webp";
import sectionImage2 from "./../../../assets/images/sections/home/home-main.webp";



export const SectionHeader = () => {
  
  return (
    <>
    <Section sectionFullScreen={true} sectionImageSrc={sectionImage} sectionImageSrc2={sectionImage2}>
      
      </Section>
       <Section sectionFullScreen={false}>
        NO IMAGE
       </Section>
    </>
    
  );
};

export default SectionHeader;