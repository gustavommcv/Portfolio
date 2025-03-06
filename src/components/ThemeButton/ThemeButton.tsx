import { useTheme } from "../../context/ThemeContextProvider";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button class="theme-button" onClick={toggleTheme}>
      {theme() === "light" ? (
        <p role="img" aria-label="Sun">
          🌞
        </p>
      ) : (
        <p role="img" aria-label="Moon">
          🌜
        </p>
      )}
    </button>
  );
}
