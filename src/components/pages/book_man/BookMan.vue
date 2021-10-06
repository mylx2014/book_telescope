<template>
  <div id="book-man" class="w">
    <BookBanner></BookBanner>
    <BookTypeHeader></BookTypeHeader>
    <BookTable></BookTable>
  </div>
</template>

<script>
import BookBanner from "../../base/type/BookBanner";
import BookTypeHeader from "./BookTypeHeader";
import BookTable from "../../base/type/BookTypeTable";

export default {
  name: "BookMan",
  components:{BookBanner,BookTypeHeader,BookTable}
}
</script>

<style scoped>
    #book-man{}
</style>