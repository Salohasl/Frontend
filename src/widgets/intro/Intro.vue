<script setup lang="ts">
import {useStore} from "../../shared";
import IntroComponent from "./ui";

const store = useStore();

const clickHandlerAlert = () => {
  store.storeSave.alert = true;
  store.alerts();
}

</script>

<template>
  <section class="intro">
    <div class="intro-wrapper">
      <h1>Монетизируйте клиентскую <br> базу, не снижая NPS</h1>
      <p>Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации</p>
      <button @click="clickHandlerAlert">Заказать звонок</button>
      <IntroComponent />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .intro {
    background-image: url("./shapes.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .intro-wrapper {
    max-width: 1650px;
    width: 100%;

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.5rem;
      margin-top: 20px;
      max-width: 600px;
      width: 100%;
      line-height: 2rem;
    }

    button {
      background: #FF5900;
      border: none;
      color: white;
      padding: 10px;
      width: 200px;
      border-radius: 10px;
      font-size: 1.2rem;
      margin-top: 80px;
    }
  }
</style>