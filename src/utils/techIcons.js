const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export function techIcon(id) {
    const map = {
        react: ["react/react-original"],
        js: ["javascript/javascript-original"],
        tailwind: ["tailwindcss/tailwindcss-original"],
        html: ["html5/html5-original"],
        html5: ["html5/html5-original"],
        css: ["css3/css3-original"],
        css3: ["css3/css3-original"],
        node: ["nodejs/nodejs-original"],
        express: ["express/express-original"],
        python: ["python/python-original"],
        mongodb: ["mongodb/mongodb-original"],
        postgresql: ["postgresql/postgresql-original"],
        sql: ["azuresqldatabase/azuresqldatabase-original"],
        git: ["git/git-original"],
        github: ["github/github-original"],
        vscode: ["vscode/vscode-original"],
        vite: ["vitejs/vitejs-original"],
        postman: ["postman/postman-original"],
    };
    const path = map[id];
    return path ? `${DEVICON}/${path[0]}.svg` : null;
}

export const STACKS = {
    mern: ["mongodb", "express", "react", "node"],
    pern: ["postgresql", "express", "react", "node"],
};
