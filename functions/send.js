import axios from 'axios'

const url = 'https://hooks.zapier.com/hooks/catch/4353581/b742gwn/'

export async function handler(event, context) {
  try { 
    await axios.post(url, event.body) 
  }
  catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ data: 'Successfully sent.'})
  }
}