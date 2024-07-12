import { people } from "../constants/people";
import { PersonCard } from "./components/PersonCard";

export default function App() {
  return (
    <PersonCard {...people[0]} />
  )
}

