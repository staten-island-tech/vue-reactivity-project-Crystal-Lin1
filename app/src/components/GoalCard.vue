<template>
    <div>
       <h2>Goal</h2>
       <h2>{{ goal.name }}</h2>
       <h2>{{ goal.status }}</h2>
        <p>{{ goal.description }}</p>
      <button>Delete</button>
        
    </div>
</template>

<script setup>
 defineProps({
    type: Object,
    required: true
 })
</script>

<style scoped>

</style>
