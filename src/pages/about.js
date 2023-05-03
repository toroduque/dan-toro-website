import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <div style={{ fontSize: 22, maxWidth: "800px" }}>
        <p>
          Hey! I'm Dan Toro, Product Manager at{" "}
          <a href="https://bluedot.io" target="_blank" rel="noreferrer">
            Bluedot
          </a>
          , working on our Mobile SDK, web apps, and integrations. As a small
          start-up Bluedot, I also design the UI/UX of all our products.
        </p>
        <p>
          My journey as a Product Manager started as a natural progression from
          my previous roles as front-end and CX engineers. My engineering
          background provides the technical understanding to communicate
          fluently with other engineers and allows me to become familiar with
          the development and software product lifecycle. As a CX engineer, I
          gained critical experience communicating with customers and knowing
          their needs, pain points, and aspirations in more detail.
        </p>
        <p>
          A project that exemplifies my skills and experience is Tempo, which
          emerged from a hack week project where we brainstormed new ideas on
          how to use our Geofencing technology. This product is embedded in our
          Mobile SDK, allowing you to receive updates on how far the customer is
          from the store to collect its order, extending the customer's
          Last-Mile experience. I worked on the design and implementation of the
          app using React Native. After launching, I had the chance to work
          closely with customers and sales teams, gathering feedback and
          evolving the product until it became one of our most popular products.
        </p>
        <p>
          I'm constantly engaging with new technologies and trends in my field,
          attending conferences and participating in online communities.
        </p>

        <p>
          Feel free to get in touch with me for anything related to Product
          Management or Software Development.
        </p>
        <ul>
          <li>
            <a
              href="mailto:toro.duque@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/daniel-toro-duque-2b3bb932/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
