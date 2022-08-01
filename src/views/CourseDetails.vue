<template>
<article class="courses active" data-page="courses">
    <header>
        <h2 class="h2 article-title">{{ course.name }}</h2>
    </header>

    <p>Grade: {{ course.grade }}/100</p>
    <p class="thoughts">Overall Thoughts: </p>
    <div class="text">
        <p v-if="course.thoughts">{{ course.thoughts }}</p>
        <p v-else>To be written...</p>
    </div>
</article>
</template>

<script>
import { computed } from '@vue/runtime-core'
import courses from '../db/courses.json'

export default {
    props: ["name"],
    setup(props) {
        const course = computed(() => {
            const courseName = props.name.replaceAll('-', " ")
            return courses.find((each) => each.name === courseName)
        })

        return { course }
    }
}
</script>

<style scoped>
    p {
        color: var(--light-gray);
        font-size: var(--fs-5);
        font-weight: var(--fw-300);
        line-height: 1.6;
    }

    .thoughts {
        margin: 20px auto;
    }

    .text {
        background: var(--border-gradient-onyx);
        height: fit-content;
        box-shadow: var(--shadow-4);
        border-radius: 16px;
        z-index: 1;
        position: relative;
        padding: 15px;
    }

    .text:before {
        content: "";
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        background: var(--eerie-black-1);
        z-index: -1;
    }

</style>