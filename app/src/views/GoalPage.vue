<template>
    <h1>Goal Tracker</h1>
    <button @click="displayGoalsForm">Create Goal</button>
    <GoalCreation v-if="showGoalsForm" @close="showGoalsForm = false" />
    <div>
        <!-- <GoalCard v-for="goal in goals" :key="goal.id" :goal="goal" /> -->
    </div>
</template>

<script setup>
import GoalCard from '../components/GoalCard.vue'
import { ref } from 'vue';
import GoalCreation from '../components/GoalCreation.vue';

const showGoalsForm = ref(false)
function displayGoalsForm() {
    showGoalsForm.value = true;
}
const goals = ref([

]) //array of objs
</script>

<style scoped>

</style>