<script lang="ts">
	type Work = {
		company: string
		rule: string
		timeline: string
		contributions: string[]
	}
	const workData: Work[] = [
		{
			company: "Action Tokens",
			rule: "Backend Developer",
			timeline: "May 2018 - Present",
			contributions: [
				"Builded transection of the steller API",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, est.",
			],
		},
		{
			company: "Nuna Art Project",
			contributions: [
				"lorem vong cong and dong",
				"itls file to do that or thais",
			],
			rule: "Transection Builder",
			timeline: "XXX to XXX",
		},
	]

	let selectedIdx = 0
	$: selectedWork = workData[selectedIdx]
	function handleWorkChange(
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
		index: number
	) {
		selectedIdx = index
	}
</script>

<div class="hero min-h-screen bg-base-400 justify-start md:justify-center">
	<div class="p-4 md:w-[512px]">
		<h2 class="text-4xl font-bold mb-10">
			<span class="text-primary">3.</span> My Work History
		</h2>
		<div class="tabs">
			{#each workData as work, index}
				<button
					on:click={(ev) => handleWorkChange(ev, index)}
					class:tab-active={index == selectedIdx}
					class="tab tab-lifted">{work.company}</button
				>
			{/each}
		</div>
		<div class="my-5">
			<h4 class="text-lg font-bold">{selectedWork.rule}</h4>
			<p class="text-base font-light">{selectedWork.timeline}</p>
			<ol class="py-2">
				{#each selectedWork.contributions as contrib}
					<li>{contrib}</li>
				{/each}
			</ol>
		</div>
	</div>
</div>
