export default function Hero() {
  return (
    <div
      className={
        "bg-glow flex min-h-100 items-center text-8xl font-black text-black"
      }
      style={{
        textShadow:
          "-1px -1px rgba(163, 179, 252, 0.3)," +
          "1px 1px rgba(97, 95, 250, 0.15)",
      }}
    >
      <h1 className={"p-5"}>
        Hi. I&apos;m a{" "}
        <span
          className={
            "bg-gradient-to-tr from-indigo-600 to-cyan-600 bg-clip-text text-transparent text-shadow-none"
          }
        >
          Developer :)
        </span>
      </h1>
    </div>
  );
}
