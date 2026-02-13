<template>
    
    <h1 class="text-3xl bold mt-5 underline text-center">Goal Tracker</h1>
    <button class='m-auto text-xl text-white font-bold hover:bg-blue-700 bg-blue-400 rounded-lg block mt-5 h-10 w-30 px-3 '@click="displayGoalsForm">Create Goal</button>
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