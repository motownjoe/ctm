(function() {
    function reverbinatorWidget() {
        var iframe = document.createElement('iframe');
        var script = document.getElementById('reverbinator');
        var widgetHeight = script.getAttribute('data-height');
        var widgetTheme = script.getAttribute('data-theme');
        var widgetWidth = script.getAttribute('data-width');
        iframe.setAttribute('src', 'https://www.joenasser.com/reverbinator/reverbinator.html?theme=' + widgetTheme);
        iframe.setAttribute('allow', 'microphone');
        iframe.setAttribute('height', widgetHeight);
        iframe.setAttribute('width', widgetWidth);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('scrolling', 'no');
        document.getElementById('widget').appendChild(iframe);
    }
    reverbinatorWidget();
})();
