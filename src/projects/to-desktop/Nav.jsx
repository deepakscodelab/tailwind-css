import { useState } from "react";

export function Nav() {
  const [navClass, setNavClass] = useState("hidden");

  const handleClick = () => {
    setNavClass((preState) => (preState === "hidden" ? "" : "hidden"));
  };
  return (
    <nav className="flex items-center justify-between p-3">
      <a href="#" className="flex flex-1 items-center">
        <img className="max-h-12 max-w-12" src="asset 0.png" alt="Logo" />
        <span className="text-lg">ToDesktop</span>
      </a>

      <div id="nav-menu" className="hidden gap-12 lg:flex">
        <a href="" className="font-medium hover:text-primary">
          Pricing
        </a>
        <a href="" className="font-medium hover:text-primary">
          Docs
        </a>
        <a href="" className="font-medium hover:text-primary">
          Changelog
        </a>
        <a href="" className="font-medium hover:text-primary">
          Blogs
        </a>
        <a href="" className="font-medium hover:text-primary">
          Login
        </a>
      </div>

      <div className="hidden flex-1 justify-end lg:flex">
        <button className="items-center justify-center gap-2 rounded-lg border border-gray-400 px-6 py-2 hover:border-gray-600 lg:flex">
          <img src="asset 1.svg" />
          <span>Electron Developers</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <button className="p-2 lg:hidden" onClick={handleClick}>
        <i className="fa-solid fa-bars text-gray-600"></i>
      </button>

      <div className={`${navClass} fixed inset-0 z-10 bg-white p-3 md:hidden`}>
        <div className="flex justify-between">
          <a href="#" className="flex items-center">
            <img className="max-h-12 max-w-12" src="asset 0.png" alt="Logo" />
            <span className="text-lg">ToDesktop</span>
          </a>
          <button className="p-2 md:hidden" onClick={handleClick}>
            <i className="fa-solid fa-xmark text-gray-600"></i>
          </button>
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="m-3 block rounded-lg p-3 font-medium hover:bg-gray-50"
          >
            Pricing
          </a>
          <a
            href="#"
            className="m-3 block rounded-lg p-3 font-medium hover:bg-gray-50"
          >
            Docs
          </a>
          <a
            href="#"
            className="m-3 block rounded-lg p-3 font-medium hover:bg-gray-50"
          >
            Changelog
          </a>
          <a
            href="#"
            className="m-3 block rounded-lg p-3 font-medium hover:bg-gray-50"
          >
            Blogs
          </a>
          <a
            href="#"
            className="m-3 block rounded-lg p-3 font-medium hover:bg-gray-50"
          >
            Login
          </a>
        </div>
        <div className="h-[1px] bg-gray-300"></div>
        <button className="mt-6 flex items-center justify-center gap-2 rounded-lg px-6 py-4 hover:bg-gray-50 md:flex">
          <img src="asset 1.svg" />
          <span>Electron Developers</span>
        </button>
      </div>
    </nav>
  );
}
