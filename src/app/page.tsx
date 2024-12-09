import Interactive from './components/interactive';
// .click-shake {
//   background: #20bdbd;
// }

// .click-shake:active {
//   animation: shake 0.5s ease-in-out;
// }

// @keyframes shake {
//   0%, 100% {
//       transform: translateX(0);
//   }
//   10%, 30%, 50%, 70%, 90% {
//       transform: translateX(-5px);
//   }
//   20%, 40%, 60%, 80% {
//       transform: translateX(5px);
//   }
// }
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Finding Prefix...</h1>
        <Interactive></Interactive>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
      </footer>
    </div>
  );
}
