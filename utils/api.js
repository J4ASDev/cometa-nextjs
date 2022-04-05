const uri = 'http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1'

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    hash: 'OcJn4jYChW'
  }
}

export default async (endpoint = '') => {
  try {
    const response = await fetch(`${uri}${endpoint}`, options)    
    const data = await response.json()

    return data
  } catch (err) {
    console.log('Error: ', err)

    return err
  }
}