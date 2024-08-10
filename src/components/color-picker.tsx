"use client"

import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import Dot from "@/components/dot";
import {HslStringColorPicker} from "react-colorful";
import {useColors} from "@/components/theme-color-provider";
import {ColorSet} from "@/types/colors";

export default function ColorPicker({mode, colorKey, color}: {
    mode: "dark" | "light";
    colorKey: keyof ColorSet;
    color?: string,
}) {
    const { setColors } = useColors();

    const changeColorHandler = (color: string) => {
        const formatedColor = color.slice(4, -1)
        console.log(formatedColor)
        setColors(prevState => ({
            ...prevState,
            [mode]: {
                ...prevState[mode],
                [colorKey]: formatedColor
            }
        }));
    }

    return color && (
        <Popover>
            <PopoverTrigger className={'bg-transparent'}>
                <Dot color={`hsl(${color})`}/>
            </PopoverTrigger>
            <PopoverContent className={'m-0 p-0'} asChild>
                <HslStringColorPicker className={'m-0 p-0'} color={`hsl(${color})`} onChange={e => changeColorHandler(e)}/>
            </PopoverContent>
        </Popover>
    )
}