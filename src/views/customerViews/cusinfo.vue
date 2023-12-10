<template>
  <div style="width: 80%; height: 80%">
    <div class="title">你好,{{ datasource.username }}用户</div>
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
    <a-input
      v-model:value="datasource.name"
      placeholder="input something"
      :disabled="flag"
    >
      <template #addonBefore>
        <text style="color: white">name</text>
      </template>
    </a-input>
    <br />
    <br />
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
    <a-input
      v-model:value="datasource.location"
      placeholder="input something"
      :disabled="flag"
    >
      <template #addonBefore>
        <text style="color: white">location</text>
      </template>
    </a-input>
    <br />
    <br />

    <div class="buttonwrapper">
      <a-button @click="changeState">{{ flag ? " 修改" : "确认" }}</a-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, h, onMounted } from "vue";
import { CustomerInfo } from "@/store/staticData/dataForCustomer";
import API from "../../utils/API";
const datasource = reactive(CustomerInfo);
onMounted(() => {
  let c_id = localStorage.getItem("c_id");
  API({
    method: "post",
    url: "/customer/getInfo",
    data: JSON.stringify({ c_id: c_id }),
  }).then((res) => {
    console.log(res.data);
    let data = res.data.dt;
    datasource.username = data.c_username;
    datasource.password = data.c_password;
    datasource.name = data.c_name;
    datasource.phonenumber = data.c_phone;
    datasource.location = data.c_adress;
  });
});
const flag = ref(true);
function changeState() {
  flag.value = !flag.value;
  if (flag.value === true) {
    console.log(datasource);
    let PostData = {
      c_id: localStorage.getItem("c_id"),
      c_username: datasource.username,
      c_password: datasource.password,
      c_name: datasource.name,
      c_phone: datasource.phonenumber,
      c_adress: datasource.location,
    };
    API({
      method: "post",
      url: "/customer/updateInfo",
      data: JSON.stringify(PostData),
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