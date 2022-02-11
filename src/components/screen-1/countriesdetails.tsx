import "./countriesdetails.css";
import { useQuery, gql } from "@apollo/client";
import qu from "@apollo/client";

const CountriesDetails = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const COUNTRIES_QUERY = gql`
    {
      countries {
        name
        languages {
          code
          name
        }
        continent {
          name
          code
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(COUNTRIES_QUERY);

  return params.id ? (
    <div className="details-main">
      {loading ? (
        <span>loading</span>
      ) : (
        data?.countries
          ?.filter(({ languages }: any) => languages[0]?.code === params.id)
          ?.map(({ name, continent }: any) => (
            <div className="details-cont">
              <span>{name}</span>
              <span>{continent?.name}</span>
            </div>
          ))
      )}
    </div>
  ) : null;
};

export default CountriesDetails;
