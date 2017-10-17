const {Server} = require('hapi')
const {fetchAlbumCover} = require('./spotify')

const server = new Server()

server.connection({
    host: 'localhost',
    port: 8000,
    // routes: {cors: true}
});

server.route({
    method: 'GET',
    path:'/api/spotify/album-cover',
    handler: async (request, reply) => {
      const {artist, album} = request.query
      console.log('artist', artist)
      console.log('album', album)
      const albumCover = await fetchAlbumCover(artist, album)
      return reply(albumCover)
    }
});


// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
