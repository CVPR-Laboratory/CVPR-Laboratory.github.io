# Known Issues

- Dynamic profile and article URLs use query parameters. Their generic templates have static fallback metadata; JavaScript replaces title, canonical, Open Graph and JSON-LD metadata after loading. Crawlers without JavaScript may only see the template metadata.
- GitHub Pages provides no server-side redirects or custom response rules. Legacy pages are retained and excluded in `robots.txt` during migration.
- Some member details remain intentionally withheld pending individual confirmation. This is represented by `verified-partial` in data and is not a rendering failure.
- Event-specific photographs are unavailable for several news entries, so approved repository images are reused as non-deceptive generic illustrations.
