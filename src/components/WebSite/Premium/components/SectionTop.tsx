import React from "react";
import { PremiumPageHeader } from "interfaces/PremiumPageHeader";
import { ppContentItems } from "constants/PremiumPage";
import PHeader from "components/WebSite/Premium/components/PHeader";

interface SectionTopProps {
  headerTitles: PremiumPageHeader;
}

const SectionTop = ({ headerTitles }: SectionTopProps) => {
  return (
    <section className="section-top">
      <PHeader title={headerTitles.title} subtitle={headerTitles.subtitle} />
      <article className="premium-content">
        {ppContentItems?.map((item,index) => {
          return (
            <div className={`pp-column column-${index+1}`}>
              <div className="img"></div>
              <div className="inline-column">
                <span>{item.title}</span>
                <span>{item.subtitle}</span>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default SectionTop;
