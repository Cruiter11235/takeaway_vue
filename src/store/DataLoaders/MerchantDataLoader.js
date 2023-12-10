function FoodDataLoader(data) {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    let tmp = {};
    tmp.f_class = data[i].class_name;
    tmp.key = data[i].f_id;
    tmp.f_name = data[i].f_name;
    tmp.is_available = data[i].is_available == true ? "yes" : "no";
    tmp.sale_count = data[i].sale_count;
    tmp.score = data[i].score;
    tmp.price = data[i].f_price;
    res.push(tmp);
  }
  return res;
}
function CommentsDataLoader(data) {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    let tmp = {};
    tmp.key = data[i].comment_id;
    tmp.f_name = data[i].f_name;
    tmp.content = data[i].content;
    tmp.score = data[i].score;
    res.push(tmp);
  }
  return res;
}
function OrdersDataLoader(data) {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    let tmp = {};
    tmp.key = data[i].o_id;
    tmp.c_name = data[i].c_name;
    tmp.c_address = data[i].c_address;
    tmp.c_phone = data[i].c_phone;
    tmp.begin_time = data[i].begin_time;
    tmp.status = data[i].status;
    tmp.d_phone = data[i].d_phone;
    res.push(tmp);
  }
  return res;
}
export { FoodDataLoader, CommentsDataLoader, OrdersDataLoader };
