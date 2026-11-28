// Where one wheel gesture should land among the snap points, or null to let the page scroll normally.
export function snapStep(points, y, delta, vh) {
  const first = points[0];
  const last = points[points.length - 1];
  if (delta > 0) {
    const next = points.find((p) => p > y + 2);
    const entering = y < first && y + delta >= first - vh * 0.3;
    return next !== undefined && (y >= first - 2 || entering) ? next : null;
  }
  if (delta < 0) {
    const prev = [...points].reverse().find((p) => p < y - 2);
    const entering = y > last && y + delta <= last + vh * 0.3;
    return prev !== undefined && (y <= last + 2 || entering) ? prev : null;
  }
  return null;
}
