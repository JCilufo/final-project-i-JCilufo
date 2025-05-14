export default function Card({ starship }) {
  const { name, cost_in_credits, model, manufacturer, length, crew, passengers } = starship

  return (
    <section className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="mt-2 text-gray-600">Model: {model}</p>
        <p className="mt-2 text-gray-600">Manufacturer: {manufacturer}</p>
        <p className="mt-2 text-gray-600">Length: {length}</p>
        <p className="mt-2 text-gray-600">Crew: {crew}</p>
        <p className="mt-2 text-gray-600">Passengers: {passengers}</p>
        <p className="mt-2 text-gray-600">Credits: {cost_in_credits}</p>
      </div>
    </section>
  )
}
