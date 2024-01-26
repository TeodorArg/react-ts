import React from "react";
import Section from "../../../stories/components/section/Section";
import "./_section-default.scss";

interface SectionDefaultProps {
  children?: React.ReactNode,
}
export default function SectionDefault({children}: SectionDefaultProps) {
  return (
    <Section sectionCustomClass="section--default">
      {children}
    </Section>
  );
};
