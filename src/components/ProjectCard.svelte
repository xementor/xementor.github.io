<script lang="ts">
	import type { Project } from "$lib"
	import { extractFileName } from "$lib/utils"

	export let project: Project
	const route = extractFileName(project.filename)
</script>

<div
	class="card w-full sm:w-72 bg-base-100 shadow-xl
	 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-base-300 duration-300"
>
	<a href={"/projects/" + route}>
		<figure>
			<img src={project.thumbnail} alt="Shoes" class="w-96 h-52 object-cover" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">
				{project.app.name}
				{#if project.badge}
					<div class="badge badge-secondary">{project.badge}</div>
				{/if}
			</h2>
			<p>
				{project.desc ? project.desc : "A demo description"}
			</p>
			<div class="card-actions justify-end">
				{#if project.tags}
					{#each project.tags as tag}
						<div class="badge badge-outline">{tag}</div>
					{/each}
				{/if}
			</div>
		</div>
	</a>
</div>
