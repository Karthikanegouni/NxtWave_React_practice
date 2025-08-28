import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip } from "recharts"

const VaccinationCoverage = ({ data }) => {
  const DataFormatter = (number) => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="card">
      <h1>Vaccination Coverage</h1>

      <BarChart
        data={data}
        margin={{ top: 5 }}
        width={1000}
        height={500}
        className="chart"
      >
        <Tooltip />
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: "#6c757d",
            strokeWidth: 1,
          }}
        />

        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: "#6c757d",
            strokeWidth: 1,
          }}
        />

        <Bar
          dataKey="dose1"
          name="Dose 1"
          fill="#5a8dee"
          radius={[5, 5, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="Dose 2"
          fill="#f54394"
          radius={[5, 5, 0, 0]}
        />

        <Legend />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
