# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

This is a Zola static site. Requires Zola v0.19.2.

```bash
# Build the site (outputs to public/)
zola build

# Serve locally with live reload
zola serve

# Serve with drafts visible
zola serve --drafts
```

Deployed via Netlify (see `netlify.toml`).

## Architecture

**Content Structure:**
- `content/notes/` - Main content section, paginated (5 per page), sorted by date
- `content/blog/` - Blog posts (date-prefixed filenames like `2025-08-21.md`)
- `content/*.md` - Standalone pages (about, shelf, heroes)

**Content Frontmatter:**
- Notes/blog use YAML frontmatter (`---`) with: `title`, `author`, `date`, `path`, optional `draft`
- Section config uses TOML frontmatter (`+++`) in `_index.md`

**Templates (Tera/Jinja2):**
- `templates/index.html` - Homepage (static, not using Zola templating for content)
- `templates/page.html` - Individual page/post template
- `templates/section.html` - Section listing with pagination support
- Sections can set `list_titles_only = true` in `[extra]` to show title-only lists

**Features:**
- MathJax enabled: use `$...$` for inline, `$$...$$` for display math
- Syntax highlighting enabled via Zola
- Atom feed at `/atom.xml` (also per-taxonomy feeds)
- Sass compilation: `sass/style.scss` → `style.css`
