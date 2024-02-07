<template>
  <div class="col">
    <div class="card shadow-sm">
      <span class="img" :style="{backgroundImage: `url(${item.imgPath})`}"/>
      <div class="card-body">
        <p class="card-text">{{item.name}}</p>
        <div class="d-flex justify-content-between align-items-center">
          <button class="btn btn-primary">구입하기</button>
          <small class="text-body-secondary">{{common.getNumberFormatted(item.price)}}원</small>
          <small class="text-body-secondary text-danger">{{common.getNumberFormatted(item.discountPer)}}%</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "@/common/common";

export default {
  name: "Card",
  props : {
    item : Object
  },
  setup(){
    return {common}
  }
}
</script>

<style scoped>
  .card .img {
    display: inling-block;
    width: 100%;
    height: 250px;
    background-size:cover;
    background-position:center;
  }
  .card .text-danger {
    color: red;
  }

</style>