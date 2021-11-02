import React from 'react'
import { ApolloClient, ApolloProvider,InMemoryCache,gql } from '@apollo/client'
import {Query} from '@apollo/client/react/components'



const client = new ApolloClient({
    uri:'https://api-us-east-1.graphcms.com/v2/ckvgqhqr438cj01wi1tkfgdp1/master',
    cache: new InMemoryCache()
})

const POST_QUERY =gql `
{
    posts{
      id
      title
      body
      
    }
  }


`;

// client.query({
//     query: testQuery,
// }).then(res=> console.log(res))

const App = () => {
    return (
        <ApolloProvider client={client}>
        <div>
            <Query query={POST_QUERY}>

                {({loading,data})=>{
                    if (loading) return "Loading..."
                    const {posts} = data;
                    return posts.map(post => <h1>{post.title}</h1>)
              
                }}

            </Query>
            
        </div>
        </ApolloProvider>
    )
}

export default App
