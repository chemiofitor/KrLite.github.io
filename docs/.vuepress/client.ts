import "./styles/index.scss";

import { defineClientConfig } from "vuepress/client";
import Classic from "./components/Classic.vue";
import { filterTagElements } from "./public/scripts/tags_filter";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    // Global components
    app.component("Classic", Classic);
    app.mixin({
      mounted() {
        // Filter tag elements on tag page load
        if (router.currentRoute.value.path.endsWith("/blog/tags/")) {
          filterTagElements();
        }
      },
    });
  },
});
