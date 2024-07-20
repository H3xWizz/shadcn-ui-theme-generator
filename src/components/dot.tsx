import {cn} from "@/lib/utils";

type Props = {
    className?: string
    color: string
}

export default function Dot({
    className,
    color
}: Props) {
    return (
        <div className={'flex justify-center items-center'}>
            <span style={{backgroundColor: color}}
                  className={cn(`inline-block h-5 w-5 rounded-full`, className)}></span>
        </div>
    )
}