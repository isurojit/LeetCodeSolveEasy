/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const count = new Map();

  students.forEach((student) => {
    count.set(student, (count.get(student) || 0) + 1);
  });

  for (let i = 0; i < sandwiches.length; i++) {
    const sandwich = sandwiches[i];
    if (!count.has(sandwich) || count.get(sandwich) === 0) {
      return sandwiches.length - i;
    }
    count.set(sandwich, count.get(sandwich) - 1);
  }

  return 0;
};
