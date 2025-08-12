const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
 
  const userId = event.requestContext.authorizer.claims.sub;
  const { productId } = JSON.parse(event.body);

 
};