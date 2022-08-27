<template>
    <div class="map">
        <div class='wrapper'>
            <div id="mapContainer"/>
        </div>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {addressByCoordinates} from "../services/location";


    export default {
        name: "MapFrame",
        data (){
            return{
                map: {},
                center: [59.926503, 30.338712]
            }
        },
        methods: {
            initMap: function () {
                const mapDiv = L.map('mapContainer').setView(this.center,13)
                this.map = mapDiv
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                    {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.map);
                this.map.on('click', this.mapClick)
            },
            mapClick: function (e) {
                const myIcon = L.icon({
                    iconUrl: require('../../public/assets/location.svg'),
                    iconSize: 28
                })
                const coord = {
                    latitude: e.latlng.lat,
                    longitude: e.latlng.lng
                }
                addressByCoordinates(coord).then((address) => {this.$store.dispatch('addNewPoint', address)})
                L.marker(e.latlng, {icon: myIcon}).addTo(this.map)
            }
        },
        mounted() {
            this.initMap();
        }
    }
</script>

<style scoped>

 .map{
     grid-column: 1;
     grid-row: 2;
     margin: 5px;
 }


 #mapContainer {
     width: 96%;
     height: 96%;
 }

.wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
    -15px -15px 30px #ffffff;
    width: 100%;
    height: 100%;
}
</style>