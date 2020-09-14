<script>
  import { layout, url, isActive } from "@sveltech/routify";
</script>

<style>
  nav {
    display: flex;
    flex-direction: column;
  }
</style>

<nav class="header">
  {#each $layout.parent.children as { path, title }}
    <a href={$url(path)} class:active={$isActive(path)}>{title}</a>
  {/each}
</nav>
