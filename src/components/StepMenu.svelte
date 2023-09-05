<script lang="ts">
	import {
		activeButtonIndex,
		scrollToSection,
		sections,
	} from "../store/sectioin"
</script>

<div class="hidden fixed top-48 right-[-15px] md:inline-block">
	<ul class="steps steps-vertical">
		{#each sections as section, index}
			<button
				on:click={() => scrollToSection(section.id, index)}
				class="step {index === $activeButtonIndex ? 'step-primary' : ''}"
			/>
		{/each}
	</ul>
</div>
