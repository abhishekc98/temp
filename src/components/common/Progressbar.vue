<template>
    <div class="w-full h-2 border border-green-400 bg-white rounded-xl overflow-hidden">
        <div class="h-full bg-green-400" :style="`width: ${progress}% !important`"> </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    progress: {
        type: Number,
        required: true
    }
})

const width = computed(() => {
    return 
})
</script>