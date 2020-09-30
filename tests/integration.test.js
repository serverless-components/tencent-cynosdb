const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, '..', '.env.test')
})
const { generateId, getServerlessSdk } = require('./utils')
const path = require('path')

// set enough timeout for deployment to finish
jest.setTimeout(300000)

// the yaml file we're testing against
const instanceYaml = {
  org: 'orgDemo',
  app: 'appDemo',
  component: 'cynosdb',
  name: `cynosdb-integration-tests-${generateId()}`,
  stage: 'dev',
  inputs: {
    region: 'ap-guangzhou',
    zone: 'ap-guangzhou-4',
    vpcConfig: {
      vpcId: 'vpc-p2dlmlbj',
      subnetId: 'subnet-a1v3k07o',
    },
  }
}

// get credentials from process.env
const credentials = {
  tencent: {
    SecretId: process.env.TENCENT_SECRET_ID,
    SecretKey: process.env.TENCENT_SECRET_KEY,
  }
}

// get serverless construct sdk
const sdk = getServerlessSdk(instanceYaml.org)

it('should successfully deploy cynosdb', async () => {
  const instance = await sdk.deploy(instanceYaml, credentials)
  expect(instance).toBeDefined()
  expect(instance.instanceName).toEqual(instanceYaml.name)

  expect(instance.outputs).toEqual({
    region: instanceYaml.inputs.region,
    zone: instanceYaml.inputs.zone,
    vpcConfig: instanceYaml.inputs.vpcConfig,
    instanceCount: 2,
    adminPassword: expect.stringMatching(pwdReg),
    clusterId: expect.stringContaining('cynosdbmysql-'),
    connection: {
      ip: expect.any(String),
      port: 3306,
      readList: [
        {
          ip: expect.any(String),
          port: 3306,
        },
      ],
    },
  });
})

it('should successfully remove cynosdb', async () => {
  await sdk.remove(instanceYaml, credentials)
  result = await sdk.getInstance(instanceYaml.org, instanceYaml.stage, instanceYaml.app, instanceYaml.name)

  expect(result.instance.instanceStatus).toEqual('inactive')
})
