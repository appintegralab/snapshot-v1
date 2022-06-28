

export default async function filter_get(snapshot, data, filter) {
    //console.log("filter_get", { data, snapshot, filter });
    if (filter.id == "") {
        data = await snapshot.get()
    } else {
        data = await snapshot.get(filter.id)
        //console.log("data", data);
        if (data) {
            let _data = {}
            _data[filter.id] = data
            data = _data
            //console.log("data", data);
        }
    }
    //console.log("data", data);
    return data
}