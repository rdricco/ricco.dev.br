<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "../.routify/routes";
</script>

<style global>
  @import "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Rubik:wght@500&display=swap";
  @import "https://unpkg.com/marx-css/css/marx.min.css";
  @import "../static/global.css";
  /* @import "../static/blog.pcss"; */
  @import "https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism-okaidia.min.css";
</style>

<Router {routes} />
