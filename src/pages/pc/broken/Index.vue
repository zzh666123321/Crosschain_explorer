<template>
  <div class="mod-sys__menu">
    <el-steps :active="active" finish-status="success" align-center>
      <el-step v-for="(item, index) of stepTitle" :key="index" :title="item" :class="stepClassObj(index)" />
    </el-steps>
    <div v-show="active == 0">请您选择选择源链和目标链</div>
    <div v-show="active == 1">请您选择想要调用的合约与函数</div>
    <div v-show="active == 2">请您选择填写函数的参数</div>
    <div v-show="active == 3">请您耐心等待跨链交易</div>

  </div>
  <div v-show="active == 0"> 请您选择源链类型
    <!-- <el-cascader-panel :options="options"  v-model="resource" ref="srcChainType" @change="changesrcChainType()"></el-cascader-panel> -->
    <el-cascader-panel :options="options"  v-model="resource" ref="srcChainType"></el-cascader-panel>
  </div>

  <div v-show="active == 0"> 请您选择目的链类型
    <!-- <el-cascader-panel :options="options" v-model="target" ref="dstChainType"  @change="changedstChainType()"></el-cascader-panel> -->
    <el-cascader-panel :options="options" v-model="target" ref="dstChainType"></el-cascader-panel>
  </div>

  <div v-show="active == 1">
    <el-cascader-panel :options="con" v-model="contract"></el-cascader-panel>
  </div>

  <div v-show="active == 2">
    <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
    </el-input>
  </div>




  <div>
    您所选择的源链是：{{ JSON.stringify(resource)}}
  </div>
  <div>
    您所选择的目的链是：{{ JSON.stringify(target)}}
  </div>
  <div>
    您所选择的合约是：{{ JSON.stringify(contract)}}
  </div>
  <div>
    您所选择的参数是：{{ JSON.stringify(input)}}
  </div>

  <div class="btn" v-show="active == 3" >
    <el-button
        type="primary"
        @click="openFullScreen1()"
        class="btn_s"
        v-loading.fullscreen.lock="fullscreenLoading">
        确认提交
    </el-button>
  </div>



  <div class="btn" v-show="active == 0">
    <el-button type="primary" @click="gobackHandle()" class="btn_s">上一步</el-button>
    <el-button type="primary" @click="stepSubmitHandle()" class="btn_s">下一步</el-button>

  </div>

  <div class="btn" v-show="active == 1">
    <el-button type="primary" @click="gobackHandle()" class="btn_s">上一步</el-button>
    <el-button type="primary" @click="stepSubmitHandle()" class="btn_s">下一步</el-button>

  </div>
  <div class="btn" v-show="active == 2">
    <el-button type="primary" @click="gobackHandle()" class="btn_s">上一步</el-button>
    <el-button type="primary" @click="stepSubmitHandle()" class="btn_s">下一步</el-button>

  </div>

  <div class="btn" v-show="active == 3">
    <el-button type="primary" @click="openFullScreen1" class="btn_s">确认提交</el-button>
    <!-- <el-button type="primary" @click="gotback()" class="btn_s">交易详情</el-button> -->

  </div>

<!--  <div class="btn" v-show="active == 3" >-->
<!--    <el-button type="primary" @click="gotback()" class="btn_s">下一步</el-button>-->
<!--  </div>-->



</template>

<script setup>
import { ref, reactive, toRefs, computed } from "vue";
import { useRouter} from 'vue-router'

const router = useRouter()
const active = ref(0);

const resource = ref('')
const target = ref('')
const contract = ref('')
const stepData = reactive({
  stepSuc: [0],
  stepTitle: ["第一步", "第二步","第三步"]
});
let stepClassObj = computed((val) => {
  return (val) => {
    return {
      stepSuc: stepData.stepSuc.includes(val),
      stepErr: !stepData.stepSuc.includes(val)
    };
  };
});
const { stepTitle, stepSuc } = toRefs(stepData);
const stepSubmitHandle = () => {
  console.log(resource.value)
  if (++active.value > 3) {
    // console.log(this.value)
    //router.push('/crossend');
  }

};
const gobackHandle = () => {
  if (--active.value <0) active.value = 0;
  // ++active.value;
};

