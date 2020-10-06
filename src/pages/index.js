import React, { useState } from 'react'
import styled from 'styled-components'
import Title, { TitleSize } from '../components/Title'
import FlexContainer from '../components/FlexContainer'
import Text, { TextSize } from '../components/Text' 
import Layout from '../components/layout'
import MainAnimation from '../components/MainAnimation'
import SkillCard from '../components/SkillCard'
import SEO from '../components/seo'
import { AnimationContext } from '../contexts/animation-context'

// Styles
const HeroTextWrapper = styled.div`
  width: 60%;
  max-width: 800px;
`

const TitleWrapper = styled.div`
  width: 60%;
`

const AnimationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin-top: 100px;
`

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20%;
  margin-top: 60px;
`

// Skills
const skills = [
  { title: 'Javascript', description: 'Passionated on building great products that people will love to use. Great passion for product design and software development. Activily studying machine learning and AI'},
  { title: 'React', description: 'Passionated on building great products that people will love to use. Great passion for product design and software development. Activily studying machine learning and AI'},
  { title: 'Cloud Computing', description: 'Passionated on building great products that people will love to use. Great passion for product design and software development. Activily studying machine learning and AI'},
  { title: 'Data Visualization', description: 'Passionated on building great products that people will love to use. Great passion for product design and software development. Activily studying machine learning and AI'},
]

const IndexPage = () => {
  const [ hovered, setHovered ] = useState("")

  return (
    <AnimationContext.Provider value={{ hovered, setHovered }}>
      <Layout>
        <SEO title="👋" />
        <FlexContainer>
          <TitleWrapper>
            <Title size={TitleSize.large}>Software Engineer</Title>
            <HeroTextWrapper>
              <Text size={TextSize.large}>Passionated about building great products that people want to use. Great passion for product design and software development. Activily studying machine learning and AI.</Text>
            </HeroTextWrapper>
          </TitleWrapper>
          <AnimationWrapper>
             <MainAnimation />
          </AnimationWrapper>
        </FlexContainer>
        <SkillsWrapper>
          {
            skills.map(({ title, description }) => <SkillCard title={title} description={description}/>)
          }
        </SkillsWrapper>
      </Layout>
    </AnimationContext.Provider>
  )
}

export default IndexPage
