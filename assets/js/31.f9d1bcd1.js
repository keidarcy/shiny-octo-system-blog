(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{510:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"get-hostname-with-scutil"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-hostname-with-scutil"}},[t._v("#")]),t._v(" get HOSTNAME with scutil")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ scutil --get ComputerName\nHOKARI-no-MacBook-Pro\n$ scutil --get LocalHostName\nHOKARI-no-MacBook-Pro\n$ scutil --get HostName\nHostName: not "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" scutil --set ComputerName mbp2014mid\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" scutil --set LocalHostName mbp2014mid\n\n$ scutil --get ComputerName\nmbp2014mid\n$ scutil --get LocalHostName\nmbp2014mid\n$ scutil --get HostName\nHostName: not "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("\n")])])]),s("h2",{attrs:{id:"open-app-with-a-broken-system-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#open-app-with-a-broken-system-message"}},[t._v("#")]),t._v(" open app with a broken system message")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" xattr -r -d com.apple.quarantine\n\n// example\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" xattr -r -d com.apple.quarantine /Applications/Dash.app\n")])])]),s("h2",{attrs:{id:"show-full-path-in-finder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-full-path-in-finder"}},[t._v("#")]),t._v(" show full path in finder")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("defaults write com.apple.finder _FXShowPosixPathInTitle -bool YES\n")])])]),s("h2",{attrs:{id:"change-alfred-default-terminal-to-iterm2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-alfred-default-terminal-to-iterm2"}},[t._v("#")]),t._v(" change Alfred default terminal to iterm2")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --silent "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/stuartcryan/custom-iterm-applescripts-for-alfred/master/custom_iterm_script_iterm_3.1.1.applescript'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" pbcopy\n")])])]),s("p",[s("a",{attrs:{href:"https://github.com/vitorgalvao/custom-iterm-scripts-for-alfred",target:"_blank",rel:"noopener noreferrer"}},[t._v("detail"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);