<template>
  <div
    v-show="flag"
    id="popup"
    class="ol-popup"
    v-html="content"
  />
</template>

<script>
import Overlay from "ol/Overlay";
import { Select } from "ol/interaction";

export default {
  data() {
    return {
      popup: null,
      content: "",
      flag: false
    };
  },
  watch: {
    "$store.state.mapCreatedFlag": function() {
      this.createOverlay();
      this.createPopup();
    }
  },
  methods: {
    createOverlay: function() {
      const element = document.getElementById("popup");

      this.popup = new Overlay({
        element,
        autoPan: true,
        autoPanAnimation: {
          duration: 250
        }
      });

      this.$store.state.map.addOverlay(this.popup);
    },
    createPopup: function() {
      this.$store.state.map.on("singleclick", e => {
        this.popup.setPosition(e.coordinate);
      });

      const MySelect = new Select();
      this.$store.state.map.addInteraction(MySelect);

      MySelect.getFeatures().on(["add"], e => {
        const feature = e.element;
        const coordinate = feature.getGeometry().getCoordinates();
        let content = "";
        content += "<table border=1>";
        content += "<tr><td>number</td><td>" + feature.get("number") + "</td></tr>";
        content += "<tr><td>name</td><td>" + feature.get("name") + "</td></tr>";
        content += "<tr><td>address</td><td>" + feature.get("address") + "</td></tr>";
        content += "<tr><td>region</td><td>" + feature.get("region") + "</td></tr>";
        content += "<tr><td>commune</td><td>" + feature.get("commune") + "</td></tr>";
        content += "<tr><td>text</td><td>" + feature.get("text") + "</td></tr>";
        content += "</table>";

        this.content = content;
        this.flag = true;
      });

      MySelect.getFeatures().on(["remove"], e => {
        this.flag = false;
      });
    }
  }
};
</script>

<style scped>
.ol-popup {
  overflow: hidden;
  margin: 11px 0;
  padding: 0.25em 0.5em;
  border: 1px solid #69f;
  border-radius: 5px;
  background-color: #fff;
  font-size: 0.9em;
}

.ol-popup table {
  border: 0;
}

.ol-popup td {
  padding: 2px;
  border: 0;
  border-left: 2px solid rgba(0, 60, 136, 0.5);
}
</style>
