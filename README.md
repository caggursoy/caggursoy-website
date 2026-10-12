# caggursoy-website

Kişisel web sitesi — Çağatay Gürsoy.

Statik site (Astro) + Markdown blog. Yapı çıktısı `dist/` içinde üretilir ve
Git üzerinden cPanel `public_html/` dizinine yayınlanır.

## Yeni blog yazısı eklemek

1. `src/content/blog/` klasörüne yeni bir `.md` dosyası oluştur.
   Üst satırlara (frontmatter) şunları yaz:

   ```
   ---
   title: 'Yazının başlığı'
   pubDate: 2024-06-01
   description: 'Kısa özet — blog listesinde görünür.'
   tags: ['felsefe', 'nörobilim']
   pinned: false
   ---
   ```

2. Altına yazıyı **Markdown** ile yaz.
3. Yapıyı derle:
   `npm run build`
4. Değişiklikleri commit & push et — cPanel otomatik yayınlar:
   `git add . && git commit -m "yeni yazı: <başlık>" && git push`

Adım adım anlatım için **`BLOG-WORKFLOW.md`** dosyasına bak.

## Geliştirme

```bash
npm install     # bağımlılıkları kur
npm run build   # dist/ üretir (yayına hazır çıktı)
npm run dev     # local geliştirme sunucusu (http://localhost:4321)
```

## Deployment

- `dist/` klasörü repoda tutulur (cPanel'de yeniden derlenmez).
- `.cpanel.yml` dosyası `dist/*` içeriğini `public_html/`'ye kopyalar.
- Git push, cPanel Git Deployment üzerinden otomatik dağıtımı tetikler.
