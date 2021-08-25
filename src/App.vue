<template>
  <div id="app">
    <button type="button" @click="buscarUsuarios()">carregar</button>
    <h1 v-if="mensagem">{{ mensagem }}</h1>
    <h1>Total de usuário {{ totalDeUsuarios }}</h1>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Altura</th>
          <th>Peso</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(usuario, index) in usuarios" :key="index">
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.height }}</td>
          <td>{{ usuario.mass }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "App",
  computed: {
    ...mapState("usuariosModule", {
      usuarios: "usuarios",
      mensagem: "mensagem",
    }),
    ...mapGetters("usuariosModule", {
      totalDeUsuarios: "totalDeUsuarios",
    }),
  },
  methods: {
    ...mapActions("usuariosModule", {
      buscarUsuarios: "buscarUsuarios",
    }),
    ...mapMutations("usuariosModule", {
      atualizarMensagemErro: "atualizarMensagemErro",
    }),
  },
  mounted(): void {
    this.atualizarMensagemErro("Deu ruim! não me use!!");
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
