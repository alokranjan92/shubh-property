import { GripVertical, ImagePlus, UploadCloud } from "lucide-react";
import { Input } from "@/components/ui/input";

export function PropertyImageManager() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-dashed border-border bg-secondary/35 p-5">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
            <UploadCloud className="h-6 w-6" aria-hidden="true" />
          </span>
          <p className="mt-4 font-semibold">Drag and drop gallery images</p>
          <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
            Cloudinary upload will connect here in a future media sprint. This area is prepared for cover image,
            gallery ordering, alt text and optimization.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-border bg-background p-4">
          <div className="flex h-36 items-center justify-center rounded-md bg-secondary text-muted-foreground">
            <ImagePlus className="h-7 w-7" aria-hidden="true" />
          </div>
          <label className="mt-4 block text-sm font-medium" htmlFor="coverImageAlt">
            Cover image alt text
          </label>
          <Input id="coverImageAlt" name="coverImageAlt" className="mt-2" placeholder="Describe the cover image" />
        </div>

        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-background p-3">
              <GripVertical className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <div className="h-14 w-16 shrink-0 rounded-md bg-secondary" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Gallery image {item}</p>
                <p className="text-xs text-muted-foreground">Order and alt text placeholder</p>
              </div>
              <span className="text-xs font-medium text-muted-foreground">#{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
