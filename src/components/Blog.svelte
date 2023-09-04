<script lang="ts">
	import type { Project } from "$lib"
	import { projects } from "../db/projects"
	import BlogCard from "./BlogCard.svelte"
	import ProjectCard from "./ProjectCard.svelte"
</script>

<div class="hero">
	<div>
		<h2 class="text-4xl font-bold mb-10">Recent Writtings</h2>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-around gap-2"
		>
			{#each projects as project}
				<BlogCard {project} />
			{/each}
		</div>
	</div>
</div>
