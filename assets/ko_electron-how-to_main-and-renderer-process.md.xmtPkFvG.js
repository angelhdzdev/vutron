import{_ as t,c as s,a2 as r,o}from"./chunks/framework.DPuwY6B9.js";const g=JSON.parse('{"title":"메인과 렌더러 프로세스","description":"","frontmatter":{},"headers":[],"relativePath":"ko/electron-how-to/main-and-renderer-process.md","filePath":"ko/electron-how-to/main-and-renderer-process.md","lastUpdated":1725496835000}'),a={name:"ko/electron-how-to/main-and-renderer-process.md"};function n(i,e,d,c,p,l){return o(),s("div",null,e[0]||(e[0]=[r(`<h1 id="메인과-렌더러-프로세스" tabindex="-1">메인과 렌더러 프로세스 <a class="header-anchor" href="#메인과-렌더러-프로세스" aria-label="Permalink to &quot;메인과 렌더러 프로세스&quot;">​</a></h1><p><strong>Vutron</strong> 애플리케이션은 메인(Main) 프로세스와 렌더러(Renderer) 프로세스로 코드가 나뉩니다.</p><p><strong>Main</strong>은 <code>src/main</code>의 코드로 주로 Electron이 처리하는 프로세스 코드입니다. <strong>렌더러</strong>는 <code>src/renderer</code>의 코드로 주로 Vue와 같은 프론트엔드 렌더링 프로세스를 위한 코드입니다.</p><p>일반적으로 <strong>Node.js</strong> 스크립트는 렌더러 프로세스에서 실행할 수 없습니다. 예를 들어 Node.js에서 사용하는 API를 포함하는 모듈이나 <code>path</code> 또는 <code>net</code>, <code>os</code> 또는 <code>crypto</code>와 같은 <strong>Node.js</strong>의 네이티브 모듈이 있습니다.</p><p>사전 로드 스크립트는 렌더러가 로드되기 전에 실행됩니다. 이는 보안상의 이유로 렌더러 영역에서 Node.js 스크립트의 실행을 분리하고 격리하기 위해 메인 프로세스에 대한 브릿지를 생성합니다.</p><p>안전한 스크립트 실행을 위해 메인 프로세스에서 노드 스크립트를 실행하고 렌더러는 메시징을 통해 실행 결과를 수신하는 것이 좋습니다. 이는 <strong>IPC 통신</strong>을 통해 구현할 수 있습니다.</p><p>이에 대한 자세한 내용은 다음 문서를 참조하세요: <a href="https://www.electronjs.org/docs/latest/tutorial/ipc" target="_blank" rel="noreferrer">https://www.electronjs.org/docs/latest/tutorial/ipc</a></p><h3 id="렌더러에서-node-js를-실행하는-방법은-무엇인가요" tabindex="-1">렌더러에서 Node.js를 실행하는 방법은 무엇인가요? <a class="header-anchor" href="#렌더러에서-node-js를-실행하는-방법은-무엇인가요" aria-label="Permalink to &quot;렌더러에서 Node.js를 실행하는 방법은 무엇인가요?&quot;">​</a></h3><p>보안 문제를 건너뛰고 렌더러에서 Node.js 스크립트를 사용하려면 <code>vite.config.ts</code> 파일에서 <code>nodeIntegration</code>을 <code>true</code>로 설정해야 합니다.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rendererPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  nodeIntegration: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>이에 대한 자세한 내용은 다음 문서를 참조하세요: <a href="https://github.com/electron-vite/vite-plugin-electron-renderer" target="_blank" rel="noreferrer">https://github.com/electron-vite/vite-plugin-electron-renderer</a></p>`,11)]))}const k=t(a,[["render",n]]);export{g as __pageData,k as default};
