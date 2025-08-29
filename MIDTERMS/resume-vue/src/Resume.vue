<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Profile from './components/Profile.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
</script>

<template>
  <header class = mt-6>
    <img alt="Profile Photo" class="photo" src="./assets/SARMIENTO.jpg" width="200" height="125" />
    <div class="wrapper">
      <HelloWorld msg="hello, i'm" />
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
     <div id="app">
      <h1> {{ msg }}</h1>

      <!-- Demo 1. Insert the component name. as shown below -->
       <profile></profile>
     </div>

     <!-- <TheWelcome /> -->
     <div id="app">
     </div>
  </main>

  <Education></Education>
  <Skills></Skills>
</template>

<style scoped>

.photo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 50%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .photo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
