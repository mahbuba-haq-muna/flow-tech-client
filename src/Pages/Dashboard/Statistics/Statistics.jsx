import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBoxOpen, FaRegCommentAlt, FaUsers } from "react-icons/fa";
import { PieChart, Pie, Cell, Legend} from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const Statistics = () => {
  const axiosSecure = useAxiosSecure()
  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats')
      return res.data
    }

  })

  const chartData = [
    {name: 'Products', value: stats?.products || 0},
    {name: 'Reviews', value: stats?.reviews || 0},
    {name: 'Users', value: stats?.users || 0}
  ]
  

  // custom shape 

  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

  return (

    <div>
      <h1></h1>
      {/* <div className="stats shadow gap-10">
      
        <div className="stat bg-gradient-to-r from-green-400 to-green-200 text-white">
          <div className="stat-figure text-3xl">
            <FaBoxOpen></FaBoxOpen>
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value">{stats.products}</div>
        </div>

        <div className="stat bg-gradient-to-r from-pink-500 to-pink-200 text-white">
          <div className="stat-figure text-3xl">
            <FaUsers></FaUsers>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
        </div>

        <div className="stat bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <div className="stat-figure text-3xl">
            <FaRegCommentAlt></FaRegCommentAlt>
          </div>
          <div className="stat-title">Reviews</div>
          <div className="stat-value">{stats.reviews}</div>
        </div>

      </div> */}

    {/* pie chart */}
      <div>
      <PieChart width={600} height={600}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
      </div>
    </div>
  )
};

export default Statistics;