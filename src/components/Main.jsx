function Main({ children }) {
  return (
    <main
      className="flex items-stretch gap-16 bg-gray-100 p-8 2xl:container 2xl:mx-auto"
      style={{ fontFamily: "Filson Pro", fontWeight: "400" }}
    >
      {children}
    </main>
  );
}

export default Main;
