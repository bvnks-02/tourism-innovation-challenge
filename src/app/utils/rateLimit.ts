const STORAGE_KEY = 'exploria_registration_timestamps';
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

export function checkRateLimit(): { allowed: boolean; remaining: number; resetIn: number } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const timestamps: number[] = raw ? JSON.parse(raw) : [];
    const now = Date.now();
    const cutoff = now - WINDOW_MS;

    // Keep only timestamps within the window
    const recent = timestamps.filter((t) => t > cutoff);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));

    if (recent.length >= MAX_ATTEMPTS) {
      const oldest = recent[0];
      const resetIn = Math.ceil((oldest + WINDOW_MS - now) / 1000);
      return { allowed: false, remaining: 0, resetIn };
    }

    return { allowed: true, remaining: MAX_ATTEMPTS - recent.length, resetIn: 0 };
  } catch {
    // If localStorage is unavailable, allow submission
    return { allowed: true, remaining: MAX_ATTEMPTS, resetIn: 0 };
  }
}

export function recordSubmission(): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const timestamps: number[] = raw ? JSON.parse(raw) : [];
    timestamps.push(Date.now());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timestamps));
  } catch {
    // Silently fail if localStorage is unavailable
  }
}
