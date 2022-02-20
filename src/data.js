let data = [
  {
    startDate: new Date("Sun Dec 09 01:36:45 EST 2012"),
    endDate: new Date("Sun Dec 09 02:36:45 EST 2012"),
    taskName: "E Job",
    status: "RUNNING"
  },
  {
    startDate: new Date("Sun Dec 09 04:56:32 EST 2012"),
    endDate: new Date("Sun Dec 09 06:35:47 EST 2012"),
    taskName: "A Job",
    status: "RUNNING"
  },
  {
    startDate: new Date("Sun Dec 09 04:02:45 EST 2012"),
    endDate: new Date("Sun Dec 09 04:48:56 EST 2012"),
    taskName: "N Job",
    status: "RUNNING"
  },
  {
    startDate: new Date("Sun Dec 09 03:27:35 EST 2012"),
    endDate: new Date("Sun Dec 09 03:58:43 EST 2012"),
    taskName: "E Job",
    status: "SUCCEEDED"
  },
  {
    startDate: new Date("Sun Dec 09 01:40:11 EST 2012"),
    endDate: new Date("Sun Dec 09 03:26:35 EST 2012"),
    taskName: "A Job",
    status: "SUCCEEDED"
  },
  {
    startDate: new Date("Sun Dec 09 03:00:03 EST 2012"),
    endDate: new Date("Sun Dec 09 03:09:51 EST 2012"),
    taskName: "D Job",
    status: "SUCCEEDED"
  },
  {
    startDate: new Date("Sun Dec 09 01:21:00 EST 2012"),
    endDate: new Date("Sun Dec 09 02:51:42 EST 2012"),
    taskName: "P Job",
    status: "SUCCEEDED"
  },
  {
    startDate: new Date("Sun Dec 09 01:08:42 EST 2012"),
    endDate: new Date("Sun Dec 09 01:33:42 EST 2012"),
    taskName: "N Job",
    status: "FAILED"
  },
  {
    startDate: new Date("Sun Dec 09 00:29:48 EST 2012"),
    endDate: new Date("Sun Dec 09 00:44:50 EST 2012"),
    taskName: "D Job",
    status: "SUCCEEDED"
  }
];

let unique = [...new Set(data.map((item) => item.taskName))];
export const b = unique.map((i) => ({
  group: i,
  data: getData(i)
}));

function getData(group) {
  console.log(group);
  let b = data
    .filter((data) => data.taskName === group)
    .map((data, i) => {
      return {
        label: data.taskName + i,
        data: [
          {
            timeRange: [data.startDate, data.endDate],
            val: data.status
          }
        ]
      };
    });
  return b;
}

console.log(b);
