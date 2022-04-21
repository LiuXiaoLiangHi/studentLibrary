varcaution = false

functionsetCookie(name, value, expires, path, domain, secure)

{

    varcurCookie = name + "=" + escape(value) +

        ((expires) ? ";expires=" + expires.toGMTString() : "") +

        ((path) ? "; path=" + path : "") +

        ((domain) ? "; domain=" + domain : "") +

        ((secure) ? ";secure" : "")

    if (!caution || (name + "=" + escape(value)).length <= 4000) {

        document.cookie = curCookie

    }

    elseif(confirm("Cookie exceeds 4KB and will be cut!"))

    {

        document.cookie = curCookie

    }

}

functiongetCookie(name)

{

    varprefix = name + "="

    varcookieStartIndex = document.cookie.indexOf(prefix)

    if (cookieStartIndex == -1) {

        returnnull

    }

    varcookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)

    if (cookieEndIndex == -1) {

        cookieEndIndex = document.cookie.length

    }

    returnunescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))

}

functiondeleteCookie(name, path, domain)

{

    if (getCookie(name)) {

        document.cookie = name + "=" +

            ((path) ? "; path=" + path : "") +

            ((domain) ? "; domain=" + domain : "") +

            "; expires=Thu, 01-Jan-70 00:00:01 GMT"

    }

}

functionfixDate(date)

{

    varbase = newDate(0)

    varskew = base.getTime()

    if (skew > 0)  {

        date.setTime(date.getTime() - skew)

    }

}

varnow = newDate()

fixDate(now)

now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000)
0
varvisits = getCookie("counter")

if (!visits) {

    visits = 1;

}

else {

    visits = parseInt(visits) + 1;

}

setCookie("counter", visits, now)

//document.write("您是到访的第" + visits + "位用户！")

console.log("您是到访的第" + visits + "位用户！");

