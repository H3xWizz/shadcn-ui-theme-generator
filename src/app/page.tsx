import Header from "@/components/header";
import ExamplesView from "@/components/examples-view";
import ColorsChanger from "@/components/colors-changer";
import Link from "next/link";
import {GithubIcon} from "lucide-react";

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
            <div className={'fixed right-4 bottom-2 text-muted text-sm flex gap-2 items-center'}>
                <Link href={'https://github.com/H3xWizz'}>
                    <GithubIcon size={16} className={'transition-all hover:text-white'}/>
                </Link>
                <p>H3xWizz &copy; 2024</p>
            </div>
        </div>
    );
}
