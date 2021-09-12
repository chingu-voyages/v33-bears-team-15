import { useState, useEffect } from "react";
import Image from "next/image";
import MoonIcon from "~/assets/icons/moonIcon";
import SunIcon from "~/assets/icons/sunIcon";
import Link from "./common/link";
import Container from "./ui/container";

// @TODO We need a better API to work with
// `localStorage`. Need to add to a `utils`
export default function Header(): JSX.Element {
  const [isDark, setIsDark] = useState(true);

  // @TODO We need to extract theaming logic into a hook
  const handleThemeSwitch = (type: "dark" | "light") => {
    if (type === "dark") {
      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");
      localStorage.setItem("checked", JSON.stringify(true));
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");
      localStorage.setItem("checked", JSON.stringify(false));
      setIsDark(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add(localStorage.getItem("theme"));
    }

    if (localStorage.getItem("checked")) {
      setIsDark(JSON.parse(localStorage.getItem("checked")));
    }
  }, []);

  return (
    <header className="z-30 h-24 relative">
      <Container className="flex justify-between items-center h-full">
        <Link href="/">
          <Image width={125} height={37} src="/images/logo.png" />
        </Link>

        <div className="flex items-center">
          {isDark ? (
            <button type="button" onClick={() => handleThemeSwitch("light")}>
              <SunIcon className="w-6 text-gray-50" />
            </button>
          ) : (
            <button type="button" onClick={() => handleThemeSwitch("dark")}>
              <MoonIcon className="w-6 text-gray-50" />
            </button>
          )}

          <Link href="/signin" className="ml-6 text-gray-50 font-semibold">
            Sign In
          </Link>
        </div>
      </Container>
    </header>
  );
}
