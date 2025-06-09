export default function Home() {
  const articles = ([
    {
      title: "Jews in Syria",
      link: "https://weeklygazette.substack.com/p/jews-in-syria"
    },
    {
      title: "The Catch-22 for Syrian Refugees in Azraq, Jordan",
      link: "https://weeklygazette.substack.com/p/the-catch-22-for-syrian-refugees",
    },
    {
      title: "Seven Days in Palestine",
      link: "https://weeklygazette.substack.com/p/seven-days-in-palestine",
    },
    {
      title: "The Cost of War",
      link: "https://weeklygazette.substack.com/p/the-cost-of-war",
    },
  ]);

  return (
      <div className="flex flex-col p-10 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-y-10">
          <section>
            <header className="font-bold text-5xl">The Weekly Gazette</header>
            <header className="text-xl pt-1">In-depth journalism about any story worth telling</header>
          </section>
          <section>
            <header className="font-bold pb-1 text-3xl">Articles and essays</header>
            <ol className="text-xl">
              {articles.map(({title, link}) => (
                  <li key={title}>
                    <a className="hover:text-orange-300" href={link}>{title}</a>
                  </li>
              ))}
            </ol>
          </section>
          <section>
            <header className="font-bold pb-1 text-3xl">Interactive reporting</header>
            <p className="italic text-xl">Coming soon</p>
          </section>
          <section>
            <header className="font-bold text-3xl">About us</header>
            <ol className="text-xl">
              <li>
                <a className="hover:text-orange-300" href="https://weeklygazette.substack.com/about">
                  The team
                </a>
              </li>
              <li>
                <a className="hover:text-orange-300" href="https://weeklygazette.substack.com/about">
                  Support our journalism
                </a>
              </li>
            </ol>
          </section>
        </main>
      </div>
  );
}
