import { ApolloClient, InMemoryCache } from '@apollo/client'
import { gql } from '@apollo/client'

export const client = new ApolloClient({
  // uri: import.meta.env.REACT_APP_GRAPHQL_ENDPOINT,
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl7fc3ekx6ss801uh3kry40nv/master',
  cache: new InMemoryCache(),
})

export const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: createdAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`
