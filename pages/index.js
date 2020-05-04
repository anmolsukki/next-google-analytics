import React, { Component } from "react";
import Link from "next/link";
 
import Layout from "../components/layout.js"
 
export default class extends Component {
  render () {
    return (
      <Layout>
        <div>Homepage content here.</div>
        <Link href="/home"><a>Go to HomePage</a></Link>
      </Layout>
    )
  }
}
