<template>
    <div>
        <h1>Current Details</h1>
        <h2 class="underline text-lg font-bold">{{ goal.name }}</h2>
       <p class="italic mt-10">Description: {{ goal.description }}</p>
       <h2 class="mt-10">{{ toTitleCase(goal.status.replace(/-/g, ' '))}}</h2>
       <h2>{{ toTitleCase(goal.timeline.replace(/-/g, ' ')) }}</h2>
        <h1>Change Details</h1>
        <form @submit.prevent="submitForm">
            <h2 class="my-3  font-bold">Name:</h2>
            <input class='focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm rounded-lg border-2 my-2 p-1 w-full' type="text" placeholder="Goal Title" v-model="formData.name"/>
            <h2 class="my-3   font-bold">Description:</h2>
            <textarea class='focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm border-2 rounded-lg my-2 p-1 block w-full' v-model='formData.description' type="text" placeholder="Goal Description"/>
            <h2 class="my-3  font-bold">Status:</h2>
            <select class='p-1 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm w-full border-2 rounded-lg' v-model='formData.status'>
                <option value="not-started">Not Started</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <h2 class="my-3 font-bold">Timeline:</h2>
            <select class='p-1 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm w-full border-2 rounded-lg' v-model='formData.timeline'>
                <option value="long-term">Long Term</option>
                <option value="medium-term">Medium Term</option>
                <option value="short-term">Short Term</option>
            </select>
        </form>
    </div>
</template>

<script setup>
    import { reactive} from 'vue';
    const emits = defineEmits(['close'])
    const props = defineProps({
    goal: {
        type: Object,
        required: true
    }})

    const formData = reactive(
        {
            'name': '',
            'status': '',
            'timeline': '',
            'description': ''
        }
    );
    function submitForm() {
        emits('updatedGoal', formData)
        emits('close')
        formData.value = {
            name: '',
            status: '',
            timeline: ''
        }
    }

</script>

<style scoped>

</style>