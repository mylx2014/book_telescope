<template>
    <div id="book_type" class="w">
        <BookHeader isactive="3"></BookHeader>
        <BookType></BookType>
        <BookFooter></BookFooter>
    </div>
</template>

<script>
import BookHeader from "../../components/base/headers/BookHeader";
import BookType from "../../components/pages/book_type/BookType";
import BookFooter from "../../components/base/BookFooter";

export default {
  name: "book_type",
  components:{BookHeader,BookType,BookFooter}
}
</script>

<style scoped>

</style>