# 한글 OFL 폰트 창고 (korean-ofl-fonts)

누구나 자유롭게 쓰고 다시 나눌 수 있는 **한글 폰트 343종**을 모아, 웹폰트 · 설치용 파일 · 분류 정보를 함께 제공합니다(아래 예외 2종 포함).

- 모든 폰트는 **재배포 근거를 폰트마다 확인**했습니다(대부분 SIL Open Font License 1.1). 폰트별 근거와 공식 배포처는 `fonts.json`과 각 폰트의 `LICENSE.txt`에 있습니다.
- 출처: KERIS 학교 안심폰트, 눈누(OFL로 확인된 폰트), 각 제작사 공식 배포처. KERIS 안내만으로 근거가 부족한 폰트는 제작사 규정을 따로 확인했고, 재배포를 허락하지 않거나 근거를 찾지 못한 폰트는 넣지 않았습니다(아래 예외 제외).
- **예외 2종**: 가나초콜릿(`ghanachocolate`) · 솔뫼 김대건OTF(`solmoe-kimdaegeon`) — 재배포 문구는 없지만 제작사가 무료 사용을 허락하고 폰트 파일 판매만 금지하고 있어, 운영자 판단으로 넣었습니다(SIL OFL 아님). `fonts.json`의 `license.exception`과 각 `LICENSE.txt`에 표시했습니다. 제작사가 원하지 않으면 바로 빼겠습니다.
- 분류: 갈래 7가지와 태그(쓰임·굵기·시대감·격식 등)를 사람이 직접 골랐습니다.

| 갈래 | 수 |
|---|---|
| 명조 | 14 |
| 반고딕 | 8 |
| 고딕 | 67 |
| 손글씨 | 148 |
| 디지털 | 75 |
| 고정폭 | 15 |
| 픽셀 | 16 |

## 웹폰트로 쓰기

```html
<link rel="stylesheet" href="https://maker-ssam.github.io/korean-ofl-fonts/fonts/cafe24-ssurround/cafe24-ssurround.css">
<style> body { font-family: 'Cafe24 Ssurround', sans-serif; } </style>
```

폰트마다 `fonts/<id>/<id>.css` 하나에 모든 굵기가 들어 있습니다. `<id>`와 `font-family` 이름은 `fonts.json`에서 찾으세요.

## 목록 쓰기 — `fonts.json`

```js
const data = await fetch('https://maker-ssam.github.io/korean-ofl-fonts/fonts.json').then(r => r.json());
data.fonts.filter(f => f.group === '손글씨' && f.tags['격식'] === '친근');
```

| 칸 | 내용 |
|---|---|
| `id` · `name` · `name_ko` · `name_en` | 주소에 쓰는 이름 · 폰트 이름 · 한글 이름 · 영문 이름 |
| `group` · `tags` | 갈래 · 태그(정의는 맨 위 `tags`, 갈래별로 쓰는 태그는 `groupTags`) |
| `facts` | 한글 글자 수(`hangul`, 11,172 = 전체) · 영문 포함 · 굵기 수 · 가변 · 이탤릭 · 글자 크기감 |
| `license` | 라이선스 근거 · 공식 배포처 · 예약 글꼴 이름(RFN) 여부 · 수정 금지 여부 · LICENSE 파일 |
| `css` · `files` · `preview` | 웹폰트 CSS · 굵기별 파일 · 목록 미리보기용 작은 파일 |
| `download` | 설치용 zip 이름과 크기 → `https://github.com/maker-SSAM/korean-ofl-fonts/releases/download/v1.0.0/<파일>` |

## 설치용 파일 내려받기

[Releases](https://github.com/maker-SSAM/korean-ofl-fonts/releases)에 폰트마다 zip이 있습니다(TTF/OTF + LICENSE.txt + 안내). 주소: `https://github.com/maker-SSAM/korean-ofl-fonts/releases/download/v1.0.0/<id>.zip`

## 라이선스

- **폰트 파일**은 각 폰트의 라이선스를 따릅니다(`fonts/<id>/LICENSE.txt`). 대부분 SIL OFL 1.1이라 자유롭게 쓰고 다시 나눌 수 있지만, **폰트 파일 자체를 팔 수는 없고**, 다시 나눌 때는 LICENSE.txt를 함께 넣어야 합니다.
- 예약 글꼴 이름(RFN)이 있는 폰트를 고쳐서 배포할 때는 원래 이름을 쓸 수 없습니다. 웹폰트(`fonts/`)는 원본을 WOFF2로 압축만 했고, 미리보기 파일(`preview/`)은 글자를 줄이고 안쪽 이름을 바꾼 미리보기 전용 파일입니다.
- 네이버 나눔 계열은 출처 표기를 권장합니다. 넷마블체는 수정·변형이 금지되어 원본 그대로 제공합니다.
- **분류 정보**(`fonts.json`의 갈래·태그 등)는 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.ko)입니다. 출처(이 저장소)를 밝히면 자유롭게 쓰고 고칠 수 있습니다.
- 라이선스가 바뀌었거나 잘못된 정보가 있으면 Issues로 알려 주세요.

버전 1.0.0 · 갱신 2026-10-20
