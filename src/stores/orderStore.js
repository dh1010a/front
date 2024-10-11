// src/stores/orderStore.js
import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    orderIdx: 1,
    maxMemberCnt: 1,
    type: null,
  }),
  actions: {
    setOrderIdx(orderIdx) {
      this.orderIdx = orderIdx;
    },
    setType(type) {
      this.type = type;
    },
    setMaxMemberCnt(maxMemberCnt) { // 인원 설정 함수 추가
      this.maxMemberCnt = maxMemberCnt;
    },
  },
});