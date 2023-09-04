// navbarStore.js
import { writable } from "svelte/store"

// Initialize the store with the initial value
export const canHideNavbar = writable(false)

export const autoClickedScrolled = writable(false)
