<template>
  <div id="layer_switcher_window">
    <div id="layer_switcher_header">
      <h1 id="layer_switcher_header_title">背景レイヤー</h1>
      <div id="layer_switcher_close_button_wrapper">
        <button
          id="layer_switcher_close_button"
          @click="closeLayerSwitcher"
        >
          <i class="far fa-window-close"/>
        </button>
      </div>
    </div>

    <table id="layer_switcher_table">
      <thead>
        <tr>
          <td>フォルダ名</td>
          <td>レイヤー名</td>
          <td>透明度</td>
          <td>表示/非表示</td>
        </tr>
      </thead>
      <tbody/>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    closeLayerSwitcher: function() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
#layer_switcher_window {
  position: absolute;
  width: 100%;
  height: 100%;
  border: solid 5px #0da3e3;
  border-radius: 3px;
  background-color: #fff;
}

#layer_switcher_header {
  width: 100%;
  height: 18px;
  background-color: #0da3e3;
}

#layer_switcher_header h1,
#layer_switcher_header div,
#layer_switcher_header i {
  color: #fff;
  line-height: 18px;
}

#layer_switcher_header h1,
#layer_switcher_header div {
  float: left;
  margin: 0;
  vertical-align: middle;
  font-size: 16px;
}

#layer_switcher_header h1 {
  padding-left: 3px;
  width: calc(60% - 3px);
  text-align: left;
}

#layer_switcher_header div {
  margin-top: -1px;
  width: 40%;
  text-align: right;
}

#layer_switcher_header div i {
  font-size: 18px;
}

table {
  width: calc(100% + 2px);
  border-collapse: collapse;
  vertical-align: middle;
  font-size: 16px;
  line-height: 24px;
}

table tr {
  width: auto;
  height: 24px;
}

table td {
  padding-left: 3px;
  width: auto;
  border: solid 1px #0da3e3;
}

table td input[type="checkbox"] {
  display: none;
}

table td input[type="checkbox"] + label:before {
  color: #d3d3d3;
  content: "\f070";
}

table td input[type="checkbox"]:checked + label:before {
  color: #0a80b3;
  content: "\f06e";
}

table td input[type="range"] {
  width: 100%;
  height: 8px;
  outline: none;
  border-radius: 3px;
  background: #d3d3d3;
  opacity: 0.5;
  transition: opacity 0.2s;

  -webkit-appearance: none;
}

table td input[type="range"]::-webkit-slider-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #0da3e3;
  cursor: pointer;

  -webkit-appearance: none;
}

table td input[type="range"]::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4caf50;
  cursor: pointer;
}
</style>
