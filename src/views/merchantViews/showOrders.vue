<template>
  <!-- popwindow -->
  <a-modal
    v-model:open="open"
    title="订单详情"
    width="100%"
    wrap-class-name="full-modal"
    :footer="null"
  >
    <food-list :content="PopContent"></food-list>
  </a-modal>
  <!-- popwindow -->
  <a-table
    :columns="columns"
    :data-source="dataSource"
    bordered
    :pagination="pagination"
    size="large"
    style="width: 95%; margin: auto"
  >
    <template #bodyCell="{ column, text, record }">
      <template v-if="[].includes(column.dataIndex)">
        <div>
          <a-select
            v-if="editableData[record.key]"
            v-model:value="editableData[record.key][column.dataIndex]"
            style="width: 120px"
          >
            <a-select-option value="Waiting">Waiting</a-select-option>
            <a-select-option value="Taking">Taking</a-select-option>
          </a-select>
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <div class="editable-row-operations">
          <span v-if="editableData[record.key]">
            <a-popconfirm title="Sure to save?" @confirm="save(record.key)">
              <a>Save</a>
            </a-popconfirm>
            <a-typography-link @click="cancel(record.key)">
              cancel
            </a-typography-link>
          </span>
          <span v-else>
            <a-button @click="showModal(record.key)">查看订单内容</a-button>
          </span>
        </div>
      </template>
    </template>
  </a-table>
</template>
    <script setup>
import { cloneDeep } from "lodash-es";
import { reactive, ref } from "vue";
import { OrderColumn } from "@/store/Columns/columnForMerchant";
import FoodList from "@/components/FoodList.vue";
import { OrdersData } from "@/store/staticData/dataForMerchant";
import { OrdersDataLoader } from "../../store/DataLoaders/MerchantDataLoader";
import { onMounted } from "vue";
import API from "../../utils/API";
const open = ref(false);
const PopContent = ref({});
const showModal = (key) => {
  API({
    method: "post",
    url: "/delivery/getOrderMeals",
    data: JSON.stringify({ o_id: key }),
  }).then((res) => {
    PopContent.value = res.data.dt;
  });
  console.log(key);
  PopContent.value = { v: key };
  open.value = true;
};
const pagination = {
  defaultPageSize: 5,
  showSizeChanger: false,
};
const columns = OrderColumn;
const dataSource = ref(OrdersData);
onMounted(() => {
  let PostData = {
    m_id: localStorage.getItem("m_id"),
  };
  API({
    method: "post",
    url: "/merchant/getOrders",
    data: JSON.stringify(PostData),
  }).then((res) => {
    console.log(res.data);
    dataSource.value = OrdersDataLoader(res.data.dt);
  });
});
const editableData = reactive({});
const edit = (key) => {
  editableData[key] = cloneDeep(
    dataSource.value.filter((item) => key === item.key)[0]
  );
  console.log(editableData[key]);
};
// 保存的逻辑
const save = (key) => {
  Object.assign(
    dataSource.value.filter((item) => key === item.key)[0],
    editableData[key]
  );
  delete editableData[key];
  console.log(dataSource.value.filter((item) => key === item.key)[0]);
};
// 取消的逻辑
const cancel = (key) => {
  delete editableData[key];
};
</script>
<style lang="less" scoped>
.editable-row-operations a {
  margin-right: 8px;
}
.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>