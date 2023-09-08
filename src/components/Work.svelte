<script lang="ts">
	type Work = {
		company: string
		rule: string
		timeline: string
		contributions: string[]
	}
	const workData: Work[] = [
		{
			company: "Nuna Art Project",
			contributions: [
				"Designed and implemented API endpoints using Django for frontend users to request plot purchases.",
				"Created a process within the API to collect user-selected pixel plot data and images and stored them in Firebase.",
				"Implemented functionality to generate transaction IDs and interface with the Stellar API for transaction validation.",
			],
			rule: "Backend Developer",
			timeline: "XXX to XXX",
		},
		{
			company: "Action Tokens",
			rule: "Transection Builder",
			timeline: "XXXX - XXXX",
			contributions: [
				"Developed transaction functionality using the Stellar API for processing plot sale payments.",
				"Integrated the Albedo extension to simplify user authentication and transaction signing.",
				"Incorporated the Freight extension to enhance the user experience by streamlining transaction processing.",
				"Integrated xbull to provide users with real-time market data and improve transaction decision-making.",
				"Implemented WalletConnect to allow users to interact with the Stellar network using their preferred wallets.",
				"Ensured seamless and secure transaction processing for plot sales within the system.",
			],
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

<div
	class="hero min-h-screen bg-base-400 justify-start md:justify-center items-start"
>
	<div class="p-4 md:w-[600px] mt-12">
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
		<div class="my-5 ml-2">
			<h4 class="text-lg font-bold">{selectedWork.rule}</h4>
			<p class="text-base font-light">{selectedWork.timeline}</p>
			<ol class="py-2 list-decimal my-2 ml-3">
				{#each selectedWork.contributions as contrib}
					<li>{contrib}</li>
				{/each}
			</ol>
		</div>
	</div>
</div>
