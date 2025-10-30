function Card({ title, content }) {
  return (
    <div className="p-4 shadow-lg rounded bg-white dark:bg-gray-300 transition-colors">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;
