const dayjs = require('dayjs')
function formatDate(date){
  return dayjs(date).format('L LTS')
}
module.exports = formatDate