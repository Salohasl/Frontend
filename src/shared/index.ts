import {defineStore} from "pinia";
import {ref} from "vue";

interface Store {
    alert: boolean;
}

export const useStore = defineStore('store', () => {
    const storeSave = ref<Store>({
        alert: false,
    })

    const alerts = () => {
        if (storeSave.value.alert) {
            alert('Ты позвонил)))');
        }
    }

    return {
        storeSave,
        alerts,
    }
})