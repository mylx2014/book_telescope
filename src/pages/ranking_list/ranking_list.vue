<template>
    <div>
        <BookHeader isactive="2"></BookHeader>
        <BookRankingList></BookRankingList>
        <BookFooter></BookFooter>
    </div>
</template>

<script>
import BookHeader from "../../components/base/headers/BookHeader";
import BookRankingList from "../../components/pages/ranking_list/BookRankingList";
import BookFooter from "../../components/base/BookFooter";

export default {
  name: "ranking_list",
  components:{BookHeader,BookRankingList,BookFooter}

}
</script>

<style scoped>

</style>