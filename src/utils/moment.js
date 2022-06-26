import _moment from 'moment/min/moment-with-locales'
import 'moment/locale/pt-br.js'

export default function moment() {
    return function (date) {
        if (date == undefined) {
            return _moment().locale('pt-br')
        }
        return _moment(date).locale('pt-br')
    }
}