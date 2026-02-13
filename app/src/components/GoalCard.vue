<template>
    <div>
       <h2 class="underline">Goal</h2>
       <h2>{{ goal.name }}</h2>
       <h2>{{ goal.status }}</h2>
        <p class="italic">{{ goal.description }}</p>
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
