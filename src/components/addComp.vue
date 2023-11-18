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
        <a-input v-model:value="formState[item]" />
      </a-form-item>
    </template>
  </a-modal>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
import { PlusCircleOutlined } from "@ant-design/icons-vue";
import { notification } from "ant-design-vue";
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
  confirmLoading.value = true;
  setTimeout(() => {
    confirmLoading.value = true;
    open.value = false;
    //插入数据操作
    openNotification("成功");
  }, 1000);
};
</script>

<style>
</style>