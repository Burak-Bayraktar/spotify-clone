import React from 'react'
import { AllPlatformsSection } from './components/AllPlatformsSection'
import { DownloadSection } from './components/DownloadSection'
import { MobileSection } from './components/MobileSection'
import './style.scss';

const Download = () => {
  return (
    <>
      <DownloadSection />
      <MobileSection />
      <AllPlatformsSection />
    </>
  )
}

export default Download