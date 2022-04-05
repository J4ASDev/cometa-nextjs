export default function(array, key) {
  return array.reduce(function(results, item) {
    (results[item[key]] = results[item[key]] || []).push(item)
    return results
  }, {})
}