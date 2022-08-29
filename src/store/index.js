import { createStore } from "vuex";


const store = createStore({
    actions: {
        addNewPoint(ctx, data){
            ctx.commit('addNewPoint', data)
        }
    },
    mutations: {
        addNewPoint(state, data){
            state.lastPoint = data
            state.listOfPoints.push(data)
        }
    },
    state: {
        lastPoint: {},
        listOfPoints: []
    },
    getters: {
        getLastPoint: state => state.lastPoint,
        getlistOfPoints: state => state.listOfPoints
    }
});

export default store;