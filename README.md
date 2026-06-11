# natanparmigiano-portfolio

A simple personal portfolio website built with Vue, Vite, and Tailwind CSS.

**Live site:** [portfolio.natan.parmigiano.tech](https://portfolio.natan.parmigiano.tech)

Feel free to fork, copy, and modify this however you like — that's what it's here for. Portfolio entries are sourced from `PORTFOLIO.md` (parsed into `src/data/parsed-portfolio.json`), with Brazilian Portuguese translations in `src/data/parsed-portfolio.pt.json` and layout/labels in `src/data/portfolio.js`. After editing `PORTFOLIO.md`, run `pnpm sync:portfolio` to refresh the data files.

## Development

```bash
pnpm install
pnpm dev
```

Build for production:

```bash
pnpm build
```

Deploy to Cloudflare (requires Wrangler setup):

```bash
pnpm deploy
```

## License

This project is released into the public domain under [The Unlicense](UNLICENSE).
