// 모듈(Modules) 불러오거나, 내보낼 수 있다.
// CommonJS 진영 모듈 로드, 익스포트
// 내보내기(export) — module.exports, exports.모듈이름
// 불러오기(import) — require('모듈(패키지)이름')

// npm install --save-dev live-server
const liveServer = require('live-server');

liveServer = '라이브 서버';

liveServer.start({});
