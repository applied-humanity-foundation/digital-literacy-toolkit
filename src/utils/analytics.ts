interface AnalyticsEvent {
  type: string;
  moduleId?: string;
  timestamp: number;
  data?: Record<string, unknown>;
}

const ANALYTICS_KEY = 'dlt-analytics';
const MAX_EVENTS = 500;

function getEvents(): AnalyticsEvent[] {
  try {
    const raw = localStorage.getItem(ANALYTICS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveEvent(event: AnalyticsEvent): void {
  const events = getEvents();
  events.push(event);
  if (events.length > MAX_EVENTS) {
    events.splice(0, events.length - MAX_EVENTS);
  }
  try {
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(events));
  } catch {
    // Storage full — silently ignore
  }
}

export function trackModuleStart(moduleId: string): void {
  saveEvent({ type: 'module_start', moduleId, timestamp: Date.now() });
}

export function trackModuleComplete(moduleId: string, score: number): void {
  saveEvent({ type: 'module_complete', moduleId, timestamp: Date.now(), data: { score } });
}

export function trackQuizAttempt(moduleId: string, correct: number, total: number): void {
  saveEvent({
    type: 'quiz_attempt',
    moduleId,
    timestamp: Date.now(),
    data: { correct, total, percent: Math.round((correct / total) * 100) },
  });
}

export function getAnalyticsSummary(): { totalStarts: number; totalCompletes: number; avgScore: number } {
  const events = getEvents();
  const starts = events.filter((e) => e.type === 'module_start').length;
  const completes = events.filter((e) => e.type === 'module_complete');
  const avgScore =
    completes.length > 0
      ? Math.round(completes.reduce((sum, e) => sum + ((e.data?.score as number) ?? 0), 0) / completes.length)
      : 0;
  return { totalStarts: starts, totalCompletes: completes.length, avgScore };
}
