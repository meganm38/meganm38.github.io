<template>
    <div class="project-item  active" data-filter-item data-category="web development">
        <a :href="project.link" target="_blank">

        <figure class="project-img">
        <div class="project-item-icon-box">
          <font-awesome-icon icon="fa-solid fa-eye" />
        </div>
        <img :src="imgPath">
        </figure>
        <h3 class="project-title">{{ project.name }}</h3>
        <p class="project-category">{{ joinedTags }}</p>
        </a>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ["project"],
    setup(props) {
        const joinedTags = computed(() => {
           return props.project.tags.join(", ")
        })

        const imgPath = computed(() => {
          return require("@/assets/" + props.project.name + ".png")
        })

        return { joinedTags, imgPath }
    }
}
</script>

<style>
.project-item.active {
  display: block;
  animation: scaleUp 0.25s ease forwards;
}

.project-item > a { width: 100%; }

.project-img {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 15px;
}

.project-img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 1;
  transition: var(--transition-1);
}

.project-item > a:hover .project-img::before { background: hsla(0, 0%, 0%, 0.5); }

.project-item-icon-box {
  --scale: 0.8;

  background: var(--jet);
  color: var(--orange-yellow-crayola);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(var(--scale));
  font-size: 20px;
  padding: 18px;
  border-radius: 12px;
  opacity: 0;
  z-index: 1;
  transition: var(--transition-1);
}

.project-item > a:hover .project-item-icon-box {
  --scale: 1;
  opacity: 1;
}

.project-item-icon-box ion-icon { --ionicon-stroke-width: 50px; }

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-1);
}

.project-item > a:hover img { transform: scale(1.1); }

.project-title,
.project-category { margin-left: 10px; }

.project-title {
  color: var(--white-2);
  font-size: var(--fs-5);
  font-weight: var(--fw-400);
  text-transform: capitalize;
  line-height: 1.3;
}

.project-category {
  color: var(--light-gray-70);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
}

@media (max-width: 450px) {
  .project-img {
    height: 200px;
}
}
</style>