import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"
import { useState, useEffect } from "react"
import axios from "axios";

const SalesView = () => {
    const [options, setOptions] = useState();

    useEffect(() => {
        (async () => {
            const chartData = await axios("http://localhost:8080/sales").then(resp => resp.data);

            // Convert data into series format
            const seriesData = chartData.map(({ country, data }) => ({
                name: country,
                data,
            }));

            // Create the Highcharts configuration
            setOptions({
                title: {
                    text: 'Sales Per City Data Over Time',
                },
                xAxis: {
                    categories: chartData[0].years,
                    title: {
                        text: 'Years',
                    },
                },
                yAxis: {
                    title: {
                        text: 'Data Value',
                    },
                },
                series: seriesData,
            });
        })()

    }, [])

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}
export default SalesView

// REFERENCE: https://github.com/highcharts/highcharts-react