<template>
    <div class="w">
        <BookHeader></BookHeader>
        <BookFooter/>
    </div>
</template>

<script>
import BookHeader from '/src/components/headers/BookHeader.vue'
import BookFooter from "../components/BookFooter";

export default {
  name: "login",
  components:{BookHeader,BookFooter}
}
</script>

<style>
</style>