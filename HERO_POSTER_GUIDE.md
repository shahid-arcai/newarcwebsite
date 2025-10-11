# Hero Poster Image Optimization Guide

## CRITICAL: Create Optimized Hero Poster

To fix the LCP (Largest Contentful Paint) issue, you MUST create an optimized hero poster image.

### Requirements:

1. **Filename**: `hero-poster.jpg` (place in `/public/` folder)

2. **Dimensions**: 
   - Width: 1920px
   - Height: 1080px (16:9 aspect ratio)

3. **Format**: JPEG (or WebP for better compression)

4. **Quality**: 70-80% (balance between quality and file size)

5. **File Size Target**: < 150 KB

6. **Content**: 
   - Extract the first frame from `herovideo.mp4`
   - OR create a static image that represents the video content
   - Should match the video's aesthetic (dark, professional)

### How to Create:

#### Option 1: Extract from video (using FFmpeg)
```bash
ffmpeg -i public/herovideo.mp4 -ss 00:00:00 -vframes 1 -vf scale=1920:1080 -q:v 2 public/hero-poster.jpg
```

#### Option 2: Use video editor
- Open `herovideo.mp4` in any video editor
- Export first frame as JPG
- Resize to 1920x1080
- Compress to < 150 KB

#### Option 3: Use online tool
- Upload video to https://ezgif.com/video-to-jpg
- Extract first frame
- Download and optimize

### Optimization Tools:

- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim**: https://imageoptim.com/ (Mac)

### After Creating:

1. Place `hero-poster.jpg` in `/public/` folder
2. Verify file size is < 150 KB
3. Test LCP improvement in Lighthouse

## Current Issue:

The video is currently using `/placeholder.svg` as poster, which:
- Doesn't represent the actual video
- Delays LCP until video loads
- Causes poor user experience

## Expected Improvement:

With optimized poster:
- LCP: 5.7s → < 2.5s ⚡
- Speed Index: 12s → < 4s ⚡
- Performance Score: +15-20 points 📈
