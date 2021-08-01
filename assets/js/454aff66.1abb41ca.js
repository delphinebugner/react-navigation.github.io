(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[4754],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=o,f=g["".concat(u,".").concat(d)]||g[d]||p[d]||r;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46692:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var a=n(74034),o=n(79973),r=(n(67294),n(3905)),i={id:"use-navigation-state",title:"useNavigationState",sidebar_label:"useNavigationState"},s={unversionedId:"use-navigation-state",id:"version-6.x/use-navigation-state",isDocsHomePage:!1,title:"useNavigationState",description:"useNavigationState is a hook which gives access to the navigation state of the navigator which contains the screen. It's useful in rare cases where you want to render something based on the navigation state.",source:"@site/versioned_docs/version-6.x/use-navigation-state.md",sourceDirName:".",slug:"/use-navigation-state",permalink:"/docs/use-navigation-state",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/use-navigation-state.md",version:"6.x",sidebar_label:"useNavigationState",frontMatter:{id:"use-navigation-state",title:"useNavigationState",sidebar_label:"useNavigationState"},sidebar:"version-6.x/docs",previous:{title:"useRoute",permalink:"/docs/use-route"},next:{title:"useFocusEffect",permalink:"/docs/use-focus-effect"}},u=[{value:"How is <code>useNavigationState</code> different from <code>navigation.getState()</code>?",id:"how-is-usenavigationstate-different-from-navigationgetstate",children:[]},{value:"Using with class component",id:"using-with-class-component",children:[]}],c={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useNavigationState")," is a hook which gives access to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," of the navigator which contains the screen. It's useful in rare cases where you want to render something based on the navigation state."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," object except ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"routes"),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.")),(0,r.kt)("p",null,"It takes a selector function as an argument. The selector will receive the full ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," and can return a specific value from the state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const index = useNavigationState(state => state.index);\n")),(0,r.kt)("p",null,"The selector function helps to reduce unnecessary re-renders, so your screen will re-render only when that's something you care about. If you actually need the whole state object, you can do this explicitly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const state = useNavigationState(state => state);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: This hook is useful for advanced cases and it's easy to introduce performance issues if you're not careful. For most of the cases, you don't need the navigator's state.")),(0,r.kt)("h2",{id:"how-is-usenavigationstate-different-from-navigationgetstate"},"How is ",(0,r.kt)("inlineCode",{parentName:"h2"},"useNavigationState")," different from ",(0,r.kt)("inlineCode",{parentName:"h2"},"navigation.getState()"),"?"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.getState()")," function also returns the current ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state"),". The main difference is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigationState")," hook will trigger a re-render when values change, while ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.getState()")," won't. For example, the following code will be incorrect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Profile() {\n  const routesLength = navigation.getState().routes.length; // Don't do this\n\n  return <Text>Number of routes: {routesLength}</Text>;\n}\n")),(0,r.kt)("p",null,"In this example, even if you push a new screen, this text won't update. If you use the hook, it'll work as expected:"),(0,r.kt)("samp",{id:"use-navigation-state"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Profile() {\n  const routesLength = useNavigationState(state => state.routes.length);\n\n  return <Text>Number of routes: {routesLength}</Text>;\n}\n")),(0,r.kt)("p",null,"So when do you use ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.getState()"),"? It's mostly useful within event listeners where you don't care about what's rendered. In most cases, using the hook should be preferred."),(0,r.kt)("h2",{id:"using-with-class-component"},"Using with class component"),(0,r.kt)("p",null,"You can wrap your class component in a function component to use the hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Profile extends React.Component {\n  render() {\n    // Get it from props\n    const { routesLength } = this.props;\n  }\n}\n\n// Wrap and export\nexport default function(props) {\n  const routesLength = useNavigationState(state => state.routes.length);\n\n  return <Profile {...props} routesLength={routesLength} />;\n}\n")))}l.isMDXComponent=!0}}]);