export interface ResponseArticle {
    status: 'ok' | 'error';
    totalResults: number;
    articles: IArticle[];
}

export interface IArticle {
    source: ISourcess;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

interface ISourcess {
    id: string | null;
    name: string;
}

// "articles": -{
//   "source": {
//     "id": "engadget",
//     "name": "Engadget"
//   },
//   "author": "Kris Holt",
//   "title": "New York passes a bill to limit bitcoin mining",
//   "description": "New York lawmakers have passed a bill\r\n that would temporarily ban new bitcoin\r\n mining operations. Early on Friday, state senators voted 36-27 to pass the legislation. It's now bound for the desk of Governor Kathy Hochul, who will sign it into law or veto th…",
//   "url": "https://www.engadget.com/new-york-cryptocurrency-bill-bitcoin-mining-climate-change-161126292.html",
//   "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-05/a8217250-bdfa-11eb-bfc4-2663225cea83",
//   "publishedAt": "2022-06-03T16:11:26Z",
//   "content": "New York lawmakers have passed a bill\r\n that would temporarily ban new bitcoin\r\n mining operations. Early on Friday, state senators voted 36-27 to pass the legislation. It's now bound for the desk of… [+2036 chars]"
// },
