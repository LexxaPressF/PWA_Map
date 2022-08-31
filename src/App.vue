<template>
  <div id="body">
    <map-frame/>
    <location-frame/>
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

#body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background: linear-gradient(135deg, #ebadb6 0%, #aceae1 100%);
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 1235px){
 #body{
   flex-direction: column;
 }
}  
  
</style>
