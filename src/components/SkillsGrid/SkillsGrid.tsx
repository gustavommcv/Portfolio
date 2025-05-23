import { useTheme } from "../../context/ThemeContextProvider";

export default function SkillsGrid() {
  const { theme } = useTheme();

  return (
    <>
      <p
        class={`about-page__paragraph about-page__paragraph--subtitle about-page__paragraph--subtitle--${theme()}`}
      >
        Skills:
      </p>
      <p class={`about-page__paragraph about-page__paragraph--${theme()}`}>
        <img
          alt="C"
          src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"
        />
        <a href="https://dotnet.microsoft.com/">
          <img
            alt="C#"
            src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white"
          />
        </a>
        <a href="https://www.oracle.com/br/java/technologies/downloads/">
          <img
            alt="Java"
            src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
          />
        </a>
        <img
          alt="JavaScript"
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
        />
        <a href="https://www.typescriptlang.org/">
          <img
            alt="Typescript"
            src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          />
        </a>
        <img
          alt="HTML"
          src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
        />
        <img
          alt="CSS"
          src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
        />
        <a href="https://react.dev/">
          <img
            alt="React"
            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          />
        </a>
        <a href="https://tailwindcss.com/">
          <img
            alt="Tailwind"
            src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
          />
        </a>
        <a href="https://www.mysql.com/">
          <img
            alt="MYSQL"
            src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
          />
        </a>
        <a href="https://mariadb.org/">
          <img
            alt="MARIADB"
            src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"
          />
        </a>
        <a href="https://dotnet.microsoft.com/">
          <img
            alt=".NET"
            src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white"
          />
        </a>
        <a href="https://pages.github.com/">
          <img
            alt="GitHub Pages"
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
          />
        </a>
        <a href="https://git-scm.com/">
          <img
            alt="Git"
            src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
          />
        </a>
        <a href="https://www.postman.com/">
          <img
            alt="Postman"
            src="https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white"
          />
        </a>
        <a href="https://code.visualstudio.com/">
          <img
            alt="Visual Studio Code"
            src="https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"
          />
        </a>
        <a href="https://nodejs.org/">
          <img
            alt="Node.js"
            src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
          />
        </a>
        <a href="https://expressjs.com/">
          <img
            alt="Express.js"
            src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
          />
        </a>
        <a href="https://www.mongodb.com/">
          <img
            alt="MongoDB"
            src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
          />
        </a>
        <a href="https://solidjs.com/">
          <img
            alt="Solid.js"
            src="https://img.shields.io/badge/Solid.js-2C4F7C?style=for-the-badge&logo=solid&logoColor=white"
          />
        </a>
      </p>
    </>
  );
}
