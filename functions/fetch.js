import axios from 'axios'

const API_ENDPOINT = 'https://catfact.ninja/fact'

export async function handler(event, context) {
  let response
  try {
    response = await axios.get(API_ENDPOINT)
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(response.data)
  }
}