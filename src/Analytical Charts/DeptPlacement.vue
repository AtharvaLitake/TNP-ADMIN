<template>
<h1 class="text-h5 font-weight-bold text-primary text-center mb-1">Department Wise Statistics</h1>
    <div id="lineGraph" style="height: 350px; width:100%"></div>
</template>
<script>
import Plotly from "plotly.js-dist-min";
export default {
    data(){
        return{
            graphData: [],
            layout: {}
        }
    },
    mounted() {
        this.rendergraph()
    },
    methods: {
        rendergraph() {
            const graph = {
                x: ['CE', 'IT', 'ENTC'],
                y: [225, 140, 90],
                type: "bar",
                marker: { 
            color: ["#ffcc00","#081e7f",  "#ffcc00"] 
        },
                hovertemplate: "Semester %{x}<br>SGPA: %{y}<extra></extra>"
            }
            this.layout = {
                autosize: true,
                xaxis: {
                    title: {
                        text: "Engineering Branches",
                        font: { color: "#081e7f" },
                        standoff: 30,
                    },
                    titlefont: { color: "#081e7f" },
                    tickfont: { color: "#081e7f" },
                    automargin: true
                },
                yaxis: {
                    title: {
                        text: "Number of Students Placed",
                        font: { color: "#081e7f" },
                        standoff: 30,
                    },
                    titlefont: { color: "#081e7f" },
                    tickfont: { color: "#081e7f" },
                    automargin: true
                },
                bargap: 0.4, 
                bargroupgap: 0.1 ,
                margin: { l: 10, r: 10, t: 15, b: 10 }
            };
            this.graphData.push(graph)
            Plotly.newPlot("lineGraph", this.graphData, this.layout, {
                displayModeBar: false,
                scrollZoom: false,
                displaylogo: false,
                responsive: true 
            });
        }
    }
}
</script>
