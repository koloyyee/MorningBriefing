import { Dispatch, SetStateAction } from "react";
import {
    NewscatcherArticleInterface,
    NewscatcherInterface
} from "../NewsCard/interface";

export interface NewsSearchInterface {
    loading: boolean;
    news: NewscatcherInterface;
    setSearchResult: Dispatch<SetStateAction<NewscatcherArticleInterface[]>>;
};