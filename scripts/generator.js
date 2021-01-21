(function() {
    document.getElementById("generateWidgetCode").onclick = function(e) {
        var widgetWidth = document.getElementById('widgetWidth').value;
        var widgetHeight = Math.round(widgetWidth * 0.625);
        var themeSelector = document.getElementById('themeSelector').value;
        var generatedCode = '<div id="widget"><\/div><script async id="reverbinator" src="https://www.joenasser.com/reverbinator/scripts/widget.js" data-height="' + widgetHeight + '" data-theme="' + themeSelector + '" data-width="' + widgetWidth + '"><\/script>';
        document.getElementById('generatedCode').value = generatedCode;
        e.preventDefault();
    };
})();
