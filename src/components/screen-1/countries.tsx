import { useQuery, gql } from "@apollo/client";
import "./countries.css";

interface MyProps {
  continent: string;
}

const Countries = ({ continent }: MyProps) => {
  const COUNTRIES_QUERY = gql`
  {
    countries(filter: {continent: {eq: "${continent}"}}){
      name 
      capital
      emoji
      languages{
        name
        code
      } 
  }
  }
`;

  const { data, loading, error } = useQuery(COUNTRIES_QUERY);

  return loading ? (
    <span>Loading...</span>
  ) : (
    <div className="country-cont">
      {data?.countries?.map(({ name, capital, emoji, languages }: any) => (
        <div className="country-row">
          <span>{name}</span>
          <span>{capital}</span>
          <span>{emoji}</span>
          <a href={`/countrydetails?id=${languages[0]?.code}`} target="_blank">
            Details
          </a>
        </div>
      ))}
    </div>
  );
};

export default Countries;
