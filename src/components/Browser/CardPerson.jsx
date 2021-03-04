export default function CardPerson({ name, img, fnClick }) {
  return (
    <section
      className="group mx-4 text-gray-500 cursor-pointer hover:text-white"
      onClick={fnClick}
    >
      <img
        src={img}
        className="w-40 h-40 rounded border-2 border-transparent group-hover:border-white "
        alt={`Imagem de ${name}`}
      />
      <h2 className="text-2xl text-center mt-2">{name}</h2>
    </section>
  );
}
