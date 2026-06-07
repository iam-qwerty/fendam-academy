"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/fetcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface LessonData {
  id: string;
  title: string;
  vimeoId: string;
  resources: { title: string; url: string; type: string }[];
  moduleTitle: string;
  isCompleted: boolean;
}

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const lessonId = params.id as string;

  const { data: lesson, isLoading } = useQuery({
    queryKey: ["student", "lessons", lessonId],
    queryFn: () => apiFetch<LessonData>(`/student/lessons/${lessonId}`),
    staleTime: 30 * 60 * 1000,
    enabled: !!lessonId,
  });

  const completeMutation = useMutation({
    mutationFn: () =>
      apiFetch(`/student/lessons/${lessonId}/complete`, { method: "POST" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["student", "lessons", lessonId] });
      queryClient.invalidateQueries({ queryKey: ["student", "dashboard"] });
    },
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="aspect-video w-full" />
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Lesson not found
      </div>
    );
  }

  const resources = Array.isArray(lesson.resources) ? lesson.resources : [];

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{lesson.moduleTitle}</p>
          <h1 className="text-2xl font-bold tracking-tight mt-1">
            {lesson.title}
          </h1>
        </div>
        {lesson.isCompleted ? (
          <Badge variant="default" className="shrink-0">
            ✓ Completed
          </Badge>
        ) : (
          <Button
            onClick={() => completeMutation.mutate()}
            disabled={completeMutation.isPending}
            className="shrink-0"
          >
            {completeMutation.isPending ? "Marking..." : "Mark as Complete"}
          </Button>
        )}
      </div>

      <div className="aspect-video w-full rounded-xl overflow-hidden bg-muted border border-border">
        <iframe
          src={`https://player.vimeo.com/video/${lesson.vimeoId}`}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={lesson.title}
        />
      </div>

      {resources.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {resources.map((resource, i) => (
                <a
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-sm hover:bg-accent/50 transition-colors"
                >
                  <Badge variant="outline" className="uppercase text-xs">
                    {resource.type}
                  </Badge>
                  <span>{resource.title}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Button variant="ghost" onClick={() => router.back()}>
        ← Back to modules
      </Button>
    </div>
  );
}
