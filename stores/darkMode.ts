
import { defineStore } from 'pinia'

export const useThemeModeStore = defineStore('theme', {
  state: () => ({
  themeMode:false as boolean,
  }),
  actions: {
    toggleTheme():void {
      this.themeMode = !this.themeMode
      console.log(this.themeMode);
    },
  },
})
