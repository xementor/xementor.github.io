<script lang="ts">
	// Import the MyComponent
	import AboutMe from "../components/AboutMe.svelte"
	import Blog from "../components/Blog.svelte"
	import Contact from "../components/Contact.svelte"
	import Hero from "../components/Hero.svelte"
	import Project from "../components/Project.svelte"
	import StepMenu from "../components/StepMenu.svelte"
	import Work from "../components/Work.svelte"
	import {
		scrollToSection,
		sections,
		activeButtonIndex,
	} from "../store/sectioin"
	import { blogs } from "$lib/postsdb"
	import { projects } from "$lib/projects"
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
			<Project {projects} />
		</section>
		<section id="section5">
			<Blog {blogs} />
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
		<ul
			class="menu p-4 w-1/2 min-h-full bg-base-200 text-base-content flex flex-col justify-end"
		>
			<!-- Sidebar content here -->
			{#each sections as section, index}
				<li>
					<button
						on:click={() => scrollToSection(section.id, index)}
						class:bg-base-300={index === $activeButtonIndex}
						>{index + 1 + ". " + section.name}</button
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
