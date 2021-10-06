<template>
    <ul id="home-info" class="clearfix">
        <li>
            <el-card>
                <div class="tips-info" slot="header">
                    <h2>0</h2>
                </div>
                <div class="tips-type">
                    <h3>我的书架</h3>
                </div>
            </el-card>
        </li>
        <li>
            <el-card>
                <div class="tips-info" slot="header">
                    <h2>0</h2>
                </div>
                <div class="tips-type">
                    <h3>我的书评</h3>
                </div>
            </el-card>
        </li>
    </ul>
</template>

<script>
export default {
  name: "HomeInfo"
}
</script>

<style scoped>
    #home-info li{
        width: 500px;
        float: left;
}

.tips-info h2{
    text-align: center;
    color: tomato;
}

.tips-type h3{
    text-align: center;
}
</style>