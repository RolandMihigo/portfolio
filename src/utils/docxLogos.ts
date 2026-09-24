import { ImageRun } from 'docx';
import { encode } from 'fast-png';

// SVG vector definitions for corporate and institutional logos
export const LOGO_SVGS: Record<string, string> = {
  google: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>`,

  microsoft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <rect x="2" y="2" width="20" height="20" fill="#F25022"/>
    <rect x="26" y="2" width="20" height="20" fill="#7FBA00"/>
    <rect x="2" y="26" width="20" height="20" fill="#00A4EF"/>
    <rect x="26" y="26" width="20" height="20" fill="#FFB900"/>
  </svg>`,

  coursera: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <rect width="48" height="48" rx="10" fill="#0056D2"/>
    <path d="M 24 9 C 15.5 9 8.5 15.5 8.5 24 C 8.5 32.5 15.5 39 24 39 C 30.5 39 36 35 38 29.5 L 31.5 29.5 C 30 32.5 27.2 34.2 24 34.2 C 18.5 34.2 14 29.5 14 24 C 14 18.5 18.5 13.8 24 13.8 C 27.2 13.8 30 15.5 31.5 18.5 L 38 18.5 C 36 13 30.5 9 24 9 Z" fill="#FFFFFF"/>
  </svg>`,

  udemy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <rect width="48" height="48" rx="10" fill="#1C1D1F"/>
    <path d="M 12 28 L 24 14 L 36 28" stroke="#A435F0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  freecodecamp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <rect width="48" height="48" rx="10" fill="#0A0A23"/>
    <path d="M 14 12 C 9 18 8 22 8 24 C 8 27 9 31 14 36" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none"/>
    <g transform="translate(14, 8) scale(0.65)" fill="#006400">
      <path d="M 18 2 C 16 10 10 14 10 22 C 10 28 14 34 20 34 C 26 34 30 28 30 22 C 30 17 26 13 24 10 C 24 14 22 17 19 17 C 17 17 16 15 16 13 C 16 8 20 5 18 2 Z"/>
      <path d="M 20 18 C 17 21 16 23 16 26 C 16 29 18 31 20 31 C 22 31 24 29 24 26 C 24 23 22 20 20 18 Z" fill="#FFBF00"/>
    </g>
    <path d="M 34 12 C 39 18 40 22 40 24 C 40 27 39 31 34 36" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none"/>
  </svg>`,

  horizon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <circle cx="24" cy="24" r="22" stroke="#0F3B6C" stroke-width="3" fill="#F8FAFC"/>
    <circle cx="24" cy="24" r="17" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2 2" fill="none"/>
    <text x="24" y="28" fill="#0F3B6C" font-size="11" font-weight="900" font-family="'Segoe UI', Roboto, sans-serif" text-anchor="middle">HSC</text>
  </svg>`,

  egov: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <rect width="48" height="48" rx="10" fill="#0F3B6C"/>
    <circle cx="24" cy="24" r="14" stroke="#38BDF8" stroke-width="2.5" fill="none"/>
    <circle cx="24" cy="24" r="6" fill="#38BDF8"/>
    <path d="M 10 24 L 38 24 M 24 10 L 24 38" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="2 2"/>
  </svg>`,

  verditra: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <rect width="48" height="48" rx="10" fill="#047857"/>
    <path d="M 12 14 L 24 34 L 36 14" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="24" cy="19" r="3.5" fill="#34D399"/>
  </svg>`,

  radiomaria: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <circle cx="24" cy="24" r="22" fill="#0284C7"/>
    <circle cx="24" cy="24" r="5" fill="#FFFFFF"/>
    <path d="M 14 16 C 10 21 10 27 14 32 M 34 16 C 38 21 38 27 34 32 M 10 12 C 4 19 4 29 10 36 M 38 12 C 44 19 44 29 38 36" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  </svg>`,

  iuea: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <rect width="48" height="48" rx="10" fill="#7C2D12"/>
    <path d="M 12 16 L 24 10 L 36 16 L 24 22 Z M 16 24 L 24 28 L 32 24 M 20 29 L 24 31 L 28 29" stroke="#FDE047" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
  </svg>`,

  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <rect width="48" height="48" rx="10" fill="#0077B5"/>
    <circle cx="16" cy="16" r="3" fill="#FFFFFF"/>
    <rect x="13.5" y="21" width="5" height="15" fill="#FFFFFF"/>
    <path d="M 23 21 L 28 21 L 28 23 C 29 21.5 31 20.5 33.5 20.5 C 38 20.5 40 23.5 40 28 L 40 36 L 35 36 L 35 28.5 C 35 26.5 34 25 32 25 C 29.5 25 28 26.8 28 29 L 28 36 L 23 36 Z" fill="#FFFFFF"/>
  </svg>`,

  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <rect width="48" height="48" rx="10" fill="#24292E"/>
    <path fill="#FFFFFF" fill-rule="evenodd" d="M24 10C16.27 10 10 16.27 10 24c0 6.19 4.01 11.44 9.57 13.29.7.13.96-.3.96-.68v-2.39c-3.9.85-4.72-1.88-4.72-1.88-.64-1.62-1.56-2.05-1.56-2.05-1.27-.87.1-.85.1-.85 1.4.1 2.14 1.44 2.14 1.44 1.25 2.14 3.28 1.52 4.08 1.16.13-.91.49-1.52.89-1.87-3.11-.35-6.38-1.56-6.38-6.93 0-1.53.55-2.78 1.44-3.76-.14-.35-.62-1.78.14-3.71 0 0 1.18-.38 3.85 1.44a13.4 13.4 0 0 1 7 0c2.67-1.82 3.85-1.44 3.85-1.44.76 1.93.28 3.36.14 3.71.9.98 1.44 2.23 1.44 3.76 0 5.38-3.28 6.57-6.4 6.92.5.43.95 1.29.95 2.6v3.85c0 .38.25.82.96.68A14.02 14.02 0 0 0 38 24c0-7.73-6.27-14-14-14z"/>
  </svg>`,

  kaggle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <rect width="48" height="48" rx="10" fill="#20BEFF"/>
    <path d="M 16 12 L 20 12 L 20 36 L 16 36 Z M 32 12 L 24 23 L 33 36 L 28 36 L 21 26.5 L 21 36 L 17 36 L 17 12 L 21 12 L 21 21 L 27.5 12 Z" fill="#FFFFFF"/>
  </svg>`,

  tableau: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <rect width="48" height="48" rx="10" fill="#FFFFFF"/>
    <rect x="22" y="6" width="4" height="36" fill="#E8762D" rx="1"/>
    <rect x="6" y="22" width="36" height="4" fill="#E8762D" rx="1"/>
    <rect x="12" y="16" width="3" height="16" fill="#1F77B4" rx="0.8"/>
    <rect x="33" y="16" width="3" height="16" fill="#1F77B4" rx="0.8"/>
    <rect x="16" y="12" width="16" height="3" fill="#2CA02C" rx="0.8"/>
    <rect x="16" y="33" width="16" height="3" fill="#2CA02C" rx="0.8"/>
  </svg>`,

  rdc: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 36" width="48" height="36">
    <rect width="48" height="36" fill="#007FFF"/>
    <polygon points="48,0 48,6 6,36 0,36 0,30 42,0" fill="#FCD116"/>
    <polygon points="48,0 48,3 4,36 0,36 0,33 44,0" fill="#CE1126"/>
    <polygon points="8,3 9.8,8.5 15.6,8.5 10.9,11.9 12.7,17.4 8,14 3.3,17.4 5.1,11.9 0.4,8.5 6.2,8.5" fill="#FCD116"/>
  </svg>`,
};

