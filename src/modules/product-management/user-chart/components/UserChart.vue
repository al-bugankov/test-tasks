<script setup>
import {defineProps} from 'vue'


const props = defineProps({
  addUserProduct: Function,
  selectedUserProducts: Array
});

const addUserProductToStore = (product) => {
  if (props.selectedUserProducts.length < 6) {
    props.addUserProduct(product);
  } else {
    alert('Вы достигли максимального количества отображаемых товаров!')
  }
};

const userItems = [
  {
    "id": 1,
    "name": "Shoes 1"
  },
  {
    "id": 2,
    "name": "Shoes 2"
  },
  {
    "id": 3,
    "name": "Shoes 3"
  },
  {
    "id": 4,
    "name": "Shoes 4"
  },
  {
    "id": 5,
    "name": "T-shirt 1"
  },
  {
    "id": 6,
    "name": "T-shirt 2"
  },
  {
    "id": 7,
    "name": "T-shirt 3"
  },
  {
    "id": 8,
    "name": "T-shirt 4"
  }
]


</script>

<template>
  <div class="user-chart-container">
    <div v-for="userItem in userItems" :key="userItem.id" class="user-chart-container__item"
         @click="addUserProductToStore(userItem)">
      {{ userItem.name }}
    </div>
  </div>
</template>

<style scoped>

</style>
