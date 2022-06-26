import { defineStore } from 'pinia'

export const testeStore = defineStore('testeStore', {

  state: () => ({
    foo: {
      counter: 0,
      id: "noid",
      nome: "sem nome",
    }
  }),
  actions: {
    add() {
      // muda o estado
      this.foo.counter++
    },
  },
})