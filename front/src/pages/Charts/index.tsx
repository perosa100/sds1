import React, { useEffect, useState } from 'react'

import './styles.css'
import Filters from './../../components/Filters/index'
import { barOptions, pieOptions } from './chart-options'
import Chart from 'react-apexcharts'
import api from './../../config/api'
import {
  buildBarSeries,
  getGenderChartData,
  getPlatformChartData
} from './helpers'

type PieChartData = {
  labels: string[]
  series: number[]
}

type BarChartData = {
  x: string
  y: number
}

const initialPieData = {
  labels: [],
  series: []
}
const Charts: React.FC = () => {
  const [barChartData, setBarChartData] = useState<BarChartData[]>([])
  const [platformData, setPlatformData] = useState<PieChartData>(initialPieData)
  const [genderData, setGenderData] = useState<PieChartData>(initialPieData)

  useEffect(() => {
    async function getData() {
      const recordsReponse = await api.get('records')
      const gamesReponse = await api.get('games')

      const barData = buildBarSeries(
        gamesReponse.data,
        recordsReponse.data.content
      )
      setBarChartData(barData)

      const platformChartData = getPlatformChartData(
        recordsReponse.data.content
      )
      console.log(platformChartData)

      setPlatformData(platformChartData)

      const genderChartData = getGenderChartData(recordsReponse.data.content)
      setGenderData(genderChartData)
    }
    getData()
  }, [])

  return (
    <div className="page-container">
      <Filters link="/records" linkText="Ver Tabela" />

      <div className="chart-container">
        <div className="top-related">
          <h1 className="top-related-title">Jogos mais Votados</h1>

          <div className="games-container">
            <Chart
              options={barOptions}
              type="bar"
              width="900"
              height="650"
              series={[{ data: barChartData }]}
            />
          </div>
        </div>
        <div className="charts">
          <div className="platform-chart">
            <h2 className="chart-title">Plataformas</h2>

            <Chart
              options={{ ...pieOptions, label: platformData?.labels }}
              type="donut"
              series={platformData?.series}
              width="350"
            />
          </div>

          <div className="gender-chart">
            <h2 className="chart-title">Gêneros</h2>
            <Chart
              options={{ ...pieOptions, label: genderData?.labels ,  }}
              type="donut"
              series={genderData?.series}
              width="350"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts
