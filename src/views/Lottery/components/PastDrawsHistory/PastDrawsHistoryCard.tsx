import React from 'react'
import { Heading, Card, CardBody } from '@wagyu-swap-libs/uikit'
import HistoryChart from './HistoryChart'
import Legend from './Legend'
import { useTranslation } from '../../../../contexts/Localization'

const PastDrawsHistoryCard: React.FC = () => {
  const { t } = useTranslation()


  return (
    <Card>
      <CardBody>
        <Heading size="md">{t('History')}</Heading>
        <Legend />
        <HistoryChart />
      </CardBody>
    </Card>
  )
}

export default PastDrawsHistoryCard
