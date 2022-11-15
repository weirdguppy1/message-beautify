import { Link } from "preact-router/match";
import { useState } from "preact/hooks";
import { toPng } from "html-to-image";
import download from "downloadjs";
import { HexColorPicker } from "react-colorful";

const Tool = () => {
  const [message, setMessage] = useState("");
  const [font, setFont] = useState("font-sans");
  const [gradient, setGradient] = useState("from-orange-100  to-fuchsia-100");
  const [color, setColor] = useState("#000000");
  const [secondColor, setSecondColor] = useState("#000000");
  const [openGradient, setOpenGradient] = useState(false);

  const gradientString = (first, second) => `from-${first} to-${second}`;
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };
  const downloadImage = () => {
    toPng(document.getElementById("image")).then(function (dataUrl) {
      download(dataUrl, "thisisnotaVirus.png");
    });
  };

  const gradients = [
    { color1: "cyan-600", color2: "cyan-400" },
    { color1: "orange-100", color2: "fuschia-100" },
    { color1: "orange-400", color2: "yellow-300" },
    { color1: "blue-900", color2: "rose-500" },
    { color1: "teal-300", color2: "teal-500" },
    { color1: "zinc-900", color2: "zinc-600" },
    { color1: "pink-50", color2: "pink-300" },
    { color1: "rose-200", color2: "indigo-200" },
  ];

  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className="flex flex-col mb-5">
        <h1 className="text-6xl font-bold mt-2">Beautify it.</h1>
        <div className="w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold text-lg">
              What is your message?
            </span>
          </label>
          <textarea
            onInput={handleMessageChange}
            type="text"
            value={message}
            placeholder="Message..."
            className="textarea textarea-bordered resize-none w-full max-w-xs"
          />
        </div>
        <div
          className="flex flex-col items-start mt-2 space-y-4"
          id="customization"
        >
          <label className="label-text font-bold text-lg">Customization.</label>
          <div className="flex flex-col">
            <label className="label-text font-bold">Font</label>
            <select
              className="mt-2 select select-bordered rounded-lg"
              onInput={(e) => setFont(e.target.value)}
            >
              <option value="font-sans">Sans</option>
              <option value="font-serif">Serif</option>
              <option value="font-mono">Mono</option>
            </select>
          </div>
          {/* <div
            id="gradients"
            className="mt-5 grid grid-row-3 grid-cols-4 grid-flow-row gap-4"
          >
            {gradients.map((gradient) => {
              return (
                <button
                  className={`h-12 w-12 border border-black rounded-full bg-gradient-to-tr ${gradientString(
                    gradient.color1,
                    gradient.color2
                  )}`}
                  onClick={(e) => {
                    setGradient(
                      gradientString(gradient.color1, gradient.color2)
                    );
                  }}
                ></button>
              );
            })}
          </div> */}
          <HexColorPicker color={color} onChange={setColor} />
          <div className="flex items-center space-x-2">
            <label className="label-text">Gradient?</label>
            <input
              type="checkbox"
              className="checkbox rounded-lg"
              onChange={() => setOpenGradient((prev) => !prev)}
              value={openGradient}
            />
          </div>
          {openGradient ? (
            <HexColorPicker color={secondColor} onChange={setSecondColor} />
          ) : null}
        </div>
      </div>
      <div
        id="image"
        className={`w-[50rem] h-[30rem] border-2 border-black ${font}`}
        style={{
          backgroundColor: !openGradient ? color : null,
          background: openGradient
            ? `linear-gradient(to top right, ${color}, ${secondColor})`
            : null,
        }}
      >
        <div className="flex flex-col justify-center p-[4rem]">
          {message ? (
            <div className="p-8 rounded-xl bg-white shadow-lg border">
              <h1 className=" text-2xl">{message}</h1>
            </div>
          ) : null}
        </div>
      </div>
      <button className="btn rounded-lg btn-lg m-5" onClick={downloadImage}>
        Download{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Tool;
