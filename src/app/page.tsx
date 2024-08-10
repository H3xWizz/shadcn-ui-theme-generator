import Header from "@/components/header";
import ExamplesView from "@/components/examples-view";
import ColorsChanger from "@/components/colors-changer";

export default function Home() {
    return (
        <div className="h-screen bg-background grid grid-cols-[75%_25%] grid-rows-[12%_87%] gap-4 px-32 pt-16 overflow-hidden">
            <Header/>
            <div className={'row-start-2'}>
                <ExamplesView/>
            </div>
            <div className={'col-span-1 row-span-2 pb-12'}>
                <ColorsChanger/>
            </div>
        </div>
    );
}
