import * as React from "react";
import "./styles.css";
import TimelinesChart from "timelines-chart";

export default function App() {
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

      //

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

    console.log(getRandomData());

    let existingData = [
        {
            "group": "Internal",
            "data": [
                { "label": "Christian Hand Over", "data": [{ "timeRange": ["2021-01-11", "2021-01-29"], "val": "Anne" }] },
                { "label": "Simon Hand Over", "data": [{ "timeRange": ["2021-01-11", "2021-02-19"], "val": "Sina" }] },
                { "label": "Hire Brisbane Developer", "data": [{ "timeRange": ["2021-03-01", "2021-03-26"], "val": "Sina,Craig" }] }
            ]
        },
        {
            "group": "DBYD",
            "data": [
                { "label": "XIM 6.1 (DBYD format update)", "data": [{ "timeRange": ["2021-02-22", "2021-03-05"], "val": "Craig" }] },
                { "label": "XIM 6.1.1 (DBYD Webhook)", "data": [{ "timeRange": ["2021-03-08", "2021-03-26"], "val": "Craig" }] }
            ]
        },
        {
            "group": "Connect",
            "data": [
                { "label": "XIC 6 Release", "data": [{ "timeRange": ["2021-01-11", "2021-03-19"], "val": "Anne,Karen" }] },
                { "label": "XIC SP1", "data": [{ "timeRange": ["2021-03-22", "2021-04-29"], "val": "Anne" }] },
                { "label": "XIC External Access", "data": [{ "timeRange": ["2021-05-01", "2021-05-30"], "val": "Craig,Anne" }] }
            ]
        },
        {
            "group": "NextGen",
            "data": [
                { "label": "Prototype 1", "data": [{ "timeRange": ["2021-06-01", "2021-09-01"], "val": "NextGen WG" }] },
                { "label": "MVP 1", "data": [{ "timeRange": ["2021-06-01", "2021-12-20"], "val": "Craig" }] }
            ]
        },
        {
            "group": "Misc",
            "data": []
        }
    ];

  React.useEffect(() => {
    const myChart = TimelinesChart();
      myChart.data(existingData)(document.getElementById("chart"));
  }, []);

  return (
    <div className="App">
      <div id="chart"></div>
    </div>
  );
}
