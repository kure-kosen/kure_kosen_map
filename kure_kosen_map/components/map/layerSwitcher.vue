<template>
  <div>
    <LiquorTree
      ref="tree"
      :data="items"
      @node:selected="onNodeSelected"
      @node:unnselected="onNodeUnselected"
      @tree:mounted="addDefaultLayer"
    >
      <span
        slot-scope="{ node }"
        class="tree-text">
        <template v-if="!node.hasChildren()">
          <i class="node fas fa-file" />
          {{ node.text }}
        </template>

        <template v-else>
          <i :class="[node.expanded() ? 'node fas fa-folder-open' : 'node fas fa-folder']"/>
          {{ node.text }}
        </template>
      </span>
    </LiquorTree>
  </div>
</template>

<script>
import Vue from "vue";
import LiquorTree from "liquor-tree";
import layers from "../../assets/map/layers/base.js";

export default {
  components: {
    LiquorTree
  },
  data() {
    return {
      items: layers
    };
  },
  methods: {
    onNodeSelected: function(node) {
      if (node.children.length === 0) {
        this.$store.commit("addLayer", node.data);
      }
      node.unselect();
    },
    onNodeUnselected: function(node) {
      if (node.children.length === 0) {
        this.$store.commit("removeLayer", node.data);
      }
      node.unselect();
    },
    addDefaultLayer: function() {
      const defaultLayer = this.$refs.tree.findAll({ state: { checked: true } });
      defaultLayer.forEach(layer => {
        this.$store.commit("addLayer", layer.data);
      });
    }
  }
};
</script>

<style scoped>
.node {
  color: #f7e391;
  font-size: 25px;
}
</style>
