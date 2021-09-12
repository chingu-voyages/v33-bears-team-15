import { useState, useEffect } from "react";
import Image from "next/image";
import MoonIcon from "~/assets/icons/moonIcon";
import SunIcon from "~/assets/icons/sunIcon";
import Link from "./common/link";
import Container from "./ui/container";
import useTheme from "~/hooks/use-theme";

export default function Header(): JSX.Element {
  const { toggle, isDark } = useTheme();

  return (
    <header className="z-30 h-24 relative">
      <Container className="flex justify-between items-center h-full">
        <Link href="/">
          <Image width={125} height={37} src="/images/logo.png" />
        </Link>

        <div className="flex items-center">
          {isDark ? (
            <button type="button" onClick={() => toggle("light")}>
              <SunIcon className="w-6 text-gray-50" />
            </button>
          ) : (
            <button type="button" onClick={() => toggle("dark")}>
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
