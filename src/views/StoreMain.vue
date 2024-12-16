<script setup>
import ProductViewer from '@/modules/product-management/product-viewer/components/product-viewer.vue'
import UserChart from "@/modules/product-management/user-chart/components/UserChart.vue";
import ProductStore from "@/modules/product-management/product-store/components/ProductStore.vue";

import {ref} from "vue";

const selectedUserProducts = ref([]);
const selectedStoreProducts = ref('');

const addUserProduct = (product) => {
  selectedUserProducts.value.push(product);
}

const showStoreProduct = (product) => {
  selectedStoreProducts.value = product;
}


</script>

<template>
  <div class="store">
    <product-viewer :selectedStoreProducts="selectedStoreProducts" :selectedUserProducts="selectedUserProducts"/>
    <div class="store__items">
      <div class="store__item">
        <user-chart :addUserProduct="addUserProduct" :selectedUserProducts="selectedUserProducts"/>
      </div>
      <div class="store__item">
        <product-store :showStoreProduct="showStoreProduct"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.store__items {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.store__item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 45%;
}

</style>
