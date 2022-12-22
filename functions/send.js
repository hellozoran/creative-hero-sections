// export async function handler(event, context) {
  
//   return {
//     statusCode: 200,
//     body: JSON.stringify(event.body)
//   }
//   return fetch(url, options)
//     .then((response) => response.json())
//     .then((data) => ({
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Successfully sent message.' })
//     }))
//     .catch((err) => {
//       return {
//         statusCode: 500,
//         body: JSON.stringify(err)
//       }
//     })
// }


export async function handler(event, context) {
  const url = 'https://hooks.zapier.com/hooks/catch/4353581/b742gwn/'
  const options = {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(event.body),
  }
  try {
    const response = await fetch(url, options)
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed sending data' }),
    };
  }
};