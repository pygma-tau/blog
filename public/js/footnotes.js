// Footnote backlinks for Zola
// Adds a "↩" link at the end of each footnote that returns to the reference
document.addEventListener('DOMContentLoaded', function() {
  // Zola generates:
  //   Reference: <sup class="footnote-reference"><a href="#1">1</a></sup>
  //   Definition: <div class="footnote-definition" id="1">...

  // Find all footnote references and add IDs for backlinks
  const footnoteRefs = document.querySelectorAll('sup.footnote-reference > a');
  footnoteRefs.forEach((ref) => {
    const fnId = ref.getAttribute('href').slice(1); // e.g., "1"
    ref.id = 'fnref-' + fnId;
  });

  // Find all footnote definitions and add backlinks
  const footnotes = document.querySelectorAll('.footnote-definition');
  footnotes.forEach((fn) => {
    const fnId = fn.id; // e.g., "1"
    const backlink = document.createElement('a');
    backlink.href = '#fnref-' + fnId;
    backlink.className = 'footnote-backlink';
    backlink.textContent = ' ↩';
    backlink.title = 'Back to text';

    // Append to the last paragraph, or the footnote itself
    const lastP = fn.querySelector('p:last-of-type');
    if (lastP) {
      lastP.appendChild(backlink);
    } else {
      fn.appendChild(backlink);
    }
  });
});
