function binaryMatch(argument){
  return argument
}

function canBuildNote(magazine, note){
  let magHistogram = buildHistogram(magazine)

  for (let i= 0; i < note.length; i ++){
    if (!!!magHistogram[note[i]] || magHistogram[note[i]] === 0){
      return false
    } else {
      magHistogram[note[i]]--
    }
  }
  return true
}

// Takes in an array and returns a histogram
function buildHistogram(wordArray){
  const histogram = {}
  wordArray.forEach(letter => {
    if (histogram[letter]) {
      histogram[letter]++
    } else {
      histogram[letter]= 1
    }
  })
  return histogram
}
