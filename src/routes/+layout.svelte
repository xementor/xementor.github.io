<script lang="ts">
  import { page } from "$app/stores";
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  import SocialIcons from "../components/SocialIcons.svelte";
  import IconMenu from "../components/StickyMenu.svelte";

  $: isCV = $page.route?.id === "/cv" || $page.route?.id === "/cv-tech";
</script>

{#if !isCV}
  <Navbar />
{/if}
<div class="mx-2 sm:mx-5 md:mx-20">
  <slot />
</div>
{#if !isCV}
  <IconMenu />
  <div
    class="md:hidden menu menu-horizontal bg-base-300 flex flex-row justify-center"
  >
    <SocialIcons />
  </div>
  <Footer />
{/if}
