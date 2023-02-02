export const getViewWidth = (percent: number): number => {
  const width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (percent * width) / 100;
};
