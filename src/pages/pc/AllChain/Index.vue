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
      192.168.0.193:1000
        <el-button @click="gotchainmaker('192.168.0.193:1000')">跳转</el-button>
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
      192.168.0.185:1000
        <el-button @click="gotchainmaker('192.168.0.185:1000')">跳转</el-button>
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
      192.168.0.234:1000
        <el-button @click="gotchainmaker('192.168.0.234:1000')">跳转</el-button>
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
      192.168.0.14:1000
        <el-button @click="gotchainmaker('192.168.0.14:1000')">跳转</el-button>
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
      192.168.0.211:1000
        <el-button @click="gotchainmaker('192.168.0.211:1000')">跳转</el-button>
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
      192.168.0.194:1000
        <el-button @click="gotchainmaker('192.168.0.194:1000')">跳转</el-button>
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
      192.168.0.206:1000
        <el-button @click="gotchainmaker('192.168.0.206:1000')">跳转</el-button>
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
      192.168.0.118:1000
        <el-button @click="gotchainmaker('192.168.0.118:1000')">跳转</el-button>
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
      192.168.0.148:1000
        <el-button @click="gotchainmaker('192.168.0.148:1000')">跳转</el-button>
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
      192.168.0.32:1000
        <el-button @click="gotchainmaker('192.168.0.32:1000')">跳转</el-button>
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
      192.168.0.165:1000
        <el-button @click="gotchainmaker('192.168.0.165:1000')">跳转</el-button>
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
      192.168.0.112:1000
        <el-button @click="gotchainmaker('192.168.0.112:1000')">跳转</el-button>
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
      192.168.0.37:1000
        <el-button @click="gotchainmaker('192.168.0.37:1000')">跳转</el-button>
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
      192.168.0.228:1000
        <el-button @click="gotchainmaker('192.168.0.228:1000')">跳转</el-button>
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
      192.168.0.59:1000
        <el-button @click="gotchainmaker('192.168.0.59:1000')">跳转</el-button>
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
      192.168.0.24:1000
        <el-button @click="gotchainmaker('192.168.0.24:1000')">跳转</el-button>
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
      192.168.0.9:1000
        <el-button @click="gotchainmaker('192.168.0.9:1000')">跳转</el-button>
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
      192.168.0.215:1000
        <el-button @click="gotchainmaker('192.168.0.215:1000')">跳转</el-button>
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
      192.168.0.240:1000
        <el-button @click="gotchainmaker('192.168.0.240:1000')">跳转</el-button>
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
      192.168.0.149:1000
      <el-button @click="gotchainmaker('192.168.0.149:1000')">跳转</el-button>
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
      192.168.0.193:10012
        <el-button @click="gotEthchain('192.168.0.193:10012')">跳转</el-button>
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
      192.168.0.185:10012
        <el-button @click="gotEthchain('192.168.0.185:10012')">跳转</el-button>
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
      192.168.0.234:10012
        <el-button @click="gotEthchain('192.168.0.234:10012')">跳转</el-button>
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
      192.168.0.14:10012
        <el-button @click="gotEthchain('192.168.0.14:10012')">跳转</el-button>
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
      192.168.0.211:10012
        <el-button @click="gotEthchain('192.168.0.211:10012')">跳转</el-button>
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
      192.168.0.194:10012
        <el-button @click="gotEthchain('192.168.0.194:10012')">跳转</el-button>
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
      192.168.0.206:10012
        <el-button @click="gotEthchain('192.168.0.206:10012')">跳转</el-button>
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
      192.168.0.118:10012
        <el-button @click="gotEthchain('192.168.0.118:10012')">跳转</el-button>
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
      192.168.0.148:10012
        <el-button @click="gotEthchain('192.168.0.148:10012')">跳转</el-button>
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
      192.168.0.32:10012
        <el-button @click="gotEthchain('192.168.0.32:10012')">跳转</el-button>
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
      192.168.0.165:10012
        <el-button @click="gotEthchain('192.168.0.165:10012')">跳转</el-button>
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
      192.168.0.112:10012
        <el-button @click="gotEthchain('192.168.0.112:10012')">跳转</el-button>
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
      192.168.0.37:10012
        <el-button @click="gotEthchain('192.168.0.37:10012')">跳转</el-button>
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
      192.168.0.228:10012
        <el-button @click="gotEthchain('192.168.0.228:10012')">跳转</el-button>
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
      192.168.0.59:10012
        <el-button @click="gotEthchain('192.168.0.59:10012')">跳转</el-button>
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
      192.168.0.24:10012
        <el-button @click="gotEthchain('192.168.0.24:10012')">跳转</el-button>
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
      192.168.0.9:10012
        <el-button @click="gotEthchain('192.168.0.9:10012')">跳转</el-button>
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
      192.168.0.215:10012
        <el-button @click="gotEthchain('192.168.0.215:10012')">跳转</el-button>
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
      192.168.0.240:10012
        <el-button @click="gotEthchain('192.168.0.240:10012')">跳转</el-button>
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
      192.168.0.149:10012
        <el-button @click="gotEthchain('192.168.0.149:10012')">跳转</el-button>
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
      192.168.0.193:8000
        <el-button @click="gotH2Chain('192.168.0.193:8000')">跳转</el-button>
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
      192.168.0.185:8000
        <el-button @click="gotH2Chain('192.168.0.185:8000')">跳转</el-button>
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
      192.168.0.234:8000
        <el-button @click="gotH2Chain('192.168.0.234:8000')">跳转</el-button>
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
      192.168.0.14:8000
        <el-button @click="gotH2Chain('192.168.0.14:8000')">跳转</el-button>
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
      192.168.0.211:8000
        <el-button @click="gotH2Chain('192.168.0.211:8000')">跳转</el-button>
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
      192.168.0.194:8000
        <el-button @click="gotH2Chain('192.168.0.194:8000')">跳转</el-button>
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
      192.168.0.206:8000
        <el-button @click="gotH2Chain('192.168.0.206:8000')">跳转</el-button>
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
      192.168.0.118:8000
        <el-button @click="gotH2Chain('192.168.0.118:8000')">跳转</el-button>
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
      192.168.0.148:8000
        <el-button @click="gotH2Chain('192.168.0.148:8000')">跳转</el-button>
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
      192.168.0.32:8000
        <el-button @click="gotH2Chain('192.168.0.32:8000')">跳转</el-button>
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
      192.168.0.165:8000
        <el-button @click="gotH2Chain('192.168.0.165:8000')">跳转</el-button>
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
      192.168.0.112:8000
        <el-button @click="gotH2Chain('192.168.0.112:8000')">跳转</el-button>
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
      192.168.0.37:8000
        <el-button @click="gotH2Chain('192.168.0.37:8000')">跳转</el-button>
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
      192.168.0.228:8000
        <el-button @click="gotH2Chain('192.168.0.228:8000')">跳转</el-button>
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
      192.168.0.59:8000
        <el-button @click="gotH2Chain('192.168.0.59:8000')">跳转</el-button>
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
      192.168.0.24:8000
        <el-button @click="gotH2Chain('192.168.0.24:8000')">跳转</el-button>
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
      192.168.0.9:8000
        <el-button @click="gotH2Chain('192.168.0.9:8000')">跳转</el-button>
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
      192.168.0.215:8000
        <el-button @click="gotH2Chain('192.168.0.215:8000')">跳转</el-button>
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
      192.168.0.240:8000
        <el-button @click="gotH2Chain('192.168.0.240:8000')">跳转</el-button>
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
      192.168.0.149:8000
        <el-button @click="gotH2Chain('192.168.0.149:8000')">跳转</el-button>
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