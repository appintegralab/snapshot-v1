import { rdb } from "../firebase/firebase.js"
import { ref, get } from "firebase/database"

export default function getFks(snapshot) {
    let entity = snapshot.entity
    let path = snapshot.path
    let rootPath = snapshot.rootPath

    snapshot.getFks = async function(filters = {}) {
        if (!filters.entity) return null
        if (!filters.keys) return null
        if (!filters.fields) return null

        let entityPath = rootPath + filters.entity
        let promisses = []
        //let paths = []
        if (typeof (filters.keys) == 'string') {
            filters.keys = [filters.keys]
        }
        for (let k in filters.keys) {
            let key = filters.keys[k]
            let proms = []
            for (let i in filters.fields) {
                let field = filters.fields[i]
                //console.log(entityPath + "/values/" + key + "/" + field)
                proms.push(new Promise((resolve, reject) => {
                    get(ref(rdb, entityPath + "/values/" + key + "/" + field)).then((snap) => {
                        let elem = { key, field, value: "" }
                        elem.value = snap.val()
                        resolve(elem);
                    })
                }));
            }
            promisses.push(Promise.all(proms))
        }
        let results = await Promise.all(promisses)
        let data = {}
        for (let i in results) {
            let res = results[i]
            for (let k in res) {
                if (data[res[k].key] == undefined) {
                    data[res[k].key] = {}
                }
                data[res[k].key][res[k].field] = res[k].value
            }
        }
        return data
    }
}
