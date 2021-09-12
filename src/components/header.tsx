import { useState, useEffect, ChangeEvent } from "react";

export default function Header(): JSX.Element {
  const [checked, setChecked] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const theme = e.target;
    if (theme.checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      localStorage.setItem("checked", JSON.stringify(true));
      setChecked(true);
    } else {
      document.documentElement.classList.remove("dark");

      localStorage.removeItem("theme");
      localStorage.setItem("checked", JSON.stringify(false));
      setChecked(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add(localStorage.getItem("theme"));
    }

    setChecked(JSON.parse(localStorage.getItem("checked")));
  }, []);

  return (
    <header>
      <label htmlFor="toggle-switch" className="flex py-8">
        <h1 className="text-3xl text-blue-600 font-bold py-8 px-5">Dark mode: </h1>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          id="toggle-switch"
          className="cursor-pointer h-32 w-64 rounded-full appearance-none bg-white bg-opacity-10 border-neon border-2 checked:bg-gray-600 transition duration-200 relative"
        />
      </label>
    </header>
  );
}
