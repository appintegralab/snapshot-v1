

export default async function filter_getFksChild(snapshot, data, filter) {
    //console.log("filter_getFksChild", { data, snapshot, filter });
    let { entity, fields, child } = filter
    let key = filter.key
    let promisses = []
    for (let k in data) {
        //console.log(`data[${k}][${key}][${child}]`);
        //console.log("data",data);
        for (let kk in data[k][key]) {
            let keys = data[k][key][kk][child]
            //console.log("keys", keys);
            promisses.push(new Promise((resolve, reject) => {
                let key = k
                let subkey = kk
                snapshot.getFks({ entity, keys: keys, fields }).then((result) => {
                    resolve({ subkey, child, key, data: result })
                })
            }));
        }
    }
    let results = await Promise.all(promisses)
    //console.log("results",results);
    for (let idx in results) {
        let res = results[idx]
        //console.log("data["+res.key+"]",data[res.key]);
        //console.log("key",key);
        //console.log({ key, "res.subkey": res.subkey, "res.key": res.key, child });
        data[res.key][key][res.subkey][child] = res.data
        //console.log(data[res.key][key]);
    }
    return data
}