<template>
  <div style="width: 80%; height: 80%">
    <div class="title">你好,外卖员{{ datasource.username }}</div>
    <br />
    <a-input-password
      v-model:value="datasource.password"
      placeholder="input something"
      :disabled="flag"
    >
      <template #addonBefore>
        <text style="color: white">password</text>
      </template>
    </a-input-password>
    <br />
    <br />
    <!-- <a-input
      v-model:value="datasource."
      placeholder="input something"
      :disabled="flag"
    >
      <template #addonBefore>
        <text style="color: white">name</text>
      </template>
    </a-input> -->
    <!-- <br />
    <br /> -->
    <a-input
      v-model="datasource.phonenumber"
      placeholder="input something"
      :disabled="flag"
    >
      <template #addonBefore>
        <text style="color: white">phone number</text>
      </template>
    </a-input>
    <br />
    <br />
    <br />
    <br />

    <div class="buttonwrapper">
      <a-button @click="changeState">{{ flag ? " 修改" : "确认" }}</a-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, h } from "vue";
import { Deliveryinfo } from "../../store/staticData/dataForDelivery";
const datasource = reactive(Deliveryinfo);
const flag = ref(true);
function changeState() {
  flag.value = !flag.value;
}
</script>

<style scoped>
.title {
  text-shadow: 0 0 2px hsl(40, 28.57%, 28.82%), 0 0 2px hsl(40, 28.57%, 28.82%),
    0 0 2px hsl(40, 28.57%, 28.82%); /*多个叠加*/
  font-size: 30px;
  color: #fff;
}
</style>