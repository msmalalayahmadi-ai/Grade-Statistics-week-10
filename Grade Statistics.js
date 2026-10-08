// Get class statistics: highest, lowest, and average grade
function getClassStats(grades) {
    let highest = grades[0];
    let lowest = grades[0];
    let sum = 0;

    // Use one for...of loop to process all grades
    for (const grade of grades) {
        sum += grade;
        if (grade > highest) {
            highest = grade;
        }
        if (grade < lowest) {
            lowest = grade;
        }
    }
    // Calculate the average
    const average = sum / grades.length;

    // results as an object
    return {
        highest: highest,
        lowest: lowest,
        average: average
    };
}
// Test the function with the required array
const grades = [88, 95, 72, 91, 65];
const results = getClassStats(grades);
console.log(results);