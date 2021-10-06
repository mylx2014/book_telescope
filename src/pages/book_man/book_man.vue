<template>
  <div id="book-man">
    <BookHeader isactive="4"></BookHeader>
    <BookMan></BookMan>
    <BookFooter></BookFooter>
  </div>
</template>

<script>
import BookHeader from "../../components/base/headers/BookHeader";
import BookMan from "../../components/pages/book_man/BookMan";
import BookFooter from "../../components/base/BookFooter";

export default {
  name: "book_man",
  components:{BookHeader,BookMan,BookFooter}
}
</script>

<style scoped>
    #book-man{
        background-color: #F5F7FA;
    }
</style>