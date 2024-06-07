<template>
  <img :src="indexImg" @click="linkImg">
</template>

<script>
export default {
  name: "index",

  data() {
    return {
      indexImg:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2755875330,2937693649&fm=26&gp=0.jpg",
      indexro:"www.baidu.com"
    }
  },
  methods: {
    linkImg(){
      window.open(this.indexro,'_blank') // 在新窗口打开外链接
      window.location.href =this.indexro;  //在本页面打开外部链接
    }
  }
}
</script>
