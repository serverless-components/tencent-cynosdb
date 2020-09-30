const ensureNumber = require('type/number/ensure')
const ensureObject = require('type/object/ensure')
const ensureString = require('type/string/ensure')
const { TypeError } = require('tencent-component-toolkit/src/utils/error')
const CONFIGS = require('./config')

const prepareInputs = (inputs) => {
  try {
    inputs.region = ensureString(inputs.region, { default: CONFIGS.region })
    inputs.zone = ensureString(inputs.zone, { default: CONFIGS.zone })
    inputs.projectId = ensureNumber(inputs.projectId, { default: CONFIGS.projectId })
    inputs.zone = ensureString(inputs.zone, { default: CONFIGS.zone })
    inputs.dbVersion = ensureString(inputs.dbVersion, { default: CONFIGS.dbVersion })
    inputs.dbType = ensureString(inputs.dbType, { default: CONFIGS.dbType })
    inputs.port = ensureNumber(inputs.port, { default: CONFIGS.port })
    inputs.cpu = ensureNumber(inputs.cpu, { default: CONFIGS.cpu })
    inputs.memory = ensureNumber(inputs.memory, { default: CONFIGS.memory })
    inputs.storageLimit = ensureNumber(inputs.storageLimit, { default: CONFIGS.storageLimit })
    inputs.instanceCount = ensureNumber(inputs.instanceCount, { default: CONFIGS.instanceCount })

    inputs.vpcConfig = ensureObject(inputs.vpcConfig, {
      isOptional: false,
      errorMessage: 'vpcConfig is required'
    })
    inputs.vpcConfig.vpcId = ensureString(inputs.vpcConfig.vpcId, {
      isOptional: false,
      errorMessage: 'vpcId is required'
    })
    inputs.vpcConfig.subnetId = ensureString(inputs.vpcConfig.subnetId, {
      isOptional: false,
      errorMessage: 'subnetId is required'
    })
  } catch (e) {
    throw new TypeError(`PARAMETER_${CONFIGS.compName.toUpperCase()}`, e.message, e.stack)
  }

  return inputs
}

module.exports = {
  prepareInputs
}
