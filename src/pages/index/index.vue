<template>
    <div>
        <BookHeader isactive="1"></BookHeader>
        <BookFooter></BookFooter>
    </div>
</template>

<script>
import BookHeader from "../../components/base/headers/BookHeader";

import BookFooter from "../../components/base/BookFooter";

export default {
  name: "index",
  components:{BookHeader,BookFooter}
}
</script>

<style scoped>

</style>