import { rdb } from "../firebase/firebase.js"
import { ref, get } from "firebase/database"

export default function basic(snapshot) {
    let entity = snapshot.entity
    let path = snapshot.path

    snapshot.get = async function(id = "") {
        let snap = await get(ref(rdb, path + "/values/" + id))
        return snap.val()
    }
    snapshot.getAll = async function() {
        let snap = await get(ref(rdb, path + "/values"))
        return snap.val()
    }
}

