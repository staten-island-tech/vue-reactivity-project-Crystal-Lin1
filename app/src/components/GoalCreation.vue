<template>
    <div>
        <div class="flex flex-col items-center border-2 bg-gray-100 p-5 rounded-lg w-4/12 z-3 m-auto mt-5">
        <div class="relative w-full">
            <h1 class="font-bold text-center">Goal Creation</h1>
            <button @click='$emit("close")' class="absolute right-0 top-0 font-bold">X</button>
        </div>
        <form @submit.prevent="onSubmit" @submit="submitForm(formData)">
            <input class='rounded-lg my-2 p-1' type="text" placeholder="Goal Title" v-model="formData.name"/>
            <h2 class="my-3">Status:</h2>
            <select class='rounded-lg' v-model="formData.status">
                <option value="not-started">Not Started</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <h2 class="my-3">Timeline:</h2>
            <select class='rounded-lg' v-model="formData.timeline">
                <option value="long-term">Long Term</option>
                <option value="medium-term">Medium Term</option>
                <option value="short-term">Short Term</option>
            </select>
            <button type="submit" class='block hover:bg-blue-200 text-blue-500 mt-2 m-auto w-7/12 p-2 rounded-lg bg-white border-2 border-blue-500'>Create Goal</button>
        </form>
        </div>
        
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const emits = defineEmits(['close', 'goalsArray'])
    const goals = ref([])
    const formData = ref(
        {
            'name': '',
            'status': '',
            'timeline': ''
        }
    );
  
    function submitForm(formData) {
        emits('goalsArray', formData)

        addGoal(formData)
        emits('close')
    }
    function addGoal(goal) {
        goals.value.push({...goal});
        formData.value = [
            {
                'name': '',
                'status': '',
                'timeline': ''
            }
        ];
    }
</script>

<style scoped>

</style>