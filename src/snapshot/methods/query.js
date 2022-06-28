import queryFilters from "./query-filters/query-filters.js"

export default function query(snapshot) {
    let entity = snapshot.entity
    let path = snapshot.path
    let rootPath = snapshot.rootPath
    
    snapshot.query = async function(filters) {
        if (!filters) return null
        if (filters.length == 0) return null
        let data = null
        for (let i in filters) {
            let filter = filters[i]
            //console.log("running",filter);
            data = await queryFilters(snapshot,data,filter)
        }
        return data
    }

}