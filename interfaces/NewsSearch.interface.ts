import { Dispatch, SetStateAction } from "react";
import {
    NewscatcherArticleInterface,
    NewscatcherInterface
} from "./Newscatcher.interface";

export interface NewsSearchInterface {
    loading: boolean;
    news: NewscatcherInterface;
    setSearchResult: Dispatch<SetStateAction<NewscatcherArticleInterface[]>>;
};