import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from '../components/ProjectCard'
import Layouts from "../components/Layouts"

export default function Portfolio() {
  const projects = [
    {
      name: "Retro Time App",
      description: "App to run Retrospective meetings for teams working remotely. It was implemented with React and Firebase services: Cloud Firestore DB and Firebase Auth",
      url: "https://retrotime.app",
    },
    {
        name: "Daccord",
        description: "Guitar chords GraphQL API. I love playing guitar. I've built this API for myself to easily find the chords. I'm still actively working on it. The frontend was built with React and the backend with Apollo GraphQL",
        url: "https://github.com/toroduque/guitar-chords-graphql",
    },
    {
        name: "Machine Learning: Gestures Recognition",
        description: "Concept idea of navigating a website with your hands gestures. This was a project for a Hackweek in Bluedot. It was built with TensorFlow.js and React",
        url: "https://github.com/toroduque/tfjs-gesture-recognition",
    },
  ]

  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1>Portfolio</h1>
      <Layouts.TwoColumns>
        {projects.map(project => (
          <ProjectCard title={project.name} description={project.description} url={project.url}/>
        ))}
      </Layouts.TwoColumns>
    </Layout>
  )
}
