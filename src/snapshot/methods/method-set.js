import { rdb } from "../firebase/firebase.js"
import { ref, set, increment, onValue } from "firebase/database"

function uuidv4(nome) {
    let _nome = nome.normalize('NFD').replace(/[ \u0300-\u036f]/g, "").toUpperCase().substr(0, 10)
    if(_nome != "") {
        _nome = _nome + "-"
    }
    return _nome + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    ).substr(0, 6);
}

export default function method_set(snapshot) {
    let entity = snapshot.entity
    let path = snapshot.path
    let rootPath = snapshot.rootPath

    snapshot.set = async function (key, value) {
        await set(ref(rdb, path + "/values/" + key), value)
        await set(ref(rdb, path + "/change/"), increment(1))
    }

    snapshot.add = async function (key, value) {
        await set(ref(rdb, path + "/keys/" + key), key)
        await set(ref(rdb, path + "/values/" + key), value)
        await set(ref(rdb, path + "/change/"), increment(1))
    }

    snapshot.remove = async function (key) {
        await set(ref(rdb, path + "/keys/" + key), null)
        await set(ref(rdb, path + "/values/" + key), null)
        await set(ref(rdb, path + "/change/"), increment(1))
    }

    snapshot.listen = function (cbfunc) {
        //console.log(path + "/change");
        onValue(ref(rdb, path + "/change"),(snap) => {
            cbfunc(snap.val())
        })
    }

    snapshot.newID = function ({prefix, nome}) {
        let _prefix = prefix
        let _nome = nome
        if (_prefix == undefined) {
            _prefix = entity.substr(0, 6).toUpperCase() + "-"
        } else {
            _prefix = _prefix + "-"
        }
        if (_nome == undefined) {
            _nome = ""
        }
        _nome = uuidv4(_nome)
        let id = _prefix + _nome
        if (id.trim() == "") {
            return "noid"
        }
        return _prefix + _nome
    }
}