<template>
    <div>
        <h1>Goal Creation</h1>
        <form @submit.prevent="addGoal(formData)">
            <input type="text" placeholder="Goal Title" v-model="formData.name"/>
            <h2>Status:</h2>
            <select v-model="formData.status">
                <option value="not-started">Not Started</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <h2>Timeline:</h2>
            <select v-model="formData.timeline">
                <option value="long-term">Long Term</option>
                <option value="medium-term">Medium Term</option>
                <option value="short-term">Short Term</option>
            </select>
            <button type="submit">Create Goal</button>
        </form>
        <!--broken bc the goal stuff isnt made yet-->
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const goals = ref([])
    const formData = ref(
        {
            'name': '',
            'status': '',
            'timeline': ''
        }
    );
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