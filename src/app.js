export default class ErrorRepository {
  constructor() {
    this.errors = new Map([ 
      [ 400, "Bad Request" ],
      [ 401, "Unauthorized" ],
      [ 403, "Forbidden" ]
    ]);
  };
  
  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    };
    return "Unknown error";
  };
}