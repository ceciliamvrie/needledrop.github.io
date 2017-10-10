var Data = require('./data')

const albums = Data.map((review) => {
  var artist = review.title.slice(0, review.title.indexOf('-'))
  var album = review.title.slice(review.title.indexOf('- ')+2, review.title.lastIndexOf('A'))

  if (review.title.indexOf('DOUBLE') >= 0) {
    album = review.title.slice(review.title.indexOf('- '), review.title.lastIndexOf('D'))
  }
  if (review.title.indexOf('é') >= 0) {
    var beginning = review.title.split('').slice(0, review.title.indexOf('é'))
    var half = review.title.split('').slice(review.title.indexOf('é')+1, review.title.lastIndexOf(' -'))
    artist = beginning.join('') + 'e' + half.join('')
  }
  if (album.indexOf('-') >= 0) {
    album = album.split('- ')[1]
  }
  return [artist , album]
})

export default {
  albums: albums
}
