<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute();

function goToHome() {
  router.push('/')
}

function goToWork() {
  router.push('/work')
}

</script>

<template>
  <header>
    <nav>
      <div class="logo" :class="{ active: route.path === '/' }" @click="goToHome">
        <span>LOGO</span>
      </div>
      <div class="header-link">
        <a href="#">Преимущества</a>
        <a :class="{ active: route.path === '/work' }" @click="goToWork">Как работаем</a>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
    position: fixed;
    top: 30px;
    width: 100%;
  }

  .logo {
    background: white;
    font-weight: bold;
    padding: 10px;
    width: 150px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.5s;

    &.active {
      color: white;
      background: black;
    }
  }

  nav {
    max-width: 1650px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-link {

    a {
      margin-left: 50px;
      text-decoration: none;
      color: #1D1D1B;
      cursor: pointer;
      transition: 0.5s;

      &.active {
        color: #FF5900;
      }
    }
  }
</style>