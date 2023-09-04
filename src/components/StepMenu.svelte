<script lang="ts">
	import { page } from "$app/stores"
	import { autoClickedScrolled, canHideNavbar } from "../store/navhide"

	const sections = [
		"section1",
		"section2",
		"section3",
		"section4",
		"section5",
		"section6",
	]
	let activeButtonIndex = 0

	function scrollToSection(sectionId: string, index: number) {
		const section = document.getElementById(sectionId)
		if (section) {
			autoClickedScrolled.set(true)
			section.scrollIntoView({ behavior: "smooth" })
			setTimeout(() => autoClickedScrolled.set(false), 1000)
			activeButtonIndex = index
			// autoClickedScrolled.set(false)
		}
	}

	// // Function to determine which section is currently in view
	// function determineActiveSection() {
	// 	const windowHeight = window.innerHeight
	// 	const sectionTops = sections.map((sectionId) => {
	// 		const section = document.getElementById(sectionId)
	// 		if (section) {
	// 			const rect = section.getBoundingClientRect()
	// 			return rect.top < windowHeight / 2 ? sectionId : null
	// 		}
	// 		return null
	// 	})

	// 	const newActiveIndex = sectionTops.findIndex((id) => id !== null)

	// 	if (newActiveIndex !== -1) {
	// 		activeButtonIndex = newActiveIndex
	// 	}
	// }
</script>

<!-- <svelte:window on:scroll={determineActiveSection} /> -->

<div class="hidden fixed top-48 right-[-15px] md:inline-block">
	<ul class="steps steps-vertical">
		{#each sections as section, index}
			<button
				on:click={() => scrollToSection(section, index)}
				class="step {index === activeButtonIndex ? 'step-primary' : ''}"
			/>
		{/each}
	</ul>
</div>
