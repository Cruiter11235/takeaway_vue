import { defineStore } from "pinia";
export const useAlertsStore = defineStore('alert',{
    state:()=>({count:0}),
    getters:{
        double:(state)=>state.count*2
    },
    actions:{
        increment(){
            this.count++
        }
    }
})