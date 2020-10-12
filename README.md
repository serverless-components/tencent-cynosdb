# 腾讯云 CynosDB 组件

## 简介

腾讯云 CynosDB 组件通过使用 [Serverless Framework](https://github.com/serverless/components)，基于云上 Serverless 服务，可以快速方便的创建，部署和管理腾讯云的 Cynosdb 产品。

特性介绍：

- [x] **按需付费** - 按照请求的使用量进行收费，没有请求时无需付费。
- [x] **极速部署** - 仅需几秒，创建或更新您的数据库。
- [x] **便捷协作** - 通过云端数据库的状态信息和部署日志，方便的进行多人协作开发。

## 快速开始

1. [安装](#1-安装)
2. [创建](#2-创建)
3. [配置](#3-配置)
4. [部署](#4-部署)
5. [查看状态](#5-查看状态)
6. [移除](#6-移除)

### 1. 安装

通过 npm 全局安装 最新版本的 Serverless Framework

```shell
$ npm install -g serverless
```

### 2. 创建

创建并进入一个全新目录：

```
$ mkdir tencent-cynosdb && cd tencent-cynosdb
```

### 3. 配置

在新目录下创建 `serverless.yml` 文件，在其中进行如下配置

```shell
$ touch serverless.yml
```

```yml
# serverless.yml
org: orgDemo
app: appDemo
stage: dev
component: cynosdb
name: cynosdbDemo

inputs:
  region: ap-guangzhou
  zone: ap-guangzhou-4
  vpcConfig:
    vpcId: vpc-xxx
    subnetId: subnet-xxx
```

- [更多配置](https://github.com/serverless-components/tencent-cynosdb/tree/master/docs/configure.md)

> 注：当前仅支持 `北京三区，广州四区，上海二区，南京一区` 四个地域的创建和部署，因此在填写 yaml 中的地域可用区时需要注意填写为正确的地域和对应的 VPC 子网信息。

### 4. 部署

如您的账号未 [登录](https://cloud.tencent.com/login) 或 [注册](https://cloud.tencent.com/register) 腾讯云，您可以直接通过`微信`扫描命令行中的二维码进行授权登陆和注册。

通过`sls`命令进行部署，并可以添加`--debug`参数查看部署过程中的信息

> 注：`sls`命令是`serverless`命令的缩写

```
$ sls deploy
```

### 5. 查看状态

在`serverless.yml`文件所在的目录下，通过如下命令查看部署状态：

```
$ sls info
```

### 6. 移除

通过以下命令移除部署的 DB 实例，移除后该组件会对应删除云上部署时所创建的所有相关资源。

```bash
$ sls remove
```

和部署类似，支持通过 `sls remove --debug` 命令查看移除过程中的实时日志信息，`sls`是 `serverless` 命令的缩写。

### 账号配置（可选）

当前默认支持 CLI 扫描二维码登录，如您希望配置持久的环境变量/秘钥信息，也可以本地创建 `.env` 文件

```bash
$ touch .env # 腾讯云的配置信息
```

在 `.env` 文件中配置腾讯云的 SecretId 和 SecretKey 信息并保存

如果没有腾讯云账号，可以在此 [注册新账号](https://cloud.tencent.com/register)。

如果已有腾讯云账号，可以在[API 密钥管理](https://console.cloud.tencent.com/cam/capi)中获取 `SecretId` 和`SecretKey`.

```
# .env
TENCENT_SECRET_ID=123
TENCENT_SECRET_KEY=123
```

### 更多组件

可以在 [Serverless Components](https://github.com/serverless/components) repo 中查询更多组件的信息。

## License

MIT License

Copyright (c) 2020 Tencent Cloud, Inc.
