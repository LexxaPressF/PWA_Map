<template>
  <div id="app">
    <header/>
    <map-frame/>
    <location-frame/>
    <footer/>
  </div>
</template>

<script>
import MapFrame from "@/components/MapFrame";
import LocationFrame from "@/components/LocationFrame";

export default {
  name: 'App',
  components: {
    LocationFrame,
    MapFrame
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background: #e6e6e6;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 700px auto;
  grid-template-rows: 150px auto 150px;
}
</style>
