const Document = require('./document')
const {
  serializeOperation, deserializeOperation,
  serializeRemotePosition, deserializeRemotePosition
} = require('./serialization')

module.exports = {
  Document,
  serializeOperation, deserializeOperation,
  serializeRemotePosition, deserializeRemotePosition
}
