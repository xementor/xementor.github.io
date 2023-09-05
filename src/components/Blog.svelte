<script lang="ts">
	import { blogs } from "../db/postsdb"
	import BlogCard from "./BlogCard.svelte"
</script>

<div class="hero">
	<div>
		<h2 class="text-4xl font-bold mb-10">
			<span class="text-primary">5.</span> Recent Writtings
		</h2>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-around gap-2"
		>
			{#each blogs as blog}
				<BlogCard {blog} />
			{/each}
		</div>
	</div>
</div>
