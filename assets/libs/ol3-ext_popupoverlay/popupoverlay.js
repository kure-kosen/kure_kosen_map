ol.Overlay.Popup = function (options) {
  var self = this;
  var elt = $("<div>");
  this.element = options.element = elt.get(0);
  this.offsetBox = options.offsetBox;
  var d = $("<div>").addClass('ol-overlaycontainer-stopevent').appendTo(elt);
  // Content
  this.content = $("<div>").addClass("content").appendTo(d).get(0);
  // Closebox
  this.closeBox = options.closeBox;
  this.onclose = options.onclose;
  this.onshow = options.onshow;
  $("<button>").addClass("closeBox").addClass("hasclosebox")
  .attr('type', 'button')
  .prependTo(d)
  .click(function() {
    self.hide();
  });
  // Stop event
  options.stopEvent=false;
  d.on("mousedown touchstart", function(e) {
    e.stopPropagation();
  })

  ol.Overlay.call(this, options);

//   call setPositioning first in constructor so getClassPositioning is called only once
  this.setPositioning("auto");
  this.setPopupClass(options.popupClass);
}

ol.inherits(ol.Overlay.Popup, ol.Overlay);

/**
* Get CSS class of the popup according to its positioning.
* @private
*/

//ポップアップしたかどうか
ol.Overlay.Popup.prototype.getClassPositioning = function () {
  var c = "";
  var pos = this.getPositioning();
  if (/bottom/.test(pos)) c += "ol-popup-bottom ";
  if (/top/.test(pos)) c += "ol-popup-top ";
  if (/left/.test(pos)) c += "ol-popup-left ";
  if (/right/.test(pos)) c += "ol-popup-right ";
  if (/^center/.test(pos)) c += "ol-popup-middle ";
  if (/center$/.test(pos)) c += "ol-popup-center ";
  return c;
}

/**
* Set CSS class of the popup.
* @param {string} class name.
* @api stable
*/
ol.Overlay.Popup.prototype.setClosebox = $(this.element).addClass("hasclosebox");//編集済み

/**
* Set the CSS class of the popup.
* @param {string} class name.
* @api stable
*/

ol.Overlay.Popup.prototype.setPopupClass = function (c) {
  $(this.element).removeClass().addClass("ol-popup default "+this.getClassPositioning()+" hasclosebox shadow");//編集済み
}

/**
* Add a CSS class to the popup.
* @param {string} class name.
* @api stable
*/
ol.Overlay.Popup.prototype.addPopupClass = function (c) {
  $(this.element).addClass(c);
}

/**
* Remove a CSS class to the popup.
* @param {string} class name.
* @api stable
*/
ol.Overlay.Popup.prototype.removePopupClass = function (c) {
  $(this.element).removeClass(c);
}

/**
* Remove a CSS class to the popup.
* @param {string} class name.
* @api stable
*/
ol.Overlay.Popup.prototype.setPositioning = function (pos) {
  if (pos === undefined)
    return;

  this.autoPositioning = pos.split('-');
  this.autoPositioning[1]="auto";//ただのautoだったらlengthが1だから2個目にautoを追加している

  pos = pos.replace(/auto/g,"center");
  this.setPositioning_(pos);
}

ol.Overlay.Popup.prototype.setPositioning_ = function (pos) {
  ol.Overlay.prototype.setPositioning.call(this, pos);
  $(this.element).removeClass("ol-popup-top ol-popup-bottom ol-popup-left ol-popup-right ol-popup-center ol-popup-middle");
  $(this.element).addClass(this.getClassPositioning());
}

/** Check if popup is visible
* @return {boolean}
*/
ol.Overlay.Popup.prototype.getVisible = function () {
  return $(this.element).hasClass("visible");
};

/**
* Set the position and the content of the popup.
* @param {ol.Coordinate|string} the coordinate of the popup or the HTML content.
* @param {string|undefined} the HTML content (undefined = previous content).
* @api stable
*/
ol.Overlay.Popup.prototype.show = function (coordinate, html) {
  if (!html && typeof(coordinate)=='string') {
    html = coordinate;
    coordinate = null;
  }

  var self = this;
  var map = this.getMap();
  if (!map) return;

  if (html && html !== this.prevHTML) {
    // Prevent flickering effect
    this.prevHTML = html;
    $(this.content).html("").append(html);
    // Refresh when loaded (img)
    $("*", this.content).on('load',function() {
      map.renderSync();
    })
  }

  if (coordinate) {
//===Auto positionning=======================================================
    if (this.autoPositioning) {
      var p = map.getPixelFromCoordinate(coordinate);
        var s = map.getSize();
        var pos=[];
        if (this.autoPositioning[0]=='auto') {
          pos[0] = (p[1]<s[1]/3) ? "top" : "bottom";
        } else {
          pos[0] = this.autoPositioning[0]
        };

        pos[1] = (p[0]<2*s[0]/3) ? "left" : "right";
        this.setPositioning_(pos[0]+"-"+pos[1]);
        if (this.offsetBox) {
          this.setOffset([this.offsetBox[pos[1]=="left"?2:0], this.offsetBox[pos[0]=="top"?3:1] ]);
        }
    }

//===Show the popup==========================================================
    this.setPosition(coordinate);
    $(this.element).parent().show();
    if (typeof (this.onshow) == 'function') this.onshow();
    this._tout = setTimeout (function() {
      $(self.element).addClass("visible");
    }, 0);
  }
}


//===Hide the popup==========================================================
ol.Overlay.Popup.prototype.hide = function () {
  if (this.getPosition() == undefined) return;
  if (typeof (this.onclose) == 'function') this.onclose();
  this.setPosition(undefined);
  if (this._tout) clearTimeout(this._tout);
  $(this.element).removeClass("visible");
}
