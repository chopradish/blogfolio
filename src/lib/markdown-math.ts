import { renderToString } from "katex";
import { defineHastPlugin, htmlToHast } from "satteri";

// Render after Markdown parsing and typography, so TeX is never reinterpreted
// as Markdown or MDX. Both HTML and accessible MathML are emitted at build time.
export const satteriMath = defineHastPlugin({
  name: "blogfolio-katex",
  element: {
    filter: ["code"],
    visit(node, context) {
      const classes = node.properties.className;
      if (!Array.isArray(classes) || !classes.includes("language-math")) return;

      const parent = context.parent(node);
      const displayMode = parent.type === "element" && parent.tagName === "pre";
      const html = renderToString(context.textContent(node), {
        displayMode,
        throwOnError: false,
        output: "htmlAndMathml",
        trust: false,
        // Existing posts use KaTeX's display-line-break extension. Other
        // compatibility warnings remain enabled, and invalid TeX stays visible.
        strict: (code) => (code === "newLineInDisplayMode" ? "ignore" : "warn"),
      });
      const tree = htmlToHast(html, { fragment: true });
      if (tree.type !== "root")
        throw new Error("Expected a KaTeX HTML fragment");
      context.replaceNode(displayMode ? parent : node, tree.children);
    },
  },
});
