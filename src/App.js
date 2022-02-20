import * as React from "react";
import "./styles.css";
import TimelinesChart from "timelines-chart";
import { useEffect, useState } from "react";

export default function App() {
  const [files, setFiles] = useState("");
  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
        console.log("e.target.result", e.target.result);
        setFiles(e.target.result);
        populateChart(files);
    };
  };

  function getRandomData(ordinal = false) {
    const NGROUPS = 6,
      MAXLINES = 15,
      MAXSEGMENTS = 20,
      MAXCATEGORIES = 20,
      MINTIME = new Date(2013, 2, 21);
    const nCategories = Math.ceil(Math.random() * MAXCATEGORIES),
      categoryLabels = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ];

    return [...Array(NGROUPS).keys()].map((i) => ({
      group: "group" + (i + 1),
      data: getGroupData()
    }));

    function getGroupData() {
      return [...Array(Math.ceil(Math.random() * MAXLINES)).keys()].map(
        (i) => ({
          label: "label" + (i + 1),
          data: getSegmentsData()
        })
      );

      function getSegmentsData() {
        const nSegments = Math.ceil(Math.random() * MAXSEGMENTS),
          segMaxLength = Math.round((new Date() - MINTIME) / nSegments);
        let runLength = MINTIME;

        return [...Array(nSegments).keys()].map((i) => {
          const tDivide = [Math.random(), Math.random()].sort(),
            start = new Date(runLength.getTime() + tDivide[0] * segMaxLength),
            end = new Date(runLength.getTime() + tDivide[1] * segMaxLength);

          runLength = new Date(runLength.getTime() + segMaxLength);

          return {
            timeRange: [start, end],
            val: ordinal
              ? categoryLabels[Math.ceil(Math.random() * nCategories)]
              : Math.random()
            //labelVal: is optional - only displayed in the labels
          };
        });
      }
    }
  }

    function populateChart(data) {
        const chart = document.getElementById("chart");
        chart.innerHTML = "";
        const myChart = TimelinesChart();
        myChart.data(data)(document.getElementById("chart"));
    }

    React.useEffect(() => {
        if (files === "") {
            var json = require('./data.json'); 
            populateChart(json);
        } else {
            populateChart(JSON.parse(files));
        }
        
  }, [files]);

  return (
    <div className="App">
          <div id="chart"></div>
          <br />
          <input type="file" onChange={handleChange} />
    </div>
  );
}
