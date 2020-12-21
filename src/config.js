const CONFIGS = {
  region: 'ap-shanghai',
  zone: 'ap-shanghai-2',
  projectId: 0,
  dbVersion: '5.7',
  dbType: 'MYSQL',
  port: 3306,
  cpu: 1,
  memory: 1,
  storageLimit: 1000,
  instanceCount: 1,
  payMode: 0,
  dbMode: 'SERVERLESS',
  minCpu: 0.5,
  maxCpu: 2,
  autoPause: 'yes',
  autoPauseDelay: 3600, // default 1h
  compName: 'CynosDB',
  compFullname: 'CynosDB'
}

module.exports = CONFIGS
