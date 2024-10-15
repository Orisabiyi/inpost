function Section({ children, className = "" }) {
  return (
    <section
      className={`flex-auto flex flex-col items-stretch justify-center self-center gap-10 w-1/2 px-12 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
