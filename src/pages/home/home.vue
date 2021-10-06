<template>
  <div id="home">
    <BookHeader menu="个人中心"></BookHeader>
    <Home></Home>
    <BookFooter></BookFooter>
  </div>
</template>

<script>
import BookHeader from "../../components/base/headers/BookHeader";
import Home from "../../components/pages/home/Home";
import BookFooter from "../../components/base/BookFooter";

export default {
  name: "home",
  components:{BookHeader,Home,BookFooter}
}
</script>

<style scoped>

</style>