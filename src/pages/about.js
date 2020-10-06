import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function About () {
    return (
        <Layout>
            <SEO title="About" />
            <h1>About</h1>
            <div style={{fontSize: 20, maxWidth: '700px'}}>
                <p>Hey! I'm Dan Toro, a software engineer currently working at <a href="https://bluedot.io" target="_blank" rel="noreferrer">Bluedot</a> as part of the CX team.</p>
                <p>My tech stack has been changing quite lot during the last few years, all related to the web. This mainly includes, but not exclusive, Typescript, Javascript, React, a variety of AWS services.</p>
                <p>I've also had the opportunity to work in a couple mobile projects with React Native and iOS</p>
                <p>At the moment I'm learning about Deep Learning</p>
                <p>Please feel free to reach me out at:</p>
                <ul>
                    <li><a href="mailto:toro.duque@gmail.com" target="_blank" rel="noreferrer">Email</a></li>
                    <li><a href="https://twitter.com/dtoroduq" target="_blank" rel="noreferrer">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/daniel-toro-duque-2b3bb932/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/toroduque" target="_blank" rel="noreferrer">Github</a></li>
                </ul>
            </div>
        </Layout>
    )
}