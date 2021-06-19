import React from 'react'
import Layout from '../view/layout.jsx'

export default class extends React.Component {
  static async getInitialProps({ req, res }) {
    const locals = res.locals
    return {
      locals,
      value: locals.value
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    return <Layout>
      <h2> Welcome to the the special string page </h2>
      <h3> The server told me that the sub-route is: </h3>
      <div style={{fontSize:"36px", marginBottom: "36px", color: "teal"}}>{this.props.value}</div>
      <a style={{fontSize: "36px"}} href="/"> Go back </a>
    </Layout>
  }

}
