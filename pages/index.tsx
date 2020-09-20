#const Home = () => <h1>Hello Headless!!</h1>;

#export default Home;

import React from "react"
//import { graphql } from "gatsby"
//import Layout from "../components/layout"
//import SEO from "../components/seo"
//import favicon from "../assets/images/favicon.ico"

export default function Home({ data }) {
  return (
    <Layout>
      <link rel="icon" href={favicon} />
      <SEO title="Home"/>
      <h1><span role="img" aria-label="Waving Hand Emoji">👋</span> Greetings!</h1>
      <p>This is my site. It's not much, but it's mine. Make yourself comfortable! Check out my projects and my "blog" (if you can really call it that), should it strike your interest.</p>
      <h4>My Links</h4>
      <li><a href="https://github.com/brettkrueger" target="_blank" rel="noreferrer">Github</a></li>
      <li><a href="https://linkedin.com/in/brettkrueger" target="_blank" rel="noreferrer">LinkedIn</a></li>
      <li><a href="https://keybase.io/brettkrueger" target="_blank" rel="noreferrer">Keybase</a></li>
    </Layout>
  )
}
