export const distinctBy = <T>(items: T[], key: keyof T): T[] => {
  return items.reduce((accumulated, current) => {
    if (!accumulated.find((a) => current[key] === a[key])) {
      accumulated.push(current);
    }
    return accumulated;
  }, [] as T[]);
};
