<script>
  // import GitHubFeatured from "../components/GitHubFeatured/index.svelte";
  import { url, metatags, layout, routes } from "@sveltech/routify";
  metatags.title = "ricco.dev.br";
  export let blogPosts = $layout.parent.children;
  // export let blogPosts = $layout.parent.children.filter(node => node.path === '/blog');
  console.log(blogPosts[2].children);
  import marked from "marked";
  const posts = blogPosts[2].children
    .filter((c) => c.meta["frontmatter"])
    .sort((a, b) =>
      b.meta["frontmatter"].published.localeCompare(
        a.meta["frontmatter"].published
      )
    );
</script>

<style>
  ul {
    list-style: none;
    padding: 0;
  }
  .tags {
    display: flex;
  }
  .tags li {
    margin-right: 5px;
  }
</style>

<!-- <Hero />
<Stack />
<GitHubFeatured /> -->
<!-- 
{#each $blogPosts as child}
<li>
  <p>{child.meta.frontmatter.title}</p>
</li>
{/each} -->
<ul class="posts">
  {#each posts as { meta, path }}
    {#if meta.frontmatter.draft == false}
      <li class="card">
        <a class="title" href={$url(path)}>
          <h2>{meta.frontmatter.title}</h2>
        </a>

        {@html marked(meta.frontmatter.summary)}

        <ul class="tags">
          {#each meta.frontmatter.tags as item}
            <li>{item}</li>
          {/each}
        </ul>
      </li>
    {/if}
  {/each}
</ul>

<!-- routify:options index=10 -->
<!-- routify:options title="home" -->
