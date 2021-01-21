# 配置文档

## 完整配置

```yml
app: appDemo # (可选) 该应用名称，字符串
stage: dev # (可选) 用于区分环境信息，默认值为 dev，字符串
component: cynosdb # (必填) 组件名称，此处为 cynosdb
name: cynosdbDemo # (必填) 实例名称

inputs:
  region: ap-shanghai # 可选 ap-guangzhou, ap-shanghai, ap-nanjing
  zone: ap-shanghai-2 # 可选 ap-guangzhou-4, ap-shanghai-2, ap-beijing-3, ap-nanjing-1
  enablePublicAccess: false
  vpcConfig:
    vpcId: vpc-123
    subnetId: subnet-123
  # 如果只创建 serverless 版本，一下两个参数可忽略
  dbMode: SERVERLESS
  payMode: 0
```

## 配置说明

主要参数说明

| 参数               | 必选   | 类型    | 默认值       | 描述                 |
| ------------------ | ------ | ------- | ------------ | -------------------- |
| region             | 是     | string  |              | 数据库的所属地区     |
| zone               | 是     | string  |              | 数据库所在地区的区域 |
| vpcConfig.vpcId    | 是     | string  |              | VPC 的 ID            |
| vpcConfig.subnetId | 是     | string  |              | Subnet 的 ID         |
| enablePublicAccess | 否     | boolean | `false`      | 是否开启外网访问     |
| dbMode             | 否     | string  | `SERVERLESS` | 数据库类型           |
| payMode            | number | number  | `0`          | 付费类型             |

> Serverless Cynosdb 当前支持可用区为：`ap-guangzhou-4`, `ap-shanghai-2`, `ap-beijing-3`, `ap-nanjing-1`

### dbMode 说明

```
SERVERLESS - serverless 版本
NORMAL     - 正常版本
```

### payMode 说明

只有在 `dbMode` 配置为 `NORMAL` 时，才生效

```
0         - 按量计费
1         - 包年包月，目前只支持购买一个月
```
