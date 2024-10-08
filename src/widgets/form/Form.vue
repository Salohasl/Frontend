<script setup lang="ts">
import {onMounted, ref} from "vue";
import {validation} from "./model";

  const isValid = ref(true);
  const valueEmail = ref('');
  const isChecked = ref(false);

  onMounted(() => {
    document.addEventListener('change', () => validation(isValid, valueEmail.value));
  })

</script>

<template>
  <section>
    <h2>Заполните форму</h2>
    <form action="#" method="post" id="form">
      <div class="form-group">
        <textarea
            name="name"
            rows="10"
            cols="60"
            placeholder="Напишите свой вопрос"
        />
        <div class="form-group__item">
          <input
              class="email"
              type="email"
              required
              minlength="3"
              placeholder="Введите email"
              :class="{ error : !isValid }"
              v-model="valueEmail"
          />
          <div class="item-checkbox">
            <input
                type="checkbox"
                required
                v-model="isChecked"
            />
            <p>Я ознакомлен(а) с политикой конфиденциальности и согласен(на) на обработку персональных данных.</p>
          </div>
          <button :disabled="!isValid" type="submit">Отправить</button>
        </div>
      </div>
    </form>
  </section>
</template>

<style scoped lang="scss">
  section {
    background: #E8EDEE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 600px;

    h2 {
      font-size: 3rem;
    }
  }

  form {
    max-width: 1650px;
    width: 100%;
  }

  .form-group {
    margin-top: 80px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 80px;

    textarea {
      outline: none;
      border-radius: 10px;
      background: #E8EDEE;
      padding: 15px;
      font-size: 1.2rem;
    }

    input {
      outline: none;
    }
  }

  .form-group__item {
    max-width: 400px;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      background: #1D1D1B;
      color: #F2F6F6;
      border: none;
      padding: 15px;
      border-radius: 10px;
    }
  }

  .email {
    width: 100%;
    padding: 15px 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid black;

    &.error {
      border: 2px solid red;
      border-radius: 5px;
    }
  }

  .item-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 5px;
  }
</style>