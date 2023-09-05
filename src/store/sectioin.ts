import { writable } from "svelte/store"
import { autoClickedScrolled } from "./navhide"

type Section = {
	id: string
	name: string
}
const sections: Section[] = [
	{ id: "section1", name: "Top" },
	{ id: "section2", name: "About Me" },
	{ id: "section3", name: "Work" },
	{ id: "section4", name: "Projects" },
	{ id: "section5", name: "Blogs" },
	{ id: "section6", name: "Contact" },
]
const activeButtonIndex = writable(0)

function scrollToSection(sectionId: string, index: number) {
	const section = document.getElementById(sectionId)
	if (section) {
		autoClickedScrolled.set(true)
		section.scrollIntoView({ behavior: "smooth" })
		setTimeout(() => autoClickedScrolled.set(false), 1000)
		activeButtonIndex.set(index)
	}
}

export { sections, scrollToSection, activeButtonIndex }
