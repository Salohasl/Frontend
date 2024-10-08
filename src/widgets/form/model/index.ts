import {Ref} from "vue";

export function validation(valid : Ref<boolean> , value : string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(value)) {
        valid.value = true;
    } else {
        valid.value = false;
    }
}