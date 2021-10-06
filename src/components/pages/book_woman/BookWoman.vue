<template>
  <div id="book-woman">
    <BookBanner></BookBanner>
    <BookTypeHeader></BookTypeHeader>
    <BookTypeTable></BookTypeTable>
  </div>
</template>

<script>
import BookBanner from "../../base/type/BookBanner";
import BookTypeHeader from "../book_woman/BookTypeHeader";
import BookTypeTable from "../../base/type/BookTypeTable";

export default {
  name: "BookWoman",
  components:{BookBanner,BookTypeHeader,BookTypeTable}
}
</script>

<style scoped>

</style>