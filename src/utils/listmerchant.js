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
  getItem("Manage", "sub1", () => h(AppstoreOutlined), [
    getItem("manage food", "1"),
  ]),
  getItem("Take a look", "sub2", () => h(AppstoreOutlined), [
    getItem("comments", "2"),
    getItem("orders", "3"),
  ]),
  {
    type: "divider",
  },
];
export default items;
