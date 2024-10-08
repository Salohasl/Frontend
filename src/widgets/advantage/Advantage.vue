<script setup lang="ts">

import SvgIcon from "../../shared/assets/svg/SvgIcon.vue";
import SvgAdvantage from "../../shared/assets/svg/SvgAdvantage.vue";
</script>

<template>
  <section class="advantage">
    <h2>Баланс между выручкой и удовлетворённостью пользователей</h2>
    <div class="advantage-wrapper">
      <div class="advantage-block">
        <div class="advantage-block__text">
          <SvgIcon />
          <h3>Частотность под контролем</h3>
          <p>Чтобы не ронять NPS
            и не увеличивать отток пользователей</p>
        </div>
        <div class="advantage-block__center">
          <span>
            <SvgAdvantage />
          </span>
        </div>
        <div class="advantage-block__text">
          <SvgIcon />
          <h3>Максимальная выручка</h3>
          <p>За счёт заполенения всех рекламных мест по высокой цене</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .advantage {
    background: #F2F6F6;
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 2.4rem;
    }
  }

  .advantage-wrapper {
    max-width: 1650px;
    width: 100%;
    margin-top: 100px;
  }

  .advantage-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .advantage-block__center {
    background: #FF5900;
    padding: 20px;
    border-radius: 20px;
  }

  .advantage-block__text {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>