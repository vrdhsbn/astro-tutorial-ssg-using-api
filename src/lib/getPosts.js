import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'

async function getPosts() {
  console.log('fetching...')
  const res = await axios.get(url)
  console.log('done.')

  return res.data
}

export { getPosts }
