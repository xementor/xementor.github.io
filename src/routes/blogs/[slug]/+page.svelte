<script lang="ts">
	import Comment from "../../../components/Comment.svelte"
	import type { PageData } from "./$types"
	export let data: PageData
	import SvelteMarkdown from "svelte-markdown"
</script>

<div class="min-h-screen">
	<div class="max-w-3xl mx-auto">
		<article class="prose">
			<SvelteMarkdown source={data.content} />
		</article>
		<Comment />
	</div>
</div>
