<template>
  <div class="my-card">
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-content">{{ content }}</p>
  </div>
</template>

<script setup>
// 定义组件接收的参数
defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: "暂无内容"
  }
})
</script>

<style scoped>
.my-card {
  border: 1px solid #5d7ec0;
  border-radius: 8px;
  padding: 16px;
  margin: 12px 0;
  background-color: #487fb7;
}
.card-title {
  font-weight: 600;
  margin-bottom: 8px;
  color: #3c5a83;
}
.card-content {
  color: #4b5563;
}
</style>