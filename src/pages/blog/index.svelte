<script>
  import { url, layout } from "@sveltech/routify";
  import marked from "marked";

  const posts = $layout.parent.children
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

<h1>Blog</h1>

<ul class="posts">
  {#each posts as { meta, path }}
    {#if meta.frontmatter.draft == false}
      <li class="card">
        <a class="title" href={$url(path)}>
          <h2>{meta.frontmatter.title}</h2>
        </a>

        {@html marked(meta.frontmatter.summary)}

        <!-- <ul class="tags">
      {#each meta.frontmatter.tags as item}
        <li>{item}</li>
      {/each}
    </ul> -->
      </li>
    {/if}
  {/each}
</ul>
