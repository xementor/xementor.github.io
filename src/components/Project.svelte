<script lang="ts">
	import type { Project } from "$lib"
	import ProjectCard from "./ProjectCard.svelte"
	export let projects: Project[]
</script>

<div class="hero my-10">
	<div>
		<h2 class="text-4xl font-bold mb-10">
			<span class="text-primary">4.</span> Notable Works
		</h2>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-around gap-2"
		>
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</div>
