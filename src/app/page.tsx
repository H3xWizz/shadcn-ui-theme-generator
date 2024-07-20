import {Card, CardContent} from "@/components/ui/card";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Dot from "@/components/dot";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {CardsActivityGoal} from "@/components/examples/cards/activity-goal";

export default function Home() {
    return (
        <div className="h-screen bg-background grid grid-cols-4 grid-rows-7 px-32 py-16">
            <div className="col-start-1 col-end-2 row-span-1 flex flex-col">
                <p className={'text-xl p-0 mb-[-5px]'}>shadcn/ui</p>
                <p className={'font-bold text-4xl p-0 m-0'}>Theme Generator</p>
                <div className="flex items-center gap-4 mt-1">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Dot className={cn('hover: cursor-pointer')} color="#525252"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Grey</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Dot className={cn('hover: cursor-pointer')} color="#DB2626"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Red</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Dot className={cn('hover: cursor-pointer')} color="#E9570C"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Orange</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Dot className={cn('hover: cursor-pointer')} color="#F9CB14"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Yellow</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Dot className={cn('hover: cursor-pointer')} color="#3382FF"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Blue</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Dot className={cn('hover: cursor-pointer')} color="#6D27D9"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Violet</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <Button
                        size={'sm'}
                        className={'border-[2px] bg-border text-white hover:text-border'}
                        variant={'default'}>
                        Copy code
                    </Button>
                </div>
            </div>
            <div className={'col-start-1 col-end-4 row-start-2 row-end-9 flex flex-wrap overflow-auto'}>
                <CardsActivityGoal/>
            </div>
            <div className='col-start-4 col-end-5 row-start-1 row-end-9 flex justify-center items-center'>
                <Card className="p-0 m-0 bg-border w-full h-full max-h-full overflow-y-auto">
                    <CardContent className="pt-1 pb-4 m-0">

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}