<template>
  <a-float-button type="primary" @click="showModal">
    <template #icon>
      <PlusCircleOutlined />
    </template>
  </a-float-button>
  <!-- 提交 -->
  <a-modal
    v-model:open="open"
    title="Insert data"
    @ok="handleOk"
    :confirm-loading="confirmLoading"
  >
    <template v-for="(item, index) in keylist" :key="index">
      <a-form-item :label="item" :name="item">
        <a-select
          v-if="item == 'f_class'"
          v-model:value="formState[item]"
          style="width: 120px"
        >
          <a-select-option value="中餐">中餐</a-select-option>
          <a-select-option value="甜点饮品">甜点饮品</a-select-option>
          <a-select-option value="蔬菜水果">蔬菜水果</a-select-option>
          <a-select-option value="西式快餐">西式快餐</a-select-option>
        </a-select>
        <a-select
          v-else-if="item == 'is_available'"
          v-model:value="formState[item]"
          style="width: 120px"
        >
          <a-select-option value="yes">yes</a-select-option>
          <a-select-option value="no">no</a-select-option>
        </a-select>
        <a-input v-else v-model:value="formState[item]" />
      </a-form-item>
    </template>
  </a-modal>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
import { PlusCircleOutlined } from "@ant-design/icons-vue";
import { notification } from "ant-design-vue";
import API from "../utils/API";
const props = defineProps({
  keylist: Array,
});
import { reactive } from "vue";
const formState = reactive({});
const confirmLoading = ref(false);
const open = ref(false);
const showModal = () => {
  open.value = true;
};
const openNotification = (desc) => {
  notification.open({
    message: "result",
    description: desc,
    onClick: () => {},
  });
};
const handleOk = (e) => {
  console.log(formState);
  formState.m_id = localStorage.getItem("m_id");
  confirmLoading.value = true;
  if (formState.f_name != undefined) {
    API({
      method: "post",
      url: "/merchant/createMeal",
      data: JSON.stringify(formState),
    }).then(() => {
      confirmLoading.value = false;
      openNotification("成功");
      open.value = false;
    });
  } else {
    API({
      method: "post",
      url: "/admin/createMerchant",
      data: JSON.stringify(formState),
    }).then(() => {
      confirmLoading.value = false;
      openNotification("成功");
      open.value = false;
    });
  }
};
</script>

<style>
</style>