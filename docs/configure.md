# 配置文档

## 完整配置

```yml
org: orgDemo # (可选) 用于记录组织信息，默认值为您的腾讯云账户 appid，字符串
app: appDemo # (可选) 该应用名称，字符串
stage: dev # (可选) 用于区分环境信息，默认值为 dev，字符串
component: cynosdb # (必填) 组件名称，此处为 cynosdb
name: cynosdbDemo # (必填) 实例名称

inputs:
  region: ap-shanghai # 可选 ap-shanghai, ap-nanjing
  zone: ap-shanghai-2 # 可选 ap-shanghai-2, ap-nanjing-1
  enablePublicAccess: false
  vpcConfig:
    vpcId: vpc-123
    subnetId: subnet-123
```

## 配置说明

主要参数说明

| 参数               | 必选 | 类型    | 默认值  | 描述                 |
| ------------------ | ---- | ------- | ------- | -------------------- |
| region             | 是   | string  |         | 数据库的所属地区     |
| zone               | 是   | string  |         | 数据库所在地区的区域 |
| vpcConfig.vpcId    | 是   | string  |         | VPC 的 ID            |
| vpcConfig.subnetId | 是   | string  |         | Subnet 的 ID         |
| enablePublicAccess | 否   | boolean | `false` | 是否开启外网访问     |

> Serverless Cynosdb 当前支持可用区为：`ap-shanghai-2`, `ap-nanjing-1`
