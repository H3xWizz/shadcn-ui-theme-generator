"use client"

import { useColors } from "@/components/theme-color-provider";

export function Styles() {
    const { colors } = useColors();

    return (
        <style>
            {`
                :root {
                    --background: ${colors.light.background};
                    --foreground: ${colors.light.foreground};
                    --card: ${colors.light.card};
                    --card-foreground: ${colors.light.cardForeground};
                    --popover: ${colors.light.popover};
                    --popover-foreground: ${colors.light.popoverForeground};
                    --primary: ${colors.light.primary};
                    --primary-foreground: ${colors.light.primaryForeground};
                    --secondary: ${colors.light.secondary};
                    --secondary-foreground: ${colors.light.secondaryForeground};
                    --muted: ${colors.light.muted};
                    --muted-foreground: ${colors.light.mutedForeground};
                    --accent: ${colors.light.accent};
                    --accent-foreground: ${colors.light.accentForeground};
                    --destructive: ${colors.light.destructive};
                    --destructive-foreground: ${colors.light.destructiveForeground};
                    --border: ${colors.light.border};
                    --input: ${colors.light.input};
                    --ring: ${colors.light.ring};
                    --radius: ${colors.light.radius}rem;
                    --chart-1: ${colors.light.chart1};
                    --chart-2: ${colors.light.chart2};
                    --chart-3: ${colors.light.chart3};
                    --chart-4: ${colors.light.chart4};
                    --chart-5: ${colors.light.chart5};
                }

                .dark {
                    --background: ${colors.dark.background};
                    --foreground: ${colors.dark.foreground};
                    --card: ${colors.dark.card};
                    --card-foreground: ${colors.dark.cardForeground};
                    --popover: ${colors.dark.popover};
                    --popover-foreground: ${colors.dark.popoverForeground};
                    --primary: ${colors.dark.primary};
                    --primary-foreground: ${colors.dark.primaryForeground};
                    --secondary: ${colors.dark.secondary};
                    --secondary-foreground: ${colors.dark.secondaryForeground};
                    --muted: ${colors.dark.muted};
                    --muted-foreground: ${colors.dark.mutedForeground};
                    --accent: ${colors.dark.accent};
                    --accent-foreground: ${colors.dark.accentForeground};
                    --destructive: ${colors.dark.destructive};
                    --destructive-foreground: ${colors.dark.destructiveForeground};
                    --border: ${colors.dark.border};
                    --input: ${colors.dark.input};
                    --ring: ${colors.dark.ring};
                    --chart-1: ${colors.dark.chart1};
                    --chart-2: ${colors.dark.chart2};
                    --chart-3: ${colors.dark.chart3};
                    --chart-4: ${colors.dark.chart4};
                    --chart-5: ${colors.dark.chart5};
                }
            `}
        </style>
    );
}
