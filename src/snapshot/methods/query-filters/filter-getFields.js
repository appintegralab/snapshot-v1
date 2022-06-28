

export default async function filter_getFields(snapshot, data, filter) {
    //console.log("filter_getFields", { data, snapshot, filter });
    data = await snapshot.getFields(filter.fields)
    //console.log("data", data);
    return data
}