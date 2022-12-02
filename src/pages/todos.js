import { graphql } from "gatsby";
import * as React from "react"
import Layout from "../components/layout";

const TodosPage = ({data}) => {
  return <Layout>
    {data.allDatoCmsTodo.edges.map(({node}) => <p>{node.name}</p>)}
  </Layout>
}


export const query = graphql`
  query {
    allDatoCmsTodo {
      edges {
        node {
          name
        }
      }
    }
  }
`

export default TodosPage;
