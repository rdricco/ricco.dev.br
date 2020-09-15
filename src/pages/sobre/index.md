<script>
    import { metatags } from '@sveltech/routify'
    metatags.title = 'Sobre'+ " | ricco.dev.br"
    import Hero from "../../components/Hero/index.svelte"
    import Stack from "../../components/Stack/index.svelte"
    import Social from "../../components/Social/index.svelte"
    import GitHubFeatured from "../../components/GitHubFeatured/index.svelte"
</script>
<style>

ul{
list-style: none;
padding-left: 0;
}
</style>
<Hero/>
<Stack/>
<Social/>
<GitHubFeatured/>