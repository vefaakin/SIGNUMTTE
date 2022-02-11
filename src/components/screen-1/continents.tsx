import { useQuery, gql } from "@apollo/client";
import "./continents.css";

const COUNTRIES_QUERY = gql`
  {
    continents {
      name
      code
    }
  }
`;
interface MyProps {
  onContinentChange: (continent: string) => void;
}

const Continents = ({ onContinentChange }: MyProps) => {
  const { data, loading, error } = useQuery(COUNTRIES_QUERY);

  return (
    <div className="main-continents">
      {loading ? (
        <span>Loading...</span>
      ) : (
        <ol>
          {data?.continents?.map((continent: any) => (
            <li
              className="list"
              key={continent.code}
              onClick={() => onContinentChange(continent.code)}
            >
              {continent.name}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Continents;
