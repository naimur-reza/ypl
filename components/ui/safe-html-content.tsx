"use client";

import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { normalizeRichTextContent } from "@/lib/rich-text";

interface SafeHtmlContentProps {
  content: string;
  className?: string;
}

export function SafeHtmlContent({ content, className }: SafeHtmlContentProps) {
  if (!content) return null;

  const normalizedContent = normalizeRichTextContent(content);
  const hasHtmlTags = /<\/?[a-z][\s\S]*>/i.test(normalizedContent);

  if (!hasHtmlTags) {
    return (
      <div className={cn("prose prose-slate max-w-none dark:prose-invert", className)}>
        <ReactMarkdown>{normalizedContent}</ReactMarkdown>
      </div>
    );
  }

  return (
    <div
      className={cn("prose prose-slate max-w-none dark:prose-invert", className)}
      dangerouslySetInnerHTML={{ __html: normalizedContent }}
    />
  );
}
