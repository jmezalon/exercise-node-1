const firstLetter = (str) => {
  return str[0];
}

const midLetter = (str) => {
  if (str.length % 2 === 1) {
    return str[(str.length - 1) / 2]
  } else {
    return str[(str.length / 2) - 1] + str[str.length / 2]
  }
}

const lastLetter= (str) => {
  return str[str.length - 1]
}

const strRev = (str) => {
  return str.split("").reverse().join("")
}

// console.log(strRev("jean"))

module.exports = {
  firstLetter, midLetter, strRev, lastLetter
}
