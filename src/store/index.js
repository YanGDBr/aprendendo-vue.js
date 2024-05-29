import { createStore } from 'vuex'

export default createStore({
  state: {
    criador: {
      nome: 'Yan',
      idade: 15
    },
    produtos: [
      {
        id: 1,
        nome: "Bola"
      },
      {
        id: 2,
        nome: "Tapete"
      },
      {
        id: 3,
        nome: "Bloco"
      },
    ],
    valor: 0,
    valortwo: 0,
  },
  getters: {
    total(state){
      return state.valor + state.valortwo
    }

  },
  mutations: {
    mudarvalor(state, data) {
      state.criador.nome = data.nome;
      state.criador.idade = data.idade;
      
    },
    adicionar(state, data) {
      state.produtos.push(data);
    },
    remover(state, id) {
      var idx = state.produtos.findIndex(o => o.id === id);
      state.produtos.splice(idx, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
