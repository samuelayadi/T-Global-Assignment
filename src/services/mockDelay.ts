export async function mockDelay(ms: number) {
  return new Promise<void>((res) => setTimeout(res, ms));
}
