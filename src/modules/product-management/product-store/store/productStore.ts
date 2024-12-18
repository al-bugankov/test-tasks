import {defineStore} from "pinia";

import {IProductStore} from "@/modules/product-management/product-store/types/IProductStore";
import {IProduct} from "@/modules/product-management/product-store/types/IProduct";


export const useProductStore = defineStore("ProductStore", {
  state: (): IProductStore => ({
    currentProduct: {
      id: null,
      name: '',
    },
  }),
  getters: {},
  actions: {
    updateShowProduct(selectedProduct: IProduct) {
      this.currentProduct = {...selectedProduct}
    }
  },
})
