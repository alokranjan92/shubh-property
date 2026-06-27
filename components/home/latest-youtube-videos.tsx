import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/home/section-shell";
import { youtubeVideos } from "@/lib/homepage/data";

export function LatestYoutubeVideos() {
  return (
    <SectionShell
      eyebrow="Video learning"
      title="Latest YouTube videos"
      description="Buying, building and decorating guides that help customers make better property decisions."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {youtubeVideos.map((video) => (
          <Link
            key={video.title}
            href={video.href}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-lg border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative">
              <Image
                src={video.image}
                alt={video.title}
                width={1000}
                height={650}
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-primary shadow-xl">
                  <Play className="h-6 w-6 fill-current" aria-hidden="true" />
                </span>
              </span>
              <Badge className="absolute left-4 top-4" variant="secondary">
                {video.category}
              </Badge>
              <span className="absolute bottom-4 right-4 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white">
                {video.duration}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold leading-7">{video.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
