import { formatter } from "./formatter";

it("should format currency", () => {
  expect(formatter().format(1000)).toBe("1.000,00\xa0€");

  expect(formatter(["en-GB", "currency", "GBP"]).format(1500)).toBe(
    "£1,500.00"
  );
});
