import os, sys
from PIL import Image, ImageDraw

SRC = os.path.join(os.path.dirname(__file__), "..", "public", "og.png")

img = Image.open(SRC).convert("RGB")
w, h = img.size

def find_overlay(pix):
    # scan down the leftmost columns for the small blue rounded badge
    # and return a thick bounding region to erase
    thickness = 0
    for y in range(0, h):
        r, g, b = pix[8, y]
        # badge is mostly bright blue: large B, low R, medium G
        if b > 70 and b > r + 40 and r < 60 and g < 110:
            thickness += 1
        else:
            break
    return thickness

def main():
    pix = img.load()
    h_overlay = find_overlay(pix)
    print("badge height estimate:", h_overlay, "at top")
    # sample buffer color just below and just right of the badge corner
    patch_w = 140
    patch_h = max(h_overlay + 8, 54)
    # sample a clean area to replicate (just inside the hairline region, x 220..240, y 10..patch_h)
    samples = []
    for y in range(10, 10 + patch_h):
        for x in range(220, 240):
            samples.append(pix[x, y])
    r_avg = int(sum(s[0] for s in samples) / len(samples))
    g_avg = int(sum(s[1] for s in samples) / len(samples))
    b_avg = int(sum(s[2] for s in samples) / len(samples))
    d = ImageDraw.Draw(img)
    # erase the badge and a clean margin to its left
    d.rectangle([0, 0, patch_w, patch_h], fill=(r_avg, g_avg, b_avg))
    # also cover the leftmost vertical hairline segment that the badge may overlap (if badge is wide enough)
    # reduplicate the gold hairline at x = 34 and y = 150.. so the corner is cleanly bordered
    img.save(SRC, optimize=True)
    print("patched og.png ->", img.size, "badge height", h_overlay, "fill", (r_avg, g_avg, b_avg))

if __name__ == "__main__":
    main()
