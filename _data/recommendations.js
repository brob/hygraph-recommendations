const {GraphQLClient, gql} = require('graphql-request');
const client = new GraphQLClient('https://api-us-east-1.hygraph.com/v2/cl8vq1v5q6ycb01uqh6c3fwie/master') 
module.exports = async function () {

    const query = gql`
    query Recommendations {
        recommendations {
          body
          createdAt
          id
          name
          publishedAt
          slug
          title
          twitterHandle
          updatedAt
        }
      }

    `
    const data = await client.request(query)
    console.log(data)
    return data.recommendations
}