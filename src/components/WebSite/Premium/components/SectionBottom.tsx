import React from 'react'
import PHeader from './PHeader'
import Checkmark from '../../../../assets/svg/Checkmark'
import { contentsOfOffers } from '../../../../constants/PremiumPage'
import { PremiumPageHeader } from '../../../../interfaces/PremiumPageHeader'

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
        <article className='premium-content'>
        {
          contentsOfOffers?.map(item => {
            return <>
              <div className='container_labels_offer row-content'>
                <div className="pp-offer__labels">
                  {item.label_offers.label_title && 
                    <span className='pp-offer__labels-title'>
                      {item.label_offers.label_title.replace("{ot}", item.offer_time)}
                    </span>}
                  {item.label_offers.label_desc &&
                    <span className='pp-offer__labels-desc'>
                      {item.label_offers.label_desc}
                    </span>}
                </div>
                <div className='pp-offer__offer'>
                  <span className='pp-offer__offer-title'>{item.offer_type}</span>
                  <div className='pp-offer__offer-desc'>
                    {`${item.offer_desc.text
                      .replace("{pad}", item.price_afterdeadline)
                      .replace("{ac}", item.offer_desc.account_count)}`
                    } <br />
                    {`${item.offer_desc.total_account_text.replace("{ac}", item.offer_desc.account_count)}`}
                  </div>
                </div>
                <hr />
              </div>
              <div className='pp-offer__content row-content'>
                <ul>
                  {item.content.map((i, index) => {
                    return <li key={index}>
                      <div>
                        <Checkmark />
                      </div>
                      <span>{i}</span>
                    </li>
                  })}
                </ul>
              </div>
              <div className='pp-offer__buttons row-content'>
                <a className='time-range'>
                  {item.offer_range.replace("{ot}", item.offer_time)}
                  <span className='border-visited'></span>
                </a>
                {item.other_options &&
                  <div className='other-options'>
                    Diğer ödeme seçenekleri
                    <span className='border-visited'></span>
                  </div>
                }
              </div>
              <div className='pp-offer__credits row-content'>
                {item.credits.replace("{pad}", item.price_afterdeadline).replace("{od}", item.offer_deadline || item.offer_time)}
              </div>
            </>
          })
        }
        </article>
      </section>
  )
}

export default SectionBottom