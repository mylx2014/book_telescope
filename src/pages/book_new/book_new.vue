<template>
  <div id="book-new">
    <BookHeader isactive="6"></BookHeader>
    <BookNew></BookNew>
    <BookFooter></BookFooter>
  </div>
</template>

<script>
import BookHeader from "../../components/base/headers/BookHeader";
import BookNew from "../../components/pages/book_new/BookNew";
import BookFooter from "../../components/base/BookFooter";

export default {
  name: "book_new",
  components:{BookHeader,BookNew,BookFooter}
}
</script>

<style scoped>

</style>