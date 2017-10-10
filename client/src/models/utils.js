const axios = require('axios')
const querystring = require('querystring')
import * as client from '../../../private'

const CLIENT_ID = client.ID
const CLIENT_SECRET = client.SECRET

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
