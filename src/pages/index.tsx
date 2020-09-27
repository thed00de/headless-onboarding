import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const MainSection = styled.section`
  display: flex;
`

const MainTextWrapper = styled.div`
  width: 55%;
`

const ImageWrapper = styled.div`
  width: 45%;
  max-width: 300px;
  margin-bottom: 1.45rem;
`

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <MainSection>
      <MainTextWrapper>
        <h1>Example Gatsby Site</h1>
        <p>
	  This is a site made in Gatsby, hosted on the WP Engine headless platform.
        </p>
        <p>
          <Link to="/about/">Learn more</Link>
        </p>
      </MainTextWrapper>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
    </MainSection>
  </Layout>
)

export default IndexPage
