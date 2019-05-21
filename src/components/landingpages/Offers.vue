<template>
<div class="offerCmp">
  <div class="offer" v-for="(offer, index) in cmpgn.offers" :key="index">
    <div class="offerLeft">
      <div class="fod" v-if="offer.isPrint">{{ offer.name }} Print Delivery</div>
      <div class="fod" v-else>{{ offer.name }}</div>
      <div class="fodDetails">{{ offer.fodDetails }}</div>
      <div class="pricing">{{ offer.price }}/{{ offer.priceExp }}</div>
      <div class="offerLength">{{ offer.marketingTagline }}</div>
      <div v-if="offer.billing" class="billing">{{ offer.billing }}</div>
      <div v-if="!offer.billing" style="width: 100%; height: 14px;"></div>
      <div v-if="offer.savings" class="savings">Save {{ offer.savings }}</div>
    </div>
    <div class="offerRight">
      <a  class="subscribe btn">{{ offer.buttonText }}</a>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>