import {reactive} from 'vue'

export const goalsArray = reactive({
    array: {
            'name': '',
            'status': '',
            'timeline': '',
            'description': ''
        },
    createGoal(formData) {
        goalsArray = {...formData}
    }
})