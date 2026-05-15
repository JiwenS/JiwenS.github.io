const WORDS_PER_MINUTE = 225;

export function getReadingTimeMinutes(body: string): number {
  const words = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/<[^>]+>/g, " ")
    .match(/\b[\w'-]+\b/g);

  return Math.max(1, Math.ceil((words?.length ?? 0) / WORDS_PER_MINUTE));
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
