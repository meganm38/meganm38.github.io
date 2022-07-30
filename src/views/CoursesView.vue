<template>
  <article class="courses active" data-page="courses">
      <header>
        <h2 class="h2 article-title">Relevant Courses</h2>
      </header>

      <section class="courses">

        <div class="courses-list">
          
        </div>
      </section>

    </article>
</template>

<script>
import SingleCourseVue from '@/components/SingleCourse.vue'
import SingleCourse from '@/components/SingleCourse.vue'
export default {
    components: [SingleCourseVue],
    components: { SingleCourse }
}
</script>

<style>
.courses .article-title { 
  margin-top: 80px;
}
.courses { margin-bottom: 10px; }




</style>