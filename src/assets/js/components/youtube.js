function r(t) {
  /in/.test(document.readyState) ? setTimeout('r(' + t + ')', 9) : t();
}
r(function () {
  if (document.getElementsByClassName)
    t = document.getElementsByClassName('youtube');
  else
    var t = (function (t, e) {
      for (
        var a = [],
          s = new RegExp('(^| )' + e + '( |$)'),
          i = t.getElementsByTagName('*'),
          r = 0,
          n = i.length;
        r < n;
        r++
      )
        s.test(i[r].className) && a.push(i[r]);
      return a;
    })(document.body, 'youtube');
  for (var e = t.length, a = 0; a < e; a++) {
    var s = document.createElement('div');
    s.setAttribute('class', 'play'),
      t[a].appendChild(s),
      (t[a].onclick = function () {
        var t = document.createElement('iframe'),
          e =
            'https://www.youtube.com/embed/' +
            this.id +
            '?autoplay=1&autohide=1';
        this.getAttribute('data-params') &&
          (e += '&' + this.getAttribute('data-params')),
          t.setAttribute('src', e),
          t.setAttribute('frameborder', '0'),
          (t.style.width = this.style.width),
          (t.style.height = this.style.height),
          this.parentNode.replaceChild(t, this);
      });
  }
});
