<template>
    <div class="rounded-lg overflow-hidden shadow-lg border w-72 relative">
        <div v-if="$props.isFreePreview" class="free-preview relative text-white">
            FREE PREVIEW
        </div>
        <div class="border-b h-[10rem]">
            <div class=" h-full px-10 py-10 text-white font-bold text-xl text-center flex items-center" :class="$props.theme">
                {{ $props.courseName }}
            </div>
        </div>
        <section class="px-5 py-4 h-[12rem]">
            <template v-if="$props.completionPercentage !== null && $props.remainingTime !== null">
                <ProgressBar :progress="$props.completionPercentage" />
                <div class="mt-1 text-xs">
                    {{ $props.completionPercentage }} % completed
                </div>
                <div class="mt-4 text-sm">
                    {{ $props.remainingTime }}  remaining
                </div>
            </template>

            <div class="relative">
                <template v-if="$props.isFreePreview">
                    <button type="button" class="h-10 rounded-lg w-52 border-[4px] font-bold border-green-500 text-green-500">
                        Course Info
                    </button>
                    <button type="button" class="mt-4  h-10 w-52 rounded-lg font-bold bg-green-500 text-white">
                        Go to Cart
                    </button>
                </template>
            </div>
            <PlayIcon class="h-10 w-10 absolute right-3 bottom-3"/>
        </section>


    </div>
</template>

<script setup>
import ProgressBar from './common/Progressbar.vue';
import PlayIcon from '../assets/PlayIcon.vue'

const props = defineProps({
    courseId: {
        type: Number,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    completionPercentage: {
        type: Number,
        default: null
    },
    remainingTime: {
        type: String,
        required: null
    },
    sNo: {
        type: Number,
        default: ''
    },
    isFreePreview: {
        type: Boolean,
        default: null
    }
})
</script>

<style>
.abc {
    @apply bg-gradient-to-t from-pink-400 to-orange-300
}
.xyz {
    @apply bg-gradient-to-r from-blue-400 to-blue-950
}

.free-preview {
    position:absolute;
    left:0;
    top: 0;
    width:120px;
    padding:10px 10px;
    background-color:black;
    font-size:12px;
    font-weight: 700;
    white-space: nowrap;
    height: 35px
}

.free-preview:after {
    width:40px;
    background:black;
    position:absolute;
    height:100%;
    
    content:'';
    right:-20px;
    top:0;
    transform: skew(135deg);
}
</style>