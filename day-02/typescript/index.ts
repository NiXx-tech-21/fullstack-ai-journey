// 1st Exercise
type User = {
    id: number;
    name: string;
    email: string;
    role: "ADMIN" | "USER";
}

const user: User = {
  id: 101,
  name: "Nikhil",
  email: "nikhil@example.com",
  role: "ADMIN"
};

function getProperty<T, K extends keyof T>(
  object: T,
  key: K
): T[K] {
  return object[key];
}

console.log(getProperty(user, "name"));
console.log(getProperty(user, "id"));
console.log(getProperty(user, "role"));

// 2nd Exercise
type Project = {
  id: number;
  name: string;
  description: string;
  status: "TODO" | "IN_PROGRESS" | "COMPLETED";
  owner: string;
};

type ProjectSummary = Pick<Project, "id" | "name" | "status">

type ProjectWithoutOwner = Omit<Project, "owner">

type ProjectStatus = | "TODO" | "IN_PROGRESS" | "COMPLETED";

type ProjectStatusCount = Record<ProjectStatus, number>;

// 3rd Exercise 
type ApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return await response.json();
}

// 4th Exercise
function updateObject<T>(object: T, updates: Partial<T>): T {
  return {
    ...object,
    ...updates
  };
}