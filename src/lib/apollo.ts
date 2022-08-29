import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl7fc3ekx6ss801uh3kry40nv/master',
  cache: new InMemoryCache(),
})
