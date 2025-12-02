# Agência Lusso - Image Requirements & Optimization Guide

## Directory Structure Created

```
public/images/
├── lusso-logo.svg                    ✅ Created
├── hero/
│   └── hero-background.jpg          ❌ Needed
├── icons/
│   ├── instagram.svg                ✅ Using Lucide React
│   ├── whatsapp.svg                 ✅ Using Lucide React
│   └── behance.svg                  ✅ Using Lucide React
└── portfolio/
    ├── janaina-tayeda/
    │   ├── thumb.jpg                ❌ Needed
    │   ├── 1.jpg                    ❌ Needed
    │   ├── 2.jpg                    ❌ Needed
    │   └── 3.jpg                    ❌ Needed
    ├── mova/
    │   ├── thumb.jpg                ❌ Needed
    │   ├── 1.jpg                    ❌ Needed
    │   └── 2.jpg                    ❌ Needed
    ├── crioexpress/
    │   ├── thumb.jpg                ❌ Needed
    │   ├── 1.jpg                    ❌ Needed
    │   └── 2.jpg                    ❌ Needed
    ├── smc/
    │   ├── thumb.jpg                ❌ Needed
    │   └── 1.jpg                    ❌ Needed
    ├── thrift-store/
    │   ├── thumb.jpg                ❌ Needed
    │   └── 1.jpg                    ❌ Needed
    └── cosmetics/
        ├── thumb.jpg                ❌ Needed
        └── 1.jpg                    ❌ Needed
```

## Image Optimization Specifications

### Portfolio Images

**Source:** Download from https://www.behance.net/agencialusso

**Format:** WebP (preferred) or JPG
**Max Width:** 1920px
**Quality:** 85%
**Naming Convention:**
- `thumb.jpg` - Thumbnail/preview (800x600px recommended)
- `1.jpg`, `2.jpg`, `3.jpg` - Full-size project images

**Optimization Command (using ImageMagick or similar):**
```bash
convert input.jpg -resize 1920x1920\> -quality 85 output.webp
```

### Hero Background Image

**Dimensions:** 1920x1080px (Full HD)
**Format:** JPG or WebP
**Quality:** 80-85%
**File Size Target:** < 300KB
**Subject:** Abstract/gradient background or agency workspace
**Colors:** Should complement burgundy (#6B1F1F) and gold (#D4AF37)

### Logo

✅ **Current Status:** SVG logo created with burgundy and gold
**File:** `/public/images/lusso-logo.svg`
**Dimensions:** 120x40px viewBox
**Usage:** Header (responsive: 32px mobile, 40px desktop)

## Portfolio Projects to Download

### 1. Janaina Tayeda Hair Studio
- **Behance URL:** https://www.behance.net/gallery/165582853/Hair-studio-Janaina-Tayeda
- **Images Needed:** Logo, business cards, color palette showcase
- **Priority:** HIGH (featured project)

### 2. MOVA Sportswear
- **Behance URL:** https://www.behance.net/gallery/163883745/Sportswear-brand-visual-identity
- **Images Needed:** Logo, brand applications, color palette
- **Priority:** HIGH (featured project)

### 3. CrioExpress
- **Behance URL:** https://www.behance.net/gallery/160070363/Visual-identity-CrioExpress
- **Images Needed:** Logo, vehicle mockups, stationery
- **Priority:** HIGH (featured project)

### 4. SMC (Additional project)
- **Priority:** MEDIUM

### 5. Thrift Store (Additional project)
- **Priority:** MEDIUM

### 6. Cosmetics (Additional project)
- **Priority:** MEDIUM

## Implementation Checklist

### Current State
- ✅ Directory structure created
- ✅ Logo SVG created and integrated in Header
- ✅ Gradient placeholders in use for portfolio cards
- ✅ Icons using Lucide React (Instagram, WhatsApp, etc.)
- ✅ Next.js Image component setup for optimization

### To Complete
- ❌ Download portfolio images from Behance
- ❌ Optimize images to WebP format
- ❌ Add images to respective directories
- ❌ Update `lib/portfolio-data.ts` with actual image paths
- ❌ Add hero background image
- ❌ Test all images load correctly
- ❌ Verify alt text for accessibility (all images)

## Next.js Image Component Usage

### Portfolio Cards (Already Implemented)
Currently using gradient placeholders. When images are ready:

```typescript
// In PortfolioCard.tsx - replace gradient div with:
<Image
  src={project.thumbnail}
  alt={`${project.title} - ${project.client}`}
  width={800}
  height={600}
  className="object-cover"
  loading="lazy"
/>
```

### Hero Background (To Implement)
```typescript
// In Hero.tsx - add background image:
<div className="relative">
  <Image
    src="/images/hero/hero-background.jpg"
    alt="Agência Lusso workspace"
    fill
    className="object-cover opacity-10"
    priority
  />
  {/* Existing hero content */}
</div>
```

## Accessibility Requirements

All images MUST have:
1. **Descriptive `alt` text** - Describe what's in the image
2. **Proper `width` and `height`** - Prevents layout shift
3. **`loading` attribute** - "lazy" for below fold, "eager" or "priority" for above fold
4. **Fallback colors** - Background colors while images load

### Alt Text Examples
- Logo: "Agência Lusso"
- Portfolio: "Janaina Tayeda Hair Studio brand identity showcase"
- Hero: "Modern agency workspace with creative team"
- Service icons: Already have screen reader text via Lucide

## Performance Targets

- **LCP (Largest Contentful Paint):** < 2.5s
- **Image File Sizes:**
  - Thumbnails: < 50KB
  - Full images: < 200KB
  - Hero: < 300KB
- **Total Page Weight:** < 2MB initial load

## Browser Support

- **WebP:** Supported in all modern browsers
- **Fallback:** Next.js Image automatically provides JPG fallback
- **Lazy Loading:** Native browser support + Next.js optimization

## Notes

1. **Current Placeholders:** Portfolio cards show gradient backgrounds with client names - these work well as placeholders
2. **Behance Integration:** Portfolio cards link directly to Behance projects for full viewing
3. **Icons:** Using Lucide React for all UI icons (Instagram, WhatsApp, etc.) - no need for separate SVG files
4. **Logo:** Custom SVG created with burgundy/gold branding - can be replaced with client's actual logo if different

## Update Instructions

When images are ready:

1. **Add images to directories** following the structure above
2. **Update portfolio-data.ts:**
   ```typescript
   thumbnail: "/images/portfolio/janaina-tayeda/thumb.jpg"
   images: [
     "/images/portfolio/janaina-tayeda/1.jpg",
     "/images/portfolio/janaina-tayeda/2.jpg"
   ]
   ```
3. **Replace gradient placeholders** in PortfolioCard.tsx
4. **Add hero background** in Hero.tsx
5. **Test on localhost** to ensure all images load
6. **Run Lighthouse audit** to verify performance

---

**Last Updated:** Phase 8 - Images & Assets Setup
**Status:** Structure ready, awaiting actual images from Behance
