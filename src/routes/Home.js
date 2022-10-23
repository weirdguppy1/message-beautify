import { Link } from "preact-router/match";

const Home = () => (
  <div className="flex flex-col justify-center h-screen items-center">
    <div className="flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 shadow-xl rounded-full border-2 border-black shadow-cyan-200 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
      <h1 className="text-6xl font-bold mt-2">Message Beautify</h1>
      <p className="mt-4 text-2xl">
        Turn your messages into beautiful and{" "}
        <span className="hover:bg-blue-100 transition duration-300 font-semibold underline decoration-wavy decoration-pink-500 underline-offset-4  ">
          simplistic images
        </span>
        .{" "}
      </p>
      <button className="btn btn-lg rounded-lg mt-10 no-animation transition duration-150 hover:shadow-md hover:shadow-cyan-200">
        <Link href="/tool">Use Tool</Link>
      </button>
    </div>
  </div>
);

export default Home;
