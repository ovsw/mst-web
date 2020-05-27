/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React, {useState} from 'react' // eslint-disable-line
import Wizard from '../components/wizard'

import {usePerformancesMetaData} from '../hooks/use-performances-metadata'

const WizardPage = () => {
  const performanceData = usePerformancesMetaData()

  // console.log(performanceData)

  return (
    <section sx={{variant: 'sections.default'}}>
      <Container sx={{variant: 'styles'}}>
        <h1>Find your performance</h1>
      </Container>

      <Wizard performances={performanceData} />
    </section>
  )
}

export default WizardPage
