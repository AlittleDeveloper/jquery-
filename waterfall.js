$.fn.waterfall = function waterfall(option) {
    var defaultgap = {
        gap: 20
    }
    var defaultoption = $.extend(defaultgap, option);
    var _this = $(this),
        allOptionHetght = [],
        i,
        leng,
        minTop,
        j,
        k,
        lengTop,
        lengMax,
        minTopIndex,
        maxTop,
        gap = defaultoption.gap,
        options = _this.children(),
        width = options.width(),
        queueLeng = Math.floor(_this.width() / width);
    for (i = 0 , leng = options.length; i < leng; i++) {
        var height = $(options[i]).height();
        if (i < queueLeng) {
            $(options[i]).css({
                top: 0,
                left: (width + gap) * i
            });
            allOptionHetght.push(height);
        } else {
            minTop = allOptionHetght[0];
            minTopIndex = 0;
            for (j = 0 , lengTop = allOptionHetght.length; j < lengTop; j++) {
                if (allOptionHetght[j] < minTop) {
                    minTop = allOptionHetght[j];
                    minTopIndex = j;
                }
            }
            $(options[i]).css({
                top: minTop + gap,
                left: (width + gap) * minTopIndex
            });
            minTop += height + gap;
            allOptionHetght[minTopIndex] += height + gap;
        }
    }
    maxTop = allOptionHetght[0];
    for (k = 0 , lengMax = allOptionHetght.length; k < lengMax; k++) {
        if (allOptionHetght[k] > maxTop) {
            maxTop = allOptionHetght[k];
        }
    }
    _this.height(maxTop);
    return _this;
}
