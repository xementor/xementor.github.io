<script lang="ts">
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import IconMenu from "../components/StickyMenu.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Github from "../components/social-icon/Github.svelte";
  import Instragram from "../components/social-icon/Instragram.svelte";
  import Twitter from "../components/social-icon/Twitter.svelte";
  import LinkedIn from "../components/social-icon/LinkedIn.svelte";
  import SocialIcons from "../components/SocialIcons.svelte";
  import { page } from "$app/stores";

  $: isCV = $page.route?.id === "/cv";
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
