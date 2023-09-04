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

<div class="drawer drawer-end">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<!-- Page content here -->
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

	<div class="drawer-content">
		<label
			for="my-drawer-4"
			class="btn btn-circle fixed bottom-0 right-0 md:hidden"
		>
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
		</label>
	</div>
	<div class="drawer-side z-20">
		<label for="my-drawer-4" class="drawer-overlay" />
		<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
			<!-- Sidebar content here -->
			<li><a href="#section1">Sidebar Item 1</a></li>
			<li><a href="#section2">Sidebar Item 1</a></li>
		</ul>
	</div>
</div>
