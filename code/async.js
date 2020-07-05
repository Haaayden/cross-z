const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))

function* testG() {
  const data1 = yield getData()
  console.log('data1', data1)
  const data2 = yield getData()
  console.log('data2', data2)
  return 'success'
}
// 手动执行时如下
const gen = testG()
const { done, value } = gen.next()   // done: false value: Promise
const { done, value } = gen.next()   // done: false value: Promise
const { done, value } = gen.next()   // done: true value: 'success'


// async 目的是自动执行 generator
function customAsync(generatorFunc) {
  return function() {
    const gen = generatorFunc.apply(this, arguments)

    return new Promise((resolve, reject) => {
      // key 有两种：next throw 用来处理正常执行和错误抛出
      function step(key, val) {
        let genRes
        try {
          genRes = gen[key](val)
        } catch (error) {
          reject(error)
        }

        const { done, value } = genRes
        if (done) {
          resolve(value)
        } else {
          value.then((val) => {
            step('next', val)
          }, (err) => {
            step('throw', err)
          })
        }
      }

      step('next')
    })
  }
}