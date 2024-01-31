import Section from '../../../stories/components/section/Section';
import Title from '../../../stories/ui/title/Title';
import Image from '../../../stories/ui/image/Image';
import ConsultationForm from './components/ConsultationForm';
import SelectionForm from '../../../stories/components/forms/SelectionForm';

import './_section-action.scss';

interface SectionActionProps {
  sectionTitlePt1?: string;
  sectionTitlePt2?: string;
  imgSrc?: string;
  imgSrcRetina?: string;
  consultationForm?: boolean;
}
export default function SectionAction({sectionTitlePt1, sectionTitlePt2, imgSrc, imgSrcRetina, consultationForm=false}: SectionActionProps) {
  return (
    <Section sectionAction={true} sectionCustomClass="section__action border--default">
      {
        consultationForm || (
          <Title firstPtTitle={sectionTitlePt1} secondPtTitle={sectionTitlePt2} forcedWrap={consultationForm} titleCustomClass="section__action--title"></Title>
        )
      }
      <div className="section__action--left">

      {
        consultationForm && (
          <Title firstPtTitle={sectionTitlePt1} secondPtTitle={sectionTitlePt2} forcedWrap={consultationForm}></Title>
        )
      }

        <div className="section__action--image border--default">
          <Image imageSrc={imgSrc} imageSrcRetina={imgSrcRetina} imageAlt="Favorite House"/>
        </div>

      </div>

      <div className="section__action--right">
        {
           consultationForm ? (
            <ConsultationForm/>
           ) : (
            <SelectionForm formBtnLabel="подобрать проект"/>
           )
        }
      </div>
    </Section>
  );
};
