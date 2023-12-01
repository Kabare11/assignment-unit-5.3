console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];


function addToCollection(collection, title, artist, yearPublished) {

  let newObject = {

    title,
    artist,
    yearPublished,
  }
  collection.push(newObject)
  return newObject;

}

console.log(addToCollection(myCollection, 'Wadani', 'Awale', '1992'))

console.log(addToCollection(myCollection, 'Sorry', 'Justin', '2012'))

console.log(addToCollection(myCollection, 'love', 'Awale', '2022'))

console.log(addToCollection(myCollection, 'Jacket', 'Abdulahi', '2015'))

console.log(addToCollection(myCollection, 'True', 'Adahey', '2000'))

console.log(addToCollection(myCollection, 'Never', 'Chira', '2015'))

console.log(myCollection)


function showCollection(collection) {
  console.log(collection.length)
  for (let i = 0; i < collection.
    length; i++) {
    console.log(`${collection[i].title} By ${collection[i].artist}, published in ${collection[i].yearPublished}`)

  }
}
showCollection(myCollection)

function findByArtist(collection, artist) {
  const findResult = []
  console.log('inside collection', collection)
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      findResult.push(collection[i])
    }
  }
  return findResult
}
console.log(findByArtist(myCollection, 'Awale'))







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
