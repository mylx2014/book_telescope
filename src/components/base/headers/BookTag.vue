<template>
    <div class="book-tag">
        <div class="tag w">
            <div class="tag-title">热门标签：</div>
             <ul class="tag-content">
                <li><a href="#">无敌流</a></li>
                <li><a href="#">系统流</a></li>
                <li><a href="#">日常流</a></li>
                <li><a href="#">废柴流</a></li>
                <li><a href="#">凡人流</a></li>
                <li><a href="#">练功流</a></li>
                <li><a href="#">开局流</a></li>
                <li><a href="#">医生流</a></li>
                <li><a href="#">单女主</a></li>
                <li><a href="#">更多流派</a></li>
            </ul>
        </div>
        
        <div class="tag-content-wrapper">
           
        </div>
    </div>
</template>

<script>
export default {
  name: "BookTag"
}
</script>

<style scoped>
    .book-tag{
        height: 30px;
        line-height: 30px;
        background-color: #EBEEF5;
    }

    .tag{
        padding-left: 10px;
    }

    .tag-title,.tag-content,.tag-content li{
        float: left;
        font-size: 15px;
    }

    .tag-title{
        color: #909399;
    }

    li{
        padding-left: 10px;
    }

    li a{
        color: #C0C4CC;
    }

    li a:hover{
        color: tomato;
    }
</style>