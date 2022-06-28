import { rdb } from "../firebase/firebase.js"
import { ref, get } from "firebase/database"

export default function getFields(snapshot) {
    let entity = snapshot.entity
    let path = snapshot.path

    snapshot.getFields = async function(fields = []) {
        if (fields.length == 0) {
            let snap = await get(ref(rdb, path + "/values/"))
            return snap.val()
        }
        let snap = await get(ref(rdb, path + "/keys"))
        let keys = snap.val()
        let _data = await this.getFks({ entity, keys, fields })
        return _data
    }
}

