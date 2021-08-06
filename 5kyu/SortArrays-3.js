// This time the input is a sequence of course-ids that are formatted in the following way:

// name-yymm
// The return of the function shall first be sorted by yymm, then by the name (which varies in length)

// input: courses - array of course-names "name-yymm"
// output: sorted by "yymm", then "name"
function getId(param) {
  return Number(param.match(/\d+/)[0])
}

sortme = function (courses) {
  return courses.sort((a, b) => {
    const idA = getId(a)
    const idB = getId(b)
    return idA === idB ? a.charCodeAt() - b.charCodeAt() : idA - idB
  })
}
