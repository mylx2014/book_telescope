<template>
    <div id="home" class="w">
      <UserInfo></UserInfo>
      <HomeInfo></HomeInfo>
    </div>
</template>

<script>
import UserInfo from "./UserInfo";
import HomeInfo from "./HomeInfo";

export default {
  name: "Home",
  components:{UserInfo,HomeInfo}
}
</script>


<style scoped>
    #home{
        background-color: #F5F7FA;
    }
</style>