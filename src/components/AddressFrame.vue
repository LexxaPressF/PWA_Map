<template>
    <div class="address">
        <div class="wrapper">
            <h1> <slot name="name"></slot> </h1>
            <div class="data"> <slot name="data"></slot> </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddressFrame"
    }
</script>

<style scoped>
.address{
    width: 220px;
    height: 254px;
    border-radius: 30px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
    -15px -15px 30px #ffffff;
}

.wrapper{
padding: 16px;
}

.data{
    height: 110px;
    overflow-y: auto;
}
</style>