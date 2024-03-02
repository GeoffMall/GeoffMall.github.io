export enum ThemeClass {
    Light = 'bg-gray-100 text-black font-sans',
    Dark = 'bg-gray-800 text-white font-serif',
    Retro = 'bg-teal-400 text-yellow-900 font-mono',
    Neon = 'bg-black text-green-400 font-sans',
    Pastel = 'bg-pink-200 text-purple-800 font-serif',
    Minimalist = 'bg-white text-gray-800 font-sans',
    Corporate = 'bg-blue-700 text-gray-100 font-serif',
    Nature = 'bg-green-700 text-green-100 font-sans',
    Ocean = 'bg-blue-500 text-blue-100 font-serif'
}

export interface Theme {
    name: string;
    cssClass: ThemeClass
}

