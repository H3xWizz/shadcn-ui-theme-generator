"use client"

import { addDays } from "date-fns"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

const start = new Date(2023, 5, 5)

export function CardsCalendar() {
    return (
        <Card className="flex justify-center col-span-1 h-fit">
            <CardContent className="p-0">
                <Calendar
                    numberOfMonths={1}
                    mode="range"
                    defaultMonth={start}
                    selected={{
                        from: start,
                        to: addDays(start, 8),
                    }}
                />
            </CardContent>
        </Card>
    )
}