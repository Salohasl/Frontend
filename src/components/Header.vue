<script setup lang="ts">

</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <span>LOGO</span>
      </div>
      <div class="header-link">
        <a href="#">Преимущества</a>
        <a href="#">Как работаем</a>
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
    top: 50px;
    width: 100%;
  }

  .logo {
    background: white;
    font-weight: bold;
    padding: 10px;
    width: 150px;
    text-align: center;
    border-radius: 15px;
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
      margin-left: 20px;
      text-decoration: none;
    }
  }
</style>