function MerchantDataLoader(data) {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    let tmp = {};
    tmp.key = data[i].m_id;
    tmp.name = data[i].m_name;
    tmp.username = data[i].m_username;
    tmp.password = data[i].m_password;
    tmp.phone = data[i].m_phone;
    tmp.location = data[i].m_address;
    res.push(tmp);
  }
  return res;
}
function CustomerDataLoader(data) {
  console.log(data);
  let res = [];
  for (let i = 0; i < data.length; i++) {
    let tmp = {};
    tmp.key = data[i].c_id;
    tmp.username = data[i].c_username;
    tmp.password = data[i].c_password;
    tmp.phone = data[i].c_phone;
    tmp.location = data[i].c_address;
    res.push(tmp);
  }
  return res;
}
function DeliveryDataLoader(data) {
  console.log(data);
  let res = [];
  for (let i = 0; i < data.length; i++) {
    let tmp = {};
    tmp.key = data[i].d_id;
    tmp.username = data[i].d_username;
    tmp.password = data[i].d_password;
    tmp.phone = data[i].d_phone;
    res.push(tmp);
  }
  return res;
}
function ReportDataLoader(data) {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    let tmp = {};
    tmp.key = data[i].r_id;
    tmp.m_id = data[i].m_id;
    tmp.content = data[i].content;
    res.push(tmp);
  }
  return res;
}
export {
  MerchantDataLoader,
  CustomerDataLoader,
  DeliveryDataLoader,
  ReportDataLoader,
};
