
import basic from "./methods/basic.js"
import getFields from "./methods/getFields.js"
import getFks from "./methods/getFks.js"
import query from "./methods/query.js"
import method_set from "./methods/method-set.js"

const rootPath = "/teste-dev/"

const snapshot = function (_entity) {
    let path = rootPath + _entity
    let entity = _entity

    const _snapshot = {
        path, 
        entity,
        rootPath,
    }

    basic(_snapshot)
    getFields(_snapshot)
    getFks(_snapshot)
    query(_snapshot)
    method_set(_snapshot)
    
    return _snapshot
}

export default snapshot