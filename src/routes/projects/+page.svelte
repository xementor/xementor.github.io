<script lang="ts">
	import type { PageData } from "./$types"
	import Project from "../../components/Project.svelte"
	export let data: PageData
</script>

{#if data.projects}
	<div class=" min-h-screen">
		<Project projects={data.projects} />
	</div>
{:else}
	<div class=" min-h-screen">
		<p>Data can't fetched</p>
	</div>
{/if}
