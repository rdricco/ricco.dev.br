<script>
  import { layout, url, isActive } from "@sveltech/routify";
</script>

<style>
  nav {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    nav {
      flex-direction: row;
    }
    a {
      margin-left: 5px;
    }
  }
</style>

<nav class="header">
  {#each $layout.parent.children as { path, title }}
    <a href={$url(path)} class:active={$isActive(path)}>{title}</a>
  {/each}
</nav>
