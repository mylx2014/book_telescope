<template>
  <ul id="type-header">
    <li class="type-header">
      <h3>作品分类</h3>
      <p>
        <span class="type-title">男生</span>
        <a href="#" class="active">全部</a>
        <a href="#">都市</a>
        <a href="#">仙侠</a>
        <a href="#">历史</a>
        <a href="#">科幻</a>
        <a href="#">游戏</a>
        <a href="#">体育</a>
        <a href="#">短篇</a>
        <a href="#">奇幻</a>
        <a href="#">玄幻</a>
        <a href="#">军事</a>
        <a href="#">悬疑</a>
        <a href="#">武侠</a>
        <a href="#">轻小说</a>
        <a href="#">现实</a>
      </p>
      <p>
        <span class="type-title">女生</span>
        <a href="#" class="active">全部</a>
        <a href="#">现代言情</a>
        <a href="#">古代言情</a>
        <a href="#">悬疑侦探</a>
        <a href="#">仙侠奇缘</a>
        <a href="#">玄幻言情</a>
        <a href="#">浪漫青春</a>
        <a href="#">科幻空间</a>
        <a href="#">游戏竞技</a>
      </p>
    </li>
    <li class="type-header">
      <h3>作品状态</h3>
      <p>
        <span>作品状态</span>
        <a href="#" class="active">全部</a>
        <a href="#">连载中</a>
        <a href="#">已完结</a>
      </p>
    </li>
    <li class="type-header">
      <h3>排序方式</h3>
      <p>
        <span>排序方式</span>
        <a href="#" class="active">默认</a>
        <a href="#">推荐</a>
        <a href="#">点击</a>
        <a href="#">收藏</a>
        <a href="#">新书值</a>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BookTypeHeader"
}
</script>

<style scoped>
#type-header{
  padding-left: 2rem;
}

.type-header{
  padding: 15px 0;
}

.type-header h3{
  font-size: 20px;
  margin: 10px auto;
}

.type-header p{
  font-size: 16px;
  margin: 5px auto;
}

p span.type-title{
  display: inline-block;
  width: 64px;
  text-align: center;
}
p span{
  font-weight: bold;
  padding: 0 1em;
}

p a{
  padding: 1px 5px;
}

p a:hover{
  color: tomato;
}

.active{
  background-color: #E6A23C;
  color: #F2F6FC;
}

.active:hover{
  color: #F2F6FC;
}
</style>