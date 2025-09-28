
const key = '084db7f4d39f4d4cb3e19bc59b0a7a10' 

const requests = {
    headline: `https://newsapi.org/v2/top-headlines?sources=google-news-in,the-hindu,the-times-of-india&apiKey=${key}`,
    news: `https://newsapi.org/v2/top-headlines?sources=google-news-in,the-hindu,the-times-of-india&apiKey=${key}&pageSize=48`,
    business: `https://newsapi.org/v2/top-headlines?sources=the-hindu,the-times-of-india&apiKey=${key}`,
    sports: `https://newsapi.org/v2/top-headlines?sources=the-hindu,the-times-of-india&apiKey=${key}`,
    tech: `https://newsapi.org/v2/top-headlines?sources=the-hindu,the-times-of-india&apiKey=${key}`,
    politics: `https://newsapi.org/v2/top-headlines?sources=google-news-in,the-hindu,the-times-of-india&apiKey=${key}&pageSize=40`
}
export default requests;