(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2316],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return h}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),h=o,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},23930:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=t(74034),o=t(79973),a=(t(67294),t(3905)),i={id:"server-container",title:"ServerContainer",sidebar_label:"ServerContainer"},c={unversionedId:"server-container",id:"version-6.x/server-container",isDocsHomePage:!1,title:"ServerContainer",description:"The ServerContainer component provides utilities to render your app on server with the correct navigation state.",source:"@site/versioned_docs/version-6.x/server-container.md",sourceDirName:".",slug:"/server-container",permalink:"/docs/server-container",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/server-container.md",version:"6.x",sidebar_label:"ServerContainer",frontMatter:{id:"server-container",title:"ServerContainer",sidebar_label:"ServerContainer"},sidebar:"version-6.x/docs",previous:{title:"NavigationContainer",permalink:"/docs/navigation-container"},next:{title:"Group",permalink:"/docs/group"}},p=[{value:"Ref",id:"ref",children:[]},{value:"Props",id:"props",children:[{value:"<code>location</code>",id:"location",children:[]}]}],l={toc:p};function s(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerContainer")," component provides utilities to render your app on server with the correct ",(0,a.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Ref which will be populated with the screen options\nconst ref = React.createRef();\n\n// Location object containing the `pathname` and `search` fields of the current URL\nconst location = { pathname: '/profile', search: '?user=jane' };\n\n// Get rendered HTML\nconst html = ReactDOMServer.renderToString(\n  <ServerContainer ref={ref} location={location}>\n    <App />\n  </ServerContainer>\n);\n\n// Then you can access the options for the current screen in the ref\nconst options = ref.current.getCurrentOptions(); // { title: 'My Profile' }\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerContainer")," component should wrap your entire app during server rendering. Note that you still need a ",(0,a.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," in your app, ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerContainer")," doesn't replace it.'"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/server-rendering"},(0,a.kt)("inlineCode",{parentName:"a"},"server rendering guide"))," for a detailed guide and examples."),(0,a.kt)("h2",{id:"ref"},"Ref"),(0,a.kt)("p",null,"If you attach a ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," to the container, you can get the options for the current screen after rendering the app. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," will contain a method called ",(0,a.kt)("inlineCode",{parentName:"p"},"getCurrentOptions")," which will return an object with options for the focused screen in the navigation tree:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const options = ref.current.getCurrentOptions();\n")),(0,a.kt)("p",null,"Then you can access the options for the screen from this object and put it in the HTML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<title>{options.title}</title>\n<meta name="description" content={options.description} />\n')),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," object can be undefined if you are not rendering a navigator on the initial render."),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"location"},(0,a.kt)("inlineCode",{parentName:"h3"},"location")),(0,a.kt)("p",null,"Location object containing the location to use for server rendered output. You can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"pathname")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"search")," properties matching the ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," object in the browsers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<ServerContainer location={{ pathname: '/profile', search: '' }}>\n  <App />\n</ServerContainer>\n")),(0,a.kt)("p",null,"Normally, you'd construct this object based on the incoming request."),(0,a.kt)("p",null,"Basic example with Koa (don't use as is in production):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.use(async (ctx) => {\n  const html = ReactDOMServer.renderToString(\n    <ServerContainer location={{ pathname: ctx.path, search: ctx.search }}>\n      <App />\n    </ServerContainer>\n  );\n\n  ctx.body = html;\n});\n")))}s.isMDXComponent=!0}}]);