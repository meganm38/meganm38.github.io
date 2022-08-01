<template>
  <div class="about">
    <article class="about active" data-page="about">

        <header>
          <h2 class="h2 article-title">About me</h2>
        </header>

        <section class="about-text">
          <p>
           I am Menghan Ma, but feel free to call me Megan.
          </p>
        </section>

        <section class="service">
          <h3 class="h3 service-title">What I'm doing</h3>
          <div class="service-list" v-for="experience in about" :key="experience.title">
            <ExperienceViewVue class="experience" :experience="experience"/>
          </div>
        </section>
      </article>
  </div>
</template>

<script>
  import ExperienceViewVue from "@/components/ExperienceView.vue";
  import about from "@/db/about.json"

  export default {
    components: { ExperienceViewVue },
    setup() {
      return { about }
    }
}

</script>
<style scoped>
.about .article-title { 
  margin-top: 80px;
}

.about-text {
  color: var(--light-gray);
  font-size: var(--fs-5);
  font-weight: var(--fw-300);
  line-height: 1.6;
}

.about-text p { margin-bottom: 30px; }

/**
 * #service 
 */

.service { 
  margin-bottom: 35px; 
  margin-top: 40px;
}

.service-title { margin-bottom: 20px; }

.service-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
}
.experience {
  transition: all ease 0.2s;
}
.experience:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  transform: scale(1.02);
  transition: all ease 0.2s;
}

@media (max-width: 450px) {
  .service-list {
    padding: 10px;
  }
}
</style>
