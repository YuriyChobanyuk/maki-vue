export default {
  state: {
    limit: 3,
    pages: 1,
    page: 1,
    path: 'http://localhost:4000'
  },
  actions: {
    setPaginationParams(ctx, limit, pages, page, path){
      ctx.commit('updateLimit', limit);
      ctx.commit('updatePages', pages);
      ctx.commit('updatePage', page);
      ctx.commit('updatePath', path)
    }
  },
  mutations: {
    updateLimit(state, limit){
      state.limit = limit;
    },
    updatePages(state, pages){
      state.pages = pages;
    },
    updatePage(state, page){
      state.page = page;
    },
    updatePath(state, path){
      state.path = path;
    }
  },
  getters: {
    getPaginationParams(state){
      return {
        page: state.page,
        pages: state.pages,
        path: state.path
      }
    }
  }
}
