import snapshot from "@/snapshot/snapshot.js"

function teste_get() {
    let model = snapshot("UC")
    model.get("TI&C").then((data) => {
        console.log("data", data);
    })
}

function teste_getFields() {
    let model = snapshot("UC")
    model.getFields(["id", "sigla", "icon"]).then((data) => {
        console.log("data", data);
    })
}

function teste_getFks() {
    let model = snapshot("UC")
    let filters = { entity: "Area", keys: ["TI&C", "AU&D", "G&N"], fields: ["id", "sigla", "icon"] }
    model.getFks(filters).then((data) => {
        console.log("data", data);
    })
}

function teste_query() {
    let model = snapshot("UC")
    model.query([
        { filter: "get", id: "ANIMACAO" },
        //{ filter: "getFields", fields: ["id", "nome", "areas", "plano"] },
        { filter: "getFks", key: "areas", entity: "Area", fields: ["id", "nome"] },
        { filter: "getFks", key: "plano", entity: "Plano", fields: ["id", "metas"] },
        { filter: "getFksChild", key: "plano", child: "metas", entity: "Meta", fields: ["id", "texto"] },
        //{ getFks: "areas", entity: "Area", fields: ["id", "nome"] },
        //{ getFks: "plano", entity: "Plano", fields: ["id", "metas", "topicos"] },
        //{ getFks: "plano", child: "metas", entity: "Meta", fields: ["id", "texto"] },
        //{ getFks: "plano", child: "topicos", entity: "Topico", fields: ["id", "texto"] }
    ]).then((data) => {
        console.log("data", data);
    })
}

function teste_set() {
    console.log("teste_set");
    let model = snapshot("EntityTeste")
    model.set("ABC-1234/idade", 25)

}

function teste_add() {
    console.log("teste_add");
    let model = snapshot("EntityTeste")
    model.add("ABC-1234", {
        id: "ABC-1234",
        nome: "apenas teste"
    })
}

function teste_addNew() {
    console.log("teste_addNew");
    let model = snapshot("EntityTeste")
    let elem = {
        nome: "apenas ssss"
    }
    //elem.id = model.newID({prefix: "TST", nome: elem.nome})
    elem.id = model.newID({})
    model.add(elem.id, elem)
}

function testeNewID() {
    console.log("testeNewID");
    let model = snapshot("Teste")
    //console.log("model",model);
    let id = model.newID({})
    console.log("id",id);
}

function teste_remove() {
    console.log("teste_remove");
    let model = snapshot("EntityTeste")
    model.remove("ENTITY-812075")
}

function teste_listen() {
    console.log("teste_listen");
    let model = snapshot("EntityTeste")
    model.listen((num) => {
        console.log(model.entity+" has changed",num);
        model.get().then((data) => {
            console.log("data ["+Object.keys(data).length+"]",data);
        })
    })
}

export function teste() {

    //teste_get()
    //teste_getFields()
    //teste_getFks()
    //teste_query()
    //teste_set()
    //teste_add()
    //testeNewID()
    teste_listen()
    //teste_addNew()
    teste_remove()
}