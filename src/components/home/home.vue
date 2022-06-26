<template>
  <div class="border rounded p-2">
    home {{ this.testeStore.foo.counter }}
    <q-btn size="xs" @click="add">
      add
    </q-btn>
    <span class="text-xs ml-2 rounded py-1 px-2 bg-gray-200">
      {{moment("2022-06-25T21:36:46-03:00").fromNow()}}
    </span>
  </div>
</template>

<script>
import { testeStore } from "@/stores/teste.js"
import notify from "@/utils/notify.js"
import moment from "@/utils/moment.js"

export default {
  data() {
    return {
      testeStore: testeStore(),
      moment: moment()
    }
  },
  mounted() {
    console.log("mounted");
    console.log(this.testeStore.foo);
    console.log("moment", this.moment("2022-06-25T21:36:46-03:00").fromNow());
  },
  methods: {
    add() {
      this.testeStore.add()
      notify.success("oi gente")
      notify.error("oi gente sdsdsd")
    }
  },
}
</script>
