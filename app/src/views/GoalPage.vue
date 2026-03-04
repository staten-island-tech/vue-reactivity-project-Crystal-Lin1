<template >
    <div class="bg-gray-100 min-h-screen">
    <header class="border-b-2 bg-blue-200 h-13 w-full ">
        <h1 class="text-3xl bold p-2 text-white font-bold text-center">Goal Tracker</h1>
    </header>
    <main > 
        <div class="flex justify-end">
            <button class='mr-1 text-xl text-white font-bold hover:bg-blue-700 bg-blue-400 rounded-lg block mt-5 h-10 w-30 px-3 '@click="displayGoalsForm">+ Create Goal</button>
        </div>
    
    <GoalCreation @invalidForm='invalidForm = true' @goalsArray='getGoalsArrayEmit' v-if="showGoalsForm" @close="showGoalsForm = false" />
    <CreationError @close='invalidForm = false' v-if="invalidForm"/>
    <section class="flex flex-wrap justify-center">
        <GoalCard @delete-goal='deleteGoal' @edit-goal='selectEditedGoal' v-for="goal in goalsArray" :key="goal.id" :goal="goal" /> 
    </section>
        <GoalEdit @updated-goal='getupdatedGoal' @close="goalEdit = false" v-if="goalEdit" ::goal="selectedGoal"/>
    </main>
    </div>
</template>

<script setup>
import GoalCard from '../components/GoalCard.vue'
import { ref} from 'vue';
import GoalCreation from '../components/GoalCreation.vue';
import CreationError from '../components/CreationError.vue';
import GoalEdit from '../components/GoalEdit.vue';
import { goalsArray } from '../store.js'
let invalidForm = ref(false)

let goalEdit = ref(false)
let selectedGoal = ref(null)
function selectEditedGoal(goal) {
    goalEdit.value = true
    selectedGoal.value = goal;
    console.log(selectedGoal.value)
    //when you call this function everything breaks
}
const formData = {'name': '',
            'status': '',
            'timeline': '',
            'description': ''}
        
const showGoalsForm = ref(false)
function displayGoalsForm() {
    showGoalsForm.value = true;
}
function deleteGoal(goalToDelete) {
    goalsArray.value.splice(goalsArray.value.indexOf(goalToDelete), 1)
}

function getGoalsArrayEmit(obj) {
    goalsArray.value.push({...obj})
    console.log(goalsArray.value)
}

function getupdatedGoal(obj) {
    let updatedGoal = obj
        
}
</script>

<style scoped>

</style>