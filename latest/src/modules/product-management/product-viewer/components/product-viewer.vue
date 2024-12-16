<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  selectedUserProducts: Array,
  selectedStoreProducts: String,
});


</script>

<template>
  <div class="content-container">
    <div class="user-products">
      <div
        v-for="product in selectedUserProducts"
        :key="product.id"
        class="user-products__item"
      >
        {{ product.name }}
      </div>
      <div
        :style="{ color: selectedUserProducts.length === 6 ? 'red' : 'green' }"
        class="user-products__counter"
      > Selected: {{ selectedUserProducts.length }} / 6
      </div>
    </div>
    <div class="store-product-viewer">
      <div
        v-if="selectedStoreProducts.length > 0"
        class="store-product-viewer__item"
      >
        {{ selectedStoreProducts }}
      </div>
    </div>
  </div>
</template>

<style scoped>

.user-products,
.store-product-viewer {
  border: 1px solid black;
  width: 20%;
  height: 30vh;
}

.user-products {
  display: flex;
  flex-wrap: wrap;
}

.store-product-viewer,
.user-products__counter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-products__counter {
  width: 100%;
  align-self: end;
  margin-bottom: 5px;
}

.content-container {
  display: flex;
  justify-content: space-between;
}

</style>
