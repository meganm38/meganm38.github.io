<template>
    <div class="single-course">
        <div class="course-content" >

            <div class="course-meta">
                <span class="grade">Grade {{ course.grade }}/100</span>
                <span class="dot"></span>
                <time>{{ course.time }}</time>
            </div>

            <h3 class="h3 course-title"> {{ course.name }} - {{ course.description }}</h3>
        </div>

    </div>
</template>

<script>
export default {
    props: ["course"],
    
}
</script>

<style scoped>
.single-course {
  position: relative;
  background: var(--border-gradient-onyx);
  height: fit-content;
  box-shadow: var(--shadow-4);
  border-radius: 16px;
  z-index: 1;
  margin-bottom: 30px;
  animation: scaleUp 0.25s ease forwards;
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

.course-content { 
  padding: 15px; 
  cursor: pointer;  
}

.course-meta {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;
  margin-bottom: 10px;
}

.course-meta :is(.blog-category, time, .grade) {
  color: var(--light-gray-70);
  font-size: var(--fs-7);
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
  font-size: var(--fs-7);
  font-weight: var(--fw-300);
  line-height: 1.6;
  word-break: break-all;
}

h3 {
    font-size: var(--fs-4);
}
</style>