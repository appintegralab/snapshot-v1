

export default async function filter_getFks(snapshot, data, filter) {
    //console.log("filter_getFks", { data, snapshot, filter });
    let { entity, fields } = filter
    let key = filter.key
    let promisses = []
    for (let k in data) {
        //console.log(data[k][key]);
        promisses.push(new Promise((resolve, reject) => {
            snapshot.getFks({ entity, keys: data[k][key], fields }).then((result) => {
                resolve({ key: k, data: result })
            })
        }));
    }
    let results = await Promise.all(promisses)
    for (let idx in results) {
        let res = results[idx]
        //console.log("data["+res.key+"]",data[res.key]);
        //console.log("key",key);
        data[res.key][key] = res.data
        //console.log(data[res.key][key]);
    }
    return data
}