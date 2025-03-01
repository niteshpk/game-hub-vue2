import Platforms from "@/data/Platforms";

export default {
  namespaced: true,
  state: {
    platforms: [...Platforms.results],
  },
  getters: {
    getPlatforms: (state) => state.platforms,
  },
};
