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
      v-model:value="datasource.phonenumber"
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
import { reactive, ref, watch, h, onMounted } from "vue";
import { Deliveryinfo } from "../../store/staticData/dataForDelivery";
import API from "../../utils/API";
const datasource = reactive(Deliveryinfo);
const flag = ref(true);
onMounted(() => {
  let d_id = localStorage.getItem("d_id");
  API({
    method: "post",
    url: "/delivery/getInfo",
    data: JSON.stringify({ d_id: d_id }),
  }).then((res) => {
    console.log(res.data);
    let data = res.data.dt;
    datasource.username = data.d_username;
    datasource.password = data.d_password;
    datasource.phonenumber = data.d_phone;
  });
});
function changeState() {
  flag.value = !flag.value;
  if (flag.value === true) {
    console.log(datasource);
    let d_id = localStorage.getItem("d_id");
    API({
      method: "post",
      url: "/delivery/updateInfo",
      data: JSON.stringify({
        d_id: d_id,
        d_password: datasource.password,
        d_phone: datasource.phonenumber,
      }),
    });
  }
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