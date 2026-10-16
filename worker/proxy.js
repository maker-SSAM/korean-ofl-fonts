// Cloudflare Worker — korean-ofl-fonts 설치용 zip 중계
// 페이지(maker-ssam.github.io)가 GitHub Releases의 zip을 읽어 한꺼번에 묶을 수 있게
// "이 페이지에 줘도 됩니다"(CORS) 표시를 붙여 돌려준다. 파일을 저장하지 않고 그대로 흘려보낸다.
// 사용: https://<내-워커>.workers.dev/?f=<폰트id>.zip
const RELEASE = 'https://github.com/maker-SSAM/korean-ofl-fonts/releases/download/v1.0.0/';
const ALLOW = ['https://maker-ssam.github.io', 'http://localhost:8123'];   // 이 주소의 페이지만 허용

export default {
  async fetch(req) {
    const origin = req.headers.get('Origin') || '';
    const cors = { 'Access-Control-Allow-Origin': ALLOW.includes(origin) ? origin : ALLOW[0], 'Vary': 'Origin' };
    if (req.method === 'OPTIONS') return new Response(null, { headers: { ...cors, 'Access-Control-Allow-Methods': 'GET' } });
    const f = new URL(req.url).searchParams.get('f') || '';
    if (!/^[a-z0-9][a-z0-9-]*\.zip$/.test(f)) return new Response('bad request', { status: 400, headers: cors });   // 영문 소문자·숫자·하이픈 + .zip 만
    const r = await fetch(RELEASE + f, { cf: { cacheTtl: 86400, cacheEverything: true } });
    if (!r.ok) return new Response('not found', { status: r.status, headers: cors });
    return new Response(r.body, { status: 200, headers: { ...cors, 'Content-Type': 'application/zip', 'Cache-Control': 'public, max-age=86400' } });
  },
};
