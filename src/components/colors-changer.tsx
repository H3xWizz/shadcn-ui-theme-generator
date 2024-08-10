"use client"

import {Card, CardContent} from "@/components/ui/card";
import {useColors} from "@/components/theme-color-provider";
import { getObjectKeysArray } from "@/lib/get-object-keys-array"
import ThemeSwitch from "@/components/theme-switch";
import ColorPicker from "@/components/color-picker";
import {ColorSet} from "@/types/colors";
import {formatKeyForDisplay} from "@/lib/format-key-for-display";
import {Input} from "@/components/ui/input";

export default function ColorsChanger() {
    const { colors, setColors } = useColors()

    return (
        <div className={'flex flex-col h-full max-h-full rounded-xl overflow-hidden box-border border shadow-xl'}>
            <div className="w-full h-10 bg-card rounded-t px-6 m-0 flex justify-between items-center">
                <p>Name</p>
                <ThemeSwitch/>
            </div>
            <Card className="p-0 m-0 w-full h-full rounded-none max-h-full overflow-y-auto">
                <CardContent className="px-0 pb-1 m-0 flex flex-col gap-2">
                    <div className="px-2 pt-2 pb-2 m-0 flex flex-col gap-2">
                        {getObjectKeysArray(colors.light).map(colorKey => (
                            <div key={colorKey}
                                 className='h-14 w-full rounded px-4 flex justify-between items-center bg-[#dbdbdb] dark:bg-[#404040]'>
                                <p>{formatKeyForDisplay(colorKey)}</p>
                                {colorKey === 'radius' ? (
                                    <Input className={'w-8 p-0 text-center h-[55%] rounded'} value={colors.light.radius} max={2} min={0} type={'number'} onChange={e => setColors(prevState => ({
                                        ...prevState,
                                        light: {
                                            ...prevState.light,
                                            radius: Number(e.target.value)
                                    }}))}/>
                                ) : (
                                    <div className={'flex gap-4'}>
                                        <ColorPicker mode={'dark'} colorKey={colorKey as keyof ColorSet} color={String(colors.dark[colorKey as keyof ColorSet])}/>
                                        <ColorPicker mode={'light'} colorKey={colorKey as keyof ColorSet} color={String(colors.light[colorKey as keyof ColorSet])}/>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}