<template>
  <nav>
    <router-link to="/">Aulas Iniciais</router-link> |
    <router-link to="/outros/valor top">Outras Aulas</router-link> <br>
    <router-link to="/vuex">VUEX Aulas</router-link> | <router-link to="/composition">Compositon Aulas</router-link>
  </nav>
  <router-view/>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
