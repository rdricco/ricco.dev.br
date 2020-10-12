<script>
  import { metatags, page, layout, routes } from "@sveltech/routify";
  import Navigation from "./_navigation.svelte";
  import Social from "../components/Social/index.svelte";
  import Copyright from "svelte-copyright";
  import SrcOnGithub from "../components/SrcOnGithub.svelte";
  $: metatags.title = `${$page.title} | ricco.dev.br`;
  metatags.description = "Descrição em breve...";
</script>

<style>
  .lt-grid-container {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 250px minmax(300px, 768px) auto;
    grid-template-rows: minmax(calc(100% - 61px), auto) 60px;
    gap: 1px 1px;
    grid-template-areas:
      "lt-Aside lt-Content ."
      "lt-Footer lt-Footer lt-Footer";
  }

  .lt-Aside {
    grid-area: lt-Aside;
    padding: 15px;
    margin: 0;
    border-right: 0.5px lightgray solid;
    padding: 34px 25px 22px 50px;
    margin: 0px 25px 0 0;
    background-color: white;
    color: black;
  }

  .lt-Content {
    grid-area: lt-Content;
  }
  .lt-Footer {
    grid-area: lt-Footer;
    margin: 0;
    background-color: whitesmoke;
  }
  @media (max-width: 768px) {
    .lt-Aside {
      display: flex;
      justify-content: space-between;
      border-right: none;
      border-bottom: 0.5px lightgray solid;
      padding: 34px 16px 22px 16px;
      margin: 0px;
      background-color: white;
      color: black;
    }
    .lt-grid-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  }
</style>

<div class="lt-grid-container">
  <aside class="lt-Aside">
    <span> <strong> ricco.dev.br </strong> </span>
    <Navigation />
    <!-- <Social /> -->
  </aside>
  <main class="lt-Content">
    <slot />
  </main>
  <footer class="lt-Footer">
    <Copyright>renato ricco</Copyright>
    <SrcOnGithub />
  </footer>
</div>
