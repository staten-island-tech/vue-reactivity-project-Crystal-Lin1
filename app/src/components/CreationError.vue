<template>
    <div class="fixed inset-0 bg-black bg-opacity-30">
    <div class="bg-red-200 w-2/12 m-auto rounded-lg shadow-lg mt-20">
        <div class="relative w-full">
            <h1 class="text-xl font-bold text-center pb-5 pt-2">ERROR</h1>
            <button @click="$emit('close')"class="absolute right-3 top-2 font-bold">X</button>
        </div>
        <h2 class="text-center py-2 px-10">Fill out all fields!</h2>
        <h2 class="text-center pb-7 pt-2 px-10">Try again!</h2>
    </div>
    </div>
</template>

<script setup>
const emits = defineEmits(['close'])
</script>

<style scoped>

</style>