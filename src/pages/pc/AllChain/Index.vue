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
      192.168.0.2:8088
        <el-button @click="gotchainmaker('192.168.0.2:8088')">跳转</el-button>
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
      192.168.0.12:1000
        <el-button @click="gotchainmaker('192.168.0.12:1000')">跳转</el-button>
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
      192.168.0.218:1000
        <el-button @click="gotchainmaker('192.168.0.218:1000')">跳转</el-button>
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
      192.168.0.33:1000
        <el-button @click="gotchainmaker('192.168.0.33:1000')">跳转</el-button>
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
      192.168.0.246:1000
        <el-button @click="gotchainmaker('192.168.0.246:1000')">跳转</el-button>
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
      192.168.0.69:1000
        <el-button @click="gotchainmaker('192.168.0.69:1000')">跳转</el-button>
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
      192.168.0.87:1000
        <el-button @click="gotchainmaker('192.168.0.87:1000')">跳转</el-button>
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
      192.168.0.74:1000
        <el-button @click="gotchainmaker('192.168.0.74:1000')">跳转</el-button>
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
      192.168.0.179:1000
        <el-button @click="gotchainmaker('192.168.0.179:1000')">跳转</el-button>
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
      192.168.0.166:1000
        <el-button @click="gotchainmaker('192.168.0.166:1000')">跳转</el-button>
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
      192.168.0.146:1000
        <el-button @click="gotchainmaker('192.168.0.146:1000')">跳转</el-button>
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
      192.168.0.128:1000
        <el-button @click="gotchainmaker('192.168.0.128:1000')">跳转</el-button>
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
      192.168.0.192:1000
        <el-button @click="gotchainmaker('192.168.0.192:1000')">跳转</el-button>
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
      192.168.0.73:1000
        <el-button @click="gotchainmaker('192.168.0.73:1000')">跳转</el-button>
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
      192.168.0.115:1000
        <el-button @click="gotchainmaker('192.168.0.115:1000')">跳转</el-button>
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
      192.168.0.173:1000
        <el-button @click="gotchainmaker('192.168.0.173:1000')">跳转</el-button>
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
      192.168.0.93:1000
        <el-button @click="gotchainmaker('192.168.0.93:1000')">跳转</el-button>
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
      192.168.0.32:1000
        <el-button @click="gotchainmaker('192.168.0.32:1000')">跳转</el-button>
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
      192.168.0.34:1000
        <el-button @click="gotchainmaker('192.168.0.34:1000')">跳转</el-button>
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
      192.168.0.119:1000
      <el-button @click="gotchainmaker('192.168.0.119:1000')">跳转</el-button>
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
      192.168.0.2:8086
        <el-button @click="gotEthchain('192.168.0.2:8086')">跳转</el-button>
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
      192.168.0.12:10012
        <el-button @click="gotEthchain('192.168.0.12:10012')">跳转</el-button>
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
      192.168.0.218:10012
        <el-button @click="gotEthchain('192.168.0.218:10012')">跳转</el-button>
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
      192.168.0.33:10012
        <el-button @click="gotEthchain('192.168.0.33:10012')">跳转</el-button>
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
      192.168.0.246:10012
        <el-button @click="gotEthchain('192.168.0.246:10012')">跳转</el-button>
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
      192.168.0.69:10012
        <el-button @click="gotEthchain('192.168.0.69:10012')">跳转</el-button>
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
      192.168.0.87:10012
        <el-button @click="gotEthchain('192.168.0.87:10012')">跳转</el-button>
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
      192.168.0.74:10012
        <el-button @click="gotEthchain('192.168.0.74:10012')">跳转</el-button>
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
      192.168.0.179:10012
        <el-button @click="gotEthchain('192.168.0.179:10012')">跳转</el-button>
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
      192.168.0.166:10012
        <el-button @click="gotEthchain('192.168.0.166:10012')">跳转</el-button>
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
      192.168.0.146:10012
        <el-button @click="gotEthchain('192.168.0.146:10012')">跳转</el-button>
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
      192.168.0.128:10012
        <el-button @click="gotEthchain('192.168.0.128:10012')">跳转</el-button>
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
      192.168.0.192:10012
        <el-button @click="gotEthchain('192.168.0.192:10012')">跳转</el-button>
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
      192.168.0.73:10012
        <el-button @click="gotEthchain('192.168.0.73:10012')">跳转</el-button>
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
      192.168.0.115:10012
        <el-button @click="gotEthchain('192.168.0.115:10012')">跳转</el-button>
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
      192.168.0.173:10012
        <el-button @click="gotEthchain('192.168.0.173:10012')">跳转</el-button>
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
      192.168.0.93:10012
        <el-button @click="gotEthchain('192.168.0.93:10012')">跳转</el-button>
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
      192.168.0.32:10012
        <el-button @click="gotEthchain('192.168.0.32:10012')">跳转</el-button>
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
      192.168.0.34:10012
        <el-button @click="gotEthchain('192.168.0.34:10012')">跳转</el-button>
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
      192.168.0.119:10012
        <el-button @click="gotEthchain('192.168.0.119:10012')">跳转</el-button>
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
      192.168.0.2:8087
        <el-button @click="gotH2Chain('192.168.0.2:8087')">跳转</el-button>
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
      192.168.0.12:8000
        <el-button @click="gotH2Chain('192.168.0.12:8000')">跳转</el-button>
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
      192.168.0.218:8000
        <el-button @click="gotH2Chain('192.168.0.218:8000')">跳转</el-button>
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
      192.168.0.33:8000
        <el-button @click="gotH2Chain('192.168.0.33:8000')">跳转</el-button>
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
      192.168.0.246:8000
        <el-button @click="gotH2Chain('192.168.0.246:8000')">跳转</el-button>
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
      192.168.0.69:8000
        <el-button @click="gotH2Chain('192.168.0.69:8000')">跳转</el-button>
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
      192.168.0.87:8000
        <el-button @click="gotH2Chain('192.168.0.87:8000')">跳转</el-button>
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
      192.168.0.74:8000
        <el-button @click="gotH2Chain('192.168.0.74:8000')">跳转</el-button>
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
      192.168.0.179:8000
        <el-button @click="gotH2Chain('192.168.0.179:8000')">跳转</el-button>
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
      192.168.0.166:8000
        <el-button @click="gotH2Chain('192.168.0.166:8000')">跳转</el-button>
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
      192.168.0.146:8000
        <el-button @click="gotH2Chain('192.168.0.146:8000')">跳转</el-button>
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
      192.168.0.128:8000
        <el-button @click="gotH2Chain('192.168.0.128:8000')">跳转</el-button>
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
      192.168.0.192:8000
        <el-button @click="gotH2Chain('192.168.0.192:8000')">跳转</el-button>
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
      192.168.0.73:8000
        <el-button @click="gotH2Chain('192.168.0.73:8000')">跳转</el-button>
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
      192.168.0.115:8000
        <el-button @click="gotH2Chain('192.168.0.115:8000')">跳转</el-button>
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
      192.168.0.173:8000
        <el-button @click="gotH2Chain('192.168.0.173:8000')">跳转</el-button>
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
      192.168.0.93:8000
        <el-button @click="gotH2Chain('192.168.0.93:8000')">跳转</el-button>
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
      192.168.0.32:8000
        <el-button @click="gotH2Chain('192.168.0.32:8000')">跳转</el-button>
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
      192.168.0.34:8000
        <el-button @click="gotH2Chain('192.168.0.34:8000')">跳转</el-button>
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
      192.168.0.119:8000
        <el-button @click="gotH2Chain('192.168.0.119:8000')">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      61
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.2:8089
      <el-button @click="gotBTchain('192.168.0.2:8089')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      62
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.12:1000
      <el-button @click="gotBTchain('192.168.0.12:1000')">跳转</el-button>
    </el-descriptions-item>


    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      63
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.218:1000
      <el-button @click="gotBTchain('192.168.0.218:1000')">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      64
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.33:1000
      <el-button @click="gotBTchain('192.168.0.33:1000')">跳转</el-button>
    </el-descriptions-item>



    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      65
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.246:1000
      <el-button @click="gotBTchain('192.168.0.246:1000')">跳转</el-button>
    </el-descriptions-item>


    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      66
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.69:1000
      <el-button @click="gotBTchain('192.168.0.69:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      67
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.87:1000
      <el-button @click="gotBTchain('192.168.0.87:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      68
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.74:1000
      <el-button @click="gotBTchain('192.168.0.74:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      69
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.179:1000
      <el-button @click="gotBTchain('192.168.0.179:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      70
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.166:1000
      <el-button @click="gotBTchain('192.168.0.166:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      71
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.146:1000
      <el-button @click="gotBTchain('192.168.0.146:1000')">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      72
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.128:1000
      <el-button @click="gotBTchain('192.168.0.128:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      73
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.192:1000
      <el-button @click="gotBTchain('192.168.0.192:1000')">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      74
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.73:1000
      <el-button @click="gotBTchain('192.168.0.73:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      75
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.115:1000
      <el-button @click="gotBTchain('192.168.0.115:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      76
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.173:1000
      <el-button @click="gotBTchain('192.168.0.173:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      77
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.93:1000
      <el-button @click="gotBTchain('192.168.0.93:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      78
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.32:1000
      <el-button @click="gotBTchain('192.168.0.32:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      79
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.34:1000
      <el-button @click="gotBTchain('192.168.0.34:1000')">跳转</el-button>
    </el-descriptions-item>



    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      80
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      布比链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.119:1000
      <el-button @click="gotBTchain('192.168.0.119:1000')">跳转</el-button>
    </el-descriptions-item>


    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      81
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.2:8090
      <el-button @click="gotfabchain('192.168.0.2:8090')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      82
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.12:1000
      <el-button @click="gotfabchain('192.168.0.12:1000')">跳转</el-button>
    </el-descriptions-item>


    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      83
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.218:1000
      <el-button @click="gotfabchain('192.168.0.218:1000')">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      84
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.33:1000
      <el-button @click="gotfabchain('192.168.0.33:1000')">跳转</el-button>
    </el-descriptions-item>



    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      85
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.246:1000
      <el-button @click="gotfabchain('192.168.0.246:1000')">跳转</el-button>
    </el-descriptions-item>


    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      86
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.69:1000
      <el-button @click="gotfabchain('192.168.0.69:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      87
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.87:1000
      <el-button @click="gotfabchain('192.168.0.87:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      88
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.74:1000
      <el-button @click="gotfabchain('192.168.0.74:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      89
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.179:1000
      <el-button @click="gotfabchain('192.168.0.179:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      90
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.166:1000
      <el-button @click="gotfabchain('192.168.0.166:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      91
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.146:1000
      <el-button @click="gotfabchain('192.168.0.146:1000')">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      92
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.128:1000
      <el-button @click="gotfabchain('192.168.0.128:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      93
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.192:1000
      <el-button @click="gotfabchain('192.168.0.192:1000')">跳转</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      94
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.73:1000
      <el-button @click="gotfabchain('192.168.0.73:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      95
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.115:1000
      <el-button @click="gotfabchain('192.168.0.115:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      96
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.173:1000
      <el-button @click="gotfabchain('192.168.0.173:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      97
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.93:1000
      <el-button @click="gotfabchain('192.168.0.93:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      98
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.32:1000
      <el-button @click="gotfabchain('192.168.0.32:1000')">跳转</el-button>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      99
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.34:1000
      <el-button @click="gotfabchain('192.168.0.34:1000')">跳转</el-button>
    </el-descriptions-item>



    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        链号
      </template>
      100
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        链的种类
      </template>
      fabric链
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        IP号与端口号
      </template>
      192.168.0.119:1000
      <el-button @click="gotfabchain('192.168.0.119:1000')">跳转</el-button>
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
    gotchainmaker(chainIP) {

      this.$router.push({path:'/ChainMakerblocks',query: {chainIP: chainIP}});
      console.log(chainIP)
      // this.$router.push('/ChainMakerblocks');
      // this.$router.push({path: "dafdsfas",});
      // 带查询参数，变成 /register?plan=private
      // this.$router.push({ path: '/ChainMakerblocks'})
      // this.$router.push({ path: '/ChainMakerblocks', query: { chainIP: 'ChainMaker' }})
    },
    gotBTchain(chainIP) {
      this.$router.push({path:'/BTblocks',query: {chainIP: chainIP}});
      console.log(chainIP)
    },
    gotfabchain(chainIP) {
      this.$router.push({path:'/fabblocks',query: {chainIP: chainIP}});
      console.log(chainIP)
    },


    gotEthchain(chainIP) {
      this.$router.push({path:'/Ethblocks',query: {chainIP: chainIP}});
      console.log(chainIP)
    },
    gotH2Chain(chainIP) {
      this.$router.push( {path:'/H2Chainblocks',query: {chainIP: chainIP}});
      console.log(chainIP)
    }


  }

}
</script>



<style >

.el-descriptions__body .el-descriptions__table .el-descriptions__cell {
  font-size: 28px;
}

h3 {
  font-size: 25px;
}

</style>