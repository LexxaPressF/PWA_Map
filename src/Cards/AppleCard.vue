<template>
    <div class='apple card'>
        <div class="tools">
            <div class="circle">
                <span class="red box"></span>
            </div>
            <div class="circle">
                <span class="yellow box"></span>
            </div>
            <div class="circle">
                <span class="green box"></span>
            </div>
            <div class="cardName">
                <slot name="cardName"></slot>
            </div>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppleCard"
    }
</script>

<style scoped>
    .apple{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(255,255,255,.6);
        backdrop-filter: blur(5px);
        border-radius: 30px;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .tools {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 9px;
        margin-left: 20px;
    }

    .circle {
        padding: 0 4px;
    }

    .box {
        display: inline-block;
        align-items: center;
        width: 10px;
        height: 10px;
        padding: 1px;
        border-radius: 50%;
    }

    .red {
        background-color: #ff605c;
    }

    .yellow {
        background-color: #ffbd44;
    }

    .green {
        background-color: #00ca4e;
    }

    .cardName{
        margin-left: 10px;
        font-size: 1.3rem;
        font-family: Roboto Thin;
    }

    .content{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
</style>