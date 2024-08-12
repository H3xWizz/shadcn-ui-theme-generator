import {CardsMetric} from "@/components/examples/cards/metric";
import {CardsChat} from "@/components/examples/cards/chat";
import {CardsCreateAccount} from "@/components/examples/cards/create-account";
import {CardsActivityGoal} from "@/components/examples/cards/activity-goal";
import {CardsCalendar} from "@/components/examples/cards/calendar";
import {CardsReportIssue} from "@/components/examples/cards/report-issue";
import {CardsDataTable} from "@/components/examples/cards/data-table";
import {CardsShare} from "@/components/examples/cards/share";
import {CardsPaymentMethod} from "@/components/examples/cards/payments-method";
import {CardsCookieSettings} from "@/components/examples/cards/cookie-setings";

export default function ExamplesView() {
    return (
        <div className={'max-h-full w-full pr-2 relative grid grid-cols-2 gap-4 pb-8 overflow-auto'}>
            <div className={'flex flex-col gap-4'}>
                <CardsMetric/>
                <div className={'grid grid-cols-2 gap-4'}>
                    <CardsChat/>
                    <CardsCreateAccount/>
                </div>
                <div className={'grid grid-cols-2 gap-4'}>
                    <CardsActivityGoal/>
                    <CardsCalendar/>
                </div>
                <CardsReportIssue/>
            </div>
            <div className={'flex flex-col gap-4'}>
                <CardsDataTable/>
                <CardsShare/>
                <div className={'grid grid-cols-2 gap-4'}>
                    <CardsPaymentMethod/>
                    <CardsCookieSettings/>
                </div>
            </div>
        </div>
    )
}