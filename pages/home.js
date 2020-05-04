import React, { Component } from "react";
import Link fron "next/link";
 
import Layout from "../components/layout.js"
 
export default class extends Component {
  render () {
    return (
      <Layout>
        <div>Homepage.</div>
        <Link href="/"><a>Go to MainPage</a></Link>
      </Layout>
    )
  }
}
