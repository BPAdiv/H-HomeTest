//////////////////////////////////////
//QUESTION NUMBER 1
function numberOfDaysPassed(givenDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const [day, month, year] = givenDate.split("/");

  const tempDate = new Date(year, month - 1, day);
  const currentDate = new Date();
  if (tempDate > currentDate) {
    console.log("The given date is not available");
  }
  const passedDays = Math.round((currentDate - tempDate) / oneDay);
  console.log("The number of days passed is " + passedDays);
}
// numberOfDaysPassed("01/07/2024");

/////////////////////////////
//QUESTION NUMBER 2

async function todosApi(todoId, userId) {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todosJson = await response.json();
  const todoById = todosJson.find((todo) => todo.id === todoId);
  const todosByUserId = todosJson.filter((todo) => todo.userId === userId);

  console.log(todoById ? todoById : "The todo does not exist");
  console.log(todosByUserId);
}

// todosApi(50, 11);

////////////////////////////////////
//QUESTION NUMBER 3

function createJsonFromData(...args) {
  const jsonObject = {};
  args.forEach((arg, index) => {
    jsonObject[`params${index + 1}`] = arg;
  });
  console.log(JSON.stringify(jsonObject));
}
const value1 = "String1";
const value2 = 42;
const value3 = true;
const value4 = "String4";
const value5 = 100.5;
const value6 = "String6";
const value7 = false;
const value8 = "String8";
const value9 = 2024;
const value10 = { key1: "value1", key2: "value2" };

// createJsonFromData(
//   value1,
//   value2,
//   value3,
//   value4,
//   value5,
//   value6,
//   value7,
//   value8,
//   value9,
//   value10
// );

//////////////////////////////////
//QUESTION NUMBER 4

function filterObjectByValue(dummyArray, chosenFields) {
  const currentDate = new Date();
  const filteredUsersData = dummyArray.filter((userData) => {
    if (currentDate > new Date(userData.date)) {
      return Object.values(userData).some((value) =>
        chosenFields.includes(value)
      );
    }
    return false;
  });

  if (filteredUsersData.length === 0) {
    console.log("Could not find matched users data");
  } else {
    console.log(JSON.stringify(filteredUsersData));
  }
  return filteredUsersData;
}
const dummyArray = [
  {
    name: "John Doe",
    age: 30,
    job: "Software Developer",
    relationStatus: "Single",
    date: "2023-05-15",
  },
  {
    name: "Jane Smith",
    age: 25,
    job: "Graphic Designer",
    relationStatus: "Married",
    date: "2022-08-22",
  },
  {
    name: "Sam Johnson",
    age: 40,
    job: "Project Manager",
    relationStatus: "Divorced",
    date: "2021-11-12",
  },
  {
    name: "Alice Brown",
    age: 35,
    job: "Marketing Specialist",
    relationStatus: "Single",
    date: "2020-03-29",
  },
  {
    name: "Bob White",
    age: 28,
    job: "Data Scientist",
    relationStatus: "In a relationship",
    date: "2024-01-17",
  },
  {
    name: "Emily Davis",
    age: 32,
    job: "HR Manager",
    relationStatus: "Married",
    date: "2023-07-30",
  },
  {
    name: "Michael Wilson",
    age: 45,
    job: "CEO",
    relationStatus: "Married",
    date: "2022-10-05",
  },
  {
    name: "Sarah Lee",
    age: 29,
    job: "Financial Analyst",
    relationStatus: "Single",
    date: "2023-02-14",
  },
  {
    name: "David King",
    age: 38,
    job: "Mechanical Engineer",
    relationStatus: "Divorced",
    date: "2021-06-18",
  },
  {
    name: "Laura Scott",
    age: 27,
    job: "Content Writer",
    relationStatus: "In a relationship",
    date: "2023-09-09",
  },
];
const chosenFields = ["John Doe", 27];

// filterObjectByValue(dummyArray, chosenFields);
