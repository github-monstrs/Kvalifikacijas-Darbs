<script setup>

defineProps({

  itemID: {
    type: Number,
    required: true
  },

  onClickFunction: {
    type: Function,
    required: true
  }

});

</script>

<template>
  <div @click="onClickFunction(itemID)" :item-id=itemID>
    {{ itemID }}
  </div>
</template>

<style scoped>
div{
  padding: 15px 27px;
}
div.empty{
  padding: 40px;
}
</style>
