type Project = {
  id: number;
  name: string;
  status: "IN_PROGRESS" | "COMPLETED";
};

type ProjectStatus = {
  total: number;
  completed: number;
  inProgress: number;
  blocked: number;
};

export async function getProjects(): Promise<Project[]> {
  const response = await fetch("/api/projects");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return await response.json();
}

export async function getProjectStats(): Promise<ProjectStatus> {
  const response = await fetch("/api/projects/stats");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return await response.json();
}

export async function getRecentActivity() {
  const response = await fetch("/api/projects/activity");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return await response.json();
}

export async function getNotifications() {
  const response = await fetch("/api/projects/notifications");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return await response.json();
}

export async function getProjectDashboard() {
  const [projects, stats] = await Promise.all([
    getProjects(),
    getProjectStats(),
  ]);

  return { projects, stats };
}

const dashboard = await getProjectDashboard();

console.log(dashboard.projects);
console.log(dashboard.stats);

const results = await Promise.allSettled([
  getProjects(),
  getProjectStats(),
  getRecentActivity(),
  getNotifications(),
]);

export async function getProjectDashboardSafe() {
  const [projects, stats, recentActivity, notifications] =
    await Promise.allSettled([
      getProjects(),
      getProjectStats(),
      getRecentActivity(),
      getNotifications(),
    ]);

  return {
    projects: projects?.status === "fulfilled" ? projects?.value : null,
    stats: stats.status === "fulfilled" ? stats.value : null,
    recentActivity:
      recentActivity.status === "fulfilled" ? recentActivity.value : null,
    notifications:
      notifications.status === "fulfilled" ? notifications.value : null,
  };
}

export async function searchProjects(query: string) {
  const response = await fetch(`/api/projects/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return await response.json();
}

function debounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
) {
  let timeId: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timeId);

    timeId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debouncedSearch = debounce(async (query: string) => {
  try {
    const results = await searchProjects(query);
    console.log(results);
  } catch (error) {
    console.error(error);
  }
}, 300);