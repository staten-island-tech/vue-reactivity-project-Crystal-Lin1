<template>
    <div class="fixed inset-0 bg-black bg-opacity-30">
        <div class="w-7/12 m-auto h-6/6 rounded-xl bg-white p-3">
        <h1 class="font-bold text-xl">Current Details</h1>
        <h2 class="mt-5">Name: {{ goal.name }}</h2>
       <p class="mt-5">Description: {{ goal.description }}</p>
       <h2 class="mt-5">Status: {{ toTitleCase(goal.status.replace(/-/g, ' '))}}</h2>
       <h2 class="mt-5">Timeline: {{ toTitleCase(goal.timeline.replace(/-/g, ' ')) }}</h2>
        <h1 class="font-bold text-xl my-5">New Details</h1>
        <form @submit.prevent="submitForm">
            <h2 class="my-3">Name:</h2>
            <input class='focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm rounded-lg border-2 my-2 p-1 w-full' type="text" placeholder="Goal Title" v-model="formData.name"/>
            <h2 class="my-3">Description:</h2>
            <textarea class='focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm border-2 rounded-lg my-2 p-1 block w-full' v-model='formData.description' type="text" placeholder="Goal Description"/>
            <h2 class="my-3 ">Status:</h2>
            <select class='p-1 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm w-full border-2 rounded-lg' v-model='formData.status'>
                <option value="not-started">Not Started</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <h2 class="my-3 ">Timeline:</h2>
            <select class='p-1 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm w-full border-2 rounded-lg' v-model='formData.timeline'>
                <option value="long-term">Long Term</option>
                <option value="medium-term">Medium Term</option>
                <option value="short-term">Short Term</option>
            </select>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Update Goal
    </button>
        </form>
        </div>
    </div>
</template>

<script setup>
    import { reactive} from 'vue';
    
    const emits = defineEmits(['close', 'updatedGoal'])
    const props = defineProps({
    goal: {
        type: Object,
        required: true
    }})

    const formData = reactive({
        name: props.goal.name || '',
        status: props.goal.status || '',
        timeline: props.goal.timeline || '',
        description: props.goal.description || ''
    });

    function submitForm() {
        emits('updatedGoal', {
            id: props.goal.id, 
            ...formData})
        emits('close')
        
        formData.name = ''
        formData.status = ''
        formData.timeline = ''
        formData.description = ''
    }
    function toTitleCase(str){
    return str
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase()); 
}
</script>

<style scoped>

</style>