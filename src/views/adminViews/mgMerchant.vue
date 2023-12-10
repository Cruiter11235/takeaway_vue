<template>
  <addComp
    :keylist="['m_name', 'm_username', 'm_password', 'm_phone', 'm_address']"
  ></addComp>
  <a-table
    :columns="columns"
    :data-source="dataSource"
    bordered
    :pagination="pagination"
    size="large"
    style="width: 95%; margin: auto"
  >
    <template #bodyCell="{ column, text, record }">
      <template
        v-if="
          ['password', 'location', 'phone', 'name'].includes(column.dataIndex)
        "
      >
        <div>
          <a-input
            v-if="editableData[record.key]"
            v-model:value="editableData[record.key][column.dataIndex]"
            style="margin: -5px 0"
          />
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
            <a-typography-link @click="cancel(record.key, record)">
              cancel
            </a-typography-link>
          </span>
          <span v-else>
            <a @click="edit(record.key)">Edit</a>
            <a-popconfirm
              title="Are you sure delete this task?"
              ok-text="Yes"
              cancel-text="No"
              @confirm="deletebyId(record.key)"
            >
              <a href="#">Delete</a>
            </a-popconfirm>
          </span>
        </div>
      </template>
    </template>
  </a-table>
</template>
<script setup>
import { cloneDeep } from "lodash-es";
import { reactive, ref } from "vue";
import addComp from "@/components/addComp.vue";
import { MerchantColumn } from "../../store/Columns/columnForAdmin";
import { MerchantData } from "../../store/staticData/dataForAdmin";
import { onMounted } from "vue";
import API from "../../utils/API";
import { MerchantDataLoader } from "../../store/DataLoaders/AdminDataLoader";
const pagination = {
  defaultPageSize: 5,
  showSizeChanger: false,
};
const columns = MerchantColumn;
const dataSource = ref(MerchantData);
onMounted(() => {
  API({
    method: "post",
    url: "/admin/getMerchant",
    data: JSON.stringify({}),
  }).then((res) => {
    dataSource.value = MerchantDataLoader(res.data.dt);
  });
});
const editableData = reactive({});
const edit = (key) => {
  editableData[key] = cloneDeep(
    dataSource.value.filter((item) => key === item.key)[0]
  );
  // console.log(editableData[key]);
};
// 保存的逻辑
const save = (key) => {
  Object.assign(
    dataSource.value.filter((item) => key === item.key)[0],
    editableData[key]
  );
  delete editableData[key];
  let editedData = dataSource.value.filter((item) => key === item.key)[0];
  let PostData = {
    m_id: editedData.key,
    m_name: editedData.name,
    m_username: editedData.username,
    m_password: editedData.password,
    m_phone: editedData.phone,
    m_address: editedData.location,
  };
  API({
    method: "post",
    url: "/admin/updateMerchant",
    data: JSON.stringify(PostData),
  }).then((res) => {
    console.log(res);
  });
};
// 取消的逻辑
const cancel = (key) => {
  delete editableData[key];
};
// 删除逻辑
const deletebyId = (key) => {
  dataSource.value = dataSource.value.filter((item) => key != item.key);
  console.log(key);
  API({
    method: "post",
    url: "/admin/deleteMerchant",
    data: JSON.stringify({ m_id: key }),
  }).then((res) => {
    console.log(res);
  });
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>