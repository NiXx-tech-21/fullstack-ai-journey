const user = {
  name: "Nikhil",
  age: 25,
  skills: ["React", "TypeScript"],
};

const user2 = user;

const user3 = { ...user };

user2.name = "Rahul";
user3.age = 30;
user3.skills.push("Node.js");

console.log("user:", user);
console.log("user2:", user2);
console.log("user3:", user3);

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

function fetchUser() {
  return Promise.resolve({
    id: 1,
    name: "Nikhil",
  });
}

function fetchProjects() {
  return Promise.resolve(["Project A", "Project B"]);
}

async function loadDashboard() {
  const [user, projects] = await Promise.all([fetchUser(), fetchProjects()]);

  console.log("User:", user.name);
  console.log("Projects:", projects.join(", "));
}

console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");

async function getUsers() {
  try {
    const responseData = await fetch("/api/members");

    if (!responseData.ok) {
      throw new Error(`HTTP error: ${responseData.status}`);
    }

    const data = await responseData.json();
    return data;
  } catch (error) {
    console.log("Failed:", error);
  }
}

async function getProjects() {
  try {
    const getData = await fetch("/api/projects");

    if (!getData.ok) {
      throw new Error(`HTTP error: ${getData.status}`);
    }
    const data = await getData.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch projects");
  }
}

function debounce(callback, delay) {
  let timerId;

  return function () {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function throttle(callback, delay) {
  let canRun = true;

  return function (...args) {
    if (!canRun) {
      return;
    }
    callback(...args);
    canRun = false;
    setTimeout(() => {
      canRun = true;
    }, delay);
  };
}
