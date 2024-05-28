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
    },

    gotdasbchain() {
      this.$router.push('/AllChain');
    }


  }

}
</script>