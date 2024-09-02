'use client'

import { DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import {
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Tooltip,
  Legend
} from 'recharts'

export function ChartOverview () {
  const chartData = [
    { month: 'Janeiro', desktop: 186, mobile: 80 },
    { month: 'Fevereiro', desktop: 305, mobile: 200 },
    { month: 'Março', desktop: 237, mobile: 120 },
    { month: 'Abril', desktop: 73, mobile: 190 },
    { month: 'Maio', desktop: 209, mobile: 130 },
    { month: 'Junho', desktop: 214, mobile: 140 }
  ]

  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: '#4f46e5' // Azul mais escuro
    },
    mobile: {
      label: 'Mobile',
      color: '#3b82f6' // Azul mais claro
    }
  }

  return (
    <Card className='w-full md:w-1/2 md:max-w-[700px] bg-white shadow-lg rounded-lg'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-lg sm:text-xl text-gray-800'>
            Visão Geral das Vendas
          </CardTitle>
          <DollarSign className='ml-auto w-5 h-5 text-gray-700' />
        </div>
      </CardHeader>

      <CardContent className='p-4'>
        <BarChart
          width={600}
          height={330}
          data={chartData}
          margin={{ top: 20, right: 40, left: 30, bottom: 15 }}
        >
          <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
          <XAxis
            dataKey='month'
            tickLine={false}
            tickMargin={10}
            axisLine={{ stroke: '#e5e7eb' }}
            tickFormatter={value => value.slice(0, 3)}
            label={{
              value: 'Mês',
              position: 'bottom',
              offset: 0,
              fill: '#6b7280'
            }}
          />
          <YAxis
            axisLine={{ stroke: '#e5e7eb' }}
            tickLine={false}
            tickFormatter={value => `R$ ${value}`}
            label={{
              value: 'Vendas',
              angle: -90,
              position: 'left',
              fill: '#6b7280'
            }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', borderColor: '#e5e7eb' }}
          />
          <Legend verticalAlign='top' height={36} />
          <Bar
            dataKey='desktop'
            name={chartConfig.desktop.label}
            fill={chartConfig.desktop.color}
            radius={4}
          />
          <Bar
            dataKey='mobile'
            name={chartConfig.mobile.label}
            fill={chartConfig.mobile.color}
            radius={4}
          />
        </BarChart>
      </CardContent>
    </Card>
  )
}
