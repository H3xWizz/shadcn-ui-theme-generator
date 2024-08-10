import {cn} from "@/lib/utils";

type Props = {
    className?: string
    color: string
}

export default function Dot({
    className,
    color,
}: Readonly<Props>) {
    return (
        <div className={'flex justify-center items-center rounded-full bg-neutral-200 dark:bg-neutral-900 p-1'}>
            <span style={{backgroundColor: color}}
                  className={cn(`inline-block h-5 w-5 rounded-full`, className)}
            ></span>
        </div>
    )
}