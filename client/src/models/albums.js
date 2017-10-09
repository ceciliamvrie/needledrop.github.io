const axios = require('axios')
const querystring = require('querystring');

const CLIENT_ID = '5ca5d25b4d464174bd8b2b0894662cf1'
const CLIENT_SECRET = '42ff143a22d1496eae9327d83fc5448e'

module.exports = {
  findToken: async () => {
    const auth = await axios({
          method: 'post',
          url: 'https://accounts.spotify.com/api/token',
          headers: {
            'Authorization': `Basic ${new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')}`,
            'content-type': 'application/x-www-form-urlencoded',
          },
          data: querystring.stringify({
              grant_type: 'client_credentials'
          })
        })

        return auth.data.access_token
    },
  findCovers: async (name, album, token) => {
    const covers = await axios({
        method: 'get',
        url: `https://api.spotify.com/v1/search?q=${album}%20artist:${name}&type=album`,
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })

      return covers.data.albums.items[0].images[2]
    }
}

// (async () => {
//   console.log(await findCovers('Amine', 'Good For You', await findToken()))
// })()
