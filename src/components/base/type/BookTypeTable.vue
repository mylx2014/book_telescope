<template>
    <div id="book-type-table">
        <el-table :stripe='true'>
            <el-table-column label="序号" align="center"></el-table-column>
            <el-table-column label="类别" align="center"></el-table-column>
            <el-table-column label="书名" align="center">    
                <template></template>
            </el-table-column>
            <el-table-column label="最新章节" align="center">    
                <template></template>
            </el-table-column>
            <el-table-column label="作者" align="center">    
                <template></template>
            </el-table-column>
            <el-table-column label="更新时间" align="center"></el-table-column>
            <el-table-column label="状态" align="center"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: "BookTypeTable"
}

</script>

<style scoped>
    #book-type-table{}
</style>