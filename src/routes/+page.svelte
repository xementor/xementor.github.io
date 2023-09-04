<script lang="ts">
	// Import the MyComponent
	import { Icon } from "svelte-hero-icons"
	import AboutMe from "../components/AboutMe.svelte"
	import Blog from "../components/Blog.svelte"
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
		<Blog />
	</section>
	<section id="section6">
		<Contact />
	</section>
</div>

<StepMenu />

<div class="fixed bottom-0 right-0 inline-block">
	<button class="btn btn-square btn-circle">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h8m-8 6h16"
			/></svg
		>
	</button>
</div>
