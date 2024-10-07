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
       <button @click="handleClick(false)">Операторам</button>
       <button @click="handleClick(true)">ОТТ сервисам</button>
     </div>
     <p v-if="!isValue">Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации</p>
     <p v-else>Тут второй текст</p>
   </div>
 </div>
</template>

<style scoped>

</style>