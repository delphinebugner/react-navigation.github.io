(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8122],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(67294),i=a(80944),o=a(86010),r="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,p=e.values,m=e.groupId,d=e.className,h=(0,i.Z)(),g=h.tabGroupChoices,f=h.setTabGroupChoices,v=(0,n.useState)(u),k=v[0],y=v[1],b=n.Children.toArray(e.children),N=[];if(null!=m){var w=g[m];null!=w&&w!==k&&p.some((function(e){return e.value===w}))&&y(w)}var C=function(e){var t=e.currentTarget,a=N.indexOf(t),n=p[a].value;y(n),null!=m&&(f(m,n),setTimeout((function(){var e,a,n,i,o,r,s,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,o=e.right,r=window,s=r.innerHeight,c=r.innerWidth,a>=0&&o<=c&&i<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case c:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case s:var i=N.indexOf(e.target)-1;a=N[i]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",r,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:C,onClick:C},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),i=a(79443);t.Z=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4124:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=a(74034),i=a(79973),o=(a(67294),a(3905)),r=a(41395),l=a(58215),s={id:"compatibility",title:"Compatibility layer",sidebar_label:"Compatibility layer"},c={unversionedId:"compatibility",id:"version-5.x/compatibility",isDocsHomePage:!1,title:"Compatibility layer",description:"Note: Before following this guide, make sure that you've followed the Getting Started guide to setup React Navigation 5 in your app.",source:"@site/versioned_docs/version-5.x/compatibility.md",sourceDirName:".",slug:"/compatibility",permalink:"/docs/5.x/compatibility",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/compatibility.md",version:"5.x",sidebar_label:"Compatibility layer",frontMatter:{id:"compatibility",title:"Compatibility layer",sidebar_label:"Compatibility layer"},sidebar:"version-5.x/docs",previous:{title:"Glossary of terms",permalink:"/docs/5.x/glossary-of-terms"},next:{title:"Troubleshooting",permalink:"/docs/5.x/troubleshooting"}},u=[{value:"What does it handle?",id:"what-does-it-handle",children:[]},{value:"What doesn&#39;t it handle?",id:"what-doesnt-it-handle",children:[]},{value:"Why should we use it?",id:"why-should-we-use-it",children:[]}],p={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Before following this guide, make sure that you've followed the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/getting-started"},"Getting Started")," guide to setup React Navigation 5 in your app.")),(0,o.kt)("p",null,"React Navigation 5 has a completely new API, so our old code using React Navigation 4 will no longer work with this version. If you are not familiar with the new API, you can read about the differences in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/upgrading-from-4.x"},"upgrade guide"),". We understand that this can be a lot of work, so we have made a compatibility layer to make this easier."),(0,o.kt)("p",null,"To use the compatibility layer, we need to install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/compat"},(0,o.kt)("inlineCode",{parentName:"a"},"@react-navigation/compat")),":"),(0,o.kt)(r.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/native@^5.x @react-navigation/compat@^5.x @react-navigation/stack@^5.x\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/native@^5.x @react-navigation/compat@^5.x @react-navigation/stack@^5.x\n")))),(0,o.kt)("p",null,"Then we can make minimal changes in our code to use it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"-import { createStackNavigator } from 'react-navigation-stack';\n+import { createStackNavigator } from '@react-navigation/stack';\n+import { createCompatNavigatorFactory } from '@react-navigation/compat';\n\n-const RootStack = createStackNavigator(\n+const RootStack = createCompatNavigatorFactory(createStackNavigator)(\n  {\n    Home: { screen: HomeScreen },\n    Profile: { screen: ProfileScreen },\n  },\n  {\n    initialRouteName: 'Profile',\n  }\n);\n")),(0,o.kt)("p",null,"If you were importing actions from ",(0,o.kt)("inlineCode",{parentName:"p"},"react-navigation"),", you need to change them to import from ",(0,o.kt)("inlineCode",{parentName:"p"},"@react-navigation/compat"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"-import { NavigationActions } from 'react-navigation';\n+import { NavigationActions } from '@react-navigation/compat';\n")),(0,o.kt)("p",null,"The library exports the following APIs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Actions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NavigationActions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StackActions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DrawerActions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SwitchActions")))),(0,o.kt)("li",{parentName:"ul"},"HOCs",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withNavigation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withNavigationFocus")))),(0,o.kt)("li",{parentName:"ul"},"Navigators",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createSwitchNavigator")))),(0,o.kt)("li",{parentName:"ul"},"Compatibility helpers",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createCompatNavigatorFactory")," - Takes a navigator with the v5 API and returns a ",(0,o.kt)("inlineCode",{parentName:"li"},"createXNavigator")," with the v4 API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createCompatNavigationProp")," - Takes the v5 ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," object along with a ",(0,o.kt)("inlineCode",{parentName:"li"},"route")," object and returns a v4 ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," object.")))),(0,o.kt)("h3",{id:"what-does-it-handle"},"What does it handle?"),(0,o.kt)("p",null,"The compatibility layer handles various API differences between React Navigation 4 and 5:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use static configuration API of v4 instead of the component based API."),(0,o.kt)("li",{parentName:"ul"},"Change signature of methods on the navigation object to match v4."),(0,o.kt)("li",{parentName:"ul"},"Add support for ",(0,o.kt)("inlineCode",{parentName:"li"},"screenProps")," which is removed in v5."),(0,o.kt)("li",{parentName:"ul"},"Export action creators such as ",(0,o.kt)("inlineCode",{parentName:"li"},"NavigationActions"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"StackActions"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"SwitchActions")," with same signature as v4.")),(0,o.kt)("h3",{id:"what-doesnt-it-handle"},"What doesn't it handle?"),(0,o.kt)("p",null,"Due to the dynamic API of React Navigation 5, some functionality possible with the static API of v4 are not possible anymore, and hence the compatibility layer doesn't handle them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It doesn't wrap navigator's props or options. This basically means that the options you're passing to a navigator might be different as per breaking changes in the navigators. Refer to the navigator's docs for update options API."),(0,o.kt)("li",{parentName:"ul"},"Legacy deep link support by defining ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," in route configuration is not supported. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.x/deep-linking"},"deep linking documentation")," for more details now how to handle deep links."),(0,o.kt)("li",{parentName:"ul"},"Navigating to a navigator doesn't work the same, i.e. we can't navigate to a screen in a navigator that's not rendered already, and params aren't merged to all child screens. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.x/nesting-navigators"},"nesting navigators documentation")," for more details on how to navigate to screens in a different navigator."),(0,o.kt)("li",{parentName:"ul"},"Some methods such as the legacy ",(0,o.kt)("inlineCode",{parentName:"li"},"reset")," method which take an array of actions aren't supported anymore. Unsupported methods will throw errors when using them as well as give type errors if we're using TypeScript."),(0,o.kt)("li",{parentName:"ul"},"It doesn't export ",(0,o.kt)("inlineCode",{parentName:"li"},"createAppContainer"),", so you'll need to use the v5 API for the container (",(0,o.kt)("inlineCode",{parentName:"li"},"NavigationContainer"),"). This also means any features supported by the container need to be migrated to the new API."),(0,o.kt)("li",{parentName:"ul"},"If you're using advanced APIs like Redux integration, custom routers and actions etc., they aren't supported anymore and you'll need to remove Redux integration.")),(0,o.kt)("p",null,"While we have tried our best to make the compatibility layer handle most of the differences, there might be something missing. So make sure to test the code that you've migrated."),(0,o.kt)("h3",{id:"why-should-we-use-it"},"Why should we use it?"),(0,o.kt)("p",null,'Using the compatibility layer allows us to migrate our code to the new version incrementally. Unfortunately we do have to change some code to get the compatibility layer working (see "What doesn\'t it handle") properly, but it still allows majority of our code to remain unchanged. Some of the advantages of using the compatibility layer include:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It allows us to write new code with the new API while integrating with the code using the legacy API, i.e. you can navigate to screens defined with the legacy API from code written with the new API and vice versa."),(0,o.kt)("li",{parentName:"ul"},"Since it's built on top of v5 which has excellent TypeScript support, the legacy code can also take advantage of the improved type-checking, which will be useful when you want to refactor it into the new API later."),(0,o.kt)("li",{parentName:"ul"},"You can get granular with migration, e.g. migrate only few methods in a component to the new API. You still have access to the v5 ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," object at ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.original")," which you can use to gradually migrate the code."),(0,o.kt)("li",{parentName:"ul"},"You have access to new APIs in legacy components, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.setOptions")," or the new hooks such as ",(0,o.kt)("inlineCode",{parentName:"li"},"useFocusEffect"),".")),(0,o.kt)("p",null,"We are committed to help you to make it as easy as possible to upgrade. So please open issues about use cases the compatibility layer doesn't support, so that we can figure out a good migration strategy."))}m.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})}}]);