/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
(function() {'use strict';Math.floor(2147483648*Math.random()).toString(36);var i="function"===typeof Uint8Array&&"function"===typeof Uint16Array&&"function"===typeof Uint32Array;function o(a){if("string"===typeof a){var a=a.split(""),c,b;c=0;for(b=a.length;c<b;c++)a[c]=(a[c].charCodeAt(0)&255)>>>0}c=1;b=0;for(var f=a.length,d,e=0;0<f;){d=1024<f?1024:f;f-=d;do c+=a[e++],b+=c;while(--d);c%=65521;b%=65521}return(b<<16|c)>>>0};function p(a,c){this.index="number"===typeof c?c:0;this.o=0;this.buffer=a instanceof(i?Uint8Array:Array)?a:new (i?Uint8Array:Array)(32768);if(2*this.buffer.length<=this.index)throw Error("invalid index");this.buffer.length<=this.index&&this.g()}p.prototype.g=function(){var a=this.buffer,c,b=a.length,f=new (i?Uint8Array:Array)(b<<1);if(i)f.set(a);else for(c=0;c<b;++c)f[c]=a[c];return this.buffer=f};
p.prototype.d=function(a,c,b){var f=this.buffer,d=this.index,e=this.o,g=f[d];b&&1<c&&(a=8<c?(r[a&255]<<24|r[a>>>8&255]<<16|r[a>>>16&255]<<8|r[a>>>24&255])>>32-c:r[a]>>8-c);if(8>c+e)g=g<<c|a,e+=c;else for(b=0;b<c;++b)g=g<<1|a>>c-b-1&1,8===++e&&(e=0,f[d++]=r[g],g=0,d===f.length&&(f=this.g()));f[d]=g;this.buffer=f;this.o=e;this.index=d};p.prototype.finish=function(){var a=this.buffer,c=this.index;0<this.o&&(a[c]<<=8-this.o);a[c]=r[a[c]];c++;i?a=a.subarray(0,c):a.length=c;return a};
var s=new (i?Uint8Array:Array)(256),u;for(u=0;256>u;++u){for(var aa=s,ba=u,v=u,w=v,x=7,v=v>>>1;v;v>>>=1)w<<=1,w|=v&1,--x;aa[ba]=(w<<x&255)>>>0}var r=s;var y={m:function(a,c,b){return y.update(a,0,c,b)},update:function(a,c,b,f){for(var d=y.K,e="number"===typeof b?b:b=0,f="number"===typeof f?f:a.length,c=c^4294967295,e=f&7;e--;++b)c=c>>>8^d[(c^a[b])&255];for(e=f>>3;e--;b+=8)c=c>>>8^d[(c^a[b])&255],c=c>>>8^d[(c^a[b+1])&255],c=c>>>8^d[(c^a[b+2])&255],c=c>>>8^d[(c^a[b+3])&255],c=c>>>8^d[(c^a[b+4])&255],c=c>>>8^d[(c^a[b+5])&255],c=c>>>8^d[(c^a[b+6])&255],c=c>>>8^d[(c^a[b+7])&255];return(c^4294967295)>>>0}},A,B=[0,1996959894,3993919788,2567524794,124634137,
1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,
565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,
3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,
503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,
3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918E3,2847714899,3736837829,1202900863,817233897,
3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];A=i?new Uint32Array(B):B;y.K=A;function C(a){this.buffer=new (i?Uint16Array:Array)(2*a);this.length=0}C.prototype.getParent=function(a){return 2*((a-2)/4|0)};C.prototype.Z=function(a){return 2*a+2};C.prototype.push=function(a,c){var b,f,d=this.buffer,e;b=this.length;d[this.length++]=c;for(d[this.length++]=a;0<b;)if(f=this.getParent(b),d[b+1]<d[f+1])e=d[b],d[b]=d[f],d[f]=e,e=d[b+1],d[b+1]=d[f+1],d[f+1]=e,b=f;else break;return this.length};
C.prototype.pop=function(){var a,c,b=this.buffer,f,d,e;c=b[0];a=b[1];this.length-=2;b[0]=b[this.length];b[1]=b[this.length+1];for(e=0;;){d=this.Z(e);if(d>=this.length)break;d+2<this.length&&b[d+3]<b[d+1]&&(d+=2);if(b[e+1]>b[d+1])f=b[e],b[e]=b[d],b[d]=f,f=b[e+1],b[e+1]=b[d+1],b[d+1]=f;else break;e=d}return{index:a,value:c,length:this.length}};function D(a){var c=a.length,b=0,f=Number.POSITIVE_INFINITY,d,e,g,h,j,m,n,l,k;for(l=0;l<c;++l)a[l]>b&&(b=a[l]),a[l]<f&&(f=a[l]);d=1<<b;e=new (i?Uint32Array:Array)(d);g=1;h=0;for(j=2;g<=b;){for(l=0;l<c;++l)if(a[l]===g){m=0;n=h;for(k=0;k<g;++k)m=m<<1|n&1,n>>=1;for(k=m;k<d;k+=j)e[k]=g<<16|l;++h}++g;h<<=1;j<<=1}return[e,b,f]};function E(a,c,b){this.q=[];this.B=b?b:32768;this.z=0;this.c=void 0===c?0:c;this.f=this.l=0;this.input=i?new Uint8Array(a):a;this.A=!1;this.mode=F;this.la=!1;switch(this.mode){case ca:this.b=32768;this.a=new (i?Uint8Array:Array)(32768+this.B+258);break;case F:this.b=0;this.a=new (i?Uint8Array:Array)(this.B);this.g=this.U;this.C=this.O;this.s=this.Q;break;default:throw Error("invalid inflate mode");}}var ca=0,F=1;E.prototype.k=function(){for(;!this.A;)this.fa();return this.C()};
var da=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ea=i?new Uint16Array(da):da,fa=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],ga=i?new Uint16Array(fa):fa,ha=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],G=i?new Uint8Array(ha):ha,ia=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],ja=i?new Uint16Array(ia):ia,ka=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,
11,11,12,12,13,13],H=i?new Uint8Array(ka):ka,I=new (i?Uint8Array:Array)(288),J,la;J=0;for(la=I.length;J<la;++J)I[J]=143>=J?8:255>=J?9:279>=J?7:8;var ma=D(I),K=new (i?Uint8Array:Array)(30),L,na;L=0;for(na=K.length;L<na;++L)K[L]=5;var oa=D(K);E.prototype.fa=function(){var a=this.e(3);a&1&&(this.A=!0);a>>>=1;switch(a){case 0:this.ia();break;case 1:this.ha();break;case 2:this.ga();break;default:throw Error("unknown BTYPE: "+a);}};
E.prototype.e=function(a){for(var c=this.l,b=this.f,f=this.input,d=this.c,e;b<a;){e=f[d++];if(void 0===e)throw Error("input buffer is broken");c|=e<<b;b+=8}e=c&(1<<a)-1;this.l=c>>>a;this.f=b-a;this.c=d;return e};E.prototype.n=function(a){for(var c=this.l,b=this.f,f=this.input,d=this.c,e=a[0],a=a[1],g;b<a;){g=f[d++];if(void 0===g)throw Error("input buffer is broken");c|=g<<b;b+=8}f=e[c&(1<<a)-1];e=f>>>16;this.l=c>>e;this.f=b-e;this.c=d;return f&65535};
E.prototype.ia=function(){var a=this.input,c=this.c,b=this.a,f=this.b,d,e,g,h=b.length;this.f=this.l=0;d=a[c++];if(void 0===d)throw Error("invalid uncompressed block header: LEN (first byte)");e=d;d=a[c++];if(void 0===d)throw Error("invalid uncompressed block header: LEN (second byte)");e|=d<<8;d=a[c++];if(void 0===d)throw Error("invalid uncompressed block header: NLEN (first byte)");g=d;d=a[c++];if(void 0===d)throw Error("invalid uncompressed block header: NLEN (second byte)");if(e===~(g|d<<8))throw Error("invalid uncompressed block header: length verify");
if(c+e>a.length)throw Error("input buffer is broken");switch(this.mode){case ca:for(;f+e>=b.length;){d=h-f;e-=d;if(i)b.set(a.subarray(c,c+d),f),f+=d,c+=d;else for(;d--;)b[f++]=a[c++];this.b=f;b=this.g();f=this.b}break;case F:for(;f+e>b.length;)b=this.g({F:2});break;default:throw Error("invalid inflate mode");}if(i)b.set(a.subarray(c,c+e),f),f+=e,c+=e;else for(;e--;)b[f++]=a[c++];this.c=c;this.b=f;this.a=b};E.prototype.ha=function(){this.s(ma,oa)};
E.prototype.ga=function(){function a(a,b,c){for(var d,e,f=0,f=0;f<a;)switch(d=this.n(b),d){case 16:for(d=3+this.e(2);d--;)c[f++]=e;break;case 17:for(d=3+this.e(3);d--;)c[f++]=0;e=0;break;case 18:for(d=11+this.e(7);d--;)c[f++]=0;e=0;break;default:e=c[f++]=d}return c}var c=this.e(5)+257,b=this.e(5)+1,f=this.e(4)+4,d=new (i?Uint8Array:Array)(ea.length),e;for(e=e=0;e<f;++e)d[ea[e]]=this.e(3);f=D(d);d=new (i?Uint8Array:Array)(c);e=new (i?Uint8Array:Array)(b);this.s(D(a.call(this,c,f,d)),D(a.call(this,
b,f,e)))};E.prototype.s=function(a,c){var b=this.a,f=this.b;this.D=a;this.P=c;for(var d=b.length-258,e,g,h;256!==(e=this.n(a));)if(256>e)f>=d&&(this.b=f,b=this.g(),f=this.b),b[f++]=e;else{e-=257;h=ga[e];0<G[e]&&(h+=this.e(G[e]));e=this.n(c);g=ja[e];0<H[e]&&(g+=this.e(H[e]));f>=d&&(this.b=f,b=this.g(),f=this.b);for(;h--;)b[f]=b[f++-g]}for(;8<=this.f;)this.f-=8,this.c--;this.b=f};
E.prototype.Q=function(a,c){var b=this.a,f=this.b;this.D=a;this.P=c;for(var d=b.length,e,g,h;256!==(e=this.n(a));)if(256>e)f===d&&(b=this.g(),d=b.length),b[f++]=e;else{e-=257;h=ga[e];0<G[e]&&(h+=this.e(G[e]));e=this.n(c);g=ja[e];0<H[e]&&(g+=this.e(H[e]));f+h>=d&&(b=this.g(),d=b.length);for(;h--;)b[f]=b[f++-g]}for(;8<=this.f;)this.f-=8,this.c--;this.b=f};
E.prototype.g=function(){var a=new (i?Uint8Array:Array)(this.b-32768),c=this.b-32768,b,f,d=this.a;if(i)a.set(d.subarray(32768,a.length));else{b=0;for(f=a.length;b<f;++b)a[b]=d[b+32768]}this.q.push(a);this.z+=a.length;if(i)d.set(d.subarray(c,c+32768));else for(b=0;32768>b;++b)d[b]=d[c+b];this.b=32768;return d};
E.prototype.U=function(a){var c=this.input.length/this.c+1|0,b=this.input,f=this.a;a&&("number"===typeof a.F&&(c=a.F),"number"===typeof a.L&&(c+=a.L));2>c?(a=(b.length-this.c)/this.D[2],a=258*(a/2)|0,a=a<f.length?f.length+a:f.length<<1):a=f.length*c;i?(a=new Uint8Array(a),a.set(f)):a=f;return this.a=a};
E.prototype.C=function(){var a=0,c=this.a,b=this.q,f,d=new (i?Uint8Array:Array)(this.z+(this.b-32768)),e,g,h,j;if(0===b.length)return i?this.a.subarray(32768,this.b):this.a.slice(32768,this.b);e=0;for(g=b.length;e<g;++e){f=b[e];h=0;for(j=f.length;h<j;++h)d[a++]=f[h]}e=32768;for(g=this.b;e<g;++e)d[a++]=c[e];this.q=[];return this.buffer=d};
E.prototype.O=function(){var a,c=this.b;this.la?i?(a=new Uint8Array(c),a.set(this.a.subarray(0,c))):a=this.a.slice(0,c):a=i?this.a.subarray(0,c):this.a.slice(0,c);return this.buffer=a};function pa(a,c,b){this.input=a;this.c=0;this.oa=b;var b=a[this.c++],f=a[this.c++];switch(b&15){case M:this.method=M;break;default:throw Error("unsupported compression method");}if(0!==((b<<8)+f)%31)throw Error("invalid fcheck flag:"+((b<<8)+f)%31);if(f&32)throw Error("fdict flag is not supported");this.ka=new E(a,this.c,c)}
pa.prototype.k=function(){var a=this.input,c;c=this.ka.k();if(this.oa&&(a=a[this.c++]<<24|a[this.c++]<<16|a[this.c++]<<8|a[this.c++],a!==o(c)))throw Error("invalid adler-32 checksum");return c};var qa=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];i&&new Uint16Array(qa);var ra=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258];i&&new Uint16Array(ra);var sa=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0];i&&new Uint8Array(sa);var ta=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];i&&new Uint16Array(ta);
var ua=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];i&&new Uint8Array(ua);var N=new (i?Uint8Array:Array)(288),O,va;O=0;for(va=N.length;O<va;++O)N[O]=143>=O?8:255>=O?9:279>=O?7:8;D(N);var P=new (i?Uint8Array:Array)(30),Q,wa;Q=0;for(wa=P.length;Q<wa;++Q)P[Q]=5;D(P);function R(a){this.h=S;this.v=0;this.I=[];this.H=[];if("object"===typeof a&&null!==a&&("number"===typeof a.v&&(this.v=a.lazy),"number"===typeof a.h))this.h=a.h}var S=2,T=[],U;for(U=0;288>U;U++)switch(!0){case 143>=U:T.push([U+48,8]);break;case 255>=U:T.push([U-144+400,9]);break;case 279>=U:T.push([U-256+0,7]);break;case 287>=U:T.push([U-280+192,8]);break;default:throw"invalid literal: "+U;}
R.prototype.ba=function(a,c,b){var f;this.a=c instanceof(i?Uint8Array:Array)?c:new (i?Uint8Array:Array)(32768);"number"===typeof b&&(this.b=b);switch(this.h){case 0:c=0;for(b=a.length;c<b;){f=a;var d=c,e=void 0,g=f.length;if(f instanceof Array)f=f.slice(d,d+65535);else{for(var e=[],h=0;65535>h&&!(d+h>=g);h++)e.push(f[d+h]);f=e}c+=f.length;this.ea(f,c===b)}break;case 1:this.a=this.da(a,!0);this.b=this.a.length;break;case S:this.a=this.ca(a,!0);this.b=this.a.length;break;default:throw"invalid compression type";
}return this.a};R.prototype.j=R.prototype.ba;R.prototype.ea=function(a,c){var b,f,d=this.a,e=this.b;if(i){for(d=new Uint8Array(this.a.buffer);d.length<=e+a.length+5;)d=new Uint8Array(d.length<<1);d.set(this.a)}d[e++]=(c?1:0)|0;b=a.length;f=~b+65536&65535;d[e++]=b&255;d[e++]=b>>>8&255;d[e++]=f&255;d[e++]=f>>>8&255;if(i)d.set(a,e),e+=a.length,d=d.subarray(0,e);else{b=0;for(f=a.length;b<f;++b)d[e++]=a[b];d.length=e}this.b=e;return this.a=d};
R.prototype.da=function(a,c){var b=new p(new Uint8Array(this.a.buffer),this.b);b.d(c?1:0,1,!0);b.d(1,2,!0);this.X(this.J(a),b);return b.finish()};
R.prototype.ca=function(a,c){var b=new p(new Uint8Array(this.a.buffer),this.b),f,d,e,g,h=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],j,m,n,l,k,t,z=Array(19),q;f=S;b.d(c?1:0,1,!0);b.d(f,2,!0);f=this.J(a);j=this.p(this.I);m=this.u(j);n=this.p(this.H);l=this.u(n);for(d=286;257<d&&0===j[d-1];d--);for(e=30;1<e&&0===n[e-1];e--);k=this.aa(d,j,e,n);t=this.p(k.G,7);for(q=0;19>q;q++)z[q]=t[h[q]];for(g=19;4<g&&0===z[g-1];g--);h=this.p(k.G);t=this.u(h);b.d(d-257,5,!0);b.d(e-1,5,!0);b.d(g-4,4,!0);for(q=0;q<
g;q++)b.d(z[q],3,!0);q=0;for(z=k.r.length;q<z;q++)if(d=k.r[q],b.d(t[d],h[d],!0),16<=d){q++;switch(d){case 16:d=2;break;case 17:d=3;break;case 18:d=7;break;default:throw"invalid code: "+d;}b.d(k.r[q],d,!0)}this.T(f,[m,j],[l,n],b);return b.finish()};R.prototype.T=function(a,c,b,f){var d,e,g,h,j;g=c[0];c=c[1];h=b[0];j=b[1];b=0;for(d=a.length;b<d;++b)if(e=a[b],f.d(g[e],c[e],!0),256<e)f.d(a[++b],a[++b],!0),e=a[++b],f.d(h[e],j[e],!0),f.d(a[++b],a[++b],!0);else if(256===e)break;return f};
R.prototype.X=function(a,c){var b,f,d;b=0;for(f=a.length;b<f;b++)if(d=a[b],p.prototype.d.apply(c,T[d]),256<d)c.d(a[++b],a[++b],!0),c.d(a[++b],5),c.d(a[++b],a[++b],!0);else if(256===d)break;return c};function V(a,c){this.length=a;this.M=c}
function xa(a){switch(!0){case 3===a:return[257,a-3,0];case 4===a:return[258,a-4,0];case 5===a:return[259,a-5,0];case 6===a:return[260,a-6,0];case 7===a:return[261,a-7,0];case 8===a:return[262,a-8,0];case 9===a:return[263,a-9,0];case 10===a:return[264,a-10,0];case 12>=a:return[265,a-11,1];case 14>=a:return[266,a-13,1];case 16>=a:return[267,a-15,1];case 18>=a:return[268,a-17,1];case 22>=a:return[269,a-19,2];case 26>=a:return[270,a-23,2];case 30>=a:return[271,a-27,2];case 34>=a:return[272,a-31,2];case 42>=
a:return[273,a-35,3];case 50>=a:return[274,a-43,3];case 58>=a:return[275,a-51,3];case 66>=a:return[276,a-59,3];case 82>=a:return[277,a-67,4];case 98>=a:return[278,a-83,4];case 114>=a:return[279,a-99,4];case 130>=a:return[280,a-115,4];case 162>=a:return[281,a-131,5];case 194>=a:return[282,a-163,5];case 226>=a:return[283,a-195,5];case 257>=a:return[284,a-227,5];case 258===a:return[285,a-258,0];default:throw"invalid length: "+a;}}var W=[],X,Y;for(X=3;258>=X;X++)Y=xa(X),W[X]=Y[2]<<24|Y[1]<<16|Y[0];
var ya=i?new Uint32Array(W):W;
V.prototype.$=function(a){switch(!0){case 1===a:a=[0,a-1,0];break;case 2===a:a=[1,a-2,0];break;case 3===a:a=[2,a-3,0];break;case 4===a:a=[3,a-4,0];break;case 6>=a:a=[4,a-5,1];break;case 8>=a:a=[5,a-7,1];break;case 12>=a:a=[6,a-9,2];break;case 16>=a:a=[7,a-13,2];break;case 24>=a:a=[8,a-17,3];break;case 32>=a:a=[9,a-25,3];break;case 48>=a:a=[10,a-33,4];break;case 64>=a:a=[11,a-49,4];break;case 96>=a:a=[12,a-65,5];break;case 128>=a:a=[13,a-97,5];break;case 192>=a:a=[14,a-129,6];break;case 256>=a:a=[15,
a-193,6];break;case 384>=a:a=[16,a-257,7];break;case 512>=a:a=[17,a-385,7];break;case 768>=a:a=[18,a-513,8];break;case 1024>=a:a=[19,a-769,8];break;case 1536>=a:a=[20,a-1025,9];break;case 2048>=a:a=[21,a-1537,9];break;case 3072>=a:a=[22,a-2049,10];break;case 4096>=a:a=[23,a-3073,10];break;case 6144>=a:a=[24,a-4097,11];break;case 8192>=a:a=[25,a-6145,11];break;case 12288>=a:a=[26,a-8193,12];break;case 16384>=a:a=[27,a-12289,12];break;case 24576>=a:a=[28,a-16385,13];break;case 32768>=a:a=[29,a-24577,
13];break;default:throw"invalid distance";}return a};V.prototype.na=function(){var a=this.M,c=[],b=0,f;f=ya[this.length];c[b++]=f&65535;c[b++]=f>>16&255;c[b++]=f>>24;f=this.$(a);c[b++]=f[0];c[b++]=f[1];c[b++]=f[2];return c};
R.prototype.J=function(a){function c(a,b){var c=a.na(),d,e;d=0;for(e=c.length;d<e;++d)m[n++]=c[d];k[c[0]]++;t[c[3]]++;l=a.length+b-1;j=null}var b,f,d,e,g,h={},j,m=i?new Uint16Array(2*a.length):[],n=0,l=0,k=new (i?Uint32Array:Array)(286),t=new (i?Uint32Array:Array)(30),z=this.v;if(!i){for(d=0;285>=d;)k[d++]=0;for(d=0;29>=d;)t[d++]=0}k[256]=1;b=0;for(f=a.length;b<f;++b){d=g=0;for(e=3;d<e&&b+d!==f;++d)g=g<<8|a[b+d];void 0===h[g]&&(h[g]=[]);d=h[g];if(!(0<l--)){for(;0<d.length&&32768<b-d[0];)d.shift();
if(b+3>=f){j&&c(j,-1);d=0;for(e=f-b;d<e;++d)g=a[b+d],m[n++]=g,++k[g];break}0<d.length?(e=this.ma(a,b,d),j?j.length<e.length?(g=a[b-1],m[n++]=g,++k[g],c(e,0)):c(j,-1):e.length<z?j=e:c(e,0)):j?c(j,-1):(g=a[b],m[n++]=g,++k[g])}d.push(b)}m[n++]=256;k[256]++;this.I=k;this.H=t;return i?m.subarray(0,n):m};
R.prototype.ma=function(a,c,b){var f,d,e=0,g,h,j,m=a.length;h=0;j=b.length;a:for(;h<j;h++){f=b[j-h-1];g=3;if(3<e){for(g=e;3<g;g--)if(a[f+g-1]!==a[c+g-1])continue a;g=e}for(;258>g&&c+g<m&&a[f+g]===a[c+g];)++g;g>e&&(d=f,e=g);if(258===g)break}return new V(e,c-d)};
R.prototype.aa=function(a,c,b,f){var d=new (i?Uint32Array:Array)(a+b),e,g,h=new (i?Uint32Array:Array)(316),j=new (i?Uint8Array:Array)(19);for(e=g=0;e<a;e++)d[g++]=c[e];for(e=0;e<b;e++)d[g++]=f[e];if(!i){e=0;for(c=j.length;e<c;++e)j[e]=0}e=b=0;for(c=d.length;e<c;e+=g){for(g=1;e+g<c&&d[e+g]===d[e];++g);a=g;if(0===d[e])if(3>a)for(;0<a--;)h[b++]=0,j[0]++;else for(;0<a;)f=138>a?a:138,f>a-3&&f<a&&(f=a-3),10>=f?(h[b++]=17,h[b++]=f-3,j[17]++):(h[b++]=18,h[b++]=f-11,j[18]++),a-=f;else if(h[b++]=d[e],j[d[e]]++,
a--,3>a)for(;0<a--;)h[b++]=d[e],j[d[e]]++;else for(;0<a;)f=6>a?a:6,f>a-3&&f<a&&(f=a-3),h[b++]=16,h[b++]=f-3,j[16]++,a-=f}return{r:i?h.subarray(0,b):h.slice(0,b),G:j}};
R.prototype.p=function(a,c){var b=a.length,f,d=new C(572),e=new (i?Uint32Array:Array)(571),g=new (i?Uint32Array:Array)(571),h,j;f=[];j=Infinity;for(h=0;h<b;h++)0===a[h]?f.push(h):j>a[h]&&(j=a[h]);for(h=0;2>b-f.length;h++)a[f.shift()]=1;if(0<(c|0)){if(7!==c&&15!==c)throw"invalid limit number";h=15===c?2584:55;f=b-f.length;f=h-f;j=(0-j*h+f-1)/f|0;for(h=0;h<b;h++)0!==a[h]&&(a[h]+=j)}if(!i)for(h=0;571>h;h++)e[h]=0,g[h]=0;for(h=0;h<b;h++)0<a[h]&&d.push(h,a[h]);for(h=286;2<d.length;h++)j=d.pop(),f=d.pop(),
e[j.index]=e[f.index]=h,d.push(h,j.value+f.value);for(;0<=h;h--)0<e[h]&&(g[h]=1+g[e[h]]);return i?g.subarray(0,b):g.slice(0,b)};R.prototype.u=function(a){var c=new (i?Uint16Array:Array)(a.length),b=[],f=[],d=0,e,g,h;e=0;for(g=a.length;e<g;e++)b[a[e]]=(b[a[e]]|0)+1;e=1;for(g=16;e<=g;e++){f[e]=d;d+=b[e]|0;if(d>1<<e)throw"overcommitted";d<<=1}if(65536>d)throw"undercommitted";e=0;for(g=a.length;e<g;e++){d=f[a[e]];f[a[e]]+=1;b=c[e]=0;for(h=a[e];b<h;b++)c[e]=c[e]<<1|d&1,d>>>=1}return c};function za(a){this.buffer=[];this.a=new (i?Uint8Array:Array)(32768);this.h=S;"object"===typeof a&&"number"===typeof a.h&&(this.h=a.h);this.ja=new R(a)}
za.prototype.j=function(a){var c,b,f,d=0;f=this.a;c=M;switch(c){case M:b=Math.LOG2E*Math.log(32768)-8;break;default:throw Error("invalid compression method");}b=b<<4|c;f[d++]=b;switch(c){case M:switch(this.h){case 0:c=0;break;case 1:c=1;break;case S:c=2;break;default:throw Error("unsupported compression type");}break;default:throw Error("invalid compression method");}c=c<<6|0;f[d++]=c|31-(256*b+c)%31;b=o(a);f=this.ja.j(a,f,d);d=f.length;i&&(f=new Uint8Array(f.buffer),f.length<=d+4&&(this.a=new Uint8Array(f.length+
4),this.a.set(f),f=this.a),f=f.subarray(0,d+4));f[d++]=b&255;f[d++]=b>>8&255;f[d++]=b>>16&255;f[d++]=b>>24&255;return f};function Aa(a,c){this.input=a;this.b=this.c=0;this.i={};if("object"===typeof c&&("object"===typeof c.i&&(this.i=c.i),"string"===typeof c.filename&&(this.filename=c.filename),"object"===typeof c.t))this.t=c.t}
Aa.prototype.j=function(){var a,c,b,f,d=new (i?Uint8Array:Array)(32768),e=0,g=this.input,h=this.c;c=this.filename;var j=this.N;d[e++]=31;d[e++]=139;d[e++]=8;a=0;this.i.Y&&(a|=Ba);this.i.V&&(a|=Ca);this.i.W&&(a|=Da);d[e++]=a;a=(Date.now?Date.now:+new Date)/1E3|0;d[e++]=a&255;d[e++]=a>>>8&255;d[e++]=a>>>16&255;d[e++]=a>>>24&255;d[e++]=0;d[e++]=Ea;if(this.i.Y){b=0;for(f=c.length;b<f;++b)a=c.charCodeAt(b),255<a&&(d[e++]=a>>>8&255),d[e++]=a&255;d[e++]=0}if(this.i.V){b=0;for(f=j.length;b<f;++b)a=j.charCodeAt(b),
255<a&&(d[e++]=a>>>8&255),d[e++]=a&255;d[e++]=0}this.i.W&&(c=y.m(d,0,e)&65535,d[e++]=c&255,d[e++]=c>>>8&255);c=new R(this.t);d=c.j(g,d,e);e=c.b;i&&(e+8>d.buffer.byteLength?(this.a=new Uint8Array(e+8),this.a.set(new Uint8Array(d.buffer)),d=this.a):d=new Uint8Array(d.buffer));c=y.m(g);d[e++]=c&255;d[e++]=c>>>8&255;d[e++]=c>>>16&255;d[e++]=c>>>24&255;f=g.length;d[e++]=f&255;d[e++]=f>>>8&255;d[e++]=f>>>16&255;d[e++]=f>>>24&255;this.c=h;i&&e<d.length&&(this.a=d=d.subarray(0,e));return d};
var Ea=255,Da=2,Ba=8,Ca=16;function Z(a){this.input=a;this.b=this.c=0}Z.prototype.k=function(){for(var a=this.input.length;this.c<a;)this.R();return this.a};
Z.prototype.R=function(){var a,c,b,f,d,e,g=this.input;b=this.c;a=g[b++];c=g[b++];if(31!==a||139!==c)throw Error("invalid file signature:",a,c);a=g[b++];switch(a){case 8:break;default:throw Error("unknown compression method: "+a);}a=g[b++];c=g[b++]|g[b++]<<8|g[b++]<<16|g[b++]<<24;this.pa=new Date(1E3*c);b++;b++;0<(a&4)&&(c=g[b++]|g[b++]<<8,b=this.S(b,c));if(0<(a&Ba)){e=[];for(d=0;0<(c=g[b++]);)e[d++]=String.fromCharCode(c);this.name=e.join("")}if(0<(a&Ca)){e=[];for(d=0;0<(c=g[b++]);)e[d++]=String.fromCharCode(c);
this.N=e.join("")}if(0<(a&Da)&&(a=y.m(g,0,b)&65535,a!==(g[b++]|g[b++]<<8)))throw Error("invalid header crc16");a=g[g.length-4]|g[g.length-3]<<8|g[g.length-2]<<16|g[g.length-1]<<24;this.input.length-b-4-4>512*a&&(f=a);b="number"===typeof f?new E(g,b,f):new E(g,b);f=b.k();b=b.c;if(i)this.a=new Uint8Array(f.length),this.a.set(f,this.b),this.b+=f.length;else{this.a=Array(f.length);a=0;for(c=f.length;a<c;++a)this.a[this.b++]=f[a]}a=(g[b++]|g[b++]<<8|g[b++]<<16|g[b++]<<24)>>>0;if(y.m(f)!==a)throw Error("invalid CRC-32 checksum: 0x"+
y.m(f).toString(16)+" / 0x"+a.toString(16));a=(g[b++]|g[b++]<<8|g[b++]<<16|g[b++]<<24)>>>0;if((this.a.length&4294967295)!==a)throw Error("invalid input size: "+(this.a.length&4294967295)+" / "+a);this.c=b};Z.prototype.S=function(a,c){return a+c};exports.deflate=Fa;exports.deflateSync=Ga;exports.inflate=Ha;exports.inflateSync=Ia;exports.gzip=Ja;exports.gzipSync=Ka;exports.gunzip=La;exports.gunzipSync=Ma;function Fa(a,c,b){process.nextTick(function(){var f,d;try{d=Ga(a,b)}catch(e){f=e}c(f,d)})}function Ga(a,c){var b=(new za).j(a);c||(c={});return c.w?b:$(b)}function Ha(a,c,b){process.nextTick(function(){var f,d;try{d=Ia(a,b)}catch(e){f=e}c(f,d)})}function Ia(a,c){var b;a.subarray=a.slice;b=(new pa(a)).k();c||(c={});return c.w?b:$(b)}
function Ja(a,c,b){process.nextTick(function(){var f,d;try{d=Ka(a,b)}catch(e){f=e}c(f,d)})}function Ka(a,c){var b;a.subarray=a.slice;b=(new Aa(a)).j();c||(c={});return c.w?b:$(b)}function La(a,c,b){process.nextTick(function(){var f,d;try{d=Ma(a,b)}catch(e){f=e}c(f,d)})}function Ma(a,c){var b;a.subarray=a.slice;b=(new Z(a)).k();c||(c={});return c.w?b:$(b)}function $(a){var c=new Buffer(a.length),b,f;b=0;for(f=a.length;b<f;++b)c[b]=a[b];return c};var M=8;}).call(this);
