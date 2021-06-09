import React from 'react'
import styled from 'styled-components'
import { BaseLayout, Heading, Image, Text } from '@wagyu-swap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/WagyuStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;
  
  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    flex-direction: row;    
    background-image: url('/images/background.svg');
    background-position: center top;
    background-repeat: no-repeat;
    height: 165px;
    padding-top: 0;
    padding-left: 24px;
    padding-right: 24px;
    text-shadow: 0px 7px 5px black;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    display: flex;
    flex-direction: row;    
    background-image: url('/images/background.svg');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 165px;
    padding-top: 0;
    padding-left: 24px;
    padding-right: 24px;
    text-shadow: 0px 7px 5px black;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`
const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Hero>
        <StyledImage src="/images/pan-wagyu-bg2.svg" alt="Wagyu" width={160} height={120} />
        <div>
          <Heading as="h1" scale="xl" mb="24px" color="secondary">
            {t('WagyuSwap')}
          </Heading>
          <Text>{t('The #1 AMM and yield farm on Velas Chain.')}</Text>
        </div>
        <StyledImage src="/images/pan-wagyu-bg.svg" alt="Wagyu" width={160} height={120} />
      </Hero>
      <Page>
        <div>
          <Cards>
            <FarmStakingCard />
            <LotteryCard />
          </Cards>
          <CTACards>
            <EarnAPRCard />
            <EarnAssetCard />
            <WinCard />
          </CTACards>
          <Cards>
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
        </div>
      </Page>
    </>
  )
}

export default Home
