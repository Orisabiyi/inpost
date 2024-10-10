function Section({ children }) {
  return (
    <section className="flex-auto flex flex-col items-stretch justify-center self-center gap-10 w-1/2 px-12">
      {children}
    </section>
  );
}

export default Section;
