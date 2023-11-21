const ClassData = [];
const CommnetsData = [];
const CustomerData = [];
const DeliveryData = [];
const FoodData = [];
const MerchantData = [];
const OrderData = [];
const ReportData = [];

for (let i = 0; i < 100; i++) {
  ClassData.push({
    key: i.toString(),
    class_name: `Class ${i}`,
  });
  CommnetsData.push({
    key: i.toString(),
    f_id: `User ${i}`,
    content: "123",
    score: "110",
  });
  CustomerData.push({
    key: i.toString(),
    username: `User ${i}`,
    password: "123",
    phone: "110",
    location: "四川大学",
  });
  DeliveryData.push({
    key: i.toString(),
    username: `User ${i}`,
    password: "123",
    phone: "110",
  });
  FoodData.push({
    key: i.toString(),
    class_id: "1",
    m_id: "123",
    f_name: "666",
    is_available: "finished",
    sale_count: "1",
    score: "1",
    f_url: "1",
    price: "1",
  });
  MerchantData.push({
    key: i.toString(),
    username: `User ${i}`,
    password: "123",
    name: "肯德基",
    phone: "110",
    location: "四川大学",
  });
  OrderData.push({
    key: i.toString(),
    m_id: `User ${i}`,
    s_id: "123",
    c_id: "666",
    begin_time: "110",
    status: "finished",
  });
  ReportData.push({
    key: i.toString(),
    m_id: `${i}`,
    content: `Edward King ${i}`,
  });
}

export {
  ClassData,
  CommnetsData,
  CustomerData,
  DeliveryData,
  FoodData,
  MerchantData,
  OrderData,
  ReportData,
};
