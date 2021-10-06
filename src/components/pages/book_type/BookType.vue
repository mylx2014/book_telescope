<template>
  <div id="book_type">
    <BookTypeHeader></BookTypeHeader>
    <BookTypeTable></BookTypeTable>
  </div>
</template>

<script>
import BookTypeHeader from "./BookTypeHeader";
import BookTypeTable from "../../base/type/BookTypeTable";

export default {
  name: "BookType",
  components: {BookTypeHeader, BookTypeTable}
}
</script>

<style scoped>
    #book_type{
        background-color: #F5F7FA;
    }
</style>