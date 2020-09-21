const url = 'https://sports.news.naver.com/ranking/index.nhn?type=popular';
const res = await fetch(url);

const body: Uint8Array = new Uint8Array(await res.arrayBuffer());
const text: string = new TextDecoder().decode(body);

const date: string = text.match(/today: '\d+',/)!.join().slice(8, -2)
const year: string = date?.slice(0, 4);
const month: string = date?.slice(4, 6);
const day: string = date?.slice(-2);

console.log(`${year}.${month}.${day}`)
