<template>
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
            <a @click="edit(record.key)">Edit</a>
          </span>
        </div>
      </template>
    </template>
  </a-table>
</template>
  <script setup>
import { cloneDeep } from "lodash-es";
import { reactive, ref } from "vue";
const pagination = {
  defaultPageSize: 5,
  showSizeChanger: false,
};
const columns = [
  {
    title: "id",
    dataIndex: "key",
    width: "5%",
  },
  {
    title: "菜品名称",
    dataIndex: "f_name",
    width: "20%",
  },
  {
    title: "评论内容",
    dataIndex: "content",
    width: "20%",
  },
  {
    title: "打分",
    dataIndex: "score",
    width: "20%",
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    f_name: `Food ${i}`,
    content: "123",
    score: "110",
  });
}
const dataSource = ref(data);
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
</script>
  <style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>