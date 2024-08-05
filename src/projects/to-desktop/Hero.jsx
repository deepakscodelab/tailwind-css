export function Hero() {
  return (
    <div
      id="hero"
      className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent py-2"
    >
      <div
        id="hero-container"
        className="mx-auto flex max-w-4xl flex-col px-6 pb-32 sm:items-center sm:text-center"
      >
        <div
          id="version-text"
          className="group my-6 flex w-fit items-center gap-2 rounded-lg border border-yellow-300 bg-yellow-50 px-3 py-1 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="h-2 w-2 rounded-full border border-yellow-600 bg-yellow-400"></div>
          <p className="font-medium text-yellow-300">
            v0.21.1{" "}
            <span className="text-yellow-800">Find-in-page bug fixes</span>
          </p>
          <i className="fa-solid fa-arrow-right text-yellow-600 transition duration-300 group-hover:translate-x-1"></i>
        </div>
        <div id="hero-featues" className="my-6 hidden gap-8 sm:flex">
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <i className="fa-regular fa-file-code text-sm"></i>
            <p>Code Optional</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <i className="fa-solid fa-hand-back-fist text-sm"></i>
            <p>Drag & drop builder</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <i className="fa-solid fa-laptop text-sm"></i>
            <p>Windows, Mac, Linux</p>
          </div>
        </div>
        <h1 className="mt-4 text-4xl font-semibold leading-snug sm:text-6xl sm:leading-normal">
          Web app to desktop app in minutes
        </h1>
        <p className="mt-4 text-xl text-gray-800 sm:mt-8 sm:text-2xl">
          Take your web app codebase and transform it into a cross platform
          desktop app with native functionality.
        </p>
        <div
          id="buttons-container"
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <button className="rounded-lg bg-primary px-8 py-2 font-semibold text-white shadow-sm hover:bg-opacity-90">
            Download now
          </button>
          <button className="font-semibol rounded-lg border border-gray-400 bg-white px-8 py-2 hover:border-gray-800">
            Read Docs
          </button>
        </div>
      </div>

      <div id="company-container" className="flex flex-col gap-8">
        <div id="company-title" className="flex justify-center gap-2">
          <img className="translate-y-2" src="asset 2.svg" />
          <span className="font-medium">APPS POWERED BY TODESKTOP</span>
          <img className="translate-y-2 -scale-x-100" src="asset 2.svg" />
        </div>
        <div id="lines-group" className="flex flex-col gap-4">
          <div
            id="line1"
            className="flex w-screen -translate-x-48 gap-4 transition-transform ease-linear"
          >
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 3.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 4.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                LifeAt
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 5.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Convy
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 6.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Morgen
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 7.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Campsite
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 8.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Rise
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 9.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                ClickUp
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 10.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Notion
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 11.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Sunsama
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 12.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Beeper
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 13.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Cal
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 14.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Webstudio
              </span>
            </div>
          </div>
          <div
            id="line2"
            className="flex w-screen -translate-x-36 gap-4 transition-transform ease-linear"
          >
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 15.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 16.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 17.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 18.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 19.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 20.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Moises
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 21.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Basedash
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 22.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Cursor
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 23.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Linear
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 24.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Voiceflow
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 25.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Kitemaker
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 26.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Cron
              </span>
            </div>
          </div>
          <div
            id="line3"
            className="flex w-screen -translate-x-48 gap-4 transition-transform ease-linear md:hidden"
          >
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 15.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 16.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 17.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 3.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 4.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 5.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 12.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 13.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 14.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 24.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 25.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
            <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white md:min-h-32 md:min-w-32">
              <img
                src="asset 26.png"
                className="h-12 w-12 md:h-16 md:w-16"
                alt=""
              />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbounce1
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
