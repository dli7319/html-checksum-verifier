(function() {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __esmMin = (fn, res, err) => () => {
		if (err) throw err[0];
		try {
			return fn && (res = fn(fn = 0)), res;
		} catch (e) {
			throw err = [e], e;
		}
	};
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	//#endregion
	//#region node_modules/preact/dist/preact.module.js
	function m$1(n, l) {
		for (var u in l) n[u] = l[u];
		return n;
	}
	function b$1(n) {
		n && n.parentNode && n.parentNode.removeChild(n);
	}
	function k$2(l, u, t) {
		var i, r, o, e = {};
		for (o in u) "key" == o ? i = u[o] : "ref" == o ? r = u[o] : e[o] = u[o];
		if (arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) void 0 === e[o] && (e[o] = l.defaultProps[o]);
		return x$2(l, e, i, r, null);
	}
	function x$2(n, t, i, r, o) {
		var e = {
			type: n,
			props: t,
			key: i,
			ref: r,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: null == o ? ++u$2 : o,
			__i: -1,
			__u: 0
		};
		return null == o && null != l$1.vnode && l$1.vnode(e), e;
	}
	function M$1() {
		return { current: null };
	}
	function S(n) {
		return n.children;
	}
	function C$2(n, l) {
		this.props = n, this.context = l;
	}
	function $$1(n, l) {
		if (null == l) return n.__ ? $$1(n.__, n.__i + 1) : null;
		for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
		return "function" == typeof n.type ? $$1(n) : null;
	}
	function I$1(n) {
		if (n.__P && n.__d) {
			var u = n.__v, t = u.__e, i = [], r = [], o = m$1({}, u);
			o.__v = u.__v + 1, l$1.vnode && l$1.vnode(o), q$2(n.__P, o, u, n.__n, n.__P.namespaceURI, 32 & u.__u ? [t] : null, i, null == t ? $$1(u) : t, !!(32 & u.__u), r), o.__v = u.__v, o.__.__k[o.__i] = o, D$2(i, o, r), u.__e = u.__ = null, o.__e != t && P$2(o);
		}
	}
	function P$2(n) {
		if (null != (n = n.__) && null != n.__c) return n.__e = n.__c.base = null, n.__k.some(function(l) {
			if (null != l && null != l.__e) return n.__e = n.__c.base = l.__e;
		}), P$2(n);
	}
	function A$2(n) {
		(!n.__d && (n.__d = !0) && i$2.push(n) && !H$1.__r++ || r$1 != l$1.debounceRendering) && ((r$1 = l$1.debounceRendering) || o$1)(H$1);
	}
	function H$1() {
		try {
			for (var n, l = 1; i$2.length;) i$2.length > l && i$2.sort(e$1), n = i$2.shift(), l = i$2.length, I$1(n);
		} finally {
			i$2.length = H$1.__r = 0;
		}
	}
	function L$1(n, l, u, t, i, r, o, e, f, c, a) {
		var s, h, p, v, y, _, g = t && t.__k || w$2, m = l.length;
		for (f = T$2(u, l, g, f, m), s = 0; s < m; s++) null != (p = u.__k[s]) && (h = -1 != p.__i && g[p.__i] || d$1, p.__i = s, _ = q$2(n, p, h, i, r, o, e, f, c, a), v = p.__e, p.ref && h.ref != p.ref && (h.ref && J$1(h.ref, null, p), a.push(p.ref, p.__c || v, p)), null == y && null != v && (y = v), 4 & p.__u ? (f = j$2(p, f, n), h.__e && (h.__e = null)) : "function" == typeof p.type && void 0 !== _ ? f = _ : v && (f = v.nextSibling), p.__u &= -7);
		return u.__e = y, f;
	}
	function T$2(n, l, u, t, i) {
		var r, o, e, f, c, a = u.length, s = a, h = 0;
		for (n.__k = new Array(i), r = 0; r < i; r++) null != (o = l[r]) && "boolean" != typeof o && "function" != typeof o ? ("string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? o = n.__k[r] = x$2(null, o, null, null, null) : g$2(o) ? o = n.__k[r] = x$2(S, { children: o }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? o = n.__k[r] = x$2(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : n.__k[r] = o, f = r + h, o.__ = n, o.__b = n.__b + 1, e = null, -1 != (c = o.__i = O$1(o, u, f, s)) && (s--, (e = u[c]) && (e.__u |= 2)), null == e || null == e.__v ? (-1 == c && (i > a ? h-- : i < a && h++), "function" != typeof o.type && (o.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, o.__u |= 4))) : n.__k[r] = null;
		if (s) for (r = 0; r < a; r++) null != (e = u[r]) && 0 == (2 & e.__u) && (e.__e == t && (t = $$1(e)), K$1(e, e));
		return t;
	}
	function j$2(n, l, u) {
		var t, i;
		if ("function" == typeof n.type) {
			for (t = n.__k, i = 0; t && i < t.length; i++) t[i] && (t[i].__ = n, l = j$2(t[i], l, u));
			return l;
		}
		n.__e != l && (l && n.type && !l.parentNode && (l = $$1(n)), l = u.insertBefore(n.__e, l || null));
		do
			l = l && l.nextSibling;
		while (null != l && 8 == l.nodeType);
		return l;
	}
	function F$2(n, l) {
		return l = l || [], null == n || "boolean" == typeof n || (g$2(n) ? n.some(function(n) {
			F$2(n, l);
		}) : l.push(n)), l;
	}
	function O$1(n, l, u, t) {
		var i, r, o, e = n.key, f = n.type, c = l[u], a = null != c && 0 == (2 & c.__u);
		if (null === c && null == e || a && e == c.key && f == c.type) return u;
		if (t > (a ? 1 : 0)) {
			for (i = u - 1, r = u + 1; i >= 0 || r < l.length;) if (null != (c = l[o = i >= 0 ? i-- : r++]) && 0 == (2 & c.__u) && e == c.key && f == c.type) return o;
		}
		return -1;
	}
	function z$2(n, l, u) {
		"-" == l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || _$1.test(l) ? u : u + "px";
	}
	function N$1(n, l, u, t, i) {
		var r, o;
		n: if ("style" == l) if ("string" == typeof u) n.style.cssText = u;
		else {
			if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || z$2(n.style, l, "");
			if (u) for (l in u) t && u[l] == t[l] || z$2(n.style, l, u[l]);
		}
		else if ("o" == l[0] && "n" == l[1]) r = l != (l = l.replace(s$1, "$1")), o = l.toLowerCase(), l = o in n || "onFocusOut" == l || "onFocusIn" == l ? o.slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? t ? u[a$1] = t[a$1] : (u[a$1] = h$1, n.addEventListener(l, r ? v$1 : p$1, r)) : n.removeEventListener(l, r ? v$1 : p$1, r);
		else {
			if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
			else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
				n[l] = null == u ? "" : u;
				break n;
			} catch (n) {}
			"function" == typeof u || (null == u || !1 === u && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
		}
	}
	function V$1(n) {
		return function(u) {
			if (this.l) {
				var t = this.l[u.type + n];
				if (null == u[c$1]) u[c$1] = h$1++;
				else if (u[c$1] < t[a$1]) return;
				return t(l$1.event ? l$1.event(u) : u);
			}
		};
	}
	function q$2(n, u, t, i, r, o, e, f, c, a) {
		var s, h, p, v, y, d, _, k, x, M, I, P, A, H, T, j, F = u.type;
		if (void 0 !== u.constructor) return null;
		128 & t.__u && (c = !!(32 & t.__u), o = [f = u.__e = t.__e]), (s = l$1.__b) && s(u);
		n: if ("function" == typeof F) {
			h = e.length;
			try {
				if (x = u.props, M = F.prototype && F.prototype.render, I = (s = F.contextType) && i[s.__c], P = s ? I ? I.props.value : s.__ : i, t.__c ? k = (p = u.__c = t.__c).__ = p.__E : (M ? u.__c = p = new F(x, P) : (u.__c = p = new C$2(x, P), p.constructor = F, p.render = Q$1), I && I.sub(p), p.state || (p.state = {}), p.__n = i, v = p.__d = !0, p.__h = [], p._sb = []), M && null == p.__s && (p.__s = p.state), M && null != F.getDerivedStateFromProps && (p.__s == p.state && (p.__s = m$1({}, p.__s)), m$1(p.__s, F.getDerivedStateFromProps(x, p.__s))), y = p.props, d = p.state, p.__v = u, v) M && null == F.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), M && null != p.componentDidMount && p.__h.push(p.componentDidMount);
				else {
					if (M && null == F.getDerivedStateFromProps && x !== y && null != p.componentWillReceiveProps && p.componentWillReceiveProps(x, P), u.__v == t.__v || !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(x, p.__s, P)) {
						u.__v != t.__v && (p.props = x, p.state = p.__s, p.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function(n) {
							n && (n.__ = u);
						}), w$2.push.apply(p.__h, p._sb), p._sb = [], p.__h.length && e.push(p), f = $$1(t);
						break n;
					}
					null != p.componentWillUpdate && p.componentWillUpdate(x, p.__s, P), M && null != p.componentDidUpdate && p.__h.push(function() {
						p.componentDidUpdate(y, d, _);
					});
				}
				if (p.context = P, p.props = x, p.__P = n, p.__e = !1, A = l$1.__r, H = 0, M) p.state = p.__s, p.__d = !1, A && A(u), s = p.render(p.props, p.state, p.context), w$2.push.apply(p.__h, p._sb), p._sb = [];
				else do
					p.__d = !1, A && A(u), s = p.render(p.props, p.state, p.context), p.state = p.__s;
				while (p.__d && ++H < 25);
				p.state = p.__s, null != p.getChildContext && (i = m$1(m$1({}, i), p.getChildContext())), M && !v && null != p.getSnapshotBeforeUpdate && (_ = p.getSnapshotBeforeUpdate(y, d)), T = null != s && s.type === S && null == s.key ? E$1(s.props.children) : s, f = L$1(n, g$2(T) ? T : [T], u, t, i, r, o, e, f, c, a), p.base = u.__e, u.__u &= -161, p.__h.length && e.push(p), k && (p.__E = p.__ = null);
			} catch (n) {
				if (e.length = h, u.__v = null, c || null != o) {
					if (n.then) {
						for (u.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;) f = f.nextSibling;
						null != o && (o[o.indexOf(f)] = null), u.__e = f;
					} else if (null != o) for (j = o.length; j--;) b$1(o[j]);
				} else u.__e = t.__e;
				u.__k ??= t.__k || [], n.then || B$2(u), l$1.__e(n, u, t);
			}
		} else null == o && u.__v == t.__v ? (u.__k = t.__k, u.__e = t.__e) : f = u.__e = G$1(t.__e, u, t, i, r, o, e, c, a);
		return (s = l$1.diffed) && s(u), 128 & u.__u ? void 0 : f;
	}
	function B$2(n) {
		n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(B$2));
	}
	function D$2(n, u, t) {
		for (var i = 0; i < t.length; i++) J$1(t[i], t[++i], t[++i]);
		l$1.__c && l$1.__c(u, n), n.some(function(u) {
			try {
				n = u.__h, u.__h = [], n.some(function(n) {
					n.call(u);
				});
			} catch (n) {
				l$1.__e(n, u.__v);
			}
		});
	}
	function E$1(n) {
		return "object" != typeof n || null == n || n.__b > 0 ? n : g$2(n) ? n.map(E$1) : void 0 !== n.constructor ? null : m$1({}, n);
	}
	function G$1(u, t, i, r, o, e, f, c, a) {
		var s, h, p, v, y, w, _, m = i.props || d$1, k = t.props, x = t.type;
		if ("svg" == x ? o = "http://www.w3.org/2000/svg" : "math" == x ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != e) {
			for (s = 0; s < e.length; s++) if ((y = e[s]) && "setAttribute" in y == !!x && (x ? y.localName == x : 3 == y.nodeType)) {
				u = y, e[s] = null;
				break;
			}
		}
		if (null == u) {
			if (null == x) return document.createTextNode(k);
			u = document.createElementNS(o, x, k.is && k), c && (l$1.__m && l$1.__m(t, e), c = !1), e = null;
		}
		if (null == x) m === k || c && u.data == k || (u.data = k);
		else {
			if (e = "textarea" == x && null != k.defaultValue ? null : e && n.call(u.childNodes), !c && null != e) for (m = {}, s = 0; s < u.attributes.length; s++) m[(y = u.attributes[s]).name] = y.value;
			for (s in m) y = m[s], "dangerouslySetInnerHTML" == s ? p = y : "children" == s || s in k || "value" == s && "defaultValue" in k || "checked" == s && "defaultChecked" in k || N$1(u, s, null, y, o);
			for (s in k) y = k[s], "children" == s ? v = y : "dangerouslySetInnerHTML" == s ? h = y : "value" == s ? w = y : "checked" == s ? _ = y : c && "function" != typeof y || m[s] === y || N$1(u, s, y, m[s], o);
			if (h) c || p && (h.__html == p.__html || h.__html == u.innerHTML) || (u.innerHTML = h.__html), t.__k = [];
			else if (p && (u.innerHTML = ""), L$1("template" == t.type ? u.content : u, g$2(v) ? v : [v], t, i, r, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : o, e, f, e ? e[0] : i.__k && $$1(i, 0), c, a), null != e) for (s = e.length; s--;) b$1(e[s]);
			c && "textarea" != x || (s = "value", "progress" == x && null == w ? u.removeAttribute("value") : null != w && (w !== u[s] || "progress" == x && !w || "option" == x && w != m[s]) && N$1(u, s, w, m[s], o), s = "checked", null != _ && _ != u[s] && N$1(u, s, _, m[s], o));
		}
		return u;
	}
	function J$1(n, u, t) {
		try {
			if ("function" == typeof n) {
				var i = "function" == typeof n.__u;
				i && n.__u(), i && null == u || (n.__u = n(u));
			} else n.current = u;
		} catch (n) {
			l$1.__e(n, t);
		}
	}
	function K$1(n, u, t) {
		var i, r;
		if (l$1.unmount && l$1.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || J$1(i, null, u)), null != (i = n.__c)) {
			if (i.componentWillUnmount) try {
				i.componentWillUnmount();
			} catch (n) {
				l$1.__e(n, u);
			}
			i.base = i.__P = i.__n = null;
		}
		if (i = n.__k) for (r = 0; r < i.length; r++) i[r] && K$1(i[r], u, t || "function" != typeof n.type);
		t || b$1(n.__e), n.__c = n.__ = n.__e = void 0;
	}
	function Q$1(n, l, u) {
		return this.constructor(n, u);
	}
	function R$1(u, t, i) {
		var r, o, e, f;
		t == document && (t = document.documentElement), l$1.__ && l$1.__(u, t), o = (r = "function" == typeof i) ? null : i && i.__k || t.__k, e = [], f = [], q$2(t, u = (!r && i || t).__k = k$2(S, null, [u]), o || d$1, d$1, t.namespaceURI, !r && i ? [i] : o ? null : t.firstChild ? n.call(t.childNodes) : null, e, !r && i ? i : o ? o.__e : t.firstChild, r, f), D$2(e, u, f), u.props.children = null;
	}
	function U$1(n, l) {
		R$1(n, l, U$1);
	}
	function W$1(l, u, t) {
		var i, r, o, e, f = m$1({}, l.props);
		for (o in l.type && l.type.defaultProps && (e = l.type.defaultProps), u) "key" == o ? i = u[o] : "ref" == o ? r = u[o] : f[o] = void 0 === u[o] && null != e ? e[o] : u[o];
		return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), x$2(l.type, f, i || l.key, r || l.ref, null);
	}
	function X$1(n) {
		function l(n) {
			var u, t;
			return this.getChildContext || (u = /* @__PURE__ */ new Set(), (t = {})[l.__c] = this, this.getChildContext = function() {
				return t;
			}, this.componentWillUnmount = function() {
				u = null;
			}, this.shouldComponentUpdate = function(n) {
				this.props.value != n.value && u.forEach(function(n) {
					n.__e = !0, A$2(n);
				});
			}, this.sub = function(n) {
				u.add(n);
				var l = n.componentWillUnmount;
				n.componentWillUnmount = function() {
					u && u.delete(n), l && l.call(n);
				};
			}), n.children;
		}
		return l.__c = "__cC" + y$1++, l.__ = n, l.Provider = l.__l = (l.Consumer = function(n, l) {
			return n.children(l);
		}).contextType = l, l;
	}
	var n, l$1, u$2, i$2, r$1, o$1, e$1, f$2, c$1, a$1, s$1, h$1, p$1, v$1, y$1, d$1, w$2, _$1, g$2;
	var init_preact_module = __esmMin((() => {
		d$1 = {};
		w$2 = [];
		_$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
		g$2 = Array.isArray;
		n = w$2.slice, l$1 = { __e: function(n, l, u, t) {
			for (var i, r, o; l = l.__;) if ((i = l.__c) && !i.__) try {
				if ((r = i.constructor) && null != r.getDerivedStateFromError && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), o = i.__d), o) return i.__E = i;
			} catch (l) {
				n = l;
			}
			throw n;
		} }, u$2 = 0, C$2.prototype.setState = function(n, l) {
			var u = null != this.__s && this.__s != this.state ? this.__s : this.__s = m$1({}, this.state);
			"function" == typeof n && (n = n(m$1({}, u), this.props)), n && m$1(u, n), null != n && this.__v && (l && this._sb.push(l), A$2(this));
		}, C$2.prototype.forceUpdate = function(n) {
			this.__v && (this.__e = !0, n && this.__h.push(n), A$2(this));
		}, C$2.prototype.render = S, i$2 = [], o$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$1 = function(n, l) {
			return n.__v.__b - l.__v.__b;
		}, H$1.__r = 0, f$2 = Math.random().toString(8), c$1 = "__d" + f$2, a$1 = "__a" + f$2, s$1 = /(PointerCapture)$|Capture$/i, h$1 = 0, p$1 = V$1(!1), v$1 = V$1(!0), y$1 = 0;
	}));
	//#endregion
	//#region node_modules/preact/hooks/dist/hooks.module.js
	function s(n, t) {
		c.__h && c.__h(r, n, o || t), o = 0;
		var u = r.__H || (r.__H = {
			__: [],
			__h: []
		});
		return n >= u.__.length && u.__.push({}), u.__[n];
	}
	function d(n) {
		return o = 1, y(D$1, n);
	}
	function y(n, u, i) {
		var o = s(t++, 2);
		if (o.t = n, !o.__c && (o.__ = [i ? i(u) : D$1(void 0, u), function(n) {
			var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
			t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
		}], o.__c = r, !r.__f)) {
			var f = function(n, t, r) {
				if (!o.__c.__H) return !0;
				var u = !1, i = o.__c.props !== n;
				if (o.__c.__H.__.some(function(n) {
					if (n.__N) {
						u = !0;
						var t = n.__[0];
						n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
					}
				}), c) {
					var f = c.call(this, n, t, r);
					return u ? f || i : f;
				}
				return !u || i;
			};
			r.__f = !0;
			var c = r.shouldComponentUpdate, e = r.componentWillUpdate;
			r.componentWillUpdate = function(n, t, r) {
				if (this.__e) {
					var u = c;
					c = void 0, f(n, t, r), c = u;
				}
				e && e.call(this, n, t, r);
			}, r.shouldComponentUpdate = f;
		}
		return o.__N || o.__;
	}
	function h(n, u) {
		var i = s(t++, 3);
		!c.__s && C$1(i.__H, u) && (i.__ = n, i.u = u, r.__H.__h.push(i));
	}
	function _(n, u) {
		var i = s(t++, 4);
		!c.__s && C$1(i.__H, u) && (i.__ = n, i.u = u, r.__h.push(i));
	}
	function A$1(n) {
		return o = 5, T$1(function() {
			return { current: n };
		}, []);
	}
	function F$1(n, t, r) {
		o = 6, _(function() {
			if ("function" == typeof n) {
				var r = n(t());
				return function() {
					n(null), r && "function" == typeof r && r();
				};
			}
			if (n) return n.current = t(), function() {
				return n.current = null;
			};
		}, null == r ? r : r.concat(n));
	}
	function T$1(n, r) {
		var u = s(t++, 7);
		return C$1(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
	}
	function q$1(n, t) {
		return o = 8, T$1(function() {
			return n;
		}, t);
	}
	function x$1(n) {
		var u = r.context[n.__c], i = s(t++, 9);
		return i.c = n, u ? (i.__ ?? (i.__ = !0, u.sub(r)), u.props.value) : n.__;
	}
	function P$1(n, t) {
		c.useDebugValue && c.useDebugValue(t ? t(n) : n);
	}
	function b(n) {
		var u = s(t++, 10), i = d();
		return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function(n, t) {
			u.__ && u.__(n, t), i[1](n);
		}), [i[0], function() {
			i[1](void 0);
		}];
	}
	function g$1() {
		var n = s(t++, 11);
		if (!n.__) {
			for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
			var i = u.__m || (u.__m = [0, 0]);
			n.__ = "P" + i[0] + "-" + i[1]++;
		}
		return n.__;
	}
	function j$1() {
		for (var n; n = f$1.shift();) {
			var t = n.__H;
			if (n.__P && t) try {
				t.__h.some(z$1), t.__h.some(B$1), t.__h = [];
			} catch (r) {
				t.__h = [], c.__e(r, n.__v);
			}
		}
	}
	function w$1(n) {
		var t, r = function() {
			clearTimeout(u), k$1 && cancelAnimationFrame(t), setTimeout(n);
		}, u = setTimeout(r, 35);
		k$1 && (t = requestAnimationFrame(r));
	}
	function z$1(n) {
		var t = r, u = n.__c;
		"function" == typeof u && (n.__c = void 0, u()), r = t;
	}
	function B$1(n) {
		var t = r;
		n.__c = n.__(), r = t;
	}
	function C$1(n, t) {
		return !n || n.length !== t.length || t.some(function(t, r) {
			return t !== n[r];
		});
	}
	function D$1(n, t) {
		return "function" == typeof t ? t(n) : t;
	}
	var t, r, u$1, i$1, o, f$1, c, e, a, v, l, m, p, k$1;
	var init_hooks_module = __esmMin((() => {
		init_preact_module();
		o = 0;
		f$1 = [];
		c = l$1;
		e = c.__b;
		a = c.__r;
		v = c.diffed;
		l = c.__c;
		m = c.unmount;
		p = c.__;
		c.__b = function(n) {
			r = null, e && e(n);
		}, c.__ = function(n, t) {
			n && t.__k && t.__k.__m && (n.__m = t.__k.__m), p && p(n, t);
		}, c.__r = function(n) {
			a && a(n), t = 0;
			var i = (r = n.__c).__H;
			i && (u$1 === r ? (i.__h = [], r.__h = [], i.__.some(function(n) {
				n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
			})) : (i.__h.some(z$1), i.__h.some(B$1), i.__h = [], t = 0)), u$1 = r;
		}, c.diffed = function(n) {
			v && v(n);
			var t = n.__c;
			t && t.__H && (t.__H.__h.length && (1 !== f$1.push(t) && i$1 === c.requestAnimationFrame || ((i$1 = c.requestAnimationFrame) || w$1)(j$1)), t.__H.__.some(function(n) {
				n.u && (n.__H = n.u, n.u = void 0);
			})), u$1 = r = null;
		}, c.__c = function(n, t) {
			t.some(function(n) {
				try {
					n.__h.some(z$1), n.__h = n.__h.filter(function(n) {
						return !n.__ || B$1(n);
					});
				} catch (r) {
					t.some(function(n) {
						n.__h && (n.__h = []);
					}), t = [], c.__e(r, n.__v);
				}
			}), l && l(n, t);
		}, c.unmount = function(n) {
			m && m(n);
			var t, r = n.__c;
			r && r.__H && (r.__H.__.some(function(n) {
				try {
					z$1(n);
				} catch (n) {
					t = n;
				}
			}), r.__H = void 0, t && c.__e(t, r.__v));
		};
		k$1 = "function" == typeof requestAnimationFrame;
	}));
	//#endregion
	//#region node_modules/preact/compat/dist/compat.module.js
	var compat_module_exports = /* @__PURE__ */ __exportAll({
		Children: () => L,
		Component: () => C$2,
		Fragment: () => S,
		PureComponent: () => M,
		StrictMode: () => S,
		Suspense: () => P,
		SuspenseList: () => B,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => an,
		cloneElement: () => mn,
		createContext: () => X$1,
		createElement: () => k$2,
		createFactory: () => sn,
		createPortal: () => $,
		createRef: () => M$1,
		default: () => gn,
		findDOMNode: () => yn,
		flushSync: () => bn,
		forwardRef: () => D,
		hydrate: () => tn,
		isElement: () => Sn,
		isFragment: () => vn,
		isMemo: () => dn,
		isValidElement: () => hn,
		lazy: () => z,
		memo: () => N,
		render: () => nn,
		startTransition: () => x,
		unmountComponentAtNode: () => pn,
		unstable_batchedUpdates: () => _n,
		useCallback: () => q$1,
		useContext: () => x$1,
		useDebugValue: () => P$1,
		useDeferredValue: () => w,
		useEffect: () => h,
		useErrorBoundary: () => b,
		useId: () => g$1,
		useImperativeHandle: () => F$1,
		useInsertionEffect: () => I,
		useLayoutEffect: () => _,
		useMemo: () => T$1,
		useReducer: () => y,
		useRef: () => A$1,
		useState: () => d,
		useSyncExternalStore: () => C,
		useTransition: () => k,
		version: () => cn
	});
	function g(n, t) {
		for (var e in t) n[e] = t[e];
		return n;
	}
	function E(n, t) {
		for (var e in n) if ("__source" !== e && !(e in t)) return !0;
		for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
		return !1;
	}
	function C(n, t) {
		var e = t(), r = d({ t: {
			__: e,
			u: t
		} }), u = r[0].t, o = r[1];
		return _(function() {
			u.__ = e, u.u = t, R(u) && o({ t: u });
		}, [
			n,
			e,
			t
		]), h(function() {
			return R(u) && o({ t: u }), n(function() {
				R(u) && o({ t: u });
			});
		}, [n]), e;
	}
	function R(n) {
		try {
			return !((t = n.__) === (e = n.u()) && (0 !== t || 1 / t == 1 / e) || t != t && e != e);
		} catch (n) {
			return !0;
		}
		var t, e;
	}
	function x(n) {
		n();
	}
	function w(n) {
		return n;
	}
	function k() {
		return [!1, x];
	}
	function M(n, t) {
		this.props = n, this.context = t;
	}
	function N(n, e) {
		function r(n) {
			var t = this.props.ref;
			return t != n.ref && t && ("function" == typeof t ? t(null) : t.current = null), e ? !e(this.props, n) || t != n.ref : E(this.props, n);
		}
		function u(e) {
			return this.shouldComponentUpdate = r, k$2(n, e);
		}
		return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.__f = u.prototype.isReactComponent = !0, u.type = n, u;
	}
	function D(n) {
		function t(t) {
			var e = g({}, t);
			return delete e.ref, n(e, t.ref || null);
		}
		return t.$$typeof = A, t.render = n, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
	}
	function V(n, t, e) {
		return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(n) {
			"function" == typeof n.__c && n.__c();
		}), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c.__e = !0, n.__c = null), n.__k = n.__k && n.__k.map(function(n) {
			return V(n, t, e);
		})), n;
	}
	function W(n, t, e) {
		return n && e && (n.__v = null, n.__k = n.__k && n.__k.map(function(n) {
			return W(n, t, e);
		}), n.__c && n.__c.__P === t && (n.__e && e.appendChild(n.__e), n.__c.__e = !0, n.__c.__P = e)), n;
	}
	function P() {
		this.__u = 0, this.o = null, this.__b = null;
	}
	function j(n) {
		var t = n.__ && n.__.__c;
		return t && t.__a && t.__a(n);
	}
	function z(n) {
		var e, r, u, o = null;
		function i(i) {
			if (e || (e = n()).then(function(n) {
				n && (o = n.default || n), u = !0;
			}, function(n) {
				r = n, u = !0;
			}), r) throw r;
			if (!u) throw e;
			return o ? k$2(o, i) : null;
		}
		return i.displayName = "Lazy", i.__f = !0, i;
	}
	function B() {
		this.i = null, this.l = null;
	}
	function Z(n) {
		return this.getChildContext = function() {
			return n.context;
		}, n.children;
	}
	function Y(n) {
		var e = this, r = n.h;
		if (e.componentWillUnmount = function() {
			R$1(null, e.v), e.v = null, e.h = null;
		}, e.h && e.h !== r && e.componentWillUnmount(), !e.v) {
			for (var u = e.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
			e.h = r, e.v = {
				nodeType: 1,
				parentNode: r,
				childNodes: [],
				__k: { __m: u.__m },
				contains: function() {
					return !0;
				},
				namespaceURI: r.namespaceURI,
				insertBefore: function(n, t) {
					this.childNodes.push(n), e.h.insertBefore(n, t);
				},
				removeChild: function(n) {
					this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.h.removeChild(n);
				}
			};
		}
		R$1(k$2(Z, { context: e.context }, n.__v), e.v);
	}
	function $(n, e) {
		var r = k$2(Y, {
			__v: n,
			h: e
		});
		return r.containerInfo = e, r;
	}
	function nn(n, t, e) {
		return t.__k ?? (t.textContent = ""), R$1(n, t), "function" == typeof e && e(), n ? n.__c : null;
	}
	function tn(n, t, e) {
		return U$1(n, t), "function" == typeof e && e(), n ? n.__c : null;
	}
	function sn(n) {
		return k$2.bind(null, n);
	}
	function hn(n) {
		return !!n && n.$$typeof === q;
	}
	function vn(n) {
		return hn(n) && n.type === S;
	}
	function dn(n) {
		return !!n && "string" == typeof n.displayName && 0 == n.displayName.indexOf("Memo(");
	}
	function mn(n) {
		return hn(n) ? W$1.apply(null, arguments) : n;
	}
	function pn(n) {
		return !!n.__k && (R$1(null, n), !0);
	}
	function yn(n) {
		return n && (n.base || 1 === n.nodeType && n) || null;
	}
	var I, T, A, F, L, O, U, H, q, G, J, K, Q, X, en, rn, un, on, ln, fn, an, cn, _n, bn, Sn, gn;
	var init_compat_module = __esmMin((() => {
		init_preact_module();
		init_hooks_module();
		init_hooks_module();
		I = _;
		(M.prototype = new C$2()).isPureReactComponent = !0, M.prototype.shouldComponentUpdate = function(n, t) {
			return E(this.props, n) || E(this.state, t);
		};
		T = l$1.__b;
		l$1.__b = function(n) {
			n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), T && T(n);
		};
		A = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
		F = function(n, t) {
			return null == n ? null : F$2(F$2(n).map(t));
		};
		L = {
			map: F,
			forEach: F,
			count: function(n) {
				return n ? F$2(n).length : 0;
			},
			only: function(n) {
				var t = F$2(n);
				if (1 !== t.length) throw "Children.only";
				return t[0];
			},
			toArray: F$2
		};
		O = l$1.__e;
		l$1.__e = function(n, t, e, r) {
			if (n.then) {
				for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return t.__e ?? (t.__e = e.__e, t.__k = e.__k || []), u.__c(n, t);
			}
			O(n, t, e, r);
		};
		U = l$1.unmount;
		l$1.unmount = function(n) {
			var t = n.__c;
			t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), U && U(n);
		}, (P.prototype = new C$2()).__c = function(n, t) {
			var e = t.__c, r = this;
			r.o ??= [], r.o.push(e);
			var u = j(r.__v), o = !1, i = function() {
				o || r.__z || (o = !0, e.__R = null, u ? u(f) : f());
			};
			e.__R = i;
			var l = e.__P;
			e.__P = null;
			var f = function() {
				if (!--r.__u) {
					if (r.state.__a) {
						var n = r.state.__a;
						r.__v.__k[0] = W(n, n.__c.__P, n.__c.__O);
					}
					var t;
					for (r.setState({ __a: r.__b = null }); t = r.o.pop();) t.__P = l, t.forceUpdate();
				}
			};
			r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), n.then(i, i);
		}, P.prototype.componentWillUnmount = function() {
			this.o = [];
		}, P.prototype.render = function(n, e) {
			if (this.__b) {
				if (this.__v.__k) {
					var r = document.createElement("div"), o = this.__v.__k[0].__c;
					this.__v.__k[0] = V(this.__b, r, o.__O = o.__P);
				}
				this.__b = null;
			}
			var i = e.__a && k$2(S, null, n.fallback);
			return i && (i.__u &= -33), [k$2(S, null, e.__a ? null : n.children), i];
		};
		H = function(n, t, e) {
			if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e = n.i; e;) {
				for (; e.length > 3;) e.pop()();
				if (e[1] < e[0]) break;
				n.i = e = e[2];
			}
		};
		(B.prototype = new C$2()).__a = function(n) {
			var t = this, e = j(t.__v), r = t.l.get(n);
			return r[0]++, function(u) {
				var o = function() {
					t.props.revealOrder ? (r.push(u), H(t, n, r)) : u();
				};
				e ? e(o) : o();
			};
		}, B.prototype.render = function(n) {
			this.i = null, this.l = /* @__PURE__ */ new Map();
			var t = F$2(n.children);
			n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
			for (var e = t.length; e--;) this.l.set(t[e], this.i = [
				1,
				0,
				this.i
			]);
			return n.children;
		}, B.prototype.componentDidUpdate = B.prototype.componentDidMount = function() {
			var n = this;
			this.l.forEach(function(t, e) {
				H(n, e, t);
			});
		};
		q = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
		G = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
		J = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
		K = /[A-Z0-9]/g;
		Q = "undefined" != typeof document;
		X = function(n) {
			return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
		};
		C$2.prototype.isReactComponent = !0, [
			"componentWillMount",
			"componentWillReceiveProps",
			"componentWillUpdate"
		].forEach(function(t) {
			Object.defineProperty(C$2.prototype, t, {
				configurable: !0,
				get: function() {
					return this["UNSAFE_" + t];
				},
				set: function(n) {
					Object.defineProperty(this, t, {
						configurable: !0,
						writable: !0,
						value: n
					});
				}
			});
		});
		en = l$1.event;
		l$1.event = function(n) {
			return en && (n = en(n)), n.persist = function() {}, n.isPropagationStopped = function() {
				return this.cancelBubble;
			}, n.isDefaultPrevented = function() {
				return this.defaultPrevented;
			}, n.nativeEvent = n;
		};
		un = {
			configurable: !0,
			get: function() {
				return this.class;
			}
		};
		on = l$1.vnode;
		l$1.vnode = function(n) {
			"string" == typeof n.type && function(n) {
				var t = n.props, e = n.type, u = {}, o = -1 == e.indexOf("-");
				for (var i in t) {
					var l = t[i];
					if (!("value" === i && "defaultValue" in t && null == l || Q && "children" === i && "noscript" === e || "class" === i || "className" === i)) {
						var f = i.toLowerCase();
						"defaultValue" === i && "value" in t && null == t.value ? i = "value" : "download" === i && !0 === l ? l = "" : "translate" === f && "no" === l ? l = !1 : "o" === f[0] && "n" === f[1] ? "ondoubleclick" === f ? i = "ondblclick" : "onchange" !== f || "input" !== e && "textarea" !== e || X(t.type) ? "onfocus" === f ? i = "onfocusin" : "onblur" === f ? i = "onfocusout" : J.test(i) && (i = f) : f = i = "oninput" : o && G.test(i) ? i = i.replace(K, "-$&").toLowerCase() : null === l && (l = void 0), "oninput" === f && u[i = f] && (i = "oninputCapture"), u[i] = l;
					}
				}
				"select" == e && (u.multiple && Array.isArray(u.value) && (u.value = F$2(t.children).forEach(function(n) {
					n.props.selected = -1 != u.value.indexOf(n.props.value);
				})), null != u.defaultValue && (u.value = F$2(t.children).forEach(function(n) {
					n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
				}))), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", un)) : t.className && (u.class = u.className = t.className), n.props = u;
			}(n), n.$$typeof = q, on && on(n);
		};
		ln = l$1.__r;
		l$1.__r = function(n) {
			ln && ln(n), rn = n.__c;
		};
		fn = l$1.diffed;
		l$1.diffed = function(n) {
			fn && fn(n);
			var t = n.props, e = n.__e;
			null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value), rn = null;
		};
		an = { ReactCurrentDispatcher: { current: {
			readContext: function(n) {
				return rn.__n[n.__c].props.value;
			},
			useCallback: q$1,
			useContext: x$1,
			useDebugValue: P$1,
			useDeferredValue: w,
			useEffect: h,
			useId: g$1,
			useImperativeHandle: F$1,
			useInsertionEffect: I,
			useLayoutEffect: _,
			useMemo: T$1,
			useReducer: y,
			useRef: A$1,
			useState: d,
			useSyncExternalStore: C,
			useTransition: k
		} } };
		cn = "18.3.1";
		_n = function(n, t) {
			return n(t);
		};
		bn = function(n, t) {
			var r, u = l$1.debounceRendering;
			l$1.debounceRendering = function(n) {
				r = n;
			};
			try {
				var o = n(t);
				return r && r(), o;
			} finally {
				l$1.debounceRendering = u;
			}
		};
		Sn = hn;
		gn = {
			useState: d,
			useId: g$1,
			useReducer: y,
			useEffect: h,
			useLayoutEffect: _,
			useInsertionEffect: I,
			useTransition: k,
			useDeferredValue: w,
			useSyncExternalStore: C,
			startTransition: x,
			useRef: A$1,
			useImperativeHandle: F$1,
			useMemo: T$1,
			useCallback: q$1,
			useContext: x$1,
			useDebugValue: P$1,
			version: "18.3.1",
			Children: L,
			render: nn,
			hydrate: tn,
			unmountComponentAtNode: pn,
			createPortal: $,
			createElement: k$2,
			createContext: X$1,
			createFactory: sn,
			cloneElement: mn,
			createRef: M$1,
			Fragment: S,
			isValidElement: hn,
			isElement: Sn,
			isFragment: vn,
			isMemo: dn,
			findDOMNode: yn,
			Component: C$2,
			PureComponent: M,
			memo: N,
			forwardRef: D,
			flushSync: bn,
			unstable_batchedUpdates: _n,
			StrictMode: S,
			Suspense: P,
			SuspenseList: B,
			lazy: z,
			__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: an
		};
	}));
	//#endregion
	//#region node_modules/preact/compat/client.mjs
	init_compat_module();
	function createRoot(container) {
		return {
			render: function(children) {
				nn(children, container);
			},
			unmount: function() {
				pn(container);
			}
		};
	}
	/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
	*/
	//#endregion
	//#region node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
	var import_classnames = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		(function() {
			"use strict";
			var hasOwn = {}.hasOwnProperty;
			function classNames() {
				var classes = [];
				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (!arg) continue;
					var argType = typeof arg;
					if (argType === "string" || argType === "number") classes.push(arg);
					else if (Array.isArray(arg)) {
						if (arg.length) {
							var inner = classNames.apply(null, arg);
							if (inner) classes.push(inner);
						}
					} else if (argType === "object") {
						if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
							classes.push(arg.toString());
							continue;
						}
						for (var key in arg) if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
					}
				}
				return classes.join(" ");
			}
			if (typeof module !== "undefined" && module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else if (typeof define === "function" && typeof define.amd === "object" && define.amd) define("classnames", [], function() {
				return classNames;
			});
			else window.classNames = classNames;
		})();
	})))());
	init_preact_module();
	var f = 0;
	Array.isArray;
	function u(e, t, n, o, i, u) {
		t || (t = {});
		var a, c, p = t;
		if ("ref" in p) for (c in p = {}, t) "ref" == c ? a = t[c] : p[c] = t[c];
		var l = {
			type: e,
			props: p,
			key: n,
			ref: a,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: --f,
			__i: -1,
			__u: 0,
			__source: i,
			__self: u
		};
		if ("function" == typeof e && (a = e.defaultProps)) for (c in a) void 0 === p[c] && (p[c] = a[c]);
		return l$1.vnode && l$1.vnode(l), l;
	}
	//#endregion
	//#region node_modules/preact/compat/jsx-runtime.mjs
	init_compat_module();
	//#endregion
	//#region node_modules/react-bootstrap/esm/ThemeProvider.js
	init_compat_module();
	const ThemeContext = /*#__PURE__*/ X$1({
		prefixes: {},
		breakpoints: [
			"xxl",
			"xl",
			"lg",
			"md",
			"sm",
			"xs"
		],
		minBreakpoint: "xs"
	});
	const { Consumer, Provider } = ThemeContext;
	function useBootstrapPrefix(prefix, defaultPrefix) {
		const { prefixes } = x$1(ThemeContext);
		return prefix || prefixes[defaultPrefix] || defaultPrefix;
	}
	function useBootstrapBreakpoints() {
		const { breakpoints } = x$1(ThemeContext);
		return breakpoints;
	}
	function useBootstrapMinBreakpoint() {
		const { minBreakpoint } = x$1(ThemeContext);
		return minBreakpoint;
	}
	//#endregion
	//#region node_modules/react-bootstrap/esm/ElementChildren.js
	init_compat_module();
	/**
	* Iterates through children that are typically specified as `props.children`,
	* but only maps over children that are "valid elements".
	*
	* The mapFunction provided index will be normalised to the components mapped,
	* so an invalid component would not increase the index.
	*
	*/
	function map(children, func) {
		let index = 0;
		return L.map(children, (child) => /*#__PURE__*/ hn(child) ? func(child, index++) : child);
	}
	/**
	* Finds whether a component's `children` prop includes a React element of the
	* specified type.
	*/
	function hasChildOfType(children, type) {
		return L.toArray(children).some((child) => /*#__PURE__*/ hn(child) && child.type === type);
	}
	//#endregion
	//#region node_modules/react-bootstrap/esm/ProgressBar.js
	init_compat_module();
	const ROUND_PRECISION = 1e3;
	function getPercentage(now, min, max) {
		const percentage = (now - min) / (max - min) * 100;
		return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
	}
	function renderProgressBar({ min, now, max, label, visuallyHidden, striped, animated, className, style, variant, bsPrefix, ...props }, ref) {
		return /*#__PURE__*/ u("div", {
			ref,
			...props,
			role: "progressbar",
			className: (0, import_classnames.default)(className, `${bsPrefix}-bar`, {
				[`bg-${variant}`]: variant,
				[`${bsPrefix}-bar-animated`]: animated,
				[`${bsPrefix}-bar-striped`]: animated || striped
			}),
			style: {
				width: `${getPercentage(now, min, max)}%`,
				...style
			},
			"aria-valuenow": now,
			"aria-valuemin": min,
			"aria-valuemax": max,
			children: visuallyHidden ? /*#__PURE__*/ u("span", {
				className: "visually-hidden",
				children: label
			}) : label
		});
	}
	const ProgressBar = /*#__PURE__*/ D(({ isChild = false, ...rest }, ref) => {
		const props = {
			min: 0,
			max: 100,
			animated: false,
			visuallyHidden: false,
			striped: false,
			...rest
		};
		props.bsPrefix = useBootstrapPrefix(props.bsPrefix, "progress");
		if (isChild) return renderProgressBar(props, ref);
		const { min, now, max, label, visuallyHidden, striped, animated, bsPrefix, variant, className, children, ...wrapperProps } = props;
		return /*#__PURE__*/ u("div", {
			ref,
			...wrapperProps,
			className: (0, import_classnames.default)(className, bsPrefix),
			children: children ? map(children, (child) => /*#__PURE__*/ mn(child, { isChild: true })) : renderProgressBar({
				min,
				now,
				max,
				label,
				visuallyHidden,
				striped,
				animated,
				bsPrefix,
				variant
			}, ref)
		});
	});
	ProgressBar.displayName = "ProgressBar";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormContext.js
	init_compat_module();
	const FormContext = /*#__PURE__*/ X$1({});
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormGroup.js
	init_compat_module();
	const FormGroup = /*#__PURE__*/ D(({ controlId, as: Component = "div", ...props }, ref) => {
		const context = T$1(() => ({ controlId }), [controlId]);
		return /*#__PURE__*/ u(FormContext.Provider, {
			value: context,
			children: /*#__PURE__*/ u(Component, {
				...props,
				ref
			})
		});
	});
	FormGroup.displayName = "FormGroup";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FloatingLabel.js
	init_compat_module();
	const FloatingLabel = /*#__PURE__*/ D(({ bsPrefix, className, children, controlId, label, ...props }, ref) => {
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
		return /*#__PURE__*/ u(FormGroup, {
			ref,
			className: (0, import_classnames.default)(className, bsPrefix),
			controlId,
			...props,
			children: [children, /*#__PURE__*/ u("label", {
				htmlFor: controlId,
				children: label
			})]
		});
	});
	FloatingLabel.displayName = "FloatingLabel";
	//#endregion
	//#region node_modules/react-is/cjs/react-is.development.js
	/** @license React v16.13.1
	* react-is.development.js
	*
	* Copyright (c) Facebook, Inc. and its affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_react_is_development = /* @__PURE__ */ __commonJSMin(((exports) => {
		(function() {
			"use strict";
			var hasSymbol = typeof Symbol === "function" && Symbol.for;
			var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
			var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
			var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
			var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
			var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
			var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
			var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
			var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
			var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
			var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
			var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
			var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
			var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
			var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
			var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
			var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
			var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
			var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
			function isValidElementType(type) {
				return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
			}
			function typeOf(object) {
				if (typeof object === "object" && object !== null) {
					var $$typeof = object.$$typeof;
					switch ($$typeof) {
						case REACT_ELEMENT_TYPE:
							var type = object.type;
							switch (type) {
								case REACT_ASYNC_MODE_TYPE:
								case REACT_CONCURRENT_MODE_TYPE:
								case REACT_FRAGMENT_TYPE:
								case REACT_PROFILER_TYPE:
								case REACT_STRICT_MODE_TYPE:
								case REACT_SUSPENSE_TYPE: return type;
								default:
									var $$typeofType = type && type.$$typeof;
									switch ($$typeofType) {
										case REACT_CONTEXT_TYPE:
										case REACT_FORWARD_REF_TYPE:
										case REACT_LAZY_TYPE:
										case REACT_MEMO_TYPE:
										case REACT_PROVIDER_TYPE: return $$typeofType;
										default: return $$typeof;
									}
							}
						case REACT_PORTAL_TYPE: return $$typeof;
					}
				}
			}
			var AsyncMode = REACT_ASYNC_MODE_TYPE;
			var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
			var ContextConsumer = REACT_CONTEXT_TYPE;
			var ContextProvider = REACT_PROVIDER_TYPE;
			var Element = REACT_ELEMENT_TYPE;
			var ForwardRef = REACT_FORWARD_REF_TYPE;
			var Fragment = REACT_FRAGMENT_TYPE;
			var Lazy = REACT_LAZY_TYPE;
			var Memo = REACT_MEMO_TYPE;
			var Portal = REACT_PORTAL_TYPE;
			var Profiler = REACT_PROFILER_TYPE;
			var StrictMode = REACT_STRICT_MODE_TYPE;
			var Suspense = REACT_SUSPENSE_TYPE;
			var hasWarnedAboutDeprecatedIsAsyncMode = false;
			function isAsyncMode(object) {
				if (!hasWarnedAboutDeprecatedIsAsyncMode) {
					hasWarnedAboutDeprecatedIsAsyncMode = true;
					console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
				}
				return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
			}
			function isConcurrentMode(object) {
				return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
			}
			function isContextConsumer(object) {
				return typeOf(object) === REACT_CONTEXT_TYPE;
			}
			function isContextProvider(object) {
				return typeOf(object) === REACT_PROVIDER_TYPE;
			}
			function isElement(object) {
				return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
			}
			function isForwardRef(object) {
				return typeOf(object) === REACT_FORWARD_REF_TYPE;
			}
			function isFragment(object) {
				return typeOf(object) === REACT_FRAGMENT_TYPE;
			}
			function isLazy(object) {
				return typeOf(object) === REACT_LAZY_TYPE;
			}
			function isMemo(object) {
				return typeOf(object) === REACT_MEMO_TYPE;
			}
			function isPortal(object) {
				return typeOf(object) === REACT_PORTAL_TYPE;
			}
			function isProfiler(object) {
				return typeOf(object) === REACT_PROFILER_TYPE;
			}
			function isStrictMode(object) {
				return typeOf(object) === REACT_STRICT_MODE_TYPE;
			}
			function isSuspense(object) {
				return typeOf(object) === REACT_SUSPENSE_TYPE;
			}
			exports.AsyncMode = AsyncMode;
			exports.ConcurrentMode = ConcurrentMode;
			exports.ContextConsumer = ContextConsumer;
			exports.ContextProvider = ContextProvider;
			exports.Element = Element;
			exports.ForwardRef = ForwardRef;
			exports.Fragment = Fragment;
			exports.Lazy = Lazy;
			exports.Memo = Memo;
			exports.Portal = Portal;
			exports.Profiler = Profiler;
			exports.StrictMode = StrictMode;
			exports.Suspense = Suspense;
			exports.isAsyncMode = isAsyncMode;
			exports.isConcurrentMode = isConcurrentMode;
			exports.isContextConsumer = isContextConsumer;
			exports.isContextProvider = isContextProvider;
			exports.isElement = isElement;
			exports.isForwardRef = isForwardRef;
			exports.isFragment = isFragment;
			exports.isLazy = isLazy;
			exports.isMemo = isMemo;
			exports.isPortal = isPortal;
			exports.isProfiler = isProfiler;
			exports.isStrictMode = isStrictMode;
			exports.isSuspense = isSuspense;
			exports.isValidElementType = isValidElementType;
			exports.typeOf = typeOf;
		})();
	}));
	//#endregion
	//#region node_modules/react-is/index.js
	var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_react_is_development();
	}));
	//#endregion
	//#region node_modules/object-assign/index.js
	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	var require_object_assign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var propIsEnumerable = Object.prototype.propertyIsEnumerable;
		function toObject(val) {
			if (val === null || val === void 0) throw new TypeError("Object.assign cannot be called with null or undefined");
			return Object(val);
		}
		function shouldUseNative() {
			try {
				if (!Object.assign) return false;
				var test1 = /* @__PURE__ */ new String("abc");
				test1[5] = "de";
				if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
				var test2 = {};
				for (var i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
				if (Object.getOwnPropertyNames(test2).map(function(n) {
					return test2[n];
				}).join("") !== "0123456789") return false;
				var test3 = {};
				"abcdefghijklmnopqrst".split("").forEach(function(letter) {
					test3[letter] = letter;
				});
				if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
				return true;
			} catch (err) {
				return false;
			}
		}
		module.exports = shouldUseNative() ? Object.assign : function(target, source) {
			var from;
			var to = toObject(target);
			var symbols;
			for (var s = 1; s < arguments.length; s++) {
				from = Object(arguments[s]);
				for (var key in from) if (hasOwnProperty.call(from, key)) to[key] = from[key];
				if (getOwnPropertySymbols) {
					symbols = getOwnPropertySymbols(from);
					for (var i = 0; i < symbols.length; i++) if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
				}
			}
			return to;
		};
	}));
	//#endregion
	//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	}));
	//#endregion
	//#region node_modules/prop-types/lib/has.js
	var require_has = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
	}));
	//#endregion
	//#region node_modules/prop-types/checkPropTypes.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_checkPropTypes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var printWarning = function() {};
		var ReactPropTypesSecret = require_ReactPropTypesSecret();
		var loggedTypeFailures = {};
		var has = require_has();
		printWarning = function(text) {
			var message = "Warning: " + text;
			if (typeof console !== "undefined") console.error(message);
			try {
				throw new Error(message);
			} catch (x) {}
		};
		/**
		* Assert that the values match with the type specs.
		* Error messages are memorized and will only be shown once.
		*
		* @param {object} typeSpecs Map of name to a ReactPropType
		* @param {object} values Runtime values that need to be type-checked
		* @param {string} location e.g. "prop", "context", "child context"
		* @param {string} componentName Name of the component for error messages.
		* @param {?Function} getStack Returns the component stack.
		* @private
		*/
		function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
			for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
				var error;
				try {
					if (typeof typeSpecs[typeSpecName] !== "function") {
						var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						err.name = "Invariant Violation";
						throw err;
					}
					error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
				} catch (ex) {
					error = ex;
				}
				if (error && !(error instanceof Error)) printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
				if (error instanceof Error && !(error.message in loggedTypeFailures)) {
					loggedTypeFailures[error.message] = true;
					var stack = getStack ? getStack() : "";
					printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
				}
			}
		}
		/**
		* Resets warning cache when testing.
		*
		* @private
		*/
		checkPropTypes.resetWarningCache = function() {
			loggedTypeFailures = {};
		};
		module.exports = checkPropTypes;
	}));
	//#endregion
	//#region node_modules/prop-types/factoryWithTypeCheckers.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_factoryWithTypeCheckers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ReactIs = require_react_is();
		var assign = require_object_assign();
		var ReactPropTypesSecret = require_ReactPropTypesSecret();
		var has = require_has();
		var checkPropTypes = require_checkPropTypes();
		var printWarning = function() {};
		printWarning = function(text) {
			var message = "Warning: " + text;
			if (typeof console !== "undefined") console.error(message);
			try {
				throw new Error(message);
			} catch (x) {}
		};
		function emptyFunctionThatReturnsNull() {
			return null;
		}
		module.exports = function(isValidElement, throwOnDirectAccess) {
			var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
			var FAUX_ITERATOR_SYMBOL = "@@iterator";
			/**
			* Returns the iterator method function contained on the iterable object.
			*
			* Be sure to invoke the function with the iterable as context:
			*
			*     var iteratorFn = getIteratorFn(myIterable);
			*     if (iteratorFn) {
			*       var iterator = iteratorFn.call(myIterable);
			*       ...
			*     }
			*
			* @param {?object} maybeIterable
			* @return {?function}
			*/
			function getIteratorFn(maybeIterable) {
				var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
				if (typeof iteratorFn === "function") return iteratorFn;
			}
			/**
			* Collection of methods that allow declaration and validation of props that are
			* supplied to React components. Example usage:
			*
			*   var Props = require('ReactPropTypes');
			*   var MyArticle = React.createClass({
			*     propTypes: {
			*       // An optional string prop named "description".
			*       description: Props.string,
			*
			*       // A required enum prop named "category".
			*       category: Props.oneOf(['News','Photos']).isRequired,
			*
			*       // A prop named "dialog" that requires an instance of Dialog.
			*       dialog: Props.instanceOf(Dialog).isRequired
			*     },
			*     render: function() { ... }
			*   });
			*
			* A more formal specification of how these methods are used:
			*
			*   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
			*   decl := ReactPropTypes.{type}(.isRequired)?
			*
			* Each and every declaration produces a function with the same signature. This
			* allows the creation of custom validation functions. For example:
			*
			*  var MyLink = React.createClass({
			*    propTypes: {
			*      // An optional string or URI prop named "href".
			*      href: function(props, propName, componentName) {
			*        var propValue = props[propName];
			*        if (propValue != null && typeof propValue !== 'string' &&
			*            !(propValue instanceof URI)) {
			*          return new Error(
			*            'Expected a string or an URI for ' + propName + ' in ' +
			*            componentName
			*          );
			*        }
			*      }
			*    },
			*    render: function() {...}
			*  });
			*
			* @internal
			*/
			var ANONYMOUS = "<<anonymous>>";
			var ReactPropTypes = {
				array: createPrimitiveTypeChecker("array"),
				bigint: createPrimitiveTypeChecker("bigint"),
				bool: createPrimitiveTypeChecker("boolean"),
				func: createPrimitiveTypeChecker("function"),
				number: createPrimitiveTypeChecker("number"),
				object: createPrimitiveTypeChecker("object"),
				string: createPrimitiveTypeChecker("string"),
				symbol: createPrimitiveTypeChecker("symbol"),
				any: createAnyTypeChecker(),
				arrayOf: createArrayOfTypeChecker,
				element: createElementTypeChecker(),
				elementType: createElementTypeTypeChecker(),
				instanceOf: createInstanceTypeChecker,
				node: createNodeChecker(),
				objectOf: createObjectOfTypeChecker,
				oneOf: createEnumTypeChecker,
				oneOfType: createUnionTypeChecker,
				shape: createShapeTypeChecker,
				exact: createStrictShapeTypeChecker
			};
			/**
			* inlined Object.is polyfill to avoid requiring consumers ship their own
			* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
			*/
			function is(x, y) {
				if (x === y) return x !== 0 || 1 / x === 1 / y;
				else return x !== x && y !== y;
			}
			/**
			* We use an Error-like object for backward compatibility as people may call
			* PropTypes directly and inspect their output. However, we don't use real
			* Errors anymore. We don't inspect their stack anyway, and creating them
			* is prohibitively expensive if they are created too often, such as what
			* happens in oneOfType() for any type before the one that matched.
			*/
			function PropTypeError(message, data) {
				this.message = message;
				this.data = data && typeof data === "object" ? data : {};
				this.stack = "";
			}
			PropTypeError.prototype = Error.prototype;
			function createChainableTypeChecker(validate) {
				var manualPropTypeCallCache = {};
				var manualPropTypeWarningCount = 0;
				function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
					componentName = componentName || ANONYMOUS;
					propFullName = propFullName || propName;
					if (secret !== ReactPropTypesSecret) {
						if (throwOnDirectAccess) {
							var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
							err.name = "Invariant Violation";
							throw err;
						} else if (typeof console !== "undefined") {
							var cacheKey = componentName + ":" + propName;
							if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
								printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
								manualPropTypeCallCache[cacheKey] = true;
								manualPropTypeWarningCount++;
							}
						}
					}
					if (props[propName] == null) {
						if (isRequired) {
							if (props[propName] === null) return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
							return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
						}
						return null;
					} else return validate(props, propName, componentName, location, propFullName);
				}
				var chainedCheckType = checkType.bind(null, false);
				chainedCheckType.isRequired = checkType.bind(null, true);
				return chainedCheckType;
			}
			function createPrimitiveTypeChecker(expectedType) {
				function validate(props, propName, componentName, location, propFullName, secret) {
					var propValue = props[propName];
					if (getPropType(propValue) !== expectedType) {
						var preciseType = getPreciseType(propValue);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createAnyTypeChecker() {
				return createChainableTypeChecker(emptyFunctionThatReturnsNull);
			}
			function createArrayOfTypeChecker(typeChecker) {
				function validate(props, propName, componentName, location, propFullName) {
					if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
					var propValue = props[propName];
					if (!Array.isArray(propValue)) {
						var propType = getPropType(propValue);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
					}
					for (var i = 0; i < propValue.length; i++) {
						var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
						if (error instanceof Error) return error;
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createElementTypeChecker() {
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					if (!isValidElement(propValue)) {
						var propType = getPropType(propValue);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createElementTypeTypeChecker() {
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					if (!ReactIs.isValidElementType(propValue)) {
						var propType = getPropType(propValue);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createInstanceTypeChecker(expectedClass) {
				function validate(props, propName, componentName, location, propFullName) {
					if (!(props[propName] instanceof expectedClass)) {
						var expectedClassName = expectedClass.name || ANONYMOUS;
						var actualClassName = getClassName(props[propName]);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createEnumTypeChecker(expectedValues) {
				if (!Array.isArray(expectedValues)) {
					if (arguments.length > 1) printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
					else printWarning("Invalid argument supplied to oneOf, expected an array.");
					return emptyFunctionThatReturnsNull;
				}
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					for (var i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
					var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
						if (getPreciseType(value) === "symbol") return String(value);
						return value;
					});
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
				}
				return createChainableTypeChecker(validate);
			}
			function createObjectOfTypeChecker(typeChecker) {
				function validate(props, propName, componentName, location, propFullName) {
					if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
					var propValue = props[propName];
					var propType = getPropType(propValue);
					if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
					for (var key in propValue) if (has(propValue, key)) {
						var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
						if (error instanceof Error) return error;
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createUnionTypeChecker(arrayOfTypeCheckers) {
				if (!Array.isArray(arrayOfTypeCheckers)) {
					printWarning("Invalid argument supplied to oneOfType, expected an instance of array.");
					return emptyFunctionThatReturnsNull;
				}
				for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
					var checker = arrayOfTypeCheckers[i];
					if (typeof checker !== "function") {
						printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
						return emptyFunctionThatReturnsNull;
					}
				}
				function validate(props, propName, componentName, location, propFullName) {
					var expectedTypes = [];
					for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
						var checker = arrayOfTypeCheckers[i];
						var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
						if (checkerResult == null) return null;
						if (checkerResult.data && has(checkerResult.data, "expectedType")) expectedTypes.push(checkerResult.data.expectedType);
					}
					var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
				}
				return createChainableTypeChecker(validate);
			}
			function createNodeChecker() {
				function validate(props, propName, componentName, location, propFullName) {
					if (!isNode(props[propName])) return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function invalidValidatorError(componentName, location, propFullName, key, type) {
				return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
			}
			function createShapeTypeChecker(shapeTypes) {
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					var propType = getPropType(propValue);
					if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
					for (var key in shapeTypes) {
						var checker = shapeTypes[key];
						if (typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
						var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
						if (error) return error;
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createStrictShapeTypeChecker(shapeTypes) {
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					var propType = getPropType(propValue);
					if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
					for (var key in assign({}, props[propName], shapeTypes)) {
						var checker = shapeTypes[key];
						if (has(shapeTypes, key) && typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
						if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
						var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
						if (error) return error;
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function isNode(propValue) {
				switch (typeof propValue) {
					case "number":
					case "string":
					case "undefined": return true;
					case "boolean": return !propValue;
					case "object":
						if (Array.isArray(propValue)) return propValue.every(isNode);
						if (propValue === null || isValidElement(propValue)) return true;
						var iteratorFn = getIteratorFn(propValue);
						if (iteratorFn) {
							var iterator = iteratorFn.call(propValue);
							var step;
							if (iteratorFn !== propValue.entries) {
								while (!(step = iterator.next()).done) if (!isNode(step.value)) return false;
							} else while (!(step = iterator.next()).done) {
								var entry = step.value;
								if (entry) {
									if (!isNode(entry[1])) return false;
								}
							}
						} else return false;
						return true;
					default: return false;
				}
			}
			function isSymbol(propType, propValue) {
				if (propType === "symbol") return true;
				if (!propValue) return false;
				if (propValue["@@toStringTag"] === "Symbol") return true;
				if (typeof Symbol === "function" && propValue instanceof Symbol) return true;
				return false;
			}
			function getPropType(propValue) {
				var propType = typeof propValue;
				if (Array.isArray(propValue)) return "array";
				if (propValue instanceof RegExp) return "object";
				if (isSymbol(propType, propValue)) return "symbol";
				return propType;
			}
			function getPreciseType(propValue) {
				if (typeof propValue === "undefined" || propValue === null) return "" + propValue;
				var propType = getPropType(propValue);
				if (propType === "object") {
					if (propValue instanceof Date) return "date";
					else if (propValue instanceof RegExp) return "regexp";
				}
				return propType;
			}
			function getPostfixForTypeWarning(value) {
				var type = getPreciseType(value);
				switch (type) {
					case "array":
					case "object": return "an " + type;
					case "boolean":
					case "date":
					case "regexp": return "a " + type;
					default: return type;
				}
			}
			function getClassName(propValue) {
				if (!propValue.constructor || !propValue.constructor.name) return ANONYMOUS;
				return propValue.constructor.name;
			}
			ReactPropTypes.checkPropTypes = checkPropTypes;
			ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
			ReactPropTypes.PropTypes = ReactPropTypes;
			return ReactPropTypes;
		};
	}));
	//#endregion
	//#region node_modules/prop-types/index.js
	var require_prop_types = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ReactIs = require_react_is();
		module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, true);
	}));
	//#endregion
	//#region node_modules/react-bootstrap/esm/Feedback.js
	init_compat_module();
	var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
	const propTypes$2 = {
		/**
		* Specify whether the feedback is for valid or invalid fields
		*
		* @type {('valid'|'invalid')}
		*/
		type: import_prop_types.default.string,
		/** Display feedback as a tooltip. */
		tooltip: import_prop_types.default.bool,
		as: import_prop_types.default.elementType
	};
	const Feedback = /*#__PURE__*/ D(({ as: Component = "div", className, type = "valid", tooltip = false, ...props }, ref) => /*#__PURE__*/ u(Component, {
		...props,
		ref,
		className: (0, import_classnames.default)(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
	}));
	Feedback.displayName = "Feedback";
	Feedback.propTypes = propTypes$2;
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormCheckInput.js
	init_compat_module();
	const FormCheckInput = /*#__PURE__*/ D(({ id, bsPrefix, className, type = "checkbox", isValid = false, isInvalid = false, as: Component = "input", ...props }, ref) => {
		const { controlId } = x$1(FormContext);
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-input");
		return /*#__PURE__*/ u(Component, {
			...props,
			ref,
			type,
			id: id || controlId,
			className: (0, import_classnames.default)(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
		});
	});
	FormCheckInput.displayName = "FormCheckInput";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormCheckLabel.js
	init_compat_module();
	const FormCheckLabel = /*#__PURE__*/ D(({ bsPrefix, className, htmlFor, ...props }, ref) => {
		const { controlId } = x$1(FormContext);
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-label");
		return /*#__PURE__*/ u("label", {
			...props,
			ref,
			htmlFor: htmlFor || controlId,
			className: (0, import_classnames.default)(className, bsPrefix)
		});
	});
	FormCheckLabel.displayName = "FormCheckLabel";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormCheck.js
	init_compat_module();
	const FormCheck = /*#__PURE__*/ D(({ id, bsPrefix, bsSwitchPrefix, inline = false, reverse = false, disabled = false, isValid = false, isInvalid = false, feedbackTooltip = false, feedback, feedbackType, className, style, title = "", type = "checkbox", label, children, as = "input", ...props }, ref) => {
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-check");
		bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, "form-switch");
		const { controlId } = x$1(FormContext);
		const innerFormContext = T$1(() => ({ controlId: id || controlId }), [controlId, id]);
		const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel);
		const input = /*#__PURE__*/ u(FormCheckInput, {
			...props,
			type: type === "switch" ? "checkbox" : type,
			ref,
			isValid,
			isInvalid,
			disabled,
			as
		});
		return /*#__PURE__*/ u(FormContext.Provider, {
			value: innerFormContext,
			children: /*#__PURE__*/ u("div", {
				style,
				className: (0, import_classnames.default)(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === "switch" && bsSwitchPrefix),
				children: children || /*#__PURE__*/ u(S, { children: [
					input,
					hasLabel && /*#__PURE__*/ u(FormCheckLabel, {
						title,
						children: label
					}),
					feedback && /*#__PURE__*/ u(Feedback, {
						type: feedbackType,
						tooltip: feedbackTooltip,
						children: feedback
					})
				] })
			})
		});
	});
	FormCheck.displayName = "FormCheck";
	var FormCheck_default = Object.assign(FormCheck, {
		Input: FormCheckInput,
		Label: FormCheckLabel
	});
	//#endregion
	//#region node_modules/warning/warning.js
	/**
	* Copyright (c) 2014-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_warning = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/**
		* Similar to invariant but only logs a warning if the condition is not met.
		* This can be used to log issues in development environments in critical
		* paths. Removing the logging code for production environments will keep the
		* same logic and follow the same code paths.
		*/
		var __DEV__ = true;
		var warning = function() {};
		if (__DEV__) {
			var printWarning = function printWarning(format, args) {
				var len = arguments.length;
				args = new Array(len > 1 ? len - 1 : 0);
				for (var key = 1; key < len; key++) args[key - 1] = arguments[key];
				var argIndex = 0;
				var message = "Warning: " + format.replace(/%s/g, function() {
					return args[argIndex++];
				});
				if (typeof console !== "undefined") console.error(message);
				try {
					throw new Error(message);
				} catch (x) {}
			};
			warning = function(condition, format, args) {
				var len = arguments.length;
				args = new Array(len > 2 ? len - 2 : 0);
				for (var key = 2; key < len; key++) args[key - 2] = arguments[key];
				if (format === void 0) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
				if (!condition) printWarning.apply(null, [format].concat(args));
			};
		}
		module.exports = warning;
	}));
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormControl.js
	init_compat_module();
	var import_warning = /* @__PURE__ */ __toESM(require_warning());
	const FormControl = /*#__PURE__*/ D(({ bsPrefix, type, size, htmlSize, id, className, isValid = false, isInvalid = false, plaintext, readOnly, as: Component = "input", ...props }, ref) => {
		const { controlId } = x$1(FormContext);
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-control");
		(0, import_warning.default)(controlId == null || !id, "`controlId` is ignored on `<FormControl>` when `id` is specified.");
		return /*#__PURE__*/ u(Component, {
			...props,
			type,
			size: htmlSize,
			ref,
			readOnly,
			id: id || controlId,
			className: (0, import_classnames.default)(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === "color" && `${bsPrefix}-color`, isValid && "is-valid", isInvalid && "is-invalid")
		});
	});
	FormControl.displayName = "FormControl";
	var FormControl_default = Object.assign(FormControl, { Feedback });
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormFloating.js
	init_compat_module();
	const FormFloating = /*#__PURE__*/ D(({ className, bsPrefix, as: Component = "div", ...props }, ref) => {
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
		return /*#__PURE__*/ u(Component, {
			ref,
			className: (0, import_classnames.default)(className, bsPrefix),
			...props
		});
	});
	FormFloating.displayName = "FormFloating";
	//#endregion
	//#region node_modules/react-bootstrap/esm/Col.js
	init_compat_module();
	function useCol({ as, bsPrefix, className, ...props }) {
		bsPrefix = useBootstrapPrefix(bsPrefix, "col");
		const breakpoints = useBootstrapBreakpoints();
		const minBreakpoint = useBootstrapMinBreakpoint();
		const spans = [];
		const classes = [];
		breakpoints.forEach((brkPoint) => {
			const propValue = props[brkPoint];
			delete props[brkPoint];
			let span;
			let offset;
			let order;
			if (typeof propValue === "object" && propValue != null) ({span, offset, order} = propValue);
			else span = propValue;
			const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
			if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
			if (order != null) classes.push(`order${infix}-${order}`);
			if (offset != null) classes.push(`offset${infix}-${offset}`);
		});
		return [{
			...props,
			className: (0, import_classnames.default)(className, ...spans, ...classes)
		}, {
			as,
			bsPrefix,
			spans
		}];
	}
	const Col = /*#__PURE__*/ D((props, ref) => {
		const [{ className, ...colProps }, { as: Component = "div", bsPrefix, spans }] = useCol(props);
		return /*#__PURE__*/ u(Component, {
			...colProps,
			ref,
			className: (0, import_classnames.default)(className, !spans.length && bsPrefix)
		});
	});
	Col.displayName = "Col";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormLabel.js
	init_compat_module();
	const FormLabel = /*#__PURE__*/ D(({ as: Component = "label", bsPrefix, column = false, visuallyHidden = false, className, htmlFor, ...props }, ref) => {
		const { controlId } = x$1(FormContext);
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-label");
		let columnClass = "col-form-label";
		if (typeof column === "string") columnClass = `${columnClass} ${columnClass}-${column}`;
		const classes = (0, import_classnames.default)(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
		(0, import_warning.default)(controlId == null || !htmlFor, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.");
		htmlFor = htmlFor || controlId;
		if (column) return /*#__PURE__*/ u(Col, {
			ref,
			as: "label",
			className: classes,
			htmlFor,
			...props
		});
		return /*#__PURE__*/ u(Component, {
			ref,
			className: classes,
			htmlFor,
			...props
		});
	});
	FormLabel.displayName = "FormLabel";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormRange.js
	init_compat_module();
	const FormRange = /*#__PURE__*/ D(({ bsPrefix, className, id, ...props }, ref) => {
		const { controlId } = x$1(FormContext);
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-range");
		return /*#__PURE__*/ u("input", {
			...props,
			type: "range",
			ref,
			className: (0, import_classnames.default)(className, bsPrefix),
			id: id || controlId
		});
	});
	FormRange.displayName = "FormRange";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormSelect.js
	init_compat_module();
	const FormSelect = /*#__PURE__*/ D(({ bsPrefix, size, htmlSize, className, isValid = false, isInvalid = false, id, ...props }, ref) => {
		const { controlId } = x$1(FormContext);
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-select");
		return /*#__PURE__*/ u("select", {
			...props,
			size: htmlSize,
			ref,
			className: (0, import_classnames.default)(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
			id: id || controlId
		});
	});
	FormSelect.displayName = "FormSelect";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormText.js
	init_compat_module();
	const FormText = /*#__PURE__*/ D(({ bsPrefix, className, as: Component = "small", muted, ...props }, ref) => {
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-text");
		return /*#__PURE__*/ u(Component, {
			...props,
			ref,
			className: (0, import_classnames.default)(className, bsPrefix, muted && "text-muted")
		});
	});
	FormText.displayName = "FormText";
	//#endregion
	//#region node_modules/react-bootstrap/esm/Switch.js
	init_compat_module();
	const Switch = /*#__PURE__*/ D((props, ref) => /*#__PURE__*/ u(FormCheck_default, {
		...props,
		ref,
		type: "switch"
	}));
	Switch.displayName = "Switch";
	var Switch_default = Object.assign(Switch, {
		Input: FormCheck_default.Input,
		Label: FormCheck_default.Label
	});
	//#endregion
	//#region node_modules/react-bootstrap/esm/Form.js
	init_compat_module();
	const propTypes$1 = {
		/**
		* The Form `ref` will be forwarded to the underlying element,
		* which means, unless it's rendered `as` a composite component,
		* it will be a DOM node, when resolved.
		*
		* @type {ReactRef}
		* @alias ref
		*/
		_ref: import_prop_types.default.any,
		/**
		* Mark a form as having been validated. Setting it to `true` will
		* toggle any validation styles on the forms elements.
		*/
		validated: import_prop_types.default.bool,
		as: import_prop_types.default.elementType
	};
	const Form = /*#__PURE__*/ D(({ className, validated, as: Component = "form", ...props }, ref) => /*#__PURE__*/ u(Component, {
		...props,
		ref,
		className: (0, import_classnames.default)(className, validated && "was-validated")
	}));
	Form.displayName = "Form";
	Form.propTypes = propTypes$1;
	var Form_default = Object.assign(Form, {
		Group: FormGroup,
		Control: FormControl_default,
		Floating: FormFloating,
		Check: FormCheck_default,
		Switch: Switch_default,
		Label: FormLabel,
		Text: FormText,
		Range: FormRange,
		Select: FormSelect,
		FloatingLabel
	});
	//#endregion
	//#region node_modules/style-inject/dist/style-inject.es.js
	function styleInject(css, ref) {
		if (ref === void 0) ref = {};
		var insertAt = ref.insertAt;
		if (!css || typeof document === "undefined") return;
		var head = document.head || document.getElementsByTagName("head")[0];
		var style = document.createElement("style");
		style.type = "text/css";
		if (insertAt === "top") {
			if (head.firstChild) head.insertBefore(style, head.firstChild);
			else head.appendChild(style);
		} else head.appendChild(style);
		if (style.styleSheet) style.styleSheet.cssText = css;
		else style.appendChild(document.createTextNode(css));
	}
	//#endregion
	//#region src/styles/ChecksumInputs.module.css
	var css_248z$3 = ".ChecksumInputs-module_mainDiv__AQnZk {\n    gap: 0.25rem;\n}\n\n.ChecksumInputs-module_textInput__xcUAw {\n    height: unset!important;\n}";
	var ChecksumInputs_module_default = {
		"mainDiv": "ChecksumInputs-module_mainDiv__AQnZk",
		"textInput": "ChecksumInputs-module_textInput__xcUAw"
	};
	styleInject(css_248z$3);
	//#endregion
	//#region src/ChecksumInputs.tsx
	init_compat_module();
	function ChecksumInputs({ readText, readFile, textValue, fileValue, fileProgress, className = "" }) {
		const numberOfLines = Math.max(2, Math.min(10, textValue.split(/\r\n|\r|\n/).length));
		const progressBar = fileProgress < 0 ? null : /* @__PURE__ */ gn.createElement(ProgressBar, {
			animated: true,
			now: fileProgress,
			label: `${fileProgress.toFixed(2)}%`
		});
		return /* @__PURE__ */ gn.createElement("div", { className: `${className} ${ChecksumInputs_module_default.mainDiv}` }, /* @__PURE__ */ gn.createElement("h2", null, "Inputs"), /* @__PURE__ */ gn.createElement(FloatingLabel, { label: "Text Input" }, /* @__PURE__ */ gn.createElement(Form_default.Control, {
			as: "textarea",
			rows: numberOfLines,
			value: textValue,
			onChange: readText,
			className: ChecksumInputs_module_default.textInput
		})), /* @__PURE__ */ gn.createElement(Form_default.Control, {
			type: "file",
			onChange: readFile,
			value: fileValue
		}), progressBar);
	}
	//#endregion
	//#region node_modules/toggle-selection/index.js
	var require_toggle_selection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			var selection = document.getSelection();
			if (!selection.rangeCount) return function() {};
			var active = document.activeElement;
			var ranges = [];
			for (var i = 0; i < selection.rangeCount; i++) ranges.push(selection.getRangeAt(i));
			switch (active.tagName.toUpperCase()) {
				case "INPUT":
				case "TEXTAREA":
					active.blur();
					break;
				default: active = null;
			}
			selection.removeAllRanges();
			return function() {
				selection.type === "Caret" && selection.removeAllRanges();
				if (!selection.rangeCount) ranges.forEach(function(range) {
					selection.addRange(range);
				});
				active && active.focus();
			};
		};
	}));
	//#endregion
	//#region node_modules/copy-to-clipboard/index.js
	var require_copy_to_clipboard = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var deselectCurrent = require_toggle_selection();
		var clipboardToIE11Formatting = {
			"text/plain": "Text",
			"text/html": "Url",
			"default": "Text"
		};
		var defaultMessage = "Copy to clipboard: #{key}, Enter";
		function format(message) {
			var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
			return message.replace(/#{\s*key\s*}/g, copyKey);
		}
		function copy(text, options) {
			var debug, message, reselectPrevious, range, selection, mark, success = false;
			if (!options) options = {};
			debug = options.debug || false;
			try {
				reselectPrevious = deselectCurrent();
				range = document.createRange();
				selection = document.getSelection();
				mark = document.createElement("span");
				mark.textContent = text;
				mark.ariaHidden = "true";
				mark.style.all = "unset";
				mark.style.position = "fixed";
				mark.style.top = 0;
				mark.style.clip = "rect(0, 0, 0, 0)";
				mark.style.whiteSpace = "pre";
				mark.style.webkitUserSelect = "text";
				mark.style.MozUserSelect = "text";
				mark.style.msUserSelect = "text";
				mark.style.userSelect = "text";
				mark.addEventListener("copy", function(e) {
					e.stopPropagation();
					if (options.format) {
						e.preventDefault();
						if (typeof e.clipboardData === "undefined") {
							debug && console.warn("unable to use e.clipboardData");
							debug && console.warn("trying IE specific stuff");
							window.clipboardData.clearData();
							var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
							window.clipboardData.setData(format, text);
						} else {
							e.clipboardData.clearData();
							e.clipboardData.setData(options.format, text);
						}
					}
					if (options.onCopy) {
						e.preventDefault();
						options.onCopy(e.clipboardData);
					}
				});
				document.body.appendChild(mark);
				range.selectNodeContents(mark);
				selection.addRange(range);
				if (!document.execCommand("copy")) throw new Error("copy command was unsuccessful");
				success = true;
			} catch (err) {
				debug && console.error("unable to copy using execCommand: ", err);
				debug && console.warn("trying IE specific stuff");
				try {
					window.clipboardData.setData(options.format || "text", text);
					options.onCopy && options.onCopy(window.clipboardData);
					success = true;
				} catch (err) {
					debug && console.error("unable to copy using clipboardData: ", err);
					debug && console.error("falling back to prompt");
					message = format("message" in options ? options.message : defaultMessage);
					window.prompt(message, text);
				}
			} finally {
				if (selection) {
					if (typeof selection.removeRange == "function") selection.removeRange(range);
					else selection.removeAllRanges();
				}
				if (mark) document.body.removeChild(mark);
				reselectPrevious();
			}
			return success;
		}
		module.exports = copy;
	}));
	//#endregion
	//#region node_modules/react-copy-to-clipboard/lib/Component.js
	var require_Component = /* @__PURE__ */ __commonJSMin(((exports) => {
		function _typeof(obj) {
			"@babel/helpers - typeof";
			return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
				return typeof obj;
			} : function(obj) {
				return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
			}, _typeof(obj);
		}
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.CopyToClipboard = void 0;
		var _react = _interopRequireDefault((init_compat_module(), __toCommonJS(compat_module_exports)));
		var _copyToClipboard = _interopRequireDefault(require_copy_to_clipboard());
		var _excluded = [
			"text",
			"onCopy",
			"options",
			"children"
		];
		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { "default": obj };
		}
		function ownKeys(object, enumerableOnly) {
			var keys = Object.keys(object);
			if (Object.getOwnPropertySymbols) {
				var symbols = Object.getOwnPropertySymbols(object);
				enumerableOnly && (symbols = symbols.filter(function(sym) {
					return Object.getOwnPropertyDescriptor(object, sym).enumerable;
				})), keys.push.apply(keys, symbols);
			}
			return keys;
		}
		function _objectSpread(target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = null != arguments[i] ? arguments[i] : {};
				i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
					_defineProperty(target, key, source[key]);
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
					Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
				});
			}
			return target;
		}
		function _objectWithoutProperties(source, excluded) {
			if (source == null) return {};
			var target = _objectWithoutPropertiesLoose(source, excluded);
			var key, i;
			if (Object.getOwnPropertySymbols) {
				var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
				for (i = 0; i < sourceSymbolKeys.length; i++) {
					key = sourceSymbolKeys[i];
					if (excluded.indexOf(key) >= 0) continue;
					if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
					target[key] = source[key];
				}
			}
			return target;
		}
		function _objectWithoutPropertiesLoose(source, excluded) {
			if (source == null) return {};
			var target = {};
			var sourceKeys = Object.keys(source);
			var key, i = 0;
			for (; i < sourceKeys.length; i++) {
				key = sourceKeys[i];
				if (excluded.indexOf(key) >= 0) continue;
				target[key] = source[key];
			}
			return target;
		}
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
		}
		function _defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		function _createClass(Constructor, protoProps, staticProps) {
			if (protoProps) _defineProperties(Constructor.prototype, protoProps);
			if (staticProps) _defineProperties(Constructor, staticProps);
			Object.defineProperty(Constructor, "prototype", { writable: false });
			return Constructor;
		}
		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
			subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
				value: subClass,
				writable: true,
				configurable: true
			} });
			Object.defineProperty(subClass, "prototype", { writable: false });
			if (superClass) _setPrototypeOf(subClass, superClass);
		}
		function _setPrototypeOf(o, p) {
			_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
				o.__proto__ = p;
				return o;
			};
			return _setPrototypeOf(o, p);
		}
		function _createSuper(Derived) {
			var hasNativeReflectConstruct = _isNativeReflectConstruct();
			return function _createSuperInternal() {
				var Super = _getPrototypeOf(Derived), result;
				if (hasNativeReflectConstruct) {
					var NewTarget = _getPrototypeOf(this).constructor;
					result = Reflect.construct(Super, arguments, NewTarget);
				} else result = Super.apply(this, arguments);
				return _possibleConstructorReturn(this, result);
			};
		}
		function _possibleConstructorReturn(self, call) {
			if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
			else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
			return _assertThisInitialized(self);
		}
		function _assertThisInitialized(self) {
			if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return self;
		}
		function _isNativeReflectConstruct() {
			if (typeof Reflect === "undefined" || !Reflect.construct) return false;
			if (Reflect.construct.sham) return false;
			if (typeof Proxy === "function") return true;
			try {
				Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
				return true;
			} catch (e) {
				return false;
			}
		}
		function _getPrototypeOf(o) {
			_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
				return o.__proto__ || Object.getPrototypeOf(o);
			};
			return _getPrototypeOf(o);
		}
		function _defineProperty(obj, key, value) {
			if (key in obj) Object.defineProperty(obj, key, {
				value,
				enumerable: true,
				configurable: true,
				writable: true
			});
			else obj[key] = value;
			return obj;
		}
		var CopyToClipboard = /*#__PURE__*/ function(_React$PureComponent) {
			_inherits(CopyToClipboard, _React$PureComponent);
			var _super = _createSuper(CopyToClipboard);
			function CopyToClipboard() {
				var _this;
				_classCallCheck(this, CopyToClipboard);
				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				_this = _super.call.apply(_super, [this].concat(args));
				_defineProperty(_assertThisInitialized(_this), "onClick", function(event) {
					var _this$props = _this.props, text = _this$props.text, onCopy = _this$props.onCopy, children = _this$props.children, options = _this$props.options;
					var elem = _react["default"].Children.only(children);
					var result = (0, _copyToClipboard["default"])(text, options);
					if (onCopy) onCopy(text, result);
					if (elem && elem.props && typeof elem.props.onClick === "function") elem.props.onClick(event);
				});
				return _this;
			}
			_createClass(CopyToClipboard, [{
				key: "render",
				value: function render() {
					var _this$props2 = this.props;
					_this$props2.text;
					_this$props2.onCopy;
					_this$props2.options;
					var children = _this$props2.children, props = _objectWithoutProperties(_this$props2, _excluded);
					var elem = _react["default"].Children.only(children);
					return /*#__PURE__*/ _react["default"].cloneElement(elem, _objectSpread(_objectSpread({}, props), {}, { onClick: this.onClick }));
				}
			}]);
			return CopyToClipboard;
		}(_react["default"].PureComponent);
		exports.CopyToClipboard = CopyToClipboard;
		_defineProperty(CopyToClipboard, "defaultProps", {
			onCopy: void 0,
			options: void 0
		});
	}));
	//#endregion
	//#region node_modules/@babel/runtime/helpers/esm/extends.js
	var import_lib = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
		var CopyToClipboard = require_Component().CopyToClipboard;
		CopyToClipboard.CopyToClipboard = CopyToClipboard;
		module.exports = CopyToClipboard;
	})))();
	function _extends() {
		return _extends = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends.apply(null, arguments);
	}
	//#endregion
	//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
	function _objectWithoutPropertiesLoose$2(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (-1 !== e.indexOf(n)) continue;
			t[n] = r[n];
		}
		return t;
	}
	(/* @__PURE__ */ __commonJSMin(((exports, module) => {
		/**
		* Use invariant() to assert state which your program assumes to be true.
		*
		* Provide sprintf-style format (only %s is supported) and arguments
		* to provide information about what broke and what you were
		* expecting.
		*
		* The invariant message will be stripped in production, but the invariant
		* will remain to ensure logic does not differ in production.
		*/
		var invariant = function(condition, format, a, b, c, d, e, f) {
			if (format === void 0) throw new Error("invariant requires an error message argument");
			if (!condition) {
				var error;
				if (format === void 0) error = /* @__PURE__ */ new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
				else {
					var args = [
						a,
						b,
						c,
						d,
						e,
						f
					];
					var argIndex = 0;
					error = new Error(format.replace(/%s/g, function() {
						return args[argIndex++];
					}));
					error.name = "Invariant Violation";
				}
				error.framesToPop = 1;
				throw error;
			}
		};
		module.exports = invariant;
	})))();
	function defaultKey(key) {
		return "default" + key.charAt(0).toUpperCase() + key.substr(1);
	}
	//#endregion
	//#region node_modules/uncontrollable/lib/esm/hook.js
	init_compat_module();
	function _toPropertyKey(arg) {
		var key = _toPrimitive(arg, "string");
		return typeof key === "symbol" ? key : String(key);
	}
	function _toPrimitive(input, hint) {
		if (typeof input !== "object" || input === null) return input;
		var prim = input[Symbol.toPrimitive];
		if (prim !== void 0) {
			var res = prim.call(input, hint || "default");
			if (typeof res !== "object") return res;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return (hint === "string" ? String : Number)(input);
	}
	function useUncontrolledProp(propValue, defaultValue, handler) {
		var wasPropRef = A$1(propValue !== void 0);
		var _useState = d(defaultValue), stateValue = _useState[0], setState = _useState[1];
		var isProp = propValue !== void 0;
		var wasProp = wasPropRef.current;
		wasPropRef.current = isProp;
		/**
		* If a prop switches from controlled to Uncontrolled
		* reset its value to the defaultValue
		*/
		if (!isProp && wasProp && stateValue !== defaultValue) setState(defaultValue);
		return [isProp ? propValue : stateValue, q$1(function(value) {
			for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
			if (handler) handler.apply(void 0, [value].concat(args));
			setState(value);
		}, [handler])];
	}
	function useUncontrolled(props, config) {
		return Object.keys(config).reduce(function(result, fieldName) {
			var _extends2;
			var _ref = result, defaultValue = _ref[defaultKey(fieldName)], propsValue = _ref[fieldName], rest = _objectWithoutPropertiesLoose$2(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));
			var handlerName = config[fieldName];
			var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
			return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
		}, props);
	}
	//#endregion
	//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
	function _setPrototypeOf(t, e) {
		return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
			return t.__proto__ = e, t;
		}, _setPrototypeOf(t, e);
	}
	//#endregion
	//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
	function _inheritsLoose(t, o) {
		t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
	}
	//#endregion
	//#region node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	function componentWillMount() {
		var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
		if (state !== null && state !== void 0) this.setState(state);
	}
	function componentWillReceiveProps(nextProps) {
		function updater(prevState) {
			var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
			return state !== null && state !== void 0 ? state : null;
		}
		this.setState(updater.bind(this));
	}
	function componentWillUpdate(nextProps, nextState) {
		try {
			var prevProps = this.props;
			var prevState = this.state;
			this.props = nextProps;
			this.state = nextState;
			this.__reactInternalSnapshotFlag = true;
			this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
		} finally {
			this.props = prevProps;
			this.state = prevState;
		}
	}
	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;
	//#endregion
	//#region node_modules/uncontrollable/lib/esm/uncontrollable.js
	init_compat_module();
	//#endregion
	//#region node_modules/@restart/hooks/esm/useCommittedRef.js
	init_compat_module();
	/**
	* Creates a `Ref` whose value is updated in an effect, ensuring the most recent
	* value is the one rendered with. Generally only required for Concurrent mode usage
	* where previous work in `render()` may be discarded before being used.
	*
	* This is safe to access in an event handler.
	*
	* @param value The `Ref` value
	*/
	function useCommittedRef$1(value) {
		const ref = A$1(value);
		h(() => {
			ref.current = value;
		}, [value]);
		return ref;
	}
	//#endregion
	//#region node_modules/@restart/hooks/esm/useEventCallback.js
	init_compat_module();
	function useEventCallback$1(fn) {
		const ref = useCommittedRef$1(fn);
		return q$1(function(...args) {
			return ref.current && ref.current(...args);
		}, [ref]);
	}
	//#endregion
	//#region node_modules/react-bootstrap/esm/divWithClassName.js
	init_compat_module();
	var divWithClassName_default = ((className) => /*#__PURE__*/ D((p, ref) => /*#__PURE__*/ u("div", {
		...p,
		ref,
		className: (0, import_classnames.default)(p.className, className)
	})));
	//#endregion
	//#region node_modules/react-bootstrap/esm/AlertHeading.js
	init_compat_module();
	const DivStyledAsH4 = divWithClassName_default("h4");
	DivStyledAsH4.displayName = "DivStyledAsH4";
	const AlertHeading = /*#__PURE__*/ D(({ className, bsPrefix, as: Component = DivStyledAsH4, ...props }, ref) => {
		bsPrefix = useBootstrapPrefix(bsPrefix, "alert-heading");
		return /*#__PURE__*/ u(Component, {
			ref,
			className: (0, import_classnames.default)(className, bsPrefix),
			...props
		});
	});
	AlertHeading.displayName = "AlertHeading";
	//#endregion
	//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js
	init_compat_module();
	//#endregion
	//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js
	init_compat_module();
	/**
	* Creates a `Ref` whose value is updated in an effect, ensuring the most recent
	* value is the one rendered with. Generally only required for Concurrent mode usage
	* where previous work in `render()` may be discarded before being used.
	*
	* This is safe to access in an event handler.
	*
	* @param value The `Ref` value
	*/
	function useCommittedRef(value) {
		const ref = A$1(value);
		h(() => {
			ref.current = value;
		}, [value]);
		return ref;
	}
	//#endregion
	//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js
	init_compat_module();
	function useEventCallback(fn) {
		const ref = useCommittedRef(fn);
		return q$1(function(...args) {
			return ref.current && ref.current(...args);
		}, [ref]);
	}
	//#endregion
	//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js
	init_compat_module();
	//#endregion
	//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useGlobalListener.js
	init_compat_module();
	//#endregion
	//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useInterval.js
	init_compat_module();
	//#endregion
	//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useRafInterval.js
	init_compat_module();
	//#endregion
	//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js
	init_compat_module();
	//#endregion
	//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js
	init_compat_module();
	//#endregion
	//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/usePrevious.js
	init_compat_module();
	//#endregion
	//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useImage.js
	init_compat_module();
	//#endregion
	//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useIsomorphicEffect.js
	init_compat_module();
	typeof global !== "undefined" && global.navigator && global.navigator.product;
	//#endregion
	//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useResizeObserver.js
	init_compat_module();
	//#endregion
	//#region node_modules/@restart/ui/esm/Button.js
	init_compat_module();
	const _excluded$1 = ["as", "disabled"];
	function _objectWithoutPropertiesLoose$1(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (e.indexOf(n) >= 0) continue;
			t[n] = r[n];
		}
		return t;
	}
	function isTrivialHref$1(href) {
		return !href || href.trim() === "#";
	}
	function useButtonProps({ tagName, disabled, href, target, rel, role, onClick, tabIndex = 0, type }) {
		if (!tagName) {
			if (href != null || target != null || rel != null) tagName = "a";
			else tagName = "button";
		}
		const meta = { tagName };
		if (tagName === "button") return [{
			type: type || "button",
			disabled
		}, meta];
		const handleClick = (event) => {
			if (disabled || tagName === "a" && isTrivialHref$1(href)) event.preventDefault();
			if (disabled) {
				event.stopPropagation();
				return;
			}
			onClick?.(event);
		};
		const handleKeyDown = (event) => {
			if (event.key === " ") {
				event.preventDefault();
				handleClick(event);
			}
		};
		if (tagName === "a") {
			href || (href = "#");
			if (disabled) href = void 0;
		}
		return [{
			role: role != null ? role : "button",
			disabled: void 0,
			tabIndex: disabled ? void 0 : tabIndex,
			href,
			target: tagName === "a" ? target : void 0,
			"aria-disabled": !disabled ? void 0 : disabled,
			rel: tagName === "a" ? rel : void 0,
			onClick: handleClick,
			onKeyDown: handleKeyDown
		}, meta];
	}
	const Button = /*#__PURE__*/ D((_ref, ref) => {
		let { as: asProp, disabled } = _ref, props = _objectWithoutPropertiesLoose$1(_ref, _excluded$1);
		const [buttonProps, { tagName: Component }] = useButtonProps(Object.assign({
			tagName: asProp,
			disabled
		}, props));
		return /*#__PURE__*/ u(Component, Object.assign({}, props, buttonProps, { ref }));
	});
	Button.displayName = "Button";
	//#endregion
	//#region node_modules/@restart/ui/esm/Anchor.js
	init_compat_module();
	const _excluded = ["onKeyDown"];
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (e.indexOf(n) >= 0) continue;
			t[n] = r[n];
		}
		return t;
	}
	function isTrivialHref(href) {
		return !href || href.trim() === "#";
	}
	/**
	* An generic `<a>` component that covers a few A11y cases, ensuring that
	* cases where the `href` is missing or trivial like "#" are treated like buttons.
	*/
	const Anchor = /*#__PURE__*/ D((_ref, ref) => {
		let { onKeyDown } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
		const [buttonProps] = useButtonProps(Object.assign({ tagName: "a" }, props));
		const handleKeyDown = useEventCallback((e) => {
			buttonProps.onKeyDown(e);
			onKeyDown?.(e);
		});
		if (isTrivialHref(props.href) || props.role === "button") return /*#__PURE__*/ u("a", Object.assign({ ref }, props, buttonProps, { onKeyDown: handleKeyDown }));
		return /*#__PURE__*/ u("a", Object.assign({ ref }, props, { onKeyDown }));
	});
	Anchor.displayName = "Anchor";
	//#endregion
	//#region node_modules/react-bootstrap/esm/AlertLink.js
	init_compat_module();
	const AlertLink = /*#__PURE__*/ D(({ className, bsPrefix, as: Component = Anchor, ...props }, ref) => {
		bsPrefix = useBootstrapPrefix(bsPrefix, "alert-link");
		return /*#__PURE__*/ u(Component, {
			ref,
			className: (0, import_classnames.default)(className, bsPrefix),
			...props
		});
	});
	AlertLink.displayName = "AlertLink";
	//#endregion
	//#region node_modules/react-transition-group/esm/config.js
	var config_default = { disabled: false };
	//#endregion
	//#region node_modules/react-transition-group/esm/utils/PropTypes.js
	var timeoutsShape = import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
		enter: import_prop_types.default.number,
		exit: import_prop_types.default.number,
		appear: import_prop_types.default.number
	}).isRequired]);
	import_prop_types.default.oneOfType([
		import_prop_types.default.string,
		import_prop_types.default.shape({
			enter: import_prop_types.default.string,
			exit: import_prop_types.default.string,
			active: import_prop_types.default.string
		}),
		import_prop_types.default.shape({
			enter: import_prop_types.default.string,
			enterDone: import_prop_types.default.string,
			enterActive: import_prop_types.default.string,
			exit: import_prop_types.default.string,
			exitDone: import_prop_types.default.string,
			exitActive: import_prop_types.default.string
		})
	]);
	//#endregion
	//#region node_modules/react-transition-group/esm/TransitionGroupContext.js
	init_compat_module();
	var TransitionGroupContext_default = gn.createContext(null);
	//#endregion
	//#region node_modules/react-transition-group/esm/utils/reflow.js
	var forceReflow = function forceReflow(node) {
		return node.scrollTop;
	};
	//#endregion
	//#region node_modules/react-transition-group/esm/Transition.js
	init_compat_module();
	var UNMOUNTED = "unmounted";
	var EXITED = "exited";
	var ENTERING = "entering";
	var ENTERED = "entered";
	var EXITING = "exiting";
	/**
	* The Transition component lets you describe a transition from one component
	* state to another _over time_ with a simple declarative API. Most commonly
	* it's used to animate the mounting and unmounting of a component, but can also
	* be used to describe in-place transition states as well.
	*
	* ---
	*
	* **Note**: `Transition` is a platform-agnostic base component. If you're using
	* transitions in CSS, you'll probably want to use
	* [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
	* instead. It inherits all the features of `Transition`, but contains
	* additional features necessary to play nice with CSS transitions (hence the
	* name of the component).
	*
	* ---
	*
	* By default the `Transition` component does not alter the behavior of the
	* component it renders, it only tracks "enter" and "exit" states for the
	* components. It's up to you to give meaning and effect to those states. For
	* example we can add styles to a component when it enters or exits:
	*
	* ```jsx
	* import { Transition } from 'react-transition-group';
	*
	* const duration = 300;
	*
	* const defaultStyle = {
	*   transition: `opacity ${duration}ms ease-in-out`,
	*   opacity: 0,
	* }
	*
	* const transitionStyles = {
	*   entering: { opacity: 1 },
	*   entered:  { opacity: 1 },
	*   exiting:  { opacity: 0 },
	*   exited:  { opacity: 0 },
	* };
	*
	* const Fade = ({ in: inProp }) => (
	*   <Transition in={inProp} timeout={duration}>
	*     {state => (
	*       <div style={{
	*         ...defaultStyle,
	*         ...transitionStyles[state]
	*       }}>
	*         I'm a fade Transition!
	*       </div>
	*     )}
	*   </Transition>
	* );
	* ```
	*
	* There are 4 main states a Transition can be in:
	*  - `'entering'`
	*  - `'entered'`
	*  - `'exiting'`
	*  - `'exited'`
	*
	* Transition state is toggled via the `in` prop. When `true` the component
	* begins the "Enter" stage. During this stage, the component will shift from
	* its current transition state, to `'entering'` for the duration of the
	* transition and then to the `'entered'` stage once it's complete. Let's take
	* the following example (we'll use the
	* [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
	*
	* ```jsx
	* function App() {
	*   const [inProp, setInProp] = useState(false);
	*   return (
	*     <div>
	*       <Transition in={inProp} timeout={500}>
	*         {state => (
	*           // ...
	*         )}
	*       </Transition>
	*       <button onClick={() => setInProp(true)}>
	*         Click to Enter
	*       </button>
	*     </div>
	*   );
	* }
	* ```
	*
	* When the button is clicked the component will shift to the `'entering'` state
	* and stay there for 500ms (the value of `timeout`) before it finally switches
	* to `'entered'`.
	*
	* When `in` is `false` the same thing happens except the state moves from
	* `'exiting'` to `'exited'`.
	*/
	var Transition = /*#__PURE__*/ function(_React$Component) {
		_inheritsLoose(Transition, _React$Component);
		function Transition(props, context) {
			var _this = _React$Component.call(this, props, context) || this;
			var parentGroup = context;
			var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
			var initialStatus;
			_this.appearStatus = null;
			if (props.in) {
				if (appear) {
					initialStatus = EXITED;
					_this.appearStatus = ENTERING;
				} else initialStatus = ENTERED;
			} else if (props.unmountOnExit || props.mountOnEnter) initialStatus = UNMOUNTED;
			else initialStatus = EXITED;
			_this.state = { status: initialStatus };
			_this.nextCallback = null;
			return _this;
		}
		Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
			if (_ref.in && prevState.status === "unmounted") return { status: EXITED };
			return null;
		};
		var _proto = Transition.prototype;
		_proto.componentDidMount = function componentDidMount() {
			this.updateStatus(true, this.appearStatus);
		};
		_proto.componentDidUpdate = function componentDidUpdate(prevProps) {
			var nextStatus = null;
			if (prevProps !== this.props) {
				var status = this.state.status;
				if (this.props.in) {
					if (status !== "entering" && status !== "entered") nextStatus = ENTERING;
				} else if (status === "entering" || status === "entered") nextStatus = EXITING;
			}
			this.updateStatus(false, nextStatus);
		};
		_proto.componentWillUnmount = function componentWillUnmount() {
			this.cancelNextCallback();
		};
		_proto.getTimeouts = function getTimeouts() {
			var timeout = this.props.timeout;
			var exit = enter = appear = timeout, enter, appear;
			if (timeout != null && typeof timeout !== "number") {
				exit = timeout.exit;
				enter = timeout.enter;
				appear = timeout.appear !== void 0 ? timeout.appear : enter;
			}
			return {
				exit,
				enter,
				appear
			};
		};
		_proto.updateStatus = function updateStatus(mounting, nextStatus) {
			if (mounting === void 0) mounting = false;
			if (nextStatus !== null) {
				this.cancelNextCallback();
				if (nextStatus === "entering") {
					if (this.props.unmountOnExit || this.props.mountOnEnter) {
						var node = this.props.nodeRef ? this.props.nodeRef.current : gn.findDOMNode(this);
						if (node) forceReflow(node);
					}
					this.performEnter(mounting);
				} else this.performExit();
			} else if (this.props.unmountOnExit && this.state.status === "exited") this.setState({ status: UNMOUNTED });
		};
		_proto.performEnter = function performEnter(mounting) {
			var _this2 = this;
			var enter = this.props.enter;
			var appearing = this.context ? this.context.isMounting : mounting;
			var _ref2 = this.props.nodeRef ? [appearing] : [gn.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
			var timeouts = this.getTimeouts();
			var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
			if (!mounting && !enter || config_default.disabled) {
				this.safeSetState({ status: ENTERED }, function() {
					_this2.props.onEntered(maybeNode);
				});
				return;
			}
			this.props.onEnter(maybeNode, maybeAppearing);
			this.safeSetState({ status: ENTERING }, function() {
				_this2.props.onEntering(maybeNode, maybeAppearing);
				_this2.onTransitionEnd(enterTimeout, function() {
					_this2.safeSetState({ status: ENTERED }, function() {
						_this2.props.onEntered(maybeNode, maybeAppearing);
					});
				});
			});
		};
		_proto.performExit = function performExit() {
			var _this3 = this;
			var exit = this.props.exit;
			var timeouts = this.getTimeouts();
			var maybeNode = this.props.nodeRef ? void 0 : gn.findDOMNode(this);
			if (!exit || config_default.disabled) {
				this.safeSetState({ status: EXITED }, function() {
					_this3.props.onExited(maybeNode);
				});
				return;
			}
			this.props.onExit(maybeNode);
			this.safeSetState({ status: EXITING }, function() {
				_this3.props.onExiting(maybeNode);
				_this3.onTransitionEnd(timeouts.exit, function() {
					_this3.safeSetState({ status: EXITED }, function() {
						_this3.props.onExited(maybeNode);
					});
				});
			});
		};
		_proto.cancelNextCallback = function cancelNextCallback() {
			if (this.nextCallback !== null) {
				this.nextCallback.cancel();
				this.nextCallback = null;
			}
		};
		_proto.safeSetState = function safeSetState(nextState, callback) {
			callback = this.setNextCallback(callback);
			this.setState(nextState, callback);
		};
		_proto.setNextCallback = function setNextCallback(callback) {
			var _this4 = this;
			var active = true;
			this.nextCallback = function(event) {
				if (active) {
					active = false;
					_this4.nextCallback = null;
					callback(event);
				}
			};
			this.nextCallback.cancel = function() {
				active = false;
			};
			return this.nextCallback;
		};
		_proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
			this.setNextCallback(handler);
			var node = this.props.nodeRef ? this.props.nodeRef.current : gn.findDOMNode(this);
			var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
			if (!node || doesNotHaveTimeoutOrListener) {
				setTimeout(this.nextCallback, 0);
				return;
			}
			if (this.props.addEndListener) {
				var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
				this.props.addEndListener(maybeNode, maybeNextCallback);
			}
			if (timeout != null) setTimeout(this.nextCallback, timeout);
		};
		_proto.render = function render() {
			var status = this.state.status;
			if (status === "unmounted") return null;
			var _this$props = this.props, children = _this$props.children;
			_this$props.in;
			_this$props.mountOnEnter;
			_this$props.unmountOnExit;
			_this$props.appear;
			_this$props.enter;
			_this$props.exit;
			_this$props.timeout;
			_this$props.addEndListener;
			_this$props.onEnter;
			_this$props.onEntering;
			_this$props.onEntered;
			_this$props.onExit;
			_this$props.onExiting;
			_this$props.onExited;
			_this$props.nodeRef;
			var childProps = _objectWithoutPropertiesLoose$2(_this$props, [
				"children",
				"in",
				"mountOnEnter",
				"unmountOnExit",
				"appear",
				"enter",
				"exit",
				"timeout",
				"addEndListener",
				"onEnter",
				"onEntering",
				"onEntered",
				"onExit",
				"onExiting",
				"onExited",
				"nodeRef"
			]);
			return /*#__PURE__*/ gn.createElement(TransitionGroupContext_default.Provider, { value: null }, typeof children === "function" ? children(status, childProps) : gn.cloneElement(gn.Children.only(children), childProps));
		};
		return Transition;
	}(gn.Component);
	Transition.contextType = TransitionGroupContext_default;
	Transition.propTypes = {
		/**
		* A React reference to DOM element that need to transition:
		* https://stackoverflow.com/a/51127130/4671932
		*
		*   - When `nodeRef` prop is used, `node` is not passed to callback functions
		*      (e.g. `onEnter`) because user already has direct access to the node.
		*   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
		*     `nodeRef` need to be provided to `Transition` with changed `key` prop
		*     (see
		*     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
		*/
		nodeRef: import_prop_types.default.shape({ current: typeof Element === "undefined" ? import_prop_types.default.any : function(propValue, key, componentName, location, propFullName, secret) {
			var value = propValue[key];
			return import_prop_types.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
		} }),
		/**
		* A `function` child can be used instead of a React element. This function is
		* called with the current transition status (`'entering'`, `'entered'`,
		* `'exiting'`, `'exited'`), which can be used to apply context
		* specific props to a component.
		*
		* ```jsx
		* <Transition in={this.state.in} timeout={150}>
		*   {state => (
		*     <MyComponent className={`fade fade-${state}`} />
		*   )}
		* </Transition>
		* ```
		*/
		children: import_prop_types.default.oneOfType([import_prop_types.default.func.isRequired, import_prop_types.default.element.isRequired]).isRequired,
		/**
		* Show the component; triggers the enter or exit states
		*/
		in: import_prop_types.default.bool,
		/**
		* By default the child component is mounted immediately along with
		* the parent `Transition` component. If you want to "lazy mount" the component on the
		* first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
		* mounted, even on "exited", unless you also specify `unmountOnExit`.
		*/
		mountOnEnter: import_prop_types.default.bool,
		/**
		* By default the child component stays mounted after it reaches the `'exited'` state.
		* Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
		*/
		unmountOnExit: import_prop_types.default.bool,
		/**
		* By default the child component does not perform the enter transition when
		* it first mounts, regardless of the value of `in`. If you want this
		* behavior, set both `appear` and `in` to `true`.
		*
		* > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
		* > only adds an additional enter transition. However, in the
		* > `<CSSTransition>` component that first enter transition does result in
		* > additional `.appear-*` classes, that way you can choose to style it
		* > differently.
		*/
		appear: import_prop_types.default.bool,
		/**
		* Enable or disable enter transitions.
		*/
		enter: import_prop_types.default.bool,
		/**
		* Enable or disable exit transitions.
		*/
		exit: import_prop_types.default.bool,
		/**
		* The duration of the transition, in milliseconds.
		* Required unless `addEndListener` is provided.
		*
		* You may specify a single timeout for all transitions:
		*
		* ```jsx
		* timeout={500}
		* ```
		*
		* or individually:
		*
		* ```jsx
		* timeout={{
		*  appear: 500,
		*  enter: 300,
		*  exit: 500,
		* }}
		* ```
		*
		* - `appear` defaults to the value of `enter`
		* - `enter` defaults to `0`
		* - `exit` defaults to `0`
		*
		* @type {number | { enter?: number, exit?: number, appear?: number }}
		*/
		timeout: function timeout(props) {
			var pt = timeoutsShape;
			if (!props.addEndListener) pt = pt.isRequired;
			for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
			return pt.apply(void 0, [props].concat(args));
		},
		/**
		* Add a custom transition end trigger. Called with the transitioning
		* DOM node and a `done` callback. Allows for more fine grained transition end
		* logic. Timeouts are still used as a fallback if provided.
		*
		* **Note**: when `nodeRef` prop is passed, `node` is not passed.
		*
		* ```jsx
		* addEndListener={(node, done) => {
		*   // use the css transitionend event to mark the finish of a transition
		*   node.addEventListener('transitionend', done, false);
		* }}
		* ```
		*/
		addEndListener: import_prop_types.default.func,
		/**
		* Callback fired before the "entering" status is applied. An extra parameter
		* `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
		*
		* **Note**: when `nodeRef` prop is passed, `node` is not passed.
		*
		* @type Function(node: HtmlElement, isAppearing: bool) -> void
		*/
		onEnter: import_prop_types.default.func,
		/**
		* Callback fired after the "entering" status is applied. An extra parameter
		* `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
		*
		* **Note**: when `nodeRef` prop is passed, `node` is not passed.
		*
		* @type Function(node: HtmlElement, isAppearing: bool)
		*/
		onEntering: import_prop_types.default.func,
		/**
		* Callback fired after the "entered" status is applied. An extra parameter
		* `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
		*
		* **Note**: when `nodeRef` prop is passed, `node` is not passed.
		*
		* @type Function(node: HtmlElement, isAppearing: bool) -> void
		*/
		onEntered: import_prop_types.default.func,
		/**
		* Callback fired before the "exiting" status is applied.
		*
		* **Note**: when `nodeRef` prop is passed, `node` is not passed.
		*
		* @type Function(node: HtmlElement) -> void
		*/
		onExit: import_prop_types.default.func,
		/**
		* Callback fired after the "exiting" status is applied.
		*
		* **Note**: when `nodeRef` prop is passed, `node` is not passed.
		*
		* @type Function(node: HtmlElement) -> void
		*/
		onExiting: import_prop_types.default.func,
		/**
		* Callback fired after the "exited" status is applied.
		*
		* **Note**: when `nodeRef` prop is passed, `node` is not passed
		*
		* @type Function(node: HtmlElement) -> void
		*/
		onExited: import_prop_types.default.func
	};
	function noop() {}
	Transition.defaultProps = {
		in: false,
		mountOnEnter: false,
		unmountOnExit: false,
		appear: false,
		enter: true,
		exit: true,
		onEnter: noop,
		onEntering: noop,
		onEntered: noop,
		onExit: noop,
		onExiting: noop,
		onExited: noop
	};
	Transition.UNMOUNTED = UNMOUNTED;
	Transition.EXITED = EXITED;
	Transition.ENTERING = ENTERING;
	Transition.ENTERED = ENTERED;
	Transition.EXITING = EXITING;
	//#endregion
	//#region node_modules/@restart/ui/esm/utils.js
	init_compat_module();
	function getReactVersion() {
		const parts = cn.split(".");
		return {
			major: +parts[0],
			minor: +parts[1],
			patch: +parts[2]
		};
	}
	function getChildRef(element) {
		if (!element || typeof element === "function") return null;
		const { major } = getReactVersion();
		return major >= 19 ? element.props.ref : element.ref;
	}
	//#endregion
	//#region node_modules/dom-helpers/esm/ownerDocument.js
	/**
	* Returns the owner document of a given element.
	* 
	* @param node the element
	*/
	function ownerDocument(node) {
		return node && node.ownerDocument || document;
	}
	//#endregion
	//#region node_modules/dom-helpers/esm/ownerWindow.js
	/**
	* Returns the owner window of a given element.
	* 
	* @param node the element
	*/
	function ownerWindow(node) {
		var doc = ownerDocument(node);
		return doc && doc.defaultView || window;
	}
	//#endregion
	//#region node_modules/dom-helpers/esm/getComputedStyle.js
	/**
	* Returns one or all computed style properties of an element.
	* 
	* @param node the element
	* @param psuedoElement the style property
	*/
	function getComputedStyle(node, psuedoElement) {
		return ownerWindow(node).getComputedStyle(node, psuedoElement);
	}
	//#endregion
	//#region node_modules/dom-helpers/esm/hyphenate.js
	var rUpper = /([A-Z])/g;
	function hyphenate(string) {
		return string.replace(rUpper, "-$1").toLowerCase();
	}
	//#endregion
	//#region node_modules/dom-helpers/esm/hyphenateStyle.js
	/**
	* Copyright 2013-2014, Facebook, Inc.
	* All rights reserved.
	* https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	*/
	var msPattern = /^ms-/;
	function hyphenateStyleName(string) {
		return hyphenate(string).replace(msPattern, "-ms-");
	}
	//#endregion
	//#region node_modules/dom-helpers/esm/isTransform.js
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
	function isTransform(value) {
		return !!(value && supportedTransforms.test(value));
	}
	//#endregion
	//#region node_modules/dom-helpers/esm/css.js
	function style(node, property) {
		var css = "";
		var transforms = "";
		if (typeof property === "string") return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
		Object.keys(property).forEach(function(key) {
			var value = property[key];
			if (!value && value !== 0) node.style.removeProperty(hyphenateStyleName(key));
			else if (isTransform(key)) transforms += key + "(" + value + ") ";
			else css += hyphenateStyleName(key) + ": " + value + ";";
		});
		if (transforms) css += "transform: " + transforms + ";";
		node.style.cssText += ";" + css;
	}
	//#endregion
	//#region node_modules/dom-helpers/esm/canUseDOM.js
	var canUseDOM_default = !!(typeof window !== "undefined" && window.document && window.document.createElement);
	//#endregion
	//#region node_modules/dom-helpers/esm/addEventListener.js
	var optionsSupported = false;
	var onceSupported = false;
	try {
		var options = {
			get passive() {
				return optionsSupported = true;
			},
			get once() {
				return onceSupported = optionsSupported = true;
			}
		};
		if (canUseDOM_default) {
			window.addEventListener("test", options, options);
			window.removeEventListener("test", options, true);
		}
	} catch (e) {}
	/**
	* An `addEventListener` ponyfill, supports the `once` option
	* 
	* @param node the element
	* @param eventName the event name
	* @param handle the handler
	* @param options event options
	*/
	function addEventListener(node, eventName, handler, options) {
		if (options && typeof options !== "boolean" && !onceSupported) {
			var once = options.once, capture = options.capture;
			var wrappedHandler = handler;
			if (!onceSupported && once) {
				wrappedHandler = handler.__once || function onceHandler(event) {
					this.removeEventListener(eventName, onceHandler, capture);
					handler.call(this, event);
				};
				handler.__once = wrappedHandler;
			}
			node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
		}
		node.addEventListener(eventName, handler, options);
	}
	//#endregion
	//#region node_modules/dom-helpers/esm/removeEventListener.js
	/**
	* A `removeEventListener` ponyfill
	* 
	* @param node the element
	* @param eventName the event name
	* @param handle the handler
	* @param options event options
	*/
	function removeEventListener(node, eventName, handler, options) {
		var capture = options && typeof options !== "boolean" ? options.capture : options;
		node.removeEventListener(eventName, handler, capture);
		if (handler.__once) node.removeEventListener(eventName, handler.__once, capture);
	}
	//#endregion
	//#region node_modules/dom-helpers/esm/listen.js
	function listen(node, eventName, handler, options) {
		addEventListener(node, eventName, handler, options);
		return function() {
			removeEventListener(node, eventName, handler, options);
		};
	}
	//#endregion
	//#region node_modules/dom-helpers/esm/triggerEvent.js
	/**
	* Triggers an event on a given element.
	* 
	* @param node the element
	* @param eventName the event name to trigger
	* @param bubbles whether the event should bubble up
	* @param cancelable whether the event should be cancelable
	*/
	function triggerEvent(node, eventName, bubbles, cancelable) {
		if (bubbles === void 0) bubbles = false;
		if (cancelable === void 0) cancelable = true;
		if (node) {
			var event = document.createEvent("HTMLEvents");
			event.initEvent(eventName, bubbles, cancelable);
			node.dispatchEvent(event);
		}
	}
	//#endregion
	//#region node_modules/dom-helpers/esm/transitionEnd.js
	function parseDuration$1(node) {
		var str = style(node, "transitionDuration") || "";
		var mult = str.indexOf("ms") === -1 ? 1e3 : 1;
		return parseFloat(str) * mult;
	}
	function emulateTransitionEnd(element, duration, padding) {
		if (padding === void 0) padding = 5;
		var called = false;
		var handle = setTimeout(function() {
			if (!called) triggerEvent(element, "transitionend", true);
		}, duration + padding);
		var remove = listen(element, "transitionend", function() {
			called = true;
		}, { once: true });
		return function() {
			clearTimeout(handle);
			remove();
		};
	}
	function transitionEnd(element, handler, duration, padding) {
		if (duration == null) duration = parseDuration$1(element) || 0;
		var removeEmulate = emulateTransitionEnd(element, duration, padding);
		var remove = listen(element, "transitionend", handler);
		return function() {
			removeEmulate();
			remove();
		};
	}
	//#endregion
	//#region node_modules/react-bootstrap/esm/transitionEndListener.js
	function parseDuration(node, property) {
		const str = style(node, property) || "";
		const mult = str.indexOf("ms") === -1 ? 1e3 : 1;
		return parseFloat(str) * mult;
	}
	function transitionEndListener(element, handler) {
		const remove = transitionEnd(element, (e) => {
			if (e.target === element) {
				remove();
				handler(e);
			}
		}, parseDuration(element, "transitionDuration") + parseDuration(element, "transitionDelay"));
	}
	//#endregion
	//#region node_modules/react-bootstrap/esm/triggerBrowserReflow.js
	function triggerBrowserReflow(node) {
		node.offsetHeight;
	}
	//#endregion
	//#region node_modules/@restart/hooks/esm/useMergedRefs.js
	init_compat_module();
	const toFnRef = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
		ref.current = value;
	};
	function mergeRefs(refA, refB) {
		const a = toFnRef(refA);
		const b = toFnRef(refB);
		return (value) => {
			if (a) a(value);
			if (b) b(value);
		};
	}
	/**
	* Create and returns a single callback ref composed from two other Refs.
	*
	* ```tsx
	* const Button = React.forwardRef((props, ref) => {
	*   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
	*   const mergedRef = useMergedRefs(ref, attachRef);
	*
	*   return <button ref={mergedRef} {...props}/>
	* })
	* ```
	*
	* @param refA A Callback or mutable Ref
	* @param refB A Callback or mutable Ref
	* @category refs
	*/
	function useMergedRefs(refA, refB) {
		return T$1(() => mergeRefs(refA, refB), [refA, refB]);
	}
	//#endregion
	//#region node_modules/react-bootstrap/esm/safeFindDOMNode.js
	init_compat_module();
	function safeFindDOMNode(componentOrElement) {
		if (componentOrElement && "setState" in componentOrElement) return gn.findDOMNode(componentOrElement);
		return componentOrElement != null ? componentOrElement : null;
	}
	//#endregion
	//#region node_modules/react-bootstrap/esm/TransitionWrapper.js
	init_compat_module();
	const TransitionWrapper = /*#__PURE__*/ gn.forwardRef(({ onEnter, onEntering, onEntered, onExit, onExiting, onExited, addEndListener, children, childRef, ...props }, ref) => {
		const nodeRef = A$1(null);
		const mergedRef = useMergedRefs(nodeRef, childRef);
		const attachRef = (r) => {
			mergedRef(safeFindDOMNode(r));
		};
		const normalize = (callback) => (param) => {
			if (callback && nodeRef.current) callback(nodeRef.current, param);
		};
		const handleEnter = q$1(normalize(onEnter), [onEnter]);
		const handleEntering = q$1(normalize(onEntering), [onEntering]);
		const handleEntered = q$1(normalize(onEntered), [onEntered]);
		const handleExit = q$1(normalize(onExit), [onExit]);
		const handleExiting = q$1(normalize(onExiting), [onExiting]);
		const handleExited = q$1(normalize(onExited), [onExited]);
		const handleAddEndListener = q$1(normalize(addEndListener), [addEndListener]);
		return /*#__PURE__*/ u(Transition, {
			ref,
			...props,
			onEnter: handleEnter,
			onEntered: handleEntered,
			onEntering: handleEntering,
			onExit: handleExit,
			onExited: handleExited,
			onExiting: handleExiting,
			addEndListener: handleAddEndListener,
			nodeRef,
			children: typeof children === "function" ? (status, innerProps) => children(status, {
				...innerProps,
				ref: attachRef
			}) : /*#__PURE__*/ gn.cloneElement(children, { ref: attachRef })
		});
	});
	TransitionWrapper.displayName = "TransitionWrapper";
	//#endregion
	//#region node_modules/react-bootstrap/esm/Fade.js
	init_compat_module();
	const fadeStyles = {
		[ENTERING]: "show",
		[ENTERED]: "show"
	};
	const Fade = /*#__PURE__*/ D(({ className, children, transitionClasses = {}, onEnter, ...rest }, ref) => {
		const props = {
			in: false,
			timeout: 300,
			mountOnEnter: false,
			unmountOnExit: false,
			appear: false,
			...rest
		};
		const handleEnter = q$1((node, isAppearing) => {
			triggerBrowserReflow(node);
			onEnter?.(node, isAppearing);
		}, [onEnter]);
		return /*#__PURE__*/ u(TransitionWrapper, {
			ref,
			addEndListener: transitionEndListener,
			...props,
			onEnter: handleEnter,
			childRef: getChildRef(children),
			children: (status, innerProps) => /*#__PURE__*/ mn(children, {
				...innerProps,
				className: (0, import_classnames.default)("fade", className, children.props.className, fadeStyles[status], transitionClasses[status])
			})
		});
	});
	Fade.displayName = "Fade";
	//#endregion
	//#region node_modules/react-bootstrap/esm/CloseButton.js
	init_compat_module();
	const propTypes = {
		/** An accessible label indicating the relevant information about the Close Button. */
		"aria-label": import_prop_types.default.string,
		/** A callback fired after the Close Button is clicked. */
		onClick: import_prop_types.default.func,
		/**
		* Render different color variant for the button.
		*
		* Omitting this will render the default dark color.
		*/
		variant: import_prop_types.default.oneOf(["white"])
	};
	const CloseButton = /*#__PURE__*/ D(({ className, variant, "aria-label": ariaLabel = "Close", ...props }, ref) => /*#__PURE__*/ u("button", {
		ref,
		type: "button",
		className: (0, import_classnames.default)("btn-close", variant && `btn-close-${variant}`, className),
		"aria-label": ariaLabel,
		...props
	}));
	CloseButton.displayName = "CloseButton";
	CloseButton.propTypes = propTypes;
	//#endregion
	//#region node_modules/react-bootstrap/esm/Alert.js
	init_compat_module();
	const Alert = /*#__PURE__*/ D((uncontrolledProps, ref) => {
		const { bsPrefix, show = true, closeLabel = "Close alert", closeVariant, className, children, variant = "primary", onClose, dismissible, transition = Fade, ...props } = useUncontrolled(uncontrolledProps, { show: "onClose" });
		const prefix = useBootstrapPrefix(bsPrefix, "alert");
		const handleClose = useEventCallback$1((e) => {
			if (onClose) onClose(false, e);
		});
		const Transition = transition === true ? Fade : transition;
		const alert = /*#__PURE__*/ u("div", {
			role: "alert",
			...!Transition ? props : void 0,
			ref,
			className: (0, import_classnames.default)(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
			children: [dismissible && /*#__PURE__*/ u(CloseButton, {
				onClick: handleClose,
				"aria-label": closeLabel,
				variant: closeVariant
			}), children]
		});
		if (!Transition) return show ? alert : null;
		return /*#__PURE__*/ u(Transition, {
			unmountOnExit: true,
			...props,
			ref: void 0,
			in: show,
			children: alert
		});
	});
	Alert.displayName = "Alert";
	var Alert_default = Object.assign(Alert, {
		Link: AlertLink,
		Heading: AlertHeading
	});
	//#endregion
	//#region node_modules/react-bootstrap/esm/InputGroupContext.js
	init_compat_module();
	const context = /*#__PURE__*/ X$1(null);
	context.displayName = "InputGroupContext";
	//#endregion
	//#region node_modules/react-bootstrap/esm/InputGroupText.js
	init_compat_module();
	const InputGroupText = /*#__PURE__*/ D(({ className, bsPrefix, as: Component = "span", ...props }, ref) => {
		bsPrefix = useBootstrapPrefix(bsPrefix, "input-group-text");
		return /*#__PURE__*/ u(Component, {
			ref,
			className: (0, import_classnames.default)(className, bsPrefix),
			...props
		});
	});
	InputGroupText.displayName = "InputGroupText";
	//#endregion
	//#region node_modules/react-bootstrap/esm/InputGroup.js
	init_compat_module();
	const InputGroupCheckbox = (props) => /*#__PURE__*/ u(InputGroupText, { children: /*#__PURE__*/ u(FormCheckInput, {
		type: "checkbox",
		...props
	}) });
	const InputGroupRadio = (props) => /*#__PURE__*/ u(InputGroupText, { children: /*#__PURE__*/ u(FormCheckInput, {
		type: "radio",
		...props
	}) });
	const InputGroup = /*#__PURE__*/ D(({ bsPrefix, size, hasValidation, className, as: Component = "div", ...props }, ref) => {
		bsPrefix = useBootstrapPrefix(bsPrefix, "input-group");
		const contextValue = T$1(() => ({}), []);
		return /*#__PURE__*/ u(context.Provider, {
			value: contextValue,
			children: /*#__PURE__*/ u(Component, {
				ref,
				...props,
				className: (0, import_classnames.default)(className, bsPrefix, size && `${bsPrefix}-${size}`, hasValidation && "has-validation")
			})
		});
	});
	InputGroup.displayName = "InputGroup";
	var InputGroup_default = Object.assign(InputGroup, {
		Text: InputGroupText,
		Radio: InputGroupRadio,
		Checkbox: InputGroupCheckbox
	});
	//#endregion
	//#region src/styles/ChecksumOutputs.module.css
	var css_248z$2 = ".ChecksumOutputs-module_copyIcon__1lFBc {\n    font-size: larger;\n}\n\n.ChecksumOutputs-module_checksumsContainer__JVLB1 {\n    gap: 0.25rem;\n}";
	var ChecksumOutputs_module_default = {
		"copyIcon": "ChecksumOutputs-module_copyIcon__1lFBc",
		"checksumsContainer": "ChecksumOutputs-module_checksumsContainer__JVLB1"
	};
	styleInject(css_248z$2);
	//#endregion
	//#region src/ChecksumOutputs.tsx
	init_compat_module();
	const defaultCopiedState$1 = Object.freeze({
		md5Sum: false,
		sha1Sum: false,
		sha256Sum: false
	});
	function copiedStateReducer$1(state, newState) {
		return {
			...state,
			...newState
		};
	}
	function ChecksumOutputs({ md5Sum, sha1Sum, sha256Sum, className = "", copiedTimeout = 1e3 }) {
		const [verifyInput, setVerifyInput] = d("");
		const [copied, setCopied] = y(copiedStateReducer$1, defaultCopiedState$1);
		function onCopy(type) {
			setCopied({ [type]: true });
			setTimeout(() => setCopied({ [type]: false }), copiedTimeout);
		}
		const verificationResult = {
			[md5Sum]: "MD5",
			[sha1Sum]: "SHA1",
			[sha256Sum]: "SHA256"
		}[verifyInput] || "";
		const verifyClassname = "mt-2 mb-0";
		const verifyAlert = verifyInput !== "" ? verificationResult !== "" ? /* @__PURE__ */ gn.createElement(Alert_default, {
			variant: "success",
			className: verifyClassname
		}, "Verified with ", verificationResult) : /* @__PURE__ */ gn.createElement(Alert_default, {
			variant: "danger",
			className: verifyClassname
		}, "Verification failed") : null;
		return /* @__PURE__ */ gn.createElement("div", { className }, /* @__PURE__ */ gn.createElement("h2", null, "Checksums"), /* @__PURE__ */ gn.createElement("div", { className: `d-flex flex-column ${ChecksumOutputs_module_default.checksumsContainer}` }, /* @__PURE__ */ gn.createElement("div", { className: "d-flex" }, /* @__PURE__ */ gn.createElement(InputGroup_default, null, /* @__PURE__ */ gn.createElement(FloatingLabel, { label: "MD5SUM" }, /* @__PURE__ */ gn.createElement(Form_default.Control, {
			type: "text",
			value: md5Sum,
			disabled: true
		})), /* @__PURE__ */ gn.createElement(InputGroup_default.Text, null, /* @__PURE__ */ gn.createElement(import_lib.CopyToClipboard, {
			text: md5Sum,
			onCopy: () => onCopy("md5Sum")
		}, /* @__PURE__ */ gn.createElement("i", {
			className: `bi bi-clipboard2 ${ChecksumOutputs_module_default.copyIcon}`,
			hidden: copied.md5Sum
		})), /* @__PURE__ */ gn.createElement("i", {
			className: `bi bi-check ${ChecksumOutputs_module_default.copyIcon}`,
			hidden: !copied.md5Sum
		})))), /* @__PURE__ */ gn.createElement("div", { className: "d-flex" }, /* @__PURE__ */ gn.createElement(InputGroup_default, null, /* @__PURE__ */ gn.createElement(FloatingLabel, { label: "SHA1SUM" }, /* @__PURE__ */ gn.createElement(Form_default.Control, {
			type: "text",
			value: sha1Sum,
			disabled: true
		})), /* @__PURE__ */ gn.createElement(InputGroup_default.Text, null, /* @__PURE__ */ gn.createElement(import_lib.CopyToClipboard, {
			text: sha1Sum,
			onCopy: () => onCopy("sha1Sum")
		}, /* @__PURE__ */ gn.createElement("i", {
			className: `bi bi-clipboard2 ${ChecksumOutputs_module_default.copyIcon}`,
			hidden: copied.sha1Sum
		})), /* @__PURE__ */ gn.createElement("i", {
			className: `bi bi-check ${ChecksumOutputs_module_default.copyIcon}`,
			hidden: !copied.sha1Sum
		})))), /* @__PURE__ */ gn.createElement("div", { className: "d-flex" }, /* @__PURE__ */ gn.createElement(InputGroup_default, null, /* @__PURE__ */ gn.createElement(FloatingLabel, { label: "SHA256SUM" }, /* @__PURE__ */ gn.createElement(Form_default.Control, {
			type: "text",
			value: sha256Sum,
			disabled: true
		})), /* @__PURE__ */ gn.createElement(InputGroup_default.Text, null, /* @__PURE__ */ gn.createElement(import_lib.CopyToClipboard, {
			text: sha256Sum,
			onCopy: () => onCopy("sha256Sum")
		}, /* @__PURE__ */ gn.createElement("i", {
			className: `bi bi-clipboard2 ${ChecksumOutputs_module_default.copyIcon}`,
			hidden: copied.sha256Sum
		})), /* @__PURE__ */ gn.createElement("i", {
			className: `bi bi-check ${ChecksumOutputs_module_default.copyIcon}`,
			hidden: !copied.sha256Sum
		})))), /* @__PURE__ */ gn.createElement("div", { className: "d-flex" }, /* @__PURE__ */ gn.createElement(InputGroup_default, null, /* @__PURE__ */ gn.createElement(FloatingLabel, { label: "Verify" }, /* @__PURE__ */ gn.createElement(Form_default.Control, {
			type: "text",
			value: verifyInput,
			placeholder: "Enter a checksum to verify",
			onChange: (e) => setVerifyInput(e.target.value)
		}))))), verifyAlert);
	}
	//#endregion
	//#region node_modules/js-base64/base64.mjs
	var import_is_base64 = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		(function(root) {
			"use strict";
			function isBase64(v, opts) {
				if (v instanceof Boolean || typeof v === "boolean") return false;
				if (!(opts instanceof Object)) opts = {};
				if (opts.allowEmpty === false && v === "") return false;
				var regex = "(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?";
				var mimeRegex = "(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)";
				if (opts.mimeRequired === true) regex = mimeRegex + regex;
				else if (opts.allowMime === true) regex = mimeRegex + "?" + regex;
				if (opts.paddingRequired === false) regex = "(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}(==)?|[A-Za-z0-9+\\/]{3}=?)?";
				return new RegExp("^" + regex + "$", "gi").test(v);
			}
			if (typeof exports !== "undefined") {
				if (typeof module !== "undefined" && module.exports) exports = module.exports = isBase64;
				exports.isBase64 = isBase64;
			} else if (typeof define === "function" && define.amd) define([], function() {
				return isBase64;
			});
			else root.isBase64 = isBase64;
		})(exports);
	})))());
	/**
	*  base64.ts
	*
	*  Licensed under the BSD 3-Clause License.
	*    http://opensource.org/licenses/BSD-3-Clause
	*
	*  References:
	*    http://en.wikipedia.org/wiki/Base64
	*
	* @author Dan Kogai (https://github.com/dankogai)
	*/
	const version = "3.9.4";
	/**
	* @deprecated use lowercase `version`.
	*/
	const VERSION = version;
	const _TD = typeof TextDecoder === "function" ? new TextDecoder("utf-8", { ignoreBOM: true }) : void 0;
	const _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
	const b64chs = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
	const b64tab = ((a) => {
		let tab = {};
		a.forEach((c, i) => tab[c] = i);
		return tab;
	})(b64chs);
	const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
	const _fromCC = String.fromCharCode.bind(String);
	const _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
	const _mkUriSafe = (src) => src.replace(/=/g, "").replace(/[+\/]/g, (m0) => m0 == "+" ? "-" : "_");
	const _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, "");
	/**
	* polyfill version of `btoa`
	*/
	const btoaPolyfill = (bin) => {
		let u32, c0, c1, c2, asc = "";
		const pad = bin.length % 3;
		for (let i = 0; i < bin.length;) {
			if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255) throw new TypeError("invalid character found");
			u32 = c0 << 16 | c1 << 8 | c2;
			asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
		}
		return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
	};
	/**
	* does what `window.btoa` of web browsers do.
	* @param {String} bin binary string
	* @returns {string} Base64-encoded string
	*/
	const _btoa = typeof btoa === "function" ? (bin) => btoa(bin) : btoaPolyfill;
	const _fromUint8Array = typeof Uint8Array.prototype.toBase64 === "function" ? (u8a) => u8a.toBase64() : (u8a) => {
		const maxargs = 4096;
		let strs = [];
		for (let i = 0, l = u8a.length; i < l; i += maxargs) strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
		return _btoa(strs.join(""));
	};
	/**
	* converts a Uint8Array to a Base64 string.
	* @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
	* @returns {string} Base64 string
	*/
	const fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
	const cb_utob = (c) => {
		if (c.length < 2) {
			var cc = c.charCodeAt(0);
			return cc < 128 ? c : cc < 2048 ? _fromCC(192 | cc >>> 6) + _fromCC(128 | cc & 63) : _fromCC(224 | cc >>> 12 & 15) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
		} else {
			var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
			return _fromCC(240 | cc >>> 18 & 7) + _fromCC(128 | cc >>> 12 & 63) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
		}
	};
	const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\x00-\x7F]/g;
	/**
	* @deprecated should have been internal use only.
	* @param {string} src UTF-8 string
	* @returns {string} UTF-16 string
	*/
	const utob = (u) => u.replace(re_utob, cb_utob);
	const _encode = _TE ? (s) => _fromUint8Array(_TE.encode(s)) : (s) => _btoa(utob(s));
	/**
	* converts a UTF-8-encoded string to a Base64 string.
	* @param {boolean} [urlsafe] if `true` make the result URL-safe
	* @returns {string} Base64 string
	*/
	const encode = (src, urlsafe = false) => urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
	/**
	* converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
	* @returns {string} Base64 string
	*/
	const encodeURI = (src) => encode(src, true);
	const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
	const cb_btou = (cccc) => {
		switch (cccc.length) {
			case 4:
				var offset = ((7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3)) - 65536;
				return _fromCC((offset >>> 10) + 55296) + _fromCC((offset & 1023) + 56320);
			case 3: return _fromCC((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
			default: return _fromCC((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
		}
	};
	/**
	* @deprecated should have been internal use only.
	* @param {string} src UTF-16 string
	* @returns {string} UTF-8 string
	*/
	const btou = (b) => b.replace(re_btou, cb_btou);
	/**
	* polyfill version of `atob`
	*/
	const atobPolyfill = (asc) => {
		asc = asc.replace(/\s+/g, "");
		if (!b64re.test(asc)) throw new TypeError("malformed base64.");
		asc += "==".slice(2 - (asc.length & 3));
		let u24, r1, r2;
		let binArray = [];
		for (let i = 0; i < asc.length;) {
			u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
			if (r1 === 64) binArray.push(_fromCC(u24 >> 16 & 255));
			else if (r2 === 64) binArray.push(_fromCC(u24 >> 16 & 255, u24 >> 8 & 255));
			else binArray.push(_fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255));
		}
		return binArray.join("");
	};
	/**
	* does what `window.atob` of web browsers do.
	* @param {String} asc Base64-encoded string
	* @returns {string} binary string
	*/
	const _atob = typeof atob === "function" ? (asc) => atob(_tidyB64(asc)) : atobPolyfill;
	const _toUint8Array = typeof Uint8Array.fromBase64 === "function" ? (a) => Uint8Array.fromBase64(a) : (a) => _U8Afrom(_atob(a).split("").map((c) => c.charCodeAt(0)));
	/**
	* converts a Base64 string to a Uint8Array.
	*/
	const toUint8Array = (a) => _toUint8Array(_unURI(a));
	const _decode = _TD ? (a) => _TD.decode(_toUint8Array(a)) : (a) => btou(_atob(a));
	const _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == "-" ? "+" : "/"));
	/**
	* converts a Base64 string to a UTF-8 string.
	* @param {String} src Base64 string.  Both normal and URL-safe are supported
	* @returns {string} UTF-8 string
	*/
	const decode = (src) => _decode(_unURI(src));
	/**
	* check if a value is a valid Base64 string
	* @param {String} src a value to check
	*/
	const isValid = (src) => {
		if (typeof src !== "string") return false;
		const s = src.replace(/\s+/g, "").replace(/={0,2}$/, "");
		return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
	};
	const _noEnum = (v) => {
		return {
			value: v,
			enumerable: false,
			writable: true,
			configurable: true
		};
	};
	/**
	* extend String.prototype with relevant methods
	*/
	const extendString = function() {
		const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
		_add("fromBase64", function() {
			return decode(this);
		});
		_add("toBase64", function(urlsafe) {
			return encode(this, urlsafe);
		});
		_add("toBase64URI", function() {
			return encode(this, true);
		});
		_add("toBase64URL", function() {
			return encode(this, true);
		});
		_add("toUint8Array", function() {
			return toUint8Array(this);
		});
	};
	/**
	* extend Uint8Array.prototype with relevant methods
	*/
	const extendUint8Array = function() {
		const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
		_add("toBase64", function(urlsafe) {
			return fromUint8Array(this, urlsafe);
		});
		_add("toBase64URI", function() {
			return fromUint8Array(this, true);
		});
		_add("toBase64URL", function() {
			return fromUint8Array(this, true);
		});
	};
	/**
	* extend Builtin prototypes with relevant methods
	*/
	const extendBuiltins = () => {
		extendString();
		extendUint8Array();
	};
	const gBase64 = {
		version,
		VERSION,
		atob: _atob,
		atobPolyfill,
		btoa: _btoa,
		btoaPolyfill,
		fromBase64: decode,
		toBase64: encode,
		encode,
		encodeURI,
		encodeURL: encodeURI,
		utob,
		btou,
		decode,
		isValid,
		fromUint8Array,
		toUint8Array,
		extendString,
		extendUint8Array,
		extendBuiltins
	};
	//#endregion
	//#region src/styles/Encodings.module.css
	var css_248z$1 = ".Encodings-module_copyIcon__YjSg0 {\n    font-size: larger;\n}\n\n.Encodings-module_checksumsContainer__ITe9J {\n    gap: 0.25rem;\n}";
	var Encodings_module_default = {
		"copyIcon": "Encodings-module_copyIcon__YjSg0",
		"checksumsContainer": "Encodings-module_checksumsContainer__ITe9J"
	};
	styleInject(css_248z$1);
	//#endregion
	//#region src/Encodings.tsx
	init_compat_module();
	const defaultCopiedState = Object.freeze({
		base64encoding: false,
		base64decoding: false
	});
	function copiedStateReducer(state, newState) {
		return {
			...state,
			...newState
		};
	}
	function Encodings({ text, className = "", copiedTimeout = 1e3 }) {
		const [copied, setCopied] = y(copiedStateReducer, defaultCopiedState);
		function onCopy(type) {
			setCopied({ [type]: true });
			setTimeout(() => setCopied({ [type]: false }), copiedTimeout);
		}
		const base64encoding = text ? gBase64.encode(text) : "";
		const base64decoding = text && (0, import_is_base64.default)(text) ? gBase64.decode(text) : "";
		return /* @__PURE__ */ gn.createElement("div", { className }, /* @__PURE__ */ gn.createElement("h2", null, "Encodings"), /* @__PURE__ */ gn.createElement("div", { className: `d-flex flex-column ${Encodings_module_default.checksumsContainer}` }, /* @__PURE__ */ gn.createElement("div", { className: "d-flex" }, /* @__PURE__ */ gn.createElement(InputGroup_default, null, /* @__PURE__ */ gn.createElement(FloatingLabel, { label: "Base64 Encoding" }, /* @__PURE__ */ gn.createElement(Form_default.Control, {
			type: "text",
			value: base64encoding,
			disabled: true
		})), /* @__PURE__ */ gn.createElement(InputGroup_default.Text, null, /* @__PURE__ */ gn.createElement(import_lib.CopyToClipboard, {
			text: base64encoding,
			onCopy: () => onCopy("base64encoding")
		}, /* @__PURE__ */ gn.createElement("i", {
			className: `bi bi-clipboard2 ${Encodings_module_default.copyIcon}`,
			hidden: copied.base64encoding
		})), /* @__PURE__ */ gn.createElement("i", {
			className: `bi bi-check ${Encodings_module_default.copyIcon}`,
			hidden: !copied.base64encoding
		})))), /* @__PURE__ */ gn.createElement("div", { className: "d-flex" }, /* @__PURE__ */ gn.createElement(InputGroup_default, null, /* @__PURE__ */ gn.createElement(FloatingLabel, { label: "Base64 Decoding" }, /* @__PURE__ */ gn.createElement(Form_default.Control, {
			type: "text",
			value: base64decoding,
			disabled: true
		})), /* @__PURE__ */ gn.createElement(InputGroup_default.Text, null, /* @__PURE__ */ gn.createElement(import_lib.CopyToClipboard, {
			text: base64decoding,
			onCopy: () => onCopy("base64decoding")
		}, /* @__PURE__ */ gn.createElement("i", {
			className: `bi bi-clipboard2 ${Encodings_module_default.copyIcon}`,
			hidden: copied.base64decoding
		})), /* @__PURE__ */ gn.createElement("i", {
			className: `bi bi-check ${Encodings_module_default.copyIcon}`,
			hidden: !copied.base64decoding
		}))))));
	}
	//#endregion
	//#region src/styles/ChecksumVerifier.module.css
	var css_248z = ".ChecksumVerifier-module_mainContainer__OTmmM {\n    --gap: 1rem;\n    gap: var(--gap);\n    padding: var(--gap);\n}\n\n.ChecksumVerifier-module_components__lFxtb {\n    border-radius: 0.5rem;\n    background: #404040;\n    padding: 1rem;\n    text-align: center;\n    flex: 1 1 30%;\n    display: flex;\n    flex-direction: column;\n}";
	var ChecksumVerifier_module_default = {
		"mainContainer": "ChecksumVerifier-module_mainContainer__OTmmM",
		"components": "ChecksumVerifier-module_components__lFxtb"
	};
	styleInject(css_248z);
	//#endregion
	//#region src/ChecksumVerifier.tsx
	init_compat_module();
	const defaultChecksumValues = {
		fileId: -1,
		md5Sum: "",
		sha1Sum: "",
		sha256Sum: "",
		sha512Sum: ""
	};
	function checksumValuesUpdater(state, newState) {
		if (newState.fileId && newState.fileId != state.fileId) return {
			...defaultChecksumValues,
			fileId: newState.fileId
		};
		return {
			...state,
			...newState
		};
	}
	function resetWorkers({ md5Worker, sha1Worker, sha256Worker }) {
		[
			md5Worker,
			sha1Worker,
			sha256Worker
		].forEach((worker) => worker.current.terminate());
		md5Worker.current = new Worker(new URL("md5_worker.js", window.location.href));
		sha1Worker.current = new Worker(new URL("sha1_worker.js", window.location.href));
		sha256Worker.current = new Worker(new URL("sha256_worker.js", window.location.href));
	}
	function readSlice(file, start, end) {
		const newPromise = new Promise((resolve) => {
			const fileSlice = file.slice(start, end);
			const reader = new FileReader();
			reader.onload = function(event) {
				const result = event.target?.result;
				resolve(new Uint8Array(result));
			};
			reader.readAsArrayBuffer(fileSlice);
		});
		return () => newPromise;
	}
	const emptyWorker = new Worker(URL.createObjectURL(new Blob([""])));
	const chunkSize = 67108864;
	const numberOfChunksBuffer = 10;
	function ChecksumVerifier() {
		const [checksumValues, setChecksumValues] = y(checksumValuesUpdater, defaultChecksumValues);
		const [textValue, setTextValue] = d("");
		const [fileValue, setFileValue] = d("");
		const [fileProgress, setFileProgress] = d(-1);
		const fileId = A$1(0);
		const md5Worker = A$1(emptyWorker);
		const sha1Worker = A$1(emptyWorker);
		const sha256Worker = A$1(emptyWorker);
		const fileSliceQueue = A$1([]);
		const fileSize = A$1(0);
		const workerProgress = A$1({
			md5: 0,
			sha1: 0,
			sha256: 0
		});
		const slicePromiseChain = A$1(Promise.resolve());
		md5Worker.current.onmessage = ({ data }) => {
			if (data.checksum) setChecksumValues({ md5Sum: data.checksum });
			else if (data.progress) {
				workerProgress.current.md5 = data.progress;
				onWorkerProgress();
			}
		};
		sha1Worker.current.onmessage = ({ data }) => {
			if (data.checksum) setChecksumValues({ sha1Sum: data.checksum });
			else if (data.progress) {
				workerProgress.current.sha1 = data.progress;
				onWorkerProgress();
			}
		};
		sha256Worker.current.onmessage = ({ data }) => {
			if (data.checksum) setChecksumValues({ sha256Sum: data.checksum });
			else if (data.progress) {
				workerProgress.current.sha256 = data.progress;
				onWorkerProgress();
			}
		};
		const allWorkers = [
			md5Worker,
			sha1Worker,
			sha256Worker
		];
		function processSlice(file, start, sliceFileId) {
			return (data) => {
				return new Promise((resolve) => {
					if (fileId.current == sliceFileId) {
						const processedBytes = start + data.length;
						allWorkers.forEach((worker) => worker.current.postMessage({
							uint8Array: data,
							done: processedBytes >= file.size
						}));
						resolve();
					} else console.log("File changed, aborting slice processing.");
				});
			};
		}
		function onWorkerProgress() {
			const minProgress = Math.min(...Object.values(workerProgress.current));
			if (fileSize.current > 0) setFileProgress(100 * minProgress / fileSize.current);
			if (fileSliceQueue.current.length) {
				const bytesSent = fileSliceQueue.current[0].start;
				const bytesInChunk = fileSliceQueue.current[0].end - fileSliceQueue.current[0].start;
				const numberOfChunksBehind = Math.floor((bytesSent - minProgress) / bytesInChunk);
				const numberOfChunksToSend = numberOfChunksBuffer - numberOfChunksBehind;
				for (let i = 0; i < numberOfChunksToSend && fileSliceQueue.current.length; i++) {
					const { file, start, end, fileId } = fileSliceQueue.current.shift();
					slicePromiseChain.current = slicePromiseChain.current.then(readSlice(file, start, end)).then(processSlice(file, start, fileId));
				}
			}
		}
		function resetChecksumStates() {
			resetWorkers({
				md5Worker,
				sha1Worker,
				sha256Worker
			});
		}
		function resetChecksumValues() {
			setChecksumValues({ fileId: fileId.current });
		}
		function resetAll() {
			fileId.current++;
			fileSliceQueue.current = [];
			slicePromiseChain.current = Promise.resolve();
			fileSize.current = 0;
			resetChecksumStates();
			resetChecksumValues();
			setTextValue("");
			setFileValue("");
			setFileProgress(-1);
		}
		function readText(event) {
			const text = event.target.value;
			resetAll();
			setTextValue(text);
			if (text.length) [
				md5Worker,
				sha1Worker,
				sha256Worker
			].forEach((worker) => worker.current.postMessage({
				text,
				done: true
			}));
		}
		function readFile(event) {
			const file = event.target.files?.item(0);
			resetAll();
			if (file) {
				setFileValue(event.target.value);
				fileSize.current = file.size;
				for (let i = 0; i < file.size; i += chunkSize) fileSliceQueue.current.push({
					file,
					start: i,
					end: i + chunkSize,
					fileId: fileId.current
				});
				onWorkerProgress();
			}
		}
		const componentClasses = `text-center ${ChecksumVerifier_module_default.components}`;
		return /* @__PURE__ */ gn.createElement("div", { className: `text-center d-flex flex-wrap ${ChecksumVerifier_module_default.mainContainer}` }, /* @__PURE__ */ gn.createElement(ChecksumInputs, {
			readText,
			readFile,
			textValue,
			fileValue,
			fileProgress,
			className: componentClasses
		}), /* @__PURE__ */ gn.createElement(ChecksumOutputs, {
			...checksumValues,
			className: componentClasses
		}), /* @__PURE__ */ gn.createElement(Encodings, {
			text: textValue,
			className: componentClasses
		}));
	}
	//#endregion
	//#region src/index.tsx
	init_compat_module();
	createRoot(document.getElementById("root")).render(/* @__PURE__ */ gn.createElement(ChecksumVerifier, null));
	//#endregion
})();
