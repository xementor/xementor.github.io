<script>
	import ProjectCard from "./ProjectCard.svelte"
</script>

<div class="hero">
	<div>
		<h2 class="text-4xl font-bold mb-10">Some of my works</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 justify-around gap-1">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	</div>
</div>
