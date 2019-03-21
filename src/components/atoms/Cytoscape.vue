<template>
  <div id="view" style="backgroundcolor=gray">
    <div id="cy"></div>
  </div>
</template>

<script>
var cytoscape = require("cytoscape");
var dagre = require("cytoscape-dagre");

cytoscape.use(dagre);

export default {
  name: "Cytoscape",
  components: {},
  created: function() {},
  data: function() {
    return {
      input: "",
      output: "",
      msg: "vue to cytoscape",
      count: 0
    };
  },
  methods: {
    add_node: function() {
      //      console.info(this.cy)
      this.cy.add([
        {
          group: "nodes",
          data: { id: "node" + this.count },
          position: { x: 300, y: 200 }
        },
        {
          group: "edges",
          data: {
            id: "edge" + this.count,
            source: "node" + this.count,
            target: "cat"
          }
        }
      ]);
    },
    view_init: function() {
      var new_element = this.$store.state.elements;

      var cy = cytoscape({
        elements: new_element,
        container: document.getElementById("cy"),

        boxSelectionEnabled: false,
        autounselectify: true,

        style: cytoscape
          .stylesheet()
          .selector("node")
          .css({
            content: "data(name)",
            "text-valign": "center",
            color: "white",
            "text-outline-width": 2,
            "text-outline-color": "#888",
            "background-color": "#888"
          })
          .selector(":selected")
          .css({
            "background-color": "black",
            "line-color": "black",
            "target-arrow-color": "black",
            "source-arrow-color": "black",
            "text-outline-color": "black"
          }),

        layout: {
          name: "dagre",
          padding: 0
        }
      });

      cy.on("tap", "node", function() {
        try {
          // your browser may block popups
          window.open(this.data("href"));
        } catch (e) {
          // fall back on url change
          window.location.href = this.data("href");
        }
      });
    }
  },
  computed: {
    word: function() {
      return this.$store.state.word;
    }
  },
  watch: {
    word: function() {
      this.view_init();
    }
  },
  mounted: function() {
    this.view_init();
  }
};
</script>
<style scoped>
#cy {
  width: 100%;
  height: 80%;
  position: absolute;
  top: 200px;
  left: 0px;
  text-align: left;
}

body {
  font: 14px helvetica neue, helvetica, arial, sans-serif;
}
</style>
