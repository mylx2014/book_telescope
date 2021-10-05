<template>
    <div class="w">
        <BookHeader></BookHeader>
        <BookUser></BookUser>
        <BookFooter/>
    </div>
</template>

<script>
import BookHeader from "../../components/base/headers/BookHeader";
import BookUser from "../../components/pages/login/BookUser";
import BookFooter from "../../components/base/BookFooter";

export default {
  name: "login",
  components:{BookHeader,BookUser,BookFooter}
}
</script>

<style>
</style>