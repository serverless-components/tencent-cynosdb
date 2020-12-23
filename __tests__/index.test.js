const { generateId, getServerlessSdk } = require('./lib/utils')
const PWD_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*_-';
const pwdReg = new RegExp(`[${PWD_CHARS}]{8,64}`);

const instanceYaml = {
  org: 'orgDemo',
  app: 'appDemo',
  component: 'cynosdb@dev',
  name: `cynosdb-integration-tests-${generateId()}`,
  stage: 'dev',
  inputs: {
    region: 'ap-shanghai',
    zone: 'ap-shanghai-2',
    vpcConfig: {
      vpcId: 'vpc-mshegdk6',
      subnetId: 'subnet-3la82w45',
    },
  }
}

const credentials = {
  tencent: {
    SecretId: process.env.TENCENT_SECRET_ID,
    SecretKey: process.env.TENCENT_SECRET_KEY,
  }
}

const sdk = getServerlessSdk(instanceYaml.org)

it('should deploy cynosdb success', async () => {
  const instance = await sdk.deploy(instanceYaml, credentials)
  expect(instance).toBeDefined()
  expect(instance.instanceName).toEqual(instanceYaml.name)
  expect(instance.outputs).toEqual({
    dbMode: 'SERVERLESS',
    region: instanceYaml.inputs.region,
    zone: instanceYaml.inputs.zone,
    vpcConfig: instanceYaml.inputs.vpcConfig,
    instanceCount: 1,
    minCpu: 0.5,
    maxCpu: 2,
    adminPassword: expect.stringMatching(pwdReg),
    clusterId: expect.stringContaining('cynosdbmysql-'),
    connection: {
      ip: expect.any(String),
      port: 3306,
    },
    vendorMessage: null,
  });
})

it('should remove cynosdb success', async () => {
  await sdk.remove(instanceYaml, credentials)
  result = await sdk.getInstance(instanceYaml.org, instanceYaml.stage, instanceYaml.app, instanceYaml.name)

  expect(result.instance.instanceStatus).toEqual('inactive')
})
