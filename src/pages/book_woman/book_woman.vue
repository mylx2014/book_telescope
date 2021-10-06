<template>
  <div id="book-woman" class="w">
    <BookHeader isactive="5"></BookHeader>
    <BookWoman></BookWoman>
    <BookFooter></BookFooter>
  </div>
</template>

<script>
import BookHeader from "../../components/base/headers/BookHeader";
import BookWoman from "../../components/pages/book_woman/BookWoman";
import BookFooter from "../../components/base/BookFooter";

export default {
  name: "book_woman",
  components:{BookHeader,BookWoman,BookFooter}
}
</script>

<style scoped>
  #book-woman{
    background-color: #F5F7FA;
  }
</style>