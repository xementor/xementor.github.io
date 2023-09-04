<script lang="ts">
	function handleClick(
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) {}
</script>

<div class="hidden fixed top-48 right-[-15px] md:inline-block">
	<ul class="steps steps-vertical">
		<button on:click={handleClick}>
			<a href="#section1" class="step step-success" />
		</button>
		<a href="#section2" class="step" />
		<a href="#section3" class="step" />
		<a href="#section4" class="step" />
		<a href="#section5" class="step" />
		<a href="#section6" class="step" />
	</ul>
</div>
