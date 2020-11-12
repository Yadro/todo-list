export function cn(classNames: string[]): string {
    return classNames.filter(i => !!i).join(' ');
}
