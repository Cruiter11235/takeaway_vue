import { createRouter, createWebHashHistory } from "vue-router";
import login from "@/views/login.vue";
import customer from "@/views/customer.vue";
import merchant from "@/views/merchant.vue";
import stuff from "@/views/delivery.vue";
import customerInfo from "@/views/customerViews/cusinfo.vue";
import admin from "@/views/admin.vue";
import myMeals from "@/views/merchantViews/myMeals.vue";
import showComments from "@/views/merchantViews/showComments.vue";
import showOrders from "@/views/merchantViews/showOrders.vue";
import dinfo from "@/views/deliveryViews/dinfo.vue";
import mgClasses from "@/views/adminViews/mgClasses.vue";
import mgComments from "@/views/adminViews/mgComments.vue";
import mgCustomer from "@/views/adminViews/mgCustomer.vue";
import mgDelivery from "@/views/adminViews/mgDelivery.vue";
import mgFoods from "@/views/adminViews/mgFoods.vue";
import mgMerchant from "@/views/adminViews/mgMerchant.vue";
import mgOrders from "@/views/adminViews/mgOrders.vue";
import mgReport from "@/views/adminViews/mgReport.vue";
const routes = [
  { path: "/", component: login, name: "login" },
  {
    path: "/customer",
    component: customer,
    name: "customer",
    children: [
      { path: "/customer/info", component: customerInfo, name: "customerInfo" },
    ],
  },
  {
    path: "/merchant",
    component: merchant,
    name: "merchant",
    children: [
      { path: "/merchant/mymeals", component: myMeals, name: "myMeals" },
      {
        path: "/merchant/showcomments",
        component: showComments,
        name: "showComments",
      },
      {
        path: "/merchant/showorders",
        component: showOrders,
        name: "showOrders",
      },
    ],
  },
  {
    path: "/delivery",
    component: stuff,
    name: "delivery",
    children: [
      { path: "/delivery/info", component: dinfo, name: "deliveryInfo" },
    ],
  },
  {
    path: "/admin",
    component: admin,
    name: "admin",
    children: [
      { path: "/admin/mgClasses", component: mgClasses, name: "mgClasses" },
      { path: "/admin/mgComments", component: mgComments, name: "mgComments" },
      { path: "/admin/mgCustomer", component: mgCustomer, name: "mgCustomer" },
      { path: "/admin/mgDelivery", component: mgDelivery, name: "mgDelivery" },
      { path: "/admin/mgFoods", component: mgFoods, name: "mgFoods" },
      { path: "/admin/mgMerchant", component: mgMerchant, name: "mgMerchant" },
      { path: "/admin/mgOrders", component: mgOrders, name: "mgOrders" },
      { path: "/admin/mgReport", component: mgReport, name: "mgReport" },
    ],
  },
];

const Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default Router;
