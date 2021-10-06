<template>
  <div id="book-end" class="w">
    <BookBanner></BookBanner>
    <BookTypeHeader></BookTypeHeader>
    <BookTypeTable></BookTypeTable>
  </div>
</template>

<script>
import BookBanner from "../../base/type/BookBanner";
import BookTypeHeader from "../book_end/BookTypeHeader";
import BookTypeTable from "../../base/type/BookTypeTable";

export default {
  name: "BookEnd",
  components:{BookBanner,BookTypeHeader,BookTypeTable}
}
</script>

<style scoped>
  #book-end{
    background-color: #F5F7FA;
  }
</style>