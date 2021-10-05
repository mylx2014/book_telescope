<template>
    <div>
        <BookHeader isactive="1"></BookHeader>
        <BookIndex></BookIndex>
        <BookFooter></BookFooter>
    </div>
</template>

<script>
import BookHeader from "../../components/base/headers/BookHeader";
import BookIndex from "../../components/pages/index/BookIndex";
import BookFooter from "../../components/base/BookFooter";

export default {
  name: "index",
  components:{BookHeader,BookIndex,BookFooter}
}
</script>

<style scoped>

</style>