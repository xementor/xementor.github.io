<script lang="ts">
	import Alert from "../../../components/Alert.svelte"
	import Comment from "../../../components/Comment.svelte"
	import type { PageData } from "./$types"
	export let data: PageData
	import SvelteMarkdown from "svelte-markdown"
</script>

<div class="min-h-screen">
	<div class="max-w-3xl mx-auto">
		{#if data.content}
			<article class="prose mx-auto max-w-3xl">
				<SvelteMarkdown source={data.content} />
			</article>
			<Comment />
		{:else}
			<Alert message={"No data found"} />
		{/if}
	</div>
</div>
