{
    function fontSize(){
        var width=document.documentElement.clientWidth;
        var fontSize=width/7.5
        document.documentElement.style.fontSize=fontSize+'px'
    }
    fontSize()
    window.onresize=function(){
        fontSize()
    }
}