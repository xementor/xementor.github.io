<script>
	import Giscus from "@giscus/svelte"
	import { lightThemeName, theme } from "../store/theme"
</script>

<Giscus
	id="comments"
	repo="xementor/xementor.github.io"
	repoId="R_kgDOJWkebg="
	category="Ideas"
	categoryId="DIC_kwDOJWkebs4CZEAZ-hVS"
	mapping="specific"
	term="Welcome to @giscus/svelte component!"
	reactionsEnabled="1"
	emitMetadata="0"
	inputPosition="top"
	theme={lightThemeName.includes($theme) ? "light" : "dark"}
	lang="en"
	loading="lazy"
/>
