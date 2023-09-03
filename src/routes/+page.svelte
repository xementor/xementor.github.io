<script lang="ts">
	// Import the MyComponent
	import AboutMe from "../components/AboutMe.svelte"
	import Contact from "../components/Contact.svelte"
	import Hero from "../components/Hero.svelte"
	import IconMenu from "../components/IconMenu.svelte"
	import Navbar from "../components/Navbar.svelte"
	import Project from "../components/Project.svelte"
	import Work from "../components/Work.svelte"

	let prevScrollPos = 1
</script>

<div>
	<Navbar />
	<div class="mx-5 md:mx-20">
		<Hero />
		<AboutMe />
		<Work />
		<Project />
		<Contact />
	</div>
	<IconMenu />
</div>
