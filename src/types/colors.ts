export type ColorSet = {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
    radius?: number;
    chart1: string;
    chart2: string;
    chart3: string;
    chart4: string;
    chart5: string;
};

export type ColorValuesProps = {
    light: ColorSet;
    dark: ColorSet;
};

export const colorValues: ColorValuesProps = {
    light: {
        background: '0 0% 100%',
        foreground: '20 14.3% 4.1%',
        card: '0 0% 100%',
        cardForeground: '20 14.3% 4.1%',
        popover: '0 0% 100%',
        popoverForeground: '20 14.3% 4.1%',
        primary: '24.6 95% 53.1%',
        primaryForeground: '60 9.1% 97.8%',
        secondary: '60 4.8% 95.9%',
        secondaryForeground: '24 9.8% 10%',
        muted: '60 4.8% 95.9%',
        mutedForeground: '25 5.3% 44.7%',
        accent: '60 4.8% 95.9%',
        accentForeground: '24 9.8% 10%',
        destructive: '0 84.2% 60.2%',
        destructiveForeground: '60 9.1% 97.8%',
        border: '20 5.9% 90%',
        input: '20 5.9% 90%',
        ring: '24.6 95% 53.1%',
        radius: 0.5,
        chart1: '12 76% 61%',
        chart2: '173 58% 39%',
        chart3: '197 37% 24%',
        chart4: '43 74% 66%',
        chart5: '27 87% 67%',
    },
    dark: {
        background: '20 14.3% 4.1%',
        foreground: '60 9.1% 97.8%',
        card: '20 14.3% 4.1%',
        cardForeground: '60 9.1% 97.8%',
        popover: '20 14.3% 4.1%',
        popoverForeground: '60 9.1% 97.8%',
        primary: '20.5 90.2% 48.2%',
        primaryForeground: '60 9.1% 97.8%',
        secondary: '12 6.5% 15.1%',
        secondaryForeground: '60 9.1% 97.8%',
        muted: '12 6.5% 15.1%',
        mutedForeground: '24 5.4% 63.9%',
        accent: '12 6.5% 15.1%',
        accentForeground: '60 9.1% 97.8%',
        destructive: '0 72.2% 50.6%',
        destructiveForeground: '60 9.1% 97.8%',
        border: '12 6.5% 15.1%',
        input: '12 6.5% 15.1%',
        ring: '20.5 90.2% 48.2%',
        chart1: '220 70% 50%',
        chart2: '160 60% 45%',
        chart3: '30 80% 55%',
        chart4: '280 65% 60%',
        chart5: '340 75% 55%',
    }
};
