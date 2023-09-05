<script lang="ts">
	import { autoClickedScrolled, canHideNavbar } from "../store/navhide"
	import Menu from "./Menu.svelte"
	import { Icon, Moon, Sun, Bars3CenterLeft } from "svelte-hero-icons"

	// navbarStore.js
	const lightThemeName = ["retro", "light"]
	const darkThemeName = ["dracula", "garden", "dark"]
	const allThemes = {
		all: [...lightThemeName, ...darkThemeName],
		defaultLight: lightThemeName[0],
		defaultDark: darkThemeName[0],
	}

	let prevScrollpos = 0
	let runnigY = 0
	let theme = darkThemeName[0]
	$: active_class = $canHideNavbar ? "top-[-100px]" : "top-0"
	$: icon = darkThemeName.includes(theme) ? Sun : Moon

	function toggle() {
		theme = !darkThemeName.includes(theme)
			? darkThemeName[0]
			: lightThemeName[0]
		window.document.body.setAttribute("data-theme", theme)
	}
	function setTheme(name: string) {
		theme = name
		window.document.body.setAttribute("data-theme", name)
	}

	function handleScroll() {
		if (!$autoClickedScrolled) {
			if (prevScrollpos > runnigY) {
				canHideNavbar.set(false)
			} else {
				canHideNavbar.set(true)
			}
		} else {
			canHideNavbar.set(true)
		}
		prevScrollpos = runnigY
	}
</script>

<svelte:window on:scroll={handleScroll} bind:scrollY={runnigY} />

<div class="navbar bg-base-100 sticky top-0 z-10 top shadow-sm {active_class}">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<Icon src={Bars3CenterLeft} size="24" />
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<Menu />
			</div>
		</div>
		<a href="/" class="btn btn-ghost normal-case text-xl">IH Zonaid</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<div class="menu menu-horizontal px-1">
			<Menu />
		</div>
	</div>
	<div class="navbar-end">
		<div class="hidden sm:form-control">
			<input
				type="text"
				placeholder="Search"
				class="input input-bordered w-24 md:w-auto"
			/>
		</div>

		<div class="dropdown dropdown-end dropdown-hover">
			<button class="btn btn-ghost btn-circle" on:click={toggle}>
				<div class="indicator">
					<Icon src={icon} size="24" />
				</div>
			</button>
			<ul
				class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each allThemes.all as t}
					<li class:btn-active={t == theme}>
						<button on:click={() => setTheme(t)}>{t}</button>
					</li>
				{/each}
				<!-- <li><button on:click={() => setTheme("retro")}>Retro</button></li> -->
			</ul>
		</div>
	</div>
</div>
