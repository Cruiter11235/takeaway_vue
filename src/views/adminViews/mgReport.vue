<template>
  <!-- <addComp :keylist="['class_name']"></addComp> -->
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
            <!-- <a @click="edit(record.key)">Edit</a> -->
            <a-popconfirm
              title="是否核实举报?"
              ok-text="Yes"
              cancel-text="No"
              @confirm="AcceptReport(record.key)"
            >
              <a href="#">Accept</a>
            </a-popconfirm>
            <a-popconfirm
              title="是否拒绝举报?"
              ok-text="Yes"
              cancel-text="No"
              @confirm="RefuseReport(record.key)"
            >
              <a href="#">Refuse</a>
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
import { ReportColumn } from "../../store/Columns/columnForAdmin";
import addComp from "@/components/addComp.vue";
import { ReportData } from "../../store/staticData/dataForAdmin";
const pagination = {
  defaultPageSize: 5,
  showSizeChanger: false,
};
const columns = ReportColumn;
const dataSource = ref(ReportData);
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
// AcceptReport
const AcceptReport = (key) => {
  alert(key);
};
// RefuseReport
const RefuseReport = (key) => {
  alert(key);
};
</script>
  <style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>