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
  getItem("Manage User", "sub1", () => h(AppstoreOutlined), [
    getItem("manage customer", "1"),
    getItem("manage merchant", "2"),
    getItem("manage delivery", "3"),
  ]),
  getItem("Manage Else", "sub2", () => h(AppstoreOutlined), [
    getItem("manage orders", "4"),
    getItem("manage foods", "5"),
    getItem("manage comments", "6"),
    getItem("manage classes", "7"),
  ]),
  {
    type: "divider",
  },
];
export default items;
