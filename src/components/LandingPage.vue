<template>
<div class="w-screen h-screen grid grid-cols-5">
    <div class="col-span-1">
        <select v-model="selectedOption" @change="onChange" placeholder="Select">
            <option v-for="(option, index) in progressOptions" :key="'option' + index" :value="option.value">
                {{ option.title }}
            </option>
        </select>
    </div>
    <div class="col-span-4">
        <section class="p-6 flex flex-wrap gap-5">
            <Card 
                v-for="(data, index) in courseData"
                :key="'card-' + data.courseId"
                :course-id="data.courseId"
                :course-name="data.courseName"
                :theme="data.theme"
                :slug="data.slug"
                :completion-percentage="data.completionPercentage"
                :remaining-time="data.remainingTime"
                :s-no="data.sNo"
                :is-free-preview="data.isFreePreview"

            />
        </section>
    </div>
</div>

</template>


<script setup>
import { ref } from 'vue'
import Card from './Card.vue';
import {COURSE_DATA} from '../constants/courseData';
import { getFilteredCourseData } from '../service/filter'

const progressOptions = [
    {
        id: 1,
        title: '100% to 0%',
        value: { min: 0, max: 100, sortBy: 'desc' }
    },
    {
        id: 2,
        title: '0% to 100%',
        value: { min: 0, max: 100, sortBy: 'asc' }
    },
    {
        id: 3,
        title: 'Completed',
        value: { min: 100, max: 100, sortBy: 'asc' }
    },
]

const selectedOption = ref(null)
const courseData = ref(COURSE_DATA)

// methods
const onChange = () => {
    const { min, max, sortBy } = selectedOption.value;
    courseData.value = getFilteredCourseData(min, max, sortBy)
}
</script>


<style scoped>

select {
    @apply w-52 h-10 border border-green-400 bg-green-100
}
</style>