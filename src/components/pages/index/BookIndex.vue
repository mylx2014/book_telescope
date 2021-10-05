<template>
    <div id="book-index">
        <BookBanner></BookBanner>
        <BookType bookType="男生小说"></BookType>
        <BookType bookType="女生小说"></BookType>
        <BookType bookType="最新小说"></BookType>
        <BookType bookType="完本小说"></BookType>
    </div>
</template>

<script>
import BookBanner from "./BookBanner";
import BookType from "./BookType";

export default {
  name: "BookIndex",
  components:{BookBanner,BookType}
}
</script>

<style scoped>

</style>