<template>
    <div class="w">
        <BookHeader></BookHeader>
        <BookUser></BookUser>
        <BookFooter/>
    </div>
</template>

<script>
import BookHeader from "../../components/headers/BookHeader";
import BookUser from "../../components/login/BookUser";
import BookFooter from "../../components/BookFooter";

export default {
  name: "login",
  components:{BookHeader,BookUser,BookFooter}
}
</script>

<style>
</style>