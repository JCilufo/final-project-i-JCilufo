import Card from './card'

export default function StarshipGrid({ starships }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {starships.map((starship) => (
        <Card starship={starship} key={starship.name} />
      ))}
    </div>
  )
}
