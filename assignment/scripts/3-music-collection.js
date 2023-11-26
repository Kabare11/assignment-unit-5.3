console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(title, artist, yearPublished) {
  let newObject = {

    title,
    artist,
    yearPublished,
  }
  collection.push(newObject)
  return newObject

}

console.log(addToCollection('Wadani', 'Awale', '1992'))
console.log(addToCollection('Sorry', 'Justin', '2012'))
console.log(addToCollection('love', 'Awale', '2022'))
console.log(addToCollection('Jacket', 'Abdulahi', '2015'))
console.log(addToCollection('True', 'Adahey', '2000'))
console.log(addToCollection('Never', 'Chira', '2015'))

console.log(collection)

function showCollection(x) {
  console.log(x.length)
  for (let i = 0; i < x.length; i++) {
    console.log(x[i].title, 'By' x[i].artist, 'published in', X[i].yearPublished)
  }
}
showCollection(collection)

function findByArtist(artist) {
  const findResult = []
  for (let i = 0; i <= collection.length; i++) {
    if (collection[i].artist === artist) {
      findResult.push(collection[i])
    }
  }
  return findResult
}
console.log(findByArtist(''))






// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
