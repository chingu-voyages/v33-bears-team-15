import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [mode, setMode] = useState('dark');
  const [checked, setChecked] = useState(true);

  const handleChange = (e) => {
    const theme = e.target;
    if (theme.checked) {
      localStorage.theme = 'dark';
      localStorage.checked = true;

      setMode('dark');
      setChecked(true);
    } else {
      localStorage.theme = '';
      localStorage.checked = 'false';
      setMode('');
      setChecked(false);
    }
  };
  useEffect(() => {
    window.onload = function () {
      if (localStorage) {
        setMode(localStorage.theme);
        setChecked(JSON.parse(localStorage.checked));
        setLoaded(true);
      }
    };
  }, []);
  const baseStyle =
    'flex flex-col items-center justify-center min-h-screen py-2';

  return loaded ? (
    <div className={`${baseStyle} ${mode}`}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-black flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <label htmlFor="toggle-switch" className="flex py-8">
          <h1 className="text-3xl text-blue-600 font-bold py-8 px-5">
            Dark mode:{' '}
          </h1>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            id="toggle-switch"
            className="cursor-pointer h-32 w-64 rounded-full appearance-none bg-white bg-opacity-10 border-neon border-2 checked:bg-gray-600 transition duration-200 relative"
          />
        </label>
        <h1 className="text-6xl font-bold text-blue-600">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl text-blue-600">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl text-blue-600">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl text-blue-600">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl text-blue-600">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl text-blue-600">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  ) : null;
}
