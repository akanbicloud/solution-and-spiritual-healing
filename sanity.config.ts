import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas";
import { projectId, dataset, isSanityConfigured } from "./src/sanity/env";

export default defineConfig({
  basePath: "/studio",
  name: "alfacairo_studio",
  title: "Alfacairo Studio — Solution Spiritual Healing & Prayer",
  projectId: isSanityConfigured ? projectId : "placeholder-project-id",
  dataset: isSanityConfigured ? dataset : "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
