const { Component } = require('@serverless/core')
const { Cynosdb } = require('tencent-component-toolkit')
const { TypeError, ApiError } = require('tencent-component-toolkit/src/utils/error')
const { prepareInputs } = require('./utils')
const CONFIGS = require('./config')

class ServerlessComponent extends Component {
  getCredentials() {
    const { tmpSecrets } = this.credentials.tencent

    if (!tmpSecrets || !tmpSecrets.TmpSecretId) {
      throw new TypeError(
        'CREDENTIAL',
        'Cannot get secretId/Key, your account could be sub-account and does not have the access to use SLS_QcsRole, please make sure the role exists first, then visit https://cloud.tencent.com/document/product/1154/43006, follow the instructions to bind the role to your account.'
      )
    }

    return {
      SecretId: tmpSecrets.TmpSecretId,
      SecretKey: tmpSecrets.TmpSecretKey,
      Token: tmpSecrets.Token
    }
  }

  async deploy(inputs) {
    console.log(`Deploying ${CONFIGS.compName} Database`)

    const credentials = this.getCredentials()

    const cynosInputs = await prepareInputs(inputs)
    cynosInputs.clusterId = this.state.clusterId
    const client = new Cynosdb(credentials, cynosInputs.region)
    const outputs = await client.deploy(cynosInputs)

    if (this.state.adminPassword && !outputs.adminPassword) {
      outputs.adminPassword = this.state.adminPassword
    }

    this.state = outputs

    return outputs
  }

  async remove() {
    console.log(`Removing ${CONFIGS.compName} Database`)

    const { state } = this
    const { clusterId } = state
    if (clusterId) {
      const credentials = this.getCredentials()

      const client = new Cynosdb(credentials, state.region)

      await client.remove({
        clusterId: state.clusterId
      })
    }

    this.state = {}
    return {}
  }

  // only support reset root password
  async resetpwd(inputs) {
    const { state } = this

    const credentials = this.getCredentials()

    const client = new Cynosdb(credentials, state.region)
    if (!inputs.adminPassword) {
      throw new ApiError({
        type: `PARAMETER_${CONFIGS.compName.toUpperCase()}`,
        message: 'adminPassword is required'
      })
    }

    await client.resetPwd({
      clusterId: state.clusterId,
      adminName: 'root',
      adminPassword: inputs.adminPassword
    })

    state.adminPassword = inputs.adminPassword
    return this.state
  }
}

module.exports = ServerlessComponent
