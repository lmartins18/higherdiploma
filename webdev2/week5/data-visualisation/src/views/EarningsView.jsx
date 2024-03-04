import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"
import { useState, useEffect } from "react"
import axios from "axios";

const EarningsView = () => {
    const [options, setOptions] = useState();

    useEffect(() => {
        (async () => {
            const chartData = await axios("http://localhost:8080/earnings").then(resp => resp.data);
            const categories = chartData.map(category => category.country)
            const seriesData = chartData.map(category => category.earnings);
            console.log(seriesData);
            // Create the Highcharts configuration
            setOptions({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Earnings Per City',
                },
                xAxis: {
                    categories: categories,
                },

                yAxis: {
                    allowDecimals: false,
                    title: {
                        text: null
                    },
                    min: 0,
                    max: 10000000
                },
                series: [
                    {
                        dataSorting: {
                            enabled: true
                        },
                        name: 'Earnings',
                        data: seriesData
                    }
                ]
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
export default EarningsView

// REFERENCE: https://github.com/highcharts/highcharts-react