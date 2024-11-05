import{_ as a,c as e,a2 as s,o as r}from"./chunks/framework.DPuwY6B9.js";const g=JSON.parse('{"title":"자동화 테스트","description":"","frontmatter":{"order":4},"headers":[],"relativePath":"ko/installation-and-build/automated-testing.md","filePath":"ko/installation-and-build/automated-testing.md","lastUpdated":1725496835000}'),i={name:"ko/installation-and-build/automated-testing.md"};function o(n,t,l,p,d,h){return r(),e("div",null,t[0]||(t[0]=[s('<h1 id="자동화-테스트" tabindex="-1">자동화 테스트 <a class="header-anchor" href="#자동화-테스트" aria-label="Permalink to &quot;자동화 테스트&quot;">​</a></h1><p><strong>Vutron</strong>에는 자동화된 테스트가 포함되어 있습니다. 테스트 프레임워크는 Microsoft의 <strong><a href="https://playwright.dev" target="_blank" rel="noreferrer">Playwright</a></strong> 모듈을 사용합니다.</p><p><strong>Playwright</strong>는 웹 애플리케이션 테스트에 최적화되어 있으며 <strong>Electron</strong> 프레임워크를 완벽하게 지원합니다. 설치가 간단하고, 별도의 설정 없이 바로 테스트를 시작할 수 있으며, 크로스 플랫폼을 지원합니다. 여기에서 <strong>Playwright</strong>에 대해 자세히 알아보세요: <a href="https://github.com/microsoft/playwright" target="_blank" rel="noreferrer">https://github.com/microsoft/playwright</a></p><p>이 템플릿에는 템플릿 메인 화면에 대한 매우 간단한 실행 및 동작 테스트만 구현되어 있습니다. 고급 테스트는 애플리케이션의 범위에 따라 달라집니다.</p><p>현재 테스트 사양 파일은 <code>tests</code> 디렉터리에, 테스트 결과 파일은 <code>tests/results</code>에 있습니다. (기본 제공 테스트 사양 파일은 별도의 결과 파일을 생성하지 않습니다.)</p><p>Playwright 설정은 프로젝트 루트에 있는 <code>playwright.config.ts</code>이며, 이에 대한 자세한 내용은 다음 문서를 참조하세요: <a href="https://playwright.dev/docs/test-configuration" target="_blank" rel="noreferrer">https://playwright.dev/docs/test-configuration</a></p><p>모든 구성이 완료되면 다음 명령어로 테스트를 실행할 수 있습니다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div><p>테스트를 실행하기 전에 빌드 디렉터리(<code>dist</code>)를 비우고 테스트용 패키지를 컴파일합니다.</p>',9)]))}const u=a(i,[["render",o]]);export{g as __pageData,u as default};