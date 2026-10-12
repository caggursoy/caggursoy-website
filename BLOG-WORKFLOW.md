# Blog Yazma Rehberi

Bu rehber, siteye yeni bir blog yazısı nasıl ekleneceğini adım adım açıklar.
Yazılar **Markdown** dosyalarıdır; ayrı bir CMS ya da veritabanı yoktur.

## 1. Yeni yazıya bir dosya aç

`src/content/blog/` klasörüne yeni bir `.md` dosyası oluşturun.
Dosya adı aynı zamanda URL'nin parçası olur (slug). Örneğin:

```
src/content/blog/okuryazarlik-uzerine.md
```

Bu dosya şu adreste yayınlanır: `https://siteniz.com/blog/okuryazarlik-uzerine/`

## 2. Frontmatter'ı doldurun

Dosyanın en üstüne, `---` arasına meta bilgileri yazın:

```markdown
---
title: 'Okuryazarlık Üzerine'
pubDate: 2024-06-01
description: 'Okuma-yazmanın düşünceyle ilişkisine dair kısa bir not.'
tags: ['felsefe', 'dil']
pinned: false
---
```

| Alan        | Zorunlu | Açıklama                                                  |
|-------------|---------|-----------------------------------------------------------|
| `title`     | Evet    | Yazının başlığı (tek tırnak içinde).                      |
| `pubDate`   | Evet    | `YYYY-MM-DD` biçiminde yayın tarihi.                      |
| `description`| Hayır  | Blog listesinde görünen kısa özet.                         |
| `tags`      | Hayır   | `['etiket1', 'etiket2']` listesi.                          |
| `pinned`    | Hayır   | `true` ise yazı listenin başında sabitlenir.               |
| `image`     | Hayır   | `images/` altında bir kapak görseli yolu.                  |

## 3. Yazıyı Markdown ile yazın

Frontmatter'ın altına serbestçe Markdown yazın. Başlık (`##`), liste, alıntı,
görsel, bağlantı hepsi desteklenir. Örnek içerik için
`src/content/blog/sample-first-post.md` dosyasına bakın.

## 4. Derleyin

Proje kökünde:

```bash
npm run build
```

Hata yoksa `dist/` klasörü güncellenir ve yeni yazınız derlenmiş
HTML olarak hazır olur. Önce yazıyı yerel sunucuda görmek isterseniz:

```bash
npm run dev
```

Ardından tarayıcıda `http://localhost:4321/blog/` adresini açın.

## 5. Yayınlayın

`dist/` klasörü repoda tutulur ve cPanel Git Deployment ile otomatik yayınlanır:

```bash
git add .
git commit -m "yeni yazı: Okuryazarlık Üzerine"
git push
```

Komut tamamlandığında site canlıda güncellenir.

## Notlar

- Yazı listesi `src/pages/blog.astro`, tek yazı şablonu
  `src/pages/blog/[slug].astro` içinde. Görsel düzenleri
  `public/assets/blog.css` dosyasında.
- RSS beslemesi otomatik üretilir: `/rss.xml`
- Eski statik blog sayfasının yedeği:
  `public/blog/_static-blog-backup.html`
