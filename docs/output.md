## 部署 output 参数介绍

| 名称             | 类型                                  | 描述                                 |
| ---------------- | ------------------------------------- | ------------------------------------ |
| clusterId        | string                                | Cynosdb 集群 ID                      |
| region           | string                                | 所属地域                             |
| zone             | string                                | 所属分区                             |
| dbMode           | string                                | 计费模式                             |
| instanceCount    | number                                | 实例个数，Serverless 模式下该值为 1  |
| minCpu           | number                                | 最小 CCU 个数                        |
| maxCpu           | number                                | 最大 CCU 个数                        |
| adminPassword    | string                                | 管理员密码，如果没配置由组件自动生成 |
| vpcConfig        | [Vpc](#Vpc)                           | 私有网络相关配置                     |
| connection       | [Connection](#Connection)             | VPC 下连接配置参数                   |
| publicConnection | [PublicConnection](#PublicConnection) | VPC 下连接配置参数                   |
| instances        | [Instance](#Instance)[]               | 集群下实例列表                       |

### Vpc

| 名称     |  类型  | 描述            |
| -------- | :----: | :-------------- |
| vpcId    | string | 私有网络 ID     |
| subnetId | string | 私有网络子网 ID |

### Connection

| 名称 |  类型  | 描述                        |
| ---- | :----: | :-------------------------- |
| ip   | string | VPC 网络下，连接数据库 IP   |
| port | string | VPC 网络下，连接数据库 端口 |

### PublicConnection

| 名称    |  类型  | 描述                       |
| ------- | :----: | :------------------------- |
| domain: | string | 公网连接数据库域名（host） |
| ip      | string | 公网连接数据库 IP          |
| port    | string | 公网连接数据库 端口        |

### Instance

| 名称   |  类型  | 描述                   |
| ------ | :----: | :--------------------- |
| id     | string | 实例 ID                |
| name   | string | 实例名称               |
| role   | string | 实例角色，`master`     |
| type   | string | 实例读写类型，`rw`     |
| status | string | 状态，正常为 `running` |
