<script lang="ts">
	import Blog from "../../components/Blog.svelte"
	import Alert from "../../components/Alert.svelte"
	import type { PageData } from "./$types"
	export let data: PageData
</script>

<div class=" min-h-screen">
	{#if data.blogs}
		<Blog blogs={data.blogs} />
	{:else}
		<Alert message={"Data couldn't fetched from server"} />
	{/if}
</div>
