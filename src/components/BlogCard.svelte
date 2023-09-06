<script lang="ts">
	import type { Blog } from "$lib/postsdb"
	import {
		Icon,
		BookmarkSlash,
		ChatBubbleOvalLeft,
		HandThumbUp,
		Share,
	} from "svelte-hero-icons"

	export let blog: Blog
</script>

<div
	class="card w-full sm:w-72 bg-base-100 shadow-xl
	 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-base-300 duration-300"
>
	<a href={"/blogs/" + blog.filename}>
		<figure>
			<img src={blog.thumbnail} alt="Shoes" class="w-96 h-52 object-cover" />
		</figure>
		<div class="card-body">
			<div>
				<div class="avatar">
					<div class="w-6 rounded-full">
						<img src="ih.jpg" />
					</div>
					<p class="ml-3">Md. Zonaid</p>
				</div>
			</div>
			<h2 class="card-title">
				{blog.title}
				{#if blog.badge}
					<div class="badge badge-secondary">{blog.badge}</div>
				{/if}
			</h2>
			<p>
				{blog.desc}
			</p>
			<div>
				<p class="text-sm font-light">8 min read . Apr 7</p>
			</div>
			<div class="card-actions justify-end">
				{#if blog.tags}
					{#each blog.tags as tag}
						<div class="badge badge-outline">{tag}</div>
					{/each}
				{/if}
			</div>
			<div class="flex flex-row justify-between">
				<div class="flex flex-row">
					<Icon src={HandThumbUp} size="20" class="mr-4 hover:fill-primary" />
					<Icon src={ChatBubbleOvalLeft} size="20" />
				</div>
				<div class="flex flex-row">
					<Icon src={Share} size="20" class="mr-4" />
					<Icon src={BookmarkSlash} size="20" />
				</div>
			</div>
		</div>
	</a>
</div>
