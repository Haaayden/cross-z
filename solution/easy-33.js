// 第一个错误的版本 [278]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/8/sorting-and-searching/53/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
const isBadVersion = function(version) {
  return version >= 2
}
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 1
    let right = n
    while (left < right) {
      let mid = (left + right) >>> 1
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return left
  }
}

module.exports = solution(isBadVersion)