// Memory cache for rasterized PNG buffers
const pngCache = new Map<string, Uint8Array>();

/**
 * Creates a solid color fallback PNG icon if canvas rasterization is unavailable
 */
function createFallbackPng(r: number, g: number, b: number, size = 32): Uint8Array {
  const data = new Uint8Array(size * size * 4);
  for (let i = 0; i < size * size; i++) {
    data[i * 4] = r;
    data[i * 4 + 1] = g;
    data[i * 4 + 2] = b;
    data[i * 4 + 3] = 255;
  }
  return encode({ width: size, height: size, data });
}

/**
 * Converts an SVG string into a crisp PNG Uint8Array using HTML5 Canvas in the browser
 */
export async function rasterizeSvgToPng(
  svgString: string,
  width = 32,
  height = 32
): Promise<Uint8Array> {
  const cacheKey = `${svgString.slice(0, 40)}_${width}x${height}`;
  if (pngCache.has(cacheKey)) {
    return pngCache.get(cacheKey)!;
  }

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    const fallback = createFallbackPng(15, 59, 108, width);
    pngCache.set(cacheKey, fallback);
    return fallback;
  }

  return new Promise((resolve) => {
    try {
      const cleanSvg = svgString.includes('xmlns=')
        ? svgString
        : svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');

      const blob = new Blob([cleanSvg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new Image();

      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          const scale = 2; // 2x retina sharpness for Word printing
          canvas.width = width * scale;
          canvas.height = height * scale;
          const ctx = canvas.getContext('2d');

          if (ctx) {
            ctx.scale(scale, scale);
            ctx.drawImage(img, 0, 0, width, height);

            canvas.toBlob((pngBlob) => {
              URL.revokeObjectURL(url);
              if (pngBlob) {
                pngBlob.arrayBuffer().then((buffer) => {
                  const uint8 = new Uint8Array(buffer);
                  pngCache.set(cacheKey, uint8);
                  resolve(uint8);
                });
              } else {
                const fallback = createFallbackPng(15, 59, 108, width);
                pngCache.set(cacheKey, fallback);
                resolve(fallback);
              }
            }, 'image/png');
          } else {
            URL.revokeObjectURL(url);
            const fallback = createFallbackPng(15, 59, 108, width);
            pngCache.set(cacheKey, fallback);
            resolve(fallback);
          }
        } catch {
          URL.revokeObjectURL(url);
          const fallback = createFallbackPng(15, 59, 108, width);
          pngCache.set(cacheKey, fallback);
          resolve(fallback);
        }
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        const fallback = createFallbackPng(15, 59, 108, width);
        pngCache.set(cacheKey, fallback);
        resolve(fallback);
      };

      img.src = url;
    } catch {
      const fallback = createFallbackPng(15, 59, 108, width);
      pngCache.set(cacheKey, fallback);
      resolve(fallback);
    }
  });
}

/**
 * Returns a docx ImageRun for a given logo identifier
 */
export async function createLogoImageRun(
  type: string,
  size = 15
): Promise<ImageRun | null> {
  const normType = type.toLowerCase().replace(/[^a-z]/g, '');
  const svg = LOGO_SVGS[normType];
  if (!svg) return null;

  try {
    const pngBytes = await rasterizeSvgToPng(svg, size, size);
    return new ImageRun({
      data: pngBytes,
      transformation: {
        width: size,
        height: size,
      },
      type: 'png',
    });
  } catch (err) {
    console.warn(`Failed to create ImageRun for logo: ${type}`, err);
    return null;
  }
}
