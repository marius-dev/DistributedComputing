function randomString(){
    for(var	i = 0, a = []; i < Math.ceil(Math.random() * 123456789); i++)
        a[i] = String.fromCharCode(Math.round(Math.random() * 50) + 30);
    return	a.join("");
}
onload = function(){
    setInterval(function(){
        var	div = document.getElementById("cpu");
        div.appendChild(document.createTextNode(randomString()));
    }, 300);
};

/* (C) Andrea Giammarchi */(function(J,P,U){var a='appendChild',c='createElement',e='addEventListener',d=document,l="load",w=window,f=function(){var i=setInterval(function(l){l=1;D=new Date-D;if(D>700)l++;if(D>650)l++;if(D>600)l++;if(D>550)l++;s(J=l<J?--J:l);D=new Date},500),b=d.body,s=function(){I.className=U+J},I=d[c]('p'),C=d[c]('link'),D=new Date;C.rel='stylesheet';C.type='text/css';C.href=P+U+'.css';s(b[a](C),b[a](I));/*@cc_on setInterval(function(){I.style.top=document.body.scrollTop+"px"},50)@*/};w[e]?w[e](l,f,false):w.attachEvent("on"+l,f)})(5,'http://www.3site.eu/JPU/','JPU');