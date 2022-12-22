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

  return fetch(url, options)
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully sent message.' })
    }))
    .catch((err) => {
      return {
        statusCode: 500,
        body: JSON.stringify(err)
      }
    })

  // return axios.post('https://hooks.zapier.com/hooks/catch/4353581/b742gwn/', event.body)
  //   .then(() => ({
  //     statusCode: 200,
  //     body: JSON.stringify({ message: 'Successfully sent message.' })
  //   }))
  //   .catch((err) => {
  //     return {
  //       statusCode: 500,
  //       body: JSON.stringify(err)
  //     }
  //   })
}