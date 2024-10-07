<script setup lang="ts">
import {ref} from "vue";

const isValue = ref(false);

const handleClick = (value : boolean) => {
  isValue.value = value;
}

</script>

<template>
 <div class="intro-block">
   <h2>Дополнительные источники выручки для разных компаний</h2>
   <div class="intro-block__item">
     <div class="item-button">
       <button
           :class="{ active: !isValue }"
           @click="handleClick(false)"
       >
         Операторам
       </button>
       <button
           :class="{ active: isValue }"
           @click="handleClick(true)"
       >
         ОТТ сервисам</button>
     </div>
     <p v-if="!isValue">Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации</p>
     <p v-else>Дополнительные возможности обогащения данных об аудитории и монетизации</p>
   </div>
 </div>
</template>

<style lang="scss">
  .intro-block {
    margin-top: 80px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h2 {
      font-size: 2rem;
      max-width: 450px;
      width: 100%;
    }
  }

  .intro-block__item {
    max-width: 450px;
    width: 100%;

    p {
      font-size: 1.2rem;
      height: 90px;
      margin-top: 20px;
    }
  }

  .item-button {
    display: flex;
    justify-content: space-between;

    button {
      width: 100%;
      padding: 10px;
      font-size: 1.2rem;
      border: none;
      border-radius: 10px;
      transition: 0.5s;
      color: #A4ADAC;

      &.active {
        background: black;
        color: white;
      }
    }
  }
</style>