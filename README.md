# Field Journal

Crack’s developer portfolio — a pixel-art field journal rendered as a modern editorial site.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Live: [crack.is-a.dev](https://crack.is-a.dev)

## Place your background

Drop your own pixel-art landscape here:

```
public/art/world/life-bg.png
```

PNG or JPG. Landscape (16:9) reads best on desktop; the image is cropped with `object-cover`.

Optional:

| File | Used for |
| --- | --- |
| `public/art/world/life-bg.png` | Hero / The Life |
| `public/art/world/camp-bg.png` | Rest at the Camp |
| `public/resume.pdf` | “View Resume” at camp (hidden until this file exists) |

The music control synthesizes a quiet camp drone. It never autoplays.
