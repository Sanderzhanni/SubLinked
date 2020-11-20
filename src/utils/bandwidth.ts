const subredditName = 'test';
const postCount = 1;

export const ping = async (): Promise<number> => {
  let responseTime = 10 ** 6;
  const t0 = performance.now();
  const response = await fetch(`/api/graph?subreddit=${subredditName}&post_count=${postCount}`, {})
    .then(() => {
      responseTime = performance.now() - t0;
      return responseTime;
    })
    .catch(() => 0);
  return response / 1000;
};

export const calcResTime = (
  resTime: number,
  posts: number,
): number => {
  const single = resTime * 0.25;
  const multiplier = 38 * Math.log(posts - 12) / Math.LN10;
  return single * multiplier;
};
