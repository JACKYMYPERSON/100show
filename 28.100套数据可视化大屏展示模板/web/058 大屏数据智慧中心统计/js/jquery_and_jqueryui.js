/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
;(function (e, t) {
  function n(e) {
    var t = e.length,
      n = lt.type(e)
    return lt.isWindow(e)
      ? !1
      : e.nodeType === 1 && t
      ? !0
      : n === 'array' ||
        (n !== 'function' &&
          (t === 0 || (typeof t == 'number' && t > 0 && t - 1 in e)))
  }
  function r(e) {
    var t = (Nt[e] = {})
    return (
      lt.each(e.match(ht) || [], function (e, n) {
        t[n] = !0
      }),
      t
    )
  }
  function i(e, n, r, i) {
    if (!lt.acceptData(e)) return
    var s,
      o,
      u = lt.expando,
      a = e.nodeType,
      f = a ? lt.cache : e,
      l = a ? e[u] : e[u] && u
    if ((!l || !f[l] || (!i && !f[l].data)) && r === t && typeof n == 'string')
      return
    l || (a ? (l = e[u] = tt.pop() || lt.guid++) : (l = u)),
      f[l] || (f[l] = a ? {} : { toJSON: lt.noop })
    if (typeof n == 'object' || typeof n == 'function')
      i ? (f[l] = lt.extend(f[l], n)) : (f[l].data = lt.extend(f[l].data, n))
    return (
      (o = f[l]),
      i || (o.data || (o.data = {}), (o = o.data)),
      r !== t && (o[lt.camelCase(n)] = r),
      typeof n == 'string'
        ? ((s = o[n]), s == null && (s = o[lt.camelCase(n)]))
        : (s = o),
      s
    )
  }
  function s(e, t, n) {
    if (!lt.acceptData(e)) return
    var r,
      i,
      s = e.nodeType,
      o = s ? lt.cache : e,
      a = s ? e[lt.expando] : lt.expando
    if (!o[a]) return
    if (t) {
      r = n ? o[a] : o[a].data
      if (r) {
        lt.isArray(t)
          ? (t = t.concat(lt.map(t, lt.camelCase)))
          : t in r
          ? (t = [t])
          : ((t = lt.camelCase(t)), t in r ? (t = [t]) : (t = t.split(' '))),
          (i = t.length)
        while (i--) delete r[t[i]]
        if (n ? !u(r) : !lt.isEmptyObject(r)) return
      }
    }
    if (!n) {
      delete o[a].data
      if (!u(o[a])) return
    }
    s
      ? lt.cleanData([e], !0)
      : lt.support.deleteExpando || o != o.window
      ? delete o[a]
      : (o[a] = null)
  }
  function o(e, n, r) {
    if (r === t && e.nodeType === 1) {
      var i = 'data-' + n.replace(kt, '-$1').toLowerCase()
      r = e.getAttribute(i)
      if (typeof r == 'string') {
        try {
          r =
            r === 'true'
              ? !0
              : r === 'false'
              ? !1
              : r === 'null'
              ? null
              : +r + '' === r
              ? +r
              : Ct.test(r)
              ? lt.parseJSON(r)
              : r
        } catch (s) {}
        lt.data(e, n, r)
      } else r = t
    }
    return r
  }
  function u(e) {
    var t
    for (t in e) {
      if (t === 'data' && lt.isEmptyObject(e[t])) continue
      if (t !== 'toJSON') return !1
    }
    return !0
  }
  function a() {
    return !0
  }
  function f() {
    return !1
  }
  function l() {
    try {
      return Q.activeElement
    } catch (e) {}
  }
  function c(e, t) {
    do e = e[t]
    while (e && e.nodeType !== 1)
    return e
  }
  function h(e, t, n) {
    if (lt.isFunction(t))
      return lt.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n
      })
    if (t.nodeType)
      return lt.grep(e, function (e) {
        return (e === t) !== n
      })
    if (typeof t == 'string') {
      if (Ut.test(t)) return lt.filter(t, e, n)
      t = lt.filter(t, e)
    }
    return lt.grep(e, function (e) {
      return lt.inArray(e, t) >= 0 !== n
    })
  }
  function p(e) {
    var t = Vt.split('|'),
      n = e.createDocumentFragment()
    if (n.createElement) while (t.length) n.createElement(t.pop())
    return n
  }
  function d(e, t) {
    return lt.nodeName(e, 'table') &&
      lt.nodeName(t.nodeType === 1 ? t : t.firstChild, 'tr')
      ? e.getElementsByTagName('tbody')[0] ||
          e.appendChild(e.ownerDocument.createElement('tbody'))
      : e
  }
  function v(e) {
    return (e.type = (lt.find.attr(e, 'type') !== null) + '/' + e.type), e
  }
  function m(e) {
    var t = sn.exec(e.type)
    return t ? (e.type = t[1]) : e.removeAttribute('type'), e
  }
  function g(e, t) {
    var n,
      r = 0
    for (; (n = e[r]) != null; r++)
      lt._data(n, 'globalEval', !t || lt._data(t[r], 'globalEval'))
  }
  function y(e, t) {
    if (t.nodeType !== 1 || !lt.hasData(e)) return
    var n,
      r,
      i,
      s = lt._data(e),
      o = lt._data(t, s),
      u = s.events
    if (u) {
      delete o.handle, (o.events = {})
      for (n in u)
        for (r = 0, i = u[n].length; r < i; r++) lt.event.add(t, n, u[n][r])
    }
    o.data && (o.data = lt.extend({}, o.data))
  }
  function b(e, t) {
    var n, r, i
    if (t.nodeType !== 1) return
    n = t.nodeName.toLowerCase()
    if (!lt.support.noCloneEvent && t[lt.expando]) {
      i = lt._data(t)
      for (r in i.events) lt.removeEvent(t, r, i.handle)
      t.removeAttribute(lt.expando)
    }
    if (n === 'script' && t.text !== e.text) (v(t).text = e.text), m(t)
    else if (n === 'object')
      t.parentNode && (t.outerHTML = e.outerHTML),
        lt.support.html5Clone &&
          e.innerHTML &&
          !lt.trim(t.innerHTML) &&
          (t.innerHTML = e.innerHTML)
    else if (n === 'input' && tn.test(e.type))
      (t.defaultChecked = t.checked = e.checked),
        t.value !== e.value && (t.value = e.value)
    else if (n === 'option') t.defaultSelected = t.selected = e.defaultSelected
    else if (n === 'input' || n === 'textarea') t.defaultValue = e.defaultValue
  }
  function w(e, n) {
    var r,
      i,
      s = 0,
      o =
        typeof e.getElementsByTagName !== J
          ? e.getElementsByTagName(n || '*')
          : typeof e.querySelectorAll !== J
          ? e.querySelectorAll(n || '*')
          : t
    if (!o)
      for (o = [], r = e.childNodes || e; (i = r[s]) != null; s++)
        !n || lt.nodeName(i, n) ? o.push(i) : lt.merge(o, w(i, n))
    return n === t || (n && lt.nodeName(e, n)) ? lt.merge([e], o) : o
  }
  function E(e) {
    tn.test(e.type) && (e.defaultChecked = e.checked)
  }
  function S(e, t) {
    if (t in e) return t
    var n = t.charAt(0).toUpperCase() + t.slice(1),
      r = t,
      i = Nn.length
    while (i--) {
      t = Nn[i] + n
      if (t in e) return t
    }
    return r
  }
  function x(e, t) {
    return (
      (e = t || e),
      lt.css(e, 'display') === 'none' || !lt.contains(e.ownerDocument, e)
    )
  }
  function T(e, t) {
    var n,
      r,
      i,
      s = [],
      o = 0,
      u = e.length
    for (; o < u; o++) {
      r = e[o]
      if (!r.style) continue
      ;(s[o] = lt._data(r, 'olddisplay')),
        (n = r.style.display),
        t
          ? (!s[o] && n === 'none' && (r.style.display = ''),
            r.style.display === '' &&
              x(r) &&
              (s[o] = lt._data(r, 'olddisplay', L(r.nodeName))))
          : s[o] ||
            ((i = x(r)),
            ((n && n !== 'none') || !i) &&
              lt._data(r, 'olddisplay', i ? n : lt.css(r, 'display')))
    }
    for (o = 0; o < u; o++) {
      r = e[o]
      if (!r.style) continue
      if (!t || r.style.display === 'none' || r.style.display === '')
        r.style.display = t ? s[o] || '' : 'none'
    }
    return e
  }
  function N(e, t, n) {
    var r = yn.exec(t)
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t
  }
  function C(e, t, n, r, i) {
    var s = n === (r ? 'border' : 'content') ? 4 : t === 'width' ? 1 : 0,
      o = 0
    for (; s < 4; s += 2)
      n === 'margin' && (o += lt.css(e, n + Tn[s], !0, i)),
        r
          ? (n === 'content' && (o -= lt.css(e, 'padding' + Tn[s], !0, i)),
            n !== 'margin' &&
              (o -= lt.css(e, 'border' + Tn[s] + 'Width', !0, i)))
          : ((o += lt.css(e, 'padding' + Tn[s], !0, i)),
            n !== 'padding' &&
              (o += lt.css(e, 'border' + Tn[s] + 'Width', !0, i)))
    return o
  }
  function k(e, t, n) {
    var r = !0,
      i = t === 'width' ? e.offsetWidth : e.offsetHeight,
      s = cn(e),
      o = lt.support.boxSizing && lt.css(e, 'boxSizing', !1, s) === 'border-box'
    if (i <= 0 || i == null) {
      i = hn(e, t, s)
      if (i < 0 || i == null) i = e.style[t]
      if (bn.test(i)) return i
      ;(r = o && (lt.support.boxSizingReliable || i === e.style[t])),
        (i = parseFloat(i) || 0)
    }
    return i + C(e, t, n || (o ? 'border' : 'content'), r, s) + 'px'
  }
  function L(e) {
    var t = Q,
      n = En[e]
    if (!n) {
      n = A(e, t)
      if (n === 'none' || !n)
        (ln = (
          ln ||
          lt("<iframe frameborder='0' width='0' height='0'/>").css(
            'cssText',
            'display:block !important'
          )
        ).appendTo(t.documentElement)),
          (t = (ln[0].contentWindow || ln[0].contentDocument).document),
          t.write('<!doctype html><html><body>'),
          t.close(),
          (n = A(e, t)),
          ln.detach()
      En[e] = n
    }
    return n
  }
  function A(e, t) {
    var n = lt(t.createElement(e)).appendTo(t.body),
      r = lt.css(n[0], 'display')
    return n.remove(), r
  }
  function O(e, t, n, r) {
    var i
    if (lt.isArray(t))
      lt.each(t, function (t, i) {
        n || kn.test(e)
          ? r(e, i)
          : O(e + '[' + (typeof i == 'object' ? t : '') + ']', i, n, r)
      })
    else if (!n && lt.type(t) === 'object')
      for (i in t) O(e + '[' + i + ']', t[i], n, r)
    else r(e, t)
  }
  function M(e) {
    return function (t, n) {
      typeof t != 'string' && ((n = t), (t = '*'))
      var r,
        i = 0,
        s = t.toLowerCase().match(ht) || []
      if (lt.isFunction(n))
        while ((r = s[i++]))
          r[0] === '+'
            ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n)
    }
  }
  function _(e, t, n, r) {
    function i(u) {
      var a
      return (
        (s[u] = !0),
        lt.each(e[u] || [], function (e, u) {
          var f = u(t, n, r)
          if (typeof f == 'string' && !o && !s[f])
            return t.dataTypes.unshift(f), i(f), !1
          if (o) return !(a = f)
        }),
        a
      )
    }
    var s = {},
      o = e === Wn
    return i(t.dataTypes[0]) || (!s['*'] && i('*'))
  }
  function D(e, n) {
    var r,
      i,
      s = lt.ajaxSettings.flatOptions || {}
    for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i])
    return r && lt.extend(!0, e, r), e
  }
  function P(e, n, r) {
    var i,
      s,
      o,
      u,
      a = e.contents,
      f = e.dataTypes
    while (f[0] === '*')
      f.shift(),
        s === t && (s = e.mimeType || n.getResponseHeader('Content-Type'))
    if (s)
      for (u in a)
        if (a[u] && a[u].test(s)) {
          f.unshift(u)
          break
        }
    if (f[0] in r) o = f[0]
    else {
      for (u in r) {
        if (!f[0] || e.converters[u + ' ' + f[0]]) {
          o = u
          break
        }
        i || (i = u)
      }
      o = o || i
    }
    if (o) return o !== f[0] && f.unshift(o), r[o]
  }
  function H(e, t, n, r) {
    var i,
      s,
      o,
      u,
      a,
      f = {},
      l = e.dataTypes.slice()
    if (l[1]) for (o in e.converters) f[o.toLowerCase()] = e.converters[o]
    s = l.shift()
    while (s) {
      e.responseFields[s] && (n[e.responseFields[s]] = t),
        !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (a = s),
        (s = l.shift())
      if (s)
        if (s === '*') s = a
        else if (a !== '*' && a !== s) {
          o = f[a + ' ' + s] || f['* ' + s]
          if (!o)
            for (i in f) {
              u = i.split(' ')
              if (u[1] === s) {
                o = f[a + ' ' + u[0]] || f['* ' + u[0]]
                if (o) {
                  o === !0
                    ? (o = f[i])
                    : f[i] !== !0 && ((s = u[0]), l.unshift(u[1]))
                  break
                }
              }
            }
          if (o !== !0)
            if (o && e['throws']) t = o(t)
            else
              try {
                t = o(t)
              } catch (c) {
                return {
                  state: 'parsererror',
                  error: o ? c : 'No conversion from ' + a + ' to ' + s
                }
              }
        }
    }
    return { state: 'success', data: t }
  }
  function B() {
    try {
      return new e.XMLHttpRequest()
    } catch (t) {}
  }
  function j() {
    try {
      return new e.ActiveXObject('Microsoft.XMLHTTP')
    } catch (t) {}
  }
  function F() {
    return (
      setTimeout(function () {
        Zn = t
      }),
      (Zn = lt.now())
    )
  }
  function I(e, t, n) {
    var r,
      i = (sr[t] || []).concat(sr['*']),
      s = 0,
      o = i.length
    for (; s < o; s++) if ((r = i[s].call(n, t, e))) return r
  }
  function q(e, t, n) {
    var r,
      i,
      s = 0,
      o = ir.length,
      u = lt.Deferred().always(function () {
        delete a.elem
      }),
      a = function () {
        if (i) return !1
        var t = Zn || F(),
          n = Math.max(0, f.startTime + f.duration - t),
          r = n / f.duration || 0,
          s = 1 - r,
          o = 0,
          a = f.tweens.length
        for (; o < a; o++) f.tweens[o].run(s)
        return (
          u.notifyWith(e, [f, s, n]),
          s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
        )
      },
      f = u.promise({
        elem: e,
        props: lt.extend({}, t),
        opts: lt.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Zn || F(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = lt.Tween(
            e,
            f.opts,
            t,
            n,
            f.opts.specialEasing[t] || f.opts.easing
          )
          return f.tweens.push(r), r
        },
        stop: function (t) {
          var n = 0,
            r = t ? f.tweens.length : 0
          if (i) return this
          i = !0
          for (; n < r; n++) f.tweens[n].run(1)
          return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
        }
      }),
      l = f.props
    R(l, f.opts.specialEasing)
    for (; s < o; s++) {
      r = ir[s].call(f, e, l, f.opts)
      if (r) return r
    }
    return (
      lt.map(l, I, f),
      lt.isFunction(f.opts.start) && f.opts.start.call(e, f),
      lt.fx.timer(lt.extend(a, { elem: e, anim: f, queue: f.opts.queue })),
      f
        .progress(f.opts.progress)
        .done(f.opts.done, f.opts.complete)
        .fail(f.opts.fail)
        .always(f.opts.always)
    )
  }
  function R(e, t) {
    var n, r, i, s, o
    for (n in e) {
      ;(r = lt.camelCase(n)),
        (i = t[r]),
        (s = e[n]),
        lt.isArray(s) && ((i = s[1]), (s = e[n] = s[0])),
        n !== r && ((e[r] = s), delete e[n]),
        (o = lt.cssHooks[r])
      if (o && 'expand' in o) {
        ;(s = o.expand(s)), delete e[r]
        for (n in s) n in e || ((e[n] = s[n]), (t[n] = i))
      } else t[r] = i
    }
  }
  function U(e, t, n) {
    var r,
      i,
      s,
      o,
      u,
      a,
      f = this,
      l = {},
      c = e.style,
      h = e.nodeType && x(e),
      p = lt._data(e, 'fxshow')
    n.queue ||
      ((u = lt._queueHooks(e, 'fx')),
      u.unqueued == null &&
        ((u.unqueued = 0),
        (a = u.empty.fire),
        (u.empty.fire = function () {
          u.unqueued || a()
        })),
      u.unqueued++,
      f.always(function () {
        f.always(function () {
          u.unqueued--, lt.queue(e, 'fx').length || u.empty.fire()
        })
      })),
      e.nodeType === 1 &&
        ('height' in t || 'width' in t) &&
        ((n.overflow = [c.overflow, c.overflowX, c.overflowY]),
        lt.css(e, 'display') === 'inline' &&
          lt.css(e, 'float') === 'none' &&
          (!lt.support.inlineBlockNeedsLayout || L(e.nodeName) === 'inline'
            ? (c.display = 'inline-block')
            : (c.zoom = 1))),
      n.overflow &&
        ((c.overflow = 'hidden'),
        lt.support.shrinkWrapBlocks ||
          f.always(function () {
            ;(c.overflow = n.overflow[0]),
              (c.overflowX = n.overflow[1]),
              (c.overflowY = n.overflow[2])
          }))
    for (r in t) {
      i = t[r]
      if (tr.exec(i)) {
        delete t[r], (s = s || i === 'toggle')
        if (i === (h ? 'hide' : 'show')) continue
        l[r] = (p && p[r]) || lt.style(e, r)
      }
    }
    if (!lt.isEmptyObject(l)) {
      p ? 'hidden' in p && (h = p.hidden) : (p = lt._data(e, 'fxshow', {})),
        s && (p.hidden = !h),
        h
          ? lt(e).show()
          : f.done(function () {
              lt(e).hide()
            }),
        f.done(function () {
          var t
          lt._removeData(e, 'fxshow')
          for (t in l) lt.style(e, t, l[t])
        })
      for (r in l)
        (o = I(h ? p[r] : 0, r, f)),
          r in p ||
            ((p[r] = o.start),
            h &&
              ((o.end = o.start),
              (o.start = r === 'width' || r === 'height' ? 1 : 0)))
    }
  }
  function z(e, t, n, r, i) {
    return new z.prototype.init(e, t, n, r, i)
  }
  function W(e, t) {
    var n,
      r = { height: e },
      i = 0
    t = t ? 1 : 0
    for (; i < 4; i += 2 - t)
      (n = Tn[i]), (r['margin' + n] = r['padding' + n] = e)
    return t && (r.opacity = r.width = e), r
  }
  function X(e) {
    return lt.isWindow(e)
      ? e
      : e.nodeType === 9
      ? e.defaultView || e.parentWindow
      : !1
  }
  var V,
    $,
    J = typeof t,
    K = e.location,
    Q = e.document,
    G = Q.documentElement,
    Y = e.jQuery,
    Z = e.$,
    et = {},
    tt = [],
    nt = '1.10.2',
    rt = tt.concat,
    it = tt.push,
    st = tt.slice,
    ot = tt.indexOf,
    ut = et.toString,
    at = et.hasOwnProperty,
    ft = nt.trim,
    lt = function (e, t) {
      return new lt.fn.init(e, t, $)
    },
    ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ht = /\S+/g,
    pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    vt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    mt = /^[\],:{}\s]*$/,
    gt = /(?:^|:|,)(?:\s*\[)+/g,
    yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    wt = /^-ms-/,
    Et = /-([\da-z])/gi,
    St = function (e, t) {
      return t.toUpperCase()
    },
    xt = function (e) {
      if (
        Q.addEventListener ||
        e.type === 'load' ||
        Q.readyState === 'complete'
      )
        Tt(), lt.ready()
    },
    Tt = function () {
      Q.addEventListener
        ? (Q.removeEventListener('DOMContentLoaded', xt, !1),
          e.removeEventListener('load', xt, !1))
        : (Q.detachEvent('onreadystatechange', xt), e.detachEvent('onload', xt))
    }
  ;(lt.fn = lt.prototype =
    {
      jquery: nt,
      constructor: lt,
      init: function (e, n, r) {
        var i, s
        if (!e) return this
        if (typeof e == 'string') {
          e.charAt(0) === '<' && e.charAt(e.length - 1) === '>' && e.length >= 3
            ? (i = [null, e, null])
            : (i = dt.exec(e))
          if (i && (i[1] || !n)) {
            if (i[1]) {
              ;(n = n instanceof lt ? n[0] : n),
                lt.merge(
                  this,
                  lt.parseHTML(
                    i[1],
                    n && n.nodeType ? n.ownerDocument || n : Q,
                    !0
                  )
                )
              if (vt.test(i[1]) && lt.isPlainObject(n))
                for (i in n)
                  lt.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i])
              return this
            }
            s = Q.getElementById(i[2])
            if (s && s.parentNode) {
              if (s.id !== i[2]) return r.find(e)
              ;(this.length = 1), (this[0] = s)
            }
            return (this.context = Q), (this.selector = e), this
          }
          return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
        }
        return e.nodeType
          ? ((this.context = this[0] = e), (this.length = 1), this)
          : lt.isFunction(e)
          ? r.ready(e)
          : (e.selector !== t &&
              ((this.selector = e.selector), (this.context = e.context)),
            lt.makeArray(e, this))
      },
      selector: '',
      length: 0,
      toArray: function () {
        return st.call(this)
      },
      get: function (e) {
        return e == null
          ? this.toArray()
          : e < 0
          ? this[this.length + e]
          : this[e]
      },
      pushStack: function (e) {
        var t = lt.merge(this.constructor(), e)
        return (t.prevObject = this), (t.context = this.context), t
      },
      each: function (e, t) {
        return lt.each(this, e, t)
      },
      ready: function (e) {
        return lt.ready.promise().done(e), this
      },
      slice: function () {
        return this.pushStack(st.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0)
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      map: function (e) {
        return this.pushStack(
          lt.map(this, function (t, n) {
            return e.call(t, n, t)
          })
        )
      },
      end: function () {
        return this.prevObject || this.constructor(null)
      },
      push: it,
      sort: [].sort,
      splice: [].splice
    }),
    (lt.fn.init.prototype = lt.fn),
    (lt.extend = lt.fn.extend =
      function () {
        var e,
          n,
          r,
          i,
          s,
          o,
          u = arguments[0] || {},
          a = 1,
          f = arguments.length,
          l = !1
        typeof u == 'boolean' && ((l = u), (u = arguments[1] || {}), (a = 2)),
          typeof u != 'object' && !lt.isFunction(u) && (u = {}),
          f === a && ((u = this), --a)
        for (; a < f; a++)
          if ((s = arguments[a]) != null)
            for (i in s) {
              ;(e = u[i]), (r = s[i])
              if (u === r) continue
              l && r && (lt.isPlainObject(r) || (n = lt.isArray(r)))
                ? (n
                    ? ((n = !1), (o = e && lt.isArray(e) ? e : []))
                    : (o = e && lt.isPlainObject(e) ? e : {}),
                  (u[i] = lt.extend(l, o, r)))
                : r !== t && (u[i] = r)
            }
        return u
      }),
    lt.extend({
      expando: 'jQuery' + (nt + Math.random()).replace(/\D/g, ''),
      noConflict: function (t) {
        return (
          e.$ === lt && (e.$ = Z), t && e.jQuery === lt && (e.jQuery = Y), lt
        )
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? lt.readyWait++ : lt.ready(!0)
      },
      ready: function (e) {
        if (e === !0 ? --lt.readyWait : lt.isReady) return
        if (!Q.body) return setTimeout(lt.ready)
        lt.isReady = !0
        if (e !== !0 && --lt.readyWait > 0) return
        V.resolveWith(Q, [lt]),
          lt.fn.trigger && lt(Q).trigger('ready').off('ready')
      },
      isFunction: function (e) {
        return lt.type(e) === 'function'
      },
      isArray:
        Array.isArray ||
        function (e) {
          return lt.type(e) === 'array'
        },
      isWindow: function (e) {
        return e != null && e == e.window
      },
      isNumeric: function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
      },
      type: function (e) {
        return e == null
          ? String(e)
          : typeof e == 'object' || typeof e == 'function'
          ? et[ut.call(e)] || 'object'
          : typeof e
      },
      isPlainObject: function (e) {
        var n
        if (!e || lt.type(e) !== 'object' || e.nodeType || lt.isWindow(e))
          return !1
        try {
          if (
            e.constructor &&
            !at.call(e, 'constructor') &&
            !at.call(e.constructor.prototype, 'isPrototypeOf')
          )
            return !1
        } catch (r) {
          return !1
        }
        if (lt.support.ownLast) for (n in e) return at.call(e, n)
        for (n in e);
        return n === t || at.call(e, n)
      },
      isEmptyObject: function (e) {
        var t
        for (t in e) return !1
        return !0
      },
      error: function (e) {
        throw new Error(e)
      },
      parseHTML: function (e, t, n) {
        if (!e || typeof e != 'string') return null
        typeof t == 'boolean' && ((n = t), (t = !1)), (t = t || Q)
        var r = vt.exec(e),
          i = !n && []
        return r
          ? [t.createElement(r[1])]
          : ((r = lt.buildFragment([e], t, i)),
            i && lt(i).remove(),
            lt.merge([], r.childNodes))
      },
      parseJSON: function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t)
        if (t === null) return t
        if (typeof t == 'string') {
          t = lt.trim(t)
          if (t && mt.test(t.replace(yt, '@').replace(bt, ']').replace(gt, '')))
            return new Function('return ' + t)()
        }
        lt.error('Invalid JSON: ' + t)
      },
      parseXML: function (n) {
        var r, i
        if (!n || typeof n != 'string') return null
        try {
          e.DOMParser
            ? ((i = new DOMParser()), (r = i.parseFromString(n, 'text/xml')))
            : ((r = new ActiveXObject('Microsoft.XMLDOM')),
              (r.async = 'false'),
              r.loadXML(n))
        } catch (s) {
          r = t
        }
        return (
          (!r ||
            !r.documentElement ||
            r.getElementsByTagName('parsererror').length) &&
            lt.error('Invalid XML: ' + n),
          r
        )
      },
      noop: function () {},
      globalEval: function (t) {
        t &&
          lt.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t)
            }
          )(t)
      },
      camelCase: function (e) {
        return e.replace(wt, 'ms-').replace(Et, St)
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function (e, t, r) {
        var i,
          s = 0,
          o = e.length,
          u = n(e)
        if (r)
          if (u)
            for (; s < o; s++) {
              i = t.apply(e[s], r)
              if (i === !1) break
            }
          else
            for (s in e) {
              i = t.apply(e[s], r)
              if (i === !1) break
            }
        else if (u)
          for (; s < o; s++) {
            i = t.call(e[s], s, e[s])
            if (i === !1) break
          }
        else
          for (s in e) {
            i = t.call(e[s], s, e[s])
            if (i === !1) break
          }
        return e
      },
      trim:
        ft && !ft.call('')
          ? function (e) {
              return e == null ? '' : ft.call(e)
            }
          : function (e) {
              return e == null ? '' : (e + '').replace(pt, '')
            },
      makeArray: function (e, t) {
        var r = t || []
        return (
          e != null &&
            (n(Object(e))
              ? lt.merge(r, typeof e == 'string' ? [e] : e)
              : it.call(r, e)),
          r
        )
      },
      inArray: function (e, t, n) {
        var r
        if (t) {
          if (ot) return ot.call(t, e, n)
          ;(r = t.length), (n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0)
          for (; n < r; n++) if (n in t && t[n] === e) return n
        }
        return -1
      },
      merge: function (e, n) {
        var r = n.length,
          i = e.length,
          s = 0
        if (typeof r == 'number') for (; s < r; s++) e[i++] = n[s]
        else while (n[s] !== t) e[i++] = n[s++]
        return (e.length = i), e
      },
      grep: function (e, t, n) {
        var r,
          i = [],
          s = 0,
          o = e.length
        n = !!n
        for (; s < o; s++) (r = !!t(e[s], s)), n !== r && i.push(e[s])
        return i
      },
      map: function (e, t, r) {
        var i,
          s = 0,
          o = e.length,
          u = n(e),
          a = []
        if (u)
          for (; s < o; s++) (i = t(e[s], s, r)), i != null && (a[a.length] = i)
        else for (s in e) (i = t(e[s], s, r)), i != null && (a[a.length] = i)
        return rt.apply([], a)
      },
      guid: 1,
      proxy: function (e, n) {
        var r, i, s
        return (
          typeof n == 'string' && ((s = e[n]), (n = e), (e = s)),
          lt.isFunction(e)
            ? ((r = st.call(arguments, 2)),
              (i = function () {
                return e.apply(n || this, r.concat(st.call(arguments)))
              }),
              (i.guid = e.guid = e.guid || lt.guid++),
              i)
            : t
        )
      },
      access: function (e, n, r, i, s, o, u) {
        var a = 0,
          f = e.length,
          l = r == null
        if (lt.type(r) === 'object') {
          s = !0
          for (a in r) lt.access(e, n, a, r[a], !0, o, u)
        } else if (i !== t) {
          ;(s = !0),
            lt.isFunction(i) || (u = !0),
            l &&
              (u
                ? (n.call(e, i), (n = null))
                : ((l = n),
                  (n = function (e, t, n) {
                    return l.call(lt(e), n)
                  })))
          if (n)
            for (; a < f; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
        }
        return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
      },
      now: function () {
        return new Date().getTime()
      },
      swap: function (e, t, n, r) {
        var i,
          s,
          o = {}
        for (s in t) (o[s] = e.style[s]), (e.style[s] = t[s])
        i = n.apply(e, r || [])
        for (s in t) e.style[s] = o[s]
        return i
      }
    }),
    (lt.ready.promise = function (t) {
      if (!V) {
        V = lt.Deferred()
        if (Q.readyState === 'complete') setTimeout(lt.ready)
        else if (Q.addEventListener)
          Q.addEventListener('DOMContentLoaded', xt, !1),
            e.addEventListener('load', xt, !1)
        else {
          Q.attachEvent('onreadystatechange', xt), e.attachEvent('onload', xt)
          var n = !1
          try {
            n = e.frameElement == null && Q.documentElement
          } catch (r) {}
          n &&
            n.doScroll &&
            (function i() {
              if (!lt.isReady) {
                try {
                  n.doScroll('left')
                } catch (e) {
                  return setTimeout(i, 50)
                }
                Tt(), lt.ready()
              }
            })()
        }
      }
      return V.promise(t)
    }),
    lt.each(
      'Boolean Number String Function Array Date RegExp Object Error'.split(
        ' '
      ),
      function (e, t) {
        et['[object ' + t + ']'] = t.toLowerCase()
      }
    ),
    ($ = lt(Q)),
    (function (e, t) {
      function n(e, t, n, r) {
        var i, s, o, u, a, f, l, c, d, v
        ;(t ? t.ownerDocument || t : q) !== _ && M(t),
          (t = t || _),
          (n = n || [])
        if (!e || typeof e != 'string') return n
        if ((u = t.nodeType) !== 1 && u !== 9) return []
        if (P && !r) {
          if ((i = bt.exec(e)))
            if ((o = i[1])) {
              if (u === 9) {
                s = t.getElementById(o)
                if (!s || !s.parentNode) return n
                if (s.id === o) return n.push(s), n
              } else if (
                t.ownerDocument &&
                (s = t.ownerDocument.getElementById(o)) &&
                F(t, s) &&
                s.id === o
              )
                return n.push(s), n
            } else {
              if (i[2]) return et.apply(n, t.getElementsByTagName(e)), n
              if (
                (o = i[3]) &&
                x.getElementsByClassName &&
                t.getElementsByClassName
              )
                return et.apply(n, t.getElementsByClassName(o)), n
            }
          if (x.qsa && (!H || !H.test(e))) {
            ;(c = l = I), (d = t), (v = u === 9 && e)
            if (u === 1 && t.nodeName.toLowerCase() !== 'object') {
              ;(f = h(e)),
                (l = t.getAttribute('id'))
                  ? (c = l.replace(St, '\\$&'))
                  : t.setAttribute('id', c),
                (c = "[id='" + c + "'] "),
                (a = f.length)
              while (a--) f[a] = c + p(f[a])
              ;(d = (pt.test(e) && t.parentNode) || t), (v = f.join(','))
            }
            if (v)
              try {
                return et.apply(n, d.querySelectorAll(v)), n
              } catch (m) {
              } finally {
                l || t.removeAttribute('id')
              }
          }
        }
        return E(e.replace(ft, '$1'), t, n, r)
      }
      function r() {
        function e(n, r) {
          return (
            t.push((n += ' ')) > N.cacheLength && delete e[t.shift()],
            (e[n] = r)
          )
        }
        var t = []
        return e
      }
      function i(e) {
        return (e[I] = !0), e
      }
      function s(e) {
        var t = _.createElement('div')
        try {
          return !!e(t)
        } catch (n) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null)
        }
      }
      function o(e, t) {
        var n = e.split('|'),
          r = e.length
        while (r--) N.attrHandle[n[r]] = t
      }
      function u(e, t) {
        var n = t && e,
          r =
            n &&
            e.nodeType === 1 &&
            t.nodeType === 1 &&
            (~t.sourceIndex || K) - (~e.sourceIndex || K)
        if (r) return r
        if (n) while ((n = n.nextSibling)) if (n === t) return -1
        return e ? 1 : -1
      }
      function a(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase()
          return n === 'input' && t.type === e
        }
      }
      function f(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase()
          return (n === 'input' || n === 'button') && t.type === e
        }
      }
      function l(e) {
        return i(function (t) {
          return (
            (t = +t),
            i(function (n, r) {
              var i,
                s = e([], n.length, t),
                o = s.length
              while (o--) n[(i = s[o])] && (n[i] = !(r[i] = n[i]))
            })
          )
        })
      }
      function c() {}
      function h(e, t) {
        var r,
          i,
          s,
          o,
          u,
          a,
          f,
          l = W[e + ' ']
        if (l) return t ? 0 : l.slice(0)
        ;(u = e), (a = []), (f = N.preFilter)
        while (u) {
          if (!r || (i = ct.exec(u)))
            i && (u = u.slice(i[0].length) || u), a.push((s = []))
          r = !1
          if ((i = ht.exec(u)))
            (r = i.shift()),
              s.push({ value: r, type: i[0].replace(ft, ' ') }),
              (u = u.slice(r.length))
          for (o in N.filter)
            (i = gt[o].exec(u)) &&
              (!f[o] || (i = f[o](i))) &&
              ((r = i.shift()),
              s.push({ value: r, type: o, matches: i }),
              (u = u.slice(r.length)))
          if (!r) break
        }
        return t ? u.length : u ? n.error(e) : W(e, a).slice(0)
      }
      function p(e) {
        var t = 0,
          n = e.length,
          r = ''
        for (; t < n; t++) r += e[t].value
        return r
      }
      function d(e, t, n) {
        var r = t.dir,
          i = n && r === 'parentNode',
          s = U++
        return t.first
          ? function (t, n, s) {
              while ((t = t[r])) if (t.nodeType === 1 || i) return e(t, n, s)
            }
          : function (t, n, o) {
              var u,
                a,
                f,
                l = R + ' ' + s
              if (o) {
                while ((t = t[r]))
                  if (t.nodeType === 1 || i) if (e(t, n, o)) return !0
              } else
                while ((t = t[r]))
                  if (t.nodeType === 1 || i) {
                    f = t[I] || (t[I] = {})
                    if ((a = f[r]) && a[0] === l) {
                      if ((u = a[1]) === !0 || u === T) return u === !0
                    } else {
                      ;(a = f[r] = [l]), (a[1] = e(t, n, o) || T)
                      if (a[1] === !0) return !0
                    }
                  }
            }
      }
      function v(e) {
        return e.length > 1
          ? function (t, n, r) {
              var i = e.length
              while (i--) if (!e[i](t, n, r)) return !1
              return !0
            }
          : e[0]
      }
      function m(e, t, n, r, i) {
        var s,
          o = [],
          u = 0,
          a = e.length,
          f = t != null
        for (; u < a; u++)
          if ((s = e[u])) if (!n || n(s, r, i)) o.push(s), f && t.push(u)
        return o
      }
      function g(e, t, n, r, s, o) {
        return (
          r && !r[I] && (r = g(r)),
          s && !s[I] && (s = g(s, o)),
          i(function (i, o, u, a) {
            var f,
              l,
              c,
              h = [],
              p = [],
              d = o.length,
              v = i || w(t || '*', u.nodeType ? [u] : u, []),
              g = e && (i || !t) ? m(v, h, e, u, a) : v,
              y = n ? (s || (i ? e : d || r) ? [] : o) : g
            n && n(g, y, u, a)
            if (r) {
              ;(f = m(y, p)), r(f, [], u, a), (l = f.length)
              while (l--) if ((c = f[l])) y[p[l]] = !(g[p[l]] = c)
            }
            if (i) {
              if (s || e) {
                if (s) {
                  ;(f = []), (l = y.length)
                  while (l--) (c = y[l]) && f.push((g[l] = c))
                  s(null, (y = []), f, a)
                }
                l = y.length
                while (l--)
                  (c = y[l]) &&
                    (f = s ? nt.call(i, c) : h[l]) > -1 &&
                    (i[f] = !(o[f] = c))
              }
            } else (y = m(y === o ? y.splice(d, y.length) : y)), s ? s(null, o, y, a) : et.apply(o, y)
          })
        )
      }
      function y(e) {
        var t,
          n,
          r,
          i = e.length,
          s = N.relative[e[0].type],
          o = s || N.relative[' '],
          u = s ? 1 : 0,
          a = d(
            function (e) {
              return e === t
            },
            o,
            !0
          ),
          f = d(
            function (e) {
              return nt.call(t, e) > -1
            },
            o,
            !0
          ),
          l = [
            function (e, n, r) {
              return (
                (!s && (r || n !== A)) ||
                ((t = n).nodeType ? a(e, n, r) : f(e, n, r))
              )
            }
          ]
        for (; u < i; u++)
          if ((n = N.relative[e[u].type])) l = [d(v(l), n)]
          else {
            n = N.filter[e[u].type].apply(null, e[u].matches)
            if (n[I]) {
              r = ++u
              for (; r < i; r++) if (N.relative[e[r].type]) break
              return g(
                u > 1 && v(l),
                u > 1 &&
                  p(
                    e
                      .slice(0, u - 1)
                      .concat({ value: e[u - 2].type === ' ' ? '*' : '' })
                  ).replace(ft, '$1'),
                n,
                u < r && y(e.slice(u, r)),
                r < i && y((e = e.slice(r))),
                r < i && p(e)
              )
            }
            l.push(n)
          }
        return v(l)
      }
      function b(e, t) {
        var r = 0,
          s = t.length > 0,
          o = e.length > 0,
          u = function (i, u, a, f, l) {
            var c,
              h,
              p,
              d = [],
              v = 0,
              g = '0',
              y = i && [],
              b = l != null,
              w = A,
              E = i || (o && N.find.TAG('*', (l && u.parentNode) || u)),
              S = (R += w == null ? 1 : Math.random() || 0.1)
            b && ((A = u !== _ && u), (T = r))
            for (; (c = E[g]) != null; g++) {
              if (o && c) {
                h = 0
                while ((p = e[h++]))
                  if (p(c, u, a)) {
                    f.push(c)
                    break
                  }
                b && ((R = S), (T = ++r))
              }
              s && ((c = !p && c) && v--, i && y.push(c))
            }
            v += g
            if (s && g !== v) {
              h = 0
              while ((p = t[h++])) p(y, d, u, a)
              if (i) {
                if (v > 0) while (g--) !y[g] && !d[g] && (d[g] = Y.call(f))
                d = m(d)
              }
              et.apply(f, d),
                b && !i && d.length > 0 && v + t.length > 1 && n.uniqueSort(f)
            }
            return b && ((R = S), (A = w)), y
          }
        return s ? i(u) : u
      }
      function w(e, t, r) {
        var i = 0,
          s = t.length
        for (; i < s; i++) n(e, t[i], r)
        return r
      }
      function E(e, t, n, r) {
        var i,
          s,
          o,
          u,
          a,
          f = h(e)
        if (!r && f.length === 1) {
          s = f[0] = f[0].slice(0)
          if (
            s.length > 2 &&
            (o = s[0]).type === 'ID' &&
            x.getById &&
            t.nodeType === 9 &&
            P &&
            N.relative[s[1].type]
          ) {
            t = (N.find.ID(o.matches[0].replace(xt, Tt), t) || [])[0]
            if (!t) return n
            e = e.slice(s.shift().value.length)
          }
          i = gt.needsContext.test(e) ? 0 : s.length
          while (i--) {
            o = s[i]
            if (N.relative[(u = o.type)]) break
            if ((a = N.find[u]))
              if (
                (r = a(
                  o.matches[0].replace(xt, Tt),
                  (pt.test(s[0].type) && t.parentNode) || t
                ))
              ) {
                s.splice(i, 1), (e = r.length && p(s))
                if (!e) return et.apply(n, r), n
                break
              }
          }
        }
        return L(e, f)(r, t, !P, n, pt.test(e)), n
      }
      var S,
        x,
        T,
        N,
        C,
        k,
        L,
        A,
        O,
        M,
        _,
        D,
        P,
        H,
        B,
        j,
        F,
        I = 'sizzle' + -new Date(),
        q = e.document,
        R = 0,
        U = 0,
        z = r(),
        W = r(),
        X = r(),
        V = !1,
        $ = function (e, t) {
          return e === t ? ((V = !0), 0) : 0
        },
        J = typeof t,
        K = 1 << 31,
        Q = {}.hasOwnProperty,
        G = [],
        Y = G.pop,
        Z = G.push,
        et = G.push,
        tt = G.slice,
        nt =
          G.indexOf ||
          function (e) {
            var t = 0,
              n = this.length
            for (; t < n; t++) if (this[t] === e) return t
            return -1
          },
        rt =
          'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
        it = '[\\x20\\t\\r\\n\\f]',
        st = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
        ot = st.replace('w', 'w#'),
        ut =
          '\\[' +
          it +
          '*(' +
          st +
          ')' +
          it +
          '*(?:([*^$|!~]?=)' +
          it +
          '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' +
          ot +
          ')|)|)' +
          it +
          '*\\]',
        at =
          ':(' +
          st +
          ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' +
          ut.replace(3, 8) +
          ')*)|.*)\\)|)',
        ft = new RegExp(
          '^' + it + '+|((?:^|[^\\\\])(?:\\\\.)*)' + it + '+$',
          'g'
        ),
        ct = new RegExp('^' + it + '*,' + it + '*'),
        ht = new RegExp('^' + it + '*([>+~]|' + it + ')' + it + '*'),
        pt = new RegExp(it + '*[+~]'),
        dt = new RegExp('=' + it + '*([^\\]\'"]*)' + it + '*\\]', 'g'),
        vt = new RegExp(at),
        mt = new RegExp('^' + ot + '$'),
        gt = {
          ID: new RegExp('^#(' + st + ')'),
          CLASS: new RegExp('^\\.(' + st + ')'),
          TAG: new RegExp('^(' + st.replace('w', 'w*') + ')'),
          ATTR: new RegExp('^' + ut),
          PSEUDO: new RegExp('^' + at),
          CHILD: new RegExp(
            '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
              it +
              '*(even|odd|(([+-]|)(\\d*)n|)' +
              it +
              '*(?:([+-]|)' +
              it +
              '*(\\d+)|))' +
              it +
              '*\\)|)',
            'i'
          ),
          bool: new RegExp('^(?:' + rt + ')$', 'i'),
          needsContext: new RegExp(
            '^' +
              it +
              '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
              it +
              '*((?:-\\d)?\\d*)' +
              it +
              '*\\)|)(?=[^-]|$)',
            'i'
          )
        },
        yt = /^[^{]+\{\s*\[native \w/,
        bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        wt = /^(?:input|select|textarea|button)$/i,
        Et = /^h\d$/i,
        St = /'|\\/g,
        xt = new RegExp('\\\\([\\da-f]{1,6}' + it + '?|(' + it + ')|.)', 'ig'),
        Tt = function (e, t, n) {
          var r = '0x' + t - 65536
          return r !== r || n
            ? t
            : r < 0
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode((r >> 10) | 55296, (r & 1023) | 56320)
        }
      try {
        et.apply((G = tt.call(q.childNodes)), q.childNodes),
          G[q.childNodes.length].nodeType
      } catch (Nt) {
        et = {
          apply: G.length
            ? function (e, t) {
                Z.apply(e, tt.call(t))
              }
            : function (e, t) {
                var n = e.length,
                  r = 0
                while ((e[n++] = t[r++]));
                e.length = n - 1
              }
        }
      }
      ;(k = n.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement
          return t ? t.nodeName !== 'HTML' : !1
        }),
        (x = n.support = {}),
        (M = n.setDocument =
          function (e) {
            var t = e ? e.ownerDocument || e : q,
              n = t.defaultView
            if (t === _ || t.nodeType !== 9 || !t.documentElement) return _
            ;(_ = t),
              (D = t.documentElement),
              (P = !k(t)),
              n &&
                n.attachEvent &&
                n !== n.top &&
                n.attachEvent('onbeforeunload', function () {
                  M()
                }),
              (x.attributes = s(function (e) {
                return (e.className = 'i'), !e.getAttribute('className')
              })),
              (x.getElementsByTagName = s(function (e) {
                return (
                  e.appendChild(t.createComment('')),
                  !e.getElementsByTagName('*').length
                )
              })),
              (x.getElementsByClassName = s(function (e) {
                return (
                  (e.innerHTML =
                    "<div class='a'></div><div class='a i'></div>"),
                  (e.firstChild.className = 'i'),
                  e.getElementsByClassName('i').length === 2
                )
              })),
              (x.getById = s(function (e) {
                return (
                  (D.appendChild(e).id = I),
                  !t.getElementsByName || !t.getElementsByName(I).length
                )
              })),
              x.getById
                ? ((N.find.ID = function (e, t) {
                    if (typeof t.getElementById !== J && P) {
                      var n = t.getElementById(e)
                      return n && n.parentNode ? [n] : []
                    }
                  }),
                  (N.filter.ID = function (e) {
                    var t = e.replace(xt, Tt)
                    return function (e) {
                      return e.getAttribute('id') === t
                    }
                  }))
                : (delete N.find.ID,
                  (N.filter.ID = function (e) {
                    var t = e.replace(xt, Tt)
                    return function (e) {
                      var n =
                        typeof e.getAttributeNode !== J &&
                        e.getAttributeNode('id')
                      return n && n.value === t
                    }
                  })),
              (N.find.TAG = x.getElementsByTagName
                ? function (e, t) {
                    if (typeof t.getElementsByTagName !== J)
                      return t.getElementsByTagName(e)
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      s = t.getElementsByTagName(e)
                    if (e === '*') {
                      while ((n = s[i++])) n.nodeType === 1 && r.push(n)
                      return r
                    }
                    return s
                  }),
              (N.find.CLASS =
                x.getElementsByClassName &&
                function (e, t) {
                  if (typeof t.getElementsByClassName !== J && P)
                    return t.getElementsByClassName(e)
                }),
              (B = []),
              (H = [])
            if ((x.qsa = yt.test(t.querySelectorAll)))
              s(function (e) {
                ;(e.innerHTML =
                  "<select><option selected=''></option></select>"),
                  e.querySelectorAll('[selected]').length ||
                    H.push('\\[' + it + '*(?:value|' + rt + ')'),
                  e.querySelectorAll(':checked').length || H.push(':checked')
              }),
                s(function (e) {
                  var n = t.createElement('input')
                  n.setAttribute('type', 'hidden'),
                    e.appendChild(n).setAttribute('t', ''),
                    e.querySelectorAll("[t^='']").length &&
                      H.push('[*^$]=' + it + '*(?:\'\'|"")'),
                    e.querySelectorAll(':enabled').length ||
                      H.push(':enabled', ':disabled'),
                    e.querySelectorAll('*,:x'),
                    H.push(',.*:')
                })
            return (
              (x.matchesSelector = yt.test(
                (j =
                  D.webkitMatchesSelector ||
                  D.mozMatchesSelector ||
                  D.oMatchesSelector ||
                  D.msMatchesSelector)
              )) &&
                s(function (e) {
                  ;(x.disconnectedMatch = j.call(e, 'div')),
                    j.call(e, "[s!='']:x"),
                    B.push('!=', at)
                }),
              (H = H.length && new RegExp(H.join('|'))),
              (B = B.length && new RegExp(B.join('|'))),
              (F =
                yt.test(D.contains) || D.compareDocumentPosition
                  ? function (e, t) {
                      var n = e.nodeType === 9 ? e.documentElement : e,
                        r = t && t.parentNode
                      return (
                        e === r ||
                        (!!r &&
                          r.nodeType === 1 &&
                          !!(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              e.compareDocumentPosition(r) & 16))
                      )
                    }
                  : function (e, t) {
                      if (t) while ((t = t.parentNode)) if (t === e) return !0
                      return !1
                    }),
              ($ = D.compareDocumentPosition
                ? function (e, n) {
                    if (e === n) return (V = !0), 0
                    var r =
                      n.compareDocumentPosition &&
                      e.compareDocumentPosition &&
                      e.compareDocumentPosition(n)
                    return r
                      ? r & 1 ||
                        (!x.sortDetached && n.compareDocumentPosition(e) === r)
                        ? e === t || F(q, e)
                          ? -1
                          : n === t || F(q, n)
                          ? 1
                          : O
                          ? nt.call(O, e) - nt.call(O, n)
                          : 0
                        : r & 4
                        ? -1
                        : 1
                      : e.compareDocumentPosition
                      ? -1
                      : 1
                  }
                : function (e, n) {
                    var r,
                      i = 0,
                      s = e.parentNode,
                      o = n.parentNode,
                      a = [e],
                      f = [n]
                    if (e === n) return (V = !0), 0
                    if (!s || !o)
                      return e === t
                        ? -1
                        : n === t
                        ? 1
                        : s
                        ? -1
                        : o
                        ? 1
                        : O
                        ? nt.call(O, e) - nt.call(O, n)
                        : 0
                    if (s === o) return u(e, n)
                    r = e
                    while ((r = r.parentNode)) a.unshift(r)
                    r = n
                    while ((r = r.parentNode)) f.unshift(r)
                    while (a[i] === f[i]) i++
                    return i
                      ? u(a[i], f[i])
                      : a[i] === q
                      ? -1
                      : f[i] === q
                      ? 1
                      : 0
                  }),
              t
            )
          }),
        (n.matches = function (e, t) {
          return n(e, null, null, t)
        }),
        (n.matchesSelector = function (e, t) {
          ;(e.ownerDocument || e) !== _ && M(e), (t = t.replace(dt, "='$1']"))
          if (
            x.matchesSelector &&
            P &&
            (!B || !B.test(t)) &&
            (!H || !H.test(t))
          )
            try {
              var r = j.call(e, t)
              if (
                r ||
                x.disconnectedMatch ||
                (e.document && e.document.nodeType !== 11)
              )
                return r
            } catch (i) {}
          return n(t, _, null, [e]).length > 0
        }),
        (n.contains = function (e, t) {
          return (e.ownerDocument || e) !== _ && M(e), F(e, t)
        }),
        (n.attr = function (e, n) {
          ;(e.ownerDocument || e) !== _ && M(e)
          var r = N.attrHandle[n.toLowerCase()],
            i = r && Q.call(N.attrHandle, n.toLowerCase()) ? r(e, n, !P) : t
          return i === t
            ? x.attributes || !P
              ? e.getAttribute(n)
              : (i = e.getAttributeNode(n)) && i.specified
              ? i.value
              : null
            : i
        }),
        (n.error = function (e) {
          throw new Error('Syntax error, unrecognized expression: ' + e)
        }),
        (n.uniqueSort = function (e) {
          var t,
            n = [],
            r = 0,
            i = 0
          ;(V = !x.detectDuplicates),
            (O = !x.sortStable && e.slice(0)),
            e.sort($)
          if (V) {
            while ((t = e[i++])) t === e[i] && (r = n.push(i))
            while (r--) e.splice(n[r], 1)
          }
          return e
        }),
        (C = n.getText =
          function (e) {
            var t,
              n = '',
              r = 0,
              i = e.nodeType
            if (!i) for (; (t = e[r]); r++) n += C(t)
            else if (i === 1 || i === 9 || i === 11) {
              if (typeof e.textContent == 'string') return e.textContent
              for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
            } else if (i === 3 || i === 4) return e.nodeValue
            return n
          }),
        (N = n.selectors =
          {
            cacheLength: 50,
            createPseudo: i,
            match: gt,
            attrHandle: {},
            find: {},
            relative: {
              '>': { dir: 'parentNode', first: !0 },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: !0 },
              '~': { dir: 'previousSibling' }
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(xt, Tt)),
                  (e[3] = (e[4] || e[5] || '').replace(xt, Tt)),
                  e[2] === '~=' && (e[3] = ' ' + e[3] + ' '),
                  e.slice(0, 4)
                )
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  e[1].slice(0, 3) === 'nth'
                    ? (e[3] || n.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * (e[3] === 'even' || e[3] === 'odd'))),
                      (e[5] = +(e[7] + e[8] || e[3] === 'odd')))
                    : e[3] && n.error(e[0]),
                  e
                )
              },
              PSEUDO: function (e) {
                var n,
                  r = !e[5] && e[2]
                return gt.CHILD.test(e[0])
                  ? null
                  : (e[3] && e[4] !== t
                      ? (e[2] = e[4])
                      : r &&
                        vt.test(r) &&
                        (n = h(r, !0)) &&
                        (n = r.indexOf(')', r.length - n) - r.length) &&
                        ((e[0] = e[0].slice(0, n)), (e[2] = r.slice(0, n))),
                    e.slice(0, 3))
              }
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(xt, Tt).toLowerCase()
                return e === '*'
                  ? function () {
                      return !0
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                    }
              },
              CLASS: function (e) {
                var t = z[e + ' ']
                return (
                  t ||
                  ((t = new RegExp('(^|' + it + ')' + e + '(' + it + '|$)')) &&
                    z(e, function (e) {
                      return t.test(
                        (typeof e.className == 'string' && e.className) ||
                          (typeof e.getAttribute !== J &&
                            e.getAttribute('class')) ||
                          ''
                      )
                    }))
                )
              },
              ATTR: function (e, t, r) {
                return function (i) {
                  var s = n.attr(i, e)
                  return s == null
                    ? t === '!='
                    : t
                    ? ((s += ''),
                      t === '='
                        ? s === r
                        : t === '!='
                        ? s !== r
                        : t === '^='
                        ? r && s.indexOf(r) === 0
                        : t === '*='
                        ? r && s.indexOf(r) > -1
                        : t === '$='
                        ? r && s.slice(-r.length) === r
                        : t === '~='
                        ? (' ' + s + ' ').indexOf(r) > -1
                        : t === '|='
                        ? s === r || s.slice(0, r.length + 1) === r + '-'
                        : !1)
                    : !0
                }
              },
              CHILD: function (e, t, n, r, i) {
                var s = e.slice(0, 3) !== 'nth',
                  o = e.slice(-4) !== 'last',
                  u = t === 'of-type'
                return r === 1 && i === 0
                  ? function (e) {
                      return !!e.parentNode
                    }
                  : function (t, n, a) {
                      var f,
                        l,
                        c,
                        h,
                        p,
                        d,
                        v = s !== o ? 'nextSibling' : 'previousSibling',
                        m = t.parentNode,
                        g = u && t.nodeName.toLowerCase(),
                        y = !a && !u
                      if (m) {
                        if (s) {
                          while (v) {
                            c = t
                            while ((c = c[v]))
                              if (
                                u
                                  ? c.nodeName.toLowerCase() === g
                                  : c.nodeType === 1
                              )
                                return !1
                            d = v = e === 'only' && !d && 'nextSibling'
                          }
                          return !0
                        }
                        d = [o ? m.firstChild : m.lastChild]
                        if (o && y) {
                          ;(l = m[I] || (m[I] = {})),
                            (f = l[e] || []),
                            (p = f[0] === R && f[1]),
                            (h = f[0] === R && f[2]),
                            (c = p && m.childNodes[p])
                          while (
                            (c = (++p && c && c[v]) || (h = p = 0) || d.pop())
                          )
                            if (c.nodeType === 1 && ++h && c === t) {
                              l[e] = [R, p, h]
                              break
                            }
                        } else if (
                          y &&
                          (f = (t[I] || (t[I] = {}))[e]) &&
                          f[0] === R
                        )
                          h = f[1]
                        else
                          while (
                            (c = (++p && c && c[v]) || (h = p = 0) || d.pop())
                          )
                            if (
                              (u
                                ? c.nodeName.toLowerCase() === g
                                : c.nodeType === 1) &&
                              ++h
                            ) {
                              y && ((c[I] || (c[I] = {}))[e] = [R, h])
                              if (c === t) break
                            }
                        return (h -= i), h === r || (h % r === 0 && h / r >= 0)
                      }
                    }
              },
              PSEUDO: function (e, t) {
                var r,
                  s =
                    N.pseudos[e] ||
                    N.setFilters[e.toLowerCase()] ||
                    n.error('unsupported pseudo: ' + e)
                return s[I]
                  ? s(t)
                  : s.length > 1
                  ? ((r = [e, e, '', t]),
                    N.setFilters.hasOwnProperty(e.toLowerCase())
                      ? i(function (e, n) {
                          var r,
                            i = s(e, t),
                            o = i.length
                          while (o--)
                            (r = nt.call(e, i[o])), (e[r] = !(n[r] = i[o]))
                        })
                      : function (e) {
                          return s(e, 0, r)
                        })
                  : s
              }
            },
            pseudos: {
              not: i(function (e) {
                var t = [],
                  n = [],
                  r = L(e.replace(ft, '$1'))
                return r[I]
                  ? i(function (e, t, n, i) {
                      var s,
                        o = r(e, null, i, []),
                        u = e.length
                      while (u--) if ((s = o[u])) e[u] = !(t[u] = s)
                    })
                  : function (e, i, s) {
                      return (t[0] = e), r(t, null, s, n), !n.pop()
                    }
              }),
              has: i(function (e) {
                return function (t) {
                  return n(e, t).length > 0
                }
              }),
              contains: i(function (e) {
                return function (t) {
                  return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                }
              }),
              lang: i(function (e) {
                return (
                  mt.test(e || '') || n.error('unsupported lang: ' + e),
                  (e = e.replace(xt, Tt).toLowerCase()),
                  function (t) {
                    var n
                    do
                      if (
                        (n = P
                          ? t.lang
                          : t.getAttribute('xml:lang') ||
                            t.getAttribute('lang'))
                      )
                        return (
                          (n = n.toLowerCase()),
                          n === e || n.indexOf(e + '-') === 0
                        )
                    while ((t = t.parentNode) && t.nodeType === 1)
                    return !1
                  }
                )
              }),
              target: function (t) {
                var n = e.location && e.location.hash
                return n && n.slice(1) === t.id
              },
              root: function (e) {
                return e === D
              },
              focus: function (e) {
                return (
                  e === _.activeElement &&
                  (!_.hasFocus || _.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                )
              },
              enabled: function (e) {
                return e.disabled === !1
              },
              disabled: function (e) {
                return e.disabled === !0
              },
              checked: function (e) {
                var t = e.nodeName.toLowerCase()
                return (
                  (t === 'input' && !!e.checked) ||
                  (t === 'option' && !!e.selected)
                )
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                )
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeName > '@' || e.nodeType === 3 || e.nodeType === 4)
                    return !1
                return !0
              },
              parent: function (e) {
                return !N.pseudos.empty(e)
              },
              header: function (e) {
                return Et.test(e.nodeName)
              },
              input: function (e) {
                return wt.test(e.nodeName)
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase()
                return (t === 'input' && e.type === 'button') || t === 'button'
              },
              text: function (e) {
                var t
                return (
                  e.nodeName.toLowerCase() === 'input' &&
                  e.type === 'text' &&
                  ((t = e.getAttribute('type')) == null ||
                    t.toLowerCase() === e.type)
                )
              },
              first: l(function () {
                return [0]
              }),
              last: l(function (e, t) {
                return [t - 1]
              }),
              eq: l(function (e, t, n) {
                return [n < 0 ? n + t : n]
              }),
              even: l(function (e, t) {
                var n = 0
                for (; n < t; n += 2) e.push(n)
                return e
              }),
              odd: l(function (e, t) {
                var n = 1
                for (; n < t; n += 2) e.push(n)
                return e
              }),
              lt: l(function (e, t, n) {
                var r = n < 0 ? n + t : n
                for (; --r >= 0; ) e.push(r)
                return e
              }),
              gt: l(function (e, t, n) {
                var r = n < 0 ? n + t : n
                for (; ++r < t; ) e.push(r)
                return e
              })
            }
          }),
        (N.pseudos.nth = N.pseudos.eq)
      for (S in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        N.pseudos[S] = a(S)
      for (S in { submit: !0, reset: !0 }) N.pseudos[S] = f(S)
      ;(c.prototype = N.filters = N.pseudos),
        (N.setFilters = new c()),
        (L = n.compile =
          function (e, t) {
            var n,
              r = [],
              i = [],
              s = X[e + ' ']
            if (!s) {
              t || (t = h(e)), (n = t.length)
              while (n--) (s = y(t[n])), s[I] ? r.push(s) : i.push(s)
              s = X(e, b(i, r))
            }
            return s
          }),
        (x.sortStable = I.split('').sort($).join('') === I),
        (x.detectDuplicates = V),
        M(),
        (x.sortDetached = s(function (e) {
          return e.compareDocumentPosition(_.createElement('div')) & 1
        })),
        s(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            e.firstChild.getAttribute('href') === '#'
          )
        }) ||
          o('type|href|height|width', function (e, t, n) {
            if (!n) return e.getAttribute(t, t.toLowerCase() === 'type' ? 1 : 2)
          }),
        (!x.attributes ||
          !s(function (e) {
            return (
              (e.innerHTML = '<input/>'),
              e.firstChild.setAttribute('value', ''),
              e.firstChild.getAttribute('value') === ''
            )
          })) &&
          o('value', function (e, t, n) {
            if (!n && e.nodeName.toLowerCase() === 'input')
              return e.defaultValue
          }),
        s(function (e) {
          return e.getAttribute('disabled') == null
        }) ||
          o(rt, function (e, t, n) {
            var r
            if (!n)
              return (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : e[t] === !0
                ? t.toLowerCase()
                : null
          }),
        (lt.find = n),
        (lt.expr = n.selectors),
        (lt.expr[':'] = lt.expr.pseudos),
        (lt.unique = n.uniqueSort),
        (lt.text = n.getText),
        (lt.isXMLDoc = n.isXML),
        (lt.contains = n.contains)
    })(e)
  var Nt = {}
  ;(lt.Callbacks = function (e) {
    e = typeof e == 'string' ? Nt[e] || r(e) : lt.extend({}, e)
    var n,
      i,
      s,
      o,
      u,
      a,
      f = [],
      l = !e.once && [],
      c = function (t) {
        ;(i = e.memory && t),
          (s = !0),
          (u = a || 0),
          (a = 0),
          (o = f.length),
          (n = !0)
        for (; f && u < o; u++)
          if (f[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
            i = !1
            break
          }
        ;(n = !1),
          f && (l ? l.length && c(l.shift()) : i ? (f = []) : h.disable())
      },
      h = {
        add: function () {
          if (f) {
            var t = f.length
            ;(function r(t) {
              lt.each(t, function (t, n) {
                var i = lt.type(n)
                i === 'function'
                  ? (!e.unique || !h.has(n)) && f.push(n)
                  : n && n.length && i !== 'string' && r(n)
              })
            })(arguments),
              n ? (o = f.length) : i && ((a = t), c(i))
          }
          return this
        },
        remove: function () {
          return (
            f &&
              lt.each(arguments, function (e, t) {
                var r
                while ((r = lt.inArray(t, f, r)) > -1)
                  f.splice(r, 1), n && (r <= o && o--, r <= u && u--)
              }),
            this
          )
        },
        has: function (e) {
          return e ? lt.inArray(e, f) > -1 : !!f && !!f.length
        },
        empty: function () {
          return (f = []), (o = 0), this
        },
        disable: function () {
          return (f = l = i = t), this
        },
        disabled: function () {
          return !f
        },
        lock: function () {
          return (l = t), i || h.disable(), this
        },
        locked: function () {
          return !l
        },
        fireWith: function (e, t) {
          return (
            f &&
              (!s || l) &&
              ((t = t || []),
              (t = [e, t.slice ? t.slice() : t]),
              n ? l.push(t) : c(t)),
            this
          )
        },
        fire: function () {
          return h.fireWith(this, arguments), this
        },
        fired: function () {
          return !!s
        }
      }
    return h
  }),
    lt.extend({
      Deferred: function (e) {
        var t = [
            ['resolve', 'done', lt.Callbacks('once memory'), 'resolved'],
            ['reject', 'fail', lt.Callbacks('once memory'), 'rejected'],
            ['notify', 'progress', lt.Callbacks('memory')]
          ],
          n = 'pending',
          r = {
            state: function () {
              return n
            },
            always: function () {
              return i.done(arguments).fail(arguments), this
            },
            then: function () {
              var e = arguments
              return lt
                .Deferred(function (n) {
                  lt.each(t, function (t, s) {
                    var o = s[0],
                      u = lt.isFunction(e[t]) && e[t]
                    i[s[1]](function () {
                      var e = u && u.apply(this, arguments)
                      e && lt.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[o + 'With'](
                            this === r ? n.promise() : this,
                            u ? [e] : arguments
                          )
                    })
                  }),
                    (e = null)
                })
                .promise()
            },
            promise: function (e) {
              return e != null ? lt.extend(e, r) : r
            }
          },
          i = {}
        return (
          (r.pipe = r.then),
          lt.each(t, function (e, s) {
            var o = s[2],
              u = s[3]
            ;(r[s[1]] = o.add),
              u &&
                o.add(
                  function () {
                    n = u
                  },
                  t[e ^ 1][2].disable,
                  t[2][2].lock
                ),
              (i[s[0]] = function () {
                return i[s[0] + 'With'](this === i ? r : this, arguments), this
              }),
              (i[s[0] + 'With'] = o.fireWith)
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        )
      },
      when: function (e) {
        var t = 0,
          n = st.call(arguments),
          r = n.length,
          i = r !== 1 || (e && lt.isFunction(e.promise)) ? r : 0,
          s = i === 1 ? e : lt.Deferred(),
          o = function (e, t, n) {
            return function (r) {
              ;(t[e] = this),
                (n[e] = arguments.length > 1 ? st.call(arguments) : r),
                n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
            }
          },
          u,
          a,
          f
        if (r > 1) {
          ;(u = new Array(r)), (a = new Array(r)), (f = new Array(r))
          for (; t < r; t++)
            n[t] && lt.isFunction(n[t].promise)
              ? n[t]
                  .promise()
                  .done(o(t, f, n))
                  .fail(s.reject)
                  .progress(o(t, a, u))
              : --i
        }
        return i || s.resolveWith(f, n), s.promise()
      }
    }),
    (lt.support = (function (t) {
      var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c = Q.createElement('div')
      c.setAttribute('className', 't'),
        (c.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (n = c.getElementsByTagName('*') || []),
        (r = c.getElementsByTagName('a')[0])
      if (!r || !r.style || !n.length) return t
      ;(s = Q.createElement('select')),
        (u = s.appendChild(Q.createElement('option'))),
        (i = c.getElementsByTagName('input')[0]),
        (r.style.cssText = 'top:1px;float:left;opacity:.5'),
        (t.getSetAttribute = c.className !== 't'),
        (t.leadingWhitespace = c.firstChild.nodeType === 3),
        (t.tbody = !c.getElementsByTagName('tbody').length),
        (t.htmlSerialize = !!c.getElementsByTagName('link').length),
        (t.style = /top/.test(r.getAttribute('style'))),
        (t.hrefNormalized = r.getAttribute('href') === '/a'),
        (t.opacity = /^0.5/.test(r.style.opacity)),
        (t.cssFloat = !!r.style.cssFloat),
        (t.checkOn = !!i.value),
        (t.optSelected = u.selected),
        (t.enctype = !!Q.createElement('form').enctype),
        (t.html5Clone =
          Q.createElement('nav').cloneNode(!0).outerHTML !== '<:nav></:nav>'),
        (t.inlineBlockNeedsLayout = !1),
        (t.shrinkWrapBlocks = !1),
        (t.pixelPosition = !1),
        (t.deleteExpando = !0),
        (t.noCloneEvent = !0),
        (t.reliableMarginRight = !0),
        (t.boxSizingReliable = !0),
        (i.checked = !0),
        (t.noCloneChecked = i.cloneNode(!0).checked),
        (s.disabled = !0),
        (t.optDisabled = !u.disabled)
      try {
        delete c.test
      } catch (h) {
        t.deleteExpando = !1
      }
      ;(i = Q.createElement('input')),
        i.setAttribute('value', ''),
        (t.input = i.getAttribute('value') === ''),
        (i.value = 't'),
        i.setAttribute('type', 'radio'),
        (t.radioValue = i.value === 't'),
        i.setAttribute('checked', 't'),
        i.setAttribute('name', 't'),
        (o = Q.createDocumentFragment()),
        o.appendChild(i),
        (t.appendChecked = i.checked),
        (t.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked),
        c.attachEvent &&
          (c.attachEvent('onclick', function () {
            t.noCloneEvent = !1
          }),
          c.cloneNode(!0).click())
      for (l in { submit: !0, change: !0, focusin: !0 })
        c.setAttribute((a = 'on' + l), 't'),
          (t[l + 'Bubbles'] = a in e || c.attributes[a].expando === !1)
      ;(c.style.backgroundClip = 'content-box'),
        (c.cloneNode(!0).style.backgroundClip = ''),
        (t.clearCloneStyle = c.style.backgroundClip === 'content-box')
      for (l in lt(t)) break
      return (
        (t.ownLast = l !== '0'),
        lt(function () {
          var n,
            r,
            i,
            s =
              'padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;',
            o = Q.getElementsByTagName('body')[0]
          if (!o) return
          ;(n = Q.createElement('div')),
            (n.style.cssText =
              'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px'),
            o.appendChild(n).appendChild(c),
            (c.innerHTML = '<table><tr><td></td><td>t</td></tr></table>'),
            (i = c.getElementsByTagName('td')),
            (i[0].style.cssText = 'padding:0;margin:0;border:0;display:none'),
            (f = i[0].offsetHeight === 0),
            (i[0].style.display = ''),
            (i[1].style.display = 'none'),
            (t.reliableHiddenOffsets = f && i[0].offsetHeight === 0),
            (c.innerHTML = ''),
            (c.style.cssText =
              'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;'),
            lt.swap(o, o.style.zoom != null ? { zoom: 1 } : {}, function () {
              t.boxSizing = c.offsetWidth === 4
            }),
            e.getComputedStyle &&
              ((t.pixelPosition =
                (e.getComputedStyle(c, null) || {}).top !== '1%'),
              (t.boxSizingReliable =
                (e.getComputedStyle(c, null) || { width: '4px' }).width ===
                '4px'),
              (r = c.appendChild(Q.createElement('div'))),
              (r.style.cssText = c.style.cssText = s),
              (r.style.marginRight = r.style.width = '0'),
              (c.style.width = '1px'),
              (t.reliableMarginRight = !parseFloat(
                (e.getComputedStyle(r, null) || {}).marginRight
              ))),
            typeof c.style.zoom !== J &&
              ((c.innerHTML = ''),
              (c.style.cssText =
                s + 'width:1px;padding:1px;display:inline;zoom:1'),
              (t.inlineBlockNeedsLayout = c.offsetWidth === 3),
              (c.style.display = 'block'),
              (c.innerHTML = '<div></div>'),
              (c.firstChild.style.width = '5px'),
              (t.shrinkWrapBlocks = c.offsetWidth !== 3),
              t.inlineBlockNeedsLayout && (o.style.zoom = 1)),
            o.removeChild(n),
            (n = c = i = r = null)
        }),
        (n = s = o = u = r = i = null),
        t
      )
    })({}))
  var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    kt = /([A-Z])/g
  lt.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'
    },
    hasData: function (e) {
      return (
        (e = e.nodeType ? lt.cache[e[lt.expando]] : e[lt.expando]), !!e && !u(e)
      )
    },
    data: function (e, t, n) {
      return i(e, t, n)
    },
    removeData: function (e, t) {
      return s(e, t)
    },
    _data: function (e, t, n) {
      return i(e, t, n, !0)
    },
    _removeData: function (e, t) {
      return s(e, t, !0)
    },
    acceptData: function (e) {
      if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return !1
      var t = e.nodeName && lt.noData[e.nodeName.toLowerCase()]
      return !t || (t !== !0 && e.getAttribute('classid') === t)
    }
  }),
    lt.fn.extend({
      data: function (e, n) {
        var r,
          i,
          s = null,
          u = 0,
          a = this[0]
        if (e === t) {
          if (this.length) {
            s = lt.data(a)
            if (a.nodeType === 1 && !lt._data(a, 'parsedAttrs')) {
              r = a.attributes
              for (; u < r.length; u++)
                (i = r[u].name),
                  i.indexOf('data-') === 0 &&
                    ((i = lt.camelCase(i.slice(5))), o(a, i, s[i]))
              lt._data(a, 'parsedAttrs', !0)
            }
          }
          return s
        }
        return typeof e == 'object'
          ? this.each(function () {
              lt.data(this, e)
            })
          : arguments.length > 1
          ? this.each(function () {
              lt.data(this, e, n)
            })
          : a
          ? o(a, e, lt.data(a, e))
          : null
      },
      removeData: function (e) {
        return this.each(function () {
          lt.removeData(this, e)
        })
      }
    }),
    lt.extend({
      queue: function (e, t, n) {
        var r
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (r = lt._data(e, t)),
            n &&
              (!r || lt.isArray(n)
                ? (r = lt._data(e, t, lt.makeArray(n)))
                : r.push(n)),
            r || []
          )
      },
      dequeue: function (e, t) {
        t = t || 'fx'
        var n = lt.queue(e, t),
          r = n.length,
          i = n.shift(),
          s = lt._queueHooks(e, t),
          o = function () {
            lt.dequeue(e, t)
          }
        i === 'inprogress' && ((i = n.shift()), r--),
          i &&
            (t === 'fx' && n.unshift('inprogress'),
            delete s.stop,
            i.call(e, o, s)),
          !r && s && s.empty.fire()
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks'
        return (
          lt._data(e, n) ||
          lt._data(e, n, {
            empty: lt.Callbacks('once memory').add(function () {
              lt._removeData(e, t + 'queue'), lt._removeData(e, n)
            })
          })
        )
      }
    }),
    lt.fn.extend({
      queue: function (e, n) {
        var r = 2
        return (
          typeof e != 'string' && ((n = e), (e = 'fx'), r--),
          arguments.length < r
            ? lt.queue(this[0], e)
            : n === t
            ? this
            : this.each(function () {
                var t = lt.queue(this, e, n)
                lt._queueHooks(this, e),
                  e === 'fx' && t[0] !== 'inprogress' && lt.dequeue(this, e)
              })
        )
      },
      dequeue: function (e) {
        return this.each(function () {
          lt.dequeue(this, e)
        })
      },
      delay: function (e, t) {
        return (
          (e = lt.fx ? lt.fx.speeds[e] || e : e),
          (t = t || 'fx'),
          this.queue(t, function (t, n) {
            var r = setTimeout(t, e)
            n.stop = function () {
              clearTimeout(r)
            }
          })
        )
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', [])
      },
      promise: function (e, n) {
        var r,
          i = 1,
          s = lt.Deferred(),
          o = this,
          u = this.length,
          a = function () {
            --i || s.resolveWith(o, [o])
          }
        typeof e != 'string' && ((n = e), (e = t)), (e = e || 'fx')
        while (u--)
          (r = lt._data(o[u], e + 'queueHooks')),
            r && r.empty && (i++, r.empty.add(a))
        return a(), s.promise(n)
      }
    })
  var Lt,
    At,
    Ot = /[\t\r\n\f]/g,
    Mt = /\r/g,
    _t = /^(?:input|select|textarea|button|object)$/i,
    Dt = /^(?:a|area)$/i,
    Pt = /^(?:checked|selected)$/i,
    Ht = lt.support.getSetAttribute,
    Bt = lt.support.input
  lt.fn.extend({
    attr: function (e, t) {
      return lt.access(this, lt.attr, e, t, arguments.length > 1)
    },
    removeAttr: function (e) {
      return this.each(function () {
        lt.removeAttr(this, e)
      })
    },
    prop: function (e, t) {
      return lt.access(this, lt.prop, e, t, arguments.length > 1)
    },
    removeProp: function (e) {
      return (
        (e = lt.propFix[e] || e),
        this.each(function () {
          try {
            ;(this[e] = t), delete this[e]
          } catch (n) {}
        })
      )
    },
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        s,
        o = 0,
        u = this.length,
        a = typeof e == 'string' && e
      if (lt.isFunction(e))
        return this.each(function (t) {
          lt(this).addClass(e.call(this, t, this.className))
        })
      if (a) {
        t = (e || '').match(ht) || []
        for (; o < u; o++) {
          ;(n = this[o]),
            (r =
              n.nodeType === 1 &&
              (n.className ? (' ' + n.className + ' ').replace(Ot, ' ') : ' '))
          if (r) {
            s = 0
            while ((i = t[s++])) r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ')
            n.className = lt.trim(r)
          }
        }
      }
      return this
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        s,
        o = 0,
        u = this.length,
        a = arguments.length === 0 || (typeof e == 'string' && e)
      if (lt.isFunction(e))
        return this.each(function (t) {
          lt(this).removeClass(e.call(this, t, this.className))
        })
      if (a) {
        t = (e || '').match(ht) || []
        for (; o < u; o++) {
          ;(n = this[o]),
            (r =
              n.nodeType === 1 &&
              (n.className ? (' ' + n.className + ' ').replace(Ot, ' ') : ''))
          if (r) {
            s = 0
            while ((i = t[s++]))
              while (r.indexOf(' ' + i + ' ') >= 0)
                r = r.replace(' ' + i + ' ', ' ')
            n.className = e ? lt.trim(r) : ''
          }
        }
      }
      return this
    },
    toggleClass: function (e, t) {
      var n = typeof e
      return typeof t == 'boolean' && n === 'string'
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : lt.isFunction(e)
        ? this.each(function (n) {
            lt(this).toggleClass(e.call(this, n, this.className, t), t)
          })
        : this.each(function () {
            if (n === 'string') {
              var t,
                r = 0,
                i = lt(this),
                s = e.match(ht) || []
              while ((t = s[r++]))
                i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
            } else if (n === J || n === 'boolean') this.className && lt._data(this, '__className__', this.className), (this.className = this.className || e === !1 ? '' : lt._data(this, '__className__') || '')
          })
    },
    hasClass: function (e) {
      var t = ' ' + e + ' ',
        n = 0,
        r = this.length
      for (; n < r; n++)
        if (
          this[n].nodeType === 1 &&
          (' ' + this[n].className + ' ').replace(Ot, ' ').indexOf(t) >= 0
        )
          return !0
      return !1
    },
    val: function (e) {
      var n,
        r,
        i,
        s = this[0]
      if (!arguments.length) {
        if (s)
          return (
            (r = lt.valHooks[s.type] || lt.valHooks[s.nodeName.toLowerCase()]),
            r && 'get' in r && (n = r.get(s, 'value')) !== t
              ? n
              : ((n = s.value),
                typeof n == 'string' ? n.replace(Mt, '') : n == null ? '' : n)
          )
        return
      }
      return (
        (i = lt.isFunction(e)),
        this.each(function (n) {
          var s
          if (this.nodeType !== 1) return
          i ? (s = e.call(this, n, lt(this).val())) : (s = e),
            s == null
              ? (s = '')
              : typeof s == 'number'
              ? (s += '')
              : lt.isArray(s) &&
                (s = lt.map(s, function (e) {
                  return e == null ? '' : e + ''
                })),
            (r =
              lt.valHooks[this.type] ||
              lt.valHooks[this.nodeName.toLowerCase()])
          if (!r || !('set' in r) || r.set(this, s, 'value') === t)
            this.value = s
        })
      )
    }
  }),
    lt.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = lt.find.attr(e, 'value')
            return t != null ? t : e.text
          }
        },
        select: {
          get: function (e) {
            var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              s = e.type === 'select-one' || i < 0,
              o = s ? null : [],
              u = s ? i + 1 : r.length,
              a = i < 0 ? u : s ? i : 0
            for (; a < u; a++) {
              n = r[a]
              if (
                (n.selected || a === i) &&
                (lt.support.optDisabled
                  ? !n.disabled
                  : n.getAttribute('disabled') === null) &&
                (!n.parentNode.disabled ||
                  !lt.nodeName(n.parentNode, 'optgroup'))
              ) {
                t = lt(n).val()
                if (s) return t
                o.push(t)
              }
            }
            return o
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              s = lt.makeArray(t),
              o = i.length
            while (o--) {
              r = i[o]
              if ((r.selected = lt.inArray(lt(r).val(), s) >= 0)) n = !0
            }
            return n || (e.selectedIndex = -1), s
          }
        }
      },
      attr: function (e, n, r) {
        var i,
          s,
          o = e.nodeType
        if (!e || o === 3 || o === 8 || o === 2) return
        if (typeof e.getAttribute === J) return lt.prop(e, n, r)
        if (o !== 1 || !lt.isXMLDoc(e))
          (n = n.toLowerCase()),
            (i = lt.attrHooks[n] || (lt.expr.match.bool.test(n) ? At : Lt))
        if (r === t)
          return i && 'get' in i && (s = i.get(e, n)) !== null
            ? s
            : ((s = lt.find.attr(e, n)), s == null ? t : s)
        if (r !== null)
          return i && 'set' in i && (s = i.set(e, r, n)) !== t
            ? s
            : (e.setAttribute(n, r + ''), r)
        lt.removeAttr(e, n)
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          s = t && t.match(ht)
        if (s && e.nodeType === 1)
          while ((n = s[i++]))
            (r = lt.propFix[n] || n),
              lt.expr.match.bool.test(n)
                ? (Bt && Ht) || !Pt.test(n)
                  ? (e[r] = !1)
                  : (e[lt.camelCase('default-' + n)] = e[r] = !1)
                : lt.attr(e, n, ''),
              e.removeAttribute(Ht ? n : r)
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (
              !lt.support.radioValue &&
              t === 'radio' &&
              lt.nodeName(e, 'input')
            ) {
              var n = e.value
              return e.setAttribute('type', t), n && (e.value = n), t
            }
          }
        }
      },
      propFix: { for: 'htmlFor', class: 'className' },
      prop: function (e, n, r) {
        var i,
          s,
          o,
          u = e.nodeType
        if (!e || u === 3 || u === 8 || u === 2) return
        return (
          (o = u !== 1 || !lt.isXMLDoc(e)),
          o && ((n = lt.propFix[n] || n), (s = lt.propHooks[n])),
          r !== t
            ? s && 'set' in s && (i = s.set(e, r, n)) !== t
              ? i
              : (e[n] = r)
            : s && 'get' in s && (i = s.get(e, n)) !== null
            ? i
            : e[n]
        )
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = lt.find.attr(e, 'tabindex')
            return t
              ? parseInt(t, 10)
              : _t.test(e.nodeName) || (Dt.test(e.nodeName) && e.href)
              ? 0
              : -1
          }
        }
      }
    }),
    (At = {
      set: function (e, t, n) {
        return (
          t === !1
            ? lt.removeAttr(e, n)
            : (Bt && Ht) || !Pt.test(n)
            ? e.setAttribute((!Ht && lt.propFix[n]) || n, n)
            : (e[lt.camelCase('default-' + n)] = e[n] = !0),
          n
        )
      }
    }),
    lt.each(lt.expr.match.bool.source.match(/\w+/g), function (e, n) {
      var r = lt.expr.attrHandle[n] || lt.find.attr
      lt.expr.attrHandle[n] =
        (Bt && Ht) || !Pt.test(n)
          ? function (e, n, i) {
              var s = lt.expr.attrHandle[n],
                o = i
                  ? t
                  : (lt.expr.attrHandle[n] = t) != r(e, n, i)
                  ? n.toLowerCase()
                  : null
              return (lt.expr.attrHandle[n] = s), o
            }
          : function (e, n, r) {
              return r
                ? t
                : e[lt.camelCase('default-' + n)]
                ? n.toLowerCase()
                : null
            }
    })
  if (!Bt || !Ht)
    lt.attrHooks.value = {
      set: function (e, t, n) {
        if (!lt.nodeName(e, 'input')) return Lt && Lt.set(e, t, n)
        e.defaultValue = t
      }
    }
  Ht ||
    ((Lt = {
      set: function (e, n, r) {
        var i = e.getAttributeNode(r)
        return (
          i || e.setAttributeNode((i = e.ownerDocument.createAttribute(r))),
          (i.value = n += ''),
          r === 'value' || n === e.getAttribute(r) ? n : t
        )
      }
    }),
    (lt.expr.attrHandle.id =
      lt.expr.attrHandle.name =
      lt.expr.attrHandle.coords =
        function (e, n, r) {
          var i
          return r
            ? t
            : (i = e.getAttributeNode(n)) && i.value !== ''
            ? i.value
            : null
        }),
    (lt.valHooks.button = {
      get: function (e, n) {
        var r = e.getAttributeNode(n)
        return r && r.specified ? r.value : t
      },
      set: Lt.set
    }),
    (lt.attrHooks.contenteditable = {
      set: function (e, t, n) {
        Lt.set(e, t === '' ? !1 : t, n)
      }
    }),
    lt.each(['width', 'height'], function (e, t) {
      lt.attrHooks[t] = {
        set: function (e, n) {
          if (n === '') return e.setAttribute(t, 'auto'), n
        }
      }
    })),
    lt.support.hrefNormalized ||
      lt.each(['href', 'src'], function (e, t) {
        lt.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4)
          }
        }
      }),
    lt.support.style ||
      (lt.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || t
        },
        set: function (e, t) {
          return (e.style.cssText = t + '')
        }
      }),
    lt.support.optSelected ||
      (lt.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          )
        }
      }),
    lt.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
      ],
      function () {
        lt.propFix[this.toLowerCase()] = this
      }
    ),
    lt.support.enctype || (lt.propFix.enctype = 'encoding'),
    lt.each(['radio', 'checkbox'], function () {
      ;(lt.valHooks[this] = {
        set: function (e, t) {
          if (lt.isArray(t))
            return (e.checked = lt.inArray(lt(e).val(), t) >= 0)
        }
      }),
        lt.support.checkOn ||
          (lt.valHooks[this].get = function (e) {
            return e.getAttribute('value') === null ? 'on' : e.value
          })
    })
  var jt = /^(?:input|select|textarea)$/i,
    Ft = /^key/,
    It = /^(?:mouse|contextmenu)|click/,
    qt = /^(?:focusinfocus|focusoutblur)$/,
    Rt = /^([^.]*)(?:\.(.+)|)$/
  ;(lt.event = {
    global: {},
    add: function (e, n, r, i, s) {
      var o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g = lt._data(e)
      if (!g) return
      r.handler && ((f = r), (r = f.handler), (s = f.selector)),
        r.guid || (r.guid = lt.guid++),
        (u = g.events) || (u = g.events = {}),
        (c = g.handle) ||
          ((c = g.handle =
            function (e) {
              return typeof lt === J || (!!e && lt.event.triggered === e.type)
                ? t
                : lt.event.dispatch.apply(c.elem, arguments)
            }),
          (c.elem = e)),
        (n = (n || '').match(ht) || ['']),
        (a = n.length)
      while (a--) {
        ;(o = Rt.exec(n[a]) || []),
          (d = m = o[1]),
          (v = (o[2] || '').split('.').sort())
        if (!d) continue
        ;(l = lt.event.special[d] || {}),
          (d = (s ? l.delegateType : l.bindType) || d),
          (l = lt.event.special[d] || {}),
          (h = lt.extend(
            {
              type: d,
              origType: m,
              data: i,
              handler: r,
              guid: r.guid,
              selector: s,
              needsContext: s && lt.expr.match.needsContext.test(s),
              namespace: v.join('.')
            },
            f
          ))
        if (!(p = u[d])) {
          ;(p = u[d] = []), (p.delegateCount = 0)
          if (!l.setup || l.setup.call(e, i, v, c) === !1)
            e.addEventListener
              ? e.addEventListener(d, c, !1)
              : e.attachEvent && e.attachEvent('on' + d, c)
        }
        l.add &&
          (l.add.call(e, h), h.handler.guid || (h.handler.guid = r.guid)),
          s ? p.splice(p.delegateCount++, 0, h) : p.push(h),
          (lt.event.global[d] = !0)
      }
      e = null
    },
    remove: function (e, t, n, r, i) {
      var s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m = lt.hasData(e) && lt._data(e)
      if (!m || !(l = m.events)) return
      ;(t = (t || '').match(ht) || ['']), (f = t.length)
      while (f--) {
        ;(u = Rt.exec(t[f]) || []),
          (p = v = u[1]),
          (d = (u[2] || '').split('.').sort())
        if (!p) {
          for (p in l) lt.event.remove(e, p + t[f], n, r, !0)
          continue
        }
        ;(c = lt.event.special[p] || {}),
          (p = (r ? c.delegateType : c.bindType) || p),
          (h = l[p] || []),
          (u =
            u[2] &&
            new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)')),
          (a = s = h.length)
        while (s--)
          (o = h[s]),
            (i || v === o.origType) &&
              (!n || n.guid === o.guid) &&
              (!u || u.test(o.namespace)) &&
              (!r || r === o.selector || (r === '**' && o.selector)) &&
              (h.splice(s, 1),
              o.selector && h.delegateCount--,
              c.remove && c.remove.call(e, o))
        a &&
          !h.length &&
          ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) &&
            lt.removeEvent(e, p, m.handle),
          delete l[p])
      }
      lt.isEmptyObject(l) && (delete m.handle, lt._removeData(e, 'events'))
    },
    trigger: function (n, r, i, s) {
      var o,
        u,
        a,
        f,
        l,
        c,
        h,
        p = [i || Q],
        d = at.call(n, 'type') ? n.type : n,
        v = at.call(n, 'namespace') ? n.namespace.split('.') : []
      a = c = i = i || Q
      if (i.nodeType === 3 || i.nodeType === 8) return
      if (qt.test(d + lt.event.triggered)) return
      d.indexOf('.') >= 0 && ((v = d.split('.')), (d = v.shift()), v.sort()),
        (u = d.indexOf(':') < 0 && 'on' + d),
        (n = n[lt.expando] ? n : new lt.Event(d, typeof n == 'object' && n)),
        (n.isTrigger = s ? 2 : 3),
        (n.namespace = v.join('.')),
        (n.namespace_re = n.namespace
          ? new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)')
          : null),
        (n.result = t),
        n.target || (n.target = i),
        (r = r == null ? [n] : lt.makeArray(r, [n])),
        (l = lt.event.special[d] || {})
      if (!s && l.trigger && l.trigger.apply(i, r) === !1) return
      if (!s && !l.noBubble && !lt.isWindow(i)) {
        ;(f = l.delegateType || d), qt.test(f + d) || (a = a.parentNode)
        for (; a; a = a.parentNode) p.push(a), (c = a)
        c === (i.ownerDocument || Q) &&
          p.push(c.defaultView || c.parentWindow || e)
      }
      h = 0
      while ((a = p[h++]) && !n.isPropagationStopped())
        (n.type = h > 1 ? f : l.bindType || d),
          (o = (lt._data(a, 'events') || {})[n.type] && lt._data(a, 'handle')),
          o && o.apply(a, r),
          (o = u && a[u]),
          o &&
            lt.acceptData(a) &&
            o.apply &&
            o.apply(a, r) === !1 &&
            n.preventDefault()
      n.type = d
      if (
        !s &&
        !n.isDefaultPrevented() &&
        (!l._default || l._default.apply(p.pop(), r) === !1) &&
        lt.acceptData(i) &&
        u &&
        i[d] &&
        !lt.isWindow(i)
      ) {
        ;(c = i[u]), c && (i[u] = null), (lt.event.triggered = d)
        try {
          i[d]()
        } catch (m) {}
        ;(lt.event.triggered = t), c && (i[u] = c)
      }
      return n.result
    },
    dispatch: function (e) {
      e = lt.event.fix(e)
      var n,
        r,
        i,
        s,
        o,
        u = [],
        a = st.call(arguments),
        f = (lt._data(this, 'events') || {})[e.type] || [],
        l = lt.event.special[e.type] || {}
      ;(a[0] = e), (e.delegateTarget = this)
      if (l.preDispatch && l.preDispatch.call(this, e) === !1) return
      ;(u = lt.event.handlers.call(this, e, f)), (n = 0)
      while ((s = u[n++]) && !e.isPropagationStopped()) {
        ;(e.currentTarget = s.elem), (o = 0)
        while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
          if (!e.namespace_re || e.namespace_re.test(i.namespace))
            (e.handleObj = i),
              (e.data = i.data),
              (r = (
                (lt.event.special[i.origType] || {}).handle || i.handler
              ).apply(s.elem, a)),
              r !== t &&
                (e.result = r) === !1 &&
                (e.preventDefault(), e.stopPropagation())
      }
      return l.postDispatch && l.postDispatch.call(this, e), e.result
    },
    handlers: function (e, n) {
      var r,
        i,
        s,
        o,
        u = [],
        a = n.delegateCount,
        f = e.target
      if (a && f.nodeType && (!e.button || e.type !== 'click'))
        for (; f != this; f = f.parentNode || this)
          if (f.nodeType === 1 && (f.disabled !== !0 || e.type !== 'click')) {
            s = []
            for (o = 0; o < a; o++)
              (i = n[o]),
                (r = i.selector + ' '),
                s[r] === t &&
                  (s[r] = i.needsContext
                    ? lt(r, this).index(f) >= 0
                    : lt.find(r, this, null, [f]).length),
                s[r] && s.push(i)
            s.length && u.push({ elem: f, handlers: s })
          }
      return a < n.length && u.push({ elem: this, handlers: n.slice(a) }), u
    },
    fix: function (e) {
      if (e[lt.expando]) return e
      var t,
        n,
        r,
        i = e.type,
        s = e,
        o = this.fixHooks[i]
      o ||
        (this.fixHooks[i] = o =
          It.test(i) ? this.mouseHooks : Ft.test(i) ? this.keyHooks : {}),
        (r = o.props ? this.props.concat(o.props) : this.props),
        (e = new lt.Event(s)),
        (t = r.length)
      while (t--) (n = r[t]), (e[n] = s[n])
      return (
        e.target || (e.target = s.srcElement || Q),
        e.target.nodeType === 3 && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        o.filter ? o.filter(e, s) : e
      )
    },
    props:
      'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
        ' '
      ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, t) {
        return (
          e.which == null &&
            (e.which = t.charCode != null ? t.charCode : t.keyCode),
          e
        )
      }
    },
    mouseHooks: {
      props:
        'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
          ' '
        ),
      filter: function (e, n) {
        var r,
          i,
          s,
          o = n.button,
          u = n.fromElement
        return (
          e.pageX == null &&
            n.clientX != null &&
            ((i = e.target.ownerDocument || Q),
            (s = i.documentElement),
            (r = i.body),
            (e.pageX =
              n.clientX +
              ((s && s.scrollLeft) || (r && r.scrollLeft) || 0) -
              ((s && s.clientLeft) || (r && r.clientLeft) || 0)),
            (e.pageY =
              n.clientY +
              ((s && s.scrollTop) || (r && r.scrollTop) || 0) -
              ((s && s.clientTop) || (r && r.clientTop) || 0))),
          !e.relatedTarget &&
            u &&
            (e.relatedTarget = u === e.target ? n.toElement : u),
          !e.which &&
            o !== t &&
            (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0),
          e
        )
      }
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== l() && this.focus)
            try {
              return this.focus(), !1
            } catch (e) {}
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          if (this === l() && this.blur) return this.blur(), !1
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          if (
            lt.nodeName(this, 'input') &&
            this.type === 'checkbox' &&
            this.click
          )
            return this.click(), !1
        },
        _default: function (e) {
          return lt.nodeName(e.target, 'a')
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = lt.extend(new lt.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      })
      r ? lt.event.trigger(i, null, t) : lt.event.dispatch.call(t, i),
        i.isDefaultPrevented() && n.preventDefault()
    }
  }),
    (lt.removeEvent = Q.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1)
        }
      : function (e, t, n) {
          var r = 'on' + t
          e.detachEvent &&
            (typeof e[r] === J && (e[r] = null), e.detachEvent(r, n))
        }),
    (lt.Event = function (e, t) {
      if (!(this instanceof lt.Event)) return new lt.Event(e, t)
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            e.returnValue === !1 ||
            (e.getPreventDefault && e.getPreventDefault())
              ? a
              : f))
        : (this.type = e),
        t && lt.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || lt.now()),
        (this[lt.expando] = !0)
    }),
    (lt.Event.prototype = {
      isDefaultPrevented: f,
      isPropagationStopped: f,
      isImmediatePropagationStopped: f,
      preventDefault: function () {
        var e = this.originalEvent
        this.isDefaultPrevented = a
        if (!e) return
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1)
      },
      stopPropagation: function () {
        var e = this.originalEvent
        this.isPropagationStopped = a
        if (!e) return
        e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0)
      },
      stopImmediatePropagation: function () {
        ;(this.isImmediatePropagationStopped = a), this.stopPropagation()
      }
    }),
    lt.each(
      { mouseenter: 'mouseover', mouseleave: 'mouseout' },
      function (e, t) {
        lt.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              s = e.handleObj
            if (!i || (i !== r && !lt.contains(r, i)))
              (e.type = s.origType),
                (n = s.handler.apply(this, arguments)),
                (e.type = t)
            return n
          }
        }
      }
    ),
    lt.support.submitBubbles ||
      (lt.event.special.submit = {
        setup: function () {
          if (lt.nodeName(this, 'form')) return !1
          lt.event.add(this, 'click._submit keypress._submit', function (e) {
            var n = e.target,
              r =
                lt.nodeName(n, 'input') || lt.nodeName(n, 'button') ? n.form : t
            r &&
              !lt._data(r, 'submitBubbles') &&
              (lt.event.add(r, 'submit._submit', function (e) {
                e._submit_bubble = !0
              }),
              lt._data(r, 'submitBubbles', !0))
          })
        },
        postDispatch: function (e) {
          e._submit_bubble &&
            (delete e._submit_bubble,
            this.parentNode &&
              !e.isTrigger &&
              lt.event.simulate('submit', this.parentNode, e, !0))
        },
        teardown: function () {
          if (lt.nodeName(this, 'form')) return !1
          lt.event.remove(this, '._submit')
        }
      }),
    lt.support.changeBubbles ||
      (lt.event.special.change = {
        setup: function () {
          if (jt.test(this.nodeName)) {
            if (this.type === 'checkbox' || this.type === 'radio')
              lt.event.add(this, 'propertychange._change', function (e) {
                e.originalEvent.propertyName === 'checked' &&
                  (this._just_changed = !0)
              }),
                lt.event.add(this, 'click._change', function (e) {
                  this._just_changed &&
                    !e.isTrigger &&
                    (this._just_changed = !1),
                    lt.event.simulate('change', this, e, !0)
                })
            return !1
          }
          lt.event.add(this, 'beforeactivate._change', function (e) {
            var t = e.target
            jt.test(t.nodeName) &&
              !lt._data(t, 'changeBubbles') &&
              (lt.event.add(t, 'change._change', function (e) {
                this.parentNode &&
                  !e.isSimulated &&
                  !e.isTrigger &&
                  lt.event.simulate('change', this.parentNode, e, !0)
              }),
              lt._data(t, 'changeBubbles', !0))
          })
        },
        handle: function (e) {
          var t = e.target
          if (
            this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            (t.type !== 'radio' && t.type !== 'checkbox')
          )
            return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
          return lt.event.remove(this, '._change'), !jt.test(this.nodeName)
        }
      }),
    lt.support.focusinBubbles ||
      lt.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
        var n = 0,
          r = function (e) {
            lt.event.simulate(t, e.target, lt.event.fix(e), !0)
          }
        lt.event.special[t] = {
          setup: function () {
            n++ === 0 && Q.addEventListener(e, r, !0)
          },
          teardown: function () {
            --n === 0 && Q.removeEventListener(e, r, !0)
          }
        }
      }),
    lt.fn.extend({
      on: function (e, n, r, i, s) {
        var o, u
        if (typeof e == 'object') {
          typeof n != 'string' && ((r = r || n), (n = t))
          for (o in e) this.on(o, n, r, e[o], s)
          return this
        }
        r == null && i == null
          ? ((i = n), (r = n = t))
          : i == null &&
            (typeof n == 'string'
              ? ((i = r), (r = t))
              : ((i = r), (r = n), (n = t)))
        if (i === !1) i = f
        else if (!i) return this
        return (
          s === 1 &&
            ((u = i),
            (i = function (e) {
              return lt().off(e), u.apply(this, arguments)
            }),
            (i.guid = u.guid || (u.guid = lt.guid++))),
          this.each(function () {
            lt.event.add(this, e, i, r, n)
          })
        )
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1)
      },
      off: function (e, n, r) {
        var i, s
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            lt(e.delegateTarget).off(
              i.namespace ? i.origType + '.' + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          )
        if (typeof e == 'object') {
          for (s in e) this.off(s, n, e[s])
          return this
        }
        if (n === !1 || typeof n == 'function') (r = n), (n = t)
        return (
          r === !1 && (r = f),
          this.each(function () {
            lt.event.remove(this, e, r, n)
          })
        )
      },
      trigger: function (e, t) {
        return this.each(function () {
          lt.event.trigger(e, t, this)
        })
      },
      triggerHandler: function (e, t) {
        var n = this[0]
        if (n) return lt.event.trigger(e, t, n, !0)
      }
    })
  var Ut = /^.[^:#\[\.,]*$/,
    zt = /^(?:parents|prev(?:Until|All))/,
    Wt = lt.expr.match.needsContext,
    Xt = { children: !0, contents: !0, next: !0, prev: !0 }
  lt.fn.extend({
    find: function (e) {
      var t,
        n = [],
        r = this,
        i = r.length
      if (typeof e != 'string')
        return this.pushStack(
          lt(e).filter(function () {
            for (t = 0; t < i; t++) if (lt.contains(r[t], this)) return !0
          })
        )
      for (t = 0; t < i; t++) lt.find(e, r[t], n)
      return (
        (n = this.pushStack(i > 1 ? lt.unique(n) : n)),
        (n.selector = this.selector ? this.selector + ' ' + e : e),
        n
      )
    },
    has: function (e) {
      var t,
        n = lt(e, this),
        r = n.length
      return this.filter(function () {
        for (t = 0; t < r; t++) if (lt.contains(this, n[t])) return !0
      })
    },
    not: function (e) {
      return this.pushStack(h(this, e || [], !0))
    },
    filter: function (e) {
      return this.pushStack(h(this, e || [], !1))
    },
    is: function (e) {
      return !!h(this, typeof e == 'string' && Wt.test(e) ? lt(e) : e || [], !1)
        .length
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        s = [],
        o = Wt.test(e) || typeof e != 'string' ? lt(e, t || this.context) : 0
      for (; r < i; r++)
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (o
              ? o.index(n) > -1
              : n.nodeType === 1 && lt.find.matchesSelector(n, e))
          ) {
            n = s.push(n)
            break
          }
      return this.pushStack(s.length > 1 ? lt.unique(s) : s)
    },
    index: function (e) {
      return e
        ? typeof e == 'string'
          ? lt.inArray(this[0], lt(e))
          : lt.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1
    },
    add: function (e, t) {
      var n =
          typeof e == 'string'
            ? lt(e, t)
            : lt.makeArray(e && e.nodeType ? [e] : e),
        r = lt.merge(this.get(), n)
      return this.pushStack(lt.unique(r))
    },
    addBack: function (e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }
  }),
    lt.each(
      {
        parent: function (e) {
          var t = e.parentNode
          return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
          return lt.dir(e, 'parentNode')
        },
        parentsUntil: function (e, t, n) {
          return lt.dir(e, 'parentNode', n)
        },
        next: function (e) {
          return c(e, 'nextSibling')
        },
        prev: function (e) {
          return c(e, 'previousSibling')
        },
        nextAll: function (e) {
          return lt.dir(e, 'nextSibling')
        },
        prevAll: function (e) {
          return lt.dir(e, 'previousSibling')
        },
        nextUntil: function (e, t, n) {
          return lt.dir(e, 'nextSibling', n)
        },
        prevUntil: function (e, t, n) {
          return lt.dir(e, 'previousSibling', n)
        },
        siblings: function (e) {
          return lt.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
          return lt.sibling(e.firstChild)
        },
        contents: function (e) {
          return lt.nodeName(e, 'iframe')
            ? e.contentDocument || e.contentWindow.document
            : lt.merge([], e.childNodes)
        }
      },
      function (e, t) {
        lt.fn[e] = function (n, r) {
          var i = lt.map(this, t, n)
          return (
            e.slice(-5) !== 'Until' && (r = n),
            r && typeof r == 'string' && (i = lt.filter(r, i)),
            this.length > 1 &&
              (Xt[e] || (i = lt.unique(i)), zt.test(e) && (i = i.reverse())),
            this.pushStack(i)
          )
        }
      }
    ),
    lt.extend({
      filter: function (e, t, n) {
        var r = t[0]
        return (
          n && (e = ':not(' + e + ')'),
          t.length === 1 && r.nodeType === 1
            ? lt.find.matchesSelector(r, e)
              ? [r]
              : []
            : lt.find.matches(
                e,
                lt.grep(t, function (e) {
                  return e.nodeType === 1
                })
              )
        )
      },
      dir: function (e, n, r) {
        var i = [],
          s = e[n]
        while (
          s &&
          s.nodeType !== 9 &&
          (r === t || s.nodeType !== 1 || !lt(s).is(r))
        )
          s.nodeType === 1 && i.push(s), (s = s[n])
        return i
      },
      sibling: function (e, t) {
        var n = []
        for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e)
        return n
      }
    })
  var Vt =
      'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
    $t = / jQuery\d+="(?:null|\d+)"/g,
    Jt = new RegExp('<(?:' + Vt + ')[\\s/>]', 'i'),
    Kt = /^\s+/,
    Qt =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Gt = /<([\w:]+)/,
    Yt = /<tbody/i,
    Zt = /<|&#?\w+;/,
    en = /<(?:script|style|link)/i,
    tn = /^(?:checkbox|radio)$/i,
    nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rn = /^$|\/(?:java|ecma)script/i,
    sn = /^true\/(.*)/,
    on = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    un = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      legend: [1, '<fieldset>', '</fieldset>'],
      area: [1, '<map>', '</map>'],
      param: [1, '<object>', '</object>'],
      thead: [1, '<table>', '</table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: lt.support.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>']
    },
    an = p(Q),
    fn = an.appendChild(Q.createElement('div'))
  ;(un.optgroup = un.option),
    (un.tbody = un.tfoot = un.colgroup = un.caption = un.thead),
    (un.th = un.td),
    lt.fn.extend({
      text: function (e) {
        return lt.access(
          this,
          function (e) {
            return e === t
              ? lt.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || Q).createTextNode(e)
                )
          },
          null,
          e,
          arguments.length
        )
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          if (
            this.nodeType === 1 ||
            this.nodeType === 11 ||
            this.nodeType === 9
          ) {
            var t = d(this, e)
            t.appendChild(e)
          }
        })
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          if (
            this.nodeType === 1 ||
            this.nodeType === 11 ||
            this.nodeType === 9
          ) {
            var t = d(this, e)
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      remove: function (e, t) {
        var n,
          r = e ? lt.filter(e, this) : this,
          i = 0
        for (; (n = r[i]) != null; i++)
          !t && n.nodeType === 1 && lt.cleanData(w(n)),
            n.parentNode &&
              (t && lt.contains(n.ownerDocument, n) && g(w(n, 'script')),
              n.parentNode.removeChild(n))
        return this
      },
      empty: function () {
        var e,
          t = 0
        for (; (e = this[t]) != null; t++) {
          e.nodeType === 1 && lt.cleanData(w(e, !1))
          while (e.firstChild) e.removeChild(e.firstChild)
          e.options && lt.nodeName(e, 'select') && (e.options.length = 0)
        }
        return this
      },
      clone: function (e, t) {
        return (
          (e = e == null ? !1 : e),
          (t = t == null ? e : t),
          this.map(function () {
            return lt.clone(this, e, t)
          })
        )
      },
      html: function (e) {
        return lt.access(
          this,
          function (e) {
            var n = this[0] || {},
              r = 0,
              i = this.length
            if (e === t)
              return n.nodeType === 1 ? n.innerHTML.replace($t, '') : t
            if (
              typeof e == 'string' &&
              !en.test(e) &&
              (lt.support.htmlSerialize || !Jt.test(e)) &&
              (lt.support.leadingWhitespace || !Kt.test(e)) &&
              !un[(Gt.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = e.replace(Qt, '<$1></$2>')
              try {
                for (; r < i; r++)
                  (n = this[r] || {}),
                    n.nodeType === 1 &&
                      (lt.cleanData(w(n, !1)), (n.innerHTML = e))
                n = 0
              } catch (s) {}
            }
            n && this.empty().append(e)
          },
          null,
          e,
          arguments.length
        )
      },
      replaceWith: function () {
        var e = lt.map(this, function (e) {
            return [e.nextSibling, e.parentNode]
          }),
          t = 0
        return (
          this.domManip(
            arguments,
            function (n) {
              var r = e[t++],
                i = e[t++]
              i &&
                (r && r.parentNode !== i && (r = this.nextSibling),
                lt(this).remove(),
                i.insertBefore(n, r))
            },
            !0
          ),
          t ? this : this.remove()
        )
      },
      detach: function (e) {
        return this.remove(e, !0)
      },
      domManip: function (e, t, n) {
        e = rt.apply([], e)
        var r,
          i,
          s,
          o,
          u,
          a,
          f = 0,
          l = this.length,
          c = this,
          h = l - 1,
          p = e[0],
          d = lt.isFunction(p)
        if (
          d ||
          !(
            l <= 1 ||
            typeof p != 'string' ||
            lt.support.checkClone ||
            !nn.test(p)
          )
        )
          return this.each(function (r) {
            var i = c.eq(r)
            d && (e[0] = p.call(this, r, i.html())), i.domManip(e, t, n)
          })
        if (l) {
          ;(a = lt.buildFragment(e, this[0].ownerDocument, !1, !n && this)),
            (r = a.firstChild),
            a.childNodes.length === 1 && (a = r)
          if (r) {
            ;(o = lt.map(w(a, 'script'), v)), (s = o.length)
            for (; f < l; f++)
              (i = a),
                f !== h &&
                  ((i = lt.clone(i, !0, !0)), s && lt.merge(o, w(i, 'script'))),
                t.call(this[f], i, f)
            if (s) {
              ;(u = o[o.length - 1].ownerDocument), lt.map(o, m)
              for (f = 0; f < s; f++)
                (i = o[f]),
                  rn.test(i.type || '') &&
                    !lt._data(i, 'globalEval') &&
                    lt.contains(u, i) &&
                    (i.src
                      ? lt._evalUrl(i.src)
                      : lt.globalEval(
                          (
                            i.text ||
                            i.textContent ||
                            i.innerHTML ||
                            ''
                          ).replace(on, '')
                        ))
            }
            a = r = null
          }
        }
        return this
      }
    }),
    lt.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
      },
      function (e, t) {
        lt.fn[e] = function (e) {
          var n,
            r = 0,
            i = [],
            s = lt(e),
            o = s.length - 1
          for (; r <= o; r++)
            (n = r === o ? this : this.clone(!0)),
              lt(s[r])[t](n),
              it.apply(i, n.get())
          return this.pushStack(i)
        }
      }
    ),
    lt.extend({
      clone: function (e, t, n) {
        var r,
          i,
          s,
          o,
          u,
          a = lt.contains(e.ownerDocument, e)
        lt.support.html5Clone ||
        lt.isXMLDoc(e) ||
        !Jt.test('<' + e.nodeName + '>')
          ? (s = e.cloneNode(!0))
          : ((fn.innerHTML = e.outerHTML), fn.removeChild((s = fn.firstChild)))
        if (
          (!lt.support.noCloneEvent || !lt.support.noCloneChecked) &&
          (e.nodeType === 1 || e.nodeType === 11) &&
          !lt.isXMLDoc(e)
        ) {
          ;(r = w(s)), (u = w(e))
          for (o = 0; (i = u[o]) != null; ++o) r[o] && b(i, r[o])
        }
        if (t)
          if (n) {
            ;(u = u || w(e)), (r = r || w(s))
            for (o = 0; (i = u[o]) != null; o++) y(i, r[o])
          } else y(e, s)
        return (
          (r = w(s, 'script')),
          r.length > 0 && g(r, !a && w(e, 'script')),
          (r = u = i = null),
          s
        )
      },
      buildFragment: function (e, t, n, r) {
        var i,
          s,
          o,
          u,
          a,
          f,
          l,
          c = e.length,
          h = p(t),
          d = [],
          v = 0
        for (; v < c; v++) {
          s = e[v]
          if (s || s === 0)
            if (lt.type(s) === 'object') lt.merge(d, s.nodeType ? [s] : s)
            else if (!Zt.test(s)) d.push(t.createTextNode(s))
            else {
              ;(u = u || h.appendChild(t.createElement('div'))),
                (a = (Gt.exec(s) || ['', ''])[1].toLowerCase()),
                (l = un[a] || un._default),
                (u.innerHTML = l[1] + s.replace(Qt, '<$1></$2>') + l[2]),
                (i = l[0])
              while (i--) u = u.lastChild
              !lt.support.leadingWhitespace &&
                Kt.test(s) &&
                d.push(t.createTextNode(Kt.exec(s)[0]))
              if (!lt.support.tbody) {
                ;(s =
                  a === 'table' && !Yt.test(s)
                    ? u.firstChild
                    : l[1] === '<table>' && !Yt.test(s)
                    ? u
                    : 0),
                  (i = s && s.childNodes.length)
                while (i--)
                  lt.nodeName((f = s.childNodes[i]), 'tbody') &&
                    !f.childNodes.length &&
                    s.removeChild(f)
              }
              lt.merge(d, u.childNodes), (u.textContent = '')
              while (u.firstChild) u.removeChild(u.firstChild)
              u = h.lastChild
            }
        }
        u && h.removeChild(u),
          lt.support.appendChecked || lt.grep(w(d, 'input'), E),
          (v = 0)
        while ((s = d[v++])) {
          if (r && lt.inArray(s, r) !== -1) continue
          ;(o = lt.contains(s.ownerDocument, s)),
            (u = w(h.appendChild(s), 'script')),
            o && g(u)
          if (n) {
            i = 0
            while ((s = u[i++])) rn.test(s.type || '') && n.push(s)
          }
        }
        return (u = null), h
      },
      cleanData: function (e, t) {
        var n,
          r,
          i,
          s,
          o = 0,
          u = lt.expando,
          a = lt.cache,
          f = lt.support.deleteExpando,
          l = lt.event.special
        for (; (n = e[o]) != null; o++)
          if (t || lt.acceptData(n)) {
            ;(i = n[u]), (s = i && a[i])
            if (s) {
              if (s.events)
                for (r in s.events)
                  l[r] ? lt.event.remove(n, r) : lt.removeEvent(n, r, s.handle)
              a[i] &&
                (delete a[i],
                f
                  ? delete n[u]
                  : typeof n.removeAttribute !== J
                  ? n.removeAttribute(u)
                  : (n[u] = null),
                tt.push(i))
            }
          }
      },
      _evalUrl: function (e) {
        return lt.ajax({
          url: e,
          type: 'GET',
          dataType: 'script',
          async: !1,
          global: !1,
          throws: !0
        })
      }
    }),
    lt.fn.extend({
      wrapAll: function (e) {
        if (lt.isFunction(e))
          return this.each(function (t) {
            lt(this).wrapAll(e.call(this, t))
          })
        if (this[0]) {
          var t = lt(e, this[0].ownerDocument).eq(0).clone(!0)
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this
                while (e.firstChild && e.firstChild.nodeType === 1)
                  e = e.firstChild
                return e
              })
              .append(this)
        }
        return this
      },
      wrapInner: function (e) {
        return lt.isFunction(e)
          ? this.each(function (t) {
              lt(this).wrapInner(e.call(this, t))
            })
          : this.each(function () {
              var t = lt(this),
                n = t.contents()
              n.length ? n.wrapAll(e) : t.append(e)
            })
      },
      wrap: function (e) {
        var t = lt.isFunction(e)
        return this.each(function (n) {
          lt(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            lt.nodeName(this, 'body') || lt(this).replaceWith(this.childNodes)
          })
          .end()
      }
    })
  var ln,
    cn,
    hn,
    pn = /alpha\([^)]*\)/i,
    dn = /opacity\s*=\s*([^)]*)/,
    vn = /^(top|right|bottom|left)$/,
    mn = /^(none|table(?!-c[ea]).+)/,
    gn = /^margin/,
    yn = new RegExp('^(' + ct + ')(.*)$', 'i'),
    bn = new RegExp('^(' + ct + ')(?!px)[a-z%]+$', 'i'),
    wn = new RegExp('^([+-])=(' + ct + ')', 'i'),
    En = { BODY: 'block' },
    Sn = { position: 'absolute', visibility: 'hidden', display: 'block' },
    xn = { letterSpacing: 0, fontWeight: 400 },
    Tn = ['Top', 'Right', 'Bottom', 'Left'],
    Nn = ['Webkit', 'O', 'Moz', 'ms']
  lt.fn.extend({
    css: function (e, n) {
      return lt.access(
        this,
        function (e, n, r) {
          var i,
            s,
            o = {},
            u = 0
          if (lt.isArray(n)) {
            ;(s = cn(e)), (i = n.length)
            for (; u < i; u++) o[n[u]] = lt.css(e, n[u], !1, s)
            return o
          }
          return r !== t ? lt.style(e, n, r) : lt.css(e, n)
        },
        e,
        n,
        arguments.length > 1
      )
    },
    show: function () {
      return T(this, !0)
    },
    hide: function () {
      return T(this)
    },
    toggle: function (e) {
      return typeof e == 'boolean'
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            x(this) ? lt(this).show() : lt(this).hide()
          })
    }
  }),
    lt.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = hn(e, 'opacity')
              return n === '' ? '1' : n
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: { float: lt.support.cssFloat ? 'cssFloat' : 'styleFloat' },
      style: function (e, n, r, i) {
        if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return
        var s,
          o,
          u,
          a = lt.camelCase(n),
          f = e.style
        ;(n = lt.cssProps[a] || (lt.cssProps[a] = S(f, a))),
          (u = lt.cssHooks[n] || lt.cssHooks[a])
        if (r === t)
          return u && 'get' in u && (s = u.get(e, !1, i)) !== t ? s : f[n]
        ;(o = typeof r),
          o === 'string' &&
            (s = wn.exec(r)) &&
            ((r = (s[1] + 1) * s[2] + parseFloat(lt.css(e, n))), (o = 'number'))
        if (r == null || (o === 'number' && isNaN(r))) return
        o === 'number' && !lt.cssNumber[a] && (r += 'px'),
          !lt.support.clearCloneStyle &&
            r === '' &&
            n.indexOf('background') === 0 &&
            (f[n] = 'inherit')
        if (!u || !('set' in u) || (r = u.set(e, r, i)) !== t)
          try {
            f[n] = r
          } catch (l) {}
      },
      css: function (e, n, r, i) {
        var s,
          o,
          u,
          a = lt.camelCase(n)
        return (
          (n = lt.cssProps[a] || (lt.cssProps[a] = S(e.style, a))),
          (u = lt.cssHooks[n] || lt.cssHooks[a]),
          u && 'get' in u && (o = u.get(e, !0, r)),
          o === t && (o = hn(e, n, i)),
          o === 'normal' && n in xn && (o = xn[n]),
          r === '' || r
            ? ((s = parseFloat(o)), r === !0 || lt.isNumeric(s) ? s || 0 : o)
            : o
        )
      }
    }),
    e.getComputedStyle
      ? ((cn = function (t) {
          return e.getComputedStyle(t, null)
        }),
        (hn = function (e, n, r) {
          var i,
            s,
            o,
            u = r || cn(e),
            a = u ? u.getPropertyValue(n) || u[n] : t,
            f = e.style
          return (
            u &&
              (a === '' &&
                !lt.contains(e.ownerDocument, e) &&
                (a = lt.style(e, n)),
              bn.test(a) &&
                gn.test(n) &&
                ((i = f.width),
                (s = f.minWidth),
                (o = f.maxWidth),
                (f.minWidth = f.maxWidth = f.width = a),
                (a = u.width),
                (f.width = i),
                (f.minWidth = s),
                (f.maxWidth = o))),
            a
          )
        }))
      : Q.documentElement.currentStyle &&
        ((cn = function (e) {
          return e.currentStyle
        }),
        (hn = function (e, n, r) {
          var i,
            s,
            o,
            u = r || cn(e),
            a = u ? u[n] : t,
            f = e.style
          return (
            a == null && f && f[n] && (a = f[n]),
            bn.test(a) &&
              !vn.test(n) &&
              ((i = f.left),
              (s = e.runtimeStyle),
              (o = s && s.left),
              o && (s.left = e.currentStyle.left),
              (f.left = n === 'fontSize' ? '1em' : a),
              (a = f.pixelLeft + 'px'),
              (f.left = i),
              o && (s.left = o)),
            a === '' ? 'auto' : a
          )
        })),
    lt.each(['height', 'width'], function (e, t) {
      lt.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return e.offsetWidth === 0 && mn.test(lt.css(e, 'display'))
              ? lt.swap(e, Sn, function () {
                  return k(e, t, r)
                })
              : k(e, t, r)
        },
        set: function (e, n, r) {
          var i = r && cn(e)
          return N(
            e,
            n,
            r
              ? C(
                  e,
                  t,
                  r,
                  lt.support.boxSizing &&
                    lt.css(e, 'boxSizing', !1, i) === 'border-box',
                  i
                )
              : 0
          )
        }
      }
    }),
    lt.support.opacity ||
      (lt.cssHooks.opacity = {
        get: function (e, t) {
          return dn.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ''
          )
            ? 0.01 * parseFloat(RegExp.$1) + ''
            : t
            ? '1'
            : ''
        },
        set: function (e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = lt.isNumeric(t) ? 'alpha(opacity=' + t * 100 + ')' : '',
            s = (r && r.filter) || n.filter || ''
          n.zoom = 1
          if (
            (t >= 1 || t === '') &&
            lt.trim(s.replace(pn, '')) === '' &&
            n.removeAttribute
          ) {
            n.removeAttribute('filter')
            if (t === '' || (r && !r.filter)) return
          }
          n.filter = pn.test(s) ? s.replace(pn, i) : s + ' ' + i
        }
      }),
    lt(function () {
      lt.support.reliableMarginRight ||
        (lt.cssHooks.marginRight = {
          get: function (e, t) {
            if (t)
              return lt.swap(e, { display: 'inline-block' }, hn, [
                e,
                'marginRight'
              ])
          }
        }),
        !lt.support.pixelPosition &&
          lt.fn.position &&
          lt.each(['top', 'left'], function (e, t) {
            lt.cssHooks[t] = {
              get: function (e, n) {
                if (n)
                  return (
                    (n = hn(e, t)), bn.test(n) ? lt(e).position()[t] + 'px' : n
                  )
              }
            }
          })
    }),
    lt.expr &&
      lt.expr.filters &&
      ((lt.expr.filters.hidden = function (e) {
        return (
          (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
          (!lt.support.reliableHiddenOffsets &&
            ((e.style && e.style.display) || lt.css(e, 'display')) === 'none')
        )
      }),
      (lt.expr.filters.visible = function (e) {
        return !lt.expr.filters.hidden(e)
      })),
    lt.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      ;(lt.cssHooks[e + t] = {
        expand: function (n) {
          var r = 0,
            i = {},
            s = typeof n == 'string' ? n.split(' ') : [n]
          for (; r < 4; r++) i[e + Tn[r] + t] = s[r] || s[r - 2] || s[0]
          return i
        }
      }),
        gn.test(e) || (lt.cssHooks[e + t].set = N)
    })
  var Cn = /%20/g,
    kn = /\[\]$/,
    Ln = /\r?\n/g,
    An = /^(?:submit|button|image|reset|file)$/i,
    On = /^(?:input|select|textarea|keygen)/i
  lt.fn.extend({
    serialize: function () {
      return lt.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var e = lt.prop(this, 'elements')
        return e ? lt.makeArray(e) : this
      })
        .filter(function () {
          var e = this.type
          return (
            this.name &&
            !lt(this).is(':disabled') &&
            On.test(this.nodeName) &&
            !An.test(e) &&
            (this.checked || !tn.test(e))
          )
        })
        .map(function (e, t) {
          var n = lt(this).val()
          return n == null
            ? null
            : lt.isArray(n)
            ? lt.map(n, function (e) {
                return { name: t.name, value: e.replace(Ln, '\r\n') }
              })
            : { name: t.name, value: n.replace(Ln, '\r\n') }
        })
        .get()
    }
  }),
    (lt.param = function (e, n) {
      var r,
        i = [],
        s = function (e, t) {
          ;(t = lt.isFunction(t) ? t() : t == null ? '' : t),
            (i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t))
        }
      n === t && (n = lt.ajaxSettings && lt.ajaxSettings.traditional)
      if (lt.isArray(e) || (e.jquery && !lt.isPlainObject(e)))
        lt.each(e, function () {
          s(this.name, this.value)
        })
      else for (r in e) O(r, e[r], n, s)
      return i.join('&').replace(Cn, '+')
    }),
    lt.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function (e, t) {
        lt.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
      }
    ),
    lt.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function (e, t) {
        return this.off(e, null, t)
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function (e, t, n) {
        return arguments.length === 1
          ? this.off(e, '**')
          : this.off(t, e || '**', n)
      }
    })
  var Mn,
    _n,
    Dn = lt.now(),
    Pn = /\?/,
    Hn = /#.*$/,
    Bn = /([?&])_=[^&]*/,
    jn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    In = /^(?:GET|HEAD)$/,
    qn = /^\/\//,
    Rn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Un = lt.fn.load,
    zn = {},
    Wn = {},
    Xn = '*/'.concat('*')
  try {
    _n = K.href
  } catch (Vn) {
    ;(_n = Q.createElement('a')), (_n.href = ''), (_n = _n.href)
  }
  ;(Mn = Rn.exec(_n.toLowerCase()) || []),
    (lt.fn.load = function (e, n, r) {
      if (typeof e != 'string' && Un) return Un.apply(this, arguments)
      var i,
        s,
        o,
        u = this,
        a = e.indexOf(' ')
      return (
        a >= 0 && ((i = e.slice(a, e.length)), (e = e.slice(0, a))),
        lt.isFunction(n)
          ? ((r = n), (n = t))
          : n && typeof n == 'object' && (o = 'POST'),
        u.length > 0 &&
          lt
            .ajax({ url: e, type: o, dataType: 'html', data: n })
            .done(function (e) {
              ;(s = arguments),
                u.html(i ? lt('<div>').append(lt.parseHTML(e)).find(i) : e)
            })
            .complete(
              r &&
                function (e, t) {
                  u.each(r, s || [e.responseText, t, e])
                }
            ),
        this
      )
    }),
    lt.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
      ],
      function (e, t) {
        lt.fn[t] = function (e) {
          return this.on(t, e)
        }
      }
    ),
    lt.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: _n,
        type: 'GET',
        isLocal: Fn.test(Mn[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Xn,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript'
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON'
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': lt.parseJSON,
          'text xml': lt.parseXML
        },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function (e, t) {
        return t ? D(D(e, lt.ajaxSettings), t) : D(lt.ajaxSettings, e)
      },
      ajaxPrefilter: M(zn),
      ajaxTransport: M(Wn),
      ajax: function (e, n) {
        function r(e, n, r, i) {
          var s,
            c,
            y,
            b,
            E,
            x = n
          if (w === 2) return
          ;(w = 2),
            a && clearTimeout(a),
            (l = t),
            (u = i || ''),
            (S.readyState = e > 0 ? 4 : 0),
            (s = (e >= 200 && e < 300) || e === 304),
            r && (b = P(h, S, r)),
            (b = H(h, b, S, s))
          if (s)
            h.ifModified &&
              ((E = S.getResponseHeader('Last-Modified')),
              E && (lt.lastModified[o] = E),
              (E = S.getResponseHeader('etag')),
              E && (lt.etag[o] = E)),
              e === 204 || h.type === 'HEAD'
                ? (x = 'nocontent')
                : e === 304
                ? (x = 'notmodified')
                : ((x = b.state), (c = b.data), (y = b.error), (s = !y))
          else {
            y = x
            if (e || !x) (x = 'error'), e < 0 && (e = 0)
          }
          ;(S.status = e),
            (S.statusText = (n || x) + ''),
            s ? v.resolveWith(p, [c, x, S]) : v.rejectWith(p, [S, x, y]),
            S.statusCode(g),
            (g = t),
            f && d.trigger(s ? 'ajaxSuccess' : 'ajaxError', [S, h, s ? c : y]),
            m.fireWith(p, [S, x]),
            f &&
              (d.trigger('ajaxComplete', [S, h]),
              --lt.active || lt.event.trigger('ajaxStop'))
        }
        typeof e == 'object' && ((n = e), (e = t)), (n = n || {})
        var i,
          s,
          o,
          u,
          a,
          f,
          l,
          c,
          h = lt.ajaxSetup({}, n),
          p = h.context || h,
          d = h.context && (p.nodeType || p.jquery) ? lt(p) : lt.event,
          v = lt.Deferred(),
          m = lt.Callbacks('once memory'),
          g = h.statusCode || {},
          y = {},
          b = {},
          w = 0,
          E = 'canceled',
          S = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t
              if (w === 2) {
                if (!c) {
                  c = {}
                  while ((t = jn.exec(u))) c[t[1].toLowerCase()] = t[2]
                }
                t = c[e.toLowerCase()]
              }
              return t == null ? null : t
            },
            getAllResponseHeaders: function () {
              return w === 2 ? u : null
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase()
              return w || ((e = b[n] = b[n] || e), (y[e] = t)), this
            },
            overrideMimeType: function (e) {
              return w || (h.mimeType = e), this
            },
            statusCode: function (e) {
              var t
              if (e)
                if (w < 2) for (t in e) g[t] = [g[t], e[t]]
                else S.always(e[S.status])
              return this
            },
            abort: function (e) {
              var t = e || E
              return l && l.abort(t), r(0, t), this
            }
          }
        ;(v.promise(S).complete = m.add),
          (S.success = S.done),
          (S.error = S.fail),
          (h.url = ((e || h.url || _n) + '')
            .replace(Hn, '')
            .replace(qn, Mn[1] + '//')),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = lt
            .trim(h.dataType || '*')
            .toLowerCase()
            .match(ht) || ['']),
          h.crossDomain == null &&
            ((i = Rn.exec(h.url.toLowerCase())),
            (h.crossDomain = !(
              !i ||
              (i[1] === Mn[1] &&
                i[2] === Mn[2] &&
                (i[3] || (i[1] === 'http:' ? '80' : '443')) ===
                  (Mn[3] || (Mn[1] === 'http:' ? '80' : '443')))
            ))),
          h.data &&
            h.processData &&
            typeof h.data != 'string' &&
            (h.data = lt.param(h.data, h.traditional)),
          _(zn, h, n, S)
        if (w === 2) return S
        ;(f = h.global),
          f && lt.active++ === 0 && lt.event.trigger('ajaxStart'),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !In.test(h.type)),
          (o = h.url),
          h.hasContent ||
            (h.data &&
              ((o = h.url += (Pn.test(o) ? '&' : '?') + h.data), delete h.data),
            h.cache === !1 &&
              (h.url = Bn.test(o)
                ? o.replace(Bn, '$1_=' + Dn++)
                : o + (Pn.test(o) ? '&' : '?') + '_=' + Dn++)),
          h.ifModified &&
            (lt.lastModified[o] &&
              S.setRequestHeader('If-Modified-Since', lt.lastModified[o]),
            lt.etag[o] && S.setRequestHeader('If-None-Match', lt.etag[o])),
          ((h.data && h.hasContent && h.contentType !== !1) || n.contentType) &&
            S.setRequestHeader('Content-Type', h.contentType),
          S.setRequestHeader(
            'Accept',
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  (h.dataTypes[0] !== '*' ? ', ' + Xn + '; q=0.01' : '')
              : h.accepts['*']
          )
        for (s in h.headers) S.setRequestHeader(s, h.headers[s])
        if (!h.beforeSend || (h.beforeSend.call(p, S, h) !== !1 && w !== 2)) {
          E = 'abort'
          for (s in { success: 1, error: 1, complete: 1 }) S[s](h[s])
          l = _(Wn, h, n, S)
          if (!l) r(-1, 'No Transport')
          else {
            ;(S.readyState = 1),
              f && d.trigger('ajaxSend', [S, h]),
              h.async &&
                h.timeout > 0 &&
                (a = setTimeout(function () {
                  S.abort('timeout')
                }, h.timeout))
            try {
              ;(w = 1), l.send(y, r)
            } catch (x) {
              if (!(w < 2)) throw x
              r(-1, x)
            }
          }
          return S
        }
        return S.abort()
      },
      getJSON: function (e, t, n) {
        return lt.get(e, t, n, 'json')
      },
      getScript: function (e, n) {
        return lt.get(e, t, n, 'script')
      }
    }),
    lt.each(['get', 'post'], function (e, n) {
      lt[n] = function (e, r, i, s) {
        return (
          lt.isFunction(r) && ((s = s || i), (i = r), (r = t)),
          lt.ajax({ url: e, type: n, dataType: s, data: r, success: i })
        )
      }
    }),
    lt.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        'text script': function (e) {
          return lt.globalEval(e), e
        }
      }
    }),
    lt.ajaxPrefilter('script', function (e) {
      e.cache === t && (e.cache = !1),
        e.crossDomain && ((e.type = 'GET'), (e.global = !1))
    }),
    lt.ajaxTransport('script', function (e) {
      if (e.crossDomain) {
        var n,
          r = Q.head || lt('head')[0] || Q.documentElement
        return {
          send: function (t, i) {
            ;(n = Q.createElement('script')),
              (n.async = !0),
              e.scriptCharset && (n.charset = e.scriptCharset),
              (n.src = e.url),
              (n.onload = n.onreadystatechange =
                function (e, t) {
                  if (
                    t ||
                    !n.readyState ||
                    /loaded|complete/.test(n.readyState)
                  )
                    (n.onload = n.onreadystatechange = null),
                      n.parentNode && n.parentNode.removeChild(n),
                      (n = null),
                      t || i(200, 'success')
                }),
              r.insertBefore(n, r.firstChild)
          },
          abort: function () {
            n && n.onload(t, !0)
          }
        }
      }
    })
  var $n = [],
    Jn = /(=)\?(?=&|$)|\?\?/
  lt.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = $n.pop() || lt.expando + '_' + Dn++
      return (this[e] = !0), e
    }
  }),
    lt.ajaxPrefilter('json jsonp', function (n, r, i) {
      var s,
        o,
        u,
        a =
          n.jsonp !== !1 &&
          (Jn.test(n.url)
            ? 'url'
            : typeof n.data == 'string' &&
              !(n.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
              Jn.test(n.data) &&
              'data')
      if (a || n.dataTypes[0] === 'jsonp')
        return (
          (s = n.jsonpCallback =
            lt.isFunction(n.jsonpCallback)
              ? n.jsonpCallback()
              : n.jsonpCallback),
          a
            ? (n[a] = n[a].replace(Jn, '$1' + s))
            : n.jsonp !== !1 &&
              (n.url += (Pn.test(n.url) ? '&' : '?') + n.jsonp + '=' + s),
          (n.converters['script json'] = function () {
            return u || lt.error(s + ' was not called'), u[0]
          }),
          (n.dataTypes[0] = 'json'),
          (o = e[s]),
          (e[s] = function () {
            u = arguments
          }),
          i.always(function () {
            ;(e[s] = o),
              n[s] && ((n.jsonpCallback = r.jsonpCallback), $n.push(s)),
              u && lt.isFunction(o) && o(u[0]),
              (u = o = t)
          }),
          'script'
        )
    })
  var Kn,
    Qn,
    Gn = 0,
    Yn =
      e.ActiveXObject &&
      function () {
        var e
        for (e in Kn) Kn[e](t, !0)
      }
  ;(lt.ajaxSettings.xhr = e.ActiveXObject
    ? function () {
        return (!this.isLocal && B()) || j()
      }
    : B),
    (Qn = lt.ajaxSettings.xhr()),
    (lt.support.cors = !!Qn && 'withCredentials' in Qn),
    (Qn = lt.support.ajax = !!Qn),
    Qn &&
      lt.ajaxTransport(function (n) {
        if (!n.crossDomain || lt.support.cors) {
          var r
          return {
            send: function (i, s) {
              var o,
                u,
                a = n.xhr()
              n.username
                ? a.open(n.type, n.url, n.async, n.username, n.password)
                : a.open(n.type, n.url, n.async)
              if (n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u]
              n.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(n.mimeType),
                !n.crossDomain &&
                  !i['X-Requested-With'] &&
                  (i['X-Requested-With'] = 'XMLHttpRequest')
              try {
                for (u in i) a.setRequestHeader(u, i[u])
              } catch (f) {}
              a.send((n.hasContent && n.data) || null),
                (r = function (e, i) {
                  var u, f, l, c
                  try {
                    if (r && (i || a.readyState === 4)) {
                      ;(r = t),
                        o &&
                          ((a.onreadystatechange = lt.noop), Yn && delete Kn[o])
                      if (i) a.readyState !== 4 && a.abort()
                      else {
                        ;(c = {}),
                          (u = a.status),
                          (f = a.getAllResponseHeaders()),
                          typeof a.responseText == 'string' &&
                            (c.text = a.responseText)
                        try {
                          l = a.statusText
                        } catch (h) {
                          l = ''
                        }
                        !u && n.isLocal && !n.crossDomain
                          ? (u = c.text ? 200 : 404)
                          : u === 1223 && (u = 204)
                      }
                    }
                  } catch (p) {
                    i || s(-1, p)
                  }
                  c && s(u, l, c, f)
                }),
                n.async
                  ? a.readyState === 4
                    ? setTimeout(r)
                    : ((o = ++Gn),
                      Yn && (Kn || ((Kn = {}), lt(e).unload(Yn)), (Kn[o] = r)),
                      (a.onreadystatechange = r))
                  : r()
            },
            abort: function () {
              r && r(t, !0)
            }
          }
        }
      })
  var Zn,
    er,
    tr = /^(?:toggle|show|hide)$/,
    nr = new RegExp('^(?:([+-])=|)(' + ct + ')([a-z%]*)$', 'i'),
    rr = /queueHooks$/,
    ir = [U],
    sr = {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t),
            r = n.cur(),
            i = nr.exec(t),
            s = (i && i[3]) || (lt.cssNumber[e] ? '' : 'px'),
            o =
              (lt.cssNumber[e] || (s !== 'px' && +r)) &&
              nr.exec(lt.css(n.elem, e)),
            u = 1,
            a = 20
          if (o && o[3] !== s) {
            ;(s = s || o[3]), (i = i || []), (o = +r || 1)
            do (u = u || '.5'), (o /= u), lt.style(n.elem, e, o + s)
            while (u !== (u = n.cur() / r) && u !== 1 && --a)
          }
          return (
            i &&
              ((o = n.start = +o || +r || 0),
              (n.unit = s),
              (n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2])),
            n
          )
        }
      ]
    }
  ;(lt.Animation = lt.extend(q, {
    tweener: function (e, t) {
      lt.isFunction(e) ? ((t = e), (e = ['*'])) : (e = e.split(' '))
      var n,
        r = 0,
        i = e.length
      for (; r < i; r++) (n = e[r]), (sr[n] = sr[n] || []), sr[n].unshift(t)
    },
    prefilter: function (e, t) {
      t ? ir.unshift(e) : ir.push(e)
    }
  })),
    (lt.Tween = z),
    (z.prototype = {
      constructor: z,
      init: function (e, t, n, r, i, s) {
        ;(this.elem = e),
          (this.prop = n),
          (this.easing = i || 'swing'),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = s || (lt.cssNumber[n] ? '' : 'px'))
      },
      cur: function () {
        var e = z.propHooks[this.prop]
        return e && e.get ? e.get(this) : z.propHooks._default.get(this)
      },
      run: function (e) {
        var t,
          n = z.propHooks[this.prop]
        return (
          this.options.duration
            ? (this.pos = t =
                lt.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : z.propHooks._default.set(this),
          this
        )
      }
    }),
    (z.prototype.init.prototype = z.prototype),
    (z.propHooks = {
      _default: {
        get: function (e) {
          var t
          return e.elem[e.prop] == null ||
            (!!e.elem.style && e.elem.style[e.prop] != null)
            ? ((t = lt.css(e.elem, e.prop, '')), !t || t === 'auto' ? 0 : t)
            : e.elem[e.prop]
        },
        set: function (e) {
          lt.fx.step[e.prop]
            ? lt.fx.step[e.prop](e)
            : e.elem.style &&
              (e.elem.style[lt.cssProps[e.prop]] != null || lt.cssHooks[e.prop])
            ? lt.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now)
        }
      }
    }),
    (z.propHooks.scrollTop = z.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
      }),
    lt.each(['toggle', 'show', 'hide'], function (e, t) {
      var n = lt.fn[t]
      lt.fn[t] = function (e, r, i) {
        return e == null || typeof e == 'boolean'
          ? n.apply(this, arguments)
          : this.animate(W(t, !0), e, r, i)
      }
    }),
    lt.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(x)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r)
      },
      animate: function (e, t, n, r) {
        var i = lt.isEmptyObject(e),
          s = lt.speed(t, n, r),
          o = function () {
            var t = q(this, lt.extend({}, e), s)
            ;(i || lt._data(this, 'finish')) && t.stop(!0)
          }
        return (
          (o.finish = o),
          i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        )
      },
      stop: function (e, n, r) {
        var i = function (e) {
          var t = e.stop
          delete e.stop, t(r)
        }
        return (
          typeof e != 'string' && ((r = n), (n = e), (e = t)),
          n && e !== !1 && this.queue(e || 'fx', []),
          this.each(function () {
            var t = !0,
              n = e != null && e + 'queueHooks',
              s = lt.timers,
              o = lt._data(this)
            if (n) o[n] && o[n].stop && i(o[n])
            else for (n in o) o[n] && o[n].stop && rr.test(n) && i(o[n])
            for (n = s.length; n--; )
              s[n].elem === this &&
                (e == null || s[n].queue === e) &&
                (s[n].anim.stop(r), (t = !1), s.splice(n, 1))
            ;(t || !r) && lt.dequeue(this, e)
          })
        )
      },
      finish: function (e) {
        return (
          e !== !1 && (e = e || 'fx'),
          this.each(function () {
            var t,
              n = lt._data(this),
              r = n[e + 'queue'],
              i = n[e + 'queueHooks'],
              s = lt.timers,
              o = r ? r.length : 0
            ;(n.finish = !0),
              lt.queue(this, e, []),
              i && i.stop && i.stop.call(this, !0)
            for (t = s.length; t--; )
              s[t].elem === this &&
                s[t].queue === e &&
                (s[t].anim.stop(!0), s.splice(t, 1))
            for (t = 0; t < o; t++)
              r[t] && r[t].finish && r[t].finish.call(this)
            delete n.finish
          })
        )
      }
    }),
    lt.each(
      {
        slideDown: W('show'),
        slideUp: W('hide'),
        slideToggle: W('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
      },
      function (e, t) {
        lt.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r)
        }
      }
    ),
    (lt.speed = function (e, t, n) {
      var r =
        e && typeof e == 'object'
          ? lt.extend({}, e)
          : {
              complete: n || (!n && t) || (lt.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !lt.isFunction(t) && t)
            }
      r.duration = lt.fx.off
        ? 0
        : typeof r.duration == 'number'
        ? r.duration
        : r.duration in lt.fx.speeds
        ? lt.fx.speeds[r.duration]
        : lt.fx.speeds._default
      if (r.queue == null || r.queue === !0) r.queue = 'fx'
      return (
        (r.old = r.complete),
        (r.complete = function () {
          lt.isFunction(r.old) && r.old.call(this),
            r.queue && lt.dequeue(this, r.queue)
        }),
        r
      )
    }),
    (lt.easing = {
      linear: function (e) {
        return e
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2
      }
    }),
    (lt.timers = []),
    (lt.fx = z.prototype.init),
    (lt.fx.tick = function () {
      var e,
        n = lt.timers,
        r = 0
      Zn = lt.now()
      for (; r < n.length; r++)
        (e = n[r]), !e() && n[r] === e && n.splice(r--, 1)
      n.length || lt.fx.stop(), (Zn = t)
    }),
    (lt.fx.timer = function (e) {
      e() && lt.timers.push(e) && lt.fx.start()
    }),
    (lt.fx.interval = 13),
    (lt.fx.start = function () {
      er || (er = setInterval(lt.fx.tick, lt.fx.interval))
    }),
    (lt.fx.stop = function () {
      clearInterval(er), (er = null)
    }),
    (lt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (lt.fx.step = {}),
    lt.expr &&
      lt.expr.filters &&
      (lt.expr.filters.animated = function (e) {
        return lt.grep(lt.timers, function (t) {
          return e === t.elem
        }).length
      }),
    (lt.fn.offset = function (e) {
      if (arguments.length)
        return e === t
          ? this
          : this.each(function (t) {
              lt.offset.setOffset(this, e, t)
            })
      var n,
        r,
        i = { top: 0, left: 0 },
        s = this[0],
        o = s && s.ownerDocument
      if (!o) return
      return (
        (n = o.documentElement),
        lt.contains(n, s)
          ? (typeof s.getBoundingClientRect !== J &&
              (i = s.getBoundingClientRect()),
            (r = X(o)),
            {
              top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
              left:
                i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            })
          : i
      )
    }),
    (lt.offset = {
      setOffset: function (e, t, n) {
        var r = lt.css(e, 'position')
        r === 'static' && (e.style.position = 'relative')
        var i = lt(e),
          s = i.offset(),
          o = lt.css(e, 'top'),
          u = lt.css(e, 'left'),
          a =
            (r === 'absolute' || r === 'fixed') &&
            lt.inArray('auto', [o, u]) > -1,
          f = {},
          l = {},
          c,
          h
        a
          ? ((l = i.position()), (c = l.top), (h = l.left))
          : ((c = parseFloat(o) || 0), (h = parseFloat(u) || 0)),
          lt.isFunction(t) && (t = t.call(e, n, s)),
          t.top != null && (f.top = t.top - s.top + c),
          t.left != null && (f.left = t.left - s.left + h),
          'using' in t ? t.using.call(e, f) : i.css(f)
      }
    }),
    lt.fn.extend({
      position: function () {
        if (!this[0]) return
        var e,
          t,
          n = { top: 0, left: 0 },
          r = this[0]
        return (
          lt.css(r, 'position') === 'fixed'
            ? (t = r.getBoundingClientRect())
            : ((e = this.offsetParent()),
              (t = this.offset()),
              lt.nodeName(e[0], 'html') || (n = e.offset()),
              (n.top += lt.css(e[0], 'borderTopWidth', !0)),
              (n.left += lt.css(e[0], 'borderLeftWidth', !0))),
          {
            top: t.top - n.top - lt.css(r, 'marginTop', !0),
            left: t.left - n.left - lt.css(r, 'marginLeft', !0)
          }
        )
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent || G
          while (
            e &&
            !lt.nodeName(e, 'html') &&
            lt.css(e, 'position') === 'static'
          )
            e = e.offsetParent
          return e || G
        })
      }
    }),
    lt.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (e, n) {
        var r = /Y/.test(n)
        lt.fn[e] = function (i) {
          return lt.access(
            this,
            function (e, i, s) {
              var o = X(e)
              if (s === t)
                return o
                  ? n in o
                    ? o[n]
                    : o.document.documentElement[i]
                  : e[i]
              o
                ? o.scrollTo(
                    r ? lt(o).scrollLeft() : s,
                    r ? s : lt(o).scrollTop()
                  )
                : (e[i] = s)
            },
            e,
            i,
            arguments.length,
            null
          )
        }
      }
    ),
    lt.each({ Height: 'height', Width: 'width' }, function (e, n) {
      lt.each(
        { padding: 'inner' + e, content: n, '': 'outer' + e },
        function (r, i) {
          lt.fn[i] = function (i, s) {
            var o = arguments.length && (r || typeof i != 'boolean'),
              u = r || (i === !0 || s === !0 ? 'margin' : 'border')
            return lt.access(
              this,
              function (n, r, i) {
                var s
                return lt.isWindow(n)
                  ? n.document.documentElement['client' + e]
                  : n.nodeType === 9
                  ? ((s = n.documentElement),
                    Math.max(
                      n.body['scroll' + e],
                      s['scroll' + e],
                      n.body['offset' + e],
                      s['offset' + e],
                      s['client' + e]
                    ))
                  : i === t
                  ? lt.css(n, r, u)
                  : lt.style(n, r, i, u)
              },
              n,
              o ? i : t,
              o,
              null
            )
          }
        }
      )
    }),
    (lt.fn.size = function () {
      return this.length
    }),
    (lt.fn.andSelf = lt.fn.addBack),
    typeof module == 'object' && module && typeof module.exports == 'object'
      ? (module.exports = lt)
      : ((e.jQuery = e.$ = lt),
        typeof define == 'function' &&
          define.amd &&
          define('jquery', [], function () {
            return lt
          }))
})(window),
  (function (e, t) {
    function n(t, n) {
      var i,
        s,
        o,
        u = t.nodeName.toLowerCase()
      return 'area' === u
        ? ((i = t.parentNode),
          (s = i.name),
          t.href && s && 'map' === i.nodeName.toLowerCase()
            ? ((o = e('img[usemap=#' + s + ']')[0]), !!o && r(o))
            : !1)
        : (/input|select|textarea|button|object/.test(u)
            ? !t.disabled
            : 'a' === u
            ? t.href || n
            : n) && r(t)
    }
    function r(t) {
      return (
        e.expr.filters.visible(t) &&
        !e(t)
          .parents()
          .addBack()
          .filter(function () {
            return 'hidden' === e.css(this, 'visibility')
          }).length
      )
    }
    var i = 0,
      s = /^ui-id-\d+$/
    ;(e.ui = e.ui || {}),
      e.extend(e.ui, {
        version: '1.10.3',
        keyCode: {
          BACKSPACE: 8,
          COMMA: 188,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          LEFT: 37,
          NUMPAD_ADD: 107,
          NUMPAD_DECIMAL: 110,
          NUMPAD_DIVIDE: 111,
          NUMPAD_ENTER: 108,
          NUMPAD_MULTIPLY: 106,
          NUMPAD_SUBTRACT: 109,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38
        }
      }),
      e.fn.extend({
        focus: (function (t) {
          return function (n, r) {
            return 'number' == typeof n
              ? this.each(function () {
                  var t = this
                  setTimeout(function () {
                    e(t).focus(), r && r.call(t)
                  }, n)
                })
              : t.apply(this, arguments)
          }
        })(e.fn.focus),
        scrollParent: function () {
          var t
          return (
            (t =
              (e.ui.ie && /(static|relative)/.test(this.css('position'))) ||
              /absolute/.test(this.css('position'))
                ? this.parents()
                    .filter(function () {
                      return (
                        /(relative|absolute|fixed)/.test(
                          e.css(this, 'position')
                        ) &&
                        /(auto|scroll)/.test(
                          e.css(this, 'overflow') +
                            e.css(this, 'overflow-y') +
                            e.css(this, 'overflow-x')
                        )
                      )
                    })
                    .eq(0)
                : this.parents()
                    .filter(function () {
                      return /(auto|scroll)/.test(
                        e.css(this, 'overflow') +
                          e.css(this, 'overflow-y') +
                          e.css(this, 'overflow-x')
                      )
                    })
                    .eq(0)),
            /fixed/.test(this.css('position')) || !t.length ? e(document) : t
          )
        },
        zIndex: function (n) {
          if (n !== t) return this.css('zIndex', n)
          if (this.length)
            for (var r, i, s = e(this[0]); s.length && s[0] !== document; ) {
              if (
                ((r = s.css('position')),
                ('absolute' === r || 'relative' === r || 'fixed' === r) &&
                  ((i = parseInt(s.css('zIndex'), 10)), !isNaN(i) && 0 !== i))
              )
                return i
              s = s.parent()
            }
          return 0
        },
        uniqueId: function () {
          return this.each(function () {
            this.id || (this.id = 'ui-id-' + ++i)
          })
        },
        removeUniqueId: function () {
          return this.each(function () {
            s.test(this.id) && e(this).removeAttr('id')
          })
        }
      }),
      e.extend(e.expr[':'], {
        data: e.expr.createPseudo
          ? e.expr.createPseudo(function (t) {
              return function (n) {
                return !!e.data(n, t)
              }
            })
          : function (t, n, r) {
              return !!e.data(t, r[3])
            },
        focusable: function (t) {
          return n(t, !isNaN(e.attr(t, 'tabindex')))
        },
        tabbable: function (t) {
          var r = e.attr(t, 'tabindex'),
            i = isNaN(r)
          return (i || r >= 0) && n(t, !i)
        }
      }),
      e('<a>').outerWidth(1).jquery ||
        e.each(['Width', 'Height'], function (n, r) {
          function i(t, n, r, i) {
            return (
              e.each(s, function () {
                ;(n -= parseFloat(e.css(t, 'padding' + this)) || 0),
                  r &&
                    (n -= parseFloat(e.css(t, 'border' + this + 'Width')) || 0),
                  i && (n -= parseFloat(e.css(t, 'margin' + this)) || 0)
              }),
              n
            )
          }
          var s = 'Width' === r ? ['Left', 'Right'] : ['Top', 'Bottom'],
            o = r.toLowerCase(),
            u = {
              innerWidth: e.fn.innerWidth,
              innerHeight: e.fn.innerHeight,
              outerWidth: e.fn.outerWidth,
              outerHeight: e.fn.outerHeight
            }
          ;(e.fn['inner' + r] = function (n) {
            return n === t
              ? u['inner' + r].call(this)
              : this.each(function () {
                  e(this).css(o, i(this, n) + 'px')
                })
          }),
            (e.fn['outer' + r] = function (t, n) {
              return 'number' != typeof t
                ? u['outer' + r].call(this, t)
                : this.each(function () {
                    e(this).css(o, i(this, t, !0, n) + 'px')
                  })
            })
        }),
      e.fn.addBack ||
        (e.fn.addBack = function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          )
        }),
      e('<a>').data('a-b', 'a').removeData('a-b').data('a-b') &&
        (e.fn.removeData = (function (t) {
          return function (n) {
            return arguments.length
              ? t.call(this, e.camelCase(n))
              : t.call(this)
          }
        })(e.fn.removeData)),
      (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
      (e.support.selectstart =
        'onselectstart' in document.createElement('div')),
      e.fn.extend({
        disableSelection: function () {
          return this.bind(
            (e.support.selectstart ? 'selectstart' : 'mousedown') +
              '.ui-disableSelection',
            function (e) {
              e.preventDefault()
            }
          )
        },
        enableSelection: function () {
          return this.unbind('.ui-disableSelection')
        }
      }),
      e.extend(e.ui, {
        plugin: {
          add: function (t, n, r) {
            var i,
              s = e.ui[t].prototype
            for (i in r)
              (s.plugins[i] = s.plugins[i] || []), s.plugins[i].push([n, r[i]])
          },
          call: function (e, t, n) {
            var r,
              i = e.plugins[t]
            if (
              i &&
              e.element[0].parentNode &&
              11 !== e.element[0].parentNode.nodeType
            )
              for (r = 0; i.length > r; r++)
                e.options[i[r][0]] && i[r][1].apply(e.element, n)
          }
        },
        hasScroll: function (t, n) {
          if ('hidden' === e(t).css('overflow')) return !1
          var r = n && 'left' === n ? 'scrollLeft' : 'scrollTop',
            i = !1
          return t[r] > 0 ? !0 : ((t[r] = 1), (i = t[r] > 0), (t[r] = 0), i)
        }
      })
  })(jQuery),
  (function (e, t) {
    var n = 0,
      r = Array.prototype.slice,
      i = e.cleanData
    ;(e.cleanData = function (t) {
      for (var n, r = 0; null != (n = t[r]); r++)
        try {
          e(n).triggerHandler('remove')
        } catch (s) {}
      i(t)
    }),
      (e.widget = function (n, r, i) {
        var s,
          o,
          u,
          a,
          f = {},
          l = n.split('.')[0]
        ;(n = n.split('.')[1]),
          (s = l + '-' + n),
          i || ((i = r), (r = e.Widget)),
          (e.expr[':'][s.toLowerCase()] = function (t) {
            return !!e.data(t, s)
          }),
          (e[l] = e[l] || {}),
          (o = e[l][n]),
          (u = e[l][n] =
            function (e, n) {
              return this._createWidget
                ? (arguments.length && this._createWidget(e, n), t)
                : new u(e, n)
            }),
          e.extend(u, o, {
            version: i.version,
            _proto: e.extend({}, i),
            _childConstructors: []
          }),
          (a = new r()),
          (a.options = e.widget.extend({}, a.options)),
          e.each(i, function (n, i) {
            return e.isFunction(i)
              ? ((f[n] = (function () {
                  var e = function () {
                      return r.prototype[n].apply(this, arguments)
                    },
                    t = function (e) {
                      return r.prototype[n].apply(this, e)
                    }
                  return function () {
                    var n,
                      r = this._super,
                      s = this._superApply
                    return (
                      (this._super = e),
                      (this._superApply = t),
                      (n = i.apply(this, arguments)),
                      (this._super = r),
                      (this._superApply = s),
                      n
                    )
                  }
                })()),
                t)
              : ((f[n] = i), t)
          }),
          (u.prototype = e.widget.extend(
            a,
            { widgetEventPrefix: o ? a.widgetEventPrefix : n },
            f,
            { constructor: u, namespace: l, widgetName: n, widgetFullName: s }
          )),
          o
            ? (e.each(o._childConstructors, function (t, n) {
                var r = n.prototype
                e.widget(r.namespace + '.' + r.widgetName, u, n._proto)
              }),
              delete o._childConstructors)
            : r._childConstructors.push(u),
          e.widget.bridge(n, u)
      }),
      (e.widget.extend = function (n) {
        for (
          var i, o, u = r.call(arguments, 1), a = 0, f = u.length;
          f > a;
          a++
        )
          for (i in u[a])
            (o = u[a][i]),
              u[a].hasOwnProperty(i) &&
                o !== t &&
                (n[i] = e.isPlainObject(o)
                  ? e.isPlainObject(n[i])
                    ? e.widget.extend({}, n[i], o)
                    : e.widget.extend({}, o)
                  : o)
        return n
      }),
      (e.widget.bridge = function (n, i) {
        var o = i.prototype.widgetFullName || n
        e.fn[n] = function (u) {
          var a = 'string' == typeof u,
            f = r.call(arguments, 1),
            l = this
          return (
            (u =
              !a && f.length ? e.widget.extend.apply(null, [u].concat(f)) : u),
            a
              ? this.each(function () {
                  var r,
                    i = e.data(this, o)
                  return i
                    ? e.isFunction(i[u]) && '_' !== u.charAt(0)
                      ? ((r = i[u].apply(i, f)),
                        r !== i && r !== t
                          ? ((l = r && r.jquery ? l.pushStack(r.get()) : r), !1)
                          : t)
                      : e.error(
                          "no such method '" +
                            u +
                            "' for " +
                            n +
                            ' widget instance'
                        )
                    : e.error(
                        'cannot call methods on ' +
                          n +
                          ' prior to initialization; ' +
                          "attempted to call method '" +
                          u +
                          "'"
                      )
                })
              : this.each(function () {
                  var t = e.data(this, o)
                  t
                    ? t.option(u || {})._init()
                    : e.data(this, o, new i(u, this))
                }),
            l
          )
        }
      }),
      (e.Widget = function () {}),
      (e.Widget._childConstructors = []),
      (e.Widget.prototype = {
        widgetName: 'widget',
        widgetEventPrefix: '',
        defaultElement: '<div>',
        options: { disabled: !1, create: null },
        _createWidget: function (t, r) {
          ;(r = e(r || this.defaultElement || this)[0]),
            (this.element = e(r)),
            (this.uuid = n++),
            (this.eventNamespace = '.' + this.widgetName + this.uuid),
            (this.options = e.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              t
            )),
            (this.bindings = e()),
            (this.hoverable = e()),
            (this.focusable = e()),
            r !== this &&
              (e.data(r, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (e) {
                  e.target === r && this.destroy()
                }
              }),
              (this.document = e(r.style ? r.ownerDocument : r.document || r)),
              (this.window = e(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            this._create(),
            this._trigger('create', null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
          this._destroy(),
            this.element
              .unbind(this.eventNamespace)
              .removeData(this.widgetName)
              .removeData(this.widgetFullName)
              .removeData(e.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr('aria-disabled')
              .removeClass(
                this.widgetFullName + '-disabled ' + 'ui-state-disabled'
              ),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass('ui-state-hover'),
            this.focusable.removeClass('ui-state-focus')
        },
        _destroy: e.noop,
        widget: function () {
          return this.element
        },
        option: function (n, r) {
          var i,
            s,
            o,
            u = n
          if (0 === arguments.length) return e.widget.extend({}, this.options)
          if ('string' == typeof n)
            if (((u = {}), (i = n.split('.')), (n = i.shift()), i.length)) {
              for (
                s = u[n] = e.widget.extend({}, this.options[n]), o = 0;
                i.length - 1 > o;
                o++
              )
                (s[i[o]] = s[i[o]] || {}), (s = s[i[o]])
              if (((n = i.pop()), r === t)) return s[n] === t ? null : s[n]
              s[n] = r
            } else {
              if (r === t) return this.options[n] === t ? null : this.options[n]
              u[n] = r
            }
          return this._setOptions(u), this
        },
        _setOptions: function (e) {
          var t
          for (t in e) this._setOption(t, e[t])
          return this
        },
        _setOption: function (e, t) {
          return (
            (this.options[e] = t),
            'disabled' === e &&
              (this.widget()
                .toggleClass(
                  this.widgetFullName + '-disabled ui-state-disabled',
                  !!t
                )
                .attr('aria-disabled', t),
              this.hoverable.removeClass('ui-state-hover'),
              this.focusable.removeClass('ui-state-focus')),
            this
          )
        },
        enable: function () {
          return this._setOption('disabled', !1)
        },
        disable: function () {
          return this._setOption('disabled', !0)
        },
        _on: function (n, r, i) {
          var s,
            o = this
          'boolean' != typeof n && ((i = r), (r = n), (n = !1)),
            i
              ? ((r = s = e(r)), (this.bindings = this.bindings.add(r)))
              : ((i = r), (r = this.element), (s = this.widget())),
            e.each(i, function (i, u) {
              function f() {
                return n ||
                  (o.options.disabled !== !0 &&
                    !e(this).hasClass('ui-state-disabled'))
                  ? ('string' == typeof u ? o[u] : u).apply(o, arguments)
                  : t
              }
              'string' != typeof u &&
                (f.guid = u.guid = u.guid || f.guid || e.guid++)
              var l = i.match(/^(\w+)\s*(.*)$/),
                c = l[1] + o.eventNamespace,
                h = l[2]
              h ? s.delegate(h, c, f) : r.bind(c, f)
            })
        },
        _off: function (e, t) {
          ;(t =
            (t || '').split(' ').join(this.eventNamespace + ' ') +
            this.eventNamespace),
            e.unbind(t).undelegate(t)
        },
        _delay: function (e, t) {
          function n() {
            return ('string' == typeof e ? r[e] : e).apply(r, arguments)
          }
          var r = this
          return setTimeout(n, t || 0)
        },
        _hoverable: function (t) {
          ;(this.hoverable = this.hoverable.add(t)),
            this._on(t, {
              mouseenter: function (t) {
                e(t.currentTarget).addClass('ui-state-hover')
              },
              mouseleave: function (t) {
                e(t.currentTarget).removeClass('ui-state-hover')
              }
            })
        },
        _focusable: function (t) {
          ;(this.focusable = this.focusable.add(t)),
            this._on(t, {
              focusin: function (t) {
                e(t.currentTarget).addClass('ui-state-focus')
              },
              focusout: function (t) {
                e(t.currentTarget).removeClass('ui-state-focus')
              }
            })
        },
        _trigger: function (t, n, r) {
          var i,
            s,
            o = this.options[t]
          if (
            ((r = r || {}),
            (n = e.Event(n)),
            (n.type = (
              t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
            ).toLowerCase()),
            (n.target = this.element[0]),
            (s = n.originalEvent))
          )
            for (i in s) i in n || (n[i] = s[i])
          return (
            this.element.trigger(n, r),
            !(
              (e.isFunction(o) &&
                o.apply(this.element[0], [n].concat(r)) === !1) ||
              n.isDefaultPrevented()
            )
          )
        }
      }),
      e.each({ show: 'fadeIn', hide: 'fadeOut' }, function (t, n) {
        e.Widget.prototype['_' + t] = function (r, i, s) {
          'string' == typeof i && (i = { effect: i })
          var o,
            u = i ? (i === !0 || 'number' == typeof i ? n : i.effect || n) : t
          ;(i = i || {}),
            'number' == typeof i && (i = { duration: i }),
            (o = !e.isEmptyObject(i)),
            (i.complete = s),
            i.delay && r.delay(i.delay),
            o && e.effects && e.effects.effect[u]
              ? r[t](i)
              : u !== t && r[u]
              ? r[u](i.duration, i.easing, s)
              : r.queue(function (n) {
                  e(this)[t](), s && s.call(r[0]), n()
                })
        }
      })
  })(jQuery),
  (function (e) {
    var t = !1
    e(document).mouseup(function () {
      t = !1
    }),
      e.widget('ui.mouse', {
        version: '1.10.3',
        options: {
          cancel: 'input,textarea,button,select,option',
          distance: 1,
          delay: 0
        },
        _mouseInit: function () {
          var t = this
          this.element
            .bind('mousedown.' + this.widgetName, function (e) {
              return t._mouseDown(e)
            })
            .bind('click.' + this.widgetName, function (n) {
              return !0 ===
                e.data(n.target, t.widgetName + '.preventClickEvent')
                ? (e.removeData(n.target, t.widgetName + '.preventClickEvent'),
                  n.stopImmediatePropagation(),
                  !1)
                : undefined
            }),
            (this.started = !1)
        },
        _mouseDestroy: function () {
          this.element.unbind('.' + this.widgetName),
            this._mouseMoveDelegate &&
              e(document)
                .unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                .unbind('mouseup.' + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (n) {
          if (!t) {
            this._mouseStarted && this._mouseUp(n), (this._mouseDownEvent = n)
            var r = this,
              i = 1 === n.which,
              s =
                'string' == typeof this.options.cancel && n.target.nodeName
                  ? e(n.target).closest(this.options.cancel).length
                  : !1
            return i && !s && this._mouseCapture(n)
              ? ((this.mouseDelayMet = !this.options.delay),
                this.mouseDelayMet ||
                  (this._mouseDelayTimer = setTimeout(function () {
                    r.mouseDelayMet = !0
                  }, this.options.delay)),
                this._mouseDistanceMet(n) &&
                this._mouseDelayMet(n) &&
                ((this._mouseStarted = this._mouseStart(n) !== !1),
                !this._mouseStarted)
                  ? (n.preventDefault(), !0)
                  : (!0 ===
                      e.data(
                        n.target,
                        this.widgetName + '.preventClickEvent'
                      ) &&
                      e.removeData(
                        n.target,
                        this.widgetName + '.preventClickEvent'
                      ),
                    (this._mouseMoveDelegate = function (e) {
                      return r._mouseMove(e)
                    }),
                    (this._mouseUpDelegate = function (e) {
                      return r._mouseUp(e)
                    }),
                    e(document)
                      .bind(
                        'mousemove.' + this.widgetName,
                        this._mouseMoveDelegate
                      )
                      .bind(
                        'mouseup.' + this.widgetName,
                        this._mouseUpDelegate
                      ),
                    n.preventDefault(),
                    (t = !0),
                    !0))
              : !0
          }
        },
        _mouseMove: function (t) {
          return e.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) &&
            !t.button
            ? this._mouseUp(t)
            : this._mouseStarted
            ? (this._mouseDrag(t), t.preventDefault())
            : (this._mouseDistanceMet(t) &&
                this._mouseDelayMet(t) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, t) !== !1),
                this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
              !this._mouseStarted)
        },
        _mouseUp: function (t) {
          return (
            e(document)
              .unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
              .unbind('mouseup.' + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              t.target === this._mouseDownEvent.target &&
                e.data(t.target, this.widgetName + '.preventClickEvent', !0),
              this._mouseStop(t)),
            !1
          )
        },
        _mouseDistanceMet: function (e) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - e.pageX),
              Math.abs(this._mouseDownEvent.pageY - e.pageY)
            ) >= this.options.distance
          )
        },
        _mouseDelayMet: function () {
          return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
          return !0
        }
      })
  })(jQuery),
  (function (e) {
    e.widget('ui.draggable', e.ui.mouse, {
      version: '1.10.3',
      widgetEventPrefix: 'drag',
      options: {
        addClasses: !0,
        appendTo: 'parent',
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: 'auto',
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: 'original',
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: 'default',
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: 'both',
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null
      },
      _create: function () {
        'original' !== this.options.helper ||
          /^(?:r|a|f)/.test(this.element.css('position')) ||
          (this.element[0].style.position = 'relative'),
          this.options.addClasses && this.element.addClass('ui-draggable'),
          this.options.disabled &&
            this.element.addClass('ui-draggable-disabled'),
          this._mouseInit()
      },
      _destroy: function () {
        this.element.removeClass(
          'ui-draggable ui-draggable-dragging ui-draggable-disabled'
        ),
          this._mouseDestroy()
      },
      _mouseCapture: function (n) {
        var r = this.options
        return this.helper ||
          r.disabled ||
          e(n.target).closest('.ui-resizable-handle').length > 0
          ? !1
          : ((this.handle = this._getHandle(n)),
            this.handle
              ? (e(r.iframeFix === !0 ? 'iframe' : r.iframeFix).each(
                  function () {
                    e(
                      "<div class='ui-draggable-iframeFix' style='background: #fff;'></div>"
                    )
                      .css({
                        width: this.offsetWidth + 'px',
                        height: this.offsetHeight + 'px',
                        position: 'absolute',
                        opacity: '0.001',
                        zIndex: 1e3
                      })
                      .css(e(this).offset())
                      .appendTo('body')
                  }
                ),
                !0)
              : !1)
      },
      _mouseStart: function (n) {
        var r = this.options
        return (
          (this.helper = this._createHelper(n)),
          this.helper.addClass('ui-draggable-dragging'),
          this._cacheHelperProportions(),
          e.ui.ddmanager && (e.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css('position')),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offsetParent = this.helper.offsetParent()),
          (this.offsetParentCssPosition = this.offsetParent.css('position')),
          (this.offset = this.positionAbs = this.element.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left
          }),
          (this.offset.scroll = !1),
          e.extend(this.offset, {
            click: {
              left: n.pageX - this.offset.left,
              top: n.pageY - this.offset.top
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset()
          }),
          (this.originalPosition = this.position = this._generatePosition(n)),
          (this.originalPageX = n.pageX),
          (this.originalPageY = n.pageY),
          r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt),
          this._setContainment(),
          this._trigger('start', n) === !1
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              e.ui.ddmanager &&
                !r.dropBehaviour &&
                e.ui.ddmanager.prepareOffsets(this, n),
              this._mouseDrag(n, !0),
              e.ui.ddmanager && e.ui.ddmanager.dragStart(this, n),
              !0)
        )
      },
      _mouseDrag: function (n, r) {
        if (
          ('fixed' === this.offsetParentCssPosition &&
            (this.offset.parent = this._getParentOffset()),
          (this.position = this._generatePosition(n)),
          (this.positionAbs = this._convertPositionTo('absolute')),
          !r)
        ) {
          var i = this._uiHash()
          if (this._trigger('drag', n, i) === !1) return this._mouseUp({}), !1
          this.position = i.position
        }
        return (
          (this.options.axis && 'y' === this.options.axis) ||
            (this.helper[0].style.left = this.position.left + 'px'),
          (this.options.axis && 'x' === this.options.axis) ||
            (this.helper[0].style.top = this.position.top + 'px'),
          e.ui.ddmanager && e.ui.ddmanager.drag(this, n),
          !1
        )
      },
      _mouseStop: function (n) {
        var r = this,
          i = !1
        return (
          e.ui.ddmanager &&
            !this.options.dropBehaviour &&
            (i = e.ui.ddmanager.drop(this, n)),
          this.dropped && ((i = this.dropped), (this.dropped = !1)),
          'original' !== this.options.helper ||
          e.contains(this.element[0].ownerDocument, this.element[0])
            ? (('invalid' === this.options.revert && !i) ||
              ('valid' === this.options.revert && i) ||
              this.options.revert === !0 ||
              (e.isFunction(this.options.revert) &&
                this.options.revert.call(this.element, i))
                ? e(this.helper).animate(
                    this.originalPosition,
                    parseInt(this.options.revertDuration, 10),
                    function () {
                      r._trigger('stop', n) !== !1 && r._clear()
                    }
                  )
                : this._trigger('stop', n) !== !1 && this._clear(),
              !1)
            : !1
        )
      },
      _mouseUp: function (n) {
        return (
          e('div.ui-draggable-iframeFix').each(function () {
            this.parentNode.removeChild(this)
          }),
          e.ui.ddmanager && e.ui.ddmanager.dragStop(this, n),
          e.ui.mouse.prototype._mouseUp.call(this, n)
        )
      },
      cancel: function () {
        return (
          this.helper.is('.ui-draggable-dragging')
            ? this._mouseUp({})
            : this._clear(),
          this
        )
      },
      _getHandle: function (n) {
        return this.options.handle
          ? !!e(n.target).closest(this.element.find(this.options.handle)).length
          : !0
      },
      _createHelper: function (n) {
        var r = this.options,
          i = e.isFunction(r.helper)
            ? e(r.helper.apply(this.element[0], [n]))
            : 'clone' === r.helper
            ? this.element.clone().removeAttr('id')
            : this.element
        return (
          i.parents('body').length ||
            i.appendTo(
              'parent' === r.appendTo ? this.element[0].parentNode : r.appendTo
            ),
          i[0] === this.element[0] ||
            /(fixed|absolute)/.test(i.css('position')) ||
            i.css('position', 'absolute'),
          i
        )
      },
      _adjustOffsetFromHelper: function (n) {
        'string' == typeof n && (n = n.split(' ')),
          e.isArray(n) && (n = { left: +n[0], top: +n[1] || 0 }),
          'left' in n && (this.offset.click.left = n.left + this.margins.left),
          'right' in n &&
            (this.offset.click.left =
              this.helperProportions.width - n.right + this.margins.left),
          'top' in n && (this.offset.click.top = n.top + this.margins.top),
          'bottom' in n &&
            (this.offset.click.top =
              this.helperProportions.height - n.bottom + this.margins.top)
      },
      _getParentOffset: function () {
        var n = this.offsetParent.offset()
        return (
          'absolute' === this.cssPosition &&
            this.scrollParent[0] !== document &&
            e.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((n.left += this.scrollParent.scrollLeft()),
            (n.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] === document.body ||
            (this.offsetParent[0].tagName &&
              'html' === this.offsetParent[0].tagName.toLowerCase() &&
              e.ui.ie)) &&
            (n = { top: 0, left: 0 }),
          {
            top:
              n.top +
              (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
            left:
              n.left +
              (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
          }
        )
      },
      _getRelativeOffset: function () {
        if ('relative' === this.cssPosition) {
          var e = this.element.position()
          return {
            top:
              e.top -
              (parseInt(this.helper.css('top'), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              e.left -
              (parseInt(this.helper.css('left'), 10) || 0) +
              this.scrollParent.scrollLeft()
          }
        }
        return { top: 0, left: 0 }
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css('marginLeft'), 10) || 0,
          top: parseInt(this.element.css('marginTop'), 10) || 0,
          right: parseInt(this.element.css('marginRight'), 10) || 0,
          bottom: parseInt(this.element.css('marginBottom'), 10) || 0
        }
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight()
        }
      },
      _setContainment: function () {
        var n,
          r,
          i,
          s = this.options
        return s.containment
          ? 'window' === s.containment
            ? ((this.containment = [
                e(window).scrollLeft() -
                  this.offset.relative.left -
                  this.offset.parent.left,
                e(window).scrollTop() -
                  this.offset.relative.top -
                  this.offset.parent.top,
                e(window).scrollLeft() +
                  e(window).width() -
                  this.helperProportions.width -
                  this.margins.left,
                e(window).scrollTop() +
                  (e(window).height() ||
                    document.body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top
              ]),
              undefined)
            : 'document' === s.containment
            ? ((this.containment = [
                0,
                0,
                e(document).width() -
                  this.helperProportions.width -
                  this.margins.left,
                (e(document).height() ||
                  document.body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top
              ]),
              undefined)
            : s.containment.constructor === Array
            ? ((this.containment = s.containment), undefined)
            : ('parent' === s.containment &&
                (s.containment = this.helper[0].parentNode),
              (r = e(s.containment)),
              (i = r[0]),
              i &&
                ((n = 'hidden' !== r.css('overflow')),
                (this.containment = [
                  (parseInt(r.css('borderLeftWidth'), 10) || 0) +
                    (parseInt(r.css('paddingLeft'), 10) || 0),
                  (parseInt(r.css('borderTopWidth'), 10) || 0) +
                    (parseInt(r.css('paddingTop'), 10) || 0),
                  (n ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) -
                    (parseInt(r.css('borderRightWidth'), 10) || 0) -
                    (parseInt(r.css('paddingRight'), 10) || 0) -
                    this.helperProportions.width -
                    this.margins.left -
                    this.margins.right,
                  (n
                    ? Math.max(i.scrollHeight, i.offsetHeight)
                    : i.offsetHeight) -
                    (parseInt(r.css('borderBottomWidth'), 10) || 0) -
                    (parseInt(r.css('paddingBottom'), 10) || 0) -
                    this.helperProportions.height -
                    this.margins.top -
                    this.margins.bottom
                ]),
                (this.relative_container = r)),
              undefined)
          : ((this.containment = null), undefined)
      },
      _convertPositionTo: function (n, r) {
        r || (r = this.position)
        var i = 'absolute' === n ? 1 : -1,
          s =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              e.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent
        return (
          this.offset.scroll ||
            (this.offset.scroll = { top: s.scrollTop(), left: s.scrollLeft() }),
          {
            top:
              r.top +
              this.offset.relative.top * i +
              this.offset.parent.top * i -
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : this.offset.scroll.top) *
                i,
            left:
              r.left +
              this.offset.relative.left * i +
              this.offset.parent.left * i -
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : this.offset.scroll.left) *
                i
          }
        )
      },
      _generatePosition: function (n) {
        var r,
          i,
          s,
          o,
          u = this.options,
          a =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              e.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          f = n.pageX,
          l = n.pageY
        return (
          this.offset.scroll ||
            (this.offset.scroll = { top: a.scrollTop(), left: a.scrollLeft() }),
          this.originalPosition &&
            (this.containment &&
              (this.relative_container
                ? ((i = this.relative_container.offset()),
                  (r = [
                    this.containment[0] + i.left,
                    this.containment[1] + i.top,
                    this.containment[2] + i.left,
                    this.containment[3] + i.top
                  ]))
                : (r = this.containment),
              n.pageX - this.offset.click.left < r[0] &&
                (f = r[0] + this.offset.click.left),
              n.pageY - this.offset.click.top < r[1] &&
                (l = r[1] + this.offset.click.top),
              n.pageX - this.offset.click.left > r[2] &&
                (f = r[2] + this.offset.click.left),
              n.pageY - this.offset.click.top > r[3] &&
                (l = r[3] + this.offset.click.top)),
            u.grid &&
              ((s = u.grid[1]
                ? this.originalPageY +
                  Math.round((l - this.originalPageY) / u.grid[1]) * u.grid[1]
                : this.originalPageY),
              (l = r
                ? s - this.offset.click.top >= r[1] ||
                  s - this.offset.click.top > r[3]
                  ? s
                  : s - this.offset.click.top >= r[1]
                  ? s - u.grid[1]
                  : s + u.grid[1]
                : s),
              (o = u.grid[0]
                ? this.originalPageX +
                  Math.round((f - this.originalPageX) / u.grid[0]) * u.grid[0]
                : this.originalPageX),
              (f = r
                ? o - this.offset.click.left >= r[0] ||
                  o - this.offset.click.left > r[2]
                  ? o
                  : o - this.offset.click.left >= r[0]
                  ? o - u.grid[0]
                  : o + u.grid[0]
                : o))),
          {
            top:
              l -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : this.offset.scroll.top),
            left:
              f -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : this.offset.scroll.left)
          }
        )
      },
      _clear: function () {
        this.helper.removeClass('ui-draggable-dragging'),
          this.helper[0] === this.element[0] ||
            this.cancelHelperRemoval ||
            this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1)
      },
      _trigger: function (n, r, i) {
        return (
          (i = i || this._uiHash()),
          e.ui.plugin.call(this, n, [r, i]),
          'drag' === n &&
            (this.positionAbs = this._convertPositionTo('absolute')),
          e.Widget.prototype._trigger.call(this, n, r, i)
        )
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs
        }
      }
    }),
      e.ui.plugin.add('draggable', 'connectToSortable', {
        start: function (n, r) {
          var i = e(this).data('ui-draggable'),
            s = i.options,
            o = e.extend({}, r, { item: i.element })
          ;(i.sortables = []),
            e(s.connectToSortable).each(function () {
              var r = e.data(this, 'ui-sortable')
              r &&
                !r.options.disabled &&
                (i.sortables.push({
                  instance: r,
                  shouldRevert: r.options.revert
                }),
                r.refreshPositions(),
                r._trigger('activate', n, o))
            })
        },
        stop: function (n, r) {
          var i = e(this).data('ui-draggable'),
            s = e.extend({}, r, { item: i.element })
          e.each(i.sortables, function () {
            this.instance.isOver
              ? ((this.instance.isOver = 0),
                (i.cancelHelperRemoval = !0),
                (this.instance.cancelHelperRemoval = !1),
                this.shouldRevert &&
                  (this.instance.options.revert = this.shouldRevert),
                this.instance._mouseStop(n),
                (this.instance.options.helper = this.instance.options._helper),
                'original' === i.options.helper &&
                  this.instance.currentItem.css({ top: 'auto', left: 'auto' }))
              : ((this.instance.cancelHelperRemoval = !1),
                this.instance._trigger('deactivate', n, s))
          })
        },
        drag: function (n, r) {
          var i = e(this).data('ui-draggable'),
            s = this
          e.each(i.sortables, function () {
            var o = !1,
              u = this
            ;(this.instance.positionAbs = i.positionAbs),
              (this.instance.helperProportions = i.helperProportions),
              (this.instance.offset.click = i.offset.click),
              this.instance._intersectsWith(this.instance.containerCache) &&
                ((o = !0),
                e.each(i.sortables, function () {
                  return (
                    (this.instance.positionAbs = i.positionAbs),
                    (this.instance.helperProportions = i.helperProportions),
                    (this.instance.offset.click = i.offset.click),
                    this !== u &&
                      this.instance._intersectsWith(
                        this.instance.containerCache
                      ) &&
                      e.contains(
                        u.instance.element[0],
                        this.instance.element[0]
                      ) &&
                      (o = !1),
                    o
                  )
                })),
              o
                ? (this.instance.isOver ||
                    ((this.instance.isOver = 1),
                    (this.instance.currentItem = e(s)
                      .clone()
                      .removeAttr('id')
                      .appendTo(this.instance.element)
                      .data('ui-sortable-item', !0)),
                    (this.instance.options._helper =
                      this.instance.options.helper),
                    (this.instance.options.helper = function () {
                      return r.helper[0]
                    }),
                    (n.target = this.instance.currentItem[0]),
                    this.instance._mouseCapture(n, !0),
                    this.instance._mouseStart(n, !0, !0),
                    (this.instance.offset.click.top = i.offset.click.top),
                    (this.instance.offset.click.left = i.offset.click.left),
                    (this.instance.offset.parent.left -=
                      i.offset.parent.left - this.instance.offset.parent.left),
                    (this.instance.offset.parent.top -=
                      i.offset.parent.top - this.instance.offset.parent.top),
                    i._trigger('toSortable', n),
                    (i.dropped = this.instance.element),
                    (i.currentItem = i.element),
                    (this.instance.fromOutside = i)),
                  this.instance.currentItem && this.instance._mouseDrag(n))
                : this.instance.isOver &&
                  ((this.instance.isOver = 0),
                  (this.instance.cancelHelperRemoval = !0),
                  (this.instance.options.revert = !1),
                  this.instance._trigger(
                    'out',
                    n,
                    this.instance._uiHash(this.instance)
                  ),
                  this.instance._mouseStop(n, !0),
                  (this.instance.options.helper =
                    this.instance.options._helper),
                  this.instance.currentItem.remove(),
                  this.instance.placeholder &&
                    this.instance.placeholder.remove(),
                  i._trigger('fromSortable', n),
                  (i.dropped = !1))
          })
        }
      }),
      e.ui.plugin.add('draggable', 'cursor', {
        start: function () {
          var n = e('body'),
            r = e(this).data('ui-draggable').options
          n.css('cursor') && (r._cursor = n.css('cursor')),
            n.css('cursor', r.cursor)
        },
        stop: function () {
          var n = e(this).data('ui-draggable').options
          n._cursor && e('body').css('cursor', n._cursor)
        }
      }),
      e.ui.plugin.add('draggable', 'opacity', {
        start: function (n, r) {
          var i = e(r.helper),
            s = e(this).data('ui-draggable').options
          i.css('opacity') && (s._opacity = i.css('opacity')),
            i.css('opacity', s.opacity)
        },
        stop: function (n, r) {
          var i = e(this).data('ui-draggable').options
          i._opacity && e(r.helper).css('opacity', i._opacity)
        }
      }),
      e.ui.plugin.add('draggable', 'scroll', {
        start: function () {
          var n = e(this).data('ui-draggable')
          n.scrollParent[0] !== document &&
            'HTML' !== n.scrollParent[0].tagName &&
            (n.overflowOffset = n.scrollParent.offset())
        },
        drag: function (n) {
          var r = e(this).data('ui-draggable'),
            i = r.options,
            s = !1
          r.scrollParent[0] !== document && 'HTML' !== r.scrollParent[0].tagName
            ? ((i.axis && 'x' === i.axis) ||
                (r.overflowOffset.top +
                  r.scrollParent[0].offsetHeight -
                  n.pageY <
                i.scrollSensitivity
                  ? (r.scrollParent[0].scrollTop = s =
                      r.scrollParent[0].scrollTop + i.scrollSpeed)
                  : n.pageY - r.overflowOffset.top < i.scrollSensitivity &&
                    (r.scrollParent[0].scrollTop = s =
                      r.scrollParent[0].scrollTop - i.scrollSpeed)),
              (i.axis && 'y' === i.axis) ||
                (r.overflowOffset.left +
                  r.scrollParent[0].offsetWidth -
                  n.pageX <
                i.scrollSensitivity
                  ? (r.scrollParent[0].scrollLeft = s =
                      r.scrollParent[0].scrollLeft + i.scrollSpeed)
                  : n.pageX - r.overflowOffset.left < i.scrollSensitivity &&
                    (r.scrollParent[0].scrollLeft = s =
                      r.scrollParent[0].scrollLeft - i.scrollSpeed)))
            : ((i.axis && 'x' === i.axis) ||
                (n.pageY - e(document).scrollTop() < i.scrollSensitivity
                  ? (s = e(document).scrollTop(
                      e(document).scrollTop() - i.scrollSpeed
                    ))
                  : e(window).height() - (n.pageY - e(document).scrollTop()) <
                      i.scrollSensitivity &&
                    (s = e(document).scrollTop(
                      e(document).scrollTop() + i.scrollSpeed
                    ))),
              (i.axis && 'y' === i.axis) ||
                (n.pageX - e(document).scrollLeft() < i.scrollSensitivity
                  ? (s = e(document).scrollLeft(
                      e(document).scrollLeft() - i.scrollSpeed
                    ))
                  : e(window).width() - (n.pageX - e(document).scrollLeft()) <
                      i.scrollSensitivity &&
                    (s = e(document).scrollLeft(
                      e(document).scrollLeft() + i.scrollSpeed
                    )))),
            s !== !1 &&
              e.ui.ddmanager &&
              !i.dropBehaviour &&
              e.ui.ddmanager.prepareOffsets(r, n)
        }
      }),
      e.ui.plugin.add('draggable', 'snap', {
        start: function () {
          var n = e(this).data('ui-draggable'),
            r = n.options
          ;(n.snapElements = []),
            e(
              r.snap.constructor !== String
                ? r.snap.items || ':data(ui-draggable)'
                : r.snap
            ).each(function () {
              var r = e(this),
                i = r.offset()
              this !== n.element[0] &&
                n.snapElements.push({
                  item: this,
                  width: r.outerWidth(),
                  height: r.outerHeight(),
                  top: i.top,
                  left: i.left
                })
            })
        },
        drag: function (n, r) {
          var i,
            s,
            o,
            u,
            a,
            f,
            l,
            c,
            h,
            p,
            d = e(this).data('ui-draggable'),
            v = d.options,
            m = v.snapTolerance,
            g = r.offset.left,
            y = g + d.helperProportions.width,
            b = r.offset.top,
            w = b + d.helperProportions.height
          for (h = d.snapElements.length - 1; h >= 0; h--)
            (a = d.snapElements[h].left),
              (f = a + d.snapElements[h].width),
              (l = d.snapElements[h].top),
              (c = l + d.snapElements[h].height),
              a - m > y ||
              g > f + m ||
              l - m > w ||
              b > c + m ||
              !e.contains(
                d.snapElements[h].item.ownerDocument,
                d.snapElements[h].item
              )
                ? (d.snapElements[h].snapping &&
                    d.options.snap.release &&
                    d.options.snap.release.call(
                      d.element,
                      n,
                      e.extend(d._uiHash(), {
                        snapItem: d.snapElements[h].item
                      })
                    ),
                  (d.snapElements[h].snapping = !1))
                : ('inner' !== v.snapMode &&
                    ((i = m >= Math.abs(l - w)),
                    (s = m >= Math.abs(c - b)),
                    (o = m >= Math.abs(a - y)),
                    (u = m >= Math.abs(f - g)),
                    i &&
                      (r.position.top =
                        d._convertPositionTo('relative', {
                          top: l - d.helperProportions.height,
                          left: 0
                        }).top - d.margins.top),
                    s &&
                      (r.position.top =
                        d._convertPositionTo('relative', { top: c, left: 0 })
                          .top - d.margins.top),
                    o &&
                      (r.position.left =
                        d._convertPositionTo('relative', {
                          top: 0,
                          left: a - d.helperProportions.width
                        }).left - d.margins.left),
                    u &&
                      (r.position.left =
                        d._convertPositionTo('relative', { top: 0, left: f })
                          .left - d.margins.left)),
                  (p = i || s || o || u),
                  'outer' !== v.snapMode &&
                    ((i = m >= Math.abs(l - b)),
                    (s = m >= Math.abs(c - w)),
                    (o = m >= Math.abs(a - g)),
                    (u = m >= Math.abs(f - y)),
                    i &&
                      (r.position.top =
                        d._convertPositionTo('relative', { top: l, left: 0 })
                          .top - d.margins.top),
                    s &&
                      (r.position.top =
                        d._convertPositionTo('relative', {
                          top: c - d.helperProportions.height,
                          left: 0
                        }).top - d.margins.top),
                    o &&
                      (r.position.left =
                        d._convertPositionTo('relative', { top: 0, left: a })
                          .left - d.margins.left),
                    u &&
                      (r.position.left =
                        d._convertPositionTo('relative', {
                          top: 0,
                          left: f - d.helperProportions.width
                        }).left - d.margins.left)),
                  !d.snapElements[h].snapping &&
                    (i || s || o || u || p) &&
                    d.options.snap.snap &&
                    d.options.snap.snap.call(
                      d.element,
                      n,
                      e.extend(d._uiHash(), {
                        snapItem: d.snapElements[h].item
                      })
                    ),
                  (d.snapElements[h].snapping = i || s || o || u || p))
        }
      }),
      e.ui.plugin.add('draggable', 'stack', {
        start: function () {
          var n,
            r = this.data('ui-draggable').options,
            i = e.makeArray(e(r.stack)).sort(function (n, r) {
              return (
                (parseInt(e(n).css('zIndex'), 10) || 0) -
                (parseInt(e(r).css('zIndex'), 10) || 0)
              )
            })
          i.length &&
            ((n = parseInt(e(i[0]).css('zIndex'), 10) || 0),
            e(i).each(function (r) {
              e(this).css('zIndex', n + r)
            }),
            this.css('zIndex', n + i.length))
        }
      }),
      e.ui.plugin.add('draggable', 'zIndex', {
        start: function (n, r) {
          var i = e(r.helper),
            s = e(this).data('ui-draggable').options
          i.css('zIndex') && (s._zIndex = i.css('zIndex')),
            i.css('zIndex', s.zIndex)
        },
        stop: function (n, r) {
          var i = e(this).data('ui-draggable').options
          i._zIndex && e(r.helper).css('zIndex', i._zIndex)
        }
      })
  })(jQuery),
  (function (e) {
    function t(e, t, n) {
      return e > t && t + n > e
    }
    e.widget('ui.droppable', {
      version: '1.10.3',
      widgetEventPrefix: 'drop',
      options: {
        accept: '*',
        activeClass: !1,
        addClasses: !0,
        greedy: !1,
        hoverClass: !1,
        scope: 'default',
        tolerance: 'intersect',
        activate: null,
        deactivate: null,
        drop: null,
        out: null,
        over: null
      },
      _create: function () {
        var t = this.options,
          n = t.accept
        ;(this.isover = !1),
          (this.isout = !0),
          (this.accept = e.isFunction(n)
            ? n
            : function (e) {
                return e.is(n)
              }),
          (this.proportions = {
            width: this.element[0].offsetWidth,
            height: this.element[0].offsetHeight
          }),
          (e.ui.ddmanager.droppables[t.scope] =
            e.ui.ddmanager.droppables[t.scope] || []),
          e.ui.ddmanager.droppables[t.scope].push(this),
          t.addClasses && this.element.addClass('ui-droppable')
      },
      _destroy: function () {
        for (
          var t = 0, n = e.ui.ddmanager.droppables[this.options.scope];
          n.length > t;
          t++
        )
          n[t] === this && n.splice(t, 1)
        this.element.removeClass('ui-droppable ui-droppable-disabled')
      },
      _setOption: function (t, n) {
        'accept' === t &&
          (this.accept = e.isFunction(n)
            ? n
            : function (e) {
                return e.is(n)
              }),
          e.Widget.prototype._setOption.apply(this, arguments)
      },
      _activate: function (t) {
        var n = e.ui.ddmanager.current
        this.options.activeClass &&
          this.element.addClass(this.options.activeClass),
          n && this._trigger('activate', t, this.ui(n))
      },
      _deactivate: function (t) {
        var n = e.ui.ddmanager.current
        this.options.activeClass &&
          this.element.removeClass(this.options.activeClass),
          n && this._trigger('deactivate', t, this.ui(n))
      },
      _over: function (t) {
        var n = e.ui.ddmanager.current
        n &&
          (n.currentItem || n.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], n.currentItem || n.element) &&
          (this.options.hoverClass &&
            this.element.addClass(this.options.hoverClass),
          this._trigger('over', t, this.ui(n)))
      },
      _out: function (t) {
        var n = e.ui.ddmanager.current
        n &&
          (n.currentItem || n.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], n.currentItem || n.element) &&
          (this.options.hoverClass &&
            this.element.removeClass(this.options.hoverClass),
          this._trigger('out', t, this.ui(n)))
      },
      _drop: function (t, n) {
        var r = n || e.ui.ddmanager.current,
          i = !1
        return r && (r.currentItem || r.element)[0] !== this.element[0]
          ? (this.element
              .find(':data(ui-droppable)')
              .not('.ui-draggable-dragging')
              .each(function () {
                var t = e.data(this, 'ui-droppable')
                return t.options.greedy &&
                  !t.options.disabled &&
                  t.options.scope === r.options.scope &&
                  t.accept.call(t.element[0], r.currentItem || r.element) &&
                  e.ui.intersect(
                    r,
                    e.extend(t, { offset: t.element.offset() }),
                    t.options.tolerance
                  )
                  ? ((i = !0), !1)
                  : undefined
              }),
            i
              ? !1
              : this.accept.call(this.element[0], r.currentItem || r.element)
              ? (this.options.activeClass &&
                  this.element.removeClass(this.options.activeClass),
                this.options.hoverClass &&
                  this.element.removeClass(this.options.hoverClass),
                this._trigger('drop', t, this.ui(r)),
                this.element)
              : !1)
          : !1
      },
      ui: function (e) {
        return {
          draggable: e.currentItem || e.element,
          helper: e.helper,
          position: e.position,
          offset: e.positionAbs
        }
      }
    }),
      (e.ui.intersect = function (e, n, r) {
        if (!n.offset) return !1
        var i,
          s,
          o = (e.positionAbs || e.position.absolute).left,
          u = o + e.helperProportions.width,
          a = (e.positionAbs || e.position.absolute).top,
          f = a + e.helperProportions.height,
          l = n.offset.left,
          c = l + n.proportions.width,
          h = n.offset.top,
          p = h + n.proportions.height
        switch (r) {
          case 'fit':
            return o >= l && c >= u && a >= h && p >= f
          case 'intersect':
            return (
              o + e.helperProportions.width / 2 > l &&
              c > u - e.helperProportions.width / 2 &&
              a + e.helperProportions.height / 2 > h &&
              p > f - e.helperProportions.height / 2
            )
          case 'pointer':
            return (
              (i =
                (e.positionAbs || e.position.absolute).left +
                (e.clickOffset || e.offset.click).left),
              (s =
                (e.positionAbs || e.position.absolute).top +
                (e.clickOffset || e.offset.click).top),
              t(s, h, n.proportions.height) && t(i, l, n.proportions.width)
            )
          case 'touch':
            return (
              ((a >= h && p >= a) || (f >= h && p >= f) || (h > a && f > p)) &&
              ((o >= l && c >= o) || (u >= l && c >= u) || (l > o && u > c))
            )
          default:
            return !1
        }
      }),
      (e.ui.ddmanager = {
        current: null,
        droppables: { default: [] },
        prepareOffsets: function (t, n) {
          var r,
            i,
            s = e.ui.ddmanager.droppables[t.options.scope] || [],
            o = n ? n.type : null,
            u = (t.currentItem || t.element)
              .find(':data(ui-droppable)')
              .addBack()
          e: for (r = 0; s.length > r; r++)
            if (
              !(
                s[r].options.disabled ||
                (t &&
                  !s[r].accept.call(
                    s[r].element[0],
                    t.currentItem || t.element
                  ))
              )
            ) {
              for (i = 0; u.length > i; i++)
                if (u[i] === s[r].element[0]) {
                  s[r].proportions.height = 0
                  continue e
                }
              ;(s[r].visible = 'none' !== s[r].element.css('display')),
                s[r].visible &&
                  ('mousedown' === o && s[r]._activate.call(s[r], n),
                  (s[r].offset = s[r].element.offset()),
                  (s[r].proportions = {
                    width: s[r].element[0].offsetWidth,
                    height: s[r].element[0].offsetHeight
                  }))
            }
        },
        drop: function (t, n) {
          var r = !1
          return (
            e.each(
              (e.ui.ddmanager.droppables[t.options.scope] || []).slice(),
              function () {
                this.options &&
                  (!this.options.disabled &&
                    this.visible &&
                    e.ui.intersect(t, this, this.options.tolerance) &&
                    (r = this._drop.call(this, n) || r),
                  !this.options.disabled &&
                    this.visible &&
                    this.accept.call(
                      this.element[0],
                      t.currentItem || t.element
                    ) &&
                    ((this.isout = !0),
                    (this.isover = !1),
                    this._deactivate.call(this, n)))
              }
            ),
            r
          )
        },
        dragStart: function (t, n) {
          t.element.parentsUntil('body').bind('scroll.droppable', function () {
            t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
          })
        },
        drag: function (t, n) {
          t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n),
            e.each(
              e.ui.ddmanager.droppables[t.options.scope] || [],
              function () {
                if (
                  !this.options.disabled &&
                  !this.greedyChild &&
                  this.visible
                ) {
                  var r,
                    s,
                    o,
                    u = e.ui.intersect(t, this, this.options.tolerance),
                    a =
                      !u && this.isover
                        ? 'isout'
                        : u && !this.isover
                        ? 'isover'
                        : null
                  a &&
                    (this.options.greedy &&
                      ((s = this.options.scope),
                      (o = this.element
                        .parents(':data(ui-droppable)')
                        .filter(function () {
                          return (
                            e.data(this, 'ui-droppable').options.scope === s
                          )
                        })),
                      o.length &&
                        ((r = e.data(o[0], 'ui-droppable')),
                        (r.greedyChild = 'isover' === a))),
                    r &&
                      'isover' === a &&
                      ((r.isover = !1), (r.isout = !0), r._out.call(r, n)),
                    (this[a] = !0),
                    (this['isout' === a ? 'isover' : 'isout'] = !1),
                    this['isover' === a ? '_over' : '_out'].call(this, n),
                    r &&
                      'isout' === a &&
                      ((r.isout = !1), (r.isover = !0), r._over.call(r, n)))
                }
              }
            )
        },
        dragStop: function (t, n) {
          t.element.parentsUntil('body').unbind('scroll.droppable'),
            t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
        }
      })
  })(jQuery),
  (function (e) {
    function t(e) {
      return parseInt(e, 10) || 0
    }
    function n(e) {
      return !isNaN(parseInt(e, 10))
    }
    e.widget('ui.resizable', e.ui.mouse, {
      version: '1.10.3',
      widgetEventPrefix: 'resize',
      options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: 'slow',
        animateEasing: 'swing',
        aspectRatio: !1,
        autoHide: !1,
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: 'e,s,se',
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 90,
        resize: null,
        start: null,
        stop: null
      },
      _create: function () {
        var t,
          n,
          r,
          i,
          s,
          o = this,
          u = this.options
        if (
          (this.element.addClass('ui-resizable'),
          e.extend(this, {
            _aspectRatio: !!u.aspectRatio,
            aspectRatio: u.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper:
              u.helper || u.ghost || u.animate
                ? u.helper || 'ui-resizable-helper'
                : null
          }),
          this.element[0].nodeName.match(
            /canvas|textarea|input|select|button|img/i
          ) &&
            (this.element.wrap(
              e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css(
                {
                  position: this.element.css('position'),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css('top'),
                  left: this.element.css('left')
                }
              )
            ),
            (this.element = this.element
              .parent()
              .data('ui-resizable', this.element.data('ui-resizable'))),
            (this.elementIsWrapper = !0),
            this.element.css({
              marginLeft: this.originalElement.css('marginLeft'),
              marginTop: this.originalElement.css('marginTop'),
              marginRight: this.originalElement.css('marginRight'),
              marginBottom: this.originalElement.css('marginBottom')
            }),
            this.originalElement.css({
              marginLeft: 0,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0
            }),
            (this.originalResizeStyle = this.originalElement.css('resize')),
            this.originalElement.css('resize', 'none'),
            this._proportionallyResizeElements.push(
              this.originalElement.css({
                position: 'static',
                zoom: 1,
                display: 'block'
              })
            ),
            this.originalElement.css({
              margin: this.originalElement.css('margin')
            }),
            this._proportionallyResize()),
          (this.handles =
            u.handles ||
            (e('.ui-resizable-handle', this.element).length
              ? {
                  n: '.ui-resizable-n',
                  e: '.ui-resizable-e',
                  s: '.ui-resizable-s',
                  w: '.ui-resizable-w',
                  se: '.ui-resizable-se',
                  sw: '.ui-resizable-sw',
                  ne: '.ui-resizable-ne',
                  nw: '.ui-resizable-nw'
                }
              : 'e,s,se')),
          this.handles.constructor === String)
        )
          for (
            'all' === this.handles && (this.handles = 'n,e,s,w,se,sw,ne,nw'),
              t = this.handles.split(','),
              this.handles = {},
              n = 0;
            t.length > n;
            n++
          )
            (r = e.trim(t[n])),
              (s = 'ui-resizable-' + r),
              (i = e("<div class='ui-resizable-handle " + s + "'></div>")),
              i.css({ zIndex: u.zIndex }),
              'se' === r && i.addClass('ui-icon ui-icon-gripsmall-diagonal-se'),
              (this.handles[r] = '.ui-resizable-' + r),
              this.element.append(i)
        ;(this._renderAxis = function (t) {
          var n, r, i, s
          t = t || this.element
          for (n in this.handles)
            this.handles[n].constructor === String &&
              (this.handles[n] = e(this.handles[n], this.element).show()),
              this.elementIsWrapper &&
                this.originalElement[0].nodeName.match(
                  /textarea|input|select|button/i
                ) &&
                ((r = e(this.handles[n], this.element)),
                (s = /sw|ne|nw|se|n|s/.test(n)
                  ? r.outerHeight()
                  : r.outerWidth()),
                (i = [
                  'padding',
                  /ne|nw|n/.test(n)
                    ? 'Top'
                    : /se|sw|s/.test(n)
                    ? 'Bottom'
                    : /^e$/.test(n)
                    ? 'Right'
                    : 'Left'
                ].join('')),
                t.css(i, s),
                this._proportionallyResize()),
              e(this.handles[n]).length
        }),
          this._renderAxis(this.element),
          (this._handles = e(
            '.ui-resizable-handle',
            this.element
          ).disableSelection()),
          this._handles.mouseover(function () {
            o.resizing ||
              (this.className &&
                (i = this.className.match(
                  /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                )),
              (o.axis = i && i[1] ? i[1] : 'se'))
          }),
          u.autoHide &&
            (this._handles.hide(),
            e(this.element)
              .addClass('ui-resizable-autohide')
              .mouseenter(function () {
                u.disabled ||
                  (e(this).removeClass('ui-resizable-autohide'),
                  o._handles.show())
              })
              .mouseleave(function () {
                u.disabled ||
                  o.resizing ||
                  (e(this).addClass('ui-resizable-autohide'), o._handles.hide())
              })),
          this._mouseInit()
      },
      _destroy: function () {
        this._mouseDestroy()
        var t,
          n = function (t) {
            e(t)
              .removeClass(
                'ui-resizable ui-resizable-disabled ui-resizable-resizing'
              )
              .removeData('resizable')
              .removeData('ui-resizable')
              .unbind('.resizable')
              .find('.ui-resizable-handle')
              .remove()
          }
        return (
          this.elementIsWrapper &&
            (n(this.element),
            (t = this.element),
            this.originalElement
              .css({
                position: t.css('position'),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css('top'),
                left: t.css('left')
              })
              .insertAfter(t),
            t.remove()),
          this.originalElement.css('resize', this.originalResizeStyle),
          n(this.originalElement),
          this
        )
      },
      _mouseCapture: function (t) {
        var n,
          r,
          i = !1
        for (n in this.handles)
          (r = e(this.handles[n])[0]),
            (r === t.target || e.contains(r, t.target)) && (i = !0)
        return !this.options.disabled && i
      },
      _mouseStart: function (n) {
        var r,
          i,
          s,
          o = this.options,
          u = this.element.position(),
          a = this.element
        return (
          (this.resizing = !0),
          /absolute/.test(a.css('position'))
            ? a.css({
                position: 'absolute',
                top: a.css('top'),
                left: a.css('left')
              })
            : a.is('.ui-draggable') &&
              a.css({ position: 'absolute', top: u.top, left: u.left }),
          this._renderProxy(),
          (r = t(this.helper.css('left'))),
          (i = t(this.helper.css('top'))),
          o.containment &&
            ((r += e(o.containment).scrollLeft() || 0),
            (i += e(o.containment).scrollTop() || 0)),
          (this.offset = this.helper.offset()),
          (this.position = { left: r, top: i }),
          (this.size = this._helper
            ? { width: a.outerWidth(), height: a.outerHeight() }
            : { width: a.width(), height: a.height() }),
          (this.originalSize = this._helper
            ? { width: a.outerWidth(), height: a.outerHeight() }
            : { width: a.width(), height: a.height() }),
          (this.originalPosition = { left: r, top: i }),
          (this.sizeDiff = {
            width: a.outerWidth() - a.width(),
            height: a.outerHeight() - a.height()
          }),
          (this.originalMousePosition = { left: n.pageX, top: n.pageY }),
          (this.aspectRatio =
            'number' == typeof o.aspectRatio
              ? o.aspectRatio
              : this.originalSize.width / this.originalSize.height || 1),
          (s = e('.ui-resizable-' + this.axis).css('cursor')),
          e('body').css('cursor', 'auto' === s ? this.axis + '-resize' : s),
          a.addClass('ui-resizable-resizing'),
          this._propagate('start', n),
          !0
        )
      },
      _mouseDrag: function (t) {
        var n,
          r = this.helper,
          i = {},
          s = this.originalMousePosition,
          o = this.axis,
          u = this.position.top,
          a = this.position.left,
          f = this.size.width,
          l = this.size.height,
          c = t.pageX - s.left || 0,
          h = t.pageY - s.top || 0,
          p = this._change[o]
        return p
          ? ((n = p.apply(this, [t, c, h])),
            this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (n = this._updateRatio(n, t)),
            (n = this._respectSize(n, t)),
            this._updateCache(n),
            this._propagate('resize', t),
            this.position.top !== u && (i.top = this.position.top + 'px'),
            this.position.left !== a && (i.left = this.position.left + 'px'),
            this.size.width !== f && (i.width = this.size.width + 'px'),
            this.size.height !== l && (i.height = this.size.height + 'px'),
            r.css(i),
            !this._helper &&
              this._proportionallyResizeElements.length &&
              this._proportionallyResize(),
            e.isEmptyObject(i) || this._trigger('resize', t, this.ui()),
            !1)
          : !1
      },
      _mouseStop: function (t) {
        this.resizing = !1
        var n,
          r,
          i,
          s,
          o,
          u,
          a,
          f = this.options,
          l = this
        return (
          this._helper &&
            ((n = this._proportionallyResizeElements),
            (r = n.length && /textarea/i.test(n[0].nodeName)),
            (i = r && e.ui.hasScroll(n[0], 'left') ? 0 : l.sizeDiff.height),
            (s = r ? 0 : l.sizeDiff.width),
            (o = {
              width: l.helper.width() - s,
              height: l.helper.height() - i
            }),
            (u =
              parseInt(l.element.css('left'), 10) +
                (l.position.left - l.originalPosition.left) || null),
            (a =
              parseInt(l.element.css('top'), 10) +
                (l.position.top - l.originalPosition.top) || null),
            f.animate || this.element.css(e.extend(o, { top: a, left: u })),
            l.helper.height(l.size.height),
            l.helper.width(l.size.width),
            this._helper && !f.animate && this._proportionallyResize()),
          e('body').css('cursor', 'auto'),
          this.element.removeClass('ui-resizable-resizing'),
          this._propagate('stop', t),
          this._helper && this.helper.remove(),
          !1
        )
      },
      _updateVirtualBoundaries: function (e) {
        var t,
          r,
          s,
          o,
          u,
          a = this.options
        ;(u = {
          minWidth: n(a.minWidth) ? a.minWidth : 0,
          maxWidth: n(a.maxWidth) ? a.maxWidth : 1 / 0,
          minHeight: n(a.minHeight) ? a.minHeight : 0,
          maxHeight: n(a.maxHeight) ? a.maxHeight : 1 / 0
        }),
          (this._aspectRatio || e) &&
            ((t = u.minHeight * this.aspectRatio),
            (s = u.minWidth / this.aspectRatio),
            (r = u.maxHeight * this.aspectRatio),
            (o = u.maxWidth / this.aspectRatio),
            t > u.minWidth && (u.minWidth = t),
            s > u.minHeight && (u.minHeight = s),
            u.maxWidth > r && (u.maxWidth = r),
            u.maxHeight > o && (u.maxHeight = o)),
          (this._vBoundaries = u)
      },
      _updateCache: function (e) {
        ;(this.offset = this.helper.offset()),
          n(e.left) && (this.position.left = e.left),
          n(e.top) && (this.position.top = e.top),
          n(e.height) && (this.size.height = e.height),
          n(e.width) && (this.size.width = e.width)
      },
      _updateRatio: function (e) {
        var t = this.position,
          r = this.size,
          s = this.axis
        return (
          n(e.height)
            ? (e.width = e.height * this.aspectRatio)
            : n(e.width) && (e.height = e.width / this.aspectRatio),
          'sw' === s &&
            ((e.left = t.left + (r.width - e.width)), (e.top = null)),
          'nw' === s &&
            ((e.top = t.top + (r.height - e.height)),
            (e.left = t.left + (r.width - e.width))),
          e
        )
      },
      _respectSize: function (e) {
        var t = this._vBoundaries,
          r = this.axis,
          s = n(e.width) && t.maxWidth && t.maxWidth < e.width,
          o = n(e.height) && t.maxHeight && t.maxHeight < e.height,
          u = n(e.width) && t.minWidth && t.minWidth > e.width,
          a = n(e.height) && t.minHeight && t.minHeight > e.height,
          f = this.originalPosition.left + this.originalSize.width,
          l = this.position.top + this.size.height,
          c = /sw|nw|w/.test(r),
          h = /nw|ne|n/.test(r)
        return (
          u && (e.width = t.minWidth),
          a && (e.height = t.minHeight),
          s && (e.width = t.maxWidth),
          o && (e.height = t.maxHeight),
          u && c && (e.left = f - t.minWidth),
          s && c && (e.left = f - t.maxWidth),
          a && h && (e.top = l - t.minHeight),
          o && h && (e.top = l - t.maxHeight),
          e.width || e.height || e.left || !e.top
            ? e.width || e.height || e.top || !e.left || (e.left = null)
            : (e.top = null),
          e
        )
      },
      _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length) {
          var e,
            t,
            n,
            r,
            i,
            s = this.helper || this.element
          for (e = 0; this._proportionallyResizeElements.length > e; e++) {
            if (((i = this._proportionallyResizeElements[e]), !this.borderDif))
              for (
                this.borderDif = [],
                  n = [
                    i.css('borderTopWidth'),
                    i.css('borderRightWidth'),
                    i.css('borderBottomWidth'),
                    i.css('borderLeftWidth')
                  ],
                  r = [
                    i.css('paddingTop'),
                    i.css('paddingRight'),
                    i.css('paddingBottom'),
                    i.css('paddingLeft')
                  ],
                  t = 0;
                n.length > t;
                t++
              )
                this.borderDif[t] =
                  (parseInt(n[t], 10) || 0) + (parseInt(r[t], 10) || 0)
            i.css({
              height: s.height() - this.borderDif[0] - this.borderDif[2] || 0,
              width: s.width() - this.borderDif[1] - this.borderDif[3] || 0
            })
          }
        }
      },
      _renderProxy: function () {
        var t = this.element,
          n = this.options
        ;(this.elementOffset = t.offset()),
          this._helper
            ? ((this.helper =
                this.helper || e("<div style='overflow:hidden;'></div>")),
              this.helper
                .addClass(this._helper)
                .css({
                  width: this.element.outerWidth() - 1,
                  height: this.element.outerHeight() - 1,
                  position: 'absolute',
                  left: this.elementOffset.left + 'px',
                  top: this.elementOffset.top + 'px',
                  zIndex: ++n.zIndex
                }),
              this.helper.appendTo('body').disableSelection())
            : (this.helper = this.element)
      },
      _change: {
        e: function (e, t) {
          return { width: this.originalSize.width + t }
        },
        w: function (e, t) {
          var n = this.originalSize,
            r = this.originalPosition
          return { left: r.left + t, width: n.width - t }
        },
        n: function (e, t, n) {
          var r = this.originalSize,
            i = this.originalPosition
          return { top: i.top + n, height: r.height - n }
        },
        s: function (e, t, n) {
          return { height: this.originalSize.height + n }
        },
        se: function (t, n, r) {
          return e.extend(
            this._change.s.apply(this, arguments),
            this._change.e.apply(this, [t, n, r])
          )
        },
        sw: function (t, n, r) {
          return e.extend(
            this._change.s.apply(this, arguments),
            this._change.w.apply(this, [t, n, r])
          )
        },
        ne: function (t, n, r) {
          return e.extend(
            this._change.n.apply(this, arguments),
            this._change.e.apply(this, [t, n, r])
          )
        },
        nw: function (t, n, r) {
          return e.extend(
            this._change.n.apply(this, arguments),
            this._change.w.apply(this, [t, n, r])
          )
        }
      },
      _propagate: function (t, n) {
        e.ui.plugin.call(this, t, [n, this.ui()]),
          'resize' !== t && this._trigger(t, n, this.ui())
      },
      plugins: {},
      ui: function () {
        return {
          originalElement: this.originalElement,
          element: this.element,
          helper: this.helper,
          position: this.position,
          size: this.size,
          originalSize: this.originalSize,
          originalPosition: this.originalPosition
        }
      }
    }),
      e.ui.plugin.add('resizable', 'animate', {
        stop: function (t) {
          var n = e(this).data('ui-resizable'),
            r = n.options,
            i = n._proportionallyResizeElements,
            s = i.length && /textarea/i.test(i[0].nodeName),
            o = s && e.ui.hasScroll(i[0], 'left') ? 0 : n.sizeDiff.height,
            u = s ? 0 : n.sizeDiff.width,
            a = { width: n.size.width - u, height: n.size.height - o },
            f =
              parseInt(n.element.css('left'), 10) +
                (n.position.left - n.originalPosition.left) || null,
            l =
              parseInt(n.element.css('top'), 10) +
                (n.position.top - n.originalPosition.top) || null
          n.element.animate(e.extend(a, l && f ? { top: l, left: f } : {}), {
            duration: r.animateDuration,
            easing: r.animateEasing,
            step: function () {
              var r = {
                width: parseInt(n.element.css('width'), 10),
                height: parseInt(n.element.css('height'), 10),
                top: parseInt(n.element.css('top'), 10),
                left: parseInt(n.element.css('left'), 10)
              }
              i &&
                i.length &&
                e(i[0]).css({ width: r.width, height: r.height }),
                n._updateCache(r),
                n._propagate('resize', t)
            }
          })
        }
      }),
      e.ui.plugin.add('resizable', 'containment', {
        start: function () {
          var n,
            r,
            i,
            s,
            o,
            u,
            a,
            f = e(this).data('ui-resizable'),
            l = f.options,
            c = f.element,
            h = l.containment,
            p =
              h instanceof e
                ? h.get(0)
                : /parent/.test(h)
                ? c.parent().get(0)
                : h
          p &&
            ((f.containerElement = e(p)),
            /document/.test(h) || h === document
              ? ((f.containerOffset = { left: 0, top: 0 }),
                (f.containerPosition = { left: 0, top: 0 }),
                (f.parentData = {
                  element: e(document),
                  left: 0,
                  top: 0,
                  width: e(document).width(),
                  height:
                    e(document).height() ||
                    document.body.parentNode.scrollHeight
                }))
              : ((n = e(p)),
                (r = []),
                e(['Top', 'Right', 'Left', 'Bottom']).each(function (e, i) {
                  r[e] = t(n.css('padding' + i))
                }),
                (f.containerOffset = n.offset()),
                (f.containerPosition = n.position()),
                (f.containerSize = {
                  height: n.innerHeight() - r[3],
                  width: n.innerWidth() - r[1]
                }),
                (i = f.containerOffset),
                (s = f.containerSize.height),
                (o = f.containerSize.width),
                (u = e.ui.hasScroll(p, 'left') ? p.scrollWidth : o),
                (a = e.ui.hasScroll(p) ? p.scrollHeight : s),
                (f.parentData = {
                  element: p,
                  left: i.left,
                  top: i.top,
                  width: u,
                  height: a
                })))
        },
        resize: function (t) {
          var n,
            r,
            i,
            s,
            o = e(this).data('ui-resizable'),
            u = o.options,
            a = o.containerOffset,
            f = o.position,
            l = o._aspectRatio || t.shiftKey,
            c = { top: 0, left: 0 },
            h = o.containerElement
          h[0] !== document && /static/.test(h.css('position')) && (c = a),
            f.left < (o._helper ? a.left : 0) &&
              ((o.size.width =
                o.size.width +
                (o._helper
                  ? o.position.left - a.left
                  : o.position.left - c.left)),
              l && (o.size.height = o.size.width / o.aspectRatio),
              (o.position.left = u.helper ? a.left : 0)),
            f.top < (o._helper ? a.top : 0) &&
              ((o.size.height =
                o.size.height +
                (o._helper ? o.position.top - a.top : o.position.top)),
              l && (o.size.width = o.size.height * o.aspectRatio),
              (o.position.top = o._helper ? a.top : 0)),
            (o.offset.left = o.parentData.left + o.position.left),
            (o.offset.top = o.parentData.top + o.position.top),
            (n = Math.abs(
              (o._helper ? o.offset.left - c.left : o.offset.left - c.left) +
                o.sizeDiff.width
            )),
            (r = Math.abs(
              (o._helper ? o.offset.top - c.top : o.offset.top - a.top) +
                o.sizeDiff.height
            )),
            (i = o.containerElement.get(0) === o.element.parent().get(0)),
            (s = /relative|absolute/.test(o.containerElement.css('position'))),
            i && s && (n -= o.parentData.left),
            n + o.size.width >= o.parentData.width &&
              ((o.size.width = o.parentData.width - n),
              l && (o.size.height = o.size.width / o.aspectRatio)),
            r + o.size.height >= o.parentData.height &&
              ((o.size.height = o.parentData.height - r),
              l && (o.size.width = o.size.height * o.aspectRatio))
        },
        stop: function () {
          var t = e(this).data('ui-resizable'),
            n = t.options,
            r = t.containerOffset,
            i = t.containerPosition,
            s = t.containerElement,
            o = e(t.helper),
            u = o.offset(),
            a = o.outerWidth() - t.sizeDiff.width,
            f = o.outerHeight() - t.sizeDiff.height
          t._helper &&
            !n.animate &&
            /relative/.test(s.css('position')) &&
            e(this).css({
              left: u.left - i.left - r.left,
              width: a,
              height: f
            }),
            t._helper &&
              !n.animate &&
              /static/.test(s.css('position')) &&
              e(this).css({
                left: u.left - i.left - r.left,
                width: a,
                height: f
              })
        }
      }),
      e.ui.plugin.add('resizable', 'alsoResize', {
        start: function () {
          var t = e(this).data('ui-resizable'),
            n = t.options,
            r = function (t) {
              e(t).each(function () {
                var t = e(this)
                t.data('ui-resizable-alsoresize', {
                  width: parseInt(t.width(), 10),
                  height: parseInt(t.height(), 10),
                  left: parseInt(t.css('left'), 10),
                  top: parseInt(t.css('top'), 10)
                })
              })
            }
          'object' != typeof n.alsoResize || n.alsoResize.parentNode
            ? r(n.alsoResize)
            : n.alsoResize.length
            ? ((n.alsoResize = n.alsoResize[0]), r(n.alsoResize))
            : e.each(n.alsoResize, function (e) {
                r(e)
              })
        },
        resize: function (t, n) {
          var r = e(this).data('ui-resizable'),
            i = r.options,
            s = r.originalSize,
            o = r.originalPosition,
            u = {
              height: r.size.height - s.height || 0,
              width: r.size.width - s.width || 0,
              top: r.position.top - o.top || 0,
              left: r.position.left - o.left || 0
            },
            a = function (t, r) {
              e(t).each(function () {
                var t = e(this),
                  i = e(this).data('ui-resizable-alsoresize'),
                  s = {},
                  o =
                    r && r.length
                      ? r
                      : t.parents(n.originalElement[0]).length
                      ? ['width', 'height']
                      : ['width', 'height', 'top', 'left']
                e.each(o, function (e, t) {
                  var n = (i[t] || 0) + (u[t] || 0)
                  n && n >= 0 && (s[t] = n || null)
                }),
                  t.css(s)
              })
            }
          'object' != typeof i.alsoResize || i.alsoResize.nodeType
            ? a(i.alsoResize)
            : e.each(i.alsoResize, function (e, t) {
                a(e, t)
              })
        },
        stop: function () {
          e(this).removeData('resizable-alsoresize')
        }
      }),
      e.ui.plugin.add('resizable', 'ghost', {
        start: function () {
          var t = e(this).data('ui-resizable'),
            n = t.options,
            r = t.size
          ;(t.ghost = t.originalElement.clone()),
            t.ghost
              .css({
                opacity: 0.25,
                display: 'block',
                position: 'relative',
                height: r.height,
                width: r.width,
                margin: 0,
                left: 0,
                top: 0
              })
              .addClass('ui-resizable-ghost')
              .addClass('string' == typeof n.ghost ? n.ghost : ''),
            t.ghost.appendTo(t.helper)
        },
        resize: function () {
          var t = e(this).data('ui-resizable')
          t.ghost &&
            t.ghost.css({
              position: 'relative',
              height: t.size.height,
              width: t.size.width
            })
        },
        stop: function () {
          var t = e(this).data('ui-resizable')
          t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
      }),
      e.ui.plugin.add('resizable', 'grid', {
        resize: function () {
          var t = e(this).data('ui-resizable'),
            n = t.options,
            r = t.size,
            i = t.originalSize,
            s = t.originalPosition,
            o = t.axis,
            u = 'number' == typeof n.grid ? [n.grid, n.grid] : n.grid,
            a = u[0] || 1,
            f = u[1] || 1,
            l = Math.round((r.width - i.width) / a) * a,
            c = Math.round((r.height - i.height) / f) * f,
            h = i.width + l,
            p = i.height + c,
            d = n.maxWidth && h > n.maxWidth,
            v = n.maxHeight && p > n.maxHeight,
            m = n.minWidth && n.minWidth > h,
            g = n.minHeight && n.minHeight > p
          ;(n.grid = u),
            m && (h += a),
            g && (p += f),
            d && (h -= a),
            v && (p -= f),
            /^(se|s|e)$/.test(o)
              ? ((t.size.width = h), (t.size.height = p))
              : /^(ne)$/.test(o)
              ? ((t.size.width = h),
                (t.size.height = p),
                (t.position.top = s.top - c))
              : /^(sw)$/.test(o)
              ? ((t.size.width = h),
                (t.size.height = p),
                (t.position.left = s.left - l))
              : ((t.size.width = h),
                (t.size.height = p),
                (t.position.top = s.top - c),
                (t.position.left = s.left - l))
        }
      })
  })(jQuery),
  (function (e) {
    e.widget('ui.selectable', e.ui.mouse, {
      version: '1.10.3',
      options: {
        appendTo: 'body',
        autoRefresh: !0,
        distance: 0,
        filter: '*',
        tolerance: 'touch',
        selected: null,
        selecting: null,
        start: null,
        stop: null,
        unselected: null,
        unselecting: null
      },
      _create: function () {
        var n,
          r = this
        this.element.addClass('ui-selectable'),
          (this.dragged = !1),
          (this.refresh = function () {
            ;(n = e(r.options.filter, r.element[0])),
              n.addClass('ui-selectee'),
              n.each(function () {
                var n = e(this),
                  r = n.offset()
                e.data(this, 'selectable-item', {
                  element: this,
                  $element: n,
                  left: r.left,
                  top: r.top,
                  right: r.left + n.outerWidth(),
                  bottom: r.top + n.outerHeight(),
                  startselected: !1,
                  selected: n.hasClass('ui-selected'),
                  selecting: n.hasClass('ui-selecting'),
                  unselecting: n.hasClass('ui-unselecting')
                })
              })
          }),
          this.refresh(),
          (this.selectees = n.addClass('ui-selectee')),
          this._mouseInit(),
          (this.helper = e("<div class='ui-selectable-helper'></div>"))
      },
      _destroy: function () {
        this.selectees.removeClass('ui-selectee').removeData('selectable-item'),
          this.element.removeClass('ui-selectable ui-selectable-disabled'),
          this._mouseDestroy()
      },
      _mouseStart: function (n) {
        var r = this,
          i = this.options
        ;(this.opos = [n.pageX, n.pageY]),
          this.options.disabled ||
            ((this.selectees = e(i.filter, this.element[0])),
            this._trigger('start', n),
            e(i.appendTo).append(this.helper),
            this.helper.css({
              left: n.pageX,
              top: n.pageY,
              width: 0,
              height: 0
            }),
            i.autoRefresh && this.refresh(),
            this.selectees.filter('.ui-selected').each(function () {
              var i = e.data(this, 'selectable-item')
              ;(i.startselected = !0),
                n.metaKey ||
                  n.ctrlKey ||
                  (i.$element.removeClass('ui-selected'),
                  (i.selected = !1),
                  i.$element.addClass('ui-unselecting'),
                  (i.unselecting = !0),
                  r._trigger('unselecting', n, { unselecting: i.element }))
            }),
            e(n.target)
              .parents()
              .addBack()
              .each(function () {
                var i,
                  s = e.data(this, 'selectable-item')
                return s
                  ? ((i =
                      (!n.metaKey && !n.ctrlKey) ||
                      !s.$element.hasClass('ui-selected')),
                    s.$element
                      .removeClass(i ? 'ui-unselecting' : 'ui-selected')
                      .addClass(i ? 'ui-selecting' : 'ui-unselecting'),
                    (s.unselecting = !i),
                    (s.selecting = i),
                    (s.selected = i),
                    i
                      ? r._trigger('selecting', n, { selecting: s.element })
                      : r._trigger('unselecting', n, {
                          unselecting: s.element
                        }),
                    !1)
                  : undefined
              }))
      },
      _mouseDrag: function (n) {
        if (((this.dragged = !0), !this.options.disabled)) {
          var r,
            i = this,
            s = this.options,
            o = this.opos[0],
            u = this.opos[1],
            a = n.pageX,
            f = n.pageY
          return (
            o > a && ((r = a), (a = o), (o = r)),
            u > f && ((r = f), (f = u), (u = r)),
            this.helper.css({ left: o, top: u, width: a - o, height: f - u }),
            this.selectees.each(function () {
              var r = e.data(this, 'selectable-item'),
                l = !1
              r &&
                r.element !== i.element[0] &&
                ('touch' === s.tolerance
                  ? (l = !(
                      r.left > a ||
                      o > r.right ||
                      r.top > f ||
                      u > r.bottom
                    ))
                  : 'fit' === s.tolerance &&
                    (l =
                      r.left > o && a > r.right && r.top > u && f > r.bottom),
                l
                  ? (r.selected &&
                      (r.$element.removeClass('ui-selected'),
                      (r.selected = !1)),
                    r.unselecting &&
                      (r.$element.removeClass('ui-unselecting'),
                      (r.unselecting = !1)),
                    r.selecting ||
                      (r.$element.addClass('ui-selecting'),
                      (r.selecting = !0),
                      i._trigger('selecting', n, { selecting: r.element })))
                  : (r.selecting &&
                      ((n.metaKey || n.ctrlKey) && r.startselected
                        ? (r.$element.removeClass('ui-selecting'),
                          (r.selecting = !1),
                          r.$element.addClass('ui-selected'),
                          (r.selected = !0))
                        : (r.$element.removeClass('ui-selecting'),
                          (r.selecting = !1),
                          r.startselected &&
                            (r.$element.addClass('ui-unselecting'),
                            (r.unselecting = !0)),
                          i._trigger('unselecting', n, {
                            unselecting: r.element
                          }))),
                    r.selected &&
                      (n.metaKey ||
                        n.ctrlKey ||
                        r.startselected ||
                        (r.$element.removeClass('ui-selected'),
                        (r.selected = !1),
                        r.$element.addClass('ui-unselecting'),
                        (r.unselecting = !0),
                        i._trigger('unselecting', n, {
                          unselecting: r.element
                        })))))
            }),
            !1
          )
        }
      },
      _mouseStop: function (n) {
        var r = this
        return (
          (this.dragged = !1),
          e('.ui-unselecting', this.element[0]).each(function () {
            var s = e.data(this, 'selectable-item')
            s.$element.removeClass('ui-unselecting'),
              (s.unselecting = !1),
              (s.startselected = !1),
              r._trigger('unselected', n, { unselected: s.element })
          }),
          e('.ui-selecting', this.element[0]).each(function () {
            var s = e.data(this, 'selectable-item')
            s.$element.removeClass('ui-selecting').addClass('ui-selected'),
              (s.selecting = !1),
              (s.selected = !0),
              (s.startselected = !0),
              r._trigger('selected', n, { selected: s.element })
          }),
          this._trigger('stop', n),
          this.helper.remove(),
          !1
        )
      }
    })
  })(jQuery),
  (function (e) {
    function t(e, t, n) {
      return e > t && t + n > e
    }
    function n(e) {
      return (
        /left|right/.test(e.css('float')) ||
        /inline|table-cell/.test(e.css('display'))
      )
    }
    e.widget('ui.sortable', e.ui.mouse, {
      version: '1.10.3',
      widgetEventPrefix: 'sort',
      ready: !1,
      options: {
        appendTo: 'parent',
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: 'auto',
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: 'original',
        items: '> *',
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: 'default',
        tolerance: 'intersect',
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null
      },
      _create: function () {
        var e = this.options
        ;(this.containerCache = {}),
          this.element.addClass('ui-sortable'),
          this.refresh(),
          (this.floating = this.items.length
            ? 'x' === e.axis || n(this.items[0].item)
            : !1),
          (this.offset = this.element.offset()),
          this._mouseInit(),
          (this.ready = !0)
      },
      _destroy: function () {
        this.element.removeClass('ui-sortable ui-sortable-disabled'),
          this._mouseDestroy()
        for (var e = this.items.length - 1; e >= 0; e--)
          this.items[e].item.removeData(this.widgetName + '-item')
        return this
      },
      _setOption: function (t, n) {
        'disabled' === t
          ? ((this.options[t] = n),
            this.widget().toggleClass('ui-sortable-disabled', !!n))
          : e.Widget.prototype._setOption.apply(this, arguments)
      },
      _mouseCapture: function (t, n) {
        var r = null,
          i = !1,
          s = this
        return this.reverting
          ? !1
          : this.options.disabled || 'static' === this.options.type
          ? !1
          : (this._refreshItems(t),
            e(t.target)
              .parents()
              .each(function () {
                return e.data(this, s.widgetName + '-item') === s
                  ? ((r = e(this)), !1)
                  : undefined
              }),
            e.data(t.target, s.widgetName + '-item') === s && (r = e(t.target)),
            r
              ? !this.options.handle ||
                n ||
                (e(this.options.handle, r)
                  .find('*')
                  .addBack()
                  .each(function () {
                    this === t.target && (i = !0)
                  }),
                i)
                ? ((this.currentItem = r), this._removeCurrentsFromItems(), !0)
                : !1
              : !1)
      },
      _mouseStart: function (t, n, r) {
        var i,
          s,
          o = this.options
        if (
          ((this.currentContainer = this),
          this.refreshPositions(),
          (this.helper = this._createHelper(t)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.currentItem.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left
          }),
          e.extend(this.offset, {
            click: {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset()
          }),
          this.helper.css('position', 'absolute'),
          (this.cssPosition = this.helper.css('position')),
          (this.originalPosition = this._generatePosition(t)),
          (this.originalPageX = t.pageX),
          (this.originalPageY = t.pageY),
          o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt),
          (this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0]
          }),
          this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          o.containment && this._setContainment(),
          o.cursor &&
            'auto' !== o.cursor &&
            ((s = this.document.find('body')),
            (this.storedCursor = s.css('cursor')),
            s.css('cursor', o.cursor),
            (this.storedStylesheet = e(
              '<style>*{ cursor: ' + o.cursor + ' !important; }</style>'
            ).appendTo(s))),
          o.opacity &&
            (this.helper.css('opacity') &&
              (this._storedOpacity = this.helper.css('opacity')),
            this.helper.css('opacity', o.opacity)),
          o.zIndex &&
            (this.helper.css('zIndex') &&
              (this._storedZIndex = this.helper.css('zIndex')),
            this.helper.css('zIndex', o.zIndex)),
          this.scrollParent[0] !== document &&
            'HTML' !== this.scrollParent[0].tagName &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger('start', t, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !r)
        )
          for (i = this.containers.length - 1; i >= 0; i--)
            this.containers[i]._trigger('activate', t, this._uiHash(this))
        return (
          e.ui.ddmanager && (e.ui.ddmanager.current = this),
          e.ui.ddmanager &&
            !o.dropBehaviour &&
            e.ui.ddmanager.prepareOffsets(this, t),
          (this.dragging = !0),
          this.helper.addClass('ui-sortable-helper'),
          this._mouseDrag(t),
          !0
        )
      },
      _mouseDrag: function (t) {
        var n,
          r,
          i,
          s,
          o = this.options,
          u = !1
        for (
          this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo('absolute'),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll &&
              (this.scrollParent[0] !== document &&
              'HTML' !== this.scrollParent[0].tagName
                ? (this.overflowOffset.top +
                    this.scrollParent[0].offsetHeight -
                    t.pageY <
                  o.scrollSensitivity
                    ? (this.scrollParent[0].scrollTop = u =
                        this.scrollParent[0].scrollTop + o.scrollSpeed)
                    : t.pageY - this.overflowOffset.top < o.scrollSensitivity &&
                      (this.scrollParent[0].scrollTop = u =
                        this.scrollParent[0].scrollTop - o.scrollSpeed),
                  this.overflowOffset.left +
                    this.scrollParent[0].offsetWidth -
                    t.pageX <
                  o.scrollSensitivity
                    ? (this.scrollParent[0].scrollLeft = u =
                        this.scrollParent[0].scrollLeft + o.scrollSpeed)
                    : t.pageX - this.overflowOffset.left <
                        o.scrollSensitivity &&
                      (this.scrollParent[0].scrollLeft = u =
                        this.scrollParent[0].scrollLeft - o.scrollSpeed))
                : (t.pageY - e(document).scrollTop() < o.scrollSensitivity
                    ? (u = e(document).scrollTop(
                        e(document).scrollTop() - o.scrollSpeed
                      ))
                    : e(window).height() - (t.pageY - e(document).scrollTop()) <
                        o.scrollSensitivity &&
                      (u = e(document).scrollTop(
                        e(document).scrollTop() + o.scrollSpeed
                      )),
                  t.pageX - e(document).scrollLeft() < o.scrollSensitivity
                    ? (u = e(document).scrollLeft(
                        e(document).scrollLeft() - o.scrollSpeed
                      ))
                    : e(window).width() - (t.pageX - e(document).scrollLeft()) <
                        o.scrollSensitivity &&
                      (u = e(document).scrollLeft(
                        e(document).scrollLeft() + o.scrollSpeed
                      ))),
              u !== !1 &&
                e.ui.ddmanager &&
                !o.dropBehaviour &&
                e.ui.ddmanager.prepareOffsets(this, t)),
            this.positionAbs = this._convertPositionTo('absolute'),
            (this.options.axis && 'y' === this.options.axis) ||
              (this.helper[0].style.left = this.position.left + 'px'),
            (this.options.axis && 'x' === this.options.axis) ||
              (this.helper[0].style.top = this.position.top + 'px'),
            n = this.items.length - 1;
          n >= 0;
          n--
        )
          if (
            ((r = this.items[n]),
            (i = r.item[0]),
            (s = this._intersectsWithPointer(r)),
            s &&
              r.instance === this.currentContainer &&
              i !== this.currentItem[0] &&
              this.placeholder[1 === s ? 'next' : 'prev']()[0] !== i &&
              !e.contains(this.placeholder[0], i) &&
              ('semi-dynamic' === this.options.type
                ? !e.contains(this.element[0], i)
                : !0))
          ) {
            if (
              ((this.direction = 1 === s ? 'down' : 'up'),
              'pointer' !== this.options.tolerance &&
                !this._intersectsWithSides(r))
            )
              break
            this._rearrange(t, r), this._trigger('change', t, this._uiHash())
            break
          }
        return (
          this._contactContainers(t),
          e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
          this._trigger('sort', t, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        )
      },
      _mouseStop: function (t, n) {
        if (t) {
          if (
            (e.ui.ddmanager &&
              !this.options.dropBehaviour &&
              e.ui.ddmanager.drop(this, t),
            this.options.revert)
          ) {
            var r = this,
              i = this.placeholder.offset(),
              s = this.options.axis,
              o = {}
            ;(s && 'x' !== s) ||
              (o.left =
                i.left -
                this.offset.parent.left -
                this.margins.left +
                (this.offsetParent[0] === document.body
                  ? 0
                  : this.offsetParent[0].scrollLeft)),
              (s && 'y' !== s) ||
                (o.top =
                  i.top -
                  this.offset.parent.top -
                  this.margins.top +
                  (this.offsetParent[0] === document.body
                    ? 0
                    : this.offsetParent[0].scrollTop)),
              (this.reverting = !0),
              e(this.helper).animate(
                o,
                parseInt(this.options.revert, 10) || 500,
                function () {
                  r._clear(t)
                }
              )
          } else this._clear(t, n)
          return !1
        }
      },
      cancel: function () {
        if (this.dragging) {
          this._mouseUp({ target: null }),
            'original' === this.options.helper
              ? this.currentItem
                  .css(this._storedCSS)
                  .removeClass('ui-sortable-helper')
              : this.currentItem.show()
          for (var t = this.containers.length - 1; t >= 0; t--)
            this.containers[t]._trigger('deactivate', null, this._uiHash(this)),
              this.containers[t].containerCache.over &&
                (this.containers[t]._trigger('out', null, this._uiHash(this)),
                (this.containers[t].containerCache.over = 0))
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode &&
              this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            'original' !== this.options.helper &&
              this.helper &&
              this.helper[0].parentNode &&
              this.helper.remove(),
            e.extend(this, {
              helper: null,
              dragging: !1,
              reverting: !1,
              _noFinalSort: null
            }),
            this.domPosition.prev
              ? e(this.domPosition.prev).after(this.currentItem)
              : e(this.domPosition.parent).prepend(this.currentItem)),
          this
        )
      },
      serialize: function (t) {
        var n = this._getItemsAsjQuery(t && t.connected),
          r = []
        return (
          (t = t || {}),
          e(n).each(function () {
            var n = (e(t.item || this).attr(t.attribute || 'id') || '').match(
              t.expression || /(.+)[\-=_](.+)/
            )
            n &&
              r.push(
                (t.key || n[1] + '[]') +
                  '=' +
                  (t.key && t.expression ? n[1] : n[2])
              )
          }),
          !r.length && t.key && r.push(t.key + '='),
          r.join('&')
        )
      },
      toArray: function (t) {
        var n = this._getItemsAsjQuery(t && t.connected),
          r = []
        return (
          (t = t || {}),
          n.each(function () {
            r.push(e(t.item || this).attr(t.attribute || 'id') || '')
          }),
          r
        )
      },
      _intersectsWith: function (e) {
        var t = this.positionAbs.left,
          n = t + this.helperProportions.width,
          r = this.positionAbs.top,
          i = r + this.helperProportions.height,
          s = e.left,
          o = s + e.width,
          u = e.top,
          a = u + e.height,
          f = this.offset.click.top,
          l = this.offset.click.left,
          c = 'x' === this.options.axis || (r + f > u && a > r + f),
          h = 'y' === this.options.axis || (t + l > s && o > t + l),
          p = c && h
        return 'pointer' === this.options.tolerance ||
          this.options.forcePointerForContainers ||
          ('pointer' !== this.options.tolerance &&
            this.helperProportions[this.floating ? 'width' : 'height'] >
              e[this.floating ? 'width' : 'height'])
          ? p
          : t + this.helperProportions.width / 2 > s &&
              o > n - this.helperProportions.width / 2 &&
              r + this.helperProportions.height / 2 > u &&
              a > i - this.helperProportions.height / 2
      },
      _intersectsWithPointer: function (e) {
        var n =
            'x' === this.options.axis ||
            t(this.positionAbs.top + this.offset.click.top, e.top, e.height),
          r =
            'y' === this.options.axis ||
            t(this.positionAbs.left + this.offset.click.left, e.left, e.width),
          i = n && r,
          s = this._getDragVerticalDirection(),
          o = this._getDragHorizontalDirection()
        return i
          ? this.floating
            ? (o && 'right' === o) || 'down' === s
              ? 2
              : 1
            : s && ('down' === s ? 2 : 1)
          : !1
      },
      _intersectsWithSides: function (e) {
        var n = t(
            this.positionAbs.top + this.offset.click.top,
            e.top + e.height / 2,
            e.height
          ),
          r = t(
            this.positionAbs.left + this.offset.click.left,
            e.left + e.width / 2,
            e.width
          ),
          i = this._getDragVerticalDirection(),
          s = this._getDragHorizontalDirection()
        return this.floating && s
          ? ('right' === s && r) || ('left' === s && !r)
          : i && (('down' === i && n) || ('up' === i && !n))
      },
      _getDragVerticalDirection: function () {
        var e = this.positionAbs.top - this.lastPositionAbs.top
        return 0 !== e && (e > 0 ? 'down' : 'up')
      },
      _getDragHorizontalDirection: function () {
        var e = this.positionAbs.left - this.lastPositionAbs.left
        return 0 !== e && (e > 0 ? 'right' : 'left')
      },
      refresh: function (e) {
        return this._refreshItems(e), this.refreshPositions(), this
      },
      _connectWith: function () {
        var e = this.options
        return e.connectWith.constructor === String
          ? [e.connectWith]
          : e.connectWith
      },
      _getItemsAsjQuery: function (t) {
        var n,
          r,
          i,
          s,
          o = [],
          u = [],
          a = this._connectWith()
        if (a && t)
          for (n = a.length - 1; n >= 0; n--)
            for (i = e(a[n]), r = i.length - 1; r >= 0; r--)
              (s = e.data(i[r], this.widgetFullName)),
                s &&
                  s !== this &&
                  !s.options.disabled &&
                  u.push([
                    e.isFunction(s.options.items)
                      ? s.options.items.call(s.element)
                      : e(s.options.items, s.element)
                          .not('.ui-sortable-helper')
                          .not('.ui-sortable-placeholder'),
                    s
                  ])
        for (
          u.push([
            e.isFunction(this.options.items)
              ? this.options.items.call(this.element, null, {
                  options: this.options,
                  item: this.currentItem
                })
              : e(this.options.items, this.element)
                  .not('.ui-sortable-helper')
                  .not('.ui-sortable-placeholder'),
            this
          ]),
            n = u.length - 1;
          n >= 0;
          n--
        )
          u[n][0].each(function () {
            o.push(this)
          })
        return e(o)
      },
      _removeCurrentsFromItems: function () {
        var t = this.currentItem.find(':data(' + this.widgetName + '-item)')
        this.items = e.grep(this.items, function (e) {
          for (var n = 0; t.length > n; n++) if (t[n] === e.item[0]) return !1
          return !0
        })
      },
      _refreshItems: function (t) {
        ;(this.items = []), (this.containers = [this])
        var n,
          r,
          i,
          s,
          o,
          u,
          a,
          f,
          l = this.items,
          c = [
            [
              e.isFunction(this.options.items)
                ? this.options.items.call(this.element[0], t, {
                    item: this.currentItem
                  })
                : e(this.options.items, this.element),
              this
            ]
          ],
          h = this._connectWith()
        if (h && this.ready)
          for (n = h.length - 1; n >= 0; n--)
            for (i = e(h[n]), r = i.length - 1; r >= 0; r--)
              (s = e.data(i[r], this.widgetFullName)),
                s &&
                  s !== this &&
                  !s.options.disabled &&
                  (c.push([
                    e.isFunction(s.options.items)
                      ? s.options.items.call(s.element[0], t, {
                          item: this.currentItem
                        })
                      : e(s.options.items, s.element),
                    s
                  ]),
                  this.containers.push(s))
        for (n = c.length - 1; n >= 0; n--)
          for (o = c[n][1], u = c[n][0], r = 0, f = u.length; f > r; r++)
            (a = e(u[r])),
              a.data(this.widgetName + '-item', o),
              l.push({
                item: a,
                instance: o,
                width: 0,
                height: 0,
                left: 0,
                top: 0
              })
      },
      refreshPositions: function (t) {
        this.offsetParent &&
          this.helper &&
          (this.offset.parent = this._getParentOffset())
        var n, r, i, s
        for (n = this.items.length - 1; n >= 0; n--)
          (r = this.items[n]),
            (r.instance !== this.currentContainer &&
              this.currentContainer &&
              r.item[0] !== this.currentItem[0]) ||
              ((i = this.options.toleranceElement
                ? e(this.options.toleranceElement, r.item)
                : r.item),
              t || ((r.width = i.outerWidth()), (r.height = i.outerHeight())),
              (s = i.offset()),
              (r.left = s.left),
              (r.top = s.top))
        if (this.options.custom && this.options.custom.refreshContainers)
          this.options.custom.refreshContainers.call(this)
        else
          for (n = this.containers.length - 1; n >= 0; n--)
            (s = this.containers[n].element.offset()),
              (this.containers[n].containerCache.left = s.left),
              (this.containers[n].containerCache.top = s.top),
              (this.containers[n].containerCache.width =
                this.containers[n].element.outerWidth()),
              (this.containers[n].containerCache.height =
                this.containers[n].element.outerHeight())
        return this
      },
      _createPlaceholder: function (t) {
        t = t || this
        var n,
          r = t.options
        ;(r.placeholder && r.placeholder.constructor !== String) ||
          ((n = r.placeholder),
          (r.placeholder = {
            element: function () {
              var r = t.currentItem[0].nodeName.toLowerCase(),
                s = e('<' + r + '>', t.document[0])
                  .addClass(
                    n || t.currentItem[0].className + ' ui-sortable-placeholder'
                  )
                  .removeClass('ui-sortable-helper')
              return (
                'tr' === r
                  ? t.currentItem.children().each(function () {
                      e('<td>&#160;</td>', t.document[0])
                        .attr('colspan', e(this).attr('colspan') || 1)
                        .appendTo(s)
                    })
                  : 'img' === r && s.attr('src', t.currentItem.attr('src')),
                n || s.css('visibility', 'hidden'),
                s
              )
            },
            update: function (e, o) {
              ;(!n || r.forcePlaceholderSize) &&
                (o.height() ||
                  o.height(
                    t.currentItem.innerHeight() -
                      parseInt(t.currentItem.css('paddingTop') || 0, 10) -
                      parseInt(t.currentItem.css('paddingBottom') || 0, 10)
                  ),
                o.width() ||
                  o.width(
                    t.currentItem.innerWidth() -
                      parseInt(t.currentItem.css('paddingLeft') || 0, 10) -
                      parseInt(t.currentItem.css('paddingRight') || 0, 10)
                  ))
            }
          })),
          (t.placeholder = e(
            r.placeholder.element.call(t.element, t.currentItem)
          )),
          t.currentItem.after(t.placeholder),
          r.placeholder.update(t, t.placeholder)
      },
      _contactContainers: function (r) {
        var s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d,
          v = null,
          m = null
        for (s = this.containers.length - 1; s >= 0; s--)
          if (!e.contains(this.currentItem[0], this.containers[s].element[0]))
            if (this._intersectsWith(this.containers[s].containerCache)) {
              if (v && e.contains(this.containers[s].element[0], v.element[0]))
                continue
              ;(v = this.containers[s]), (m = s)
            } else
              this.containers[s].containerCache.over &&
                (this.containers[s]._trigger('out', r, this._uiHash(this)),
                (this.containers[s].containerCache.over = 0))
        if (v)
          if (1 === this.containers.length)
            this.containers[m].containerCache.over ||
              (this.containers[m]._trigger('over', r, this._uiHash(this)),
              (this.containers[m].containerCache.over = 1))
          else {
            for (
              u = 1e4,
                a = null,
                d = v.floating || n(this.currentItem),
                f = d ? 'left' : 'top',
                l = d ? 'width' : 'height',
                c = this.positionAbs[f] + this.offset.click[f],
                o = this.items.length - 1;
              o >= 0;
              o--
            )
              e.contains(
                this.containers[m].element[0],
                this.items[o].item[0]
              ) &&
                this.items[o].item[0] !== this.currentItem[0] &&
                (!d ||
                  t(
                    this.positionAbs.top + this.offset.click.top,
                    this.items[o].top,
                    this.items[o].height
                  )) &&
                ((h = this.items[o].item.offset()[f]),
                (p = !1),
                Math.abs(h - c) > Math.abs(h + this.items[o][l] - c) &&
                  ((p = !0), (h += this.items[o][l])),
                u > Math.abs(h - c) &&
                  ((u = Math.abs(h - c)),
                  (a = this.items[o]),
                  (this.direction = p ? 'up' : 'down')))
            if (!a && !this.options.dropOnEmpty) return
            if (this.currentContainer === this.containers[m]) return
            a
              ? this._rearrange(r, a, null, !0)
              : this._rearrange(r, null, this.containers[m].element, !0),
              this._trigger('change', r, this._uiHash()),
              this.containers[m]._trigger('change', r, this._uiHash(this)),
              (this.currentContainer = this.containers[m]),
              this.options.placeholder.update(
                this.currentContainer,
                this.placeholder
              ),
              this.containers[m]._trigger('over', r, this._uiHash(this)),
              (this.containers[m].containerCache.over = 1)
          }
      },
      _createHelper: function (t) {
        var n = this.options,
          r = e.isFunction(n.helper)
            ? e(n.helper.apply(this.element[0], [t, this.currentItem]))
            : 'clone' === n.helper
            ? this.currentItem.clone()
            : this.currentItem
        return (
          r.parents('body').length ||
            e(
              'parent' !== n.appendTo
                ? n.appendTo
                : this.currentItem[0].parentNode
            )[0].appendChild(r[0]),
          r[0] === this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css('position'),
              top: this.currentItem.css('top'),
              left: this.currentItem.css('left')
            }),
          (!r[0].style.width || n.forceHelperSize) &&
            r.width(this.currentItem.width()),
          (!r[0].style.height || n.forceHelperSize) &&
            r.height(this.currentItem.height()),
          r
        )
      },
      _adjustOffsetFromHelper: function (t) {
        'string' == typeof t && (t = t.split(' ')),
          e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
          'left' in t && (this.offset.click.left = t.left + this.margins.left),
          'right' in t &&
            (this.offset.click.left =
              this.helperProportions.width - t.right + this.margins.left),
          'top' in t && (this.offset.click.top = t.top + this.margins.top),
          'bottom' in t &&
            (this.offset.click.top =
              this.helperProportions.height - t.bottom + this.margins.top)
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent()
        var t = this.offsetParent.offset()
        return (
          'absolute' === this.cssPosition &&
            this.scrollParent[0] !== document &&
            e.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((t.left += this.scrollParent.scrollLeft()),
            (t.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] === document.body ||
            (this.offsetParent[0].tagName &&
              'html' === this.offsetParent[0].tagName.toLowerCase() &&
              e.ui.ie)) &&
            (t = { top: 0, left: 0 }),
          {
            top:
              t.top +
              (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
            left:
              t.left +
              (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
          }
        )
      },
      _getRelativeOffset: function () {
        if ('relative' === this.cssPosition) {
          var e = this.currentItem.position()
          return {
            top:
              e.top -
              (parseInt(this.helper.css('top'), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              e.left -
              (parseInt(this.helper.css('left'), 10) || 0) +
              this.scrollParent.scrollLeft()
          }
        }
        return { top: 0, left: 0 }
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.currentItem.css('marginLeft'), 10) || 0,
          top: parseInt(this.currentItem.css('marginTop'), 10) || 0
        }
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight()
        }
      },
      _setContainment: function () {
        var t,
          n,
          r,
          i = this.options
        'parent' === i.containment &&
          (i.containment = this.helper[0].parentNode),
          ('document' === i.containment || 'window' === i.containment) &&
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              e('document' === i.containment ? document : window).width() -
                this.helperProportions.width -
                this.margins.left,
              (e('document' === i.containment ? document : window).height() ||
                document.body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top
            ]),
          /^(document|window|parent)$/.test(i.containment) ||
            ((t = e(i.containment)[0]),
            (n = e(i.containment).offset()),
            (r = 'hidden' !== e(t).css('overflow')),
            (this.containment = [
              n.left +
                (parseInt(e(t).css('borderLeftWidth'), 10) || 0) +
                (parseInt(e(t).css('paddingLeft'), 10) || 0) -
                this.margins.left,
              n.top +
                (parseInt(e(t).css('borderTopWidth'), 10) || 0) +
                (parseInt(e(t).css('paddingTop'), 10) || 0) -
                this.margins.top,
              n.left +
                (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) -
                (parseInt(e(t).css('borderLeftWidth'), 10) || 0) -
                (parseInt(e(t).css('paddingRight'), 10) || 0) -
                this.helperProportions.width -
                this.margins.left,
              n.top +
                (r
                  ? Math.max(t.scrollHeight, t.offsetHeight)
                  : t.offsetHeight) -
                (parseInt(e(t).css('borderTopWidth'), 10) || 0) -
                (parseInt(e(t).css('paddingBottom'), 10) || 0) -
                this.helperProportions.height -
                this.margins.top
            ]))
      },
      _convertPositionTo: function (t, n) {
        n || (n = this.position)
        var r = 'absolute' === t ? 1 : -1,
          i =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              e.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          s = /(html|body)/i.test(i[0].tagName)
        return {
          top:
            n.top +
            this.offset.relative.top * r +
            this.offset.parent.top * r -
            ('fixed' === this.cssPosition
              ? -this.scrollParent.scrollTop()
              : s
              ? 0
              : i.scrollTop()) *
              r,
          left:
            n.left +
            this.offset.relative.left * r +
            this.offset.parent.left * r -
            ('fixed' === this.cssPosition
              ? -this.scrollParent.scrollLeft()
              : s
              ? 0
              : i.scrollLeft()) *
              r
        }
      },
      _generatePosition: function (t) {
        var n,
          r,
          i = this.options,
          s = t.pageX,
          o = t.pageY,
          u =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              e.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          a = /(html|body)/i.test(u[0].tagName)
        return (
          'relative' !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              this.scrollParent[0] !== this.offsetParent[0]) ||
            (this.offset.relative = this._getRelativeOffset()),
          this.originalPosition &&
            (this.containment &&
              (t.pageX - this.offset.click.left < this.containment[0] &&
                (s = this.containment[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < this.containment[1] &&
                (o = this.containment[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > this.containment[2] &&
                (s = this.containment[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > this.containment[3] &&
                (o = this.containment[3] + this.offset.click.top)),
            i.grid &&
              ((n =
                this.originalPageY +
                Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1]),
              (o = this.containment
                ? n - this.offset.click.top >= this.containment[1] &&
                  n - this.offset.click.top <= this.containment[3]
                  ? n
                  : n - this.offset.click.top >= this.containment[1]
                  ? n - i.grid[1]
                  : n + i.grid[1]
                : n),
              (r =
                this.originalPageX +
                Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0]),
              (s = this.containment
                ? r - this.offset.click.left >= this.containment[0] &&
                  r - this.offset.click.left <= this.containment[2]
                  ? r
                  : r - this.offset.click.left >= this.containment[0]
                  ? r - i.grid[0]
                  : r + i.grid[0]
                : r))),
          {
            top:
              o -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : a
                ? 0
                : u.scrollTop()),
            left:
              s -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : a
                ? 0
                : u.scrollLeft())
          }
        )
      },
      _rearrange: function (e, t, n, r) {
        n
          ? n[0].appendChild(this.placeholder[0])
          : t.item[0].parentNode.insertBefore(
              this.placeholder[0],
              'down' === this.direction ? t.item[0] : t.item[0].nextSibling
            ),
          (this.counter = this.counter ? ++this.counter : 1)
        var i = this.counter
        this._delay(function () {
          i === this.counter && this.refreshPositions(!r)
        })
      },
      _clear: function (e, t) {
        this.reverting = !1
        var n,
          r = []
        if (
          (!this._noFinalSort &&
            this.currentItem.parent().length &&
            this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] === this.currentItem[0])
        ) {
          for (n in this._storedCSS)
            ('auto' === this._storedCSS[n] ||
              'static' === this._storedCSS[n]) &&
              (this._storedCSS[n] = '')
          this.currentItem
            .css(this._storedCSS)
            .removeClass('ui-sortable-helper')
        } else this.currentItem.show()
        for (
          this.fromOutside &&
            !t &&
            r.push(function (e) {
              this._trigger('receive', e, this._uiHash(this.fromOutside))
            }),
            (!this.fromOutside &&
              this.domPosition.prev ===
                this.currentItem.prev().not('.ui-sortable-helper')[0] &&
              this.domPosition.parent === this.currentItem.parent()[0]) ||
              t ||
              r.push(function (e) {
                this._trigger('update', e, this._uiHash())
              }),
            this !== this.currentContainer &&
              (t ||
                (r.push(function (e) {
                  this._trigger('remove', e, this._uiHash())
                }),
                r.push(
                  function (e) {
                    return function (t) {
                      e._trigger('receive', t, this._uiHash(this))
                    }
                  }.call(this, this.currentContainer)
                ),
                r.push(
                  function (e) {
                    return function (t) {
                      e._trigger('update', t, this._uiHash(this))
                    }
                  }.call(this, this.currentContainer)
                ))),
            n = this.containers.length - 1;
          n >= 0;
          n--
        )
          t ||
            r.push(
              function (e) {
                return function (t) {
                  e._trigger('deactivate', t, this._uiHash(this))
                }
              }.call(this, this.containers[n])
            ),
            this.containers[n].containerCache.over &&
              (r.push(
                function (e) {
                  return function (t) {
                    e._trigger('out', t, this._uiHash(this))
                  }
                }.call(this, this.containers[n])
              ),
              (this.containers[n].containerCache.over = 0))
        if (
          (this.storedCursor &&
            (this.document.find('body').css('cursor', this.storedCursor),
            this.storedStylesheet.remove()),
          this._storedOpacity &&
            this.helper.css('opacity', this._storedOpacity),
          this._storedZIndex &&
            this.helper.css(
              'zIndex',
              'auto' === this._storedZIndex ? '' : this._storedZIndex
            ),
          (this.dragging = !1),
          this.cancelHelperRemoval)
        ) {
          if (!t) {
            for (
              this._trigger('beforeStop', e, this._uiHash()), n = 0;
              r.length > n;
              n++
            )
              r[n].call(this, e)
            this._trigger('stop', e, this._uiHash())
          }
          return (this.fromOutside = !1), !1
        }
        if (
          (t || this._trigger('beforeStop', e, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.helper[0] !== this.currentItem[0] && this.helper.remove(),
          (this.helper = null),
          !t)
        ) {
          for (n = 0; r.length > n; n++) r[n].call(this, e)
          this._trigger('stop', e, this._uiHash())
        }
        return (this.fromOutside = !1), !0
      },
      _trigger: function () {
        e.Widget.prototype._trigger.apply(this, arguments) === !1 &&
          this.cancel()
      },
      _uiHash: function (t) {
        var n = t || this
        return {
          helper: n.helper,
          placeholder: n.placeholder || e([]),
          position: n.position,
          originalPosition: n.originalPosition,
          offset: n.positionAbs,
          item: n.currentItem,
          sender: t ? t.element : null
        }
      }
    })
  })(jQuery),
  (function (e, t) {
    var n = 'ui-effects-'
    ;(e.effects = { effect: {} }),
      (function (e, t) {
        function n(e, t, n) {
          var r = c[t.type] || {}
          return null == e
            ? n || !t.def
              ? null
              : t.def
            : ((e = r.floor ? ~~e : parseFloat(e)),
              isNaN(e)
                ? t.def
                : r.mod
                ? (e + r.mod) % r.mod
                : 0 > e
                ? 0
                : e > r.max
                ? r.max
                : e)
        }
        function r(n) {
          var r = f(),
            i = (r._rgba = [])
          return (
            (n = n.toLowerCase()),
            d(a, function (e, s) {
              var o,
                u = s.re.exec(n),
                a = u && s.parse(u),
                f = s.space || 'rgba'
              return a
                ? ((o = r[f](a)),
                  (r[l[f].cache] = o[l[f].cache]),
                  (i = r._rgba = o._rgba),
                  !1)
                : t
            }),
            i.length
              ? ('0,0,0,0' === i.join() && e.extend(i, s.transparent), r)
              : s[n]
          )
        }
        function i(e, t, n) {
          return (
            (n = (n + 1) % 1),
            1 > 6 * n
              ? e + 6 * (t - e) * n
              : 1 > 2 * n
              ? t
              : 2 > 3 * n
              ? e + 6 * (t - e) * (2 / 3 - n)
              : e
          )
        }
        var s,
          o =
            'backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor',
          u = /^([\-+])=\s*(\d+\.?\d*)/,
          a = [
            {
              re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (e) {
                return [e[1], e[2], e[3], e[4]]
              }
            },
            {
              re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (e) {
                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
              }
            },
            {
              re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
              parse: function (e) {
                return [
                  parseInt(e[1], 16),
                  parseInt(e[2], 16),
                  parseInt(e[3], 16)
                ]
              }
            },
            {
              re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
              parse: function (e) {
                return [
                  parseInt(e[1] + e[1], 16),
                  parseInt(e[2] + e[2], 16),
                  parseInt(e[3] + e[3], 16)
                ]
              }
            },
            {
              re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              space: 'hsla',
              parse: function (e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
              }
            }
          ],
          f = (e.Color = function (t, n, r, i) {
            return new e.Color.fn.parse(t, n, r, i)
          }),
          l = {
            rgba: {
              props: {
                red: { idx: 0, type: 'byte' },
                green: { idx: 1, type: 'byte' },
                blue: { idx: 2, type: 'byte' }
              }
            },
            hsla: {
              props: {
                hue: { idx: 0, type: 'degrees' },
                saturation: { idx: 1, type: 'percent' },
                lightness: { idx: 2, type: 'percent' }
              }
            }
          },
          c = {
            byte: { floor: !0, max: 255 },
            percent: { max: 1 },
            degrees: { mod: 360, floor: !0 }
          },
          h = (f.support = {}),
          p = e('<p>')[0],
          d = e.each
        ;(p.style.cssText = 'background-color:rgba(1,1,1,.5)'),
          (h.rgba = p.style.backgroundColor.indexOf('rgba') > -1),
          d(l, function (e, t) {
            ;(t.cache = '_' + e),
              (t.props.alpha = { idx: 3, type: 'percent', def: 1 })
          }),
          (f.fn = e.extend(f.prototype, {
            parse: function (i, o, u, a) {
              if (i === t) return (this._rgba = [null, null, null, null]), this
              ;(i.jquery || i.nodeType) && ((i = e(i).css(o)), (o = t))
              var c = this,
                h = e.type(i),
                p = (this._rgba = [])
              return (
                o !== t && ((i = [i, o, u, a]), (h = 'array')),
                'string' === h
                  ? this.parse(r(i) || s._default)
                  : 'array' === h
                  ? (d(l.rgba.props, function (e, t) {
                      p[t.idx] = n(i[t.idx], t)
                    }),
                    this)
                  : 'object' === h
                  ? (i instanceof f
                      ? d(l, function (e, t) {
                          i[t.cache] && (c[t.cache] = i[t.cache].slice())
                        })
                      : d(l, function (t, r) {
                          var s = r.cache
                          d(r.props, function (e, t) {
                            if (!c[s] && r.to) {
                              if ('alpha' === e || null == i[e]) return
                              c[s] = r.to(c._rgba)
                            }
                            c[s][t.idx] = n(i[e], t, !0)
                          }),
                            c[s] &&
                              0 > e.inArray(null, c[s].slice(0, 3)) &&
                              ((c[s][3] = 1),
                              r.from && (c._rgba = r.from(c[s])))
                        }),
                    this)
                  : t
              )
            },
            is: function (e) {
              var n = f(e),
                r = !0,
                i = this
              return (
                d(l, function (e, s) {
                  var o,
                    u = n[s.cache]
                  return (
                    u &&
                      ((o = i[s.cache] || (s.to && s.to(i._rgba)) || []),
                      d(s.props, function (e, n) {
                        return null != u[n.idx]
                          ? (r = u[n.idx] === o[n.idx])
                          : t
                      })),
                    r
                  )
                }),
                r
              )
            },
            _space: function () {
              var e = [],
                t = this
              return (
                d(l, function (n, r) {
                  t[r.cache] && e.push(n)
                }),
                e.pop()
              )
            },
            transition: function (e, t) {
              var r = f(e),
                i = r._space(),
                s = l[i],
                o = 0 === this.alpha() ? f('transparent') : this,
                u = o[s.cache] || s.to(o._rgba),
                a = u.slice()
              return (
                (r = r[s.cache]),
                d(s.props, function (e, i) {
                  var s = i.idx,
                    o = u[s],
                    f = r[s],
                    l = c[i.type] || {}
                  null !== f &&
                    (null === o
                      ? (a[s] = f)
                      : (l.mod &&
                          (f - o > l.mod / 2
                            ? (o += l.mod)
                            : o - f > l.mod / 2 && (o -= l.mod)),
                        (a[s] = n((f - o) * t + o, i))))
                }),
                this[i](a)
              )
            },
            blend: function (t) {
              if (1 === this._rgba[3]) return this
              var n = this._rgba.slice(),
                r = n.pop(),
                i = f(t)._rgba
              return f(
                e.map(n, function (e, t) {
                  return (1 - r) * i[t] + r * e
                })
              )
            },
            toRgbaString: function () {
              var t = 'rgba(',
                n = e.map(this._rgba, function (e, t) {
                  return null == e ? (t > 2 ? 1 : 0) : e
                })
              return 1 === n[3] && (n.pop(), (t = 'rgb(')), t + n.join() + ')'
            },
            toHslaString: function () {
              var t = 'hsla(',
                n = e.map(this.hsla(), function (e, t) {
                  return (
                    null == e && (e = t > 2 ? 1 : 0),
                    t && 3 > t && (e = Math.round(100 * e) + '%'),
                    e
                  )
                })
              return 1 === n[3] && (n.pop(), (t = 'hsl(')), t + n.join() + ')'
            },
            toHexString: function (t) {
              var n = this._rgba.slice(),
                r = n.pop()
              return (
                t && n.push(~~(255 * r)),
                '#' +
                  e
                    .map(n, function (e) {
                      return (
                        (e = (e || 0).toString(16)),
                        1 === e.length ? '0' + e : e
                      )
                    })
                    .join('')
              )
            },
            toString: function () {
              return 0 === this._rgba[3] ? 'transparent' : this.toRgbaString()
            }
          })),
          (f.fn.parse.prototype = f.fn),
          (l.hsla.to = function (e) {
            if (null == e[0] || null == e[1] || null == e[2])
              return [null, null, null, e[3]]
            var t,
              n,
              r = e[0] / 255,
              i = e[1] / 255,
              s = e[2] / 255,
              o = e[3],
              u = Math.max(r, i, s),
              a = Math.min(r, i, s),
              f = u - a,
              l = u + a,
              c = 0.5 * l
            return (
              (t =
                a === u
                  ? 0
                  : r === u
                  ? (60 * (i - s)) / f + 360
                  : i === u
                  ? (60 * (s - r)) / f + 120
                  : (60 * (r - i)) / f + 240),
              (n = 0 === f ? 0 : 0.5 >= c ? f / l : f / (2 - l)),
              [Math.round(t) % 360, n, c, null == o ? 1 : o]
            )
          }),
          (l.hsla.from = function (e) {
            if (null == e[0] || null == e[1] || null == e[2])
              return [null, null, null, e[3]]
            var t = e[0] / 360,
              n = e[1],
              r = e[2],
              s = e[3],
              o = 0.5 >= r ? r * (1 + n) : r + n - r * n,
              u = 2 * r - o
            return [
              Math.round(255 * i(u, o, t + 1 / 3)),
              Math.round(255 * i(u, o, t)),
              Math.round(255 * i(u, o, t - 1 / 3)),
              s
            ]
          }),
          d(l, function (r, i) {
            var s = i.props,
              o = i.cache,
              a = i.to,
              l = i.from
            ;(f.fn[r] = function (r) {
              if ((a && !this[o] && (this[o] = a(this._rgba)), r === t))
                return this[o].slice()
              var i,
                u = e.type(r),
                c = 'array' === u || 'object' === u ? r : arguments,
                h = this[o].slice()
              return (
                d(s, function (e, t) {
                  var r = c['object' === u ? e : t.idx]
                  null == r && (r = h[t.idx]), (h[t.idx] = n(r, t))
                }),
                l ? ((i = f(l(h))), (i[o] = h), i) : f(h)
              )
            }),
              d(s, function (t, n) {
                f.fn[t] ||
                  (f.fn[t] = function (i) {
                    var s,
                      o = e.type(i),
                      a = 'alpha' === t ? (this._hsla ? 'hsla' : 'rgba') : r,
                      f = this[a](),
                      l = f[n.idx]
                    return 'undefined' === o
                      ? l
                      : ('function' === o &&
                          ((i = i.call(this, l)), (o = e.type(i))),
                        null == i && n.empty
                          ? this
                          : ('string' === o &&
                              ((s = u.exec(i)),
                              s &&
                                (i =
                                  l +
                                  parseFloat(s[2]) * ('+' === s[1] ? 1 : -1))),
                            (f[n.idx] = i),
                            this[a](f)))
                  })
              })
          }),
          (f.hook = function (t) {
            var n = t.split(' ')
            d(n, function (t, n) {
              ;(e.cssHooks[n] = {
                set: function (t, i) {
                  var s,
                    o,
                    u = ''
                  if (
                    'transparent' !== i &&
                    ('string' !== e.type(i) || (s = r(i)))
                  ) {
                    if (((i = f(s || i)), !h.rgba && 1 !== i._rgba[3])) {
                      for (
                        o = 'backgroundColor' === n ? t.parentNode : t;
                        ('' === u || 'transparent' === u) && o && o.style;

                      )
                        try {
                          ;(u = e.css(o, 'backgroundColor')), (o = o.parentNode)
                        } catch (a) {}
                      i = i.blend(u && 'transparent' !== u ? u : '_default')
                    }
                    i = i.toRgbaString()
                  }
                  try {
                    t.style[n] = i
                  } catch (a) {}
                }
              }),
                (e.fx.step[n] = function (t) {
                  t.colorInit ||
                    ((t.start = f(t.elem, n)),
                    (t.end = f(t.end)),
                    (t.colorInit = !0)),
                    e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                })
            })
          }),
          f.hook(o),
          (e.cssHooks.borderColor = {
            expand: function (e) {
              var t = {}
              return (
                d(['Top', 'Right', 'Bottom', 'Left'], function (n, r) {
                  t['border' + r + 'Color'] = e
                }),
                t
              )
            }
          }),
          (s = e.Color.names =
            {
              aqua: '#00ffff',
              black: '#000000',
              blue: '#0000ff',
              fuchsia: '#ff00ff',
              gray: '#808080',
              green: '#008000',
              lime: '#00ff00',
              maroon: '#800000',
              navy: '#000080',
              olive: '#808000',
              purple: '#800080',
              red: '#ff0000',
              silver: '#c0c0c0',
              teal: '#008080',
              white: '#ffffff',
              yellow: '#ffff00',
              transparent: [null, null, null, 0],
              _default: '#ffffff'
            })
      })(jQuery),
      (function () {
        function n(t) {
          var n,
            r,
            i = t.ownerDocument.defaultView
              ? t.ownerDocument.defaultView.getComputedStyle(t, null)
              : t.currentStyle,
            s = {}
          if (i && i.length && i[0] && i[i[0]])
            for (r = i.length; r--; )
              (n = i[r]), 'string' == typeof i[n] && (s[e.camelCase(n)] = i[n])
          else for (n in i) 'string' == typeof i[n] && (s[n] = i[n])
          return s
        }
        function r(t, n) {
          var r,
            i,
            u = {}
          for (r in n)
            (i = n[r]),
              t[r] !== i &&
                (s[r] ||
                  ((e.fx.step[r] || !isNaN(parseFloat(i))) && (u[r] = i)))
          return u
        }
        var i = ['add', 'remove', 'toggle'],
          s = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
          }
        e.each(
          [
            'borderLeftStyle',
            'borderRightStyle',
            'borderBottomStyle',
            'borderTopStyle'
          ],
          function (t, n) {
            e.fx.step[n] = function (e) {
              ;(('none' !== e.end && !e.setAttr) ||
                (1 === e.pos && !e.setAttr)) &&
                (jQuery.style(e.elem, n, e.end), (e.setAttr = !0))
            }
          }
        ),
          e.fn.addBack ||
            (e.fn.addBack = function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              )
            }),
          (e.effects.animateClass = function (t, s, o, u) {
            var a = e.speed(s, o, u)
            return this.queue(function () {
              var s,
                o = e(this),
                u = o.attr('class') || '',
                f = a.children ? o.find('*').addBack() : o
              ;(f = f.map(function () {
                var t = e(this)
                return { el: t, start: n(this) }
              })),
                (s = function () {
                  e.each(i, function (e, n) {
                    t[n] && o[n + 'Class'](t[n])
                  })
                }),
                s(),
                (f = f.map(function () {
                  return (
                    (this.end = n(this.el[0])),
                    (this.diff = r(this.start, this.end)),
                    this
                  )
                })),
                o.attr('class', u),
                (f = f.map(function () {
                  var t = this,
                    n = e.Deferred(),
                    r = e.extend({}, a, {
                      queue: !1,
                      complete: function () {
                        n.resolve(t)
                      }
                    })
                  return this.el.animate(this.diff, r), n.promise()
                })),
                e.when.apply(e, f.get()).done(function () {
                  s(),
                    e.each(arguments, function () {
                      var t = this.el
                      e.each(this.diff, function (e) {
                        t.css(e, '')
                      })
                    }),
                    a.complete.call(o[0])
                })
            })
          }),
          e.fn.extend({
            addClass: (function (t) {
              return function (n, r, i, s) {
                return r
                  ? e.effects.animateClass.call(this, { add: n }, r, i, s)
                  : t.apply(this, arguments)
              }
            })(e.fn.addClass),
            removeClass: (function (t) {
              return function (n, r, i, s) {
                return arguments.length > 1
                  ? e.effects.animateClass.call(this, { remove: n }, r, i, s)
                  : t.apply(this, arguments)
              }
            })(e.fn.removeClass),
            toggleClass: (function (n) {
              return function (r, i, s, o, u) {
                return 'boolean' == typeof i || i === t
                  ? s
                    ? e.effects.animateClass.call(
                        this,
                        i ? { add: r } : { remove: r },
                        s,
                        o,
                        u
                      )
                    : n.apply(this, arguments)
                  : e.effects.animateClass.call(this, { toggle: r }, i, s, o)
              }
            })(e.fn.toggleClass),
            switchClass: function (t, n, r, i, s) {
              return e.effects.animateClass.call(
                this,
                { add: n, remove: t },
                r,
                i,
                s
              )
            }
          })
      })(),
      (function () {
        function r(t, n, r, i) {
          return (
            e.isPlainObject(t) && ((n = t), (t = t.effect)),
            (t = { effect: t }),
            null == n && (n = {}),
            e.isFunction(n) && ((i = n), (r = null), (n = {})),
            ('number' == typeof n || e.fx.speeds[n]) &&
              ((i = r), (r = n), (n = {})),
            e.isFunction(r) && ((i = r), (r = null)),
            n && e.extend(t, n),
            (r = r || n.duration),
            (t.duration = e.fx.off
              ? 0
              : 'number' == typeof r
              ? r
              : r in e.fx.speeds
              ? e.fx.speeds[r]
              : e.fx.speeds._default),
            (t.complete = i || n.complete),
            t
          )
        }
        function s(t) {
          return !t || 'number' == typeof t || e.fx.speeds[t]
            ? !0
            : 'string' != typeof t || e.effects.effect[t]
            ? e.isFunction(t)
              ? !0
              : 'object' != typeof t || t.effect
              ? !1
              : !0
            : !0
        }
        e.extend(e.effects, {
          version: '1.10.3',
          save: function (e, t) {
            for (var r = 0; t.length > r; r++)
              null !== t[r] && e.data(n + t[r], e[0].style[t[r]])
          },
          restore: function (e, r) {
            var s, o
            for (o = 0; r.length > o; o++)
              null !== r[o] &&
                ((s = e.data(n + r[o])), s === t && (s = ''), e.css(r[o], s))
          },
          setMode: function (e, t) {
            return 'toggle' === t && (t = e.is(':hidden') ? 'show' : 'hide'), t
          },
          getBaseline: function (e, t) {
            var n, r
            switch (e[0]) {
              case 'top':
                n = 0
                break
              case 'middle':
                n = 0.5
                break
              case 'bottom':
                n = 1
                break
              default:
                n = e[0] / t.height
            }
            switch (e[1]) {
              case 'left':
                r = 0
                break
              case 'center':
                r = 0.5
                break
              case 'right':
                r = 1
                break
              default:
                r = e[1] / t.width
            }
            return { x: r, y: n }
          },
          createWrapper: function (t) {
            if (t.parent().is('.ui-effects-wrapper')) return t.parent()
            var n = {
                width: t.outerWidth(!0),
                height: t.outerHeight(!0),
                float: t.css('float')
              },
              r = e('<div></div>')
                .addClass('ui-effects-wrapper')
                .css({
                  fontSize: '100%',
                  background: 'transparent',
                  border: 'none',
                  margin: 0,
                  padding: 0
                }),
              i = { width: t.width(), height: t.height() },
              s = document.activeElement
            try {
              s.id
            } catch (o) {
              s = document.body
            }
            return (
              t.wrap(r),
              (t[0] === s || e.contains(t[0], s)) && e(s).focus(),
              (r = t.parent()),
              'static' === t.css('position')
                ? (r.css({ position: 'relative' }),
                  t.css({ position: 'relative' }))
                : (e.extend(n, {
                    position: t.css('position'),
                    zIndex: t.css('z-index')
                  }),
                  e.each(['top', 'left', 'bottom', 'right'], function (e, r) {
                    ;(n[r] = t.css(r)),
                      isNaN(parseInt(n[r], 10)) && (n[r] = 'auto')
                  }),
                  t.css({
                    position: 'relative',
                    top: 0,
                    left: 0,
                    right: 'auto',
                    bottom: 'auto'
                  })),
              t.css(i),
              r.css(n).show()
            )
          },
          removeWrapper: function (t) {
            var n = document.activeElement
            return (
              t.parent().is('.ui-effects-wrapper') &&
                (t.parent().replaceWith(t),
                (t[0] === n || e.contains(t[0], n)) && e(n).focus()),
              t
            )
          },
          setTransition: function (t, n, r, i) {
            return (
              (i = i || {}),
              e.each(n, function (e, n) {
                var s = t.cssUnit(n)
                s[0] > 0 && (i[n] = s[0] * r + s[1])
              }),
              i
            )
          }
        }),
          e.fn.extend({
            effect: function () {
              function t(t) {
                function r() {
                  e.isFunction(s) && s.call(i[0]), e.isFunction(t) && t()
                }
                var i = e(this),
                  s = n.complete,
                  u = n.mode
                ;(i.is(':hidden') ? 'hide' === u : 'show' === u)
                  ? (i[u](), r())
                  : o.call(i[0], n, r)
              }
              var n = r.apply(this, arguments),
                i = n.mode,
                s = n.queue,
                o = e.effects.effect[n.effect]
              return e.fx.off || !o
                ? i
                  ? this[i](n.duration, n.complete)
                  : this.each(function () {
                      n.complete && n.complete.call(this)
                    })
                : s === !1
                ? this.each(t)
                : this.queue(s || 'fx', t)
            },
            show: (function (e) {
              return function (t) {
                if (s(t)) return e.apply(this, arguments)
                var n = r.apply(this, arguments)
                return (n.mode = 'show'), this.effect.call(this, n)
              }
            })(e.fn.show),
            hide: (function (e) {
              return function (t) {
                if (s(t)) return e.apply(this, arguments)
                var n = r.apply(this, arguments)
                return (n.mode = 'hide'), this.effect.call(this, n)
              }
            })(e.fn.hide),
            toggle: (function (e) {
              return function (t) {
                if (s(t) || 'boolean' == typeof t)
                  return e.apply(this, arguments)
                var n = r.apply(this, arguments)
                return (n.mode = 'toggle'), this.effect.call(this, n)
              }
            })(e.fn.toggle),
            cssUnit: function (t) {
              var n = this.css(t),
                r = []
              return (
                e.each(['em', 'px', '%', 'pt'], function (e, t) {
                  n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                }),
                r
              )
            }
          })
      })(),
      (function () {
        var t = {}
        e.each(['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'], function (e, n) {
          t[n] = function (t) {
            return Math.pow(t, e + 2)
          }
        }),
          e.extend(t, {
            Sine: function (e) {
              return 1 - Math.cos((e * Math.PI) / 2)
            },
            Circ: function (e) {
              return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function (e) {
              return 0 === e || 1 === e
                ? e
                : -Math.pow(2, 8 * (e - 1)) *
                    Math.sin(((80 * (e - 1) - 7.5) * Math.PI) / 15)
            },
            Back: function (e) {
              return e * e * (3 * e - 2)
            },
            Bounce: function (e) {
              for (var t, n = 4; ((t = Math.pow(2, --n)) - 1) / 11 > e; );
              return (
                1 / Math.pow(4, 3 - n) -
                7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
              )
            }
          }),
          e.each(t, function (t, n) {
            ;(e.easing['easeIn' + t] = n),
              (e.easing['easeOut' + t] = function (e) {
                return 1 - n(1 - e)
              }),
              (e.easing['easeInOut' + t] = function (e) {
                return 0.5 > e ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2
              })
          })
      })()
  })(jQuery),
  (function (e) {
    var t = 0,
      n = {},
      r = {}
    ;(n.height =
      n.paddingTop =
      n.paddingBottom =
      n.borderTopWidth =
      n.borderBottomWidth =
        'hide'),
      (r.height =
        r.paddingTop =
        r.paddingBottom =
        r.borderTopWidth =
        r.borderBottomWidth =
          'show'),
      e.widget('ui.accordion', {
        version: '1.10.3',
        options: {
          active: 0,
          animate: {},
          collapsible: !1,
          event: 'click',
          header: '> li > :first-child,> :not(li):even',
          heightStyle: 'auto',
          icons: {
            activeHeader: 'ui-icon-triangle-1-s',
            header: 'ui-icon-triangle-1-e'
          },
          activate: null,
          beforeActivate: null
        },
        _create: function () {
          var t = this.options
          ;(this.prevShow = this.prevHide = e()),
            this.element
              .addClass('ui-accordion ui-widget ui-helper-reset')
              .attr('role', 'tablist'),
            t.collapsible ||
              (t.active !== !1 && null != t.active) ||
              (t.active = 0),
            this._processPanels(),
            0 > t.active && (t.active += this.headers.length),
            this._refresh()
        },
        _getCreateEventData: function () {
          return {
            header: this.active,
            panel: this.active.length ? this.active.next() : e(),
            content: this.active.length ? this.active.next() : e()
          }
        },
        _createIcons: function () {
          var t = this.options.icons
          t &&
            (e('<span>')
              .addClass('ui-accordion-header-icon ui-icon ' + t.header)
              .prependTo(this.headers),
            this.active
              .children('.ui-accordion-header-icon')
              .removeClass(t.header)
              .addClass(t.activeHeader),
            this.headers.addClass('ui-accordion-icons'))
        },
        _destroyIcons: function () {
          this.headers
            .removeClass('ui-accordion-icons')
            .children('.ui-accordion-header-icon')
            .remove()
        },
        _destroy: function () {
          var e
          this.element
            .removeClass('ui-accordion ui-widget ui-helper-reset')
            .removeAttr('role'),
            this.headers
              .removeClass(
                'ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top'
              )
              .removeAttr('role')
              .removeAttr('aria-selected')
              .removeAttr('aria-controls')
              .removeAttr('tabIndex')
              .each(function () {
                ;/^ui-accordion/.test(this.id) && this.removeAttribute('id')
              }),
            this._destroyIcons(),
            (e = this.headers
              .next()
              .css('display', '')
              .removeAttr('role')
              .removeAttr('aria-expanded')
              .removeAttr('aria-hidden')
              .removeAttr('aria-labelledby')
              .removeClass(
                'ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled'
              )
              .each(function () {
                ;/^ui-accordion/.test(this.id) && this.removeAttribute('id')
              })),
            'content' !== this.options.heightStyle && e.css('height', '')
        },
        _setOption: function (e, t) {
          return 'active' === e
            ? (this._activate(t), undefined)
            : ('event' === e &&
                (this.options.event &&
                  this._off(this.headers, this.options.event),
                this._setupEvents(t)),
              this._super(e, t),
              'collapsible' !== e ||
                t ||
                this.options.active !== !1 ||
                this._activate(0),
              'icons' === e && (this._destroyIcons(), t && this._createIcons()),
              'disabled' === e &&
                this.headers
                  .add(this.headers.next())
                  .toggleClass('ui-state-disabled', !!t),
              undefined)
        },
        _keydown: function (t) {
          if (!t.altKey && !t.ctrlKey) {
            var n = e.ui.keyCode,
              r = this.headers.length,
              i = this.headers.index(t.target),
              s = !1
            switch (t.keyCode) {
              case n.RIGHT:
              case n.DOWN:
                s = this.headers[(i + 1) % r]
                break
              case n.LEFT:
              case n.UP:
                s = this.headers[(i - 1 + r) % r]
                break
              case n.SPACE:
              case n.ENTER:
                this._eventHandler(t)
                break
              case n.HOME:
                s = this.headers[0]
                break
              case n.END:
                s = this.headers[r - 1]
            }
            s &&
              (e(t.target).attr('tabIndex', -1),
              e(s).attr('tabIndex', 0),
              s.focus(),
              t.preventDefault())
          }
        },
        _panelKeyDown: function (t) {
          t.keyCode === e.ui.keyCode.UP &&
            t.ctrlKey &&
            e(t.currentTarget).prev().focus()
        },
        refresh: function () {
          var t = this.options
          this._processPanels(),
            (t.active === !1 && t.collapsible === !0) || !this.headers.length
              ? ((t.active = !1), (this.active = e()))
              : t.active === !1
              ? this._activate(0)
              : this.active.length &&
                !e.contains(this.element[0], this.active[0])
              ? this.headers.length ===
                this.headers.find('.ui-state-disabled').length
                ? ((t.active = !1), (this.active = e()))
                : this._activate(Math.max(0, t.active - 1))
              : (t.active = this.headers.index(this.active)),
            this._destroyIcons(),
            this._refresh()
        },
        _processPanels: function () {
          ;(this.headers = this.element
            .find(this.options.header)
            .addClass(
              'ui-accordion-header ui-helper-reset ui-state-default ui-corner-all'
            )),
            this.headers
              .next()
              .addClass(
                'ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom'
              )
              .filter(':not(.ui-accordion-content-active)')
              .hide()
        },
        _refresh: function () {
          var n,
            r = this.options,
            i = r.heightStyle,
            s = this.element.parent(),
            o = (this.accordionId =
              'ui-accordion-' + (this.element.attr('id') || ++t))
          ;(this.active = this._findActive(r.active)
            .addClass(
              'ui-accordion-header-active ui-state-active ui-corner-top'
            )
            .removeClass('ui-corner-all')),
            this.active.next().addClass('ui-accordion-content-active').show(),
            this.headers
              .attr('role', 'tab')
              .each(function (t) {
                var n = e(this),
                  r = n.attr('id'),
                  i = n.next(),
                  s = i.attr('id')
                r || ((r = o + '-header-' + t), n.attr('id', r)),
                  s || ((s = o + '-panel-' + t), i.attr('id', s)),
                  n.attr('aria-controls', s),
                  i.attr('aria-labelledby', r)
              })
              .next()
              .attr('role', 'tabpanel'),
            this.headers
              .not(this.active)
              .attr({ 'aria-selected': 'false', tabIndex: -1 })
              .next()
              .attr({ 'aria-expanded': 'false', 'aria-hidden': 'true' })
              .hide(),
            this.active.length
              ? this.active
                  .attr({ 'aria-selected': 'true', tabIndex: 0 })
                  .next()
                  .attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' })
              : this.headers.eq(0).attr('tabIndex', 0),
            this._createIcons(),
            this._setupEvents(r.event),
            'fill' === i
              ? ((n = s.height()),
                this.element.siblings(':visible').each(function () {
                  var t = e(this),
                    r = t.css('position')
                  'absolute' !== r && 'fixed' !== r && (n -= t.outerHeight(!0))
                }),
                this.headers.each(function () {
                  n -= e(this).outerHeight(!0)
                }),
                this.headers
                  .next()
                  .each(function () {
                    e(this).height(
                      Math.max(0, n - e(this).innerHeight() + e(this).height())
                    )
                  })
                  .css('overflow', 'auto'))
              : 'auto' === i &&
                ((n = 0),
                this.headers
                  .next()
                  .each(function () {
                    n = Math.max(n, e(this).css('height', '').height())
                  })
                  .height(n))
        },
        _activate: function (t) {
          var n = this._findActive(t)[0]
          n !== this.active[0] &&
            ((n = n || this.active[0]),
            this._eventHandler({
              target: n,
              currentTarget: n,
              preventDefault: e.noop
            }))
        },
        _findActive: function (t) {
          return 'number' == typeof t ? this.headers.eq(t) : e()
        },
        _setupEvents: function (t) {
          var n = { keydown: '_keydown' }
          t &&
            e.each(t.split(' '), function (e, t) {
              n[t] = '_eventHandler'
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, n),
            this._on(this.headers.next(), { keydown: '_panelKeyDown' }),
            this._hoverable(this.headers),
            this._focusable(this.headers)
        },
        _eventHandler: function (t) {
          var n = this.options,
            r = this.active,
            i = e(t.currentTarget),
            s = i[0] === r[0],
            o = s && n.collapsible,
            u = o ? e() : i.next(),
            a = r.next(),
            f = {
              oldHeader: r,
              oldPanel: a,
              newHeader: o ? e() : i,
              newPanel: u
            }
          t.preventDefault(),
            (s && !n.collapsible) ||
              this._trigger('beforeActivate', t, f) === !1 ||
              ((n.active = o ? !1 : this.headers.index(i)),
              (this.active = s ? e() : i),
              this._toggle(f),
              r.removeClass('ui-accordion-header-active ui-state-active'),
              n.icons &&
                r
                  .children('.ui-accordion-header-icon')
                  .removeClass(n.icons.activeHeader)
                  .addClass(n.icons.header),
              s ||
                (i
                  .removeClass('ui-corner-all')
                  .addClass(
                    'ui-accordion-header-active ui-state-active ui-corner-top'
                  ),
                n.icons &&
                  i
                    .children('.ui-accordion-header-icon')
                    .removeClass(n.icons.header)
                    .addClass(n.icons.activeHeader),
                i.next().addClass('ui-accordion-content-active')))
        },
        _toggle: function (t) {
          var n = t.newPanel,
            r = this.prevShow.length ? this.prevShow : t.oldPanel
          this.prevShow.add(this.prevHide).stop(!0, !0),
            (this.prevShow = n),
            (this.prevHide = r),
            this.options.animate
              ? this._animate(n, r, t)
              : (r.hide(), n.show(), this._toggleComplete(t)),
            r.attr({ 'aria-expanded': 'false', 'aria-hidden': 'true' }),
            r.prev().attr('aria-selected', 'false'),
            n.length && r.length
              ? r.prev().attr('tabIndex', -1)
              : n.length &&
                this.headers
                  .filter(function () {
                    return 0 === e(this).attr('tabIndex')
                  })
                  .attr('tabIndex', -1),
            n
              .attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' })
              .prev()
              .attr({ 'aria-selected': 'true', tabIndex: 0 })
        },
        _animate: function (e, t, o) {
          var u,
            a,
            f,
            l = this,
            c = 0,
            h = e.length && (!t.length || e.index() < t.index()),
            p = this.options.animate || {},
            d = (h && p.down) || p,
            v = function () {
              l._toggleComplete(o)
            }
          return (
            'number' == typeof d && (f = d),
            'string' == typeof d && (a = d),
            (a = a || d.easing || p.easing),
            (f = f || d.duration || p.duration),
            t.length
              ? e.length
                ? ((u = e.show().outerHeight()),
                  t.animate(n, {
                    duration: f,
                    easing: a,
                    step: function (e, t) {
                      t.now = Math.round(e)
                    }
                  }),
                  e.hide().animate(r, {
                    duration: f,
                    easing: a,
                    complete: v,
                    step: function (e, n) {
                      ;(n.now = Math.round(e)),
                        'height' !== n.prop
                          ? (c += n.now)
                          : 'content' !== l.options.heightStyle &&
                            ((n.now = Math.round(u - t.outerHeight() - c)),
                            (c = 0))
                    }
                  }),
                  undefined)
                : t.animate(n, f, a, v)
              : e.animate(r, f, a, v)
          )
        },
        _toggleComplete: function (e) {
          var t = e.oldPanel
          t
            .removeClass('ui-accordion-content-active')
            .prev()
            .removeClass('ui-corner-top')
            .addClass('ui-corner-all'),
            t.length && (t.parent()[0].className = t.parent()[0].className),
            this._trigger('activate', null, e)
        }
      })
  })(jQuery),
  (function (e) {
    var t = 0
    e.widget('ui.autocomplete', {
      version: '1.10.3',
      defaultElement: '<input>',
      options: {
        appendTo: null,
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: { my: 'left top', at: 'left bottom', collision: 'none' },
        source: null,
        change: null,
        close: null,
        focus: null,
        open: null,
        response: null,
        search: null,
        select: null
      },
      pending: 0,
      _create: function () {
        var t,
          n,
          r,
          i = this.element[0].nodeName.toLowerCase(),
          s = 'textarea' === i,
          o = 'input' === i
        ;(this.isMultiLine = s
          ? !0
          : o
          ? !1
          : this.element.prop('isContentEditable')),
          (this.valueMethod = this.element[s || o ? 'val' : 'text']),
          (this.isNewMenu = !0),
          this.element
            .addClass('ui-autocomplete-input')
            .attr('autocomplete', 'off'),
          this._on(this.element, {
            keydown: function (i) {
              if (this.element.prop('readOnly'))
                return (t = !0), (r = !0), (n = !0), undefined
              ;(t = !1), (r = !1), (n = !1)
              var s = e.ui.keyCode
              switch (i.keyCode) {
                case s.PAGE_UP:
                  ;(t = !0), this._move('previousPage', i)
                  break
                case s.PAGE_DOWN:
                  ;(t = !0), this._move('nextPage', i)
                  break
                case s.UP:
                  ;(t = !0), this._keyEvent('previous', i)
                  break
                case s.DOWN:
                  ;(t = !0), this._keyEvent('next', i)
                  break
                case s.ENTER:
                case s.NUMPAD_ENTER:
                  this.menu.active &&
                    ((t = !0), i.preventDefault(), this.menu.select(i))
                  break
                case s.TAB:
                  this.menu.active && this.menu.select(i)
                  break
                case s.ESCAPE:
                  this.menu.element.is(':visible') &&
                    (this._value(this.term), this.close(i), i.preventDefault())
                  break
                default:
                  ;(n = !0), this._searchTimeout(i)
              }
            },
            keypress: function (r) {
              if (t)
                return (
                  (t = !1),
                  (!this.isMultiLine || this.menu.element.is(':visible')) &&
                    r.preventDefault(),
                  undefined
                )
              if (!n) {
                var i = e.ui.keyCode
                switch (r.keyCode) {
                  case i.PAGE_UP:
                    this._move('previousPage', r)
                    break
                  case i.PAGE_DOWN:
                    this._move('nextPage', r)
                    break
                  case i.UP:
                    this._keyEvent('previous', r)
                    break
                  case i.DOWN:
                    this._keyEvent('next', r)
                }
              }
            },
            input: function (e) {
              return r
                ? ((r = !1), e.preventDefault(), undefined)
                : (this._searchTimeout(e), undefined)
            },
            focus: function () {
              ;(this.selectedItem = null), (this.previous = this._value())
            },
            blur: function (e) {
              return this.cancelBlur
                ? (delete this.cancelBlur, undefined)
                : (clearTimeout(this.searching),
                  this.close(e),
                  this._change(e),
                  undefined)
            }
          }),
          this._initSource(),
          (this.menu = e('<ul>')
            .addClass('ui-autocomplete ui-front')
            .appendTo(this._appendTo())
            .menu({ role: null })
            .hide()
            .data('ui-menu')),
          this._on(this.menu.element, {
            mousedown: function (t) {
              t.preventDefault(),
                (this.cancelBlur = !0),
                this._delay(function () {
                  delete this.cancelBlur
                })
              var n = this.menu.element[0]
              e(t.target).closest('.ui-menu-item').length ||
                this._delay(function () {
                  var t = this
                  this.document.one('mousedown', function (r) {
                    r.target === t.element[0] ||
                      r.target === n ||
                      e.contains(n, r.target) ||
                      t.close()
                  })
                })
            },
            menufocus: function (t, n) {
              if (
                this.isNewMenu &&
                ((this.isNewMenu = !1),
                t.originalEvent && /^mouse/.test(t.originalEvent.type))
              )
                return (
                  this.menu.blur(),
                  this.document.one('mousemove', function () {
                    e(t.target).trigger(t.originalEvent)
                  }),
                  undefined
                )
              var r = n.item.data('ui-autocomplete-item')
              !1 !== this._trigger('focus', t, { item: r })
                ? t.originalEvent &&
                  /^key/.test(t.originalEvent.type) &&
                  this._value(r.value)
                : this.liveRegion.text(r.value)
            },
            menuselect: function (e, t) {
              var n = t.item.data('ui-autocomplete-item'),
                r = this.previous
              this.element[0] !== this.document[0].activeElement &&
                (this.element.focus(),
                (this.previous = r),
                this._delay(function () {
                  ;(this.previous = r), (this.selectedItem = n)
                })),
                !1 !== this._trigger('select', e, { item: n }) &&
                  this._value(n.value),
                (this.term = this._value()),
                this.close(e),
                (this.selectedItem = n)
            }
          }),
          (this.liveRegion = e('<span>', {
            role: 'status',
            'aria-live': 'polite'
          })
            .addClass('ui-helper-hidden-accessible')
            .insertBefore(this.element)),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr('autocomplete')
            }
          })
      },
      _destroy: function () {
        clearTimeout(this.searching),
          this.element
            .removeClass('ui-autocomplete-input')
            .removeAttr('autocomplete'),
          this.menu.element.remove(),
          this.liveRegion.remove()
      },
      _setOption: function (e, t) {
        this._super(e, t),
          'source' === e && this._initSource(),
          'appendTo' === e && this.menu.element.appendTo(this._appendTo()),
          'disabled' === e && t && this.xhr && this.xhr.abort()
      },
      _appendTo: function () {
        var t = this.options.appendTo
        return (
          t &&
            (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)),
          t || (t = this.element.closest('.ui-front')),
          t.length || (t = this.document[0].body),
          t
        )
      },
      _initSource: function () {
        var t,
          n,
          r = this
        e.isArray(this.options.source)
          ? ((t = this.options.source),
            (this.source = function (n, r) {
              r(e.ui.autocomplete.filter(t, n.term))
            }))
          : 'string' == typeof this.options.source
          ? ((n = this.options.source),
            (this.source = function (t, o) {
              r.xhr && r.xhr.abort(),
                (r.xhr = e.ajax({
                  url: n,
                  data: t,
                  dataType: 'json',
                  success: function (e) {
                    o(e)
                  },
                  error: function () {
                    o([])
                  }
                }))
            }))
          : (this.source = this.options.source)
      },
      _searchTimeout: function (e) {
        clearTimeout(this.searching),
          (this.searching = this._delay(function () {
            this.term !== this._value() &&
              ((this.selectedItem = null), this.search(null, e))
          }, this.options.delay))
      },
      search: function (e, t) {
        return (
          (e = null != e ? e : this._value()),
          (this.term = this._value()),
          e.length < this.options.minLength
            ? this.close(t)
            : this._trigger('search', t) !== !1
            ? this._search(e)
            : undefined
        )
      },
      _search: function (e) {
        this.pending++,
          this.element.addClass('ui-autocomplete-loading'),
          (this.cancelSearch = !1),
          this.source({ term: e }, this._response())
      },
      _response: function () {
        var e = this,
          n = ++t
        return function (r) {
          n === t && e.__response(r),
            e.pending--,
            e.pending || e.element.removeClass('ui-autocomplete-loading')
        }
      },
      __response: function (e) {
        e && (e = this._normalize(e)),
          this._trigger('response', null, { content: e }),
          !this.options.disabled && e && e.length && !this.cancelSearch
            ? (this._suggest(e), this._trigger('open'))
            : this._close()
      },
      close: function (e) {
        ;(this.cancelSearch = !0), this._close(e)
      },
      _close: function (e) {
        this.menu.element.is(':visible') &&
          (this.menu.element.hide(),
          this.menu.blur(),
          (this.isNewMenu = !0),
          this._trigger('close', e))
      },
      _change: function (e) {
        this.previous !== this._value() &&
          this._trigger('change', e, { item: this.selectedItem })
      },
      _normalize: function (t) {
        return t.length && t[0].label && t[0].value
          ? t
          : e.map(t, function (t) {
              return 'string' == typeof t
                ? { label: t, value: t }
                : e.extend(
                    { label: t.label || t.value, value: t.value || t.label },
                    t
                  )
            })
      },
      _suggest: function (t) {
        var n = this.menu.element.empty()
        this._renderMenu(n, t),
          (this.isNewMenu = !0),
          this.menu.refresh(),
          n.show(),
          this._resizeMenu(),
          n.position(e.extend({ of: this.element }, this.options.position)),
          this.options.autoFocus && this.menu.next()
      },
      _resizeMenu: function () {
        var e = this.menu.element
        e.outerWidth(
          Math.max(e.width('').outerWidth() + 1, this.element.outerWidth())
        )
      },
      _renderMenu: function (t, n) {
        var r = this
        e.each(n, function (e, n) {
          r._renderItemData(t, n)
        })
      },
      _renderItemData: function (e, t) {
        return this._renderItem(e, t).data('ui-autocomplete-item', t)
      },
      _renderItem: function (t, n) {
        return e('<li>').append(e('<a>').text(n.label)).appendTo(t)
      },
      _move: function (e, t) {
        return this.menu.element.is(':visible')
          ? (this.menu.isFirstItem() && /^previous/.test(e)) ||
            (this.menu.isLastItem() && /^next/.test(e))
            ? (this._value(this.term), this.menu.blur(), undefined)
            : (this.menu[e](t), undefined)
          : (this.search(null, t), undefined)
      },
      widget: function () {
        return this.menu.element
      },
      _value: function () {
        return this.valueMethod.apply(this.element, arguments)
      },
      _keyEvent: function (e, t) {
        ;(!this.isMultiLine || this.menu.element.is(':visible')) &&
          (this._move(e, t), t.preventDefault())
      }
    }),
      e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
          return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
        },
        filter: function (t, n) {
          var r = RegExp(e.ui.autocomplete.escapeRegex(n), 'i')
          return e.grep(t, function (e) {
            return r.test(e.label || e.value || e)
          })
        }
      }),
      e.widget('ui.autocomplete', e.ui.autocomplete, {
        options: {
          messages: {
            noResults: 'No search results.',
            results: function (e) {
              return (
                e +
                (e > 1 ? ' results are' : ' result is') +
                ' available, use up and down arrow keys to navigate.'
              )
            }
          }
        },
        __response: function (e) {
          var t
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((t =
                e && e.length
                  ? this.options.messages.results(e.length)
                  : this.options.messages.noResults),
              this.liveRegion.text(t))
        }
      })
  })(jQuery),
  (function (e) {
    var t,
      n,
      r,
      i,
      s = 'ui-button ui-widget ui-state-default ui-corner-all',
      o = 'ui-state-hover ui-state-active ',
      u =
        'ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only',
      a = function () {
        var t = e(this)
        setTimeout(function () {
          t.find(':ui-button').button('refresh')
        }, 1)
      },
      f = function (t) {
        var n = t.name,
          r = t.form,
          i = e([])
        return (
          n &&
            ((n = n.replace(/'/g, "\\'")),
            (i = r
              ? e(r).find("[name='" + n + "']")
              : e("[name='" + n + "']", t.ownerDocument).filter(function () {
                  return !this.form
                }))),
          i
        )
      }
    e.widget('ui.button', {
      version: '1.10.3',
      defaultElement: '<button>',
      options: {
        disabled: null,
        text: !0,
        label: null,
        icons: { primary: null, secondary: null }
      },
      _create: function () {
        this.element
          .closest('form')
          .unbind('reset' + this.eventNamespace)
          .bind('reset' + this.eventNamespace, a),
          'boolean' != typeof this.options.disabled
            ? (this.options.disabled = !!this.element.prop('disabled'))
            : this.element.prop('disabled', this.options.disabled),
          this._determineButtonType(),
          (this.hasTitle = !!this.buttonElement.attr('title'))
        var o = this,
          u = this.options,
          c = 'checkbox' === this.type || 'radio' === this.type,
          p = c ? '' : 'ui-state-active',
          d = 'ui-state-focus'
        null === u.label &&
          (u.label =
            'input' === this.type
              ? this.buttonElement.val()
              : this.buttonElement.html()),
          this._hoverable(this.buttonElement),
          this.buttonElement
            .addClass(s)
            .attr('role', 'button')
            .bind('mouseenter' + this.eventNamespace, function () {
              u.disabled || (this === t && e(this).addClass('ui-state-active'))
            })
            .bind('mouseleave' + this.eventNamespace, function () {
              u.disabled || e(this).removeClass(p)
            })
            .bind('click' + this.eventNamespace, function (e) {
              u.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }),
          this.element
            .bind('focus' + this.eventNamespace, function () {
              o.buttonElement.addClass(d)
            })
            .bind('blur' + this.eventNamespace, function () {
              o.buttonElement.removeClass(d)
            }),
          c &&
            (this.element.bind('change' + this.eventNamespace, function () {
              i || o.refresh()
            }),
            this.buttonElement
              .bind('mousedown' + this.eventNamespace, function (e) {
                u.disabled || ((i = !1), (n = e.pageX), (r = e.pageY))
              })
              .bind('mouseup' + this.eventNamespace, function (e) {
                u.disabled || ((n !== e.pageX || r !== e.pageY) && (i = !0))
              })),
          'checkbox' === this.type
            ? this.buttonElement.bind(
                'click' + this.eventNamespace,
                function () {
                  return u.disabled || i ? !1 : undefined
                }
              )
            : 'radio' === this.type
            ? this.buttonElement.bind(
                'click' + this.eventNamespace,
                function () {
                  if (u.disabled || i) return !1
                  e(this).addClass('ui-state-active'),
                    o.buttonElement.attr('aria-pressed', 'true')
                  var t = o.element[0]
                  f(t)
                    .not(t)
                    .map(function () {
                      return e(this).button('widget')[0]
                    })
                    .removeClass('ui-state-active')
                    .attr('aria-pressed', 'false')
                }
              )
            : (this.buttonElement
                .bind('mousedown' + this.eventNamespace, function () {
                  return u.disabled
                    ? !1
                    : (e(this).addClass('ui-state-active'),
                      (t = this),
                      o.document.one('mouseup', function () {
                        t = null
                      }),
                      undefined)
                })
                .bind('mouseup' + this.eventNamespace, function () {
                  return u.disabled
                    ? !1
                    : (e(this).removeClass('ui-state-active'), undefined)
                })
                .bind('keydown' + this.eventNamespace, function (t) {
                  return u.disabled
                    ? !1
                    : ((t.keyCode === e.ui.keyCode.SPACE ||
                        t.keyCode === e.ui.keyCode.ENTER) &&
                        e(this).addClass('ui-state-active'),
                      undefined)
                })
                .bind(
                  'keyup' + this.eventNamespace + ' blur' + this.eventNamespace,
                  function () {
                    e(this).removeClass('ui-state-active')
                  }
                ),
              this.buttonElement.is('a') &&
                this.buttonElement.keyup(function (t) {
                  t.keyCode === e.ui.keyCode.SPACE && e(this).click()
                })),
          this._setOption('disabled', u.disabled),
          this._resetButton()
      },
      _determineButtonType: function () {
        var e, t, n
        ;(this.type = this.element.is('[type=checkbox]')
          ? 'checkbox'
          : this.element.is('[type=radio]')
          ? 'radio'
          : this.element.is('input')
          ? 'input'
          : 'button'),
          'checkbox' === this.type || 'radio' === this.type
            ? ((e = this.element.parents().last()),
              (t = "label[for='" + this.element.attr('id') + "']"),
              (this.buttonElement = e.find(t)),
              this.buttonElement.length ||
                ((e = e.length ? e.siblings() : this.element.siblings()),
                (this.buttonElement = e.filter(t)),
                this.buttonElement.length || (this.buttonElement = e.find(t))),
              this.element.addClass('ui-helper-hidden-accessible'),
              (n = this.element.is(':checked')),
              n && this.buttonElement.addClass('ui-state-active'),
              this.buttonElement.prop('aria-pressed', n))
            : (this.buttonElement = this.element)
      },
      widget: function () {
        return this.buttonElement
      },
      _destroy: function () {
        this.element.removeClass('ui-helper-hidden-accessible'),
          this.buttonElement
            .removeClass(s + ' ' + o + ' ' + u)
            .removeAttr('role')
            .removeAttr('aria-pressed')
            .html(this.buttonElement.find('.ui-button-text').html()),
          this.hasTitle || this.buttonElement.removeAttr('title')
      },
      _setOption: function (e, t) {
        return (
          this._super(e, t),
          'disabled' === e
            ? (t
                ? this.element.prop('disabled', !0)
                : this.element.prop('disabled', !1),
              undefined)
            : (this._resetButton(), undefined)
        )
      },
      refresh: function () {
        var t = this.element.is('input, button')
          ? this.element.is(':disabled')
          : this.element.hasClass('ui-button-disabled')
        t !== this.options.disabled && this._setOption('disabled', t),
          'radio' === this.type
            ? f(this.element[0]).each(function () {
                e(this).is(':checked')
                  ? e(this)
                      .button('widget')
                      .addClass('ui-state-active')
                      .attr('aria-pressed', 'true')
                  : e(this)
                      .button('widget')
                      .removeClass('ui-state-active')
                      .attr('aria-pressed', 'false')
              })
            : 'checkbox' === this.type &&
              (this.element.is(':checked')
                ? this.buttonElement
                    .addClass('ui-state-active')
                    .attr('aria-pressed', 'true')
                : this.buttonElement
                    .removeClass('ui-state-active')
                    .attr('aria-pressed', 'false'))
      },
      _resetButton: function () {
        if ('input' === this.type)
          return (
            this.options.label && this.element.val(this.options.label),
            undefined
          )
        var t = this.buttonElement.removeClass(u),
          n = e('<span></span>', this.document[0])
            .addClass('ui-button-text')
            .html(this.options.label)
            .appendTo(t.empty())
            .text(),
          r = this.options.icons,
          i = r.primary && r.secondary,
          s = []
        r.primary || r.secondary
          ? (this.options.text &&
              s.push(
                'ui-button-text-icon' +
                  (i ? 's' : r.primary ? '-primary' : '-secondary')
              ),
            r.primary &&
              t.prepend(
                "<span class='ui-button-icon-primary ui-icon " +
                  r.primary +
                  "'></span>"
              ),
            r.secondary &&
              t.append(
                "<span class='ui-button-icon-secondary ui-icon " +
                  r.secondary +
                  "'></span>"
              ),
            this.options.text ||
              (s.push(i ? 'ui-button-icons-only' : 'ui-button-icon-only'),
              this.hasTitle || t.attr('title', e.trim(n))))
          : s.push('ui-button-text-only'),
          t.addClass(s.join(' '))
      }
    }),
      e.widget('ui.buttonset', {
        version: '1.10.3',
        options: {
          items:
            'button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)'
        },
        _create: function () {
          this.element.addClass('ui-buttonset')
        },
        _init: function () {
          this.refresh()
        },
        _setOption: function (e, t) {
          'disabled' === e && this.buttons.button('option', e, t),
            this._super(e, t)
        },
        refresh: function () {
          var t = 'rtl' === this.element.css('direction')
          this.buttons = this.element
            .find(this.options.items)
            .filter(':ui-button')
            .button('refresh')
            .end()
            .not(':ui-button')
            .button()
            .end()
            .map(function () {
              return e(this).button('widget')[0]
            })
            .removeClass('ui-corner-all ui-corner-left ui-corner-right')
            .filter(':first')
            .addClass(t ? 'ui-corner-right' : 'ui-corner-left')
            .end()
            .filter(':last')
            .addClass(t ? 'ui-corner-left' : 'ui-corner-right')
            .end()
            .end()
        },
        _destroy: function () {
          this.element.removeClass('ui-buttonset'),
            this.buttons
              .map(function () {
                return e(this).button('widget')[0]
              })
              .removeClass('ui-corner-left ui-corner-right')
              .end()
              .button('destroy')
        }
      })
  })(jQuery),
  (function (e, t) {
    function n() {
      ;(this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = 'ui-datepicker-div'),
        (this._inlineClass = 'ui-datepicker-inline'),
        (this._appendClass = 'ui-datepicker-append'),
        (this._triggerClass = 'ui-datepicker-trigger'),
        (this._dialogClass = 'ui-datepicker-dialog'),
        (this._disableClass = 'ui-datepicker-disabled'),
        (this._unselectableClass = 'ui-datepicker-unselectable'),
        (this._currentClass = 'ui-datepicker-current-day'),
        (this._dayOverClass = 'ui-datepicker-days-cell-over'),
        (this.regional = []),
        (this.regional[''] = {
          closeText: 'Done',
          prevText: 'Prev',
          nextText: 'Next',
          currentText: 'Today',
          monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
          monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          dayNames: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          weekHeader: 'Wk',
          dateFormat: 'mm/dd/yy',
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: ''
        }),
        (this._defaults = {
          showOn: 'focus',
          showAnim: 'fadeIn',
          showOptions: {},
          defaultDate: null,
          appendText: '',
          buttonText: '...',
          buttonImage: '',
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: 'c-10:c+10',
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: '+10',
          minDate: null,
          maxDate: null,
          duration: 'fast',
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: '',
          altFormat: '',
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1
        }),
        e.extend(this._defaults, this.regional['']),
        (this.dpDiv = r(
          e(
            "<div id='" +
              this._mainDivId +
              "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
          )
        ))
    }
    function r(t) {
      var n =
        'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a'
      return t
        .delegate(n, 'mouseout', function () {
          e(this).removeClass('ui-state-hover'),
            -1 !== this.className.indexOf('ui-datepicker-prev') &&
              e(this).removeClass('ui-datepicker-prev-hover'),
            -1 !== this.className.indexOf('ui-datepicker-next') &&
              e(this).removeClass('ui-datepicker-next-hover')
        })
        .delegate(n, 'mouseover', function () {
          e.datepicker._isDisabledDatepicker(
            s.inline ? t.parent()[0] : s.input[0]
          ) ||
            (e(this)
              .parents('.ui-datepicker-calendar')
              .find('a')
              .removeClass('ui-state-hover'),
            e(this).addClass('ui-state-hover'),
            -1 !== this.className.indexOf('ui-datepicker-prev') &&
              e(this).addClass('ui-datepicker-prev-hover'),
            -1 !== this.className.indexOf('ui-datepicker-next') &&
              e(this).addClass('ui-datepicker-next-hover'))
        })
    }
    function i(t, n) {
      e.extend(t, n)
      for (var r in n) null == n[r] && (t[r] = n[r])
      return t
    }
    e.extend(e.ui, { datepicker: { version: '1.10.3' } })
    var s,
      o = 'datepicker'
    e.extend(n.prototype, {
      markerClassName: 'hasDatepicker',
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv
      },
      setDefaults: function (e) {
        return i(this._defaults, e || {}), this
      },
      _attachDatepicker: function (t, n) {
        var r, i, s
        ;(r = t.nodeName.toLowerCase()),
          (i = 'div' === r || 'span' === r),
          t.id || ((this.uuid += 1), (t.id = 'dp' + this.uuid)),
          (s = this._newInst(e(t), i)),
          (s.settings = e.extend({}, n || {})),
          'input' === r
            ? this._connectDatepicker(t, s)
            : i && this._inlineDatepicker(t, s)
      },
      _newInst: function (t, n) {
        var i = t[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1')
        return {
          id: i,
          input: t,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: n,
          dpDiv: n
            ? r(
                e(
                  "<div class='" +
                    this._inlineClass +
                    " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                )
              )
            : this.dpDiv
        }
      },
      _connectDatepicker: function (t, n) {
        var r = e(t)
        ;(n.append = e([])),
          (n.trigger = e([])),
          r.hasClass(this.markerClassName) ||
            (this._attachments(r, n),
            r
              .addClass(this.markerClassName)
              .keydown(this._doKeyDown)
              .keypress(this._doKeyPress)
              .keyup(this._doKeyUp),
            this._autoSize(n),
            e.data(t, o, n),
            n.settings.disabled && this._disableDatepicker(t))
      },
      _attachments: function (t, n) {
        var r,
          i,
          s,
          o = this._get(n, 'appendText'),
          u = this._get(n, 'isRTL')
        n.append && n.append.remove(),
          o &&
            ((n.append = e(
              "<span class='" + this._appendClass + "'>" + o + '</span>'
            )),
            t[u ? 'before' : 'after'](n.append)),
          t.unbind('focus', this._showDatepicker),
          n.trigger && n.trigger.remove(),
          (r = this._get(n, 'showOn')),
          ('focus' === r || 'both' === r) && t.focus(this._showDatepicker),
          ('button' === r || 'both' === r) &&
            ((i = this._get(n, 'buttonText')),
            (s = this._get(n, 'buttonImage')),
            (n.trigger = e(
              this._get(n, 'buttonImageOnly')
                ? e('<img/>')
                    .addClass(this._triggerClass)
                    .attr({ src: s, alt: i, title: i })
                : e("<button type='button'></button>")
                    .addClass(this._triggerClass)
                    .html(
                      s ? e('<img/>').attr({ src: s, alt: i, title: i }) : i
                    )
            )),
            t[u ? 'before' : 'after'](n.trigger),
            n.trigger.click(function () {
              return (
                e.datepicker._datepickerShowing &&
                e.datepicker._lastInput === t[0]
                  ? e.datepicker._hideDatepicker()
                  : e.datepicker._datepickerShowing &&
                    e.datepicker._lastInput !== t[0]
                  ? (e.datepicker._hideDatepicker(),
                    e.datepicker._showDatepicker(t[0]))
                  : e.datepicker._showDatepicker(t[0]),
                !1
              )
            }))
      },
      _autoSize: function (e) {
        if (this._get(e, 'autoSize') && !e.inline) {
          var t,
            n,
            r,
            i,
            s = new Date(2009, 11, 20),
            o = this._get(e, 'dateFormat')
          o.match(/[DM]/) &&
            ((t = function (e) {
              for (n = 0, r = 0, i = 0; e.length > i; i++)
                e[i].length > n && ((n = e[i].length), (r = i))
              return r
            }),
            s.setMonth(
              t(this._get(e, o.match(/MM/) ? 'monthNames' : 'monthNamesShort'))
            ),
            s.setDate(
              t(this._get(e, o.match(/DD/) ? 'dayNames' : 'dayNamesShort')) +
                20 -
                s.getDay()
            )),
            e.input.attr('size', this._formatDate(e, s).length)
        }
      },
      _inlineDatepicker: function (t, n) {
        var r = e(t)
        r.hasClass(this.markerClassName) ||
          (r.addClass(this.markerClassName).append(n.dpDiv),
          e.data(t, o, n),
          this._setDate(n, this._getDefaultDate(n), !0),
          this._updateDatepicker(n),
          this._updateAlternate(n),
          n.settings.disabled && this._disableDatepicker(t),
          n.dpDiv.css('display', 'block'))
      },
      _dialogDatepicker: function (t, n, r, s, u) {
        var f,
          l,
          c,
          h,
          p,
          d = this._dialogInst
        return (
          d ||
            ((this.uuid += 1),
            (f = 'dp' + this.uuid),
            (this._dialogInput = e(
              "<input type='text' id='" +
                f +
                "' style='position: absolute; top: -100px; width: 0px;'/>"
            )),
            this._dialogInput.keydown(this._doKeyDown),
            e('body').append(this._dialogInput),
            (d = this._dialogInst = this._newInst(this._dialogInput, !1)),
            (d.settings = {}),
            e.data(this._dialogInput[0], o, d)),
          i(d.settings, s || {}),
          (n = n && n.constructor === Date ? this._formatDate(d, n) : n),
          this._dialogInput.val(n),
          (this._pos = u ? (u.length ? u : [u.pageX, u.pageY]) : null),
          this._pos ||
            ((l = document.documentElement.clientWidth),
            (c = document.documentElement.clientHeight),
            (h =
              document.documentElement.scrollLeft || document.body.scrollLeft),
            (p = document.documentElement.scrollTop || document.body.scrollTop),
            (this._pos = [l / 2 - 100 + h, c / 2 - 150 + p])),
          this._dialogInput
            .css('left', this._pos[0] + 20 + 'px')
            .css('top', this._pos[1] + 'px'),
          (d.settings.onSelect = r),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          e.blockUI && e.blockUI(this.dpDiv),
          e.data(this._dialogInput[0], o, d),
          this
        )
      },
      _destroyDatepicker: function (t) {
        var n,
          r = e(t),
          i = e.data(t, o)
        r.hasClass(this.markerClassName) &&
          ((n = t.nodeName.toLowerCase()),
          e.removeData(t, o),
          'input' === n
            ? (i.append.remove(),
              i.trigger.remove(),
              r
                .removeClass(this.markerClassName)
                .unbind('focus', this._showDatepicker)
                .unbind('keydown', this._doKeyDown)
                .unbind('keypress', this._doKeyPress)
                .unbind('keyup', this._doKeyUp))
            : ('div' === n || 'span' === n) &&
              r.removeClass(this.markerClassName).empty())
      },
      _enableDatepicker: function (t) {
        var n,
          r,
          i = e(t),
          s = e.data(t, o)
        i.hasClass(this.markerClassName) &&
          ((n = t.nodeName.toLowerCase()),
          'input' === n
            ? ((t.disabled = !1),
              s.trigger
                .filter('button')
                .each(function () {
                  this.disabled = !1
                })
                .end()
                .filter('img')
                .css({ opacity: '1.0', cursor: '' }))
            : ('div' === n || 'span' === n) &&
              ((r = i.children('.' + this._inlineClass)),
              r.children().removeClass('ui-state-disabled'),
              r
                .find('select.ui-datepicker-month, select.ui-datepicker-year')
                .prop('disabled', !1)),
          (this._disabledInputs = e.map(this._disabledInputs, function (e) {
            return e === t ? null : e
          })))
      },
      _disableDatepicker: function (t) {
        var n,
          r,
          i = e(t),
          s = e.data(t, o)
        i.hasClass(this.markerClassName) &&
          ((n = t.nodeName.toLowerCase()),
          'input' === n
            ? ((t.disabled = !0),
              s.trigger
                .filter('button')
                .each(function () {
                  this.disabled = !0
                })
                .end()
                .filter('img')
                .css({ opacity: '0.5', cursor: 'default' }))
            : ('div' === n || 'span' === n) &&
              ((r = i.children('.' + this._inlineClass)),
              r.children().addClass('ui-state-disabled'),
              r
                .find('select.ui-datepicker-month, select.ui-datepicker-year')
                .prop('disabled', !0)),
          (this._disabledInputs = e.map(this._disabledInputs, function (e) {
            return e === t ? null : e
          })),
          (this._disabledInputs[this._disabledInputs.length] = t))
      },
      _isDisabledDatepicker: function (e) {
        if (!e) return !1
        for (var t = 0; this._disabledInputs.length > t; t++)
          if (this._disabledInputs[t] === e) return !0
        return !1
      },
      _getInst: function (t) {
        try {
          return e.data(t, o)
        } catch (n) {
          throw 'Missing instance data for this datepicker'
        }
      },
      _optionDatepicker: function (n, r, s) {
        var o,
          u,
          a,
          f,
          l = this._getInst(n)
        return 2 === arguments.length && 'string' == typeof r
          ? 'defaults' === r
            ? e.extend({}, e.datepicker._defaults)
            : l
            ? 'all' === r
              ? e.extend({}, l.settings)
              : this._get(l, r)
            : null
          : ((o = r || {}),
            'string' == typeof r && ((o = {}), (o[r] = s)),
            l &&
              (this._curInst === l && this._hideDatepicker(),
              (u = this._getDateDatepicker(n, !0)),
              (a = this._getMinMaxDate(l, 'min')),
              (f = this._getMinMaxDate(l, 'max')),
              i(l.settings, o),
              null !== a &&
                o.dateFormat !== t &&
                o.minDate === t &&
                (l.settings.minDate = this._formatDate(l, a)),
              null !== f &&
                o.dateFormat !== t &&
                o.maxDate === t &&
                (l.settings.maxDate = this._formatDate(l, f)),
              'disabled' in o &&
                (o.disabled
                  ? this._disableDatepicker(n)
                  : this._enableDatepicker(n)),
              this._attachments(e(n), l),
              this._autoSize(l),
              this._setDate(l, u),
              this._updateAlternate(l),
              this._updateDatepicker(l)),
            t)
      },
      _changeDatepicker: function (e, t, n) {
        this._optionDatepicker(e, t, n)
      },
      _refreshDatepicker: function (e) {
        var t = this._getInst(e)
        t && this._updateDatepicker(t)
      },
      _setDateDatepicker: function (e, t) {
        var n = this._getInst(e)
        n &&
          (this._setDate(n, t),
          this._updateDatepicker(n),
          this._updateAlternate(n))
      },
      _getDateDatepicker: function (e, t) {
        var n = this._getInst(e)
        return (
          n && !n.inline && this._setDateFromField(n, t),
          n ? this._getDate(n) : null
        )
      },
      _doKeyDown: function (t) {
        var n,
          r,
          i,
          s = e.datepicker._getInst(t.target),
          o = !0,
          u = s.dpDiv.is('.ui-datepicker-rtl')
        if (((s._keyEvent = !0), e.datepicker._datepickerShowing))
          switch (t.keyCode) {
            case 9:
              e.datepicker._hideDatepicker(), (o = !1)
              break
            case 13:
              return (
                (i = e(
                  'td.' +
                    e.datepicker._dayOverClass +
                    ':not(.' +
                    e.datepicker._currentClass +
                    ')',
                  s.dpDiv
                )),
                i[0] &&
                  e.datepicker._selectDay(
                    t.target,
                    s.selectedMonth,
                    s.selectedYear,
                    i[0]
                  ),
                (n = e.datepicker._get(s, 'onSelect')),
                n
                  ? ((r = e.datepicker._formatDate(s)),
                    n.apply(s.input ? s.input[0] : null, [r, s]))
                  : e.datepicker._hideDatepicker(),
                !1
              )
            case 27:
              e.datepicker._hideDatepicker()
              break
            case 33:
              e.datepicker._adjustDate(
                t.target,
                t.ctrlKey
                  ? -e.datepicker._get(s, 'stepBigMonths')
                  : -e.datepicker._get(s, 'stepMonths'),
                'M'
              )
              break
            case 34:
              e.datepicker._adjustDate(
                t.target,
                t.ctrlKey
                  ? +e.datepicker._get(s, 'stepBigMonths')
                  : +e.datepicker._get(s, 'stepMonths'),
                'M'
              )
              break
            case 35:
              ;(t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target),
                (o = t.ctrlKey || t.metaKey)
              break
            case 36:
              ;(t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target),
                (o = t.ctrlKey || t.metaKey)
              break
            case 37:
              ;(t.ctrlKey || t.metaKey) &&
                e.datepicker._adjustDate(t.target, u ? 1 : -1, 'D'),
                (o = t.ctrlKey || t.metaKey),
                t.originalEvent.altKey &&
                  e.datepicker._adjustDate(
                    t.target,
                    t.ctrlKey
                      ? -e.datepicker._get(s, 'stepBigMonths')
                      : -e.datepicker._get(s, 'stepMonths'),
                    'M'
                  )
              break
            case 38:
              ;(t.ctrlKey || t.metaKey) &&
                e.datepicker._adjustDate(t.target, -7, 'D'),
                (o = t.ctrlKey || t.metaKey)
              break
            case 39:
              ;(t.ctrlKey || t.metaKey) &&
                e.datepicker._adjustDate(t.target, u ? -1 : 1, 'D'),
                (o = t.ctrlKey || t.metaKey),
                t.originalEvent.altKey &&
                  e.datepicker._adjustDate(
                    t.target,
                    t.ctrlKey
                      ? +e.datepicker._get(s, 'stepBigMonths')
                      : +e.datepicker._get(s, 'stepMonths'),
                    'M'
                  )
              break
            case 40:
              ;(t.ctrlKey || t.metaKey) &&
                e.datepicker._adjustDate(t.target, 7, 'D'),
                (o = t.ctrlKey || t.metaKey)
              break
            default:
              o = !1
          }
        else
          36 === t.keyCode && t.ctrlKey
            ? e.datepicker._showDatepicker(this)
            : (o = !1)
        o && (t.preventDefault(), t.stopPropagation())
      },
      _doKeyPress: function (n) {
        var r,
          i,
          s = e.datepicker._getInst(n.target)
        return e.datepicker._get(s, 'constrainInput')
          ? ((r = e.datepicker._possibleChars(
              e.datepicker._get(s, 'dateFormat')
            )),
            (i = String.fromCharCode(
              null == n.charCode ? n.keyCode : n.charCode
            )),
            n.ctrlKey || n.metaKey || ' ' > i || !r || r.indexOf(i) > -1)
          : t
      },
      _doKeyUp: function (t) {
        var n,
          r = e.datepicker._getInst(t.target)
        if (r.input.val() !== r.lastVal)
          try {
            ;(n = e.datepicker.parseDate(
              e.datepicker._get(r, 'dateFormat'),
              r.input ? r.input.val() : null,
              e.datepicker._getFormatConfig(r)
            )),
              n &&
                (e.datepicker._setDateFromField(r),
                e.datepicker._updateAlternate(r),
                e.datepicker._updateDatepicker(r))
          } catch (i) {}
        return !0
      },
      _showDatepicker: function (t) {
        if (
          ((t = t.target || t),
          'input' !== t.nodeName.toLowerCase() &&
            (t = e('input', t.parentNode)[0]),
          !e.datepicker._isDisabledDatepicker(t) &&
            e.datepicker._lastInput !== t)
        ) {
          var n, r, s, o, u, a, f
          ;(n = e.datepicker._getInst(t)),
            e.datepicker._curInst &&
              e.datepicker._curInst !== n &&
              (e.datepicker._curInst.dpDiv.stop(!0, !0),
              n &&
                e.datepicker._datepickerShowing &&
                e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),
            (r = e.datepicker._get(n, 'beforeShow')),
            (s = r ? r.apply(t, [t, n]) : {}),
            s !== !1 &&
              (i(n.settings, s),
              (n.lastVal = null),
              (e.datepicker._lastInput = t),
              e.datepicker._setDateFromField(n),
              e.datepicker._inDialog && (t.value = ''),
              e.datepicker._pos ||
                ((e.datepicker._pos = e.datepicker._findPos(t)),
                (e.datepicker._pos[1] += t.offsetHeight)),
              (o = !1),
              e(t)
                .parents()
                .each(function () {
                  return (o |= 'fixed' === e(this).css('position')), !o
                }),
              (u = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }),
              (e.datepicker._pos = null),
              n.dpDiv.empty(),
              n.dpDiv.css({
                position: 'absolute',
                display: 'block',
                top: '-1000px'
              }),
              e.datepicker._updateDatepicker(n),
              (u = e.datepicker._checkOffset(n, u, o)),
              n.dpDiv.css({
                position:
                  e.datepicker._inDialog && e.blockUI
                    ? 'static'
                    : o
                    ? 'fixed'
                    : 'absolute',
                display: 'none',
                left: u.left + 'px',
                top: u.top + 'px'
              }),
              n.inline ||
                ((a = e.datepicker._get(n, 'showAnim')),
                (f = e.datepicker._get(n, 'duration')),
                n.dpDiv.zIndex(e(t).zIndex() + 1),
                (e.datepicker._datepickerShowing = !0),
                e.effects && e.effects.effect[a]
                  ? n.dpDiv.show(a, e.datepicker._get(n, 'showOptions'), f)
                  : n.dpDiv[a || 'show'](a ? f : null),
                e.datepicker._shouldFocusInput(n) && n.input.focus(),
                (e.datepicker._curInst = n)))
        }
      },
      _updateDatepicker: function (t) {
        ;(this.maxRows = 4),
          (s = t),
          t.dpDiv.empty().append(this._generateHTML(t)),
          this._attachHandlers(t),
          t.dpDiv.find('.' + this._dayOverClass + ' a').mouseover()
        var n,
          r = this._getNumberOfMonths(t),
          i = r[1],
          o = 17
        t.dpDiv
          .removeClass(
            'ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4'
          )
          .width(''),
          i > 1 &&
            t.dpDiv
              .addClass('ui-datepicker-multi-' + i)
              .css('width', o * i + 'em'),
          t.dpDiv[(1 !== r[0] || 1 !== r[1] ? 'add' : 'remove') + 'Class'](
            'ui-datepicker-multi'
          ),
          t.dpDiv[(this._get(t, 'isRTL') ? 'add' : 'remove') + 'Class'](
            'ui-datepicker-rtl'
          ),
          t === e.datepicker._curInst &&
            e.datepicker._datepickerShowing &&
            e.datepicker._shouldFocusInput(t) &&
            t.input.focus(),
          t.yearshtml &&
            ((n = t.yearshtml),
            setTimeout(function () {
              n === t.yearshtml &&
                t.yearshtml &&
                t.dpDiv
                  .find('select.ui-datepicker-year:first')
                  .replaceWith(t.yearshtml),
                (n = t.yearshtml = null)
            }, 0))
      },
      _shouldFocusInput: function (e) {
        return (
          e.input &&
          e.input.is(':visible') &&
          !e.input.is(':disabled') &&
          !e.input.is(':focus')
        )
      },
      _checkOffset: function (t, n, r) {
        var i = t.dpDiv.outerWidth(),
          s = t.dpDiv.outerHeight(),
          o = t.input ? t.input.outerWidth() : 0,
          u = t.input ? t.input.outerHeight() : 0,
          a =
            document.documentElement.clientWidth +
            (r ? 0 : e(document).scrollLeft()),
          f =
            document.documentElement.clientHeight +
            (r ? 0 : e(document).scrollTop())
        return (
          (n.left -= this._get(t, 'isRTL') ? i - o : 0),
          (n.left -=
            r && n.left === t.input.offset().left
              ? e(document).scrollLeft()
              : 0),
          (n.top -=
            r && n.top === t.input.offset().top + u
              ? e(document).scrollTop()
              : 0),
          (n.left -= Math.min(
            n.left,
            n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0
          )),
          (n.top -= Math.min(
            n.top,
            n.top + s > f && f > s ? Math.abs(s + u) : 0
          )),
          n
        )
      },
      _findPos: function (t) {
        for (
          var n, r = this._getInst(t), i = this._get(r, 'isRTL');
          t &&
          ('hidden' === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));

        )
          t = t[i ? 'previousSibling' : 'nextSibling']
        return (n = e(t).offset()), [n.left, n.top]
      },
      _hideDatepicker: function (t) {
        var n,
          r,
          i,
          s,
          u = this._curInst
        !u ||
          (t && u !== e.data(t, o)) ||
          (this._datepickerShowing &&
            ((n = this._get(u, 'showAnim')),
            (r = this._get(u, 'duration')),
            (i = function () {
              e.datepicker._tidyDialog(u)
            }),
            e.effects && (e.effects.effect[n] || e.effects[n])
              ? u.dpDiv.hide(n, e.datepicker._get(u, 'showOptions'), r, i)
              : u.dpDiv[
                  'slideDown' === n
                    ? 'slideUp'
                    : 'fadeIn' === n
                    ? 'fadeOut'
                    : 'hide'
                ](n ? r : null, i),
            n || i(),
            (this._datepickerShowing = !1),
            (s = this._get(u, 'onClose')),
            s &&
              s.apply(u.input ? u.input[0] : null, [
                u.input ? u.input.val() : '',
                u
              ]),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: 'absolute',
                left: '0',
                top: '-100px'
              }),
              e.blockUI && (e.unblockUI(), e('body').append(this.dpDiv))),
            (this._inDialog = !1)))
      },
      _tidyDialog: function (e) {
        e.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar')
      },
      _checkExternalClick: function (t) {
        if (e.datepicker._curInst) {
          var n = e(t.target),
            r = e.datepicker._getInst(n[0])
          ;((n[0].id !== e.datepicker._mainDivId &&
            0 === n.parents('#' + e.datepicker._mainDivId).length &&
            !n.hasClass(e.datepicker.markerClassName) &&
            !n.closest('.' + e.datepicker._triggerClass).length &&
            e.datepicker._datepickerShowing &&
            (!e.datepicker._inDialog || !e.blockUI)) ||
            (n.hasClass(e.datepicker.markerClassName) &&
              e.datepicker._curInst !== r)) &&
            e.datepicker._hideDatepicker()
        }
      },
      _adjustDate: function (t, n, r) {
        var i = e(t),
          s = this._getInst(i[0])
        this._isDisabledDatepicker(i[0]) ||
          (this._adjustInstDate(
            s,
            n + ('M' === r ? this._get(s, 'showCurrentAtPos') : 0),
            r
          ),
          this._updateDatepicker(s))
      },
      _gotoToday: function (t) {
        var n,
          r = e(t),
          i = this._getInst(r[0])
        this._get(i, 'gotoCurrent') && i.currentDay
          ? ((i.selectedDay = i.currentDay),
            (i.drawMonth = i.selectedMonth = i.currentMonth),
            (i.drawYear = i.selectedYear = i.currentYear))
          : ((n = new Date()),
            (i.selectedDay = n.getDate()),
            (i.drawMonth = i.selectedMonth = n.getMonth()),
            (i.drawYear = i.selectedYear = n.getFullYear())),
          this._notifyChange(i),
          this._adjustDate(r)
      },
      _selectMonthYear: function (t, n, r) {
        var i = e(t),
          s = this._getInst(i[0])
        ;(s['selected' + ('M' === r ? 'Month' : 'Year')] = s[
          'draw' + ('M' === r ? 'Month' : 'Year')
        ] =
          parseInt(n.options[n.selectedIndex].value, 10)),
          this._notifyChange(s),
          this._adjustDate(i)
      },
      _selectDay: function (t, n, r, i) {
        var s,
          o = e(t)
        e(i).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(o[0]) ||
          ((s = this._getInst(o[0])),
          (s.selectedDay = s.currentDay = e('a', i).html()),
          (s.selectedMonth = s.currentMonth = n),
          (s.selectedYear = s.currentYear = r),
          this._selectDate(
            t,
            this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)
          ))
      },
      _clearDate: function (t) {
        var n = e(t)
        this._selectDate(n, '')
      },
      _selectDate: function (t, n) {
        var r,
          i = e(t),
          s = this._getInst(i[0])
        ;(n = null != n ? n : this._formatDate(s)),
          s.input && s.input.val(n),
          this._updateAlternate(s),
          (r = this._get(s, 'onSelect')),
          r
            ? r.apply(s.input ? s.input[0] : null, [n, s])
            : s.input && s.input.trigger('change'),
          s.inline
            ? this._updateDatepicker(s)
            : (this._hideDatepicker(),
              (this._lastInput = s.input[0]),
              'object' != typeof s.input[0] && s.input.focus(),
              (this._lastInput = null))
      },
      _updateAlternate: function (t) {
        var n,
          r,
          i,
          s = this._get(t, 'altField')
        s &&
          ((n = this._get(t, 'altFormat') || this._get(t, 'dateFormat')),
          (r = this._getDate(t)),
          (i = this.formatDate(n, r, this._getFormatConfig(t))),
          e(s).each(function () {
            e(this).val(i)
          }))
      },
      noWeekends: function (e) {
        var t = e.getDay()
        return [t > 0 && 6 > t, '']
      },
      iso8601Week: function (e) {
        var t,
          n = new Date(e.getTime())
        return (
          n.setDate(n.getDate() + 4 - (n.getDay() || 7)),
          (t = n.getTime()),
          n.setMonth(0),
          n.setDate(1),
          Math.floor(Math.round((t - n) / 864e5) / 7) + 1
        )
      },
      parseDate: function (n, r, i) {
        if (null == n || null == r) throw 'Invalid arguments'
        if (((r = 'object' == typeof r ? '' + r : r + ''), '' === r))
          return null
        var s,
          o,
          u,
          a,
          f = 0,
          l = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          c =
            'string' != typeof l
              ? l
              : (new Date().getFullYear() % 100) + parseInt(l, 10),
          h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          p = (i ? i.dayNames : null) || this._defaults.dayNames,
          d = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          v = (i ? i.monthNames : null) || this._defaults.monthNames,
          m = -1,
          g = -1,
          y = -1,
          b = -1,
          w = !1,
          E = function (e) {
            var t = n.length > s + 1 && n.charAt(s + 1) === e
            return t && s++, t
          },
          S = function (e) {
            var t = E(e),
              n =
                '@' === e
                  ? 14
                  : '!' === e
                  ? 20
                  : 'y' === e && t
                  ? 4
                  : 'o' === e
                  ? 3
                  : 2,
              i = RegExp('^\\d{1,' + n + '}'),
              s = r.substring(f).match(i)
            if (!s) throw 'Missing number at position ' + f
            return (f += s[0].length), parseInt(s[0], 10)
          },
          x = function (n, i, s) {
            var o = -1,
              u = e
                .map(E(n) ? s : i, function (e, t) {
                  return [[t, e]]
                })
                .sort(function (e, t) {
                  return -(e[1].length - t[1].length)
                })
            if (
              (e.each(u, function (e, n) {
                var i = n[1]
                return r.substr(f, i.length).toLowerCase() === i.toLowerCase()
                  ? ((o = n[0]), (f += i.length), !1)
                  : t
              }),
              -1 !== o)
            )
              return o + 1
            throw 'Unknown name at position ' + f
          },
          T = function () {
            if (r.charAt(f) !== n.charAt(s))
              throw 'Unexpected literal at position ' + f
            f++
          }
        for (s = 0; n.length > s; s++)
          if (w) "'" !== n.charAt(s) || E("'") ? T() : (w = !1)
          else
            switch (n.charAt(s)) {
              case 'd':
                y = S('d')
                break
              case 'D':
                x('D', h, p)
                break
              case 'o':
                b = S('o')
                break
              case 'm':
                g = S('m')
                break
              case 'M':
                g = x('M', d, v)
                break
              case 'y':
                m = S('y')
                break
              case '@':
                ;(a = new Date(S('@'))),
                  (m = a.getFullYear()),
                  (g = a.getMonth() + 1),
                  (y = a.getDate())
                break
              case '!':
                ;(a = new Date((S('!') - this._ticksTo1970) / 1e4)),
                  (m = a.getFullYear()),
                  (g = a.getMonth() + 1),
                  (y = a.getDate())
                break
              case "'":
                E("'") ? T() : (w = !0)
                break
              default:
                T()
            }
        if (r.length > f && ((u = r.substr(f)), !/^\s+/.test(u)))
          throw 'Extra/unparsed characters found in date: ' + u
        if (
          (-1 === m
            ? (m = new Date().getFullYear())
            : 100 > m &&
              (m +=
                new Date().getFullYear() -
                (new Date().getFullYear() % 100) +
                (c >= m ? 0 : -100)),
          b > -1)
        )
          for (g = 1, y = b; ; ) {
            if (((o = this._getDaysInMonth(m, g - 1)), o >= y)) break
            g++, (y -= o)
          }
        if (
          ((a = this._daylightSavingAdjust(new Date(m, g - 1, y))),
          a.getFullYear() !== m || a.getMonth() + 1 !== g || a.getDate() !== y)
        )
          throw 'Invalid date'
        return a
      },
      ATOM: 'yy-mm-dd',
      COOKIE: 'D, dd M yy',
      ISO_8601: 'yy-mm-dd',
      RFC_822: 'D, d M y',
      RFC_850: 'DD, dd-M-y',
      RFC_1036: 'D, d M y',
      RFC_1123: 'D, d M yy',
      RFC_2822: 'D, d M yy',
      RSS: 'D, d M y',
      TICKS: '!',
      TIMESTAMP: '@',
      W3C: 'yy-mm-dd',
      _ticksTo1970:
        864e9 *
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
      formatDate: function (e, t, n) {
        if (!t) return ''
        var r,
          i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
          s = (n ? n.dayNames : null) || this._defaults.dayNames,
          o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
          u = (n ? n.monthNames : null) || this._defaults.monthNames,
          a = function (t) {
            var n = e.length > r + 1 && e.charAt(r + 1) === t
            return n && r++, n
          },
          f = function (e, t, n) {
            var r = '' + t
            if (a(e)) for (; n > r.length; ) r = '0' + r
            return r
          },
          l = function (e, t, n, r) {
            return a(e) ? r[t] : n[t]
          },
          c = '',
          h = !1
        if (t)
          for (r = 0; e.length > r; r++)
            if (h) "'" !== e.charAt(r) || a("'") ? (c += e.charAt(r)) : (h = !1)
            else
              switch (e.charAt(r)) {
                case 'd':
                  c += f('d', t.getDate(), 2)
                  break
                case 'D':
                  c += l('D', t.getDay(), i, s)
                  break
                case 'o':
                  c += f(
                    'o',
                    Math.round(
                      (new Date(
                        t.getFullYear(),
                        t.getMonth(),
                        t.getDate()
                      ).getTime() -
                        new Date(t.getFullYear(), 0, 0).getTime()) /
                        864e5
                    ),
                    3
                  )
                  break
                case 'm':
                  c += f('m', t.getMonth() + 1, 2)
                  break
                case 'M':
                  c += l('M', t.getMonth(), o, u)
                  break
                case 'y':
                  c += a('y')
                    ? t.getFullYear()
                    : (10 > t.getYear() % 100 ? '0' : '') + (t.getYear() % 100)
                  break
                case '@':
                  c += t.getTime()
                  break
                case '!':
                  c += 1e4 * t.getTime() + this._ticksTo1970
                  break
                case "'":
                  a("'") ? (c += "'") : (h = !0)
                  break
                default:
                  c += e.charAt(r)
              }
        return c
      },
      _possibleChars: function (e) {
        var t,
          n = '',
          r = !1,
          i = function (n) {
            var r = e.length > t + 1 && e.charAt(t + 1) === n
            return r && t++, r
          }
        for (t = 0; e.length > t; t++)
          if (r) "'" !== e.charAt(t) || i("'") ? (n += e.charAt(t)) : (r = !1)
          else
            switch (e.charAt(t)) {
              case 'd':
              case 'm':
              case 'y':
              case '@':
                n += '0123456789'
                break
              case 'D':
              case 'M':
                return null
              case "'":
                i("'") ? (n += "'") : (r = !0)
                break
              default:
                n += e.charAt(t)
            }
        return n
      },
      _get: function (e, n) {
        return e.settings[n] !== t ? e.settings[n] : this._defaults[n]
      },
      _setDateFromField: function (e, t) {
        if (e.input.val() !== e.lastVal) {
          var n = this._get(e, 'dateFormat'),
            r = (e.lastVal = e.input ? e.input.val() : null),
            i = this._getDefaultDate(e),
            s = i,
            o = this._getFormatConfig(e)
          try {
            s = this.parseDate(n, r, o) || i
          } catch (u) {
            r = t ? '' : r
          }
          ;(e.selectedDay = s.getDate()),
            (e.drawMonth = e.selectedMonth = s.getMonth()),
            (e.drawYear = e.selectedYear = s.getFullYear()),
            (e.currentDay = r ? s.getDate() : 0),
            (e.currentMonth = r ? s.getMonth() : 0),
            (e.currentYear = r ? s.getFullYear() : 0),
            this._adjustInstDate(e)
        }
      },
      _getDefaultDate: function (e) {
        return this._restrictMinMax(
          e,
          this._determineDate(e, this._get(e, 'defaultDate'), new Date())
        )
      },
      _determineDate: function (t, n, r) {
        var i = function (e) {
            var t = new Date()
            return t.setDate(t.getDate() + e), t
          },
          s = function (n) {
            try {
              return e.datepicker.parseDate(
                e.datepicker._get(t, 'dateFormat'),
                n,
                e.datepicker._getFormatConfig(t)
              )
            } catch (r) {}
            for (
              var i =
                  (n.toLowerCase().match(/^c/)
                    ? e.datepicker._getDate(t)
                    : null) || new Date(),
                s = i.getFullYear(),
                o = i.getMonth(),
                u = i.getDate(),
                a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                f = a.exec(n);
              f;

            ) {
              switch (f[2] || 'd') {
                case 'd':
                case 'D':
                  u += parseInt(f[1], 10)
                  break
                case 'w':
                case 'W':
                  u += 7 * parseInt(f[1], 10)
                  break
                case 'm':
                case 'M':
                  ;(o += parseInt(f[1], 10)),
                    (u = Math.min(u, e.datepicker._getDaysInMonth(s, o)))
                  break
                case 'y':
                case 'Y':
                  ;(s += parseInt(f[1], 10)),
                    (u = Math.min(u, e.datepicker._getDaysInMonth(s, o)))
              }
              f = a.exec(n)
            }
            return new Date(s, o, u)
          },
          o =
            null == n || '' === n
              ? r
              : 'string' == typeof n
              ? s(n)
              : 'number' == typeof n
              ? isNaN(n)
                ? r
                : i(n)
              : new Date(n.getTime())
        return (
          (o = o && 'Invalid Date' == '' + o ? r : o),
          o &&
            (o.setHours(0),
            o.setMinutes(0),
            o.setSeconds(0),
            o.setMilliseconds(0)),
          this._daylightSavingAdjust(o)
        )
      },
      _daylightSavingAdjust: function (e) {
        return e
          ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e)
          : null
      },
      _setDate: function (e, t, n) {
        var r = !t,
          i = e.selectedMonth,
          s = e.selectedYear,
          o = this._restrictMinMax(e, this._determineDate(e, t, new Date()))
        ;(e.selectedDay = e.currentDay = o.getDate()),
          (e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth()),
          (e.drawYear = e.selectedYear = e.currentYear = o.getFullYear()),
          (i === e.selectedMonth && s === e.selectedYear) ||
            n ||
            this._notifyChange(e),
          this._adjustInstDate(e),
          e.input && e.input.val(r ? '' : this._formatDate(e))
      },
      _getDate: function (e) {
        var t =
          !e.currentYear || (e.input && '' === e.input.val())
            ? null
            : this._daylightSavingAdjust(
                new Date(e.currentYear, e.currentMonth, e.currentDay)
              )
        return t
      },
      _attachHandlers: function (t) {
        var n = this._get(t, 'stepMonths'),
          r = '#' + t.id.replace(/\\\\/g, '\\')
        t.dpDiv.find('[data-handler]').map(function () {
          var t = {
            prev: function () {
              e.datepicker._adjustDate(r, -n, 'M')
            },
            next: function () {
              e.datepicker._adjustDate(r, +n, 'M')
            },
            hide: function () {
              e.datepicker._hideDatepicker()
            },
            today: function () {
              e.datepicker._gotoToday(r)
            },
            selectDay: function () {
              return (
                e.datepicker._selectDay(
                  r,
                  +this.getAttribute('data-month'),
                  +this.getAttribute('data-year'),
                  this
                ),
                !1
              )
            },
            selectMonth: function () {
              return e.datepicker._selectMonthYear(r, this, 'M'), !1
            },
            selectYear: function () {
              return e.datepicker._selectMonthYear(r, this, 'Y'), !1
            }
          }
          e(this).bind(
            this.getAttribute('data-event'),
            t[this.getAttribute('data-handler')]
          )
        })
      },
      _generateHTML: function (e) {
        var t,
          n,
          r,
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d,
          v,
          m,
          g,
          y,
          b,
          w,
          E,
          S,
          x,
          T,
          N,
          C,
          k,
          L,
          A,
          O,
          M,
          _,
          D,
          P,
          H,
          B,
          j,
          F,
          I,
          q = new Date(),
          R = this._daylightSavingAdjust(
            new Date(q.getFullYear(), q.getMonth(), q.getDate())
          ),
          U = this._get(e, 'isRTL'),
          z = this._get(e, 'showButtonPanel'),
          W = this._get(e, 'hideIfNoPrevNext'),
          X = this._get(e, 'navigationAsDateFormat'),
          V = this._getNumberOfMonths(e),
          $ = this._get(e, 'showCurrentAtPos'),
          J = this._get(e, 'stepMonths'),
          K = 1 !== V[0] || 1 !== V[1],
          Q = this._daylightSavingAdjust(
            e.currentDay
              ? new Date(e.currentYear, e.currentMonth, e.currentDay)
              : new Date(9999, 9, 9)
          ),
          G = this._getMinMaxDate(e, 'min'),
          Y = this._getMinMaxDate(e, 'max'),
          Z = e.drawMonth - $,
          et = e.drawYear
        if ((0 > Z && ((Z += 12), et--), Y))
          for (
            t = this._daylightSavingAdjust(
              new Date(
                Y.getFullYear(),
                Y.getMonth() - V[0] * V[1] + 1,
                Y.getDate()
              )
            ),
              t = G && G > t ? G : t;
            this._daylightSavingAdjust(new Date(et, Z, 1)) > t;

          )
            Z--, 0 > Z && ((Z = 11), et--)
        for (
          e.drawMonth = Z,
            e.drawYear = et,
            n = this._get(e, 'prevText'),
            n = X
              ? this.formatDate(
                  n,
                  this._daylightSavingAdjust(new Date(et, Z - J, 1)),
                  this._getFormatConfig(e)
                )
              : n,
            r = this._canAdjustMonth(e, -1, et, Z)
              ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                n +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (U ? 'e' : 'w') +
                "'>" +
                n +
                '</span></a>'
              : W
              ? ''
              : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                n +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (U ? 'e' : 'w') +
                "'>" +
                n +
                '</span></a>',
            i = this._get(e, 'nextText'),
            i = X
              ? this.formatDate(
                  i,
                  this._daylightSavingAdjust(new Date(et, Z + J, 1)),
                  this._getFormatConfig(e)
                )
              : i,
            s = this._canAdjustMonth(e, 1, et, Z)
              ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                i +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (U ? 'w' : 'e') +
                "'>" +
                i +
                '</span></a>'
              : W
              ? ''
              : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                i +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (U ? 'w' : 'e') +
                "'>" +
                i +
                '</span></a>',
            o = this._get(e, 'currentText'),
            u = this._get(e, 'gotoCurrent') && e.currentDay ? Q : R,
            o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o,
            a = e.inline
              ? ''
              : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                this._get(e, 'closeText') +
                '</button>',
            f = z
              ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                (U ? a : '') +
                (this._isInRange(e, u)
                  ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                    o +
                    '</button>'
                  : '') +
                (U ? '' : a) +
                '</div>'
              : '',
            l = parseInt(this._get(e, 'firstDay'), 10),
            l = isNaN(l) ? 0 : l,
            c = this._get(e, 'showWeek'),
            h = this._get(e, 'dayNames'),
            p = this._get(e, 'dayNamesMin'),
            d = this._get(e, 'monthNames'),
            v = this._get(e, 'monthNamesShort'),
            m = this._get(e, 'beforeShowDay'),
            g = this._get(e, 'showOtherMonths'),
            y = this._get(e, 'selectOtherMonths'),
            b = this._getDefaultDate(e),
            w = '',
            S = 0;
          V[0] > S;
          S++
        ) {
          for (x = '', this.maxRows = 4, T = 0; V[1] > T; T++) {
            if (
              ((N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay))),
              (C = ' ui-corner-all'),
              (k = ''),
              K)
            ) {
              if (((k += "<div class='ui-datepicker-group"), V[1] > 1))
                switch (T) {
                  case 0:
                    ;(k += ' ui-datepicker-group-first'),
                      (C = ' ui-corner-' + (U ? 'right' : 'left'))
                    break
                  case V[1] - 1:
                    ;(k += ' ui-datepicker-group-last'),
                      (C = ' ui-corner-' + (U ? 'left' : 'right'))
                    break
                  default:
                    ;(k += ' ui-datepicker-group-middle'), (C = '')
                }
              k += "'>"
            }
            for (
              k +=
                "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                C +
                "'>" +
                (/all|left/.test(C) && 0 === S ? (U ? s : r) : '') +
                (/all|right/.test(C) && 0 === S ? (U ? r : s) : '') +
                this._generateMonthYearHeader(
                  e,
                  Z,
                  et,
                  G,
                  Y,
                  S > 0 || T > 0,
                  d,
                  v
                ) +
                "</div><table class='ui-datepicker-calendar'><thead>" +
                '<tr>',
                L = c
                  ? "<th class='ui-datepicker-week-col'>" +
                    this._get(e, 'weekHeader') +
                    '</th>'
                  : '',
                E = 0;
              7 > E;
              E++
            )
              (A = (E + l) % 7),
                (L +=
                  '<th' +
                  ((E + l + 6) % 7 >= 5
                    ? " class='ui-datepicker-week-end'"
                    : '') +
                  '>' +
                  "<span title='" +
                  h[A] +
                  "'>" +
                  p[A] +
                  '</span></th>')
            for (
              k += L + '</tr></thead><tbody>',
                O = this._getDaysInMonth(et, Z),
                et === e.selectedYear &&
                  Z === e.selectedMonth &&
                  (e.selectedDay = Math.min(e.selectedDay, O)),
                M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7,
                _ = Math.ceil((M + O) / 7),
                D = K ? (this.maxRows > _ ? this.maxRows : _) : _,
                this.maxRows = D,
                P = this._daylightSavingAdjust(new Date(et, Z, 1 - M)),
                H = 0;
              D > H;
              H++
            ) {
              for (
                k += '<tr>',
                  B = c
                    ? "<td class='ui-datepicker-week-col'>" +
                      this._get(e, 'calculateWeek')(P) +
                      '</td>'
                    : '',
                  E = 0;
                7 > E;
                E++
              )
                (j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, '']),
                  (F = P.getMonth() !== Z),
                  (I = (F && !y) || !j[0] || (G && G > P) || (Y && P > Y)),
                  (B +=
                    "<td class='" +
                    ((E + l + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') +
                    (F ? ' ui-datepicker-other-month' : '') +
                    ((P.getTime() === N.getTime() &&
                      Z === e.selectedMonth &&
                      e._keyEvent) ||
                    (b.getTime() === P.getTime() && b.getTime() === N.getTime())
                      ? ' ' + this._dayOverClass
                      : '') +
                    (I
                      ? ' ' + this._unselectableClass + ' ui-state-disabled'
                      : '') +
                    (F && !g
                      ? ''
                      : ' ' +
                        j[1] +
                        (P.getTime() === Q.getTime()
                          ? ' ' + this._currentClass
                          : '') +
                        (P.getTime() === R.getTime()
                          ? ' ui-datepicker-today'
                          : '')) +
                    "'" +
                    ((F && !g) || !j[2]
                      ? ''
                      : " title='" + j[2].replace(/'/g, '&#39;') + "'") +
                    (I
                      ? ''
                      : " data-handler='selectDay' data-event='click' data-month='" +
                        P.getMonth() +
                        "' data-year='" +
                        P.getFullYear() +
                        "'") +
                    '>' +
                    (F && !g
                      ? '&#xa0;'
                      : I
                      ? "<span class='ui-state-default'>" +
                        P.getDate() +
                        '</span>'
                      : "<a class='ui-state-default" +
                        (P.getTime() === R.getTime()
                          ? ' ui-state-highlight'
                          : '') +
                        (P.getTime() === Q.getTime()
                          ? ' ui-state-active'
                          : '') +
                        (F ? ' ui-priority-secondary' : '') +
                        "' href='#'>" +
                        P.getDate() +
                        '</a>') +
                    '</td>'),
                  P.setDate(P.getDate() + 1),
                  (P = this._daylightSavingAdjust(P))
              k += B + '</tr>'
            }
            Z++,
              Z > 11 && ((Z = 0), et++),
              (k +=
                '</tbody></table>' +
                (K
                  ? '</div>' +
                    (V[0] > 0 && T === V[1] - 1
                      ? "<div class='ui-datepicker-row-break'></div>"
                      : '')
                  : '')),
              (x += k)
          }
          w += x
        }
        return (w += f), (e._keyEvent = !1), w
      },
      _generateMonthYearHeader: function (e, t, n, r, i, s, o, u) {
        var a,
          f,
          l,
          c,
          h,
          p,
          d,
          v,
          m = this._get(e, 'changeMonth'),
          g = this._get(e, 'changeYear'),
          y = this._get(e, 'showMonthAfterYear'),
          b = "<div class='ui-datepicker-title'>",
          w = ''
        if (s || !m)
          w += "<span class='ui-datepicker-month'>" + o[t] + '</span>'
        else {
          for (
            a = r && r.getFullYear() === n,
              f = i && i.getFullYear() === n,
              w +=
                "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
              l = 0;
            12 > l;
            l++
          )
            (!a || l >= r.getMonth()) &&
              (!f || i.getMonth() >= l) &&
              (w +=
                "<option value='" +
                l +
                "'" +
                (l === t ? " selected='selected'" : '') +
                '>' +
                u[l] +
                '</option>')
          w += '</select>'
        }
        if ((y || (b += w + (!s && m && g ? '' : '&#xa0;')), !e.yearshtml))
          if (((e.yearshtml = ''), s || !g))
            b += "<span class='ui-datepicker-year'>" + n + '</span>'
          else {
            for (
              c = this._get(e, 'yearRange').split(':'),
                h = new Date().getFullYear(),
                p = function (e) {
                  var t = e.match(/c[+\-].*/)
                    ? n + parseInt(e.substring(1), 10)
                    : e.match(/[+\-].*/)
                    ? h + parseInt(e, 10)
                    : parseInt(e, 10)
                  return isNaN(t) ? h : t
                },
                d = p(c[0]),
                v = Math.max(d, p(c[1] || '')),
                d = r ? Math.max(d, r.getFullYear()) : d,
                v = i ? Math.min(v, i.getFullYear()) : v,
                e.yearshtml +=
                  "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
              v >= d;
              d++
            )
              e.yearshtml +=
                "<option value='" +
                d +
                "'" +
                (d === n ? " selected='selected'" : '') +
                '>' +
                d +
                '</option>'
            ;(e.yearshtml += '</select>'),
              (b += e.yearshtml),
              (e.yearshtml = null)
          }
        return (
          (b += this._get(e, 'yearSuffix')),
          y && (b += (!s && m && g ? '' : '&#xa0;') + w),
          (b += '</div>')
        )
      },
      _adjustInstDate: function (e, t, n) {
        var r = e.drawYear + ('Y' === n ? t : 0),
          i = e.drawMonth + ('M' === n ? t : 0),
          s =
            Math.min(e.selectedDay, this._getDaysInMonth(r, i)) +
            ('D' === n ? t : 0),
          o = this._restrictMinMax(
            e,
            this._daylightSavingAdjust(new Date(r, i, s))
          )
        ;(e.selectedDay = o.getDate()),
          (e.drawMonth = e.selectedMonth = o.getMonth()),
          (e.drawYear = e.selectedYear = o.getFullYear()),
          ('M' === n || 'Y' === n) && this._notifyChange(e)
      },
      _restrictMinMax: function (e, t) {
        var n = this._getMinMaxDate(e, 'min'),
          r = this._getMinMaxDate(e, 'max'),
          i = n && n > t ? n : t
        return r && i > r ? r : i
      },
      _notifyChange: function (e) {
        var t = this._get(e, 'onChangeMonthYear')
        t &&
          t.apply(e.input ? e.input[0] : null, [
            e.selectedYear,
            e.selectedMonth + 1,
            e
          ])
      },
      _getNumberOfMonths: function (e) {
        var t = this._get(e, 'numberOfMonths')
        return null == t ? [1, 1] : 'number' == typeof t ? [1, t] : t
      },
      _getMinMaxDate: function (e, t) {
        return this._determineDate(e, this._get(e, t + 'Date'), null)
      },
      _getDaysInMonth: function (e, t) {
        return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
      },
      _getFirstDayOfMonth: function (e, t) {
        return new Date(e, t, 1).getDay()
      },
      _canAdjustMonth: function (e, t, n, r) {
        var i = this._getNumberOfMonths(e),
          s = this._daylightSavingAdjust(
            new Date(n, r + (0 > t ? t : i[0] * i[1]), 1)
          )
        return (
          0 > t &&
            s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())),
          this._isInRange(e, s)
        )
      },
      _isInRange: function (e, t) {
        var n,
          r,
          i = this._getMinMaxDate(e, 'min'),
          s = this._getMinMaxDate(e, 'max'),
          o = null,
          u = null,
          a = this._get(e, 'yearRange')
        return (
          a &&
            ((n = a.split(':')),
            (r = new Date().getFullYear()),
            (o = parseInt(n[0], 10)),
            (u = parseInt(n[1], 10)),
            n[0].match(/[+\-].*/) && (o += r),
            n[1].match(/[+\-].*/) && (u += r)),
          (!i || t.getTime() >= i.getTime()) &&
            (!s || t.getTime() <= s.getTime()) &&
            (!o || t.getFullYear() >= o) &&
            (!u || u >= t.getFullYear())
        )
      },
      _getFormatConfig: function (e) {
        var t = this._get(e, 'shortYearCutoff')
        return (
          (t =
            'string' != typeof t
              ? t
              : (new Date().getFullYear() % 100) + parseInt(t, 10)),
          {
            shortYearCutoff: t,
            dayNamesShort: this._get(e, 'dayNamesShort'),
            dayNames: this._get(e, 'dayNames'),
            monthNamesShort: this._get(e, 'monthNamesShort'),
            monthNames: this._get(e, 'monthNames')
          }
        )
      },
      _formatDate: function (e, t, n, r) {
        t ||
          ((e.currentDay = e.selectedDay),
          (e.currentMonth = e.selectedMonth),
          (e.currentYear = e.selectedYear))
        var i = t
          ? 'object' == typeof t
            ? t
            : this._daylightSavingAdjust(new Date(r, n, t))
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay)
            )
        return this.formatDate(
          this._get(e, 'dateFormat'),
          i,
          this._getFormatConfig(e)
        )
      }
    }),
      (e.fn.datepicker = function (t) {
        if (!this.length) return this
        e.datepicker.initialized ||
          (e(document).mousedown(e.datepicker._checkExternalClick),
          (e.datepicker.initialized = !0)),
          0 === e('#' + e.datepicker._mainDivId).length &&
            e('body').append(e.datepicker.dpDiv)
        var n = Array.prototype.slice.call(arguments, 1)
        return 'string' != typeof t ||
          ('isDisabled' !== t && 'getDate' !== t && 'widget' !== t)
          ? 'option' === t &&
            2 === arguments.length &&
            'string' == typeof arguments[1]
            ? e.datepicker['_' + t + 'Datepicker'].apply(
                e.datepicker,
                [this[0]].concat(n)
              )
            : this.each(function () {
                'string' == typeof t
                  ? e.datepicker['_' + t + 'Datepicker'].apply(
                      e.datepicker,
                      [this].concat(n)
                    )
                  : e.datepicker._attachDatepicker(this, t)
              })
          : e.datepicker['_' + t + 'Datepicker'].apply(
              e.datepicker,
              [this[0]].concat(n)
            )
      }),
      (e.datepicker = new n()),
      (e.datepicker.initialized = !1),
      (e.datepicker.uuid = new Date().getTime()),
      (e.datepicker.version = '1.10.3')
  })(jQuery),
  (function (e) {
    var t = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
      },
      n = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 }
    e.widget('ui.dialog', {
      version: '1.10.3',
      options: {
        appendTo: 'body',
        autoOpen: !0,
        buttons: [],
        closeOnEscape: !0,
        closeText: 'close',
        dialogClass: '',
        draggable: !0,
        hide: null,
        height: 'auto',
        maxHeight: null,
        maxWidth: null,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: 'center',
          at: 'center',
          of: window,
          collision: 'fit',
          using: function (t) {
            var n = e(this).css(t).offset().top
            0 > n && e(this).css('top', t.top - n)
          }
        },
        resizable: !0,
        show: null,
        title: null,
        width: 300,
        beforeClose: null,
        close: null,
        drag: null,
        dragStart: null,
        dragStop: null,
        focus: null,
        open: null,
        resize: null,
        resizeStart: null,
        resizeStop: null
      },
      _create: function () {
        ;(this.originalCss = {
          display: this.element[0].style.display,
          width: this.element[0].style.width,
          minHeight: this.element[0].style.minHeight,
          maxHeight: this.element[0].style.maxHeight,
          height: this.element[0].style.height
        }),
          (this.originalPosition = {
            parent: this.element.parent(),
            index: this.element.parent().children().index(this.element)
          }),
          (this.originalTitle = this.element.attr('title')),
          (this.options.title = this.options.title || this.originalTitle),
          this._createWrapper(),
          this.element
            .show()
            .removeAttr('title')
            .addClass('ui-dialog-content ui-widget-content')
            .appendTo(this.uiDialog),
          this._createTitlebar(),
          this._createButtonPane(),
          this.options.draggable && e.fn.draggable && this._makeDraggable(),
          this.options.resizable && e.fn.resizable && this._makeResizable(),
          (this._isOpen = !1)
      },
      _init: function () {
        this.options.autoOpen && this.open()
      },
      _appendTo: function () {
        var t = this.options.appendTo
        return t && (t.jquery || t.nodeType)
          ? e(t)
          : this.document.find(t || 'body').eq(0)
      },
      _destroy: function () {
        var e,
          t = this.originalPosition
        this._destroyOverlay(),
          this.element
            .removeUniqueId()
            .removeClass('ui-dialog-content ui-widget-content')
            .css(this.originalCss)
            .detach(),
          this.uiDialog.stop(!0, !0).remove(),
          this.originalTitle && this.element.attr('title', this.originalTitle),
          (e = t.parent.children().eq(t.index)),
          e.length && e[0] !== this.element[0]
            ? e.before(this.element)
            : t.parent.append(this.element)
      },
      widget: function () {
        return this.uiDialog
      },
      disable: e.noop,
      enable: e.noop,
      close: function (t) {
        var n = this
        this._isOpen &&
          this._trigger('beforeClose', t) !== !1 &&
          ((this._isOpen = !1),
          this._destroyOverlay(),
          this.opener.filter(':focusable').focus().length ||
            e(this.document[0].activeElement).blur(),
          this._hide(this.uiDialog, this.options.hide, function () {
            n._trigger('close', t)
          }))
      },
      isOpen: function () {
        return this._isOpen
      },
      moveToTop: function () {
        this._moveToTop()
      },
      _moveToTop: function (e, t) {
        var n = !!this.uiDialog.nextAll(':visible').insertBefore(this.uiDialog)
          .length
        return n && !t && this._trigger('focus', e), n
      },
      open: function () {
        var t = this
        return this._isOpen
          ? (this._moveToTop() && this._focusTabbable(), undefined)
          : ((this._isOpen = !0),
            (this.opener = e(this.document[0].activeElement)),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this._show(this.uiDialog, this.options.show, function () {
              t._focusTabbable(), t._trigger('focus')
            }),
            this._trigger('open'),
            undefined)
      },
      _focusTabbable: function () {
        var e = this.element.find('[autofocus]')
        e.length || (e = this.element.find(':tabbable')),
          e.length || (e = this.uiDialogButtonPane.find(':tabbable')),
          e.length || (e = this.uiDialogTitlebarClose.filter(':tabbable')),
          e.length || (e = this.uiDialog),
          e.eq(0).focus()
      },
      _keepFocus: function (t) {
        function n() {
          var t = this.document[0].activeElement,
            n = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t)
          n || this._focusTabbable()
        }
        t.preventDefault(), n.call(this), this._delay(n)
      },
      _createWrapper: function () {
        ;(this.uiDialog = e('<div>')
          .addClass(
            'ui-dialog ui-widget ui-widget-content ui-corner-all ui-front ' +
              this.options.dialogClass
          )
          .hide()
          .attr({ tabIndex: -1, role: 'dialog' })
          .appendTo(this._appendTo())),
          this._on(this.uiDialog, {
            keydown: function (t) {
              if (
                this.options.closeOnEscape &&
                !t.isDefaultPrevented() &&
                t.keyCode &&
                t.keyCode === e.ui.keyCode.ESCAPE
              )
                return t.preventDefault(), this.close(t), undefined
              if (t.keyCode === e.ui.keyCode.TAB) {
                var n = this.uiDialog.find(':tabbable'),
                  r = n.filter(':first'),
                  i = n.filter(':last')
                ;(t.target !== i[0] && t.target !== this.uiDialog[0]) ||
                t.shiftKey
                  ? (t.target !== r[0] && t.target !== this.uiDialog[0]) ||
                    !t.shiftKey ||
                    (i.focus(1), t.preventDefault())
                  : (r.focus(1), t.preventDefault())
              }
            },
            mousedown: function (e) {
              this._moveToTop(e) && this._focusTabbable()
            }
          }),
          this.element.find('[aria-describedby]').length ||
            this.uiDialog.attr({
              'aria-describedby': this.element.uniqueId().attr('id')
            })
      },
      _createTitlebar: function () {
        var t
        ;(this.uiDialogTitlebar = e('<div>')
          .addClass(
            'ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix'
          )
          .prependTo(this.uiDialog)),
          this._on(this.uiDialogTitlebar, {
            mousedown: function (t) {
              e(t.target).closest('.ui-dialog-titlebar-close') ||
                this.uiDialog.focus()
            }
          }),
          (this.uiDialogTitlebarClose = e('<button></button>')
            .button({
              label: this.options.closeText,
              icons: { primary: 'ui-icon-closethick' },
              text: !1
            })
            .addClass('ui-dialog-titlebar-close')
            .appendTo(this.uiDialogTitlebar)),
          this._on(this.uiDialogTitlebarClose, {
            click: function (e) {
              e.preventDefault(), this.close(e)
            }
          }),
          (t = e('<span>')
            .uniqueId()
            .addClass('ui-dialog-title')
            .prependTo(this.uiDialogTitlebar)),
          this._title(t),
          this.uiDialog.attr({ 'aria-labelledby': t.attr('id') })
      },
      _title: function (e) {
        this.options.title || e.html('&#160;'), e.text(this.options.title)
      },
      _createButtonPane: function () {
        ;(this.uiDialogButtonPane = e('<div>').addClass(
          'ui-dialog-buttonpane ui-widget-content ui-helper-clearfix'
        )),
          (this.uiButtonSet = e('<div>')
            .addClass('ui-dialog-buttonset')
            .appendTo(this.uiDialogButtonPane)),
          this._createButtons()
      },
      _createButtons: function () {
        var t = this,
          n = this.options.buttons
        return (
          this.uiDialogButtonPane.remove(),
          this.uiButtonSet.empty(),
          e.isEmptyObject(n) || (e.isArray(n) && !n.length)
            ? (this.uiDialog.removeClass('ui-dialog-buttons'), undefined)
            : (e.each(n, function (n, r) {
                var i, s
                ;(r = e.isFunction(r) ? { click: r, text: n } : r),
                  (r = e.extend({ type: 'button' }, r)),
                  (i = r.click),
                  (r.click = function () {
                    i.apply(t.element[0], arguments)
                  }),
                  (s = { icons: r.icons, text: r.showText }),
                  delete r.icons,
                  delete r.showText,
                  e('<button></button>', r).button(s).appendTo(t.uiButtonSet)
              }),
              this.uiDialog.addClass('ui-dialog-buttons'),
              this.uiDialogButtonPane.appendTo(this.uiDialog),
              undefined)
        )
      },
      _makeDraggable: function () {
        function t(e) {
          return { position: e.position, offset: e.offset }
        }
        var n = this,
          r = this.options
        this.uiDialog.draggable({
          cancel: '.ui-dialog-content, .ui-dialog-titlebar-close',
          handle: '.ui-dialog-titlebar',
          containment: 'document',
          start: function (r, s) {
            e(this).addClass('ui-dialog-dragging'),
              n._blockFrames(),
              n._trigger('dragStart', r, t(s))
          },
          drag: function (e, r) {
            n._trigger('drag', e, t(r))
          },
          stop: function (o, u) {
            ;(r.position = [
              u.position.left - n.document.scrollLeft(),
              u.position.top - n.document.scrollTop()
            ]),
              e(this).removeClass('ui-dialog-dragging'),
              n._unblockFrames(),
              n._trigger('dragStop', o, t(u))
          }
        })
      },
      _makeResizable: function () {
        function t(e) {
          return {
            originalPosition: e.originalPosition,
            originalSize: e.originalSize,
            position: e.position,
            size: e.size
          }
        }
        var n = this,
          r = this.options,
          i = r.resizable,
          s = this.uiDialog.css('position'),
          o = 'string' == typeof i ? i : 'n,e,s,w,se,sw,ne,nw'
        this.uiDialog
          .resizable({
            cancel: '.ui-dialog-content',
            containment: 'document',
            alsoResize: this.element,
            maxWidth: r.maxWidth,
            maxHeight: r.maxHeight,
            minWidth: r.minWidth,
            minHeight: this._minHeight(),
            handles: o,
            start: function (r, i) {
              e(this).addClass('ui-dialog-resizing'),
                n._blockFrames(),
                n._trigger('resizeStart', r, t(i))
            },
            resize: function (e, r) {
              n._trigger('resize', e, t(r))
            },
            stop: function (i, s) {
              ;(r.height = e(this).height()),
                (r.width = e(this).width()),
                e(this).removeClass('ui-dialog-resizing'),
                n._unblockFrames(),
                n._trigger('resizeStop', i, t(s))
            }
          })
          .css('position', s)
      },
      _minHeight: function () {
        var e = this.options
        return 'auto' === e.height
          ? e.minHeight
          : Math.min(e.minHeight, e.height)
      },
      _position: function () {
        var e = this.uiDialog.is(':visible')
        e || this.uiDialog.show(),
          this.uiDialog.position(this.options.position),
          e || this.uiDialog.hide()
      },
      _setOptions: function (r) {
        var s = this,
          o = !1,
          u = {}
        e.each(r, function (e, r) {
          s._setOption(e, r), e in t && (o = !0), e in n && (u[e] = r)
        }),
          o && (this._size(), this._position()),
          this.uiDialog.is(':data(ui-resizable)') &&
            this.uiDialog.resizable('option', u)
      },
      _setOption: function (e, t) {
        var n,
          r,
          i = this.uiDialog
        'dialogClass' === e &&
          i.removeClass(this.options.dialogClass).addClass(t),
          'disabled' !== e &&
            (this._super(e, t),
            'appendTo' === e && this.uiDialog.appendTo(this._appendTo()),
            'buttons' === e && this._createButtons(),
            'closeText' === e &&
              this.uiDialogTitlebarClose.button({ label: '' + t }),
            'draggable' === e &&
              ((n = i.is(':data(ui-draggable)')),
              n && !t && i.draggable('destroy'),
              !n && t && this._makeDraggable()),
            'position' === e && this._position(),
            'resizable' === e &&
              ((r = i.is(':data(ui-resizable)')),
              r && !t && i.resizable('destroy'),
              r && 'string' == typeof t && i.resizable('option', 'handles', t),
              r || t === !1 || this._makeResizable()),
            'title' === e &&
              this._title(this.uiDialogTitlebar.find('.ui-dialog-title')))
      },
      _size: function () {
        var e,
          t,
          n,
          r = this.options
        this.element
          .show()
          .css({ width: 'auto', minHeight: 0, maxHeight: 'none', height: 0 }),
          r.minWidth > r.width && (r.width = r.minWidth),
          (e = this.uiDialog
            .css({ height: 'auto', width: r.width })
            .outerHeight()),
          (t = Math.max(0, r.minHeight - e)),
          (n =
            'number' == typeof r.maxHeight
              ? Math.max(0, r.maxHeight - e)
              : 'none'),
          'auto' === r.height
            ? this.element.css({ minHeight: t, maxHeight: n, height: 'auto' })
            : this.element.height(Math.max(0, r.height - e)),
          this.uiDialog.is(':data(ui-resizable)') &&
            this.uiDialog.resizable('option', 'minHeight', this._minHeight())
      },
      _blockFrames: function () {
        this.iframeBlocks = this.document.find('iframe').map(function () {
          var t = e(this)
          return e('<div>')
            .css({
              position: 'absolute',
              width: t.outerWidth(),
              height: t.outerHeight()
            })
            .appendTo(t.parent())
            .offset(t.offset())[0]
        })
      },
      _unblockFrames: function () {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks)
      },
      _allowInteraction: function (t) {
        return e(t.target).closest('.ui-dialog').length
          ? !0
          : !!e(t.target).closest('.ui-datepicker').length
      },
      _createOverlay: function () {
        if (this.options.modal) {
          var t = this,
            n = this.widgetFullName
          e.ui.dialog.overlayInstances ||
            this._delay(function () {
              e.ui.dialog.overlayInstances &&
                this.document.bind('focusin.dialog', function (r) {
                  t._allowInteraction(r) ||
                    (r.preventDefault(),
                    e('.ui-dialog:visible:last .ui-dialog-content')
                      .data(n)
                      ._focusTabbable())
                })
            }),
            (this.overlay = e('<div>')
              .addClass('ui-widget-overlay ui-front')
              .appendTo(this._appendTo())),
            this._on(this.overlay, { mousedown: '_keepFocus' }),
            e.ui.dialog.overlayInstances++
        }
      },
      _destroyOverlay: function () {
        this.options.modal &&
          this.overlay &&
          (e.ui.dialog.overlayInstances--,
          e.ui.dialog.overlayInstances ||
            this.document.unbind('focusin.dialog'),
          this.overlay.remove(),
          (this.overlay = null))
      }
    }),
      (e.ui.dialog.overlayInstances = 0),
      e.uiBackCompat !== !1 &&
        e.widget('ui.dialog', e.ui.dialog, {
          _position: function () {
            var t,
              n = this.options.position,
              r = [],
              i = [0, 0]
            n
              ? (('string' == typeof n || ('object' == typeof n && '0' in n)) &&
                  ((r = n.split ? n.split(' ') : [n[0], n[1]]),
                  1 === r.length && (r[1] = r[0]),
                  e.each(['left', 'top'], function (e, t) {
                    ;+r[e] === r[e] && ((i[e] = r[e]), (r[e] = t))
                  }),
                  (n = {
                    my:
                      r[0] +
                      (0 > i[0] ? i[0] : '+' + i[0]) +
                      ' ' +
                      r[1] +
                      (0 > i[1] ? i[1] : '+' + i[1]),
                    at: r.join(' ')
                  })),
                (n = e.extend({}, e.ui.dialog.prototype.options.position, n)))
              : (n = e.ui.dialog.prototype.options.position),
              (t = this.uiDialog.is(':visible')),
              t || this.uiDialog.show(),
              this.uiDialog.position(n),
              t || this.uiDialog.hide()
          }
        })
  })(jQuery),
  (function (e) {
    var t = /up|down|vertical/,
      n = /up|left|vertical|horizontal/
    e.effects.effect.blind = function (r, s) {
      var o,
        u,
        a,
        f = e(this),
        l = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
        c = e.effects.setMode(f, r.mode || 'hide'),
        h = r.direction || 'up',
        p = t.test(h),
        d = p ? 'height' : 'width',
        v = p ? 'top' : 'left',
        m = n.test(h),
        g = {},
        y = 'show' === c
      f.parent().is('.ui-effects-wrapper')
        ? e.effects.save(f.parent(), l)
        : e.effects.save(f, l),
        f.show(),
        (o = e.effects.createWrapper(f).css({ overflow: 'hidden' })),
        (u = o[d]()),
        (a = parseFloat(o.css(v)) || 0),
        (g[d] = y ? u : 0),
        m ||
          (f
            .css(p ? 'bottom' : 'right', 0)
            .css(p ? 'top' : 'left', 'auto')
            .css({ position: 'absolute' }),
          (g[v] = y ? a : u + a)),
        y && (o.css(d, 0), m || o.css(v, a + u)),
        o.animate(g, {
          duration: r.duration,
          easing: r.easing,
          queue: !1,
          complete: function () {
            'hide' === c && f.hide(),
              e.effects.restore(f, l),
              e.effects.removeWrapper(f),
              s()
          }
        })
    }
  })(jQuery),
  (function (e) {
    e.effects.effect.bounce = function (n, r) {
      var i,
        s,
        o,
        u = e(this),
        a = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
        f = e.effects.setMode(u, n.mode || 'effect'),
        l = 'hide' === f,
        c = 'show' === f,
        h = n.direction || 'up',
        p = n.distance,
        d = n.times || 5,
        v = 2 * d + (c || l ? 1 : 0),
        m = n.duration / v,
        g = n.easing,
        y = 'up' === h || 'down' === h ? 'top' : 'left',
        b = 'up' === h || 'left' === h,
        w = u.queue(),
        E = w.length
      for (
        (c || l) && a.push('opacity'),
          e.effects.save(u, a),
          u.show(),
          e.effects.createWrapper(u),
          p || (p = u['top' === y ? 'outerHeight' : 'outerWidth']() / 3),
          c &&
            ((o = { opacity: 1 }),
            (o[y] = 0),
            u
              .css('opacity', 0)
              .css(y, b ? 2 * -p : 2 * p)
              .animate(o, m, g)),
          l && (p /= Math.pow(2, d - 1)),
          o = {},
          o[y] = 0,
          i = 0;
        d > i;
        i++
      )
        (s = {}),
          (s[y] = (b ? '-=' : '+=') + p),
          u.animate(s, m, g).animate(o, m, g),
          (p = l ? 2 * p : p / 2)
      l &&
        ((s = { opacity: 0 }),
        (s[y] = (b ? '-=' : '+=') + p),
        u.animate(s, m, g)),
        u.queue(function () {
          l && u.hide(),
            e.effects.restore(u, a),
            e.effects.removeWrapper(u),
            r()
        }),
        E > 1 && w.splice.apply(w, [1, 0].concat(w.splice(E, v + 1))),
        u.dequeue()
    }
  })(jQuery),
  (function (e) {
    e.effects.effect.clip = function (n, r) {
      var i,
        s,
        o,
        u = e(this),
        a = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
        f = e.effects.setMode(u, n.mode || 'hide'),
        l = 'show' === f,
        c = n.direction || 'vertical',
        h = 'vertical' === c,
        p = h ? 'height' : 'width',
        d = h ? 'top' : 'left',
        v = {}
      e.effects.save(u, a),
        u.show(),
        (i = e.effects.createWrapper(u).css({ overflow: 'hidden' })),
        (s = 'IMG' === u[0].tagName ? i : u),
        (o = s[p]()),
        l && (s.css(p, 0), s.css(d, o / 2)),
        (v[p] = l ? o : 0),
        (v[d] = l ? 0 : o / 2),
        s.animate(v, {
          queue: !1,
          duration: n.duration,
          easing: n.easing,
          complete: function () {
            l || u.hide(),
              e.effects.restore(u, a),
              e.effects.removeWrapper(u),
              r()
          }
        })
    }
  })(jQuery),
  (function (e) {
    e.effects.effect.drop = function (n, r) {
      var i,
        s = e(this),
        o = [
          'position',
          'top',
          'bottom',
          'left',
          'right',
          'opacity',
          'height',
          'width'
        ],
        u = e.effects.setMode(s, n.mode || 'hide'),
        a = 'show' === u,
        f = n.direction || 'left',
        l = 'up' === f || 'down' === f ? 'top' : 'left',
        c = 'up' === f || 'left' === f ? 'pos' : 'neg',
        h = { opacity: a ? 1 : 0 }
      e.effects.save(s, o),
        s.show(),
        e.effects.createWrapper(s),
        (i =
          n.distance || s['top' === l ? 'outerHeight' : 'outerWidth'](!0) / 2),
        a && s.css('opacity', 0).css(l, 'pos' === c ? -i : i),
        (h[l] =
          (a ? ('pos' === c ? '+=' : '-=') : 'pos' === c ? '-=' : '+=') + i),
        s.animate(h, {
          queue: !1,
          duration: n.duration,
          easing: n.easing,
          complete: function () {
            'hide' === u && s.hide(),
              e.effects.restore(s, o),
              e.effects.removeWrapper(s),
              r()
          }
        })
    }
  })(jQuery),
  (function (e) {
    e.effects.effect.explode = function (n, r) {
      function i() {
        w.push(this), w.length === h * p && s()
      }
      function s() {
        d.css({ visibility: 'visible' }), e(w).remove(), m || d.hide(), r()
      }
      var o,
        u,
        a,
        f,
        l,
        c,
        h = n.pieces ? Math.round(Math.sqrt(n.pieces)) : 3,
        p = h,
        d = e(this),
        v = e.effects.setMode(d, n.mode || 'hide'),
        m = 'show' === v,
        g = d.show().css('visibility', 'hidden').offset(),
        y = Math.ceil(d.outerWidth() / p),
        b = Math.ceil(d.outerHeight() / h),
        w = []
      for (o = 0; h > o; o++)
        for (f = g.top + o * b, c = o - (h - 1) / 2, u = 0; p > u; u++)
          (a = g.left + u * y),
            (l = u - (p - 1) / 2),
            d
              .clone()
              .appendTo('body')
              .wrap('<div></div>')
              .css({
                position: 'absolute',
                visibility: 'visible',
                left: -u * y,
                top: -o * b
              })
              .parent()
              .addClass('ui-effects-explode')
              .css({
                position: 'absolute',
                overflow: 'hidden',
                width: y,
                height: b,
                left: a + (m ? l * y : 0),
                top: f + (m ? c * b : 0),
                opacity: m ? 0 : 1
              })
              .animate(
                {
                  left: a + (m ? 0 : l * y),
                  top: f + (m ? 0 : c * b),
                  opacity: m ? 1 : 0
                },
                n.duration || 500,
                n.easing,
                i
              )
    }
  })(jQuery),
  (function (e) {
    e.effects.effect.fade = function (n, r) {
      var i = e(this),
        s = e.effects.setMode(i, n.mode || 'toggle')
      i.animate(
        { opacity: s },
        { queue: !1, duration: n.duration, easing: n.easing, complete: r }
      )
    }
  })(jQuery),
  (function (e) {
    e.effects.effect.fold = function (n, r) {
      var i,
        s,
        o = e(this),
        u = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
        a = e.effects.setMode(o, n.mode || 'hide'),
        f = 'show' === a,
        l = 'hide' === a,
        c = n.size || 15,
        h = /([0-9]+)%/.exec(c),
        p = !!n.horizFirst,
        d = f !== p,
        v = d ? ['width', 'height'] : ['height', 'width'],
        m = n.duration / 2,
        g = {},
        y = {}
      e.effects.save(o, u),
        o.show(),
        (i = e.effects.createWrapper(o).css({ overflow: 'hidden' })),
        (s = d ? [i.width(), i.height()] : [i.height(), i.width()]),
        h && (c = (parseInt(h[1], 10) / 100) * s[l ? 0 : 1]),
        f && i.css(p ? { height: 0, width: c } : { height: c, width: 0 }),
        (g[v[0]] = f ? s[0] : c),
        (y[v[1]] = f ? s[1] : 0),
        i.animate(g, m, n.easing).animate(y, m, n.easing, function () {
          l && o.hide(),
            e.effects.restore(o, u),
            e.effects.removeWrapper(o),
            r()
        })
    }
  })(jQuery),
  (function (e) {
    e.effects.effect.highlight = function (n, r) {
      var i = e(this),
        s = ['backgroundImage', 'backgroundColor', 'opacity'],
        o = e.effects.setMode(i, n.mode || 'show'),
        u = { backgroundColor: i.css('backgroundColor') }
      'hide' === o && (u.opacity = 0),
        e.effects.save(i, s),
        i
          .show()
          .css({
            backgroundImage: 'none',
            backgroundColor: n.color || '#ffff99'
          })
          .animate(u, {
            queue: !1,
            duration: n.duration,
            easing: n.easing,
            complete: function () {
              'hide' === o && i.hide(), e.effects.restore(i, s), r()
            }
          })
    }
  })(jQuery),
  (function (e) {
    e.effects.effect.pulsate = function (n, r) {
      var i,
        s = e(this),
        o = e.effects.setMode(s, n.mode || 'show'),
        u = 'show' === o,
        a = 'hide' === o,
        f = u || 'hide' === o,
        l = 2 * (n.times || 5) + (f ? 1 : 0),
        c = n.duration / l,
        h = 0,
        p = s.queue(),
        d = p.length
      for (
        (u || !s.is(':visible')) && (s.css('opacity', 0).show(), (h = 1)),
          i = 1;
        l > i;
        i++
      )
        s.animate({ opacity: h }, c, n.easing), (h = 1 - h)
      s.animate({ opacity: h }, c, n.easing),
        s.queue(function () {
          a && s.hide(), r()
        }),
        d > 1 && p.splice.apply(p, [1, 0].concat(p.splice(d, l + 1))),
        s.dequeue()
    }
  })(jQuery),
  (function (e) {
    ;(e.effects.effect.puff = function (n, r) {
      var i = e(this),
        s = e.effects.setMode(i, n.mode || 'hide'),
        o = 'hide' === s,
        u = parseInt(n.percent, 10) || 150,
        a = u / 100,
        f = {
          height: i.height(),
          width: i.width(),
          outerHeight: i.outerHeight(),
          outerWidth: i.outerWidth()
        }
      e.extend(n, {
        effect: 'scale',
        queue: !1,
        fade: !0,
        mode: s,
        complete: r,
        percent: o ? u : 100,
        from: o
          ? f
          : {
              height: f.height * a,
              width: f.width * a,
              outerHeight: f.outerHeight * a,
              outerWidth: f.outerWidth * a
            }
      }),
        i.effect(n)
    }),
      (e.effects.effect.scale = function (n, r) {
        var i = e(this),
          s = e.extend(!0, {}, n),
          o = e.effects.setMode(i, n.mode || 'effect'),
          u =
            parseInt(n.percent, 10) ||
            (0 === parseInt(n.percent, 10) ? 0 : 'hide' === o ? 0 : 100),
          a = n.direction || 'both',
          f = n.origin,
          l = {
            height: i.height(),
            width: i.width(),
            outerHeight: i.outerHeight(),
            outerWidth: i.outerWidth()
          },
          c = {
            y: 'horizontal' !== a ? u / 100 : 1,
            x: 'vertical' !== a ? u / 100 : 1
          }
        ;(s.effect = 'size'),
          (s.queue = !1),
          (s.complete = r),
          'effect' !== o &&
            ((s.origin = f || ['middle', 'center']), (s.restore = !0)),
          (s.from =
            n.from ||
            ('show' === o
              ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }
              : l)),
          (s.to = {
            height: l.height * c.y,
            width: l.width * c.x,
            outerHeight: l.outerHeight * c.y,
            outerWidth: l.outerWidth * c.x
          }),
          s.fade &&
            ('show' === o && ((s.from.opacity = 0), (s.to.opacity = 1)),
            'hide' === o && ((s.from.opacity = 1), (s.to.opacity = 0))),
          i.effect(s)
      }),
      (e.effects.effect.size = function (n, r) {
        var i,
          s,
          o,
          u = e(this),
          a = [
            'position',
            'top',
            'bottom',
            'left',
            'right',
            'width',
            'height',
            'overflow',
            'opacity'
          ],
          f = [
            'position',
            'top',
            'bottom',
            'left',
            'right',
            'overflow',
            'opacity'
          ],
          l = ['width', 'height', 'overflow'],
          c = ['fontSize'],
          h = [
            'borderTopWidth',
            'borderBottomWidth',
            'paddingTop',
            'paddingBottom'
          ],
          p = [
            'borderLeftWidth',
            'borderRightWidth',
            'paddingLeft',
            'paddingRight'
          ],
          d = e.effects.setMode(u, n.mode || 'effect'),
          v = n.restore || 'effect' !== d,
          m = n.scale || 'both',
          g = n.origin || ['middle', 'center'],
          y = u.css('position'),
          b = v ? a : f,
          w = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }
        'show' === d && u.show(),
          (i = {
            height: u.height(),
            width: u.width(),
            outerHeight: u.outerHeight(),
            outerWidth: u.outerWidth()
          }),
          'toggle' === n.mode && 'show' === d
            ? ((u.from = n.to || w), (u.to = n.from || i))
            : ((u.from = n.from || ('show' === d ? w : i)),
              (u.to = n.to || ('hide' === d ? w : i))),
          (o = {
            from: { y: u.from.height / i.height, x: u.from.width / i.width },
            to: { y: u.to.height / i.height, x: u.to.width / i.width }
          }),
          ('box' === m || 'both' === m) &&
            (o.from.y !== o.to.y &&
              ((b = b.concat(h)),
              (u.from = e.effects.setTransition(u, h, o.from.y, u.from)),
              (u.to = e.effects.setTransition(u, h, o.to.y, u.to))),
            o.from.x !== o.to.x &&
              ((b = b.concat(p)),
              (u.from = e.effects.setTransition(u, p, o.from.x, u.from)),
              (u.to = e.effects.setTransition(u, p, o.to.x, u.to)))),
          ('content' === m || 'both' === m) &&
            o.from.y !== o.to.y &&
            ((b = b.concat(c).concat(l)),
            (u.from = e.effects.setTransition(u, c, o.from.y, u.from)),
            (u.to = e.effects.setTransition(u, c, o.to.y, u.to))),
          e.effects.save(u, b),
          u.show(),
          e.effects.createWrapper(u),
          u.css('overflow', 'hidden').css(u.from),
          g &&
            ((s = e.effects.getBaseline(g, i)),
            (u.from.top = (i.outerHeight - u.outerHeight()) * s.y),
            (u.from.left = (i.outerWidth - u.outerWidth()) * s.x),
            (u.to.top = (i.outerHeight - u.to.outerHeight) * s.y),
            (u.to.left = (i.outerWidth - u.to.outerWidth) * s.x)),
          u.css(u.from),
          ('content' === m || 'both' === m) &&
            ((h = h.concat(['marginTop', 'marginBottom']).concat(c)),
            (p = p.concat(['marginLeft', 'marginRight'])),
            (l = a.concat(h).concat(p)),
            u.find('*[width]').each(function () {
              var r = e(this),
                i = {
                  height: r.height(),
                  width: r.width(),
                  outerHeight: r.outerHeight(),
                  outerWidth: r.outerWidth()
                }
              v && e.effects.save(r, l),
                (r.from = {
                  height: i.height * o.from.y,
                  width: i.width * o.from.x,
                  outerHeight: i.outerHeight * o.from.y,
                  outerWidth: i.outerWidth * o.from.x
                }),
                (r.to = {
                  height: i.height * o.to.y,
                  width: i.width * o.to.x,
                  outerHeight: i.height * o.to.y,
                  outerWidth: i.width * o.to.x
                }),
                o.from.y !== o.to.y &&
                  ((r.from = e.effects.setTransition(r, h, o.from.y, r.from)),
                  (r.to = e.effects.setTransition(r, h, o.to.y, r.to))),
                o.from.x !== o.to.x &&
                  ((r.from = e.effects.setTransition(r, p, o.from.x, r.from)),
                  (r.to = e.effects.setTransition(r, p, o.to.x, r.to))),
                r.css(r.from),
                r.animate(r.to, n.duration, n.easing, function () {
                  v && e.effects.restore(r, l)
                })
            })),
          u.animate(u.to, {
            queue: !1,
            duration: n.duration,
            easing: n.easing,
            complete: function () {
              0 === u.to.opacity && u.css('opacity', u.from.opacity),
                'hide' === d && u.hide(),
                e.effects.restore(u, b),
                v ||
                  ('static' === y
                    ? u.css({
                        position: 'relative',
                        top: u.to.top,
                        left: u.to.left
                      })
                    : e.each(['top', 'left'], function (e, t) {
                        u.css(t, function (t, n) {
                          var r = parseInt(n, 10),
                            i = e ? u.to.left : u.to.top
                          return 'auto' === n ? i + 'px' : r + i + 'px'
                        })
                      })),
                e.effects.removeWrapper(u),
                r()
            }
          })
      })
  })(jQuery),
  (function (e) {
    e.effects.effect.shake = function (n, r) {
      var i,
        s = e(this),
        o = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
        u = e.effects.setMode(s, n.mode || 'effect'),
        a = n.direction || 'left',
        f = n.distance || 20,
        l = n.times || 3,
        c = 2 * l + 1,
        h = Math.round(n.duration / c),
        p = 'up' === a || 'down' === a ? 'top' : 'left',
        d = 'up' === a || 'left' === a,
        v = {},
        m = {},
        g = {},
        y = s.queue(),
        b = y.length
      for (
        e.effects.save(s, o),
          s.show(),
          e.effects.createWrapper(s),
          v[p] = (d ? '-=' : '+=') + f,
          m[p] = (d ? '+=' : '-=') + 2 * f,
          g[p] = (d ? '-=' : '+=') + 2 * f,
          s.animate(v, h, n.easing),
          i = 1;
        l > i;
        i++
      )
        s.animate(m, h, n.easing).animate(g, h, n.easing)
      s
        .animate(m, h, n.easing)
        .animate(v, h / 2, n.easing)
        .queue(function () {
          'hide' === u && s.hide(),
            e.effects.restore(s, o),
            e.effects.removeWrapper(s),
            r()
        }),
        b > 1 && y.splice.apply(y, [1, 0].concat(y.splice(b, c + 1))),
        s.dequeue()
    }
  })(jQuery),
  (function (e) {
    e.effects.effect.slide = function (n, r) {
      var i,
        s = e(this),
        o = ['position', 'top', 'bottom', 'left', 'right', 'width', 'height'],
        u = e.effects.setMode(s, n.mode || 'show'),
        a = 'show' === u,
        f = n.direction || 'left',
        l = 'up' === f || 'down' === f ? 'top' : 'left',
        c = 'up' === f || 'left' === f,
        h = {}
      e.effects.save(s, o),
        s.show(),
        (i = n.distance || s['top' === l ? 'outerHeight' : 'outerWidth'](!0)),
        e.effects.createWrapper(s).css({ overflow: 'hidden' }),
        a && s.css(l, c ? (isNaN(i) ? '-' + i : -i) : i),
        (h[l] = (a ? (c ? '+=' : '-=') : c ? '-=' : '+=') + i),
        s.animate(h, {
          queue: !1,
          duration: n.duration,
          easing: n.easing,
          complete: function () {
            'hide' === u && s.hide(),
              e.effects.restore(s, o),
              e.effects.removeWrapper(s),
              r()
          }
        })
    }
  })(jQuery),
  (function (e) {
    e.effects.effect.transfer = function (n, r) {
      var i = e(this),
        s = e(n.to),
        o = 'fixed' === s.css('position'),
        u = e('body'),
        a = o ? u.scrollTop() : 0,
        f = o ? u.scrollLeft() : 0,
        l = s.offset(),
        c = {
          top: l.top - a,
          left: l.left - f,
          height: s.innerHeight(),
          width: s.innerWidth()
        },
        h = i.offset(),
        p = e("<div class='ui-effects-transfer'></div>")
          .appendTo(document.body)
          .addClass(n.className)
          .css({
            top: h.top - a,
            left: h.left - f,
            height: i.innerHeight(),
            width: i.innerWidth(),
            position: o ? 'fixed' : 'absolute'
          })
          .animate(c, n.duration, n.easing, function () {
            p.remove(), r()
          })
    }
  })(jQuery),
  (function (e) {
    e.widget('ui.menu', {
      version: '1.10.3',
      defaultElement: '<ul>',
      delay: 300,
      options: {
        icons: { submenu: 'ui-icon-carat-1-e' },
        menus: 'ul',
        position: { my: 'left top', at: 'right top' },
        role: 'menu',
        blur: null,
        focus: null,
        select: null
      },
      _create: function () {
        ;(this.activeMenu = this.element),
          (this.mouseHandled = !1),
          this.element
            .uniqueId()
            .addClass('ui-menu ui-widget ui-widget-content ui-corner-all')
            .toggleClass(
              'ui-menu-icons',
              !!this.element.find('.ui-icon').length
            )
            .attr({ role: this.options.role, tabIndex: 0 })
            .bind(
              'click' + this.eventNamespace,
              e.proxy(function (e) {
                this.options.disabled && e.preventDefault()
              }, this)
            ),
          this.options.disabled &&
            this.element
              .addClass('ui-state-disabled')
              .attr('aria-disabled', 'true'),
          this._on({
            'mousedown .ui-menu-item > a': function (e) {
              e.preventDefault()
            },
            'click .ui-state-disabled > a': function (e) {
              e.preventDefault()
            },
            'click .ui-menu-item:has(a)': function (n) {
              var r = e(n.target).closest('.ui-menu-item')
              !this.mouseHandled &&
                r.not('.ui-state-disabled').length &&
                ((this.mouseHandled = !0),
                this.select(n),
                r.has('.ui-menu').length
                  ? this.expand(n)
                  : this.element.is(':focus') ||
                    (this.element.trigger('focus', [!0]),
                    this.active &&
                      1 === this.active.parents('.ui-menu').length &&
                      clearTimeout(this.timer)))
            },
            'mouseenter .ui-menu-item': function (n) {
              var r = e(n.currentTarget)
              r
                .siblings()
                .children('.ui-state-active')
                .removeClass('ui-state-active'),
                this.focus(n, r)
            },
            mouseleave: 'collapseAll',
            'mouseleave .ui-menu': 'collapseAll',
            focus: function (e, t) {
              var n =
                this.active || this.element.children('.ui-menu-item').eq(0)
              t || this.focus(e, n)
            },
            blur: function (n) {
              this._delay(function () {
                e.contains(this.element[0], this.document[0].activeElement) ||
                  this.collapseAll(n)
              })
            },
            keydown: '_keydown'
          }),
          this.refresh(),
          this._on(this.document, {
            click: function (n) {
              e(n.target).closest('.ui-menu').length || this.collapseAll(n),
                (this.mouseHandled = !1)
            }
          })
      },
      _destroy: function () {
        this.element
          .removeAttr('aria-activedescendant')
          .find('.ui-menu')
          .addBack()
          .removeClass(
            'ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons'
          )
          .removeAttr('role')
          .removeAttr('tabIndex')
          .removeAttr('aria-labelledby')
          .removeAttr('aria-expanded')
          .removeAttr('aria-hidden')
          .removeAttr('aria-disabled')
          .removeUniqueId()
          .show(),
          this.element
            .find('.ui-menu-item')
            .removeClass('ui-menu-item')
            .removeAttr('role')
            .removeAttr('aria-disabled')
            .children('a')
            .removeUniqueId()
            .removeClass('ui-corner-all ui-state-hover')
            .removeAttr('tabIndex')
            .removeAttr('role')
            .removeAttr('aria-haspopup')
            .children()
            .each(function () {
              var n = e(this)
              n.data('ui-menu-submenu-carat') && n.remove()
            }),
          this.element
            .find('.ui-menu-divider')
            .removeClass('ui-menu-divider ui-widget-content')
      },
      _keydown: function (n) {
        function r(e) {
          return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
        }
        var i,
          s,
          o,
          u,
          a,
          f = !0
        switch (n.keyCode) {
          case e.ui.keyCode.PAGE_UP:
            this.previousPage(n)
            break
          case e.ui.keyCode.PAGE_DOWN:
            this.nextPage(n)
            break
          case e.ui.keyCode.HOME:
            this._move('first', 'first', n)
            break
          case e.ui.keyCode.END:
            this._move('last', 'last', n)
            break
          case e.ui.keyCode.UP:
            this.previous(n)
            break
          case e.ui.keyCode.DOWN:
            this.next(n)
            break
          case e.ui.keyCode.LEFT:
            this.collapse(n)
            break
          case e.ui.keyCode.RIGHT:
            this.active &&
              !this.active.is('.ui-state-disabled') &&
              this.expand(n)
            break
          case e.ui.keyCode.ENTER:
          case e.ui.keyCode.SPACE:
            this._activate(n)
            break
          case e.ui.keyCode.ESCAPE:
            this.collapse(n)
            break
          default:
            ;(f = !1),
              (s = this.previousFilter || ''),
              (o = String.fromCharCode(n.keyCode)),
              (u = !1),
              clearTimeout(this.filterTimer),
              o === s ? (u = !0) : (o = s + o),
              (a = RegExp('^' + r(o), 'i')),
              (i = this.activeMenu
                .children('.ui-menu-item')
                .filter(function () {
                  return a.test(e(this).children('a').text())
                })),
              (i =
                u && -1 !== i.index(this.active.next())
                  ? this.active.nextAll('.ui-menu-item')
                  : i),
              i.length ||
                ((o = String.fromCharCode(n.keyCode)),
                (a = RegExp('^' + r(o), 'i')),
                (i = this.activeMenu
                  .children('.ui-menu-item')
                  .filter(function () {
                    return a.test(e(this).children('a').text())
                  }))),
              i.length
                ? (this.focus(n, i),
                  i.length > 1
                    ? ((this.previousFilter = o),
                      (this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                      }, 1e3)))
                    : delete this.previousFilter)
                : delete this.previousFilter
        }
        f && n.preventDefault()
      },
      _activate: function (e) {
        this.active.is('.ui-state-disabled') ||
          (this.active.children("a[aria-haspopup='true']").length
            ? this.expand(e)
            : this.select(e))
      },
      refresh: function () {
        var n,
          r = this.options.icons.submenu,
          i = this.element.find(this.options.menus)
        i
          .filter(':not(.ui-menu)')
          .addClass('ui-menu ui-widget ui-widget-content ui-corner-all')
          .hide()
          .attr({
            role: this.options.role,
            'aria-hidden': 'true',
            'aria-expanded': 'false'
          })
          .each(function () {
            var n = e(this),
              i = n.prev('a'),
              s = e('<span>')
                .addClass('ui-menu-icon ui-icon ' + r)
                .data('ui-menu-submenu-carat', !0)
            i.attr('aria-haspopup', 'true').prepend(s),
              n.attr('aria-labelledby', i.attr('id'))
          }),
          (n = i.add(this.element)),
          n
            .children(':not(.ui-menu-item):has(a)')
            .addClass('ui-menu-item')
            .attr('role', 'presentation')
            .children('a')
            .uniqueId()
            .addClass('ui-corner-all')
            .attr({ tabIndex: -1, role: this._itemRole() }),
          n.children(':not(.ui-menu-item)').each(function () {
            var n = e(this)
            ;/[^\-\u2014\u2013\s]/.test(n.text()) ||
              n.addClass('ui-widget-content ui-menu-divider')
          }),
          n.children('.ui-state-disabled').attr('aria-disabled', 'true'),
          this.active &&
            !e.contains(this.element[0], this.active[0]) &&
            this.blur()
      },
      _itemRole: function () {
        return { menu: 'menuitem', listbox: 'option' }[this.options.role]
      },
      _setOption: function (e, t) {
        'icons' === e &&
          this.element
            .find('.ui-menu-icon')
            .removeClass(this.options.icons.submenu)
            .addClass(t.submenu),
          this._super(e, t)
      },
      focus: function (e, t) {
        var n, r
        this.blur(e, e && 'focus' === e.type),
          this._scrollIntoView(t),
          (this.active = t.first()),
          (r = this.active.children('a').addClass('ui-state-focus')),
          this.options.role &&
            this.element.attr('aria-activedescendant', r.attr('id')),
          this.active
            .parent()
            .closest('.ui-menu-item')
            .children('a:first')
            .addClass('ui-state-active'),
          e && 'keydown' === e.type
            ? this._close()
            : (this.timer = this._delay(function () {
                this._close()
              }, this.delay)),
          (n = t.children('.ui-menu')),
          n.length && /^mouse/.test(e.type) && this._startOpening(n),
          (this.activeMenu = t.parent()),
          this._trigger('focus', e, { item: t })
      },
      _scrollIntoView: function (n) {
        var r, i, s, o, u, a
        this._hasScroll() &&
          ((r = parseFloat(e.css(this.activeMenu[0], 'borderTopWidth')) || 0),
          (i = parseFloat(e.css(this.activeMenu[0], 'paddingTop')) || 0),
          (s = n.offset().top - this.activeMenu.offset().top - r - i),
          (o = this.activeMenu.scrollTop()),
          (u = this.activeMenu.height()),
          (a = n.height()),
          0 > s
            ? this.activeMenu.scrollTop(o + s)
            : s + a > u && this.activeMenu.scrollTop(o + s - u + a))
      },
      blur: function (e, t) {
        t || clearTimeout(this.timer),
          this.active &&
            (this.active.children('a').removeClass('ui-state-focus'),
            (this.active = null),
            this._trigger('blur', e, { item: this.active }))
      },
      _startOpening: function (e) {
        clearTimeout(this.timer),
          'true' === e.attr('aria-hidden') &&
            (this.timer = this._delay(function () {
              this._close(), this._open(e)
            }, this.delay))
      },
      _open: function (n) {
        var r = e.extend({ of: this.active }, this.options.position)
        clearTimeout(this.timer),
          this.element
            .find('.ui-menu')
            .not(n.parents('.ui-menu'))
            .hide()
            .attr('aria-hidden', 'true'),
          n
            .show()
            .removeAttr('aria-hidden')
            .attr('aria-expanded', 'true')
            .position(r)
      },
      collapseAll: function (n, r) {
        clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            var s = r
              ? this.element
              : e(n && n.target).closest(this.element.find('.ui-menu'))
            s.length || (s = this.element),
              this._close(s),
              this.blur(n),
              (this.activeMenu = s)
          }, this.delay))
      },
      _close: function (e) {
        e || (e = this.active ? this.active.parent() : this.element),
          e
            .find('.ui-menu')
            .hide()
            .attr('aria-hidden', 'true')
            .attr('aria-expanded', 'false')
            .end()
            .find('a.ui-state-active')
            .removeClass('ui-state-active')
      },
      collapse: function (e) {
        var t =
          this.active &&
          this.active.parent().closest('.ui-menu-item', this.element)
        t && t.length && (this._close(), this.focus(e, t))
      },
      expand: function (e) {
        var t =
          this.active &&
          this.active.children('.ui-menu ').children('.ui-menu-item').first()
        t &&
          t.length &&
          (this._open(t.parent()),
          this._delay(function () {
            this.focus(e, t)
          }))
      },
      next: function (e) {
        this._move('next', 'first', e)
      },
      previous: function (e) {
        this._move('prev', 'last', e)
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll('.ui-menu-item').length
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll('.ui-menu-item').length
      },
      _move: function (e, t, n) {
        var r
        this.active &&
          (r =
            'first' === e || 'last' === e
              ? this.active['first' === e ? 'prevAll' : 'nextAll'](
                  '.ui-menu-item'
                ).eq(-1)
              : this.active[e + 'All']('.ui-menu-item').eq(0)),
          (r && r.length && this.active) ||
            (r = this.activeMenu.children('.ui-menu-item')[t]()),
          this.focus(n, r)
      },
      nextPage: function (n) {
        var r, i, s
        return this.active
          ? (this.isLastItem() ||
              (this._hasScroll()
                ? ((i = this.active.offset().top),
                  (s = this.element.height()),
                  this.active.nextAll('.ui-menu-item').each(function () {
                    return (r = e(this)), 0 > r.offset().top - i - s
                  }),
                  this.focus(n, r))
                : this.focus(
                    n,
                    this.activeMenu
                      .children('.ui-menu-item')
                      [this.active ? 'last' : 'first']()
                  )),
            undefined)
          : (this.next(n), undefined)
      },
      previousPage: function (n) {
        var r, i, s
        return this.active
          ? (this.isFirstItem() ||
              (this._hasScroll()
                ? ((i = this.active.offset().top),
                  (s = this.element.height()),
                  this.active.prevAll('.ui-menu-item').each(function () {
                    return (r = e(this)), r.offset().top - i + s > 0
                  }),
                  this.focus(n, r))
                : this.focus(
                    n,
                    this.activeMenu.children('.ui-menu-item').first()
                  )),
            undefined)
          : (this.next(n), undefined)
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop('scrollHeight')
      },
      select: function (n) {
        this.active = this.active || e(n.target).closest('.ui-menu-item')
        var r = { item: this.active }
        this.active.has('.ui-menu').length || this.collapseAll(n, !0),
          this._trigger('select', n, r)
      }
    })
  })(jQuery),
  (function (e, t) {
    function n(e, t, n) {
      return [
        parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1),
        parseFloat(e[1]) * (p.test(e[1]) ? n / 100 : 1)
      ]
    }
    function r(t, n) {
      return parseInt(e.css(t, n), 10) || 0
    }
    function i(t) {
      var n = t[0]
      return 9 === n.nodeType
        ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } }
        : e.isWindow(n)
        ? {
            width: t.width(),
            height: t.height(),
            offset: { top: t.scrollTop(), left: t.scrollLeft() }
          }
        : n.preventDefault
        ? { width: 0, height: 0, offset: { top: n.pageY, left: n.pageX } }
        : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() }
    }
    e.ui = e.ui || {}
    var s,
      o = Math.max,
      u = Math.abs,
      a = Math.round,
      f = /left|center|right/,
      l = /top|center|bottom/,
      c = /[\+\-]\d+(\.[\d]+)?%?/,
      h = /^\w+/,
      p = /%$/,
      d = e.fn.position
    ;(e.position = {
      scrollbarWidth: function () {
        if (s !== t) return s
        var n,
          r,
          i = e(
            "<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
          ),
          o = i.children()[0]
        return (
          e('body').append(i),
          (n = o.offsetWidth),
          i.css('overflow', 'scroll'),
          (r = o.offsetWidth),
          n === r && (r = i[0].clientWidth),
          i.remove(),
          (s = n - r)
        )
      },
      getScrollInfo: function (t) {
        var n = t.isWindow ? '' : t.element.css('overflow-x'),
          r = t.isWindow ? '' : t.element.css('overflow-y'),
          i =
            'scroll' === n ||
            ('auto' === n && t.width < t.element[0].scrollWidth),
          s =
            'scroll' === r ||
            ('auto' === r && t.height < t.element[0].scrollHeight)
        return {
          width: s ? e.position.scrollbarWidth() : 0,
          height: i ? e.position.scrollbarWidth() : 0
        }
      },
      getWithinInfo: function (t) {
        var n = e(t || window),
          r = e.isWindow(n[0])
        return {
          element: n,
          isWindow: r,
          offset: n.offset() || { left: 0, top: 0 },
          scrollLeft: n.scrollLeft(),
          scrollTop: n.scrollTop(),
          width: r ? n.width() : n.outerWidth(),
          height: r ? n.height() : n.outerHeight()
        }
      }
    }),
      (e.fn.position = function (t) {
        if (!t || !t.of) return d.apply(this, arguments)
        t = e.extend({}, t)
        var s,
          p,
          v,
          m,
          g,
          y,
          b = e(t.of),
          w = e.position.getWithinInfo(t.within),
          E = e.position.getScrollInfo(w),
          S = (t.collision || 'flip').split(' '),
          x = {}
        return (
          (y = i(b)),
          b[0].preventDefault && (t.at = 'left top'),
          (p = y.width),
          (v = y.height),
          (m = y.offset),
          (g = e.extend({}, m)),
          e.each(['my', 'at'], function () {
            var e,
              n,
              r = (t[this] || '').split(' ')
            1 === r.length &&
              (r = f.test(r[0])
                ? r.concat(['center'])
                : l.test(r[0])
                ? ['center'].concat(r)
                : ['center', 'center']),
              (r[0] = f.test(r[0]) ? r[0] : 'center'),
              (r[1] = l.test(r[1]) ? r[1] : 'center'),
              (e = c.exec(r[0])),
              (n = c.exec(r[1])),
              (x[this] = [e ? e[0] : 0, n ? n[0] : 0]),
              (t[this] = [h.exec(r[0])[0], h.exec(r[1])[0]])
          }),
          1 === S.length && (S[1] = S[0]),
          'right' === t.at[0]
            ? (g.left += p)
            : 'center' === t.at[0] && (g.left += p / 2),
          'bottom' === t.at[1]
            ? (g.top += v)
            : 'center' === t.at[1] && (g.top += v / 2),
          (s = n(x.at, p, v)),
          (g.left += s[0]),
          (g.top += s[1]),
          this.each(function () {
            var i,
              f,
              l = e(this),
              c = l.outerWidth(),
              h = l.outerHeight(),
              d = r(this, 'marginLeft'),
              y = r(this, 'marginTop'),
              T = c + d + r(this, 'marginRight') + E.width,
              N = h + y + r(this, 'marginBottom') + E.height,
              C = e.extend({}, g),
              L = n(x.my, l.outerWidth(), l.outerHeight())
            'right' === t.my[0]
              ? (C.left -= c)
              : 'center' === t.my[0] && (C.left -= c / 2),
              'bottom' === t.my[1]
                ? (C.top -= h)
                : 'center' === t.my[1] && (C.top -= h / 2),
              (C.left += L[0]),
              (C.top += L[1]),
              e.support.offsetFractions ||
                ((C.left = a(C.left)), (C.top = a(C.top))),
              (i = { marginLeft: d, marginTop: y }),
              e.each(['left', 'top'], function (n, r) {
                e.ui.position[S[n]] &&
                  e.ui.position[S[n]][r](C, {
                    targetWidth: p,
                    targetHeight: v,
                    elemWidth: c,
                    elemHeight: h,
                    collisionPosition: i,
                    collisionWidth: T,
                    collisionHeight: N,
                    offset: [s[0] + L[0], s[1] + L[1]],
                    my: t.my,
                    at: t.at,
                    within: w,
                    elem: l
                  })
              }),
              t.using &&
                (f = function (e) {
                  var n = m.left - C.left,
                    r = n + p - c,
                    i = m.top - C.top,
                    s = i + v - h,
                    a = {
                      target: {
                        element: b,
                        left: m.left,
                        top: m.top,
                        width: p,
                        height: v
                      },
                      element: {
                        element: l,
                        left: C.left,
                        top: C.top,
                        width: c,
                        height: h
                      },
                      horizontal: 0 > r ? 'left' : n > 0 ? 'right' : 'center',
                      vertical: 0 > s ? 'top' : i > 0 ? 'bottom' : 'middle'
                    }
                  c > p && p > u(n + r) && (a.horizontal = 'center'),
                    h > v && v > u(i + s) && (a.vertical = 'middle'),
                    (a.important =
                      o(u(n), u(r)) > o(u(i), u(s))
                        ? 'horizontal'
                        : 'vertical'),
                    t.using.call(this, e, a)
                }),
              l.offset(e.extend(C, { using: f }))
          })
        )
      }),
      (e.ui.position = {
        fit: {
          left: function (e, t) {
            var n,
              r = t.within,
              i = r.isWindow ? r.scrollLeft : r.offset.left,
              s = r.width,
              u = e.left - t.collisionPosition.marginLeft,
              a = i - u,
              f = u + t.collisionWidth - s - i
            t.collisionWidth > s
              ? a > 0 && 0 >= f
                ? ((n = e.left + a + t.collisionWidth - s - i),
                  (e.left += a - n))
                : (e.left =
                    f > 0 && 0 >= a ? i : a > f ? i + s - t.collisionWidth : i)
              : a > 0
              ? (e.left += a)
              : f > 0
              ? (e.left -= f)
              : (e.left = o(e.left - u, e.left))
          },
          top: function (e, t) {
            var n,
              r = t.within,
              i = r.isWindow ? r.scrollTop : r.offset.top,
              s = t.within.height,
              u = e.top - t.collisionPosition.marginTop,
              a = i - u,
              f = u + t.collisionHeight - s - i
            t.collisionHeight > s
              ? a > 0 && 0 >= f
                ? ((n = e.top + a + t.collisionHeight - s - i),
                  (e.top += a - n))
                : (e.top =
                    f > 0 && 0 >= a ? i : a > f ? i + s - t.collisionHeight : i)
              : a > 0
              ? (e.top += a)
              : f > 0
              ? (e.top -= f)
              : (e.top = o(e.top - u, e.top))
          }
        },
        flip: {
          left: function (e, t) {
            var n,
              r,
              i = t.within,
              s = i.offset.left + i.scrollLeft,
              o = i.width,
              a = i.isWindow ? i.scrollLeft : i.offset.left,
              f = e.left - t.collisionPosition.marginLeft,
              l = f - a,
              c = f + t.collisionWidth - o - a,
              h =
                'left' === t.my[0]
                  ? -t.elemWidth
                  : 'right' === t.my[0]
                  ? t.elemWidth
                  : 0,
              p =
                'left' === t.at[0]
                  ? t.targetWidth
                  : 'right' === t.at[0]
                  ? -t.targetWidth
                  : 0,
              d = -2 * t.offset[0]
            0 > l
              ? ((n = e.left + h + p + d + t.collisionWidth - o - s),
                (0 > n || u(l) > n) && (e.left += h + p + d))
              : c > 0 &&
                ((r = e.left - t.collisionPosition.marginLeft + h + p + d - a),
                (r > 0 || c > u(r)) && (e.left += h + p + d))
          },
          top: function (e, t) {
            var n,
              r,
              i = t.within,
              s = i.offset.top + i.scrollTop,
              o = i.height,
              a = i.isWindow ? i.scrollTop : i.offset.top,
              f = e.top - t.collisionPosition.marginTop,
              l = f - a,
              c = f + t.collisionHeight - o - a,
              h = 'top' === t.my[1],
              p = h ? -t.elemHeight : 'bottom' === t.my[1] ? t.elemHeight : 0,
              d =
                'top' === t.at[1]
                  ? t.targetHeight
                  : 'bottom' === t.at[1]
                  ? -t.targetHeight
                  : 0,
              v = -2 * t.offset[1]
            0 > l
              ? ((r = e.top + p + d + v + t.collisionHeight - o - s),
                e.top + p + d + v > l &&
                  (0 > r || u(l) > r) &&
                  (e.top += p + d + v))
              : c > 0 &&
                ((n = e.top - t.collisionPosition.marginTop + p + d + v - a),
                e.top + p + d + v > c &&
                  (n > 0 || c > u(n)) &&
                  (e.top += p + d + v))
          }
        },
        flipfit: {
          left: function () {
            e.ui.position.flip.left.apply(this, arguments),
              e.ui.position.fit.left.apply(this, arguments)
          },
          top: function () {
            e.ui.position.flip.top.apply(this, arguments),
              e.ui.position.fit.top.apply(this, arguments)
          }
        }
      }),
      (function () {
        var t,
          n,
          r,
          i,
          s,
          o = document.getElementsByTagName('body')[0],
          u = document.createElement('div')
        ;(t = document.createElement(o ? 'div' : 'body')),
          (r = {
            visibility: 'hidden',
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: 'none'
          }),
          o &&
            e.extend(r, {
              position: 'absolute',
              left: '-1000px',
              top: '-1000px'
            })
        for (s in r) t.style[s] = r[s]
        t.appendChild(u),
          (n = o || document.documentElement),
          n.insertBefore(t, n.firstChild),
          (u.style.cssText = 'position: absolute; left: 10.7432222px;'),
          (i = e(u).offset().left),
          (e.support.offsetFractions = i > 10 && 11 > i),
          (t.innerHTML = ''),
          n.removeChild(t)
      })()
  })(jQuery),
  (function (e, t) {
    e.widget('ui.progressbar', {
      version: '1.10.3',
      options: { max: 100, value: 0, change: null, complete: null },
      min: 0,
      _create: function () {
        ;(this.oldValue = this.options.value = this._constrainedValue()),
          this.element
            .addClass(
              'ui-progressbar ui-widget ui-widget-content ui-corner-all'
            )
            .attr({ role: 'progressbar', 'aria-valuemin': this.min }),
          (this.valueDiv = e(
            "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>"
          ).appendTo(this.element)),
          this._refreshValue()
      },
      _destroy: function () {
        this.element
          .removeClass(
            'ui-progressbar ui-widget ui-widget-content ui-corner-all'
          )
          .removeAttr('role')
          .removeAttr('aria-valuemin')
          .removeAttr('aria-valuemax')
          .removeAttr('aria-valuenow'),
          this.valueDiv.remove()
      },
      value: function (e) {
        return e === t
          ? this.options.value
          : ((this.options.value = this._constrainedValue(e)),
            this._refreshValue(),
            t)
      },
      _constrainedValue: function (e) {
        return (
          e === t && (e = this.options.value),
          (this.indeterminate = e === !1),
          'number' != typeof e && (e = 0),
          this.indeterminate
            ? !1
            : Math.min(this.options.max, Math.max(this.min, e))
        )
      },
      _setOptions: function (e) {
        var t = e.value
        delete e.value,
          this._super(e),
          (this.options.value = this._constrainedValue(t)),
          this._refreshValue()
      },
      _setOption: function (e, t) {
        'max' === e && (t = Math.max(this.min, t)), this._super(e, t)
      },
      _percentage: function () {
        return this.indeterminate
          ? 100
          : (100 * (this.options.value - this.min)) /
              (this.options.max - this.min)
      },
      _refreshValue: function () {
        var t = this.options.value,
          n = this._percentage()
        this.valueDiv
          .toggle(this.indeterminate || t > this.min)
          .toggleClass('ui-corner-right', t === this.options.max)
          .width(n.toFixed(0) + '%'),
          this.element.toggleClass(
            'ui-progressbar-indeterminate',
            this.indeterminate
          ),
          this.indeterminate
            ? (this.element.removeAttr('aria-valuenow'),
              this.overlayDiv ||
                (this.overlayDiv = e(
                  "<div class='ui-progressbar-overlay'></div>"
                ).appendTo(this.valueDiv)))
            : (this.element.attr({
                'aria-valuemax': this.options.max,
                'aria-valuenow': t
              }),
              this.overlayDiv &&
                (this.overlayDiv.remove(), (this.overlayDiv = null))),
          this.oldValue !== t && ((this.oldValue = t), this._trigger('change')),
          t === this.options.max && this._trigger('complete')
      }
    })
  })(jQuery),
  (function (e) {
    var t = 5
    e.widget('ui.slider', e.ui.mouse, {
      version: '1.10.3',
      widgetEventPrefix: 'slide',
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: 'horizontal',
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null
      },
      _create: function () {
        ;(this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this.element.addClass(
            'ui-slider ui-slider-' +
              this.orientation +
              ' ui-widget' +
              ' ui-widget-content' +
              ' ui-corner-all'
          ),
          this._refresh(),
          this._setOption('disabled', this.options.disabled),
          (this._animateOff = !1)
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue()
      },
      _createHandles: function () {
        var t,
          n,
          r = this.options,
          i = this.element
            .find('.ui-slider-handle')
            .addClass('ui-state-default ui-corner-all'),
          s =
            "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
          o = []
        for (
          n = (r.values && r.values.length) || 1,
            i.length > n && (i.slice(n).remove(), (i = i.slice(0, n))),
            t = i.length;
          n > t;
          t++
        )
          o.push(s)
        ;(this.handles = i.add(e(o.join('')).appendTo(this.element))),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (t) {
            e(this).data('ui-slider-handle-index', t)
          })
      },
      _createRange: function () {
        var t = this.options,
          n = ''
        t.range
          ? (t.range === !0 &&
              (t.values
                ? t.values.length && 2 !== t.values.length
                  ? (t.values = [t.values[0], t.values[0]])
                  : e.isArray(t.values) && (t.values = t.values.slice(0))
                : (t.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? this.range
                  .removeClass('ui-slider-range-min ui-slider-range-max')
                  .css({ left: '', bottom: '' })
              : ((this.range = e('<div></div>').appendTo(this.element)),
                (n = 'ui-slider-range ui-widget-header ui-corner-all')),
            this.range.addClass(
              n +
                ('min' === t.range || 'max' === t.range
                  ? ' ui-slider-range-' + t.range
                  : '')
            ))
          : (this.range = e([]))
      },
      _setupEvents: function () {
        var e = this.handles.add(this.range).filter('a')
        this._off(e),
          this._on(e, this._handleEvents),
          this._hoverable(e),
          this._focusable(e)
      },
      _destroy: function () {
        this.handles.remove(),
          this.range.remove(),
          this.element.removeClass(
            'ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all'
          ),
          this._mouseDestroy()
      },
      _mouseCapture: function (t) {
        var n,
          r,
          i,
          s,
          o,
          u,
          a,
          f,
          l = this,
          c = this.options
        return c.disabled
          ? !1
          : ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight()
            }),
            (this.elementOffset = this.element.offset()),
            (n = { x: t.pageX, y: t.pageY }),
            (r = this._normValueFromMouse(n)),
            (i = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (t) {
              var n = Math.abs(r - l.values(t))
              ;(i > n ||
                (i === n &&
                  (t === l._lastChangedValue || l.values(t) === c.min))) &&
                ((i = n), (s = e(this)), (o = t))
            }),
            (u = this._start(t, o)),
            u === !1
              ? !1
              : ((this._mouseSliding = !0),
                (this._handleIndex = o),
                s.addClass('ui-state-active').focus(),
                (a = s.offset()),
                (f = !e(t.target).parents().addBack().is('.ui-slider-handle')),
                (this._clickOffset = f
                  ? { left: 0, top: 0 }
                  : {
                      left: t.pageX - a.left - s.width() / 2,
                      top:
                        t.pageY -
                        a.top -
                        s.height() / 2 -
                        (parseInt(s.css('borderTopWidth'), 10) || 0) -
                        (parseInt(s.css('borderBottomWidth'), 10) || 0) +
                        (parseInt(s.css('marginTop'), 10) || 0)
                    }),
                this.handles.hasClass('ui-state-hover') || this._slide(t, o, r),
                (this._animateOff = !0),
                !0))
      },
      _mouseStart: function () {
        return !0
      },
      _mouseDrag: function (e) {
        var t = { x: e.pageX, y: e.pageY },
          n = this._normValueFromMouse(t)
        return this._slide(e, this._handleIndex, n), !1
      },
      _mouseStop: function (e) {
        return (
          this.handles.removeClass('ui-state-active'),
          (this._mouseSliding = !1),
          this._stop(e, this._handleIndex),
          this._change(e, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        )
      },
      _detectOrientation: function () {
        this.orientation =
          'vertical' === this.options.orientation ? 'vertical' : 'horizontal'
      },
      _normValueFromMouse: function (e) {
        var t, n, r, i, s
        return (
          'horizontal' === this.orientation
            ? ((t = this.elementSize.width),
              (n =
                e.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((t = this.elementSize.height),
              (n =
                e.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (r = n / t),
          r > 1 && (r = 1),
          0 > r && (r = 0),
          'vertical' === this.orientation && (r = 1 - r),
          (i = this._valueMax() - this._valueMin()),
          (s = this._valueMin() + r * i),
          this._trimAlignValue(s)
        )
      },
      _start: function (e, t) {
        var n = { handle: this.handles[t], value: this.value() }
        return (
          this.options.values &&
            this.options.values.length &&
            ((n.value = this.values(t)), (n.values = this.values())),
          this._trigger('start', e, n)
        )
      },
      _slide: function (e, t, n) {
        var r, i, s
        this.options.values && this.options.values.length
          ? ((r = this.values(t ? 0 : 1)),
            2 === this.options.values.length &&
              this.options.range === !0 &&
              ((0 === t && n > r) || (1 === t && r > n)) &&
              (n = r),
            n !== this.values(t) &&
              ((i = this.values()),
              (i[t] = n),
              (s = this._trigger('slide', e, {
                handle: this.handles[t],
                value: n,
                values: i
              })),
              (r = this.values(t ? 0 : 1)),
              s !== !1 && this.values(t, n, !0)))
          : n !== this.value() &&
            ((s = this._trigger('slide', e, {
              handle: this.handles[t],
              value: n
            })),
            s !== !1 && this.value(n))
      },
      _stop: function (e, t) {
        var n = { handle: this.handles[t], value: this.value() }
        this.options.values &&
          this.options.values.length &&
          ((n.value = this.values(t)), (n.values = this.values())),
          this._trigger('stop', e, n)
      },
      _change: function (e, t) {
        if (!this._keySliding && !this._mouseSliding) {
          var n = { handle: this.handles[t], value: this.value() }
          this.options.values &&
            this.options.values.length &&
            ((n.value = this.values(t)), (n.values = this.values())),
            (this._lastChangedValue = t),
            this._trigger('change', e, n)
        }
      },
      value: function (e) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(e)),
            this._refreshValue(),
            this._change(null, 0),
            undefined)
          : this._value()
      },
      values: function (t, n) {
        var r, i, s
        if (arguments.length > 1)
          return (
            (this.options.values[t] = this._trimAlignValue(n)),
            this._refreshValue(),
            this._change(null, t),
            undefined
          )
        if (!arguments.length) return this._values()
        if (!e.isArray(arguments[0]))
          return this.options.values && this.options.values.length
            ? this._values(t)
            : this.value()
        for (
          r = this.options.values, i = arguments[0], s = 0;
          r.length > s;
          s += 1
        )
          (r[s] = this._trimAlignValue(i[s])), this._change(null, s)
        this._refreshValue()
      },
      _setOption: function (t, n) {
        var r,
          i = 0
        switch (
          ('range' === t &&
            this.options.range === !0 &&
            ('min' === n
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : 'max' === n &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          e.isArray(this.options.values) && (i = this.options.values.length),
          e.Widget.prototype._setOption.apply(this, arguments),
          t)
        ) {
          case 'orientation':
            this._detectOrientation(),
              this.element
                .removeClass('ui-slider-horizontal ui-slider-vertical')
                .addClass('ui-slider-' + this.orientation),
              this._refreshValue()
            break
          case 'value':
            ;(this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1)
            break
          case 'values':
            for (
              this._animateOff = !0, this._refreshValue(), r = 0;
              i > r;
              r += 1
            )
              this._change(null, r)
            this._animateOff = !1
            break
          case 'min':
          case 'max':
            ;(this._animateOff = !0),
              this._refreshValue(),
              (this._animateOff = !1)
            break
          case 'range':
            ;(this._animateOff = !0), this._refresh(), (this._animateOff = !1)
        }
      },
      _value: function () {
        var e = this.options.value
        return (e = this._trimAlignValue(e))
      },
      _values: function (e) {
        var t, n, r
        if (arguments.length)
          return (t = this.options.values[e]), (t = this._trimAlignValue(t))
        if (this.options.values && this.options.values.length) {
          for (n = this.options.values.slice(), r = 0; n.length > r; r += 1)
            n[r] = this._trimAlignValue(n[r])
          return n
        }
        return []
      },
      _trimAlignValue: function (e) {
        if (this._valueMin() >= e) return this._valueMin()
        if (e >= this._valueMax()) return this._valueMax()
        var t = this.options.step > 0 ? this.options.step : 1,
          n = (e - this._valueMin()) % t,
          r = e - n
        return (
          2 * Math.abs(n) >= t && (r += n > 0 ? t : -t),
          parseFloat(r.toFixed(5))
        )
      },
      _valueMin: function () {
        return this.options.min
      },
      _valueMax: function () {
        return this.options.max
      },
      _refreshValue: function () {
        var t,
          n,
          r,
          i,
          s,
          o = this.options.range,
          u = this.options,
          a = this,
          f = this._animateOff ? !1 : u.animate,
          l = {}
        this.options.values && this.options.values.length
          ? this.handles.each(function (r) {
              ;(n =
                100 *
                ((a.values(r) - a._valueMin()) /
                  (a._valueMax() - a._valueMin()))),
                (l['horizontal' === a.orientation ? 'left' : 'bottom'] =
                  n + '%'),
                e(this).stop(1, 1)[f ? 'animate' : 'css'](l, u.animate),
                a.options.range === !0 &&
                  ('horizontal' === a.orientation
                    ? (0 === r &&
                        a.range
                          .stop(1, 1)
                          [f ? 'animate' : 'css']({ left: n + '%' }, u.animate),
                      1 === r &&
                        a.range[f ? 'animate' : 'css'](
                          { width: n - t + '%' },
                          { queue: !1, duration: u.animate }
                        ))
                    : (0 === r &&
                        a.range
                          .stop(1, 1)
                          [f ? 'animate' : 'css'](
                            { bottom: n + '%' },
                            u.animate
                          ),
                      1 === r &&
                        a.range[f ? 'animate' : 'css'](
                          { height: n - t + '%' },
                          { queue: !1, duration: u.animate }
                        ))),
                (t = n)
            })
          : ((r = this.value()),
            (i = this._valueMin()),
            (s = this._valueMax()),
            (n = s !== i ? 100 * ((r - i) / (s - i)) : 0),
            (l['horizontal' === this.orientation ? 'left' : 'bottom'] =
              n + '%'),
            this.handle.stop(1, 1)[f ? 'animate' : 'css'](l, u.animate),
            'min' === o &&
              'horizontal' === this.orientation &&
              this.range
                .stop(1, 1)
                [f ? 'animate' : 'css']({ width: n + '%' }, u.animate),
            'max' === o &&
              'horizontal' === this.orientation &&
              this.range[f ? 'animate' : 'css'](
                { width: 100 - n + '%' },
                { queue: !1, duration: u.animate }
              ),
            'min' === o &&
              'vertical' === this.orientation &&
              this.range
                .stop(1, 1)
                [f ? 'animate' : 'css']({ height: n + '%' }, u.animate),
            'max' === o &&
              'vertical' === this.orientation &&
              this.range[f ? 'animate' : 'css'](
                { height: 100 - n + '%' },
                { queue: !1, duration: u.animate }
              ))
      },
      _handleEvents: {
        keydown: function (n) {
          var r,
            i,
            s,
            o,
            u = e(n.target).data('ui-slider-handle-index')
          switch (n.keyCode) {
            case e.ui.keyCode.HOME:
            case e.ui.keyCode.END:
            case e.ui.keyCode.PAGE_UP:
            case e.ui.keyCode.PAGE_DOWN:
            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (
                (n.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  e(n.target).addClass('ui-state-active'),
                  (r = this._start(n, u)),
                  r === !1))
              )
                return
          }
          switch (
            ((o = this.options.step),
            (i = s =
              this.options.values && this.options.values.length
                ? this.values(u)
                : this.value()),
            n.keyCode)
          ) {
            case e.ui.keyCode.HOME:
              s = this._valueMin()
              break
            case e.ui.keyCode.END:
              s = this._valueMax()
              break
            case e.ui.keyCode.PAGE_UP:
              s = this._trimAlignValue(
                i + (this._valueMax() - this._valueMin()) / t
              )
              break
            case e.ui.keyCode.PAGE_DOWN:
              s = this._trimAlignValue(
                i - (this._valueMax() - this._valueMin()) / t
              )
              break
            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
              if (i === this._valueMax()) return
              s = this._trimAlignValue(i + o)
              break
            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (i === this._valueMin()) return
              s = this._trimAlignValue(i - o)
          }
          this._slide(n, u, s)
        },
        click: function (e) {
          e.preventDefault()
        },
        keyup: function (t) {
          var n = e(t.target).data('ui-slider-handle-index')
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(t, n),
            this._change(t, n),
            e(t.target).removeClass('ui-state-active'))
        }
      }
    })
  })(jQuery),
  (function (e) {
    function t(e) {
      return function () {
        var t = this.element.val()
        e.apply(this, arguments),
          this._refresh(),
          t !== this.element.val() && this._trigger('change')
      }
    }
    e.widget('ui.spinner', {
      version: '1.10.3',
      defaultElement: '<input>',
      widgetEventPrefix: 'spin',
      options: {
        culture: null,
        icons: { down: 'ui-icon-triangle-1-s', up: 'ui-icon-triangle-1-n' },
        incremental: !0,
        max: null,
        min: null,
        numberFormat: null,
        page: 10,
        step: 1,
        change: null,
        spin: null,
        start: null,
        stop: null
      },
      _create: function () {
        this._setOption('max', this.options.max),
          this._setOption('min', this.options.min),
          this._setOption('step', this.options.step),
          this._value(this.element.val(), !0),
          this._draw(),
          this._on(this._events),
          this._refresh(),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr('autocomplete')
            }
          })
      },
      _getCreateOptions: function () {
        var t = {},
          n = this.element
        return (
          e.each(['min', 'max', 'step'], function (e, r) {
            var s = n.attr(r)
            void 0 !== s && s.length && (t[r] = s)
          }),
          t
        )
      },
      _events: {
        keydown: function (e) {
          this._start(e) && this._keydown(e) && e.preventDefault()
        },
        keyup: '_stop',
        focus: function () {
          this.previous = this.element.val()
        },
        blur: function (e) {
          return this.cancelBlur
            ? (delete this.cancelBlur, void 0)
            : (this._stop(),
              this._refresh(),
              this.previous !== this.element.val() &&
                this._trigger('change', e),
              void 0)
        },
        mousewheel: function (e, t) {
          if (t) {
            if (!this.spinning && !this._start(e)) return !1
            this._spin((t > 0 ? 1 : -1) * this.options.step, e),
              clearTimeout(this.mousewheelTimer),
              (this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(e)
              }, 100)),
              e.preventDefault()
          }
        },
        'mousedown .ui-spinner-button': function (t) {
          function n() {
            var e = this.element[0] === this.document[0].activeElement
            e ||
              (this.element.focus(),
              (this.previous = r),
              this._delay(function () {
                this.previous = r
              }))
          }
          var r
          ;(r =
            this.element[0] === this.document[0].activeElement
              ? this.previous
              : this.element.val()),
            t.preventDefault(),
            n.call(this),
            (this.cancelBlur = !0),
            this._delay(function () {
              delete this.cancelBlur, n.call(this)
            }),
            this._start(t) !== !1 &&
              this._repeat(
                null,
                e(t.currentTarget).hasClass('ui-spinner-up') ? 1 : -1,
                t
              )
        },
        'mouseup .ui-spinner-button': '_stop',
        'mouseenter .ui-spinner-button': function (t) {
          return e(t.currentTarget).hasClass('ui-state-active')
            ? this._start(t) === !1
              ? !1
              : (this._repeat(
                  null,
                  e(t.currentTarget).hasClass('ui-spinner-up') ? 1 : -1,
                  t
                ),
                void 0)
            : void 0
        },
        'mouseleave .ui-spinner-button': '_stop'
      },
      _draw: function () {
        var e = (this.uiSpinner = this.element
          .addClass('ui-spinner-input')
          .attr('autocomplete', 'off')
          .wrap(this._uiSpinnerHtml())
          .parent()
          .append(this._buttonHtml()))
        this.element.attr('role', 'spinbutton'),
          (this.buttons = e
            .find('.ui-spinner-button')
            .attr('tabIndex', -1)
            .button()
            .removeClass('ui-corner-all')),
          this.buttons.height() > Math.ceil(0.5 * e.height()) &&
            e.height() > 0 &&
            e.height(e.height()),
          this.options.disabled && this.disable()
      },
      _keydown: function (t) {
        var n = this.options,
          r = e.ui.keyCode
        switch (t.keyCode) {
          case r.UP:
            return this._repeat(null, 1, t), !0
          case r.DOWN:
            return this._repeat(null, -1, t), !0
          case r.PAGE_UP:
            return this._repeat(null, n.page, t), !0
          case r.PAGE_DOWN:
            return this._repeat(null, -n.page, t), !0
        }
        return !1
      },
      _uiSpinnerHtml: function () {
        return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
      },
      _buttonHtml: function () {
        return (
          "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " +
          this.options.icons.up +
          "'>&#9650;</span>" +
          '</a>' +
          "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
          "<span class='ui-icon " +
          this.options.icons.down +
          "'>&#9660;</span>" +
          '</a>'
        )
      },
      _start: function (e) {
        return this.spinning || this._trigger('start', e) !== !1
          ? (this.counter || (this.counter = 1), (this.spinning = !0), !0)
          : !1
      },
      _repeat: function (e, t, n) {
        ;(e = e || 500),
          clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            this._repeat(40, t, n)
          }, e)),
          this._spin(t * this.options.step, n)
      },
      _spin: function (e, t) {
        var n = this.value() || 0
        this.counter || (this.counter = 1),
          (n = this._adjustValue(n + e * this._increment(this.counter))),
          (this.spinning && this._trigger('spin', t, { value: n }) === !1) ||
            (this._value(n), this.counter++)
      },
      _increment: function (t) {
        var n = this.options.incremental
        return n
          ? e.isFunction(n)
            ? n(t)
            : Math.floor((t * t * t) / 5e4 - (t * t) / 500 + (17 * t) / 200 + 1)
          : 1
      },
      _precision: function () {
        var e = this._precisionOf(this.options.step)
        return (
          null !== this.options.min &&
            (e = Math.max(e, this._precisionOf(this.options.min))),
          e
        )
      },
      _precisionOf: function (e) {
        var t = '' + e,
          n = t.indexOf('.')
        return -1 === n ? 0 : t.length - n - 1
      },
      _adjustValue: function (e) {
        var t,
          n,
          r = this.options
        return (
          (t = null !== r.min ? r.min : 0),
          (n = e - t),
          (n = Math.round(n / r.step) * r.step),
          (e = t + n),
          (e = parseFloat(e.toFixed(this._precision()))),
          null !== r.max && e > r.max
            ? r.max
            : null !== r.min && r.min > e
            ? r.min
            : e
        )
      },
      _stop: function (e) {
        this.spinning &&
          (clearTimeout(this.timer),
          clearTimeout(this.mousewheelTimer),
          (this.counter = 0),
          (this.spinning = !1),
          this._trigger('stop', e))
      },
      _setOption: function (e, t) {
        if ('culture' === e || 'numberFormat' === e) {
          var n = this._parse(this.element.val())
          return (
            (this.options[e] = t), this.element.val(this._format(n)), void 0
          )
        }
        ;('max' === e || 'min' === e || 'step' === e) &&
          'string' == typeof t &&
          (t = this._parse(t)),
          'icons' === e &&
            (this.buttons
              .first()
              .find('.ui-icon')
              .removeClass(this.options.icons.up)
              .addClass(t.up),
            this.buttons
              .last()
              .find('.ui-icon')
              .removeClass(this.options.icons.down)
              .addClass(t.down)),
          this._super(e, t),
          'disabled' === e &&
            (t
              ? (this.element.prop('disabled', !0),
                this.buttons.button('disable'))
              : (this.element.prop('disabled', !1),
                this.buttons.button('enable')))
      },
      _setOptions: t(function (e) {
        this._super(e), this._value(this.element.val())
      }),
      _parse: function (e) {
        return (
          'string' == typeof e &&
            '' !== e &&
            (e =
              window.Globalize && this.options.numberFormat
                ? Globalize.parseFloat(e, 10, this.options.culture)
                : +e),
          '' === e || isNaN(e) ? null : e
        )
      },
      _format: function (e) {
        return '' === e
          ? ''
          : window.Globalize && this.options.numberFormat
          ? Globalize.format(e, this.options.numberFormat, this.options.culture)
          : e
      },
      _refresh: function () {
        this.element.attr({
          'aria-valuemin': this.options.min,
          'aria-valuemax': this.options.max,
          'aria-valuenow': this._parse(this.element.val())
        })
      },
      _value: function (e, t) {
        var n
        '' !== e &&
          ((n = this._parse(e)),
          null !== n &&
            (t || (n = this._adjustValue(n)), (e = this._format(n)))),
          this.element.val(e),
          this._refresh()
      },
      _destroy: function () {
        this.element
          .removeClass('ui-spinner-input')
          .prop('disabled', !1)
          .removeAttr('autocomplete')
          .removeAttr('role')
          .removeAttr('aria-valuemin')
          .removeAttr('aria-valuemax')
          .removeAttr('aria-valuenow'),
          this.uiSpinner.replaceWith(this.element)
      },
      stepUp: t(function (e) {
        this._stepUp(e)
      }),
      _stepUp: function (e) {
        this._start() &&
          (this._spin((e || 1) * this.options.step), this._stop())
      },
      stepDown: t(function (e) {
        this._stepDown(e)
      }),
      _stepDown: function (e) {
        this._start() &&
          (this._spin((e || 1) * -this.options.step), this._stop())
      },
      pageUp: t(function (e) {
        this._stepUp((e || 1) * this.options.page)
      }),
      pageDown: t(function (e) {
        this._stepDown((e || 1) * this.options.page)
      }),
      value: function (e) {
        return arguments.length
          ? (t(this._value).call(this, e), void 0)
          : this._parse(this.element.val())
      },
      widget: function () {
        return this.uiSpinner
      }
    })
  })(jQuery),
  (function (e, t) {
    function n() {
      return ++i
    }
    function r(e) {
      return (
        e.hash.length > 1 &&
        decodeURIComponent(e.href.replace(s, '')) ===
          decodeURIComponent(location.href.replace(s, ''))
      )
    }
    var i = 0,
      s = /#.*$/
    e.widget('ui.tabs', {
      version: '1.10.3',
      delay: 300,
      options: {
        active: null,
        collapsible: !1,
        event: 'click',
        heightStyle: 'content',
        hide: null,
        show: null,
        activate: null,
        beforeActivate: null,
        beforeLoad: null,
        load: null
      },
      _create: function () {
        var t = this,
          n = this.options
        ;(this.running = !1),
          this.element
            .addClass('ui-tabs ui-widget ui-widget-content ui-corner-all')
            .toggleClass('ui-tabs-collapsible', n.collapsible)
            .delegate(
              '.ui-tabs-nav > li',
              'mousedown' + this.eventNamespace,
              function (t) {
                e(this).is('.ui-state-disabled') && t.preventDefault()
              }
            )
            .delegate(
              '.ui-tabs-anchor',
              'focus' + this.eventNamespace,
              function () {
                e(this).closest('li').is('.ui-state-disabled') && this.blur()
              }
            ),
          this._processTabs(),
          (n.active = this._initialActive()),
          e.isArray(n.disabled) &&
            (n.disabled = e
              .unique(
                n.disabled.concat(
                  e.map(this.tabs.filter('.ui-state-disabled'), function (e) {
                    return t.tabs.index(e)
                  })
                )
              )
              .sort()),
          (this.active =
            this.options.active !== !1 && this.anchors.length
              ? this._findActive(n.active)
              : e()),
          this._refresh(),
          this.active.length && this.load(n.active)
      },
      _initialActive: function () {
        var n = this.options.active,
          r = this.options.collapsible,
          i = location.hash.substring(1)
        return (
          null === n &&
            (i &&
              this.tabs.each(function (r, s) {
                return e(s).attr('aria-controls') === i ? ((n = r), !1) : t
              }),
            null === n &&
              (n = this.tabs.index(this.tabs.filter('.ui-tabs-active'))),
            (null === n || -1 === n) && (n = this.tabs.length ? 0 : !1)),
          n !== !1 &&
            ((n = this.tabs.index(this.tabs.eq(n))),
            -1 === n && (n = r ? !1 : 0)),
          !r && n === !1 && this.anchors.length && (n = 0),
          n
        )
      },
      _getCreateEventData: function () {
        return {
          tab: this.active,
          panel: this.active.length ? this._getPanelForTab(this.active) : e()
        }
      },
      _tabKeydown: function (n) {
        var r = e(this.document[0].activeElement).closest('li'),
          i = this.tabs.index(r),
          s = !0
        if (!this._handlePageNav(n)) {
          switch (n.keyCode) {
            case e.ui.keyCode.RIGHT:
            case e.ui.keyCode.DOWN:
              i++
              break
            case e.ui.keyCode.UP:
            case e.ui.keyCode.LEFT:
              ;(s = !1), i--
              break
            case e.ui.keyCode.END:
              i = this.anchors.length - 1
              break
            case e.ui.keyCode.HOME:
              i = 0
              break
            case e.ui.keyCode.SPACE:
              return (
                n.preventDefault(),
                clearTimeout(this.activating),
                this._activate(i),
                t
              )
            case e.ui.keyCode.ENTER:
              return (
                n.preventDefault(),
                clearTimeout(this.activating),
                this._activate(i === this.options.active ? !1 : i),
                t
              )
            default:
              return
          }
          n.preventDefault(),
            clearTimeout(this.activating),
            (i = this._focusNextTab(i, s)),
            n.ctrlKey ||
              (r.attr('aria-selected', 'false'),
              this.tabs.eq(i).attr('aria-selected', 'true'),
              (this.activating = this._delay(function () {
                this.option('active', i)
              }, this.delay)))
        }
      },
      _panelKeydown: function (t) {
        this._handlePageNav(t) ||
          (t.ctrlKey &&
            t.keyCode === e.ui.keyCode.UP &&
            (t.preventDefault(), this.active.focus()))
      },
      _handlePageNav: function (n) {
        return n.altKey && n.keyCode === e.ui.keyCode.PAGE_UP
          ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0)
          : n.altKey && n.keyCode === e.ui.keyCode.PAGE_DOWN
          ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0)
          : t
      },
      _findNextTab: function (t, n) {
        function r() {
          return t > i && (t = 0), 0 > t && (t = i), t
        }
        for (
          var i = this.tabs.length - 1;
          -1 !== e.inArray(r(), this.options.disabled);

        )
          t = n ? t + 1 : t - 1
        return t
      },
      _focusNextTab: function (e, t) {
        return (e = this._findNextTab(e, t)), this.tabs.eq(e).focus(), e
      },
      _setOption: function (e, n) {
        return 'active' === e
          ? (this._activate(n), t)
          : 'disabled' === e
          ? (this._setupDisabled(n), t)
          : (this._super(e, n),
            'collapsible' === e &&
              (this.element.toggleClass('ui-tabs-collapsible', n),
              n || this.options.active !== !1 || this._activate(0)),
            'event' === e && this._setupEvents(n),
            'heightStyle' === e && this._setupHeightStyle(n),
            t)
      },
      _tabId: function (e) {
        return e.attr('aria-controls') || 'ui-tabs-' + n()
      },
      _sanitizeSelector: function (e) {
        return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, '\\$&') : ''
      },
      refresh: function () {
        var t = this.options,
          n = this.tablist.children(':has(a[href])')
        ;(t.disabled = e.map(n.filter('.ui-state-disabled'), function (e) {
          return n.index(e)
        })),
          this._processTabs(),
          t.active !== !1 && this.anchors.length
            ? this.active.length && !e.contains(this.tablist[0], this.active[0])
              ? this.tabs.length === t.disabled.length
                ? ((t.active = !1), (this.active = e()))
                : this._activate(
                    this._findNextTab(Math.max(0, t.active - 1), !1)
                  )
              : (t.active = this.tabs.index(this.active))
            : ((t.active = !1), (this.active = e())),
          this._refresh()
      },
      _refresh: function () {
        this._setupDisabled(this.options.disabled),
          this._setupEvents(this.options.event),
          this._setupHeightStyle(this.options.heightStyle),
          this.tabs
            .not(this.active)
            .attr({ 'aria-selected': 'false', tabIndex: -1 }),
          this.panels
            .not(this._getPanelForTab(this.active))
            .hide()
            .attr({ 'aria-expanded': 'false', 'aria-hidden': 'true' }),
          this.active.length
            ? (this.active
                .addClass('ui-tabs-active ui-state-active')
                .attr({ 'aria-selected': 'true', tabIndex: 0 }),
              this._getPanelForTab(this.active)
                .show()
                .attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' }))
            : this.tabs.eq(0).attr('tabIndex', 0)
      },
      _processTabs: function () {
        var t = this
        ;(this.tablist = this._getList()
          .addClass(
            'ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all'
          )
          .attr('role', 'tablist')),
          (this.tabs = this.tablist
            .find('> li:has(a[href])')
            .addClass('ui-state-default ui-corner-top')
            .attr({ role: 'tab', tabIndex: -1 })),
          (this.anchors = this.tabs
            .map(function () {
              return e('a', this)[0]
            })
            .addClass('ui-tabs-anchor')
            .attr({ role: 'presentation', tabIndex: -1 })),
          (this.panels = e()),
          this.anchors.each(function (n, i) {
            var s,
              o,
              u,
              a = e(i).uniqueId().attr('id'),
              f = e(i).closest('li'),
              l = f.attr('aria-controls')
            r(i)
              ? ((s = i.hash), (o = t.element.find(t._sanitizeSelector(s))))
              : ((u = t._tabId(f)),
                (s = '#' + u),
                (o = t.element.find(s)),
                o.length ||
                  ((o = t._createPanel(u)),
                  o.insertAfter(t.panels[n - 1] || t.tablist)),
                o.attr('aria-live', 'polite')),
              o.length && (t.panels = t.panels.add(o)),
              l && f.data('ui-tabs-aria-controls', l),
              f.attr({ 'aria-controls': s.substring(1), 'aria-labelledby': a }),
              o.attr('aria-labelledby', a)
          }),
          this.panels
            .addClass('ui-tabs-panel ui-widget-content ui-corner-bottom')
            .attr('role', 'tabpanel')
      },
      _getList: function () {
        return this.element.find('ol,ul').eq(0)
      },
      _createPanel: function (t) {
        return e('<div>')
          .attr('id', t)
          .addClass('ui-tabs-panel ui-widget-content ui-corner-bottom')
          .data('ui-tabs-destroy', !0)
      },
      _setupDisabled: function (t) {
        e.isArray(t) &&
          (t.length ? t.length === this.anchors.length && (t = !0) : (t = !1))
        for (var n, r = 0; (n = this.tabs[r]); r++)
          t === !0 || -1 !== e.inArray(r, t)
            ? e(n).addClass('ui-state-disabled').attr('aria-disabled', 'true')
            : e(n).removeClass('ui-state-disabled').removeAttr('aria-disabled')
        this.options.disabled = t
      },
      _setupEvents: function (t) {
        var n = {
          click: function (e) {
            e.preventDefault()
          }
        }
        t &&
          e.each(t.split(' '), function (e, t) {
            n[t] = '_eventHandler'
          }),
          this._off(this.anchors.add(this.tabs).add(this.panels)),
          this._on(this.anchors, n),
          this._on(this.tabs, { keydown: '_tabKeydown' }),
          this._on(this.panels, { keydown: '_panelKeydown' }),
          this._focusable(this.tabs),
          this._hoverable(this.tabs)
      },
      _setupHeightStyle: function (t) {
        var n,
          r = this.element.parent()
        'fill' === t
          ? ((n = r.height()),
            (n -= this.element.outerHeight() - this.element.height()),
            this.element.siblings(':visible').each(function () {
              var t = e(this),
                r = t.css('position')
              'absolute' !== r && 'fixed' !== r && (n -= t.outerHeight(!0))
            }),
            this.element
              .children()
              .not(this.panels)
              .each(function () {
                n -= e(this).outerHeight(!0)
              }),
            this.panels
              .each(function () {
                e(this).height(
                  Math.max(0, n - e(this).innerHeight() + e(this).height())
                )
              })
              .css('overflow', 'auto'))
          : 'auto' === t &&
            ((n = 0),
            this.panels
              .each(function () {
                n = Math.max(n, e(this).height('').height())
              })
              .height(n))
      },
      _eventHandler: function (t) {
        var n = this.options,
          r = this.active,
          i = e(t.currentTarget),
          s = i.closest('li'),
          o = s[0] === r[0],
          u = o && n.collapsible,
          a = u ? e() : this._getPanelForTab(s),
          f = r.length ? this._getPanelForTab(r) : e(),
          l = { oldTab: r, oldPanel: f, newTab: u ? e() : s, newPanel: a }
        t.preventDefault(),
          s.hasClass('ui-state-disabled') ||
            s.hasClass('ui-tabs-loading') ||
            this.running ||
            (o && !n.collapsible) ||
            this._trigger('beforeActivate', t, l) === !1 ||
            ((n.active = u ? !1 : this.tabs.index(s)),
            (this.active = o ? e() : s),
            this.xhr && this.xhr.abort(),
            f.length ||
              a.length ||
              e.error('jQuery UI Tabs: Mismatching fragment identifier.'),
            a.length && this.load(this.tabs.index(s), t),
            this._toggle(t, l))
      },
      _toggle: function (t, n) {
        function r() {
          ;(s.running = !1), s._trigger('activate', t, n)
        }
        function i() {
          n.newTab.closest('li').addClass('ui-tabs-active ui-state-active'),
            o.length && s.options.show
              ? s._show(o, s.options.show, r)
              : (o.show(), r())
        }
        var s = this,
          o = n.newPanel,
          u = n.oldPanel
        ;(this.running = !0),
          u.length && this.options.hide
            ? this._hide(u, this.options.hide, function () {
                n.oldTab
                  .closest('li')
                  .removeClass('ui-tabs-active ui-state-active'),
                  i()
              })
            : (n.oldTab
                .closest('li')
                .removeClass('ui-tabs-active ui-state-active'),
              u.hide(),
              i()),
          u.attr({ 'aria-expanded': 'false', 'aria-hidden': 'true' }),
          n.oldTab.attr('aria-selected', 'false'),
          o.length && u.length
            ? n.oldTab.attr('tabIndex', -1)
            : o.length &&
              this.tabs
                .filter(function () {
                  return 0 === e(this).attr('tabIndex')
                })
                .attr('tabIndex', -1),
          o.attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' }),
          n.newTab.attr({ 'aria-selected': 'true', tabIndex: 0 })
      },
      _activate: function (t) {
        var n,
          r = this._findActive(t)
        r[0] !== this.active[0] &&
          (r.length || (r = this.active),
          (n = r.find('.ui-tabs-anchor')[0]),
          this._eventHandler({
            target: n,
            currentTarget: n,
            preventDefault: e.noop
          }))
      },
      _findActive: function (t) {
        return t === !1 ? e() : this.tabs.eq(t)
      },
      _getIndex: function (e) {
        return (
          'string' == typeof e &&
            (e = this.anchors.index(
              this.anchors.filter("[href$='" + e + "']")
            )),
          e
        )
      },
      _destroy: function () {
        this.xhr && this.xhr.abort(),
          this.element.removeClass(
            'ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible'
          ),
          this.tablist
            .removeClass(
              'ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all'
            )
            .removeAttr('role'),
          this.anchors
            .removeClass('ui-tabs-anchor')
            .removeAttr('role')
            .removeAttr('tabIndex')
            .removeUniqueId(),
          this.tabs.add(this.panels).each(function () {
            e.data(this, 'ui-tabs-destroy')
              ? e(this).remove()
              : e(this)
                  .removeClass(
                    'ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel'
                  )
                  .removeAttr('tabIndex')
                  .removeAttr('aria-live')
                  .removeAttr('aria-busy')
                  .removeAttr('aria-selected')
                  .removeAttr('aria-labelledby')
                  .removeAttr('aria-hidden')
                  .removeAttr('aria-expanded')
                  .removeAttr('role')
          }),
          this.tabs.each(function () {
            var t = e(this),
              n = t.data('ui-tabs-aria-controls')
            n
              ? t.attr('aria-controls', n).removeData('ui-tabs-aria-controls')
              : t.removeAttr('aria-controls')
          }),
          this.panels.show(),
          'content' !== this.options.heightStyle &&
            this.panels.css('height', '')
      },
      enable: function (n) {
        var r = this.options.disabled
        r !== !1 &&
          (n === t
            ? (r = !1)
            : ((n = this._getIndex(n)),
              (r = e.isArray(r)
                ? e.map(r, function (e) {
                    return e !== n ? e : null
                  })
                : e.map(this.tabs, function (e, t) {
                    return t !== n ? t : null
                  }))),
          this._setupDisabled(r))
      },
      disable: function (n) {
        var r = this.options.disabled
        if (r !== !0) {
          if (n === t) r = !0
          else {
            if (((n = this._getIndex(n)), -1 !== e.inArray(n, r))) return
            r = e.isArray(r) ? e.merge([n], r).sort() : [n]
          }
          this._setupDisabled(r)
        }
      },
      load: function (t, n) {
        t = this._getIndex(t)
        var i = this,
          s = this.tabs.eq(t),
          o = s.find('.ui-tabs-anchor'),
          u = this._getPanelForTab(s),
          a = { tab: s, panel: u }
        r(o[0]) ||
          ((this.xhr = e.ajax(this._ajaxSettings(o, n, a))),
          this.xhr &&
            'canceled' !== this.xhr.statusText &&
            (s.addClass('ui-tabs-loading'),
            u.attr('aria-busy', 'true'),
            this.xhr
              .success(function (e) {
                setTimeout(function () {
                  u.html(e), i._trigger('load', n, a)
                }, 1)
              })
              .complete(function (e, t) {
                setTimeout(function () {
                  'abort' === t && i.panels.stop(!1, !0),
                    s.removeClass('ui-tabs-loading'),
                    u.removeAttr('aria-busy'),
                    e === i.xhr && delete i.xhr
                }, 1)
              })))
      },
      _ajaxSettings: function (t, n, r) {
        var i = this
        return {
          url: t.attr('href'),
          beforeSend: function (t, s) {
            return i._trigger(
              'beforeLoad',
              n,
              e.extend({ jqXHR: t, ajaxSettings: s }, r)
            )
          }
        }
      },
      _getPanelForTab: function (t) {
        var n = e(t).attr('aria-controls')
        return this.element.find(this._sanitizeSelector('#' + n))
      }
    })
  })(jQuery),
  (function (e) {
    function t(t, n) {
      var r = (t.attr('aria-describedby') || '').split(/\s+/)
      r.push(n),
        t.data('ui-tooltip-id', n).attr('aria-describedby', e.trim(r.join(' ')))
    }
    function n(t) {
      var n = t.data('ui-tooltip-id'),
        r = (t.attr('aria-describedby') || '').split(/\s+/),
        i = e.inArray(n, r)
      ;-1 !== i && r.splice(i, 1),
        t.removeData('ui-tooltip-id'),
        (r = e.trim(r.join(' '))),
        r ? t.attr('aria-describedby', r) : t.removeAttr('aria-describedby')
    }
    var r = 0
    e.widget('ui.tooltip', {
      version: '1.10.3',
      options: {
        content: function () {
          var t = e(this).attr('title') || ''
          return e('<a>').text(t).html()
        },
        hide: !0,
        items: '[title]:not([disabled])',
        position: {
          my: 'left top+15',
          at: 'left bottom',
          collision: 'flipfit flip'
        },
        show: !0,
        tooltipClass: null,
        track: !1,
        close: null,
        open: null
      },
      _create: function () {
        this._on({ mouseover: 'open', focusin: 'open' }),
          (this.tooltips = {}),
          (this.parents = {}),
          this.options.disabled && this._disable()
      },
      _setOption: function (t, n) {
        var r = this
        return 'disabled' === t
          ? (this[n ? '_disable' : '_enable'](), (this.options[t] = n), void 0)
          : (this._super(t, n),
            'content' === t &&
              e.each(this.tooltips, function (e, t) {
                r._updateContent(t)
              }),
            void 0)
      },
      _disable: function () {
        var t = this
        e.each(this.tooltips, function (n, r) {
          var i = e.Event('blur')
          ;(i.target = i.currentTarget = r[0]), t.close(i, !0)
        }),
          this.element
            .find(this.options.items)
            .addBack()
            .each(function () {
              var t = e(this)
              t.is('[title]') &&
                t.data('ui-tooltip-title', t.attr('title')).attr('title', '')
            })
      },
      _enable: function () {
        this.element
          .find(this.options.items)
          .addBack()
          .each(function () {
            var t = e(this)
            t.data('ui-tooltip-title') &&
              t.attr('title', t.data('ui-tooltip-title'))
          })
      },
      open: function (t) {
        var n = this,
          r = e(t ? t.target : this.element).closest(this.options.items)
        r.length &&
          !r.data('ui-tooltip-id') &&
          (r.attr('title') && r.data('ui-tooltip-title', r.attr('title')),
          r.data('ui-tooltip-open', !0),
          t &&
            'mouseover' === t.type &&
            r.parents().each(function () {
              var t,
                r = e(this)
              r.data('ui-tooltip-open') &&
                ((t = e.Event('blur')),
                (t.target = t.currentTarget = this),
                n.close(t, !0)),
                r.attr('title') &&
                  (r.uniqueId(),
                  (n.parents[this.id] = {
                    element: this,
                    title: r.attr('title')
                  }),
                  r.attr('title', ''))
            }),
          this._updateContent(r, t))
      },
      _updateContent: function (e, t) {
        var n,
          r = this.options.content,
          i = this,
          s = t ? t.type : null
        return 'string' == typeof r
          ? this._open(t, e, r)
          : ((n = r.call(e[0], function (n) {
              e.data('ui-tooltip-open') &&
                i._delay(function () {
                  t && (t.type = s), this._open(t, e, n)
                })
            })),
            n && this._open(t, e, n),
            void 0)
      },
      _open: function (n, r, i) {
        function s(e) {
          ;(f.of = e), o.is(':hidden') || o.position(f)
        }
        var o,
          u,
          a,
          f = e.extend({}, this.options.position)
        if (i) {
          if (((o = this._find(r)), o.length))
            return o.find('.ui-tooltip-content').html(i), void 0
          r.is('[title]') &&
            (n && 'mouseover' === n.type
              ? r.attr('title', '')
              : r.removeAttr('title')),
            (o = this._tooltip(r)),
            t(r, o.attr('id')),
            o.find('.ui-tooltip-content').html(i),
            this.options.track && n && /^mouse/.test(n.type)
              ? (this._on(this.document, { mousemove: s }), s(n))
              : o.position(e.extend({ of: r }, this.options.position)),
            o.hide(),
            this._show(o, this.options.show),
            this.options.show &&
              this.options.show.delay &&
              (a = this.delayedShow =
                setInterval(function () {
                  o.is(':visible') && (s(f.of), clearInterval(a))
                }, e.fx.interval)),
            this._trigger('open', n, { tooltip: o }),
            (u = {
              keyup: function (t) {
                if (t.keyCode === e.ui.keyCode.ESCAPE) {
                  var n = e.Event(t)
                  ;(n.currentTarget = r[0]), this.close(n, !0)
                }
              },
              remove: function () {
                this._removeTooltip(o)
              }
            }),
            (n && 'mouseover' !== n.type) || (u.mouseleave = 'close'),
            (n && 'focusin' !== n.type) || (u.focusout = 'close'),
            this._on(!0, r, u)
        }
      },
      close: function (t) {
        var r = this,
          s = e(t ? t.currentTarget : this.element),
          o = this._find(s)
        this.closing ||
          (clearInterval(this.delayedShow),
          s.data('ui-tooltip-title') &&
            s.attr('title', s.data('ui-tooltip-title')),
          n(s),
          o.stop(!0),
          this._hide(o, this.options.hide, function () {
            r._removeTooltip(e(this))
          }),
          s.removeData('ui-tooltip-open'),
          this._off(s, 'mouseleave focusout keyup'),
          s[0] !== this.element[0] && this._off(s, 'remove'),
          this._off(this.document, 'mousemove'),
          t &&
            'mouseleave' === t.type &&
            e.each(this.parents, function (t, n) {
              e(n.element).attr('title', n.title), delete r.parents[t]
            }),
          (this.closing = !0),
          this._trigger('close', t, { tooltip: o }),
          (this.closing = !1))
      },
      _tooltip: function (t) {
        var n = 'ui-tooltip-' + r++,
          i = e('<div>')
            .attr({ id: n, role: 'tooltip' })
            .addClass(
              'ui-tooltip ui-widget ui-corner-all ui-widget-content ' +
                (this.options.tooltipClass || '')
            )
        return (
          e('<div>').addClass('ui-tooltip-content').appendTo(i),
          i.appendTo(this.document[0].body),
          (this.tooltips[n] = t),
          i
        )
      },
      _find: function (t) {
        var n = t.data('ui-tooltip-id')
        return n ? e('#' + n) : e()
      },
      _removeTooltip: function (e) {
        e.remove(), delete this.tooltips[e.attr('id')]
      },
      _destroy: function () {
        var t = this
        e.each(this.tooltips, function (n, r) {
          var i = e.Event('blur')
          ;(i.target = i.currentTarget = r[0]),
            t.close(i, !0),
            e('#' + n).remove(),
            r.data('ui-tooltip-title') &&
              (r.attr('title', r.data('ui-tooltip-title')),
              r.removeData('ui-tooltip-title'))
        })
      }
    })
  })(jQuery)
