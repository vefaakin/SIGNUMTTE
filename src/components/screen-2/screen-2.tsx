import { useQuery, gql } from "@apollo/client";
//@ts-ignore
import BarChart from "react-bar-chart";

const CONTINENT_QUERY = gql`
  {
    countries {
      name
      continent {
        name
        code
      }
    }
  }
`;

const tdata = {} as any;

const Screen2 = () => {
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const BarData = [
    { text: "Man", value: 500 },
    { text: "Woman", value: 300 },
  ];

  const { data, loading, error } = useQuery(CONTINENT_QUERY);
  data?.countries?.map(({ name, continent }: any) => {
    if (tdata[continent.name]) {
      tdata[continent.name].push(name);
    } else {
      tdata[continent.name] = [];
      tdata[continent.name].push(name);
    }
  });

  const sideBar = new Array();
  Object.keys(tdata).map((key) => {
    sideBar.push({ text: key, value: tdata[key].length });
  });

  console.log("continent.name", sideBar);

  return (
    <div className="App">
      {sideBar.length > 0 && (
        <BarChart
          ylabel="Number of countries"
          xlabel="Continents"
          width={1000}
          height={500}
          margin={margin}
          data={sideBar}
          onBarClick={() => {}}
        />
      )}
    </div>
  );
};

export default Screen2;
