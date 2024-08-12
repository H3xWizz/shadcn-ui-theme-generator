"use client"

import {Switch} from "@/components/ui/switch";
import {MoonIcon, SunIcon} from "lucide-react";
import {useTheme} from "next-themes";

export default function ThemeSwitch() {
    const { resolvedTheme, setTheme } = useTheme();

    return(
        <div className={'flex justify-center items-center gap-4'}>
            <MoonIcon/>
            <Switch checked={resolvedTheme === "light"} onCheckedChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}/>
            <SunIcon className={'fill-foreground'}/>
        </div>
    )
}