const openFullScreen1 = () => {

  console.log(resource.value[0])
  console.log(target.value[0])
  router.push({path:'/crossTX', query: {srcChainType: String(resource.value[0]),dstChainType: String(target.value[0])  }});
  
};



</script>
<script>


import {useRouter} from "vue-router";
import {getCrossTx} from "@/api/block";




export default {

  methods: {
    gotback(){
      this.$router.push('/crossTX');
    },

    // openFullScreen1() {
    //   console.log(this.$resource.value[0])
    //   console.log(target.value[0])
    //   this.$router.push({path:'/crossTX', query: {srcChainType:  this.form.srcChainType,dstChainType:  this.form.dstChainType }});
    // },

  //   changesrcChainType(){
	// 	this.$nextTick(()=>{
	// 		this.form.srcChainType = this.$refs['srcChainType'].label
  //     console.log("===================")
  //     console.log(this.$refs['srcChainType'])
	// 	})
  //   console.log(this.form.srcChainType)
	// },

  // changedstChainType(){
	// 	this.$nextTick(()=>{
	// 		this.form.dstChainType = this.$refs['dstChainType'].label
	// 	})
	// },
      // this.fullscreenLoading = true;
      // setTimeout(() => {
      //   this.fullscreenLoading = false;
      // }, 10000);

    // },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });

      setTimeout(() => {
        loading.close();
      }, 10000);


    }
  },

  data() {
    return {
      form:{
        srcChainType: "",
        dstChainType: ""
      },
      fullscreenLoading: false,
      input: '',
      con: [{
        value: 'SafeMath',
        label: 'SafeMath',
        children: [{
          value: 'add',
          label: 'add',
        },{
          value: 'sub',
          label: 'sub',
        },{
          value: 'mult',
          label: 'mult',
        },{
          value: 'div',
          label: 'div',
        },{
          value: 'abs',
          label: 'abs',
        },{
          value: 'mod',
          label: 'mod',
        }
        ]
      },  {
        value: 'BeefKing',
        label: 'BeefKing',
        children: [{
          value: 'set',
          label: 'Set'
        }, {
          value: 'Get',
          label: 'Get'
        }, {
          value: 'ShowAll',
          label: 'ShowAll'
        }]
      }],


      options: [{
        value: 'chainmaker',
        label: '长安链',
        children: [{
          value: '01',
          label: '01',
          children: [{
            value: '127.0.0.1:8001',
            label: '127.0.0.1:8001'
          }]
        },
          {
            value: '02',
            label: '02',
            children: [{
              value: '127.0.0.1:8002',
              label: '127.0.0.1:8002'
            }]
          },{
            value: '03',
            label: '03',
            children: [{
              value: '127.0.0.1:8003',
              label: '127.0.0.1:8003'
            }]
          },
          {
            value: '04',
            label: '04',
            children: [{
              value: '127.0.0.1:8004',
              label: '127.0.0.1:8004'
            }]
          },
          {
            value: '05',
            label: '05',
            children: [{
              value: '127.0.0.1:8005',
              label: '127.0.0.1:8005'
            }]
          },{
            value: '06',
            label: '06',
            children: [{
              value: '127.0.0.1:8006',
              label: '127.0.0.1:8006'
            }]
          },{
            value: '07',
            label: '07',
            children: [{
              value: '127.0.0.1:8007',
              label: '127.0.0.1:8007'
            }]
          },{
            value: '08',
            label: '08',
            children: [{
              value: '127.0.0.1:8008',
              label: '127.0.0.1:8008'
            }]
          },{
            value: '09',
            label: '09',
            children: [{
              value: '127.0.0.1:8009',
              label: '127.0.0.1:8009'
            }]
          },{
            value: '10',
            label: '10',
            children: [{
              value: '127.0.0.1:8010',
              label: '127.0.0.1:8010'
            }]
          },{
            value: '11',
            label: '11',
            children: [{
              value: '127.0.0.1:8011',
              label: '127.0.0.1:8011'
            }]
          },{
            value: '12',
            label: '12',
            children: [{
              value: '127.0.0.1:8012',
              label: '127.0.0.1:8012'
            }]
          },{
            value: '13',
            label: '13',
            children: [{
              value: '127.0.0.1:8013',
              label: '127.0.0.1:8013'
            }]
          },{
            value: '14',
            label: '14',
            children: [{
              value: '127.0.0.1:8014',
              label: '127.0.0.1:8014'
            }]
          },{
            value: '15',
            label: '15',
            children: [{
              value: '127.0.0.1:8015',
              label: '127.0.0.1:8015'
            }]
          },{
            value: '16',
            label: '16',
            children: [{
              value: '127.0.0.1:8016',
              label: '127.0.0.1:8016'
            }]
          },{
            value: '17',
            label: '17',
            children: [{
              value: '127.0.0.1:8017',
              label: '127.0.0.1:8017'
            }]
          },{
            value: '18',
            label: '18',
            children: [{
              value: '127.0.0.1:8018',
              label: '127.0.0.1:8018'
            }]
          },{
            value: '19',
            label: '19',
            children: [{
              value: '127.0.0.1:8019',
              label: '127.0.0.1:8019'
            }]
          },{
            value: '20',
            label: '20',
            children: [{
              value: '127.0.0.1:8020',
              label: '127.0.0.1:8020'
            }]
          }]
      }, {
        value: 'eth',
        label: '以太坊',
        children: [{
          value: '21',
          label: '21',
          children: [{
            value: '127.0.0.1:8021',
            label: '127.0.0.1:8021'
          }]
        },
          {
            value: '22',
            label: '22',
            children: [{
              value: '127.0.0.1:8022',
              label: '127.0.0.1:8022'
            }]
          },{
            value: '23',
            label: '23',
            children: [{
              value: '127.0.0.1:8023',
              label: '127.0.0.1:8023'
            }]
          },
          {
            value: '24',
            label: '24',
            children: [{
              value: '127.0.0.1:8024',
              label: '127.0.0.1:8024'
            }]
          },
          {
            value: '25',
            label: '25',
            children: [{
              value: '127.0.0.1:8025',
              label: '127.0.0.1:8025'
            }]
          },{
            value: '26',
            label: '26',
            children: [{
              value: '127.0.0.1:8026',
              label: '127.0.0.1:8026'
            }]
          },{
            value: '27',
            label: '27',
            children: [{
              value: '127.0.0.1:8027',
              label: '127.0.0.1:8027'
            }]
          },{
            value: '28',
            label: '28',
            children: [{
              value: '127.0.0.1:8028',
              label: '127.0.0.1:8028'
            }]
          },{
            value: '29',
            label: '29',
            children: [{
              value: '127.0.0.1:8029',
              label: '127.0.0.1:8029'
            }]
          },{
            value: '30',
            label: '30',
            children: [{
              value: '127.0.0.1:8030',
              label: '127.0.0.1:8030'
            }]
          },{
            value: '31',
            label: '31',
            children: [{
              value: '127.0.0.1:8031',
              label: '127.0.0.1:8031'
            }]
          },{
            value: '32',
            label: '32',
            children: [{
              value: '127.0.0.1:8032',
              label: '127.0.0.1:8032'
            }]
          },{
            value: '33',
            label: '33',
            children: [{
              value: '127.0.0.1:8033',
              label: '127.0.0.1:8033'
            }]
          },{
            value: '34',
            label: '34',
            children: [{
              value: '127.0.0.1:8034',
              label: '127.0.0.1:8034'
            }]
          },{
            value: '35',
            label: '35',
            children: [{
              value: '127.0.0.1:8035',
              label: '127.0.0.1:8035'
            }]
          },{
            value: '36',
            label: '36',
            children: [{
              value: '127.0.0.1:8036',
              label: '127.0.0.1:8036'
            }]
          },{
            value: '37',
            label: '37',
            children: [{
              value: '127.0.0.1:8037',
              label: '127.0.0.1:8037'
            }]
          },{
            value: '38',
            label: '38',
            children: [{
              value: '127.0.0.1:8038',
              label: '127.0.0.1:8038'
            }]
          },{
            value: '39',
            label: '39',
            children: [{
              value: '127.0.0.1:8039',
              label: '127.0.0.1:8039'
            }]
          },{
            value: '40',
            label: '40',
            children: [{
              value: '127.0.0.1:8040',
              label: '127.0.0.1:8040'
            }]
          }]
      }, {
        value: 'h2chain',
        label: '海河智链',
        children: [{
          value: '41',
          label: '41',
          children: [{
            value: '127.0.0.1:8041',
            label: '127.0.0.1:8041'
          }]
        },
          {
            value: '42',
            label: '42',
            children: [{
              value: '127.0.0.1:8042',
              label: '127.0.0.1:8042'
            }]
          },{
            value: '43',
            label: '43',
            children: [{
              value: '127.0.0.1:8043',
              label: '127.0.0.1:8043'
            }]
          },
          {
            value: '44',
            label: '44',
            children: [{
              value: '127.0.0.1:8044',
              label: '127.0.0.1:8044'
            }]
          },
          {
            value: '45',
            label: '45',
            children: [{
              value: '127.0.0.1:8045',
              label: '127.0.0.1:8045'
            }]
          },{
            value: '46',
            label: '46',
            children: [{
              value: '127.0.0.1:8046',
              label: '127.0.0.1:8046'
            }]
          },{
            value: '47',
            label: '47',
            children: [{
              value: '127.0.0.1:8047',
              label: '127.0.0.1:8047'
            }]
          },{
            value: '48',
            label: '48',
            children: [{
              value: '127.0.0.1:8048',
              label: '127.0.0.1:8048'
            }]
          },{
            value: '49',
            label: '49',
            children: [{
              value: '127.0.0.1:8049',
              label: '127.0.0.1:8049'
            }]
          },{
            value: '50',
            label: '50',
            children: [{
              value: '127.0.0.1:8050',
              label: '127.0.0.1:8050'
            }]
          },{
            value: '51',
            label: '51',
            children: [{
              value: '127.0.0.1:8051',
              label: '127.0.0.1:8051'
            }]
          },{
            value: '52',
            label: '52',
            children: [{
              value: '127.0.0.1:8052',
              label: '127.0.0.1:8052'
            }]
          },{
            value: '53',
            label: '53',
            children: [{
              value: '127.0.0.1:8053',
              label: '127.0.0.1:8053'
            }]
          },{
            value: '54',
            label: '54',
            children: [{
              value: '127.0.0.1:8054',
              label: '127.0.0.1:8054'
            }]
          },{
            value: '55',
            label: '55',
            children: [{
              value: '127.0.0.1:8055',
              label: '127.0.0.1:8055'
            }]
          },{
            value: '56',
            label: '56',
            children: [{
              value: '127.0.0.1:8056',
              label: '127.0.0.1:8056'
            }]
          },{
            value: '57',
            label: '57',
            children: [{
              value: '127.0.0.1:8057',
              label: '127.0.0.1:8057'
            }]
          },{
            value: '58',
            label: '58',
            children: [{
              value: '127.0.0.1:8058',
              label: '127.0.0.1:8058'
            }]
          },{
            value: '59',
            label: '59',
            children: [{
              value: '127.0.0.1:8059',
              label: '127.0.0.1:8059'
            }]
          },{
            value: '60',
            label: '60',
            children: [{
              value: '127.0.0.1:8060',
              label: '127.0.0.1:8060'
            }]
          }]
      }]
    };
  }
};
</script>

<style>

.btn_s{
  font-size: 30px;
  height:50px;
}

.btn{
  position: fixed;
  bottom:50px;
  padding-left: 450px;
  font-size: 20px;
}
.stepSuc:hover {
  cursor: pointer;
  font-size: 30px;
}

.stepErr:hover {
  cursor: not-allowed;
  font-size: 30px;
}

.step_success {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
}
*{
  font-size: 25px !important;
}
</style>
