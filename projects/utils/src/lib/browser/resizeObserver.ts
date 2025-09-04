export function resizeObserver(
  target: Element,
  callback: (entry: ResizeObserverEntry) => void
) {
  function handleResize(entries: ResizeObserverEntry[]) {
    for (const entry of entries) {
      callback(entry);
    }
  }

  const observer = new ResizeObserver(handleResize);

  observer.observe(target);

  return observer;
}
