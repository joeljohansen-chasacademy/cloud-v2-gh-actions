import { getRelativeTime } from "./utils";

describe("getRelativeTime", () => {
  it("returns seconds ago for recent dates", () => {
    const now = new Date();
    const fiveSecondsAgo = new Date(now.getTime() - 5000).toISOString();
    const result = getRelativeTime(fiveSecondsAgo);

    expect(result).toBe("5s ago");
  });

  it("returns minutes ago for slightly older timestamps", () => {
    const now = new Date();
    const tenMinutesAgo = new Date(
      now.getTime() - 10 * 60 * 1000
    ).toISOString();
    const result = getRelativeTime(tenMinutesAgo);

    expect(result).toBe("10m ago");
  });

  // Demo: ett test som ska faila så vi ser röd bock i CI
  it("intentionally fails so we can demo CI feedback", () => {
    const result = getRelativeTime(new Date().toISOString());
    // Det här kommer inte stämma, och det är meningen :)
    expect(result).toBe("now");
  });
});
