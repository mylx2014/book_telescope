<template>
  <div id="book-new">
    <BookHeader isactive="7"></BookHeader>
    <BookEnd></BookEnd>
    <BookFooter></BookFooter>
  </div>
</template>

<script>
import BookHeader from "../../components/base/headers/BookHeader";
import BookEnd from "../../components/pages/book_end/BookEnd";
import BookFooter from "../../components/base/BookFooter";

export default {
  name: "book_end",
  components:{BookHeader,BookEnd,BookFooter}
}
</script>

<style scoped>
#book-new{
  background-color: #F5F7FA;
}
</style>