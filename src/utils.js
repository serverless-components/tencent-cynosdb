const CONFIGS = require('./config')

const prepareInputs = (inputs) => {
  inputs.region = inputs.region || CONFIGS.region
  inputs.zone = inputs.zone || CONFIGS.zone
  inputs.projectId = inputs.projectId || CONFIGS.projectId
  inputs.zone = inputs.zone || CONFIGS.zone
  inputs.dbVersion = inputs.dbVersion || CONFIGS.dbVersion
  inputs.dbType = inputs.dbType || CONFIGS.dbType
  inputs.port = inputs.port || CONFIGS.port
  inputs.cpu = inputs.cpu || CONFIGS.cpu
  inputs.memory = inputs.memory || CONFIGS.memory
  inputs.storageLimit = inputs.storageLimit || CONFIGS.storageLimit
  inputs.instanceCount = inputs.instanceCount || CONFIGS.instanceCount
  inputs.payMode = inputs.payMode || CONFIGS.payMode
  inputs.dbMode = inputs.dbMode || CONFIGS.dbMode
  inputs.minCpu = inputs.minCpu || CONFIGS.minCpu
  inputs.maxCpu = inputs.maxCpu || CONFIGS.maxCpu
  inputs.autoPause = inputs.autoPause || CONFIGS.autoPause
  inputs.autoPauseDelay = inputs.autoPauseDelay || CONFIGS.autoPauseDelay

  inputs.vpcConfig = inputs.vpcConfig

  return inputs
}

module.exports = {
  prepareInputs
}
