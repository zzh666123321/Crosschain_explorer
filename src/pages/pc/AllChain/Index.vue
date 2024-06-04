<template>


  <el-descriptions class="margin-top" title="全部的链" :column="3" :size="size" border>
    <template slot="extra">
      <el-button type="primary" size="small">操作</el-button>
    </template>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      01
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8081
        <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      02
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8082
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      03
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8083
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      04
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8084
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      05
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8085
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      06
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8086
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>


    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      07
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8087
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      08
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8088
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      09
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8089
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      10
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8090
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      11
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8091
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      12
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8012
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      13
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8013
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      14
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8014
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      15
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8015
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      16
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8016
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      17
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8017
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      18
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8018
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      19
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8019
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      20
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      长安链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8020
      <el-button @click="gotchainmaker">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      21
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8021
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      22
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8022
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      23
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8023
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      24
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8024
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      25
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8025
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      26
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8026
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      27
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8027
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      28
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8028
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      29
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8029
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      30
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8030
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      31
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8031
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      32
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8033
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      33
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8032
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      34
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8034
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      35
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8035
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      36
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8036
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      37
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8037
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      38
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8038
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      39
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8039
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      40
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      以太坊
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8040
      <el-button @click="gotEthchain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      41
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8041
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>


    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      42
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8042
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      43
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8043
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      44
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8044
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      45
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8045
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      46
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8046
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      47
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8047
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      48
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8048
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      49
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8049
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      50
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8050
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      51
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8051
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      52
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8052
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      53
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8053
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      54
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8054
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      55
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8055
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      56
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8056
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      57
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8057
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      58
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8058
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      59
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8059
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      60
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      海河智链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      127.0.0.1 ：8060
      <el-button @click="gotH2Chain">跳转</el-button>
    </el-descriptions-item>

  </el-descriptions>



</template>

<script>
export default {
  data () {
    return {
      size: ''
    };
  },

  methods: {
    gotchainmaker() {
      this.$router.push('/ChainMakerblocks');
      // this.$router.push({path: "dafdsfas",});
      // 带查询参数，变成 /register?plan=private
      // this.$router.push({ path: '/ChainMakerblocks'})
      // this.$router.push({ path: '/ChainMakerblocks', query: { chainIP: 'ChainMaker' }})
    },

    gotEthchain() {
      this.$router.push('/Ethblocks');
    },
    gotH2Chain() {
      this.$router.push('/H2Chainblocks');
    }


  }

}
</script>