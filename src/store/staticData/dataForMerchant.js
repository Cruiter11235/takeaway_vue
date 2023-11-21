const FoodData = [];
for (let i = 0; i < 100; i++) {
  FoodData.push({
    key: i.toString(),
    f_class: "中餐",
    f_name: "666",
    is_available: "yes",
    sale_count: "1",
    score: "1",
    price: "1",
  });
}
const CommentsData = [];
for (let i = 0; i < 100; i++) {
  CommentsData.push({
    key: i.toString(),
    f_name: `Food ${i}`,
    content: "123",
    score: "110",
  });
}
const OrdersData = [];
for (let i = 0; i < 100; i++) {
  OrdersData.push({
    key: i.toString(),
    m_id: `User ${i}`,
    s_id: "123",
    c_id: "666",
    begin_time: "110",
    status: "finished",
    dphone: "1234",
  });
}
export { FoodData, CommentsData, OrdersData };

