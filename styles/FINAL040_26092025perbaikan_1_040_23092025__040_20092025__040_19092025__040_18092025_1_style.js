var size = 0;
var placement = 'point';

var style_FINAL040_26092025perbaikan_1_040_23092025__040_20092025__040_19092025__040_18092025_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 6.000000000000003;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_FINAL040_26092025perbaikan_1_040_23092025__040_20092025__040_19092025__040_18092025_1_eval_expression(context) !== null) {
        labelText = String(exp_label_FINAL040_26092025perbaikan_1_040_23092025__040_20092025__040_19092025__040_18092025_1_eval_expression(context));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,26,28,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
