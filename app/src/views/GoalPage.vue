<template >
    <div class="bg-gray-100 min-h-screen">
    <header class="border-b-2 bg-blue-200 h-13 w-full ">
        <h1 class="text-3xl bold p-2 text-white font-bold text-center">Goal Tracker</h1>
    </header>
    <main > 
        <div class="flex justify-end">
            <button class='mr-1 text-xl text-white font-bold hover:bg-blue-700 bg-blue-400 rounded-lg block mt-5 h-10 w-30 px-3 '@click="displayGoalsForm">+ Create Goal</button>
            <button class='mr-1 text-xl text-white font-bold hover:bg-blue-700 bg-blue-400 rounded-lg block mt-5 h-10 w-30 px-3'>🖉 Edit Goals</button>        
        </div>
    
    <GoalCreation @goals-array='getGoalsArrayEmit' v-if="showGoalsForm" @close="showGoalsForm = false" />
    <section class="flex flex-wrap justify-center">
        <GoalCard @delete-goal='deleteGoal' v-for="goal in goalsArray" :key="goal.id" :goal="goal" /> 
    </section>
    </main>
    </div>
</template>

<script setup>
import GoalCard from '../components/GoalCard.vue'
import { ref} from 'vue';
import GoalCreation from '../components/GoalCreation.vue';

let goalsArray = ref([])

const showGoalsForm = ref(false)
function displayGoalsForm() {
    showGoalsForm.value = true;
}
function deleteGoal(goalToDelete) {
    goalsArray.value.splice(goalsArray.value.indexOf(goalToDelete), 1)
}

function getGoalsArrayEmit(obj) {
    //never called
    goalsArray.value.push({...obj})
    console.log(goalsArray.value)
}
</script>

<style scoped>

</style>