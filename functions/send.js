import axios from 'axios'

export async function handler(event, context) {
  return axios.post('https://hooks.zapier.com/hooks/catch/4353581/b742gwn/', event.body)
    .then(() => ({
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully sent message.' })
    }))
    .catch((err) => {
      return {
        statusCode: 500,
        body: JSON.stringify(err)
      }
    })
}