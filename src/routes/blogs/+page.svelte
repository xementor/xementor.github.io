<script lang="ts">
	import Blog from "../../components/Blog.svelte"
	import type { PageData } from "./$types"
	export let data: PageData
</script>

{#if data.blogs}
	<div class=" min-h-screen">
		<Blog blogs={data.blogs} />
	</div>
{:else}
	<div class=" min-h-screen">
		<p>Data can't fetched from server</p>
	</div>
{/if}
