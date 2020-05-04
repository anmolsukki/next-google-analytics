import React, { Component } from "react";
import Link from "next/link";
 
import Layout from "../components/layout.js"
 
export default class extends Component {
  render () {
    return (
      <Layout>
        <div>Homepage.</div>
        <Link href="/"><a>go to mainPage</a></Link>
      </Layout>
    )
  }
}
