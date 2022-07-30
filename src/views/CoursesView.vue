<template>
  <article class="courses active" data-page="courses">
      <header>
        <h2 class="h2 article-title">Relevant Courses</h2>
      </header>

      <section class="courses">

        <div class="courses-list" v-for="course in courses" :key="course.title">
          <SingleCourse :course="course"/>
        </div>
      </section>

    </article>
</template>

<script>
import courses from '../db/courses.json'
import SingleCourse from '../components/SingleCourse.vue'
export default {
    components: { SingleCourse },
    setup() {
      return { courses }
    }
}
</script>

<style>
.courses .article-title { 
  margin-top: 80px;
}
.courses { margin-bottom: 10px; }




</style>