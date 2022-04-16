import React from 'react'
import { PremiumPageHeader } from '../../../../interfaces/PremiumPageHeader'
import PHeader from './PHeader'

interface SectionBottomProps {
    headerTitles: PremiumPageHeader
}

const SectionBottom = ({ headerTitles }: SectionBottomProps) => {
  return (
    <section className="section-bottom">
        <PHeader
          title={headerTitles.title}
          subtitle={headerTitles.subtitle}
        />
      </section>
  )
}

export default SectionBottom