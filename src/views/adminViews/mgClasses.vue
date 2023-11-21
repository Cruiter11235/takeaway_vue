<template>
  <addComp :keylist="['class_name']"></addComp>
  <a-table
    :columns="columns"
    :data-source="dataSource"
    bordered
    :pagination="pagination"
    size="large"
    style="width: 95%; margin: auto"
  >
    <template #bodyCell="{ column, text, record }">
      <template v-if="['class_name'].includes(column.dataIndex)">
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
            <a-typography-link @click="cancel(record.key)">
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
import { ClassColumn } from "@/store/Columns/columnForAdmin";
import { ClassData } from "../../store/staticData/dataForAdmin";
const pagination = {
  defaultPageSize: 5,
  showSizeChanger: false,
};
const columns = ClassColumn;
const dataSource = ref(ClassData);
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
};
// 取消的逻辑
const cancel = (key) => {
  delete editableData[key];
};
// 删除逻辑
const deletebyId = (key) => {
  dataSource.value = dataSource.value.filter((item) => key != item.key);
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>