<script>
    import { metatags, afterPageLoad , route, layout, page } from "@sveltech/routify";
  
  export let title;
  $: metatags.title = title;
</script>
<div class="card">
  <slot />
</div>
