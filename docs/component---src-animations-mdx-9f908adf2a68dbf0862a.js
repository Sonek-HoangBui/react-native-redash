(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Qf1I:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return b})),t.d(n,"default",(function(){return s}));t("4cIV"),t("NZyX"),t("c0Gx"),t("QNbk"),t("+ytS"),t("WY76");var a=t("V0Ug"),c=t("sN0p");t("xH0s");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/animations.mdx"}});var r={_frontmatter:b},o=c.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,c={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,["components"]);return Object(a.b)(o,l({},r,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"animations"},"Animations"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usevalues"},Object(a.b)("inlineCode",{parentName:"h2"},"useValues()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useValues: <V extends string | number | boolean>(values: V[], deps: Dependencies) => Animated.Value<V>[];\n")),Object(a.b)("p",null,"Create animation values which lifecycle is granted by ",Object(a.b)("inlineCode",{parentName:"p"},"deps"),".\nFor instance the code snippet below:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const [toggle, state] = useValues([0, State.UNDETERMINED], []);\n")),Object(a.b)("p",null,"is a shortcut for"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const [toggle state] = useMemoOne(() => [new Value(0), new Value(State.UNDETERMINED)], []);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"useclocks"},Object(a.b)("inlineCode",{parentName:"h2"},"useClocks()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useClocks: (numberOfClocks: number, deps: Dependencies) => Animated.Clock[];\n")),Object(a.b)("p",null,"Create a number of clocks which lifecycle is granted by ",Object(a.b)("inlineCode",{parentName:"p"},"deps"),". For instance the code snippet below:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const [clock1, clock2, clock3] = useClocks(3, []);\n")),Object(a.b)("p",null,"is a shortcut for"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const [clock1, clock2, clock3] = useMemoOne(() => [new Clock(), new Clock(), new Clock()], []);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usediff"},Object(a.b)("inlineCode",{parentName:"h2"},"useDiff()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useDiff: (node: Animated.Node<number>, deps: Dependencies) => Animated.Value<number>;\n")),Object(a.b)("p",null,"Returns a difference between the node value from the last frame and the current one.\n",Object(a.b)("inlineCode",{parentName:"p"},"useDiff")," works for every frame whereas ",Object(a.b)("inlineCode",{parentName:"p"},"diff")," works on every evaluation."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"snappoint"},Object(a.b)("inlineCode",{parentName:"h2"},"snapPoint()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const snapPoint: (value: Animated.Adaptable<number>, velocity: Animated.Adaptable<number>, points: Animated.Adaptable<number>[]) => Animated.Adaptable<number>;\n")),Object(a.b)("p",null,"Select a point based on a node value and its velocity."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"binterpolate"},Object(a.b)("inlineCode",{parentName:"h2"},"bInterpolate")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const bInterpolate: (value: Animated.Adaptable<number>, origin: Animated.Adaptable<number>, destination: Animated.Adaptable<number>) => Animated.Node<number>;\n")),Object(a.b)("p",null,"Interpolate the node from 0 to 1 without clamping."))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/animations.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-animations-mdx-9f908adf2a68dbf0862a.js.map