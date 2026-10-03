// Gir blokksitater som starter med **Instruksjon:** eller **Råd:** egne klasser.
function text(node) {
  if (node.type === 'text') return node.value;
  return (node.children || []).map(text).join('');
}

function visit(node, fn) {
  fn(node);
  (node.children || []).forEach((c) => visit(c, fn));
}

export default function rehypeCallouts() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'element' || node.tagName !== 'blockquote') return;
      const first = text(node).trim().toLowerCase();
      let cls = null;
      if (first.startsWith('instruksjon')) cls = 'callout--instruks';
      else if (first.startsWith('råd')) cls = 'callout--rad';
      if (!cls) return;
      node.properties = node.properties || {};
      const prev = node.properties.className || [];
      node.properties.className = [...prev, 'callout', cls];
    });
  };
}
