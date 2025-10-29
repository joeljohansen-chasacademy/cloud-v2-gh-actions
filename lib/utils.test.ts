import { getRelativeTime } from "./utils";

describe("getRelativeTime", () => {
	it("returns seconds ago for recent dates", () => {
		const now = new Date();
		const fiveSecondsAgo = new Date(now.getTime() - 5000).toISOString();
		const result = getRelativeTime(fiveSecondsAgo);
		expect(result).toBe("5s ago");
	});

	it("returns minutes ago for timestamps that happened minutes ago", () => {
		const now = new Date();
		const tenMinutesAgo = new Date(
			now.getTime() - 10 * 60 * 1000
		).toISOString();
		const result = getRelativeTime(tenMinutesAgo);
		expect(result).toBe("10m ago");
	});

	it("returns hours ago for timestamps that happened hours ago", () => {
		const now = new Date();
		const sixHoursAgo = new Date(
			now.getTime() - 6 * 60 * 60 * 1000
		).toISOString();
		const result = getRelativeTime(sixHoursAgo);
		expect(result).toBe("6h ago");
	});

	it("returns days ago for timestamps that happened days ago", () => {
		const now = new Date();
		const threeDaysAgo = new Date(
			now.getTime() - 3 * 24 * 60 * 60 * 1000
		).toISOString();
		const result = getRelativeTime(threeDaysAgo);
		expect(result).toBe("3d ago");
	});
	/* 
	describe("edge cases", () => {
		it("handles boundary between seconds and minutes (59 seconds)", () => {
			const now = new Date();
			const time = new Date(now.getTime() - 59 * 1000).toISOString();
			expect(getRelativeTime(time)).toBe("59s ago");
		});

		it("handles boundary between minutes and hours (59 minutes)", () => {
			const now = new Date();
			const time = new Date(now.getTime() - 59 * 60 * 1000).toISOString();
			expect(getRelativeTime(time)).toBe("59m ago");
		});

		it("handles boundary between hours and days (23 hours)", () => {
			const now = new Date();
			const time = new Date(now.getTime() - 23 * 60 * 60 * 1000).toISOString();
			expect(getRelativeTime(time)).toBe("23h ago");
		});

		it("handles future dates by treating them as 0 seconds ago", () => {
			const now = new Date();
			const futureDate = new Date(now.getTime() + 1000 * 60).toISOString();
			expect(getRelativeTime(futureDate)).toBe("0s ago");
		});

		it("handles invalid date strings by returning 0s ago", () => {
			expect(getRelativeTime("invalid-date")).toBe("0s ago");
		});

		it("handles very old dates (more than 30 days)", () => {
			const now = new Date();
			const veryOldDate = new Date(
				now.getTime() - 45 * 24 * 60 * 60 * 1000
			).toISOString();
			expect(getRelativeTime(veryOldDate)).toBe("45d ago");
		});
	}); */
});
