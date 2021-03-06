import "../../styles/contents.css";

export default function contentEmail() {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-black">
      <h4 className="text-white mt-3 mb-6 text-xl font-light">
        Ready to watch? Enter your email to create or restart your membership.
      </h4>
      <article className="w-full flex justify-center items-center pb-20 bg-black">
        <input
          className="w-4/12 h-16 p-3 inputEm"
          type="email"
          placeholder="Email address"
        />
        <button
          className="text-4xl h-16 px-6 bg-red-600 text-white hover:bg-red-700"
          type="submit"
        >
          Get Started
        </button>
      </article>
    </section>
  );
}
