newscatcher: <https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/newscatcher/>
open weather api: <https://openweathermap.org/guide>

The is the daily updates app I will using for my morning reading routine.
The original one had bugs that scrapes with BeautifulSoup,
so at this phase I would like to practice using APIs to show news article according to the clients liking.

I will be using newscatcher api and open weather api for data support.

This project not only give me a training with using React and focus on UI/UX,
also understanding and using an API.

This page also need to feature the followings:

1. Routing - separate into different topics.
2. Search with javascript filter function
3. Ask user for local or find user local to show local news
4. Implementing testing with Jest
5. Using Lazy loading the news -> unable to add lazy load -> pagination instead.

TODO:
[x] - Get user location with Timezone
[x] - Create news cards
[x] - Fetch data within the component using useState, useEffect
[x] - Create search bar for clients to search title.
[] - Filter news by topic
[x] - Pagination
[] - Deploy on github page and alias to my domain

Struggles:
Picking the api-
I have chosen RapidAPI Newscatcher because of the array of headlines include images. Where the api also let user filter different news by different query, it will be helpful for me to include those with a input from clients.

Displaying data -
There is no pagination with the api, then I need change the direction to pagination instead. I had create my own pagination but the result wasn't as elegant as using MUI.

To show the articles on the page we need to use .slice() to limit the new of articles presented.

How the search was done -
First grab all data in array format, then use .filter() with a function that calls .includes() to check input value is included in the summary or title, use toLowerCase() for both title/summary and input value.
then return the results in an array, afterwards we set the result with setSearchResult, and turn the searchResult back to App() and pass into NewsGrid then NewsCard components.
