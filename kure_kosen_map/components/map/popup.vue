<template>
  <div
    v-show="flag"
    id="popup"
    class="ol-popup"
  >
    <table>
      <tr
        v-for="content in contents"
        :key="content">
        <td>{{ content.key }}</td><td>{{ content.property }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Overlay from "ol/Overlay";
import { Select } from "ol/interaction";

export default {
  data() {
    return {
      flag: false,
      popup: null,
      contents: []
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
        const keys = feature.getKeys().filter(v => v !== "geometry");

        this.contents = keys.map(v => {
          return {
            key: v,
            property: feature.get(v)
          };
        });

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
