import ErrorRepository from "../app";

test.each([
  [ 400, "Bad Request" ],
  [ 401, "Unauthorized" ],
  [ 403, "Forbidden" ],
  [ 404, "Unknown error" ],
])
("Проверка ошибок", (code, description) => {
    expect(new ErrorRepository().translate(code)).toBe(description);
  },
);