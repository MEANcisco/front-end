(window.webpackJsonp=window.webpackJsonp||[]).push([[14,6,8,11,12,15,17,20],{100:function(e,t){function r(e){return"string"==typeof e?e.replace(/^0+|[^0-9kK]+/g,"").toUpperCase():""}e.exports={validate:function(e){if("string"!=typeof e)return!1;if(/^0+/.test(e))return!1;if(!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(e))return!1;e=r(e);let t=parseInt(e.slice(0,-1),10),n=0,s=1;for(;t>0;)s=(s+t%10*(9-n++%6))%11,t=Math.floor(t/10);return(s>0?""+(s-1):"K")===e.slice(-1)},clean:r,format:function(e,t={dots:!0}){let n;if(e=r(e),t.dots){n=e.slice(-4,-1)+"-"+e.substr(e.length-1);for(let i=4;i<e.length;i+=3)n=e.slice(-3-i,-i)+"."+n}else n=e.slice(0,-1)+"-"+e.substr(e.length-1);return n},getCheckDigit:function(input){const e=Array.from(r(input),Number);if(0===e.length||e.includes(NaN))throw new Error(`"${input}" as RUT is invalid`);const t=11-e.reverse().reduce(((e,t,r)=>e+t*(r%6+2)),0)%11;return 10===t?"K":11===t?"0":t.toString()}}},167:function(e,t,r){e.exports=r.p+"img/logo.2ef06c7.svg"},246:function(e,t,r){e.exports=r.p+"img/recibo.3b1bf6f.svg"}}]);