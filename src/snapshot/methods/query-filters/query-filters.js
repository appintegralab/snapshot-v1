import filter_get from "./filter-get.js"
import filter_getFields from "./filter-getFields.js"
import filter_getFks from "./filter-getFks.js";
import filter_getFksChild from "./filter-getFksChild.js";

export default function queryFilters(snapshot,data,filter) {
    //console.log("queryFilters",{snapshot,data,filter});
    let filters = {
        get: filter_get,
        getFields: filter_getFields,
        getFks: filter_getFks,
        getFksChild: filter_getFksChild,
    }
    let func = filters[filter.filter]
    if(func) {
        return func(snapshot,data,filter)
    }
    return null
}