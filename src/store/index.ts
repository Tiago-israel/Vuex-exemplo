import { createStore } from "vuex";
import { usuariosModule } from "./module/usuarios";

export default createStore({
  modules: {
    usuariosModule,
  },
});
