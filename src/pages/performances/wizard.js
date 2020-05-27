/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, {useState} from 'react' // eslint-disable-line
import Wizard from '../../components/wizard'

import {usePerformancesMetaData} from '../../hooks/use-performances-metadata'

const WizardPage = () => {
  const performanceData = usePerformancesMetaData()

  // console.log(performanceData)

  return (
    <Wizard performances={performanceData} />
  )
}

export default WizardPage
