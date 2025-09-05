export function getUserRole(user) {
  const appKey = process.env.APPLICATION_KEY;
  if (!user || !user.applications) {
    throw new Error("User tidak valid atau tidak punya aplikasi");
  }

  const app = user.applications.find((a) => a.applicationKey === appKey);

  if (!app) {
    throw new Error(
      `Application dengan key "${appKey}" tidak ditemukan untuk user ini`
    );
  }

  return {
    role: app.role,
    subrole: app.subrole,
  };
}
