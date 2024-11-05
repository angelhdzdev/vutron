import{_ as i,c as a,a2 as n,o as e}from"./chunks/framework.DPuwY6B9.js";const c=JSON.parse('{"title":"빌드 구성","description":"","frontmatter":{"order":2},"headers":[],"relativePath":"ko/installation-and-build/build-configuration.md","filePath":"ko/installation-and-build/build-configuration.md","lastUpdated":1725496835000}'),l={name:"ko/installation-and-build/build-configuration.md"};function t(p,s,h,o,d,k){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="빌드-구성" tabindex="-1">빌드 구성 <a class="header-anchor" href="#빌드-구성" aria-label="Permalink to &quot;빌드 구성&quot;">​</a></h1><p>모듈 설치가 완료되면 아래 명령어를 사용하여 플랫폼 패키지를 간단하게 빌드할 수 있습니다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For Windows (.exe, .appx)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:win</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For macOS (.dmg)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:mac</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For Linux (.rpm, .deb, .snap)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:linux</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># All platform (.exe, .appx, .dmg, .rpm, .deb, .snap) - see below description</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:all</span></span></code></pre></div><p>빌드된 패키지는 <code>release/{version}</code> 위치에서 찾을 수 있습니다.</p><p>자세한 내용은 다음 문서를 참조하세요: <a href="https://webpack.electron.build/dependency-management#installing-native-node-modules" target="_blank" rel="noreferrer">https://webpack.electron.build/dependency-management#installing-native-node-modules</a></p><h2 id="멀티플랫폼-빌드를-하려면-어떻게-해야-하나요" tabindex="-1">멀티플랫폼 빌드를 하려면 어떻게 해야 하나요? <a class="header-anchor" href="#멀티플랫폼-빌드를-하려면-어떻게-해야-하나요" aria-label="Permalink to &quot;멀티플랫폼 빌드를 하려면 어떻게 해야 하나요?&quot;">​</a></h2><p>각 OS에 대한 패키지를 만들려면 동일한 OS에서 빌드해야 합니다. 예를 들어 macOS용 패키지는 macOS 컴퓨터에서 빌드해야 합니다.</p><p>하지만 하나의 OS에서 Windows, macOS, Linux용 패키지를 한 번에 빌드할 수 있습니다. 하지만 이를 위해서는 약간의 준비가 필요할 수 있습니다.</p><p>하나의 플랫폼에서 여러 플랫폼을 동시에 구축하려는 경우 <strong>macOS</strong>를 권장합니다. 몇 가지 간단한 설정만으로 구성할 수 있기 때문입니다.</p><p>다음 명령어를 사용하여 한 번에 여러 플랫폼 빌드를 수행할 수 있습니다. 또는 위의 개별 빌드 명령어를 통해 원하는 OS에 대해서만 빌드를 수행할 수도 있습니다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:all</span></span></code></pre></div><p>Linux 빌드에는 <code>multipass</code> 구성이 필요할 수 있습니다. 다음 링크를 통해 <code>multipass</code>에 대해 자세히 알아보세요: <a href="https://multipass.run" target="_blank" rel="noreferrer">https://multipass.run</a></p><p>멀티플랫폼 빌드에 대해 자세히 알아보려면 다음 문서를 참조하세요: <a href="https://electron.build/multi-platform-build" target="_blank" rel="noreferrer">https://electron.build/multi-platform-build</a></p><h2 id="개발-파일을-제외하여-번들-크기-줄이기" tabindex="-1">개발 파일을 제외하여 번들 크기 줄이기 <a class="header-anchor" href="#개발-파일을-제외하여-번들-크기-줄이기" aria-label="Permalink to &quot;개발 파일을 제외하여 번들 크기 줄이기&quot;">​</a></h2><p>빌드 시점에 필요하지 않은 파일은 <code>buildAssets/builder/config.ts</code>의 파일 속성에 파일 패턴을 추가하여 제외할 수 있습니다. 이렇게 하면 번들 용량을 절약할 수 있습니다.</p><p>아래는 불필요한 <code>node_modules</code> 파일 패턴으로 번들을 추가로 절약할 수 있는 예시입니다. 프로젝트에 따라 아래 규칙을 사용하면 문제가 발생할 수 있으므로 사용 전에 검토하시기 바랍니다.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/.*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/**/{CONTRIBUTORS,CNAME,AUTHOR,TODO,CONTRIBUTING,COPYING,INSTALL,NEWS,PORTING,Makefile,htdocs,CHANGELOG,ChangeLog,changelog,README,Readme,readme,test,sample,example,demo,composer.json,tsconfig.json,jsdoc.json,tslint.json,typings.json,gulpfile,bower.json,package-lock,Gruntfile,CMakeLists,karma.conf,yarn.lock}*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/**/{man,benchmark,node_modules,spec,cmake,browser,vagrant,doxy*,bin,obj,obj.target,example,examples,test,tests,doc,docs,msvc,Xcode,CVS,RCS,SCCS}{,/**/*}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/**/*.{conf,png,pc,coffee,txt,spec.js,ts,js.flow,html,def,jst,xml,ico,in,ac,sln,dsp,dsw,cmd,vcproj,vcxproj,vcxproj.filters,pdb,exp,obj,lib,map,md,sh,gypi,gyp,h,cpp,yml,log,tlog,Makefile,mk,c,cc,rc,xcodeproj,xcconfig,d.ts,yaml,hpp}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/**/node-v*-x64{,/**/*}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/bluebird/js/browser{,/**/*}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/bluebird/js/browser{,/**/*}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/source-map/dist{,/**/*}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/lodash/fp{,/**/*}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/async/!(dist|package.json)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/async/internal{,/**/*}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/ajv/dist{,/**/*}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/ajv/scripts{,/**/*}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/node-pre-gyp/!(lib|package.json)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/node-pre-gyp/lib/!(util|pre-binding.js|node-pre-gyp.js)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/node-pre-gyp/lib/util/!(versioning.js|abi_crosswalk.json)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/source-map-support/browser-source-map-support.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;!**/node_modules/json-schema/!(package.json|lib)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="네이티브-노드-모듈을-사용하는-프로젝트의-빌드-설정" tabindex="-1">네이티브 노드 모듈을 사용하는 프로젝트의 빌드 설정 <a class="header-anchor" href="#네이티브-노드-모듈을-사용하는-프로젝트의-빌드-설정" aria-label="Permalink to &quot;네이티브 노드 모듈을 사용하는 프로젝트의 빌드 설정&quot;">​</a></h2><p><strong>네이티브 노드 모듈</strong>을 사용하는 프로젝트의 경우, <code>package.json</code>에 다음 스크립트를 추가하세요: 종속성을 설치할 때 <code>electron-builder</code>가 리빌드가 필요한 모듈을 처리합니다.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;postinstall&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;electron-builder install-app-deps&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,20)]))}const u=i(l,[["render",t]]);export{c as __pageData,u as default};
