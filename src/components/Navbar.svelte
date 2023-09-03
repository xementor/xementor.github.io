<script>
	import Menu from "./Menu.svelte"
	import { onMount } from "svelte"

	let isDarkTheme = false

	function toggle() {
		isDarkTheme = !isDarkTheme // Toggle the theme state
		const theme = isDarkTheme ? "dark" : "light"
		window.document.body.setAttribute("data-theme", theme)
	}

	let prevScrollPos = 0
</script>

<div class="navbar bg-base-100" id="navbar">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<div
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<Menu />
			</div>
		</div>
		<a class="btn btn-ghost normal-case text-xl">IH Zonaid</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<div class="menu menu-horizontal px-1">
			<Menu />
		</div>
	</div>
	<div class="navbar-end">
		<div class="form-control">
			<input
				type="text"
				placeholder="Search"
				class="input input-bordered w-24 md:w-auto"
			/>
		</div>

		<div class="dropdown dropdown-end dropdown-hover">
			<button class="btn btn-ghost btn-circle" on:click={toggle}>
				<div class="indicator">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
						/>
					</svg>
				</div>
			</button>
			<ul
				tabindex="0"
				class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a>Light</a></li>
				<li><a>Dark</a></li>
				<li><a>Dracula</a></li>
			</ul>
		</div>
	</div>
</div>
