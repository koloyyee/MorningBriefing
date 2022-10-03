/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import { NewscatcherArticleInterface } from "../../interfaces/Newscatcher.interface";
import loadingGif from "../../src/assets/loading.gif";
import Greetings from "../Greeting";
import NewsGrid from "../NewsGrid";
import Weather from "../Weather";
import "./style.css";

type MainProps = {
  loading: boolean;
  searchResult: NewscatcherArticleInterface[];
};

const Main: React.FC<MainProps> = ({ loading, searchResult }) => {
  return (
    <main>
      <div className="welcome">
        <Greetings />
        {loading ? (
          <img
            className="weather-icon loading"
            src={loadingGif}
            alt="fetching data"
          />
        ) : (
          // <></>
          <Weather />
        )}
      </div>
      <NewsGrid searchResult={searchResult} />
    </main>
  );
};

export default Main;
