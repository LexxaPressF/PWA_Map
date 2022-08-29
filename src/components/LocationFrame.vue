<template>
    <div class="location">
        <div class="wrapper">
                <address-frame>
                    <template v-slot:name> Домашний адресс </template>
                    <template v-slot:data> {{address.road}}, дом {{address.house_number}}</template>
                </address-frame>
                <button @click="fetchAddress"><h4>Получить адресс</h4></button>
                <address-frame>
                    <template v-slot:name> Последняя отмеченная точка </template>
                    <template v-slot:data> {{lastPoint.road}}, дом {{lastPoint.house_number}}</template>
                </address-frame>
        </div>
    </div>
</template>

<script>
    import * as locationService from '../services/location';
    import { mapGetters } from 'vuex'
    import AddressFrame from "@/components/AddressFrame";

    export default {
        components: {AddressFrame},
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
                lastPoint: 'getLastPoint'
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
    grid-column: 2;
    grid-row: 2;
    width: 100%;
    height:100%;
}

.wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

button {
    color: #090909;
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    transition: all .3s;
    box-shadow: 6px 6px 12px #c5c5c5,
    -6px -6px 12px #ffffff;
}

button:hover {
    border: 1px solid white;
}

button:active {
    box-shadow: 4px 4px 12px #c5c5c5,
    -4px -4px 12px #ffffff;
}
</style>
