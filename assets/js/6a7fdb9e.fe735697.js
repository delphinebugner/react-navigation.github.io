(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[6708],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17532:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(74034),i=n(79973),r=(n(67294),n(3905)),o={id:"community-libraries-and-navigators",title:"Community-developed Navigators and Libraries",sidebar_label:"Community Navigators and Libraries"},s={unversionedId:"community-libraries-and-navigators",id:"version-5.x/community-libraries-and-navigators",isDocsHomePage:!1,title:"Community-developed Navigators and Libraries",description:"Libraries listed in this guide may not have been updated to work with the latest version of React Navigation. Please refer to the library's documentation to see which version of React Navigation it supports.",source:"@site/versioned_docs/version-5.x/community-libraries-and-navigators.md",sourceDirName:".",slug:"/community-libraries-and-navigators",permalink:"/docs/5.x/community-libraries-and-navigators",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/community-libraries-and-navigators.md",version:"5.x",sidebar_label:"Community Navigators and Libraries",frontMatter:{id:"community-libraries-and-navigators",title:"Community-developed Navigators and Libraries",sidebar_label:"Community Navigators and Libraries"},sidebar:"version-5.x/docs",previous:{title:"Supported React Native versions",permalink:"/docs/5.x/supported-react-native-versions"},next:{title:"Talks",permalink:"/docs/5.x/more-resources"}},c=[{value:"Fluid Transitions",id:"fluid-transitions",children:[]},{value:"react-navigation-collapsible",id:"react-navigation-collapsible",children:[]},{value:"react-native-screens",id:"react-native-screens",children:[]},{value:"react-navigation-header-buttons",id:"react-navigation-header-buttons",children:[]},{value:"react-navigation-props-mapper",id:"react-navigation-props-mapper",children:[]},{value:"react-navigation-backhandler",id:"react-navigation-backhandler",children:[]}],l={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Libraries listed in this guide may not have been updated to work with the latest version of React Navigation. Please refer to the library's documentation to see which version of React Navigation it supports.")),(0,r.kt)("h1",{id:"navigators"},"Navigators"),(0,r.kt)("h2",{id:"fluid-transitions"},"Fluid Transitions"),(0,r.kt)("p",null,"Fluid Transitions is a library that provides Shared Element Transitions during navigation between screens using react-navigation."),(0,r.kt)("p",null,"A Shared Element Transition is the visualization of an element in one screen being transformed into a corresponding element in another screen during the navigation transition."),(0,r.kt)("p",null,"The library implements a custom navigator called ",(0,r.kt)("inlineCode",{parentName:"p"},"FluidNavigator")," that makes all this and more possible."),(0,r.kt)("h4",{id:"links"},"Links"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/fram-x/FluidTransitions"},"github.com/fram-x/FluidTransitions")),(0,r.kt)("h1",{id:"libraries"},"Libraries"),(0,r.kt)("h2",{id:"react-navigation-collapsible"},"react-navigation-collapsible"),(0,r.kt)("p",null,"react-navigation-collapsible is a library and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Higher Order Component")," that adjusts your screen options and makes your screen header collapsible."),(0,r.kt)("p",null,"Since react-navigation's header is designed as ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated")," component, you can animate the header by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.Value")," from your ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList")," to the header."),(0,r.kt)("h4",{id:"links-1"},"Links"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/benevbright/react-navigation-collapsible"},"github.com/benevbright/react-navigation-collapsible")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.io/@benevbright/react-navigation-collapsible"},"Demo on Snack")),(0,r.kt)("h2",{id:"react-native-screens"},"react-native-screens"),(0,r.kt)("p",null,"This project aims to expose native navigation container components to React Native and React Navigation can integrate with it since version 2.14.0. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-screens")," brings several benefits, such as support for the ",(0,r.kt)("a",{parentName:"p",href:"https://www.cnet.com/how-to/how-to-use-reachability-on-iphone-6-6-plus/"},'"reachability feature"')," on iOS, and improved memory consumption on both platforms."),(0,r.kt)("h4",{id:"links-2"},"Links"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-screens"},"github.com/software-mansion/react-native-screens")),(0,r.kt)("h2",{id:"react-navigation-header-buttons"},"react-navigation-header-buttons"),(0,r.kt)("p",null,"Helps you to render buttons in the navigation bar and handle the styling so you don't have to. It tries to mimic the appearance of native navbar buttons and attempts to offer a simple interface for you to interact with."),(0,r.kt)("h4",{id:"links-3"},"Links"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-header-buttons"},"github.com/vonovak/react-navigation-header-buttons")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://expo.io/@vonovak/navbar-buttons-demo"},"Demo on expo")),(0,r.kt)("h2",{id:"react-navigation-props-mapper"},"react-navigation-props-mapper"),(0,r.kt)("p",null,"Provides simple HOCs that map react-navigation props to your screen components directly - ie. instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"const user = this.props.route.params.activeUser"),", you'd write ",(0,r.kt)("inlineCode",{parentName:"p"},"const user = this.props.activeUser"),"."),(0,r.kt)("h4",{id:"links-4"},"Links"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-props-mapper"},"github.com/vonovak/react-navigation-props-mapper")),(0,r.kt)("h2",{id:"react-navigation-backhandler"},"react-navigation-backhandler"),(0,r.kt)("p",null,"Easily handle Android back button behavior with React-Navigation with a component based API."),(0,r.kt)("h4",{id:"links-5"},"Links"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-backhandler"},"github.com/vonovak/react-navigation-backhandler")))}p.isMDXComponent=!0}}]);