(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[399],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(v,i(i({ref:t},u),{},{components:a})):n.createElement(v,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(67294),r=a(80944),o=a(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,p=e.values,d=e.groupId,m=e.className,v=(0,r.Z)(),h=v.tabGroupChoices,g=v.setTabGroupChoices,f=(0,n.useState)(u),k=f[0],y=f[1],b=n.Children.toArray(e.children),N=[];if(null!=d){var w=h[d];null!=w&&w!==k&&p.some((function(e){return e.value===w}))&&y(w)}var x=function(e){var t=e.currentTarget,a=N.indexOf(t),n=p[a].value;y(n),null!=d&&(g(d,n),setTimeout((function(){var e,a,n,r,o,i,s,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,a>=0&&o<=c&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},j=function(e){var t,a;switch(e.keyCode){case c:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case s:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),r=a(79443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},75286:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=a(74034),r=a(79973),o=(a(67294),a(3905)),i=a(41395),l=a(58215),s={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},c={unversionedId:"getting-started",id:"version-5.x/getting-started",isDocsHomePage:!1,title:"Getting started",description:"What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.",source:"@site/versioned_docs/version-5.x/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/5.x/getting-started",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/getting-started.md",version:"5.x",sidebar_label:"Getting started",frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"version-5.x/docs",next:{title:"Hello React Navigation",permalink:"/docs/5.x/hello-react-navigation"}},u=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Installation",id:"installation",children:[{value:"Installing dependencies into an Expo managed project",id:"installing-dependencies-into-an-expo-managed-project",children:[]},{value:"Installing dependencies into a bare React Native project",id:"installing-dependencies-into-a-bare-react-native-project",children:[]}]}],p={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"What follows within the ",(0,o.kt)("em",{parentName:"p"},"Fundamentals")," section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"If you're already familiar with JavaScript, React and React Native, then you'll be able to get moving with React Navigation quickly! If not, we highly recommend you to gain some basic knowledge first, then come back here when you're done."),(0,o.kt)("p",null,"Here are some resources to help you out:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"http://reactnativeexpress.com/"},"React Native Express")," (Sections 1 to 4)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hello-world.html"},"Main Concepts of React")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-intro.html"},"React Hooks")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/context.html"},"React Context")," (Advanced)")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install the required packages in your React Native project:"),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/native@^5.x\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/native@^5.x\n")))),(0,o.kt)("p",null,"React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app. Don't worry too much about this for now, it'll become clear soon enough! To frontload the installation work, let's also install and configure dependencies used by most navigators, then we can move forward with starting to write some code."),(0,o.kt)("p",null,"The libraries we will install now are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-gesture-handler")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-reanimated")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-screens"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-screens"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-safe-area-context"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-masked-view"},(0,o.kt)("inlineCode",{parentName:"a"},"@react-native-community/masked-view")),". If you already have these libraries installed and at the latest version, you are done here! Otherwise, read on."),(0,o.kt)("h3",{id:"installing-dependencies-into-an-expo-managed-project"},"Installing dependencies into an Expo managed project"),(0,o.kt)("p",null,"In your project directory, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")),(0,o.kt)("p",null,"This will install versions of these libraries that are compatible."),(0,o.kt)("p",null,"You can now continue to ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/hello-react-navigation"},'"Hello React Navigation"')," to start writing some code."),(0,o.kt)("h3",{id:"installing-dependencies-into-a-bare-react-native-project"},"Installing dependencies into a bare React Native project"),(0,o.kt)("p",null,"In your project directory, run:"),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You might get warnings related to peer dependencies after installation. They are usually caused by incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: If using this project with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/react-native-windows"},"react-native-windows"),", omit ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler"),".")),(0,o.kt)("p",null,"From React Native 0.60 and higher, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"linking is automatic"),". So you ",(0,o.kt)("strong",{parentName:"p"},"don't need to run")," ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native link"),"."),(0,o.kt)("p",null,"If you're on a Mac and developing for iOS, you need to install the pods (via ",(0,o.kt)("a",{parentName:"p",href:"https://cocoapods.org/"},"Cocoapods"),") to complete the linking."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx pod-install ios\n")),(0,o.kt)("p",null,"To finalize installation of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler"),", add the following at the ",(0,o.kt)("strong",{parentName:"p"},"top")," (make sure it's at the top and there's nothing else before it) of your entry file, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import 'react-native-gesture-handler';\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: If you are building for Android or iOS, do not skip this step, or your app may crash in production even if it works fine in development. This is not applicable to other platforms.")),(0,o.kt)("p",null,"Now, we need to wrap the whole app in ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationContainer"),". Usually you'd do this in your entry file, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import 'react-native-gesture-handler';\nimport * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\n\nexport default function App() {\n  return (\n    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>\n  );\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: When you use a navigator (such as stack navigator), you'll need to follow the installation instructions of that navigator for any additional dependencies. If you're getting an error \"Unable to resolve module\", you need to install that module in your project.")),(0,o.kt)("p",null,"Now you are ready to build and run your app on the device/simulator."),(0,o.kt)("p",null,"Continue to ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/hello-react-navigation"},'"Hello React Navigation"')," to start writing some code."))}d.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);