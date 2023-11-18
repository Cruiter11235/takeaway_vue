import { h } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("我的", "sub1", () => h(MailOutlined), [getItem("信息", "1")]),
  {
    type: "divider",
  },
];
export default items;
