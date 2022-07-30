<template>
  <div class="about">
    <article class="about active" data-page="about">

        <header>
          <h2 class="h2 article-title">About me</h2>
        </header>

        <section class="about-text">
          <p>
           I am Menghan Ma, but feel free to call me Megan. Currently working hard to become a skilled full stack developer.
          </p>
          <p>
            Areas of interest:
          </p>
        </section>

        <section class="service">
          <h3 class="h3 service-title">What I'm doing</h3>
          <div class="service-list">
            <ExperienceViewVue class="experience"
            imgPath="https://firebasestorage.googleapis.com/v0/b/mywebsite-6af0e.appspot.com/o/icon-dev.svg?alt=media&token=1374a3c3-8ae5-4020-adb5-b1fa81df4129" 
            title="Interning at Texavie"  
            description="Interning at Texavie as Software Developer, working on ios software development and web development."/>
            
            <ExperienceViewVue class="experience"
            imgPath="https://firebasestorage.googleapis.com/v0/b/mywebsite-6af0e.appspot.com/o/icon-dev.svg?alt=media&token=1374a3c3-8ae5-4020-adb5-b1fa81df4129" 
            title="Interning at Texavie"  
            description="Interning at Texavie as Software Developer, working on ios software development and web development."/>
          </div>
        </section>
      </article>
  </div>
</template>

<script>
  import ExperienceViewVue from "@/components/ExperienceView.vue";
  export default {
    components: { ExperienceViewVue }
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
</style>
