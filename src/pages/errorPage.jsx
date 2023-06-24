import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="bg-[#213555] text-white w-screen h-screen flex flex-col gap-5 items-center justify-center"
    >
      <h1 className="text-8xl font-semibold">Oops!</h1>
      <p className="text-xl text-gray-500 font-medium">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
