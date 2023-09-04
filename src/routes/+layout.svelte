<script lang="ts">
	import "../app.css"
	import Footer from "../components/Footer.svelte"
	import IconMenu from "../components/IconMenu.svelte"
	import Navbar from "../components/Navbar.svelte"
</script>

<Navbar />
<div class="mx-5 md:mx-20">
	<slot />
</div>
<IconMenu />
<Footer />
