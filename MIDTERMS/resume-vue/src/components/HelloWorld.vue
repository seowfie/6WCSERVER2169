<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
     <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Sofia Sarmiento
    </h3>
    <h4>
      Web Development Student
    </h4>
  </div>
</template>

<style scoped>
.container {
  display: flex; /* Makes the container a flex container */
  gap: 20px; /* Adds space between the divs */
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 40px;
  color: rgb(74, 225, 245);
}

h4 {
  color:rgb(223, 148, 63);
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.greetings .green {
  color: rgb(173, 98, 13);
  font-size: 24px;
  line-height: 0%;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
