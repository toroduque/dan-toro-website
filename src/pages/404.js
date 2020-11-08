import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Text from "../components/Text"
import Title from "../components/Title"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Title>404</Title>
    <h1>Page not found</h1>
    <Text>
      You just hit a route that doesn&#39;t exist. Please check your URL.
    </Text>
    <hr />
    <Link to="/">
      <span role="img" aria-label="Go back button">
        ⬅️
      </span>
      Go back
    </Link>
  </Layout>
)

export default NotFoundPage
