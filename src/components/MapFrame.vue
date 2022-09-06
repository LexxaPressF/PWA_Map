<template>
    <div class="map">
        <div class="wrapper">
            <apple-card>
                <template v-slot:cardName> Карта </template>
                <template v-slot:content>
                    <div id="mapContainer"/>
                </template>
            </apple-card>
        </div>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {addressByCoordinates} from "../services/location";
import AppleCard from "@/Cards/AppleCard";


    export default {
        name: "MapFrame",
        components: {AppleCard},
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
                L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
                    {
                    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
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
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     height: 100%;
 }


 #mapContainer {
     width: 96%;
     height: 98%;
 }

.wrapper{
    width: 97%;
    height: 97%;
}

 @media screen and (max-width: 1235px){
     .map {
         /*flex-grow: 2;*/
     }
 }
</style>