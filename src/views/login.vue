<template>
  <div class="loginPanel">
    <div class="shell">
      <div class="container a-container" id="a-container">
        <form action="" method="" class="form" id="a-form">
          <h2 class="form_title title">创建账号</h2>
          <input
            type="text"
            class="form_input"
            placeholder="UserName"
            v-model="UserNameSU"
          />
          <!-- <input type="text" class="form_input" placeholder="Email" /> -->
          <input
            type="text"
            class="form_input"
            placeholder="Password"
            v-model="PasswordSU"
          />
          <a-radio-group v-model:value="value">
            <a-radio :value="1">顾客</a-radio>
            <a-radio :value="2">外卖员</a-radio>
          </a-radio-group>
          <button class="form_button button submit" @click="signUp">
            SIGN UP
          </button>
        </form>
      </div>

      <div class="container b-container" id="b-container">
        <form action="" method="" class="form" id="b-form">
          <h2 class="form_title title">登入账号</h2>
          <input
            type="text"
            class="form_input"
            placeholder="Username"
            v-model="UserNameSI"
          />
          <input
            type="text"
            class="form_input"
            placeholder="Password"
            v-model="PasswordSI"
          />
          <a-radio-group v-model:value="value">
            <a-radio :value="1">顾客</a-radio>
            <a-radio :value="2">商家</a-radio>
            <a-radio :value="3">外卖员</a-radio>
            <a-radio :value="4">管理员</a-radio>
          </a-radio-group>
          <a class="form_link">忘记密码？</a>
          <button class="form_button button submit" @click="signIn">
            SIGN IN
          </button>
        </form>
      </div>

      <div class="switch" id="switch-cnt">
        <div class="switch_circle"></div>
        <div class="switch_circle switch_circle-t"></div>
        <div class="switch_container" id="switch-c1">
          <h2 class="switch_title title" style="letter-spacing: 0">
            Welcome Back！
          </h2>
          <p class="switch_description description">
            已经有账号了嘛，去登入账号来进入奇妙世界吧！！！
          </p>
          <button class="switch_button button switch-btn">SIGN IN</button>
        </div>

        <div class="switch_container is-hidden" id="switch-c2">
          <h2 class="switch_title title" style="letter-spacing: 0">
            Hello Friend！
          </h2>
          <p class="switch_description description">
            去注册一个账号，成为尊贵的粉丝会员，让我们踏入奇妙的旅途！
          </p>
          <button class="switch_button button switch-btn">SIGN UP</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Router from "@/router/router.js";
import axios from "axios";
import { onMounted, watch, ref } from "vue";
import { useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import API from "../utils/API";
const route = useRoute();
let init = () => {
  let switchCtn = document.querySelector("#switch-cnt");
  let switchC1 = document.querySelector("#switch-c1");
  let switchC2 = document.querySelector("#switch-c2");
  let switchCircle = document.querySelectorAll(".switch_circle");
  let switchBtn = document.querySelectorAll(".switch-btn");
  let aContainer = document.querySelector("#a-container");
  let bContainer = document.querySelector("#b-container");
  let allButtons = document.querySelectorAll(".submit");

  let getButtons = (e) => e.preventDefault();
  let changeForm = (e) => {
    // 修改类名
    switchCtn.classList.add("is-gx");
    setTimeout(function () {
      switchCtn.classList.remove("is-gx");
    }, 1500);
    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z");
  };
  // 点击切换
  let shell = () => {
    for (var i = 0; i < allButtons.length; i++)
      allButtons[i].addEventListener("click", getButtons);
    for (var i = 0; i < switchBtn.length; i++)
      switchBtn[i].addEventListener("click", changeForm);
  };
  shell();
};
async function signIn() {
  console.log("signin", UserNameSI.value, PasswordSI.value, value.value);
  let role = value.value;
  if (value.value == 1) {
    role = "customer";
  } else if (value.value == 2) {
    role = "merchant";
  } else if (value.value == 3) {
    role = "delivery";
  } else {
    role = "admin";
  }
  let PostData = {
    username: UserNameSI.value,
    password: PasswordSI.value,
    role: role,
  };
  API({
    method: "post",
    url: "/login",
    data: JSON.stringify(PostData),
  }).then((res) => {
    console.log(res.data);
    if (res.data.status == 0) {
      alert("登陆成功");
      if (value.value == 1) {
        Router.push("/customer/info");
        localStorage.setItem("c_id", res.data.c_id);
      } else if (value.value == 2) {
        localStorage.setItem("m_id", res.data.m_id);
        Router.push("/merchant/mymeals");
      } else if (value.value == 3) {
        localStorage.setItem("d_id", res.data.d_id);
        Router.push("/delivery/info");
      } else {
        Router.push("/admin/mgCustomer");
      }
    } else {
      alert("登陆失败");
    }
  });
}
function signUp() {
  console.log("signup", UserNameSU.value, PasswordSU.value, value.value);
  let role = "";
  if (value.value == 1) {
    role = "customer";
  } else if (value.value == 2) {
    role = "delivery";
  }
  let postData = {
    username: UserNameSU.value,
    password: PasswordSU.value,
    role: role,
  };
  API({
    method: "post",
    url: "/register",
    data: JSON.stringify(postData),
  }).then((res) => {
    if (res.data.status == 0) {
      alert("注册成功");
    } else {
      alert("注册失败");
    }
  });
}
let PasswordSU = ref("");
let PasswordSI = ref("");
let UserNameSU = ref("");
let UserNameSI = ref("");
let value = ref(1);
onMounted(() => {
  init();
});
watch(
  () => Router.currentRoute.value.path,
  () => {
    console.log("init");
    init();
  }
);
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* 字体无法选中 */
  user-select: none;
}

