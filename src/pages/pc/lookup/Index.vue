<template>
  <button @click="redirectToAnotherProject">确定跳转</button>
</template>

<script>
export default {
  methods: {
    redirectToAnotherProject() {
      const returnUrl = window.location.href;
      window.location.href = 'http://www.baidu.com'
    }
  }
}
</script>