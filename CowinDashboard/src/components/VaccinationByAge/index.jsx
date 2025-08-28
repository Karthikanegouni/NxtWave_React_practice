import {PieChart, Pie, Legend, Cell, Tooltip} from 'recharts'

const VaccinationByAge = ({data}) => (
  <div className="card">
    <h1>Vaccination by age</h1>

    <PieChart width={1000} height={300} className="chart">
      <Pie
        cx="50%"
        cy="50%"
        data={data}
        startAngle={0}
        endAngle={360}
        innerRadius="0%"
        outerRadius="70%"
        nameKey="age"
        dataKey="count"
      >
        <Cell fill="#2d87bb" />
        <Cell fill="#a3df9f" />
        <Cell fill="#64c2a6" />
      </Pie>
      <Tooltip/>
      <Legend
        iconType="circle"
        layout="horizontal"
        verticalAlign="bottom"
        align="center"
      />
    </PieChart>
  </div>
)

export default VaccinationByAge
