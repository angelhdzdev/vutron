import{_ as a,c as i,a2 as t,o as n}from"./chunks/framework.DPuwY6B9.js";const c=JSON.parse('{"title":"시작하기","description":"","frontmatter":{"order":1},"headers":[],"relativePath":"ko/installation-and-build/getting-started.md","filePath":"ko/installation-and-build/getting-started.md","lastUpdated":1725496835000}'),e={name:"ko/installation-and-build/getting-started.md"};function l(h,s,p,r,d,k){return n(),i("div",null,s[0]||(s[0]=[t(`<h1 id="시작하기" tabindex="-1">시작하기 <a class="header-anchor" href="#시작하기" aria-label="Permalink to &quot;시작하기&quot;">​</a></h1><h2 id="프로젝트-복제하기" tabindex="-1">프로젝트 복제하기 <a class="header-anchor" href="#프로젝트-복제하기" aria-label="Permalink to &quot;프로젝트 복제하기&quot;">​</a></h2><h3 id="방법-1-npm-init-권장" tabindex="-1">방법 1: <code>npm init</code> (권장) <a class="header-anchor" href="#방법-1-npm-init-권장" aria-label="Permalink to &quot;방법 1: \`npm init\` (권장)&quot;">​</a></h3><p>npm 명령만으로 리포지토리를 쉽게 복제할 수 있습니다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vutron</span></span></code></pre></div><p>위의 방법은 프로젝트에 불필요한 문서와 &#39;.github&#39; 관련 파일을 만들지 않습니다.</p><h3 id="방법-2-템플릿-사용" tabindex="-1">방법 2: 템플릿 사용 <a class="header-anchor" href="#방법-2-템플릿-사용" aria-label="Permalink to &quot;방법 2: 템플릿 사용&quot;">​</a></h3><p><strong><a href="https://github.com/jooy2/vutron/generate" target="_blank" rel="noreferrer">이 템플릿 사용</a></strong> 버튼을 클릭하면 나만의 프로젝트를 즉시 만들 수 있습니다.</p><p>이 방법을 사용하면 GitHub에 리포지토리가 즉시 생성되지만 프로젝트를 로컬에 복제해야 사용할 수 있습니다.</p><h3 id="방법-3-리포지토리-복제" tabindex="-1">방법 3: 리포지토리 복제 <a class="header-anchor" href="#방법-3-리포지토리-복제" aria-label="Permalink to &quot;방법 3: 리포지토리 복제&quot;">​</a></h3><p>아래 명령어를 사용하여 이 리포지토리를 복제합니다. 이 방법은 Vutron 리포지토리에 직접 기여하는 경우에 적합합니다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/jooy2/vutron</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PROJECT_NAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="설치하기" tabindex="-1">설치하기 <a class="header-anchor" href="#설치하기" aria-label="Permalink to &quot;설치하기&quot;">​</a></h2><p>프로젝트를 복제한 후 터미널에서 다음 명령을 실행합니다:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># via npm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># via yarn (https://yarnpkg.com)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># via pnpm (https://pnpm.io)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span></code></pre></div><h2 id="개발-환경에서-실행" tabindex="-1">개발 환경에서 실행 <a class="header-anchor" href="#개발-환경에서-실행" aria-label="Permalink to &quot;개발 환경에서 실행&quot;">​</a></h2><p>개발 환경의 애플리케이션은 <strong><a href="https://vitejs.dev" target="_blank" rel="noreferrer">Vite</a></strong> 환경에서 실행됩니다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>명령줄 명령을 실행한 후에도 애플리케이션이 나타나지 않는다면 다른 앱에서 기본 포트를 사용하고 있는지 확인해야 할 수 있습니다.</p><p>Vite는 기본적으로 포트 <code>5173</code>을 사용합니다.</p>`,20)]))}const g=a(e,[["render",l]]);export{c as __pageData,g as default};
