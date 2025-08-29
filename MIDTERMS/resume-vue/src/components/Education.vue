<!-- Code for the About component -->

<template>
    <h4>Education</h4>
<div class="card" style="width: 18rem;">
  <img src="E:\2169SATS\MIDTERMS\resume-vue\src\assets\Logo.gif" class="card-img-top" width="100" height="50">
  <div class="card-body">
    <h5 class="card-title">Holy Angel University</h5>
    <p class="card-text">Elementary | 2011-2016 | Honor Student<br/>
    High School | 2017 - 2022 | Consistent Scholar<br/>
    College | 2022 - Current | Consistent PL</p>
  </div>
</div>
</template>

<style scoped>
.card {
    margin-top: 50px;
}
.card-img-top {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
.container {
  display: flex; /* Makes the container a flex container */
  gap: 20px; /* Adds space between the divs */
}

h4 {
  color:rgb(141, 84, 18);
  margin-top: 40px;
  font-weight: bold;
}


@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>





