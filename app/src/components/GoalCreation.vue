<template>
    <div class="fixed inset-0 bg-black bg-opacity-30">
        <div class="flex p-10 flex-col border-2 shadow-lg bg-white rounded-lg w-4/12 z-3 m-auto mt-5">
        <div class="relative w-full">
            <h1 class="font-bold text-center text-xl">Goal Creation</h1>
            <button @click='$emit("close")' class="absolute right-0 top-0 font-bold">X</button>
        </div>
        <form @submit.prevent="submitForm">
            <h2 class="my-3  font-bold">Name:</h2>
            <input class='focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm rounded-lg border-2 my-2 p-1 w-full' type="text" placeholder="Goal Title" v-model="formData.name"/>
            <h2 class="my-3   font-bold">Description:</h2>
            <textarea class='focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm border-2 rounded-lg my-2 p-1 block w-full' type="text" placeholder="Goal Description" v-model="formData.description"/>
            <h2 class="my-3  font-bold">Status:</h2>
            <select class='p-1 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm w-full border-2 rounded-lg' v-model="formData.status">
                <option value="not-started">Not Started</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <h2 class="my-3 font-bold">Timeline:</h2>
            <select class='p-1 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm w-full border-2 rounded-lg' v-model="formData.timeline">
                <option value="long-term">Long Term</option>
                <option value="medium-term">Medium Term</option>
                <option value="short-term">Short Term</option>
            </select>
            <button type="submit" class='mt-10 block hover:bg-blue-200 text-blue-500 m-auto w-7/12 p-2 rounded-lg bg-white border-2 border-blue-500'>Create Goal</button>
        </form>
        </div>
    </div>
</template>

<script setup>
    import { reactive} from 'vue';
    const emits = defineEmits(['close', 'goalsArray'])
    
    const formData = reactive(
        {
            'name': '',
            'status': '',
            'timeline': '',
            'description': ''
        }
    );
  
    function submitForm() {
        emits('goalsArray', formData)
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