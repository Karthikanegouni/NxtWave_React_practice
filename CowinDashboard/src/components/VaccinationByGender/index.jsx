import {PieChart, Pie, Legend, Cell,Tooltip} from 'recharts'

const VaccinationByGender = ({data}) => (
  <div className="card">
    <h1>Vaccination by gender</h1>

    <PieChart width={1000} height={300} className="chart">
        
      <Pie
        cx="50%"
        cy="50%"
        data={data}
        startAngle={180}
        endAngle={0}
        innerRadius="40%"
        outerRadius="80%"
        nameKey="gender"
        dataKey="count"
      >
        
        <Cell fill="#f54394" />
        <Cell fill="#5a8dee" />
        <Cell fill="#2cc6c6" />
        
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

export default VaccinationByGender
