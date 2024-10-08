<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const router = useRouter();
const route = useRoute();
const isScroll = ref(false);

function goToHome() {
  router.push('/')
}

function goToWork() {
  router.push('/work')
}

function scrollView() {
  isScroll.value = window.scrollY > 100;
}

onMounted(() => {
  window.addEventListener('scroll', scrollView);
});

</script>

<template>
  <header :class="{ scroll: isScroll }">
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
    transition: 0.2s;

    &.scroll {
      top: 0px;
      background: #F2F6F6;
    }
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