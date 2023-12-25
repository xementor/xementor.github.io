import { persisted } from "svelte-local-storage-store"

// First param `preferences` is the local storage key.
// Second param is the initial value.
export const theme = persisted("theme", "dracula")

export const lightThemeName = ["retro", "light", "pastel"]
export const darkThemeName = ["dracula", "garden", "dark"]
export const allThemes = {
	all: [...lightThemeName, ...darkThemeName],
	defaultLight: lightThemeName[0],
	defaultDark: darkThemeName[0],
}
