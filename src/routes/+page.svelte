<script lang="ts">
	// Import the MyComponent
	import AboutMe from "../components/AboutMe.svelte"
	import Contact from "../components/Contact.svelte"
	import Hero from "../components/Hero.svelte"
	import IconMenu from "../components/IconMenu.svelte"
	import Navbar from "../components/Navbar.svelte"
	import Project from "../components/Project.svelte"
	import StepMenu from "../components/StepMenu.svelte"
	import Work from "../components/Work.svelte"
</script>

<div>
	<section id="section1">
		<Hero />
	</section>
	<section id="section2">
		<AboutMe />
	</section>
	<section id="section3">
		<Work />
	</section>
	<section id="section4">
		<Project />
	</section>
	<section id="section5">
		<Contact />
	</section>
</div>

<StepMenu />
