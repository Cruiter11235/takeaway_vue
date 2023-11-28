<template>
  <addComp :keylist="['f_class', 'f_name', 'price', 'is_available']"></addComp>
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
          ['c_id', 'f_name', 'is_available', 'price', 'f_class'].includes(
            column.dataIndex
          )
        "
      >
        <div v-if="column.dataIndex == 'is_available'">
          <a-select
            v-if="editableData[record.key]"
            v-model:value="editableData[record.key][column.dataIndex]"
            style="width: 120px"
          >
            <a-select-option value="yes">yes</a-select-option>
            <a-select-option value="no">no</a-select-option>
          </a-select>
          <template v-else>
            {{ text }}
          </template>
        </div>
        <div v-else-if="column.dataIndex == 'f_class'">
          <a-select
            v-if="editableData[record.key]"
            v-model:value="editableData[record.key][column.dataIndex]"
            style="width: 120px"
          >
            <a-select-option value="中餐">中餐</a-select-option>
            <a-select-option value="甜点饮品">甜点饮品</a-select-option>
            <a-select-option value="蔬菜水果">蔬菜水果</a-select-option>
            <a-select-option value="西式快餐">西式快餐</a-select-option>
          </a-select>
          <template v-else>
            {{ text }}
          </template>
        </div>
        <div v-else>
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
            <a-typography-link @click="cancel(record.key)">
              cancel
            </a-typography-link>
          </span>
          <span v-else>
            <a @click="edit(record.key)">Edit</a>
            <a @click="deletebyId(record.key)">Delete</a>
          </span>
          <a-upload
            v-if="editableData[record.key]"
            v-model:file-list="fileList"
            name="file"
            action="http://localhost:3000/postFile"
            :headers="headers"
            @change="handleChange"
            :showUploadList="false"
            :data="{ f_id: record.key }"
          >
            <a-button>
              <upload-outlined></upload-outlined>
              上传菜品图片
            </a-button>
          </a-upload>
        </div>
      </template>
    </template>
  </a-table>
</template>
<script setup>
import { cloneDeep } from "lodash-es";
import { reactive, ref } from "vue";
import { message } from "ant-design-vue";
import addComp from "@/components/addComp.vue";
import { FoodColumn } from "@/store/Columns/columnForMerchant";
import { FoodData } from "@/store/staticData/dataForMerchant";
// 上传图片函数
const handleChange = (info) => {
  if (info.file.status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === "done") {
    message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
};
const fileList = ref([]);
const headers = {
  authorization: "authorization-text",
};
// 分页配置
const pagination = {
  defaultPageSize: 5,
  showSizeChanger: false,
};
// 表列
const columns = FoodColumn;
// 表数据
const dataSource = ref(FoodData);
// Refs
const editableData = reactive({});
const edit = (key) => {
  editableData[key] = cloneDeep(
    dataSource.value.filter((item) => key === item.key)[0]
  );
  // console.log(editableData[key]);
};
// 保存函数
const save = (key) => {
  Object.assign(
    dataSource.value.filter((item) => key === item.key)[0],
    editableData[key]
  );
  delete editableData[key];
  console.log(dataSource.value.filter((item) => key === item.key)[0]);
};
// 取消函数
const cancel = (key) => {
  delete editableData[key];
};
// 删除函数
const deletebyId = (key) => {
  if (confirm("确认删除吗?")) {
    console.log(key);
    dataSource.value = dataSource.value.filter((item) => key !== item.key);
  }
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>