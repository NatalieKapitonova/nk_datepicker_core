export const sha = import.meta.env.SNOWPACK_PUBLIC_GIT_SHA || "arandomsha";
export const title = import.meta.env.SNOWPACK_PUBLIC_TITLE || "Datepicker";
export const basename = import.meta.env.SNOWPACK_PUBLIC_URL;

const ghUrl = "https://github.com/nataliekapitonova/nk_datepicker_core";

export const github = { sha: `${ghUrl}/commit/${sha}`, url: ghUrl };
