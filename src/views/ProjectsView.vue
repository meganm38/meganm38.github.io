<template>
  <div class="projects">
    <article class="portfolio active">

  <header>
    <h2 class="h2 article-title">Portfolio</h2>
  </header>

  <section class="projects">
    <div class="filter-list">
      <button class="filter-item" @click="filterChanged('All')" :class="[{ activeFilter:  'All' === filterSelected}]">All</button>
      <div v-for="tag in tags" :key="tag">
          <button class="filter-item" 
            @click="filterChanged(tag)" 
            :class="[{ activeFilter:  tag === filterSelected}]">
            {{ tag }}
          </button>
      </div>
    </div>

    <div class="filter-select-box">
      <button class="filter-select" :class="{active: dropDownActive}" @click="toggleDropDown">
       <span ref="filterLanguage">Select language</span><font-awesome-icon icon="fa-solid fa-chevron-down" />
      </button>
      <div class="select-list">
        <div class="select-item">
          <button @click="toggleDropDown(); filterChanged('All'); changeFilterLanguage('All')">All</button>
        </div>
      <div v-for="tag in tags" :key="tag" class="select-item">
          <button 
            @click="filterChanged(tag); toggleDropDown(); changeFilterLanguage(tag)" 
            :class="[{ activeFilter:  tag === filterSelected}]">
            {{ tag }}
          </button>
      </div>

      </div>

        </div>

    <div class="project-list" v-for="project in filteredProjects" :key="project.name">
      <div class="child"><SingleProjectVue :project="project"/></div>
    </div>
  </section>

  </article>
  </div>
</template>

<script>
import projects from "@/db/projects.json"
import SingleProjectVue from "@/components/SingleProject.vue"
import SingleProject from "../components/SingleProject.vue"
import { computed } from '@vue/runtime-core'
import { ref } from "vue"

export default {
  components: { SingleProjectVue, SingleProject },
  setup() {
  const tags = computed(() => {
    let set = new Set()
    projects.forEach(project => {
    project.tags.forEach(tag => set.add(tag))
    });
    return [...set]
  })


  const filterSelected = ref("All")
  const filteredProjects  = computed(() => {
    if (filterSelected.value === "All") {
      return projects
    } else {
      return projects.filter((project) => {
        return project.tags.includes(filterSelected.value)
    })
    }
  })

  const filterChanged = (filter) => {
    filterSelected.value = filter
  }

  const dropDownActive = ref(false)

  const toggleDropDown = () => {
    dropDownActive.value = !dropDownActive.value
  }

  const filterLanguage = ref(null)

  const changeFilterLanguage = (filter) => {
    filterLanguage.value.innerHTML = filter
  }
  return { projects, tags, filterSelected, filterChanged, filteredProjects, dropDownActive, toggleDropDown, filterLanguage, changeFilterLanguage }
  }
}
</script>

<style>
  .portfolio .article-title { 
    margin-top: 80px;
  }

  .portfolio {
    width: 100%;
    overflow: hidden;
  }

  .filter-list {
    display: flex;
    gap: 25px;
    padding-left: 5px;
    margin-bottom: 30px;
  }

  .filter-item {
    color: var(--light-gray);
    font-size: var(--fs-5);
    transition: var(--transition-1);
  }

  .project-list {
    display: grid;
    grid-template-columns: 1fr; 
    gap: 30px;
    margin-bottom: 30px;
  }
  .activeFilter {
    color: var(--orange-yellow-crayola);
  }

  .filter-select-box {
    display: none;
    position: relative;
    margin-bottom: 25px;
  }

.filter-select {
  background: var(--eerie-black-2);
  color: var(--light-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
}

.select-list {
  background: var(--eerie-black-2);
  position: absolute;
  top: calc(100% + 6px);
  width: 100%;
  padding: 6px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.15s ease-in-out;
}

.filter-select.active + .select-list {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.filter-select.active + .select-list {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.select-item button {
  background: var(--eerie-black-2);
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  text-transform: capitalize;
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
}

.select-item button:hover { --eerie-black-2: hsl(240, 2%, 20%); }

@media (max-width: 450px) {
  .filter-list {
    display: none;
  }

  .filter-select-box {
    display: block;
  }
}
</style>