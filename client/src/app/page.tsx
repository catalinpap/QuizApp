import Link from "next/link";

export default function Home() {

  return (
      <div className={'flex flex-col h-full'}>
        <main className={'grow'}>

            <div className={'quiz-container flex flex-col items-center justify-center gap-8 h-1/3'}>
                <h1 className={'quiz-title mx-auto w-fit m-0'}>Ready for a quiz?</h1>
                <div className={'flex gap-4'}>
                    <Link href={'/0'} className={'quiz-action p-4 h-fit'}>Take demo quiz</Link>
                    <Link href={'#'} className={'quiz-action p-4 h-fit'}>Create a quiz (Coming soon)</Link>
                </div>

            </div>

        </main>
          <footer className={'footer'}>
           © 2025
        </footer>
      </div>
  );
}
