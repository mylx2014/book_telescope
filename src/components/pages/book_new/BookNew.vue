<template>
  <div id="book-woman" class="w">
    <BookBanner></BookBanner>
    <BookTypeHeader></BookTypeHeader>
    <BookTypeTable></BookTypeTable>
  </div>
</template>

<script>
import BookBanner from "../../base/type/BookBanner";
import BookTypeHeader from "../book_new/BookTypeHeader";
import BookTypeTable from "../../base/type/BookTypeTable";

export default {
  name: "BookNew",
  components:{BookBanner,BookTypeHeader,BookTypeTable}
}
</script>

<style scoped>

</style>