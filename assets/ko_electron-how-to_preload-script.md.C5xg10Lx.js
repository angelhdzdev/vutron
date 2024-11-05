import{_ as o,c as t,a2 as r,o as a}from"./chunks/framework.DPuwY6B9.js";const m=JSON.parse('{"title":"프리로드 스크립트","description":"","frontmatter":{},"headers":[],"relativePath":"ko/electron-how-to/preload-script.md","filePath":"ko/electron-how-to/preload-script.md","lastUpdated":1725496835000}'),c={name:"ko/electron-how-to/preload-script.md"};function d(l,e,n,i,p,s){return a(),t("div",null,e[0]||(e[0]=[r('<h1 id="프리로드-스크립트" tabindex="-1">프리로드 스크립트 <a class="header-anchor" href="#프리로드-스크립트" aria-label="Permalink to &quot;프리로드 스크립트&quot;">​</a></h1><p>Electron.js의 프리로드 스크립트는 메인 프로세스와 렌더러 프로세스 간의 통신을 위해 설계된 보안 영역입니다. 일반적으로 **<a href="https://www.electronjs.org/docs/latest/tutorial/ipc" target="_blank" rel="noreferrer">IPC 통신</a>**에 사용됩니다.</p><p>자세한 내용은 다음 문서를 참고하세요: <a href="https://www.electronjs.org/docs/latest/tutorial/tutorial-preload" target="_blank" rel="noreferrer">https://www.electronjs.org/docs/latest/tutorial/tutorial-preload</a></p><p>최신 버전의 Electron과의 호환성 및 보안을 위해 이전 버전의 <code>electron/remote</code> 모듈은 사용하지 않는 것이 좋습니다. 시스템 이벤트나 노드 스크립트를 활용하려면 렌더러가 아닌 메인 프로세스에서 사용하는 것이 좋습니다.</p><p>Vutron의 프리로드 스크립트는 <code>src/preload</code> 폴더에 있습니다. 새 IPC 통신 채널을 생성하려면 다음 변수에 채널 이름을 추가하여 통신을 허용하도록 화이트리스트에 추가합니다.</p><ul><li><code>mainAvailChannels</code>: 메인에서 렌더러로 이벤트를 전송합니다. (<code>window.mainApi.send(&#39;channelName&#39;)</code>)</li><li><code>rendererAvailChannels</code>: 렌더러에서 메인으로 이벤트를 전송합니다. (<code>mainWindow.webContents.send(&#39;channelName&#39;)</code>)</li></ul><p>렌더러에서 메인으로 이벤트를 전송할 때는 <code>ipcRenderer.send</code> 대신 <code>window.mainApi</code> 객체에 액세스합니다. <code>mainApi</code>는 Vutron 템플릿에서 설정한 이름이며 변경할 수 있습니다.</p><p>다음은 mainApi에서 지원되는 함수입니다:</p><ul><li><code>send</code>: 메인으로 이벤트를 보냅니다.</li><li><code>on</code>: 메인에서 보낸 이벤트를 수신할 리스너입니다.</li><li><code>once</code>: 메인에서 보낸 이벤트를 수신할 리스너입니다. (하나의 호출만 처리)</li><li><code>off</code>: 이벤트 리스너를 제거합니다.</li><li><code>invoke</code>: 메인에 이벤트를 보내고 비동기적으로 데이터를 수신할 수 있는 함수입니다.</li></ul><p>이를 변경하고 수정하려면 <code>src/preload/index.ts</code>에서 <code>exposeInMainWorld</code>를 수정해야 합니다.</p>',10)]))}const u=o(c,[["render",d]]);export{m as __pageData,u as default};
