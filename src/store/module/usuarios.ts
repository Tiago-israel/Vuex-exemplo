import { Module } from "vuex";
import { RootState } from "../models/root-state";
import { UsuarioState } from "../models/usuario/state";

export const usuariosModule: Module<UsuarioState, RootState> = {
  namespaced: true,
  state: {
    usuarios: [],
    mensagem: "",
  },
  actions: {
    async buscarUsuarios({ commit, dispatch }) {
      const response = await fetch("https://swapi.dev/api/people");
      try {
        const data = await response.json();
        const usuarios = data.results;
        commit("popularUsuarios", usuarios);
      } catch (error) {
        console.error("-->", error.message);
        dispatch("formatarMensagem", error.message);
      }
    },
    formatarMensagem({ commit }, mensagem) {
      const mensagemFormatada = `Erro inesperado, detalhes ${mensagem}`;
      commit("atualizarMensagemErro", mensagemFormatada);
    },
  },
  mutations: {
    popularUsuarios(state, usuarios) {
      state.usuarios = usuarios;
    },
    atualizarMensagemErro(state, mensagem) {
      state.mensagem = mensagem;
    },
  },
  getters: {
    totalDeUsuarios: (state) => state.usuarios.length,
  },
};
