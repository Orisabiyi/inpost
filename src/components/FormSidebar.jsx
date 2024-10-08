import logo from "../assets/logo.svg";

function FormSidebar({ children }) {
  return (
    <section className="flex flex-col items-start justify-between flex-auto w-1/2 h-850 bg-blue-200 rounded-4 p-12">
      <img src={logo} alt="inpost company logo" />

      <div className="text-gray-600">
        <p className="text-16 mb-4">Step 1/4</p>
        <h1 className="flex flex-col items-start text-60 leading-none">
          {children}

          <div className="flex items-center justify-center gap-4 mt-10">
            <span className="bg-blue-600 w-36 h-6 rounded-full"></span>
            <span className="bg-white w-6 h-6 rounded-full"></span>
            <span className="bg-white w-6 h-6 rounded-full"></span>
            <span className="bg-white w-6 h-6 rounded-full"></span>
          </div>
        </h1>
      </div>
    </section>
  );
}

export default FormSidebar;
