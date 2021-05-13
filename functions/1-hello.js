// domain/.netlify/functions/1-hello
// exports
{/* <pre style="font-family: Courier;background: #f4f4f4;border: solid 1px #e1e1e1;float: left;width: auto;">
    JSON.stringify(data, null,' ').replace('[', '').replace(']', '')
</pre> */}
// const person = { name: 'john' }



exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: "Our First Netlify Example"
  }
}
// exports.handler = (event, context, cb) => {
//   cb(null, {statusCode:200,body:'Hello'})

// }
