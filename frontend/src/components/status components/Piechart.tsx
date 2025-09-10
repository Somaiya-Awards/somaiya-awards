import { Legend, Pie, PieChart, Tooltip, Cell, ResponsiveContainer } from 'recharts'

function Piechart(props: any) {

    const data = props.data 

    const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50'];
    return (
        <div>
            <ResponsiveContainer  width={300} height={350}>
            <PieChart width={300} height={350} >
                <Pie data={data} dataKey={'formsFilled'} nameKey='group' fill="#8884d8" label>
                    {
                        //@ts-ignore
                        data.map((_, index) => <Cell fill={colors[index]} />)
                    }
                </Pie>
                <Legend />
                <Tooltip />
            </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Piechart
