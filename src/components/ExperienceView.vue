<template>
    <div class="service-item">
        <div class="service-icon-box">
            <img :src="imgPath" />
        </div>

        <div class="service-content-box">
            <h4 class="h4 service-item-title">{{ experience.title }}</h4>
            <p class="service-item-text">
                {{ experience.description }}
            </p>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props:["experience"],
    setup(props) {
      const imgPath = computed(() => {
        return require("@/assets/" + props.experience.icon + ".svg")
      })

      return { imgPath }
    }
}
</script>

<style>
.service-item {
  position: relative;
  background: var(--border-gradient-onyx);
  padding: 40px 20px;
  border-radius: 14px;
  box-shadow: var(--shadow-2);
  z-index: 1;
}

.service-item::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
}

.service-icon-box { margin-bottom: 10px; }

.service-icon-box img {
  margin: auto; 
  width: 40px;
  height: 32px;  
}

.service-content-box { text-align: center; }

.service-item-title { margin-bottom: 7px; }

.service-item-text {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-3);
  line-height: 1.6;
}
</style>