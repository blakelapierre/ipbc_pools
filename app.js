!function t(e,o,n){function l(s,i){if(!o[s]){if(!e[s]){var r="function"==typeof require&&require;if(!i&&r)return r(s,!0);if(a)return a(s,!0);var A=new Error("Cannot find module '"+s+"'");throw A.code="MODULE_NOT_FOUND",A}var h=o[s]={exports:{}};e[s][0].call(h.exports,function(t){var o=e[s][1][t];return l(o||t)},h,h.exports,t,e,o,n)}return o[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)l(n[s]);return l}({1:[function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function l(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function a(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}function s(t,e){var o=(new Date).getTime();return fetch(t.url).then(function(n){var l=(new Date).getTime();n.json().then(function(n){return e(k)(t,n,l-o,e)}).catch(function(e){return console.log("Error decoding json",t.url,n,e)}),setTimeout(function(){return s(t,e)},1e4)}).catch(function(o){console.log("Error fetching",t.url,o),e(y)(t,o),setTimeout(function(){return s(t,e)},1e4)}),t}function i(t,e,o){return r(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(new Date).getTime();return fetch(t.url,{method:"POST",body:JSON.stringify({jsonrpc:"2.0",id:"test",method:"f_blocks_list_json",params:{height:e.heightData.last||0}})}).then(function(e){return e.json().then(function(e){return o(D)(t,e,(new Date).getTime()-n,o)})})},1e4),t}function r(t,e){return t().then(function(){return setTimeout(function(){return r(t,e)},e)}).catch(function(o){console.log("Monitor error",o),setTimeout(t,e)})}var A=function(){function t(t,e){var o=[],n=!0,l=!1,a=void 0;try{for(var s,i=t[Symbol.iterator]();!(n=(s=i.next()).done)&&(o.push(s.value),!e||o.length!==e);n=!0);}catch(t){l=!0,a=t}finally{try{!n&&i.return&&i.return()}finally{if(l)throw a}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=t("preact-cycle"),u=n(t("./pools")),c=n(t("./explorers")),f=document.createElement("a"),d=new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="),p=5e8;if(localStorage)try{p=parseInt(localStorage.getItem("difficultyThreshold"),10)||p,console.log({difficultyThreshold:p})}catch(t){}var m=function(t,e){console.log("started"),t.started=!0,g(t,e),t.poolsStats={}},g=function(t,e){return t.pools=t.poolUrls.map(function(t){return s({url:t},e)})},v=function(t,e){return t.explorers=t.explorerUrls.map(function(o){return i({url:o},t,e)})},k=function(t,e,o,n,l){void 0===t.heightData.firstSeen&&(t.heightData.firstSeen=o.network.height),Object.assign(e.stats=e.stats||{firstSeenBlockCount:o.pool.totalBlocks,lastSeenBlockCount:o.pool.totalBlocks,lastSeenBlock:0,height:o.network.height},{liveStats:o}),delete e.error,e.updated=(new Date).getTime(),e.latency=n,void 0===t.heightData.last?(t.heightData.last=o.network.height,v(t,l)):o.network.height>t.heightData.last&&(t.heightData.last=o.network.height,t.heightData.seen.unshift([o.network.height,(new Date).getTime(),e]),t.heightData.span=t.heightData.seen[0][1]-t.heightData.seen[t.heightData.seen.length-1][1],t.heightData.seen.length>70&&t.heightData.seen.splice(70,t.heightData.seen.length-70)),o.pool.totalBlocks>e.stats.lastSeenBlockCount&&(e.stats.lastSeenBlock=(new Date).getTime(),e.stats.lastSeenBlockCount=o.pool.totalBlocks),o.network.height>e.stats.height&&(e.stats.height=o.network.height),t.knownNetworkRate=0;var a=t.pools.reduce(function(e,o){if(o.stats&&o.stats.liveStats.pool){var n=o.stats.liveStats.pool,l=n.hashrate,a=n.miners;e.hashrate+=l||0,e.miners+=a||0,l>e.maxHashrate&&(e.maxHashrate=l),a>e.maxMiners&&(e.maxMiners=a),t.knownNetworkRate+=l}return e},{hashrate:0,miners:0,maxHashrate:0,maxMiners:0});Object.assign(t.poolsStats,a),t.hashrates.push([t.knownNetworkRate,e.updated]),e.stats.liveStats.network&&t.difficultyThreshold>0&&e.stats.liveStats.network.difficulty<t.difficultyThreshold&&d.play()},D=function(t,e,o,n){var l=o.result;Object.assign(e.stats=e.stats||{},{result:l})},w=function(t){t.difficultyThreshold=parseInt(t.difficultyThresholdInput),localStorage&&localStorage.setItem("difficultyThreshold",t.difficultyThreshold)},S=function(t,e){var o=e.target.value;t.difficultyThresholdInput=o},y=function(t,e,o){e.error=o},b=function(t,e){var o=e.heightData;return l(t),(0,h.h)("height-knowledge",null,(0,h.h)("table",null,(0,h.h)("thead",null,(0,h.h)("th",{colspan:2},"last ",o.seen.length," seen heights ",o.seen.length>0?"["+(((new Date).getTime()-o.seen[o.seen.length-1][1])/1e3).toFixed(1)+"s]":void 0)),(0,h.h)("tbody",null,o.seen.map(function(t){var e=A(t,3),o=e[0],n=e[1];e[2];return(0,h.h)("tr",null,(0,h.h)("td",null,o),(0,h.h)("td",null,(((new Date).getTime()-n)/1e3).toFixed(1),"s ago"))}))))},Q=function(t,e){var o=e.explorers;return l(t),(0,h.h)("explorers",null,o?o.map(function(t){return t.stats?(0,h.h)(B,{explorer:t}):void 0}):void 0)},B=function(t,e){var o=t.explorer,n=o.url,l=o.stats,a=e.heightData,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.result.blocks.slice(0,70).reduce(function(t,e,o){return t.totalTime+=t.time-e.timestamp,t.times.push([t.time-e.timestamp,e.height-a.last,t.previousDifficulty,t.totalTime,t.totalTime/30]),t.time=e.timestamp,t.maxDiff=Math.max(t.maxDiff,e.difficulty),t.minDiff=Math.min(t.minDiff,e.difficulty),t.previousDifficulty=e.difficulty,t},{time:(new Date).getTime()/1e3,totalTime:0,times:[],maxDiff:0,minDiff:9999999999});return(0,h.h)("explorer",null,n,(0,h.h)("block-times",null,s.times.map(function(t){var e=A(t,5),o=e[0],n=e[1],l=e[2],a=(e[3],e[4]);return(0,h.h)("block-time",{className:o>=30?"over":"under",style:{width:o/s.totalTime*100+"%"}},l?(0,h.h)("difficulty-bar",{style:{top:100*(1-(l-s.minDiff)/(s.maxDiff-s.minDiff))+"%"}}):void 0,(0,h.h)("height",null,n),(0,h.h)("time",null,o.toFixed(0),"s"),(0,h.h)("cumulative-time",null,a.toFixed(1)))})),(0,h.h)("total-time",null,s.totalTime.toFixed(0)),(0,h.h)("mean-time",null,(s.totalTime/Math.min(70,l.result.blocks.length)).toFixed(2)))},x=function(t,e){var o=t.pools,n=e.startTime,l=e.difficultyThresholdInput,a=e.mutation,s=e.heightData,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.values(o).filter(function(t){return t.stats&&Math.abs(s.last-t.stats.height)<6}),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Object.values(o).filter(function(t){return t.stats&&Math.abs(s.last-t.stats.height)>5}),A=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Object.values(o).filter(function(t){return!t.stats}),u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:i.reduce(function(t,e){return t+e.stats.liveStats.pool.totalBlocks-e.stats.firstSeenBlockCount},0);return(0,h.h)("network",null,(0,h.h)("table",null,(0,h.h)("thead",null,(0,h.h)("tr",null,(0,h.h)("th",{colspan:9},"values obtained/computed from pools'")),(0,h.h)("tr",null,(0,h.h)("th",null,"rtt"),(0,h.h)("th",null,"pool"),(0,h.h)("th",null,"height"),(0,h.h)("th",null,"network difficulty"),(0,h.h)("th",null,"hashrate"),(0,h.h)("th",null,"% of known pools"),(0,h.h)("th",null,"blocks"),(0,h.h)("th",null,"new blocks"),(0,h.h)("th",null,"seconds per block"))),(0,h.h)("thead",null,(0,h.h)("th",{colspan:9},"active pools ",s.last-s.firstSeen>0?"("+u+"/"+(s.last-s.firstSeen)+") ["+(u/(s.last-s.firstSeen)*100).toFixed(2)+"%] of seen blocks":void 0)),(0,h.h)(I,{pools:i,showSummary:!0}),(0,h.h)("thead",null,(0,h.h)("th",{colspan:9},"possibly forked pools")),(0,h.h)(I,{pools:r}),(0,h.h)("thead",null,(0,h.h)("th",{colspan:9},"unresponded pools")),(0,h.h)(I,{pools:A})),(0,h.h)(Q,null),(0,h.h)(b,null),"Average Seconds Per Block: ",u>0?(((new Date).getTime()-n)/u/1e3).toFixed(2):"waiting for new block",(0,h.h)("form",{action:"javascript:",onSubmit:a(w)},"Difficulty threshold for notification: ",(0,h.h)("input",{type:"number",value:l||0,onInput:a(S)}),(0,h.h)("button",null,"Set")))},I=function(t,e){var o=t.pools,n=t.showSummary,l=e.heightData,a=e.startTime,s=e.knownNetworkRate,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.reduce(function(t,e){return e.stats?t+e.stats.liveStats.pool.totalBlocks||0:0},0),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.reduce(function(t,e){return e.stats?t+e.stats.liveStats.pool.totalBlocks-e.stats.firstSeenBlockCount:0},0);return(0,h.h)("tbody",null,o.sort(function(t,e){return t.stats?e.stats?t.stats.liveStats.pool.hashrate>e.stats.liveStats.pool.hashrate?-1:1:-1:1}).map(function(t){return(0,h.h)("tr",{className:{updated:(new Date).getTime()-t.updated<=9e3,"new-block":t.stats&&(new Date).getTime()-t.stats.lastSeenBlock<=3e5,error:t.error}},(0,h.h)("td",null,t.latency),(0,h.h)("td",null,(0,h.h)("a",{href:(f.href=t.url,(f.protocol||"http")+"//"+f.hostname),target:"_new"},f.hostname)),(0,h.h)("td",{className:{"possible-fork":t.stats&&Math.abs(l.last-t.stats.liveStats.network.height)>5}},t.stats?t.stats.liveStats.network.height:void 0),(0,h.h)("td",null,t.stats?t.stats.liveStats.network.difficulty:void 0),(0,h.h)("td",null,t.stats?t.stats.liveStats.pool.hashrate:void 0),(0,h.h)("td",null,t.stats?(t.stats.liveStats.pool.hashrate/s*100).toFixed(1):void 0),(0,h.h)("td",null,t.stats?t.stats.liveStats.pool.totalBlocks:void 0),(0,h.h)("td",null,t.stats?t.stats.liveStats.pool.totalBlocks-t.stats.firstSeenBlockCount:void 0),(0,h.h)("td",null,t.stats&&t.stats.liveStats.pool.totalBlocks-t.stats.firstSeenBlockCount>0?(((new Date).getTime()-a)/(t.stats.liveStats.pool.totalBlocks-t.stats.firstSeenBlockCount)/1e3).toFixed(1):void 0))}).concat(n?[(0,h.h)("tr",null,(0,h.h)("td",null),(0,h.h)("td",null),(0,h.h)("td",null),(0,h.h)("td",null),(0,h.h)("td",null,s),(0,h.h)("td",null),(0,h.h)("td",null,i),(0,h.h)("td",null,r))]:[]))};(0,h.render)(function(t){return function(e,o){var n=o.mutation,l=e.started,s=a(e,["started"]);return(0,h.h)("view",null,l?(0,h.h)(t,s):n(m)(n))}}(function(t,e){var o=t.pools;t.poolsStats,e.mutation;return(0,h.h)("pools",null,(0,h.h)(x,{pools:o}),(0,h.h)("donate",null,"Donate to: Pv7ydx95p4Y11ZQaZGKMxGgrSQ9bLCarCGfdYxxDNawJacZrmFQZWQUaQmxADnDg6PjFYc5xd44LJQBroUqiJba72nUUFnudx"))}),{startTime:(new Date).getTime(),poolUrls:u.default,explorerUrls:c.default,difficultyThresholdInput:p,difficultyThreshold:p,hashrates:[],heightData:{last:void 0,seen:[]}},document.body)},{"./explorers":2,"./pools":3,"preact-cycle":"preact-cycle"}],2:[function(t,e,o){"use strict";o.__esModule=!0,o.default=["https://explorer.ipbc.io:8120/json_rpc"]},{}],3:[function(t,e,o){"use strict";o.__esModule=!0,o.default=["https://pool.ipbc.io:8119/live_stats","https://support.ipbc.io:8119/live_stats","https://cryptoknight.cc/rpc/ipbc/live_stats","http://54.148.101.99:8008/live_stats","https://ipbc-pool.network:8443/live_stats","http://ipbc-us.labbinarymining.com:8317/live_stats","http://ipbccoin.newpool.pw:8117/live_stats","http://ipbc.pool.ahka.net:8117/stats","http://54.148.101.99:8008/live_stats","http://ipbc.pool.ahka.net:8117/stats","https://ipbc.dreampool.info/api/live_stats","http://btcn.pool.pilbeams.net:8117/stats","https://etn.spacepools.org/api/cf_stats","http://ipbc.pool.ahka.net:8117/stats","https://ipbc.minez.ro/live_stats"]},{}]},{},[1]);