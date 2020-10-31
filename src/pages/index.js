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

  @media (max-width: 768px) {
    width: 100%;
  }
`

const TitleWrapper = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`

const AnimationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin-top: 100px;

  @media (max-width: 768px) {
    display: none;
  }
`

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20%;
  margin-top: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

// Skills
const skills = [
  { title: 'Javascript', description: `I've been building applications with JS for over 5 years. Both in the Frontend, transforming great designs into pixel-perfect products, as well as designing and implementing APIs and Backend services. I've been cheating JS with TypeScript for about 2 years now. Please keep it to yourself.`},
  { title: 'React', description: `I have been part of the React ecosystem for about 4 years. It's one of my strongest skills. I have experience in designing re-usable components libraries. Keeping up to date on the latest state-management patterns, best testing practices, and the most popular styling libraries is one of my hobbies that I appreciate the most.` },
  // { title: 'Cloud Computing', description: 'Passionated on building great products that people will love to use. Great passion for product design and software development. Activily studying machine learning and AI'},
  { title: 'Data Visualization', description: `I find it fascinating how simple visualisations can lead to great decision-making. I've designed and implemented an internal analytics dashboard. By the way, my bachelor was in business.`},
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
              <Text size={TextSize.large}>Passionate about building great products that people want to use. Great passion for product design and software development. Actively studying AI.</Text>
            </HeroTextWrapper>
          </TitleWrapper>
          <AnimationWrapper>
             <MainAnimation />
          </AnimationWrapper>
        </FlexContainer>
        <SkillsWrapper>
          {
            skills.map(({ title, description }) => <SkillCard key={title} title={title} description={description}/>)
          }
        </SkillsWrapper>
      </Layout>
    </AnimationContext.Provider>
  )
}

export default IndexPage
