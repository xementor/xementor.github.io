<script lang="ts">
	import Blog from "../../components/Blog.svelte"
	import { blogs } from "$lib/postsdb"
</script>

<div class=" min-h-screen">
	<Blog {blogs} />
</div>
