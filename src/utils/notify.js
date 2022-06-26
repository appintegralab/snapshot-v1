import { Notify } from 'quasar'

const notify = {
    error(msg) {
        Notify.create({
            position: 'top-right',
            message: msg,
            color: 'red-5',
            icon: 'error',
            timeout: 2000,
            actions: [{ icon: 'close', color: 'white' }]
        })
    },
    success(msg) {
        Notify.create({
            position: 'top-right',
            message: msg,
            color: 'green-5',
            icon: 'check',
            timeout: 2000,
            actions: [{ icon: 'close', color: 'white' }]
        })
    }
}
export default notify