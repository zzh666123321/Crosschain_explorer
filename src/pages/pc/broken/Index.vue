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
    <el-cascader-panel :options="options"  v-model="resource"></el-cascader-panel>
  </div>

  <div v-show="active == 0"> 请您选择目的链类型
    <el-cascader-panel :options="options" v-model="target"></el-cascader-panel>
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

  <div v-show="active == 3">
    <el-button type="primary" @click="gotback()" class="btn_s">下一步</el-button>
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

  <div v-show="active == 3">
    <el-button
        type="primary"
        @click="openFullScreen1"
        class="btn_s"
        v-loading.fullscreen.lock="fullscreenLoading">
      确认提交
    </el-button>
  </div>



  <div class="btn">
    <el-button type="primary" @click="gobackHandle()" class="btn_s">上一步</el-button>
    <el-button type="primary" @click="stepSubmitHandle()" class="btn_s">下一步</el-button>

  </div>

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

</script>
<script>


import {useRouter} from "vue-router";

export default {

  methods: {
    gotback(){
      this.$router.push('/crossTX');
    },

    openFullScreen1() {

      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 10000);

    },
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
      fullscreenLoading: false,
      input: '',
      con: [{
        value: 'zhinan',
        label: 'SafeMath',
        children: [{
          value: 'sheji',
          label: 'add',
        },{
          value: 'sheji',
          label: 'sub',
        },{
          value: 'sheji',
          label: 'mult',
        },{
          value: 'sheji',
          label: 'div',
        },{
          value: 'sheji',
          label: 'abs',
        },{
          value: 'sheji',
          label: 'mod',
        }
        ]
      },  {
        value: 'ziyuan',
        label: 'BeefKing',
        children: [{
          value: 'axure',
          label: 'Set'
        }, {
          value: 'sketch',
          label: 'Get'
        }, {
          value: 'jiaohu',
          label: 'ShowAll'
        }]
      }],


      options: [{
        value: 'chainmaker',
        label: '长安链',
        children: [{
          value: 'lianhao',
          label: '01',
          children: [{
            value: 'yizhi',
            label: '127.0.0.1:8001'
          }]
        },
          {
            value: 'lianhao',
            label: '02',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8002'
            }]
          },{
            value: 'lianhao',
            label: '03',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8003'
            }]
          },
          {
            value: 'lianhao',
            label: '04',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8004'
            }]
          },
          {
            value: 'lianhao',
            label: '05',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8005'
            }]
          },{
            value: 'lianhao',
            label: '06',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8006'
            }]
          },{
            value: 'lianhao',
            label: '07',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8007'
            }]
          },{
            value: 'lianhao',
            label: '08',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8008'
            }]
          },{
            value: 'lianhao',
            label: '09',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8009'
            }]
          },{
            value: 'lianhao',
            label: '10',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8010'
            }]
          },{
            value: 'lianhao',
            label: '11',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8011'
            }]
          },{
            value: 'lianhao',
            label: '12',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8012'
            }]
          },{
            value: 'lianhao',
            label: '13',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8013'
            }]
          },{
            value: 'lianhao',
            label: '14',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8014'
            }]
          },{
            value: 'lianhao',
            label: '15',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8015'
            }]
          },{
            value: 'lianhao',
            label: '16',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8016'
            }]
          },{
            value: 'lianhao',
            label: '17',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8017'
            }]
          },{
            value: 'lianhao',
            label: '18',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8018'
            }]
          },{
            value: 'lianhao',
            label: '19',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8019'
            }]
          },{
            value: 'lianhao',
            label: '20',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8020'
            }]
          }]
      }, {
        value: 'zujian',
        label: '以太坊',
        children: [{
          value: 'lianhao',
          label: '21',
          children: [{
            value: 'yizhi',
            label: '127.0.0.1:8021'
          }]
        },
          {
            value: 'lianhao',
            label: '22',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8022'
            }]
          },{
            value: 'lianhao',
            label: '23',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8023'
            }]
          },
          {
            value: 'lianhao',
            label: '24',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8024'
            }]
          },
          {
            value: 'lianhao',
            label: '25',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8025'
            }]
          },{
            value: 'lianhao',
            label: '26',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8026'
            }]
          },{
            value: 'lianhao',
            label: '27',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8027'
            }]
          },{
            value: 'lianhao',
            label: '28',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8028'
            }]
          },{
            value: 'lianhao',
            label: '29',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8029'
            }]
          },{
            value: 'lianhao',
            label: '30',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8030'
            }]
          },{
            value: 'lianhao',
            label: '31',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8031'
            }]
          },{
            value: 'lianhao',
            label: '32',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8032'
            }]
          },{
            value: 'lianhao',
            label: '33',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8033'
            }]
          },{
            value: 'lianhao',
            label: '34',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8034'
            }]
          },{
            value: 'lianhao',
            label: '35',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8035'
            }]
          },{
            value: 'lianhao',
            label: '36',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8036'
            }]
          },{
            value: 'lianhao',
            label: '37',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8037'
            }]
          },{
            value: 'lianhao',
            label: '38',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8038'
            }]
          },{
            value: 'lianhao',
            label: '39',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8039'
            }]
          },{
            value: 'lianhao',
            label: '40',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8040'
            }]
          }]
      }, {
        value: 'ziyuan',
        label: '海河智链',
        children: [{
          value: 'lianhao',
          label: '41',
          children: [{
            value: 'yizhi',
            label: '127.0.0.1:8041'
          }]
        },
          {
            value: 'lianhao',
            label: '42',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8042'
            }]
          },{
            value: 'lianhao',
            label: '43',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8043'
            }]
          },
          {
            value: 'lianhao',
            label: '44',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8044'
            }]
          },
          {
            value: 'lianhao',
            label: '45',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8045'
            }]
          },{
            value: 'lianhao',
            label: '46',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8046'
            }]
          },{
            value: 'lianhao',
            label: '47',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8047'
            }]
          },{
            value: 'lianhao',
            label: '48',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8048'
            }]
          },{
            value: 'lianhao',
            label: '49',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8049'
            }]
          },{
            value: 'lianhao',
            label: '50',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8050'
            }]
          },{
            value: 'lianhao',
            label: '51',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8051'
            }]
          },{
            value: 'lianhao',
            label: '52',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8052'
            }]
          },{
            value: 'lianhao',
            label: '53',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8053'
            }]
          },{
            value: 'lianhao',
            label: '54',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8054'
            }]
          },{
            value: 'lianhao',
            label: '55',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8055'
            }]
          },{
            value: 'lianhao',
            label: '56',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8056'
            }]
          },{
            value: 'lianhao',
            label: '57',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8057'
            }]
          },{
            value: 'lianhao',
            label: '58',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8058'
            }]
          },{
            value: 'lianhao',
            label: '59',
            children: [{
              value: 'yizhi',
              label: '127.0.0.1:8059'
            }]
          },{
            value: 'lianhao',
            label: '60',
            children: [{
              value: 'yizhi',
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
  padding-left: 600px;
  font-size: 20px;
}
.stepSuc:hover {
  cursor: pointer;
}

.stepErr:hover {
  cursor: not-allowed;
}

.step_success {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
</style>
