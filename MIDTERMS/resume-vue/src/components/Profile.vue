<!-- Code for the About component -->

<template>
    <div class="others mt-6" >
    <h1 class="green">{{ msg }}</h1>
    <h5>
      <i class="fa fa-phone"></i> 0922-949-5255 <br/>
    </h5>
    <h5>
        <i class="fa fa-home"></i> Angeles City, Pampanga <br />
    </h5>
    <h5>
         <i class="fa fa-envelope"></i> sarmientosof@gmail.com
    </h5>
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

h4, h5 {
  color:rgb(141, 84, 18);
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



