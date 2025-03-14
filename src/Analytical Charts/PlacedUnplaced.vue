<template>
    <h1 class="text-h5 font-weight-bold text-primary text-center">Placement Distribution Statistics</h1>
    <div id="pieChart" style="height: 400px; width: 100%"></div>
</template>

<script>
import Plotly from "plotly.js-dist-min";

export default {
    data() {
        return {
            graphData: [],
            layout: {}
        };
    },
    mounted() {
        this.renderGraph();
    },
    methods: {
        renderGraph() {
            const graph = {
                labels: ["Placed", "Unplaced"],
                values: [425, 225],
                type: "pie",
                marker: {
                    colors: ["#081e7f", "rgba(8, 30, 127, 0.6)"]
                },
                hovertemplate: "%{label}: %{value} students<extra></extra>",
                showlegend: false,
                textinfo: "label+value",
                textposition: "inside",
                insidetextfont: {
                    size: 16,
                    color: "#fff"
                }
            };
            this.layout = {
                autosize: true,
                margin: { l: 70, r: 10, t: 10, b: 10 }
            };
            this.graphData = [graph];

            Plotly.newPlot("pieChart", this.graphData, this.layout, {
                displayModeBar: false,
                scrollZoom: false,
                displaylogo: false,
                responsive: true
            });
        }
    }
};
</script>
