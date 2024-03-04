export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees).flat();

  return {
    * [Symbol.iterator]() {
      for (const employee of departments) {
        yield employee;
      }
    },
  };
}
