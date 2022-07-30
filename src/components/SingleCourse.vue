<template>
    <div class="single-course">
        
        <figure class="course-banner-box">
        </figure>

        <div class="course-content">

            <div class="course-meta">
                <span class="grade">Grade {{ course.grade }}/100</span>
                <span class="dot"></span>
                <time>{{ course.time }}</time>
            </div>

            <h3 class="h3 course-title"> {{ course.title }}</h3>
            <p class="course-text">
            {{ shortText }}
            </p>

        </div>

    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ["course"],
    setup(props) {
        const shortText = computed(() => {
          return props.course.contentText.substring(0, 200) + " ..."
        })
        return { shortText }
    }
}
</script>

<style scoped>
.single-course {
  position: relative;
  background: var(--border-gradient-onyx);
  height: 100%;
  box-shadow: var(--shadow-4);
  border-radius: 16px;
  z-index: 1;
  margin-bottom: 30px;
}

.single-course::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  background: var(--eerie-black-1);
  z-index: -1;
}

.course-banner-box {
  width: 100%;
  height: 100px;
  border-radius: 12px;
  overflow: hidden;
}

.course-banner-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-1);
}

.single-course:hover .blog-banner-box img { transform: scale(1.1); }

.course-content { padding: 15px; }

.course-meta {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;
  margin-bottom: 10px;
}

.course-meta :is(.blog-category, time, .grade) {
  color: var(--light-gray-70);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
}

.course-meta .dot {
  background: var(--light-gray-70);
  width: 4px;
  height: 4px;
  border-radius: 4px;
}

.course-title {
  margin-bottom: 10px;
  line-height: 1.3;
  transition: var(--transition-1);
}

.single-course:hover .course-title { color: var(--orange-yellow-crayola); }

.course-text {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
}
</style>