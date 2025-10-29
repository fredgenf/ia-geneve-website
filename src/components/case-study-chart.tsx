
'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import type { ReactNode } from 'react';

interface CaseStudyChartProps {
  data: any[];
  dataKey: string;
  title: string;
  description: string;
  unit: string;
}

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--primary))",
  },
};

export function CaseStudyChart({ data, dataKey, title, description, unit }: CaseStudyChartProps) {
  
  const formattedData = data.map(item => ({
    ...item,
    value: item[dataKey]
  }));

  const yAxisLabel = dataKey.includes('(') ? dataKey.split('(')[0].trim() : dataKey;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <ResponsiveContainer>
            <BarChart data={formattedData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={Object.keys(data[0])[0]}
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis
                tickFormatter={(value) => `${value}${unit}`}
                label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', offset: 10 }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent 
                  labelFormatter={(label) => `${Object.keys(data[0])[0]}: ${label}`}
                  formatter={(value) => `${value}${unit}`}
                />}
              />
              <Bar dataKey="value" fill="var(--color-value)" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
