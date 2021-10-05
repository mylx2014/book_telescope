<template>
    <div class="w">
        <BookHeader></BookHeader>
        <BookUser></BookUser>
        <BookFooter/>
    </div>
</template>

<script>
import BookHeader from '/src/components/headers/BookHeader.vue'
import BookFooter from "../components/BookFooter";
import BookUser from "../components/login/BookUser";

export default {
  name: "login",
  components:{BookHeader,BookUser,BookFooter}
}
</script>

<style>
</style>