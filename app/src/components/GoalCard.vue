<template>
    <div class="bg-gray-50 text-center border-2 py-4 shadow-lg rounded-md w-3/12 m-auto my-5">
       <h2 class="underline text-lg font-bold">{{ goal.name }}</h2>
       <p class="italic mt-10">Description: {{ goal.description }}</p>
       <h2 class="mt-10">{{ toTitleCase(goal.status.replace(/-/g, ' '))}}</h2>
       <h2>{{ toTitleCase(goal.timeline.replace(/-/g, ' ')) }}</h2>
        <div class="flex justify-center flex-col">
            <button @click="$emit('deleteGoal')" class="hover:bg-red-700 my-2 bg-red-600 rounded-lg font-bold text-white p-2 w-6/12 mx-auto">Delete</button>
            <button @click="allowGoalEdit" class=" my-2 bg-blue-600 rounded-lg font-bold text-white p-2 w-6/12 mx-auto">Edit</button>
        </div>
      
    </div>
</template>

<script setup>
const props = defineProps({
    goal: {
        type: Object,
        required: true
    }})
const emits = defineEmits(['deleteGoal', 'editGoal'])
function allowGoalEdit() {
    emits('editGoal', props.goal)
}
function toTitleCase(str){
    return str
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase()); 
}

</script>

<style scoped>

</style>
