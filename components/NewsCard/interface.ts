export interface NewscatcherInterface {
    status: string
    articles: NewscatcherArticleInterface[]
}

interface NewscatcherArticleInterface {
    summary: string
    country: string
    author: string
    link: string
    language: string
    media: string
    title: string
    media_content: string[]
    clean_url: string
    rights: string
    rank: string
    topic: string
    published_date: Date
    _id: string
}

