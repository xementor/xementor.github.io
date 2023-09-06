<script lang="ts">
	import type { PageData } from "./$types"
	import Project from "../../components/Project.svelte"
	import Alert from "../../components/Alert.svelte"
	export let data: PageData
</script>

<div class=" min-h-screen">
	{#if data.projects}
		<Project projects={data.projects} />
	{:else}
		<Alert message={"Data couldn't fetched from server"} />
	{/if}
</div>
