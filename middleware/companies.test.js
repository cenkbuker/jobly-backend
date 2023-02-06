const { validateCompanyCreation } = require("./companies");

describe("validateCompanyCreation", function () {
  test("works: with valid company name, handle and description", function () {
    // GIVEN
    const company = {
      name: "comp",
      handle: "compHandle",
      description: "This is my company",
    };
    // WHEN
    const result = validateCompanyCreation(company);

    // THEN
    expect(result).toEqual({ outcome: "valid" });
  });

  test("does not work: without valid a company name", function () {
    // GIVEN
    const company = {
      handle: "compHandle",
      description: "This is my company",
    };
    // WHEN
    const result = validateCompanyCreation(company);

    // THEN
    expect(result).toEqual({
      outcome: "notValid",
      errors: ['instance requires property "name"'],
    });
  });
});
