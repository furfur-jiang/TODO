const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  try {
    return await db.collection('todos').where({
      done: false
    })
      .update({
        data: {
          progress: _.inc(10)
        },
      })
  } catch (e) {
    console.error(e)
  }
}