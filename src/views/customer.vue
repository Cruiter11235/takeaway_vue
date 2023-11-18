<template>
  <a-row
    style="
      width: 100%;
      height: 100vh;
      background: linear-gradient(135deg, #4158d0, #c850c0);
    "
  >
    <a-col :span="5">
      <div class="imgcontent">
        <a-image
          style="width: 80px; border-radius: 10px"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </div>
      <a-menu
        id="dddddd"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        style="width: 98%; margin: auto"
        mode="inline"
        :items="items"
        @click="handleClick"
        theme="dark"
      ></a-menu>
    </a-col>
    <a-col
      :span="19"
      style="display: flex; justify-content: center; align-items: center"
    >
      <div
        style="
          width: 98%;
          height: 98%;
          background: ;
          border-radius: 25px;
          background: linear-gradient(
            135deg,
            #001f3f,
            #0088a9,
            #00c9a7,
            #92d5c6,
            #ebf5ee
          );
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <!-- router视图 -->
        <router-view />
      </div>
    </a-col>
  </a-row>
</template>

<script setup>
import _items from "@/utils/listforcus.js";
import { reactive, ref, watch, h } from "vue";
import Router from "@/router/router.js";
const selectedKeys = ref(["1"]);
const openKeys = ref(["sub1"]);
const items = reactive(_items);

const handleClick = (e) => {
  console.log("click", e);
  if (e.key == "1") {
    Router.push("/customer/info");
  }
};
watch(openKeys, (val) => {
  console.log("openKeys", val);
});
</script>

<style>
.imgcontent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.buttonwrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>