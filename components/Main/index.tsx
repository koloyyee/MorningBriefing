/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import { NewscatcherArticleInterface } from "../../interfaces/Newscatcher.interface";
import Greetings from "../Greeting";
import NewsGrid from "../NewsGrid";
import Weather from "../Weather";

type MainProps = {
  loading: boolean;
  searchResult: NewscatcherArticleInterface[];
};

const Main: React.FC<MainProps> = ({ loading, searchResult }) => {
  return (
    <main>
      <div className="welcome">
        <Greetings />
        {loading ? "Loading" : <Weather />}
      </div>

      {loading ? "Loading" : <NewsGrid searchResult={searchResult} />}
    </main>
  );
};

export default Main;
