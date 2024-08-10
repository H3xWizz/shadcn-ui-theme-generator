"use client"

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Dot from "@/components/dot";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {useColors} from "@/components/theme-color-provider";
import {ColorsExamples} from "@/config/colors-examples";
import {ColorValuesProps} from "@/types/colors";
import {useState} from "react";

export default function Header() {
    const { colors, setColors } = useColors()
    const [ buttonText, setButtonText ] = useState('Copy code')

    const changeColorHandler = (colorSchema: ColorValuesProps) => {
        setColors(prevState => ({
            light: {
                ...colorSchema.light,
                radius: prevState.light.radius
            },
            dark: {
                ...colorSchema.dark
            }
        }))
    }

    const copyButtonClickHandler = () => {
        navigator.clipboard.writeText(`
                @layer base {
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
                        --radius: ${colors.light.radius};
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
                }
            `)
        setButtonText('Copied!');

        setTimeout(() => {
            setButtonText('Copy code');
        }, 3000);
    }

    return(
        <div className="h-full w-full flex flex-col">
            <p className={'text-xl p-0 mb-[-5px]'}>shadcn/ui</p>
            <p className={'font-bold text-4xl p-0 m-0'}>Theme Generator</p>
            <div className="flex items-center gap-4 mt-1">
                <TooltipProvider>
                    {ColorsExamples.map(color => (
                        <Tooltip key={color.name}>
                            <TooltipTrigger onClick={() => changeColorHandler(color.colorState)}>
                                <Dot className={cn('hover: cursor-pointer')} color={color.hexCode}/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{color.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
                <Button
                    size={'sm'}
                    className={'border-[2px] bg-border text-white hover:text-border'}
                    variant={'default'}
                    onClick={() => copyButtonClickHandler()}>
                    {buttonText}
                </Button>
            </div>
        </div>
    )
}
