"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"



const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]
/*This defines the name of the chart and color of the chart*/
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

function Demochart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">

      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} stroke="red" />
        <XAxis
            dataKey="month"
            tickLine={true}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
export default Demochart;