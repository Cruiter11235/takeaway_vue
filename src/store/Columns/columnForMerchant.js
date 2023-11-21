const FoodColumn = [
  {
    title: "id",
    dataIndex: "key",
    width: "10%",
  },
  {
    title: "菜品类别",
    dataIndex: "f_class",
    width: "10%",
  },
  {
    title: "菜品名称",
    dataIndex: "f_name",
    width: "10%",
  },
  {
    title: "是否可售",
    dataIndex: "is_available",
    width: "10%",
  },
  {
    title: "每月销量",
    dataIndex: "sale_count",
    width: "10%",
  },
  {
    title: "平均打分",
    dataIndex: "score",
    width: "10%",
  },
  {
    title: "菜品价格",
    dataIndex: "price",
    width: "10%",
  },
  {
    title: "operation",
    dataIndex: "operation",
  },
];
const CommentsColumn = [
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
const OrderColumn = [
  {
    title: "订单id",
    dataIndex: "key",
    width: "10%",
  },
  {
    title: "顾客姓名",
    dataIndex: "m_id",
    width: "10%",
  },
  {
    title: "顾客地址",
    dataIndex: "c_id",
    width: "10%",
  },
  {
    title: "顾客电话",
    dataIndex: "s_id",
    width: "10%",
  },
  {
    title: "订单创建时间",
    dataIndex: "begin_time",
    width: "20%",
  },
  {
    title: "订单状态",
    dataIndex: "status",
    width: "10%",
  },
  {
    title: "骑手电话",
    dataIndex: "dphone",
    width: "10%",
  },
  {
    title: "operation",
    dataIndex: "operation",
  },
];
export { FoodColumn, CommentsColumn, OrderColumn };