const url = 'https://sports.news.naver.com/ranking/index.nhn?type=popular';
const res = await fetch(url);

const body: Uint8Array = new Uint8Array(await res.arrayBuffer());
const text: string = new TextDecoder().decode(body);

interface popularObj {
  section: string;
  subSection: string;
  subSectionName: string;
  date: string;
  device: string;
  oid: string;
  aid: string;
  type: string;
  cnt: number;
  officeName: string;
  newsDateTime: null | unknown;
  title: string;
  thumbnail: string;
  modifiedDateTime: string;
  subContent: string;
  rank: number;
  totalCount: number;
}

interface popularRankingListJSON {
  list: Array<popularObj>;
  date: string;
  type: null | unknown;
  page: number;
  totalPages: number;
}
const popularRankingStart: number = text.indexOf('rankingListModel')
const popularRankingEnd: number = text.indexOf(',', text.indexOf('totalPages'))
const popularRankingListModel: popularRankingListJSON = JSON.parse(text.slice(popularRankingStart + 18, popularRankingEnd))

// const date: string = text.match(/today: '\d+',/)!.join().slice(8, -2)
// const year: string = date?.slice(0, 4);
// const month: string = date?.slice(4, 6);
// const day: string = date?.slice(-2);

// console.log(`${year}.${month}.${day}`)
console.log(`<많이 본 뉴스>`)
popularRankingListModel.list.forEach((obj: popularObj) => {
  console.log(`${obj.rank}위: ${obj.title}`)
})
