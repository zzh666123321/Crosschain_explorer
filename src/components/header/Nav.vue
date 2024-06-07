<template>
    <div class="nav">
        <router-link to="/main">
          <div> <h3>主页 </h3> </div>
        </router-link>

      <div  @click.capture="redirectToAnotherProject">   <h3> 监管  </h3></div>




        <!--<router-link to="/transactions">
            <div> 交易 </div>
        </router-link>
        <router-link to="/blocks">
            <div> 区块 </div>
        </router-link>
      <router-link to="/chains">
        <div> 跨链 </div>
      </router-link>-->
        <router-link to="/user">
          <div> <h3> 我的 </h3> </div>
        </router-link>
    </div>
</template>

<style scoped>
.header {
    line-height: 64px;
    display: flex;
    margin: 0 var(--margin-lr, 92px);
    align-items: center;
}

.nav {
    display: flex;
}

.nav a {
    color: grey;
}

.nav div {
    padding: 0 20px;
    border-bottom: solid 2px transparent;
}

.nav div:hover {
    color: black;
    font-weight: bold;
    border-bottom: solid 2px black;
}

.nav .router-link-active div {
    color: black;
    font-weight: bold;
}


h3 {
  font-size: 25px;
}


</style>
<script >
export default {
  methods: {
    redirectToAnotherProject() {
      const returnUrl = window.location.href;
      window.location.href = 'http://1.92.78.108:9080/'
    }
  }
}
</script>