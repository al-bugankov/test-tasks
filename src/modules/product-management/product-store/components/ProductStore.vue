<script setup>

import {useProductStore} from "@/modules/product-management/product-store/store/productStore";

const productStore = useProductStore();

const selectStoreProduct = (product) => {
  productStore.updateShowProduct(product);
}

const storeItems = [
  {
    "id": 11,
    "name": "Jacket 1"
  },
  {
    "id": 12,
    "name": "Jacket 2"
  },
  {
    "id": 13,
    "name": "Jacket 3"
  },
  {
    "id": 14,
    "name": "Jacket 4"
  },
  {
    "id": 15,
    "name": "Hoodie 1"
  },
  {
    "id": 16,
    "name": "Hoodie 2"
  },
  {
    "id": 17,
    "name": "Hoodie 3"
  },
  {
    "id": 18,
    "name": "Hoodie 4"
  }
]
</script>

<template>

  <div class="store-container">
    <div v-for="storeItem in storeItems" :key="storeItem.id" class="store-container__item"
         @click="selectStoreProduct(storeItem)"> {{ storeItem.name }}
    </div>
  </div>

</template>

<style scoped>

</style>
