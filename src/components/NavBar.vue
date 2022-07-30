<template>
  <nav class="navbar">
        <ul class="navbar-list">
  
          <li class="navbar-item">
            <router-link :to="{ name: 'home'}" active-class="active">About</router-link>
          </li>

          <li class="navbar-item">
            <router-link :to="{ name: 'Courses'}" active-class="active">Courses</router-link>
          </li>

          <li class="navbar-item">
            <router-link :to="{ name: 'Projects'}" active-class="active">Projects</router-link>
          </li>

          <li class="navbar-item">
            <router-link :to="{ name: 'Contact'}" active-class="active">Contact</router-link>
          </li>
        </ul>

      </nav>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
  position: absolute;
	background: hsla(240, 1%, 17%, 0.75);
	backdrop-filter: blur(10px);
	border: 1px solid var(--jet);
	z-index: 5;
  bottom: auto;
  top: auto;
  left: auto;
  width: max-content;
  border-radius: 20px 0px 20px 0px;
  padding: 0 20px;
  box-shadow: none;
}

.navbar-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 0 10px;
  gap: 20px;
}

.navbar a {
  --fs-8: 14px; 
	color: var(--light-gray);
	font-size: var(--fs-8);
	padding: 20px 7px;
	transition: color var(--transition-1);
}

.navbar a:hover,
.navbar a:focus,
.navbar a.active {
  color: var(--orange-yellow-crayola);
}

</style>