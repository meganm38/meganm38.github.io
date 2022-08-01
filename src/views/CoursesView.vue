<template>
  <article class="courses active" data-page="courses">
      <header>
        <h2 class="h2 article-title">Relevant Coursework</h2>
      </header>

      <section class="courses">
        <div class="courses-list" v-for="course in courses" :key="course.name">
          <router-link :to="{ name: 'CourseDetails', params: {name: course.name.replaceAll(' ', '-')}}">
            <SingleCourse :course="course"/>
          </router-link>
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