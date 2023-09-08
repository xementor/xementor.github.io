<script lang="ts">
	import Project from "../../components/Project.svelte"
	import { projects } from "$lib/projects"
</script>

<div class=" min-h-screen">
	<Project {projects} />
</div>
