const GITHUB_USER = "Luizinho771";

export type Project = {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

/**
 * Fetched once at build time (static export). Returns [] on failure so an
 * offline or rate-limited build still succeeds — the section renders a
 * fallback link to the GitHub profile instead.
 */
export async function getProjects(): Promise<Project[]> {
  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=100`,
      { headers }
    );
    if (!res.ok) {
      console.warn(`GitHub API returned ${res.status}; rendering fallback.`);
      return [];
    }
    const repos: GitHubRepo[] = await res.json();
    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .slice(0, 6)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
      }));
  } catch (error) {
    console.warn("GitHub API fetch failed; rendering fallback.", error);
    return [];
  }
}

export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USER}`;
