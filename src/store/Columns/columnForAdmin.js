const ClassColumn = [
  {
    title: "class_id",
    dataIndex: "key",
    width: "20%",
  },
  {
    title: "class_name",
    dataIndex: "class_name",
    width: "60%",
  },
  {
    title: "operation",
    dataIndex: "operation",
  },
];
const CommentsColumn = [
  {
    title: "comment_id",
    dataIndex: "key",
    width: "5%",
  },
  {
    title: "f_id",
    dataIndex: "f_id",
    width: "20%",
  },
  {
    title: "content",
    dataIndex: "content",
    width: "20%",
  },
  {
    title: "score",
    dataIndex: "score",
    width: "20%",
  },
  {
    title: "operation",
    dataIndex: "operation",
  },
];
const CustomerColumn = [
  {
    title: "customer_id",
    dataIndex: "key",
    width: "5%",
  },
  {
    title: "username",
    dataIndex: "username",
    width: "20%",
  },
  {
    title: "password",
    dataIndex: "password",
    width: "20%",
  },
  {
    title: "phone",
    dataIndex: "phone",
    width: "20%",
  },
  {
    title: "location",
    dataIndex: "location",
    width: "20%",
  },
  {
    title: "operation",
    dataIndex: "operation",
  },
];
const DeliveryColumn = [
  {
    title: "delivery_id",
    dataIndex: "key",
    width: "5%",
  },
  {
    title: "username",
    dataIndex: "username",
    width: "20%",
  },
  {
    title: "password",
    dataIndex: "password",
    width: "20%",
  },
  {
    title: "phone",
    dataIndex: "phone",
    width: "20%",
  },
  {
    title: "operation",
    dataIndex: "operation",
  },
];
const FoodColumn = [
  {
    title: "f_id",
    dataIndex: "key",
    width: "10%",
  },
  {
    title: "class_id",
    dataIndex: "class_id",
    width: "10%",
  },
  {
    title: "m_id",
    dataIndex: "m_id",
    width: "10%",
  },
  {
    title: "f_name",
    dataIndex: "f_name",
    width: "10%",
  },
  {
    title: "is_available",
    dataIndex: "is_available",
    width: "10%",
  },
  {
    title: "sale_count",
    dataIndex: "sale_count",
    width: "10%",
  },
  {
    title: "score",
    dataIndex: "score",
    width: "10%",
  },
  {
    title: "url",
    dataIndex: "f_url",
    width: "10%",
  },
  {
    title: "price",
    dataIndex: "price",
    width: "10%",
  },
  {
    title: "operation",
    dataIndex: "operation",
  },
];
const MerchantColumn = [
  {
    title: "merchant_id",
    dataIndex: "key",
    width: "5%",
  },
  {
    title: "m_name",
    dataIndex: "name",
    width: "15%",
  },
  {
    title: "m_username",
    dataIndex: "username",
    width: "20%",
  },
  {
    title: "m_password",
    dataIndex: "password",
    width: "20%",
  },
  {
    title: "m_phone",
    dataIndex: "phone",
    width: "20%",
  },
  {
    title: "location",
    dataIndex: "location",
    width: "20%",
  },
  {
    title: "operation",
    dataIndex: "operation",
  },
];
const OrderColumn = [
  {
    title: "o_id",
    dataIndex: "key",
    width: "10%",
  },
  {
    title: "m_id",
    dataIndex: "m_id",
    width: "10%",
  },
  {
    title: "c_id",
    dataIndex: "c_id",
    width: "10%",
  },
  {
    title: "s_id",
    dataIndex: "s_id",
    width: "10%",
  },
  {
    title: "begin_time",
    dataIndex: "begin_time",
    width: "30%",
  },
  {
    title: "status",
    dataIndex: "status",
    width: "10%",
  },
  {
    title: "operation",
    dataIndex: "operation",
  },
];
const ReportColumn = [
  {
    title: "r_id",
    dataIndex: "key",
    width: "20%",
  },
  {
    title: "m_id",
    dataIndex: "m_id",
    width: "30%",
  },
  {
    title: "content",
    dataIndex: "content",
    width: "30%",
  },
  {
    title: "operation",
    dataIndex: "operation",
  },
];
export {
  ClassColumn,
  CommentsColumn,
  CustomerColumn,
  DeliveryColumn,
  FoodColumn,
  MerchantColumn,
  OrderColumn,
  ReportColumn,
};
