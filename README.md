# Field Journal

Harshit’s developer portfolio — a pixel-art field journal rendered as a modern editorial site.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Place your background

Drop your own pixel-art landscape here:

```
public/art/world/life-bg.png
```

PNG or JPG. Landscape (16:9) reads best on desktop; the image is cropped with `object-cover`.

A default waterfall scene is already in that slot so the site runs immediately.

Optional extras:

| File | Used for |
| --- | --- |
| `public/art/world/life-bg.png` | Hero / The Life |
| `public/art/world/mountain-bg.jpg` | Quiet atmosphere in The Work |
| `public/art/world/camp-bg.png` | Rest at the Camp |
| `public/resume.pdf` | “View Resume” at camp |
| `public/audio/camp.mp3` | unused — ambience is generated in the browser |

The music control in the navigation bar synthesizes a quiet camp drone. It never autoplays.
