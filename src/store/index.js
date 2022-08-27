import { createStore } from "vuex";


const store = createStore({
    actions: {
        addNewPoint(ctx, data){
            ctx.commit('addNewPoint', data)
        }
    },
    mutations: {
        addNewPoint(state, data){
            state.point = data
        }
    },
    state: {
        point: {}
    },
    getters: {
        getPoint: state => state.point
    }
});

export default store;