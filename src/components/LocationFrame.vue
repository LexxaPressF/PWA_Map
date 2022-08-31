<template>
    <div class="location">
        <div class="wrapper">
            <div class="home point">
                <apple-card class="card">
                    <template v-slot:cardName> Домашний адресс </template>
                    <template v-slot:content>
                        {{address.road}}, дом {{address.house_number}}
                    </template>
                </apple-card>
                <button @click="fetchAddress">Где Я?</button>
            </div>
            <div class="user point">
                <apple-card class="card">
                    <template v-slot:cardName> Последняя точка </template>
                    <template v-slot:content>
                        {{lastPoint.road}}, дом {{lastPoint.house_number}}
                    </template>
                </apple-card>
                <apple-card class="card">
                    <template v-slot:cardName> Все точки </template>
                    <template v-slot:content>
                        <p v-for="point in listOfPoints" :key="listOfPoints.indexOf(point)">
                            {{point.road}}, {{point.house_number}}
                        </p>
                    </template>
                </apple-card>
            </div>
        </div>
    </div>
</template>

<script>
    import * as locationService from '../services/location';
    import { mapGetters } from 'vuex'

    import AppleCard from "@/Cards/AppleCard";

    export default {
        components: {AppleCard},
        data() {
            return {
                address: {},
                error: null,
                geolocationSupported: 'geolocation' in navigator,
                loading: false,
            };
        },
        computed: {
            ...mapGetters({
                lastPoint: 'getLastPoint',
                listOfPoints: 'getListOfPoints'
            }),
        },
        methods: {
            async fetchAddress() {
                try {
                    this.setLoadingState();
                    this.address = await locationService.currentAddress();
                    // Reset the loading state after fetching the address.
                    this.loading = false;
                } catch (error) {
                    this.setErrorState(error);
                }
            },
            setErrorState(error) {
                this.error = error;
                this.loading = false;
            },
            setLoadingState() {
                this.error = null;
                this.loading = true;
            },
        },
    }
</script>

<style scoped>

.location{
    width: 80%;
    height: 90%;
}

.wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.card{
    height: 180px;
    width: 260px;
}

.point{
    display: flex;
    flex-direction: row;
    gap:50px;
    align-items: center;
    justify-content: center;
}

button {
    width: 200px;
    height: 60px;
    padding: 17px 40px;
    border-radius: 28px;
    border: 0;
    background-color: rgba(255,255,255,.6);
    backdrop-filter: blur(5px);
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: all .5s ease;
    font-size: 1.1rem;
    font-family: Roboto Thin;
}

button:hover {
    letter-spacing: 3px;
    background: linear-gradient(135deg, #aceae1 0%, #ebadb6 100%);
    filter: hue-rotate(720deg);
    /*color: hsl(0, 0%, 100%);*/
    box-shadow: rgb(235, 173, 182) 0px 7px 29px 0px;
}

button:active {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
}


@media screen and (max-width: 1235px){
    .location {
        width: 100vw;
        height: 300px;
        flex-grow: 1;
    }
    .wrapper{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
    }
    .point{
        flex-direction: row;
        width: 550px;
        justify-content: space-between;
        align-content: space-around;
    }
    .card{
        height: 100px;
    }
    button{
        width: 250px;
    }
}
</style>
