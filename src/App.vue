<template>
	<div class="main">
		<SideIntroduction />
		<div class="main-content">
			<NavBar />
			<router-view/>
		</div>
	</div>
</template>

<script>
import SideIntroduction from "../src/components/SideIntroduction.vue"
import Navbar from "../src/components/NavBar.vue"
import NavBar from "../src/components/NavBar.vue"

export default {
  components: { SideIntroduction, Navbar, NavBar }
}
</script>

<style>
  .main {
    max-width: 1200px;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 25px;
    padding: 80px 30px;
  }
  .main-content {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 1024px) {
    .main{
      display: grid;
      grid-template-columns: 1fr;
      padding: 10px;
      gap: 16px;
    }
    .main-content {
      margin: auto;
    }

    SideIntroduction {
      margin: auto;
    }
  }
</style>