.shell {
  position: relative;
  width: 1000px;
  min-width: 1000px;
  min-height: 600px;
  height: 600px;
  padding: 25px;
  background-color: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
}

/* 设置响应式 */
@media (max-width: 1200px) {
  .shell {
    transform: scale(0.7);
  }
}

@media (max-width: 1000px) {
  .shell {
    transform: scale(0.6);
  }
}

@media (max-width: 800px) {
  .shell {
    transform: scale(0.5);
  }
}

@media (max-width: 600px) {
  .shell {
    transform: scale(0.4);
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 600px;
  height: 100%;
  padding: 25px;
  background-color: #ecf0f3;
  transition: 1.25s;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.iconfont {
  margin: 0 5px;
  border: rgba(0, 0, 0, 0.5) 2px solid;
  border-radius: 50%;
  font-size: 25px;
  padding: 3px;
  opacity: 0.5;
  transition: 0.1s;
}

.iconfont:hover {
  opacity: 1;
  transition: 0.15s;
  cursor: pointer;
}

.form_input {
  width: 350px;
  height: 40px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}

.form_input:focus {
  box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
}

.form_span {
  margin-top: 30px;
  margin-bottom: 12px;
}

.form_link {
  color: #181818;
  font-size: 15px;
  margin-top: 25px;
  border-bottom: 1px solid #a0a5a8;
  line-height: 2;
}

.title {
  font-size: 34px;
  font-weight: 700;
  line-height: 3;
  color: #181818;
  letter-spacing: 10px;
}

.description {
  font-size: 14px;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 1.6;
}

.button {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  margin-top: 50px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;
  background-color: #4b70e2;
  color: #f9f9f9;
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
  border: none;
  outline: none;
}

.a-container {
  z-index: 100;
  left: calc(100% - 600px);
}

.b-container {
  left: calc(100% - 600px);
  z-index: 0;
}

.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 400px;
  padding: 50px;
  z-index: 200;
  transition: 1.25s;
  background-color: #ecf0f3;
  overflow: hidden;
  box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #d1d9e6;
}

.switch_circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: #ecf0f3;
  box-shadow: inset 8px 8px 12px #b8bec7, inset -8px -8px 12px #fff;
  bottom: -60%;
  left: -60%;
  transition: 1.25s;
}

.switch_circle-t {
  top: -30%;
  left: 60%;
  width: 300px;
  height: 300px;
}

.switch_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 400px;
  padding: 50px 55px;
  transition: 1.25s;
}

.switch_button {
  cursor: pointer;
}

.switch_button:hover,
.submit:hover {
  box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
  transform: scale(0.985);
  transition: 0.25s;
}

.switch_button:active,
.switch_button:focus {
  box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9;
  transform: scale(0.97);
  transition: 0.25s;
}

.is-txr {
  left: calc(100% - 400px);
  transition: 1.25s;
  transform-origin: left;
}

.is-txl {
  left: 0;
  transition: 1.25s;
  transform-origin: right;
}

.is-z {
  z-index: 200;
  transition: 1.25s;
}

.is-hidden {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: 1.25s;
}

.is-gx {
  animation: is-gx 1.25s;
}

@keyframes is-gx {
  0%,
  10%,
  100% {
    width: 400px;
  }

  30%,
  50% {
    width: 500px;
  }
}
.loginPanel {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: #ecf0f3;
  color: #a0a5a8;
}
</style>