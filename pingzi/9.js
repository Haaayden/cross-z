// 数组扁平化

var flat = function(arr) {
  return arr.reduce((res, item) => {
    return res.concat(Array.isArray(item) ? flat(item) : item)
  }, [])
}

module.exports = flat
